import React, { Component } from 'react'
import './App.css'
import {createStore} from 'redux'
import todoApp from './reducers'
import {
  addToDo,
  toggleToDo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

const store = createStore(todoApp)

console.log(store.getState())

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
