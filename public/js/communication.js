// Audio communication functionality for multiple users 

var skylink = new Skylink();

skylink.setLogLevel(4);

skylink.on('peerJoined', function(peerId, peerInfo, isSelf) {
  if(isSelf) return; 
  var aud = document.createElement('audio');
  aud.autoplay = true;
  aud.muted = false; 
  aud.id = peerId;
  document.body.appendChild(aud);
});

skylink.on('incomingStream', function(peerId, stream, isSelf) {
  if(isSelf) return;
  var aud = document.getElementById(peerId);
  attachMediaStream(aud, stream);
});

skylink.on('peerLeft', function(peerId) {
  var aud = document.getElementById(peerId);
  document.body.removeChild(aud);
});

skylink.on('mediaAccessSuccess', function(stream) {
  var aud = document.getElementById('myAudio');
  attachMediaStream(aud, stream);
});

skylink.init({
  apiKey: '91677f8c-96aa-4293-923f-0a7bf63cabe6',
  defaultRoom: 'vrMuseum'//getRoomId()
}, function (error, success) {
  if (error) {
    console.log('Failed retrieval for room information.<br>Error: ' + (error.error.message || error.error));
  } else {
    // console.log('Room information has been loaded. Room is ready for user to join.');
  }
});

(function start() {
  skylink.joinRoom({
    audio: true
  }, function (error, success) {
    if (error) {
      console.log('Failed joining room.<br>' +'Error: ' + (error.error.message || error.error));
    } else {
      // console.log('Joined Room')
    }
  });
})();

//=-= Helper Functions =-=//

function getRoomId() {
  var roomId = document.cookie.match(/roomId=([a-z0-9-]{36})/);
  if(roomId) {
    return roomId[1];
  }
  else {
    roomId = skylink.generateUUID();
    var date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    document.cookie = 'roomId=' + roomId + '; expires=' + date.toGMTString() + '; path=/';
    return roomId;
  }
};

export default skylink;
