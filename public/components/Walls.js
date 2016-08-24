import { Entity } from 'aframe-react';
import React from 'react';

const allWalls = [
	{
		geometry: "primitive: box; width: 0.5; height: 10; depth: 20",
		material: "src: #wood-texture", 
		position: "-20 0 -20", 
		rotation:"0 90 0"
	}, 

	{ geometry: "primitive: box; width: 0.5; height: 10; depth: 20", material:"src: #wood-texture", position: "20 0 -20", rotation: "0 90 0"
	},

	{ geometry: "primitive: box; width: 0.5; height: 10; depth: 60", material: "src: #wood-texture", position: "0 0 20", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 0.5; height: 10; depth: 40", material: "src: #wood-texture", position: "-30 0 0", rotation: "0 0 0"
	},  
	{ geometry: "primitive: box; width: 0.5; height: 10; depth: 40", material: "src: #wood-texture", position: "30 0 0", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 0.5; height: 10; depth: 15", material:"src: #wood-texture", position: "-23.5 0 0", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 0.5; height: 10; depth: 15", material:"src: #wood-texture", position: "23.5 0 0", rotation: "0 90 0"
	}
];




const Walls = ({ material}) => {
	const createdAllwalls = allWalls.map((obj, i) => {
		return (
			<Entity geometry={obj.geometry} 
				material={material}
	      position={obj.position}
	      rotation={obj.rotation}
	      key={i}>
	    </Entity>
		)
	})
	return (
		<Entity>
			<Entity geometry="primitive: cylinder; openEnded: true; thetaLength: 180" 
        material="side: double; src: #wood-texture"
        position="0 0 -20"
        rotation="0 90 0"
        radius="5"
        scale="5 10 10">
        </Entity>
      { createdAllwalls }
		</Entity>
	)
}

export default Walls;