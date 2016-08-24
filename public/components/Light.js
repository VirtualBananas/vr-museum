import { Entity, Animation } from 'aframe-react';
import React from 'react';

const Light = () => {

	return (
		<Entity>
			<Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>
			
		</Entity>
	)
};

export default Light;