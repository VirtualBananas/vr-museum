import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { getHelloWorld } from './actions'

class Index extends Component {

  render() {
    return (
      <div>Hello World</div>
    )
  }
}


export default Index


