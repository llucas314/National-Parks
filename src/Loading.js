import React, { Component } from "react";
import ReactLoading from "react-loading";
import "./Loading.css";
import "bootstrap/dist/css/bootstrap.css";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="load">
        <h1>Loading</h1>
        <ReactLoading type={"bars"} color={"white"} />
      </div>
    );
  }
}
