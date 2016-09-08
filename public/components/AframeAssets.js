import 'aframe';
import React from 'react';
import {Entity} from 'aframe-react';

export default () => {
	return(
		<div>

      <a-mixin id="avatar"
                geometry="primitive: box; depth: 0.3; height: 0.3; width: 0.3"
                material="color: #222"
                template="src: #avatar-template"></a-mixin>

      <a-mixin id="arm" geometry="primitive: box; depth: 0.08; height: 0.5; width: 0.08"
                          material="color: #222; shader: flat"></a-mixin>
      <a-mixin id="eye" geometry="primitive: circle"
                          material="shader: flat; side: double"></a-mixin>

      <script id="avatar-template" type="text/html-template">
          <a-entity rotation="0 180 0">
            <a-entity mixin="eye" geometry="radius: 0.08"
                      material="shader: flat; side: double"
                      position="-0.1 0.225 0.15">
              <a-entity mixin="eye" geometry="radius: 0.02"
                        material="color: #222"
                        position="0 0 0.03"></a-entity>
            </a-entity>
            <a-entity mixin="eye" geometry="radius: 0.08" position="0.1 0.225 0.15">
              <a-entity mixin="eye" geometry="radius: 0.02"
                        material="color: #222" position="0 0 0.03"></a-entity>
            </a-entity>
          </a-entity>
          <a-entity class="arms" position="0 -0.3 0">
            <a-entity mixin="arm" position="-0.3 -0.25 0" rotation="0 0 -10"></a-entity>
            <a-entity mixin="arm" position="0.3 -0.25 0" rotation="0 0 10"></a-entity>
          </a-entity>
      </script>

	<img id="world-texture" src="./assets/world.jpg" />
      <img id="floor-texture" src="./assets/image2.jpg" />
      <img id="ceiling-texture" src="./assets/color-rush.png" />
      <img id="wood-texture" src="./assets/stoneWall.jpg" />

      <img id="ancient1" src="./assets/photos/ancient_1.jpg" />
      <img id="ancient2" src="./assets/photos/ancient_2.jpg" />
      <img id="ancient3" src="./assets/photos/ancient_3.png" />
      <img id="ancient4" src="./assets/photos/ancient_4.jpg" />
      <img id="ancient5" src="./assets/photos/ancient_5.jpg" />
      <img id="ancient6" src="./assets/photos/ancient_6.jpg" />
      <img id="ancient7" src="./assets/photos/ancient_7.jpg" />
      <img id="ancient8" src="./assets/photos/ancient_8.jpg" />
      <img id="ancient10" src="./assets/photos/ancient_10.jpg" />

      <img id="ancientPano" src="./assets/photos/ancient_pano.jpg" />

      <img id="renaissance1" src="./assets/photos/renaissance_1.jpg" />
      <img id="renaissance2" src="./assets/photos/renaissance_2.jpg" />
      <img id="renaissance3" src="./assets/photos/renaissance_3.jpg" />
      <img id="renaissance4" src="./assets/photos/renaissance_4.jpg" />
      <img id="renaissance5" src="./assets/photos/renaissance_5.jpg" />

      <img id="WWII-1" src="./assets/photos/WWII_1.gif" />
      <img id="WWII-2" src="./assets/photos/WWII_2.jpg" />
      <img id="WWII-3" src="./assets/photos/WWII_3.jpg" />
      <img id="WWII-4" src="./assets/photos/WWII_4.jpg" />
      <img id="WWII-5" src="./assets/photos/WWII_5.jpg" />

      <img id="modern1" src="./assets/photos/modern_1.jpg" />
      <img id="modern2" src="./assets/photos/modern_2.jpg" />
      <img id="modern3" src="./assets/photos/modern_3.jpg" />
      <img id="modern4" src="./assets/photos/modern_4.jpg" />
      <img id="modern5" src="./assets/photos/modern_5.jpg" />

      <img id="modernPanoInt" src="./assets/photos/modern_pano_int.jpg" />

      <a-asset-item id="map-rome-obj" src="./assets/models/map-rome.obj"></a-asset-item>
      <a-asset-item id="map-rome-mtl" src="./assets/models/map-rome.mtl"></a-asset-item>

		</div>
	)
}