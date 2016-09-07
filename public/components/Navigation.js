import {Entity} from 'aframe-react';
import React, {Component} from 'react';

const Navigator = (props) => {
	const navPosition = [[-20, -2, -12], [-10, -2, -12], [0, -2, -12], [10, -2, -12],[20, -2, -12], [-20, -2, -6], [-10, -2, -6], [0, -2, -6], [10, -2, -6], [20, -2, -6],[-20, -2, 6], [-10, -2, 6], [0, -2, 6], [10, -2, 6], [20, -2, 6],
    [-20, -2, 12], [-10, -2, 12], [0, -2, 12], [10, -2, 12], [20, -2, 12]];

	const navCircles = navPosition.map((position, i) => {

		return (
			<Entity onClick={ () => props.changeCamView(position) }
	      geometry='primitive: cylinder; radius: 1.5; height: .015'
	      material='color: #72757c'
	      position={position}
	      key={i}>
	    </Entity>
		)
	});

	return (
		<Entity>{ navCircles }</Entity>
	)
	

} 

export default Navigator;