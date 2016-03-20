import React, { Component } from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class App extends Component {

  render() {
    return (
      <div>
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}