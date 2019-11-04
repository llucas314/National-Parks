import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main></main>
        <Footer />
      </div>
    );
  }
}

export default App;
