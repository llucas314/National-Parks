import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import parksData from "./data/parks.json";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parks: parksData
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <main>
          <Route path="/" exact render={() => <Home {...this.state} />} />
          <Route
            path="/park/:id"
            exact
            render={() => <Home {...this.state} />}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
