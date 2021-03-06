import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Route } from "react-router-dom";
import Details from "./Components/Details/Details";
import Loading from "./Loading.js";
const url =
  "https://developer.nps.gov/api/v1/parks?limit=50&fields=images,addresses&api_key=guuGRau30aelpIGdZ0fQVdkkXIu6SE6u2glDAAOl";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parks: [],
      done: false
    };
  }
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);

        let parksData = response.data;
        this.setState({ parks: parksData });
        this.setState({ done: true });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <Nav />
        <main>
          {!this.state.done ? (
            <Route path="/" exact component={Loading} />
          ) : (
            <Route path="/" exact render={() => <Home {...this.state} />} />
          )}
          <Route
            path="/park/:id"
            exact
            render={routerProps => <Details {...this.state} {...routerProps} />}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
