import {Entity} from 'aframe-react';
import React, {Component} from 'react';

const SphereClickPads = (props) => {
	// const positions = [[-25, 4.5, 10], [25, 2.5, 10], [-25, 2.75, -10], [25, 2.75, -10]];
	// const moveToPositions = [[-23, 4.5, 10], [23, 2.5, 10], [-23, 2.75, -10],[23, 2.75, -10]];

	const position = [ [[-25, 3.20, 10],[-20, null, 10]], [[25, 3.20, 10],[20, null, 10]], [[-25, 3.20, -10],[-20, null, -10]], [[25, 3.20, -10],[20, null, -10]] ]

	//The position array will be a tuple, the first is the position where the click pad is located, 
	//the second will be the location where the camera will be relocated when the pad is clicked.

	const pads = position.map((position, i) => {

		return (
			<Entity
					geometry = 'primitive: cylinder; height: 0.03; radius: .3; height: 0.01'
					material = "color: green; opacity: 0.5"
					position = {position[0]}
					onClick  = {() => props.changeCamView(position[1])}
					key = {i}>
	    </Entity>
		)
	});

console.log('pads', pads)
	return (
		<Entity>{ pads }</Entity>
	)
	

}; 

export default SphereClickPads;

