import {Entity} from 'aframe-react';
import React, { Component } from 'react';
import { switchPosition } from '../actions/index'
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

class Navigator extends Component {

	renderList() {
		return this.props.navigation.map((position, i) => {
			const payload = {position, camera: "userHeight: 7.8"}
			return (
				<Entity onClick={ () => this.props.switchPosition(payload) }
	      geometry='primitive: cylinder; radius: 1.5; height: .015'
	      material='color: #7e7e7f'
	      position={position}
	      key={i}>
	    </Entity>
			);
		});
	}

	render() {
		return(
			<Entity >
				{ this.renderList() }
			</Entity>
		);
	}m
}
// Anything returned from this function will end up as props on the BookList container
function mapStateToProps(state){
	// whatever is return will show up as props inside of BookList
	return {
		navigation: state.navigation
	}
};

function mapDispatchToProps(dispatch){
	// Whenever selectBook is called  the result should be passed to all the reducers
	return bindActionCreators({ switchPosition: switchPosition }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);