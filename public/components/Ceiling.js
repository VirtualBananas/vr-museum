import 'aframe';
import React from 'react';
import { Entity } from 'aframe-react'

export default () => {
	return (
		<Entity>
			<Entity geometry="primitive: box; width: 60; height: 50" 
	      material="src: #ceiling-texture; transparent: true; opacity: 0.3"
	      position="0 5.5 0"
	      rotation="-90 0 0">
	    </Entity>
		</Entity>
	);
}