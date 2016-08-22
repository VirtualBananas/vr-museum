import 'aframe';
import {Animation, Entity, Scene} from 'aframe-react';

import React from 'react';
import ReactDOM from 'react-dom';


class BoilerplateScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  //var changeColor = function(){ }
  changeColor () {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  render () {
    return (
      <Scene>
        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

      <Entity>
        <Entity geometry="primitive: plane; width: 30; height: 20" 
                material={{color: "black"}}
                position="0 -2 0"
                rotation="-90 0 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 10" 
                material={{color: "orange"}}
                position="-10 0 -10"
                rotation="0 90 0">
        </Entity>

        <Entity geometry="primitive: cylinder; openEnded: true; thetaLength: 180" 
                material="color: red; side: double"
                position="0 0 -10"
                rotation="0 90 0"
                radius="5"
                scale="5 10 5">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 10" material={{color: "orange"}}
                position="10 0 -10"
                rotation="0 90 0">
        </Entity>


        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 30" material={{color: "#4CC3D9"}}
                position="0 0 10"
                rotation="0 90 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 20" material={{color: "#4CC3D9"}}
                position="-15 0 0"
                rotation="0 0 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 20" material={{color: "#4CC3D9"}}
                position="-15 0 0"
                rotation="0 0 0">
        </Entity>

        <Entity geometry="primitive: box; width: 0.5; height: 10; depth: 20" material={{color: "#4CC3D9"}}
                position="15 0 0"
                rotation="0 0 0">
        </Entity>

        <Entity geometry="primitive: box" material={{color: this.state.color}}
                onClick={this.changeColor}
                position="0 1 -5">
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
        </Entity>

      </Entity>



      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));