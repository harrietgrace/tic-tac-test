// app/components/app.jsx
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Game from './game.jsx!'

class App extends Component {

  render () {
    return <div>
    	<Game />
    </div>
  }
}

export default App