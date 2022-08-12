import "./App.css";
import Collection from "./components/Collection";
import { Component } from "react";
import React from "react";
import Nav from "./components/Nav";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Nav />
        <Collection />
      </div>
    );
  }
}

export default App;
