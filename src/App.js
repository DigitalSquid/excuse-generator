import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      nouns: ['dog', 'cat', 'car', 'boiler', 'wife',  'girlfriend', 'son', 'daughter', 'goldfish', 'grandmother', 'uncle', 'neighbour'],
      reasons: ['is sick', 'has broken down', 'needs a service', 'is hungover', 'has overslept', 'is leaking', 'has fallen over', 'needs to be put down', 'has been stolen', 'has gone missing', 'stole my shoes', 'lost my keys', 'died last night', 'has food poisoning', 'won\'t start', 'doesn\'t feel well', 'has got a fever'],
      excuse: {
        'noun': null,
        'reason': null
      }
		};
  }

  getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  createExcuse() {
    const noun = this.getRandomValue(this.state.nouns);
    const reason = this.getRandomValue(this.state.reasons);
    this.setState(prevState => ({
      excuse: {
          ...prevState.excuse,
          noun: noun,
          reason: reason
      }
    }))
  }

  componentDidMount() {
    this.createExcuse();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Excuse Generator</h1>
        </header>
        <main>
        <button
            onClick={() => this.createExcuse()}
          >
            New Excuse
          </button>
          <p>Sorry. I'm unable to come to work today because...
          <br />my {this.state.excuse.noun} {this.state.excuse.reason}</p>
        </main>
      </div>
    );
  }
}

export default App;
