import { Entity } from 'aframe-react';
import React from 'react';

 
const allPictures = [
	{
		geometry: "primitive: box; width: 5; height: 5; depth: 0.5",
		material: "src: #yosemite1", 
		position: "22 1.6 0.3", 
		rotation:"0 0 0"
	}, 

	{ geometry: "primitive: box; width: 5; height: 5; depth: 0.5", material:"src: #yosemite2", position: "29.7 1.6 6", rotation: "0 90 0"
	},

	{ geometry: "primitive: box; width: 5; height: 5; depth: 0.5", material: "src: #yosemite3", position: "29.7 1.6 14", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 5; height: 5; depth: 0.5", material: "src: #yosemite4", position: "22 1.6 19.7", rotation: "0 0 0"
	},  
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material: "src: #africa1", position: "-22 1.6 19.7", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #africa2", position: "-29.7 1.6 5", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #africa3", position: "-29.7 1.6 15", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #africa5", position: "-22 1.6 0.3", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 10; height: 5; depth: 0.5", material:"src: #china2", position: "23.5 0 0", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #china1", position: "23.5 0 0", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 7.5; height: 5; depth: 0.5", material:"src: #china3", position: "23.5 0 0", rotation: "0 90 0"
	}, 
	{ geometry: "primitive: box; width: 11.5; height: 5; depth: 0.5", material:"src: #china4", position: "23.5 0 0", rotation: "0 0 0"
	}, 
	{ geometry: "primitive: box; width: 20; height: 5; depth: 0.5", material:"src: #serengeti", position: "0 1.6 19.7", rotation: "0 0 0"
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
                material="side: double; src: #riceTerrace_pano"
                position="0 1.6 -19.7"
                rotation="0 90 0"
                radius="5"
                scale="5 5 10">
      </Entity>
      { createdAllPictures }
		</Entity>
	)
}

export default Pictures;