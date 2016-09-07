var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var User = require('./db/models/usermodel');



// as we are now proxying outside localhost
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

// connection for production database
// mongoose.connect('mongodb://museum:museum12345@ds043027.mlab.com:43027/vrmuseum');
// // connection local
mongoose.connect('mongodb://localhost/users');
app.use(express.static(publicPath));

//notice that you will not see a physical bundle.js because webpack-dev-server runs it from memory
var bundle = require('./server/compiler.js')
bundle()

// socket connection
io.on('connection', function(socket){
// join room
  socket.on('ready', function(data){
    socket.join(data.museum);
  });

  socket.on('broadcast', function (data) {
    console.log('data in side broadcast', data)
    socket.to(data.room).broadcast.emit('allAvatars', data);
  });

})

//express now processes all requests to localhost:8080
//app.all is a special routing method used for loading middleware functions
app.all('/build/*', function (req, res) {
  proxy.web(req, res, {
      target: 'http://localhost:8080'
  })
})

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...')
});

server.listen(port, function () {
  console.log('Server running on port ' + port)
});