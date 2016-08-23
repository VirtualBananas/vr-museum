import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity>
    <Entity position="0 0 8" camera="userHeight: 1.8" look-controls="" wasd-controls="" {...props}/>
  </Entity>
);
