import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';

import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './public/components/Camera';
import Cursor from './public/components/Cursor';
import Sky from './public/components/Sky';
import Navigator from './public/components/Navigation';
import Walls from './public/components/Walls';
import Globe from './public/components/Globe';
import Light from './public/components/Light';
import Floor from './public/components/Floor';


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
        <img id="wood-texture" src="./assets/wood_1.jpg" />
        <img id="pano" src="./assets/pano_full.jpg" />
        <img id="yosemite1" src="./assets/yosemite1.jpg" />
        <img id="yosemite2" src="./assets/yosemite2.jpg" />
        <img id="yosemite3" src="./assets/yosemite3.jpg" />
        <img id="yosemite4" src="./assets/yosemite4.jpg" />

        
      </a-assets>

        <Camera position={this.state.cameraPos} >

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




        <Entity geometry="primitive: box; width: 5; height: 5; depth: 0.5" 
                material="src: #yosemite1"
                position="0 1.6 -24.7"
                rotation="0 0 0">
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


    

        <Globe world={"src: #world-texture; side: double"} changeCamView= { this.camViewdif.bind(this) }  />
        

    

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



        <Entity geometry="primitive: box; width: 1.245; height: .75; depth: .0625" 
                material= "color: white"
                position="-23.5 1 10"
                rotation="-45 90 0"
                onClick={() => {this.camViewdif([-25,2.5,10])}}>
        </Entity>

        <Entity geometry="primitive: box; width: 1.245; height: .75; depth: .0625" 
                material= "color: white"
                position="23.5 1 10"
                rotation="45 90 0"
                onClick={() => {this.camViewdif([25, 2.5, 10])}}>
        </Entity>



        <Entity geometry="primitive: box; width: 1.245; height: .75; depth: .0625" 
                material= "color: white"
                position="-23.5 1 -10"
                rotation="-45 90 0"
                onClick={() => {this.camViewdif([-25,2.5,-10])}}>
        </Entity>

        <Entity geometry="primitive: box; width: 1.245; height: .75; depth: .0625" 
                material= "color: white"
                position="23.5 1 -10"
                rotation="45 90 0"
                onClick={() => {this.camViewdif([25, 2.5, -10])}}>
        </Entity>




        <Entity geometry="primitive: cylinder; height: 0.03"
                material="color: green; transparent: true; opacity: 0.5"
                position="-25 2.75 10"
                radius="0.03"
                onClick={() => {this.camViewdif([-20,2.5, 10])}}
                >
        </Entity>


        <Entity geometry="primitive: cylinder; height: 0.03"
                material="color: green; transparent: true; opacity: 0.5"
                position="25 2.75 10"
                radius="0.03"
                onClick={() => {this.camViewdif([20, 2.5, 10])}}
                >
        </Entity>


        <Entity geometry="primitive: cylinder; height: 0.03"
                material="color: green; transparent: true; opacity: 0.5"
                position="-25 2.75 -10"
                radius="0.03"
                onClick={() => {this.camViewdif([-20, 2.75, -10])}}
                >
        </Entity>


        <Entity geometry="primitive: cylinder; height: 0.03"
                material="color: green; transparent: true; opacity: 0.5"
                position="25 2.75 -10"
                radius="0.03"
                onClick={() => {this.camViewdif([20, 2.75, -10])}}
                >
        </Entity>


        <Walls material= "src: #wood-texture" />


        <Navigator changeCamView={ this.camViewdif.bind(this) } />

      </Entity>
    </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
