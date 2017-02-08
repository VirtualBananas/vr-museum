import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React, {Component} from 'react';

import Cursor from './Cursor';
import Sky from './Sky';
import Camera from '../containers/camera_container';
import Navigator from '../containers/navigation_container';
import Walls from './Walls';
import Light from './Light';
import Floor from './Floor';
import SphereClickPads from './SphereClickPad'
import Placards from './Placards';
import Pictures from './Pictures';
import Ceiling from './Ceiling';
import AframeAssets from './AframeAssets';
import AframeConfig from '../js/AframeMultiuserConfig';

export default class App extends Component {


  componentDidMount() {
    AFRAME.registerSystem('broadcast', AframeConfig.system);
    // Broadcast component for A-Frame.
    AFRAME.registerComponent('broadcast', AframeConfig.component)
  };

  render () {
    return (
      <Scene broadcast="">
        <a-assets>
         <AframeAssets /> 
        </a-assets>
      <Entity>
        <Camera>
          <Cursor fuse="true" max-distance="10" timeout="1500" color="red"/>
        </Camera> 
        <Navigator /> 
        <Sky/>
        <Light />
        <Ceiling />
        <Walls material= "src: #stone-texture" />
        <Pictures />

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #stone-texture"
                position="25 -1 10"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #ancient360; side: double"
                rotation="0 215 0"
                position="25 2.5 10"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #stone-texture"
                position="-25 -1 10"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #renaissance360; side: double"
                rotation="0 25 0"
                position="-25 2.5 10"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #stone-texture"
                position="-25 -1 -10"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #WWII360; side: double"
                position="-25 2.5 -10"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Entity geometry="primitive: cylinder; height: 4.5"
                material="src: #stone-texture"
                position="25 -1 -10"
                radius="0.75">
        </Entity>

        <Entity geometry="primitive: sphere" 
                material="src: #modern360; side: double"
                rotation="0 180 0"
                position="25 2.5 -10"
                radius="1"
                scale="1.25 1.25 1.25">
        </Entity>

        <Placards   />

        <SphereClickPads />

        <Entity scale="0.00008 0.00008 0.00008" position="0 1 0" obj-model="obj: #map-rome-obj; mtl: #map-rome-mtl"></Entity>
        <Entity
          geometry="primitive: cylinder"
          material="color: #7e7e7F"
          position="0 -1.5 0"
          radius="1.5"
          scale="2 4.5 2">
      </Entity>
        <Floor material="src: #floor-texture" />

        

      </Entity>
    </Scene>
    );
  }
};


