import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // THIS binding of a method
    // this.changeMessage = this.changeMessage.bind(this)
    // this.increaseCounter = this.increaseCounter.bind(this)
    this.state = {
      students: [
        { id: 1, name: 'Stud1', infected: false },
        { id: 2, name: 'Stud2', infected: false },
        { id: 3, name: 'Stud3', infected: false },
        { id: 4, name: 'Stud4', infected: false },
        { id: 5, name: 'Stud5', infected: false }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Corona Game</h1>
        </header>
        <main>{/* List of students should be displayed here... */}</main>
        <footer>Reset</footer>
      </div>
    );
  }
}

export default App;
