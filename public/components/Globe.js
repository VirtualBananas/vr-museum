import { Entity, Animation } from 'aframe-react';
import React from 'react';

const Globe = ({ world, changeCamView }) => {

	return (
		<Entity>

			<Entity onClick={ () => changeCamView([0, 2, 6]) }
	      geometry='primitive: cylinder'
	      material='color: green; transparent: true; opacity: 0.5'
	      position="0 .5 0"
	      radius='.5'
	      scale='.5 .03 .5'>
	    </Entity>
			
			<Entity geometry="primitive: sphere" 
        material={world}
        position={[0,2.25,0]}
        radius="1.75"
        scale="2.75 2.75 2.75">
	      <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 0"/>
	    </Entity>

	    <Entity onClick={ () => changeCamView([0, 2, 0]) } geometry="primitive: cylinder"
        material="color: #7e7e7F"
        position="0 -1.5 0"
        radius="1.5"
        scale="2 0.75 2" 
        >
	    </Entity>
		</Entity>
	)
};

export default Globe;