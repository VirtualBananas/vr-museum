import {Entity} from 'aframe-react';
import React, {Component} from 'react';

const Placards = (props) => {

//position matrix are triples with the format [[x, y, z], [rotatio x, rotation y, rotation z ], [camera position after click]]
	const positions = [ [[-23.5, 1, 10], [-45, 90, 0], [-25, 2.5, 10]],
									    [[23.5, 1, 10], [45, 90, 0], [25, 2.5, 10]], 
									    [[-23.5, 1, -10], [-45, 90, 0], [-25, 2.5, 10]], 
									    [[23.5, 1, -10], [45, 90, 0], [25, 2.5, -10]]
									  ];

	const placards = positions.map((positions, i) => {

		return (
			<Entity 
				geometry = "primitive: box; width: 1.245; height: 0.75; depth: 0.0625"
				material = "color: white"
				position = {positions[0]}
				rotation = {positions[1]}
				onClick={() => props.changeCamView(positions[2])}
				key = {i}>
			</Entity>
		)

	});

		return (<Entity> {placards} </Entity>)
};

export default Placards
