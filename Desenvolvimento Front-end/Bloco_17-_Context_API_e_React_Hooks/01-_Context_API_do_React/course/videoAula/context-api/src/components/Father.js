import React, { Component } from 'react'
import Daugther from './Daugther';

export default class Father extends Component {
  render() {
    return (
      <div>
        <h3>Eu sou o pai</h3>
        <Daugther />
      </div>
    )
  }
}