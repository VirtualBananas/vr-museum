import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';

import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './public/components/Camera';
import Cursor from './public/components/Cursor';
import Sky from './public/components/Sky';
import Navigator from './public/components/Navigation';


class BoilerplateScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cameraPos: [0, 0, 10]}
  }

  camViewdif(position){
    let pos1 = position[0];
    let pos2 = 2;
    let pos3 = position[2];
    this.setState({ cameraPos: [pos1, pos2, pos3]});

  }

  render () {
    return (
      <Scene >

      <a-assets>
        <img id="world-texture" src="./assets/world.jpg" />
        <img id="floor-texture" src="./assets/image2.jpg" />
        <img id="ceiling-texture" src="./assets/color-rush.png" />
        <img id="sky-texture" src="./assets/class.jpg" />
        <img id="wood-texture" src="./assets/wood_1.jpg" />
        <img id="pano" src="./assets/pano_full.jpg" />

        <img id="yosemite1" src="./assets/yosemite1.jpg" />
        <img id="yosemite2" src="./assets/yosemite2.jpg" />
        <img id="yosemite3" src="./assets/yosemite3.jpg" />
        <img id="yosemite4" src="./assets/yosemite4.jpg" />
      </a-assets>

        <Camera position={this.state.cameraPos} >

          <Cursor fuse="true" max-distance="10" timeout="1500"/>
        </Camera>

        <Sky/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

      <Entity>
        <Entity geometry="primitive: plane; width: 60; height: 50" 
                material="src: #floor-texture"
                position="0 -2 0"
                rotation="-90 0 0">
        </Entity>

        <Entity geometry="primitive: box; width: 60; height: 50" 
                material="src: #ceiling-texture; transparent: true; opacity: 0.3"
                position="0 5.5 0"
                rotation="-90 0 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 20" 
                material="src: #wood-texture"
                position="-20 0 -20"
                rotation="0 90 0">
        </Entity>

        <Entity geometry="primitive: cylinder; openEnded: true; thetaLength: 180" 
                material="side: double; src: #wood-texture"
                position="0 0 -20"
                rotation="0 90 0"
                radius="5"
                scale="5 10 10">
        </Entity>

        <Entity geometry="primitive: box; width: 5; height: 5; depth: 0.5" 
                material="src: #yosemite1"
                position="0 1.6 -24.7"
                rotation="0 0 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 20" 
                material="src: #wood-texture"
                position="20 0 -20"
                rotation="0 90 0">
        </Entity>


        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 60" material="src: #wood-texture"
                position="0 0 20"
                rotation="0 90 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 40" material="src: #wood-texture"
                position="-30 0 0"
                rotation="0 0 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 40" material="src: #wood-texture"
                position="30 0 0"
                rotation="0 0 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 15" material="src: #wood-texture"
                position="-23.5 0 0"
                rotation="0 90 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 15" material="src: #wood-texture"
                position="23.5 0 0"
                rotation="0 90 0">
        </Entity>


        <Entity geometry="primitive: box; width: 5; height: 5; depth: 0.5" 
                material="src: #yosemite1"
                position="22 1.6 0.3"
                rotation="0 0 0">
        </Entity>

        <Entity geometry="primitive: box; width: 5; height: 5; depth: 0.5" 
                material="src: #yosemite2"
                position="29.7 1.6 6"
                rotation="0 90 0">
        </Entity>

        <Entity geometry="primitive: box; width: 5; height: 5; depth: 0.5" 
                material="src: #yosemite3"
                position="29.7 1.6 14"
                rotation="0 90 0">
        </Entity>

        <Entity geometry="primitive: box; width: 5; height: 5; depth: 0.5" 
                material="src: #yosemite4"
                position="22 1.6 19.7"
                rotation="0 0 0">
        </Entity>


        <Entity geometry="primitive: sphere" 
                material="src: #world-texture; side: double"
                position={[0,2.75,0]}
                radius="1.5"
                scale="2.75 2.75 2.75">
          <Animation attribute="rotation" dur="10000" repeat="indefinite" to="0 360 0"/>
        </Entity>

        <Entity geometry="primitive: cylinder"
                material="src: #wood-texture"
                position="0 -1 0"
                radius="1.5"
                scale="2 0.75 2">
        </Entity>


        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="-23.5 -1 6"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="-23.5 2.5 6"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="-23.5 -1 12"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="-23.5 2.5 12"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>
    
        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="23.5 -1 6"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="23.5 2.5 6"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="23.5 -1 12"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="23.5 2.5 12"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="-23.5 -1 -6"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="-23.5 2.5 -6"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="-23.5 -1 -12"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="-23.5 2.5 -12"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="23.5 -1 -6"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="23.5 2.5 -6"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="23.5 -1 -12"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="23.5 2.5 -12"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>


           <Navigator changeCamView={ this.camViewdif.bind(this) } />

      </Entity>
    </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
