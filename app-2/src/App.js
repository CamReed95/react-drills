import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      things: ['car', 'house', 'garage']
    };
  }

  render() {
    let thingsPoster = this.state.things.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{thingsPoster}</div>;
  }
}

export default App;