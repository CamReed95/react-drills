import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image";

class App extends Component {
  render() {
  return (
    <div className="App">
        <Image url={ "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" } />
    </div>
  );
  }
}

export default App;
