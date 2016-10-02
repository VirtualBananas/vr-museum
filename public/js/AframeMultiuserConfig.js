import skylink from './communication'

const socket = io();
const ROOM = 'MUSEUM';

const aframeConfig = {
  system:{
    init: function () {
      let sceneEl = this.sceneEl;
      skylink.on('incomingMessage', function(data, peerId, peerInfo, isSelf){
        data = JSON.parse(data.content);

        data.Queue.forEach(function syncState (entity) {
          var el = sceneEl.querySelector('#' + entity.id);
          if (!el) {
            var parentEl = sceneEl.querySelector('#' + entity.parentId) || sceneEl;
            el = document.createElement('a-entity');
            el.setAttribute('id', entity.id);
            parentEl.appendChild(el);
          }
          entity.components.forEach(function setAttribute (component) {
            el.setAttribute(component[0], component[1]);
          });
        });
      })
      // receaving array of avatars and adding them to the scene.
    
    },
    // Queue to store avatars
    Queue: [],
    // Add avatar to Queue 
    addSend: function (el, sendComponents) {
      if (!el.getAttribute('id')) {
        el.setAttribute('id', avatarId());
      }
      // Send avatar as a function so it can be called to retrive current attributes and location
      this.Queue.push(function send () {
        return {
          id: el.getAttribute('id'),
          parentId: el.parentNode.getAttribute('id'),
          components: sendComponents.map(function getAttribute (componentName) {
            return [componentName, el.getComputedAttribute(componentName)];
          })
        };
      });
    },
    // this emits the broadcast with the array of avatars every 10ms.
    tick: function (time, dt) {
      if (time - this.time < 10) { return; }
      this.time = time;

      skylink.sendP2PMessage(JSON.stringify({
        room: ROOM, 
        Queue: this.Queue.map(function call (getSend) {
          return getSend();
        })
      }));
    }
  },

  component: {
    schema: {
      url: {type: 'string'},
      send: {type: 'array', default: ['position', 'rotation']}
    },
    init: function () {
      let data = this.data;
      let el = this.el;
      let system = this.system;
      if (el.isScene || !data.send.length) { return; }
      system.prototype.addSend(el, data.send);
    },
  }
};

function avatarId() {
  let text = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 5; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
};

export default aframeConfig;