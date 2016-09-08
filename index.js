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
import Ceiling from './public/components/Ceiling';
import AframeAssets from './public/components/AframeAssets';
import AframeConfig from './public/js/AframeMultiuserConfig';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = { cameraPos: [0, 0, 10],
                   clickReady: true
                  }
  };

  camViewdif(position){
    
    if(this.state.clickReady === true){       
      let pos1 = position[0];
      let pos2 = 2;
      let pos3 = position[2];
      this.setState({ cameraPos: [pos1, pos2, pos3]});

      this.setState({clickReady: false});
      var that = this;
      setTimeout(function(){that.setState({clickReady: true})}, 2000);
    };
  };
  
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
        <Camera  position={this.state.cameraPos} >
          <Cursor fuse="true" max-distance="10" timeout="1500" color="red"/>
        </Camera>  
        <Sky/>
        <Light />
        <Ceiling />
        <Walls material= "src: #wood-texture" />
        <Pictures />
        <Entity scale="0.00008 0.00008 0.00008" position="0 1 0" obj-model="obj: #map-rome-obj; mtl: #map-rome-mtl"></Entity>
        <Entity
          geometry="primitive: cylinder"
          material="color: #7e7e7F"
          position="0 -1.5 0"
          radius="1.5"
          scale="2 4.5 2">
      </Entity>
        <Floor material="src: #floor-texture" />
        <Navigator changeCamView={ this.camViewdif.bind(this) } />
      </Entity>
    </Scene>
    );
  }
};

ReactDOM.render(<App/>, document.querySelector('.scene-container'));
