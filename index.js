import React, { Component } from 'react'
import { render } from 'react-dom'
import 'aframe';
import {Entity, Scene} from 'aframe-react';

class HelloWorld extends React.Component {
  render () {
    return (
      <Scene>
        <Entity geometry={{primitive: 'box'}} material="color: red" position={[0, 0, -5]}/>
      </Scene>
    );
  }
}

render(<HelloWorld/>, document.getElementById('app'))