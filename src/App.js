import React, { Component } from 'react';
import './App.css';

class Hackers extends Component {
  render() {
    return (
      <div>
        <h2>Number of hackers:</h2>
        <p>{this.props.hackers}</p>
        <button onClick={this.props.clickHandler}>+1</button>
      </div>
    );
  }
}

class Name extends Component {
  render() {
    return (
      <div>
        <h2>Change name:</h2>
        <input type="text" onKeyPress={this.props.keyHandler} onChange={this.props.inputHandler} value={this.props.response}/>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hackers: 999,
      name: "TechTogether 2019",
      response: "",
    }
  }

  buttonClick = (event) => {
    this.setState({
      hackers: this.state.hackers + 1,
    });
  }

  updateInput = (event) => {
    this.setState({
      response: event.target.value,
    });
  }

  keyPress = (event) => {
    if (event.key == 'Enter') {
      this.setState({
        name: this.state.response,
        response: "",
      });
    }
  }


  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <p>Welcome to {this.state.name}.</p>
        <Hackers
          hackers = {this.state.hackers}
          clickHandler = {this.buttonClick} 
        />
        <Name 
          inputHandler = {this.updateInput}
          keyHandler = {this.keyPress}
          response = {this.state.response}
        />
      </div>
    );
  }
}

export default App;
