import React, { Component } from 'react'
import ReactAtellier from 'react-atellier'

const componentList = []

export default class AtellierWrapper extends Component {
  render () {
    return (
      <ReactAtellier components={componentList} />
    )
  }
}
