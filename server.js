var express = require('express');
var app = express();
var path = require('path');
// var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
var port = process.env.PORT || 3000;


// as we are now proxying outside localhost
// var proxy = httpProxy.createProxyServer({
//   changeOrigin: true
// });

app.use(express.static(publicPath));

//notice that you will not see a physical bundle.js because webpack-dev-server runs it from memory
// var bundle = require('./server/compiler.js')
// bundle()

// //express now processes all requests to localhost:8080
// //app.all is a special routing method used for loading middleware functions
// app.all('/build/*', function (req, res) {
//   proxy.web(req, res, {
//       target: 'http://localhost:8080'
//   })
// })

// proxy.on('error', function(e) {
//   console.log('Could not connect to proxy, please try again...')
// });
var server = require('http').Server(app);
server.listen(port, function () {
  console.log('Server running on port ' + port)
});