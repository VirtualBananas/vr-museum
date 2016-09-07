import { Entity } from 'aframe-react';
import React from 'react';

 
const allPictures = [
	{
		geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5",
		material: "src: #ancient10", 
		position: "22 1.6 0.3", 
		rotation:"0 0 0"
	}, 
	{ geometry: "primitive: box; width: 5; height: 5; depth: 0.5", material:"src: #ancient2", position: "29.7 1.6 6", rotation: "0 90 0"
	},
	{ geometry: "primitive: box; width: 5; height: 5; depth: 0.5", material: "src: #ancient8", position: "29.7 1.6 14", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 8; height: 5; depth: 0.5", material: "src: #ancient6", position: "21 1.6 19.7", rotation: "0 0 0"
	},  
	{ geometry: "primitive: box; width: 8; height: 5; depth: 0.5", material: "src: #renaissance1", position: "-21 1.6 19.7", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #renaissance2", position: "-29.7 1.6 5", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #renaissance3", position: "-29.7 1.6 15", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #renaissance4", position: "-22 1.6 0.3", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 10; height: 5; depth: 0.5", material:"src: #WWII-1", position: "-20 1.6 -19.7", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #WWII-2", position: "-29.7 1.6 -5", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #WWII-3", position: "-29.7 1.6 -15", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 10; height: 5; depth: 0.5", material:"src: #WWII-5", position: "-22 1.6 -0.3", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 10; height: 5; depth: 0.5", material:"src: #modern1", position: "20 1.6 -19.7", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #modern2", position: "29.7 1.6 -5", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #modern3", position: "29.7 1.6 -15", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 10; height: 5; depth: 0.5", material:"src: #modern4", position: "22 1.6 -0.3", rotation: "0 0 0"
	},
	{ geometry: "primitive: box; width: 25; height: 5; depth: 0.5", material:"src: #ancientPano", position: "0 1.6 19.7", rotation: "0 0 0"
	}
];

const Pictures = ({ material}) => {

	const createdAllPictures = allPictures.map((obj, i) => {
		return (
			<Entity geometry={obj.geometry} 
				material={obj.material}
	      position={obj.position}
	      rotation={obj.rotation}
	      key={i}>
	    </Entity>
		)
	});

	return (
		<Entity>
			<Entity geometry="primitive: cylinder; openEnded: true; thetaLength: 180" 
        material="side: double; src: #modernPanoInt"
        position="0 1.6 -19.7"
        rotation="0 90 0"
        radius="5"
        scale="5 5 10">
      </Entity>
      { createdAllPictures }
		</Entity>
	);
}

export default Pictures;