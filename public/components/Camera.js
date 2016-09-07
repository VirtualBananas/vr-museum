import {Entity} from 'aframe-react';
import React, {Component} from 'react';

class Camera extends Component {
	constructor(props){
		super(props);
	}	
	render(){
		return (
		  <Entity>
		    <Entity broadcast="send: geometry, material, position, rotation" material="color: blue" position={this.props.position} camera="userHeight: 1.8" look-controls wasd-controls {...this.props}/>
		  </Entity>
		);
	}
}

export default Camera;