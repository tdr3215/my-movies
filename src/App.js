import "./App.css";
import Collection from "./components/Collection";
import { Component } from "react";
import React from "react";


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        
        <Collection />
      </div>
    );
  }
}

export default App;
