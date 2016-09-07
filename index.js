import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Camera from './public/components/Camera';
import Cursor from './public/components/Cursor';
import Sky from './public/components/Sky';
import Navigator from './public/components/Navigation';
import Walls from './public/components/Walls';
import Globe from './public/components/Globe';
import Light from './public/components/Light';
import Floor from './public/components/Floor';
import SphereClickPads from './public/components/SphereClickPad'
import Placards from './public/components/Placards';
import Pictures from './public/components/Pictures';
import AframeConfig from './public/js/AframeMultiuserConfig'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { cameraPos: [0, 0, 10]}
  }

  camViewdif(position){
    let pos1 = position[0];
    let pos2 = 2;
    let pos3 = position[2];
    this.setState({ cameraPos: [pos1, pos2, pos3]});

  };

  componentDidMount(){
    AFRAME.registerSystem('broadcast', AframeConfig.system);
 // Broadcast component for A-Frame.
    AFRAME.registerComponent('broadcast', AframeConfig.component)
  }


  render () {
    return (
      <Scene broadcast="">
      
      <a-assets>
        <img id="world-texture" src="./assets/world.jpg" />
        <img id="floor-texture" src="./assets/image2.jpg" />
        <img id="ceiling-texture" src="./assets/color-rush.png" />
        <img id="wood-texture" src="./assets/wood_1.jpg" />
        <img id="pano" src="./assets/pano_full.jpg" />
        <img id="yosemite1" src="./assets/yosemite1.jpg" />
        <img id="yosemite2" src="./assets/yosemite2.jpg" />
        <img id="yosemite3" src="./assets/yosemite3.jpg" />
        <img id="yosemite4" src="./assets/yosemite4.jpg" />
        <img id="africa1" src="./assets/africa1.jpg" />
        <img id="africa2" src="./assets/africa2.jpg" />
        <img id="africa3" src="./assets/africa3.jpg" />
        <img id="africa4" src="./assets/africa4.jpg" />
        <img id="africa5" src="./assets/africa5.jpg" />
        <img id="serengeti" src="./assets/serengeti_pano.jpg" />
        <img id="china1" src="./assets/china1.jpg" />
        <img id="china2" src="./assets/china2.jpg" />
        <img id="china3" src="./assets/china3.jpg" />
        <img id="china4" src="./assets/china4.jpg" />
        <img id="riceTerrace_pano" src="./assets/riceTerrace_pano.jpg" />
      </a-assets>

        <Camera  position={this.state.cameraPos} >
          <Cursor fuse="true" max-distance="10" timeout="1500" color="red"/>
        </Camera>
        <Sky/>
        <Light />
      <Entity>
        <Floor material="src: #floor-texture" />

        <Entity geometry="primitive: box; width: 60; height: 50" 
                material="src: #ceiling-texture; transparent: true; opacity: 0.3"
                position="0 5.5 0"
                rotation="-90 0 0">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="-25 -1 10"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="-25 2.5 10"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="25 -1 10"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="25 2.5 10"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="-25 -1 -10"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="-25 2.5 -10"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #wood-texture"
                position="25 -1 -10"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #pano; side: double"
                position="25 2.5 -10"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Globe world={"src: #world-texture; side: double"} changeCamView= { this.camViewdif.bind(this) }  />
        <Walls material= "src: #wood-texture" />
        <Placards changeCamView = { this.camViewdif.bind(this) } />
        <SphereClickPads changeCamView={ this.camViewdif.bind(this) } />
        <Navigator changeCamView={ this.camViewdif.bind(this) } />
      </Entity>
    </Scene>

    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.scene-container'));
