import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  render () {
    return (
      <a-scene>

      <a-entity position="0 0 8" camera="userHeight: 1.8" look-controls='' wasd-controls='' ></a-entity>


      <a-entity id="building">

        
        <a-plane position="0 0 0" rotation="-90 0 0" width="30" height="30" color="grey"></a-plane>

     
        <a-box position="0 5 0" rotation="-90 0 0" width="30" height="30" color="grey"></a-box>

       
        <a-box id="farWallLeft" position="-10 0 -10" rotation="0 90 0" width="0.5" height="10" depth="10" color="orange"></a-box>

        <a-entity id="farWallCurved" position="0 0 -10" rotation="0 90 0" scale="5 10 5" radius="5" geometry="primitive: cylinder; openEnded: true; thetaLength: 180" material="side: double; color: red"></a-entity>

        <a-box id="farWallRight" position="10 0 -10" rotation="0 90 0" width="0.5" height="10" depth="10" color="orange"></a-box>

       
        <a-box id="nearWall" position="0 0 10" rotation="0 90 0" width="0.5" height="10" depth="30" color="#4CC3D9"></a-box>

     
        <a-box id="leftWall" position="-15 0 0" rotation="0 0 0" width="0.5" height="10" depth="20" color="#4CC3D9"></a-box>

       
        <a-box id="rightWall" position="15 0 0" rotation="0 0 0" width="0.5" height="10" depth="20" color="#4CC3D9"></a-box>

  

        <a-box id="innerWallLeft" position="-11.75 0 0" rotation="0 90 0" width="0.5" height="10" depth="7.5" color="#4CC3D9"></a-box>

       

        <a-box id="innerWallRight" position="11.75 0 0" rotation="0 90 0" width="0.5" height="10" depth="7.5" color="#4CC3D9"></a-box>

      </a-entity>

   

      
      <a-entity >
      
        <a-sphere id="globe" color="blue" position="0 3 0" radius="1.75">
          
        </a-sphere>

      </a-entity>

      <a-cylinder id="centerPedestal" position="0 0 0" radius="1.5" height="1.5" color="#8A2BE2"></a-cylinder>

      <a-sky color="#ECECEC"></a-sky>

    </a-scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
