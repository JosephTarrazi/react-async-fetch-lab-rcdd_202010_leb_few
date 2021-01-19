<<<<<<< HEAD
import React, { Component } from 'react'

class App extends Component {

  state = {
      peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ peopleInSpace: people }))

  }

}

export default App
=======
// create your App component here
// create your App component here
import React, { Component } from 'react'

class App extends Component {

  state = {
      peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ peopleInSpace: people }))

  }

}

export default 
>>>>>>> fd590457ca993fd9b28b12486b0356eef05ef3e3
