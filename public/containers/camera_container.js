import {Entity} from 'aframe-react';
import React, {Component} from 'react';
import { connect } from 'react-redux';

class Camera extends Component {
 
	render(){
		return (
		  <Entity>
		  	<Entity broadcast="send: geometry, material, position, rotation" material="color: black" position={this.props.position} camera={this.props.camera} look-controls wasd-controls {...this.props}/>
		  </Entity>
		);
	}
}

function mapStateToProps(state){
	return {
		position: state.currentPosition.position,
		camera: state.currentPosition.camera
	}
}

export default connect(mapStateToProps)(Camera);