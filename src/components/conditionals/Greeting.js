import React, { Component } from "react";
import User from "./User";
import Guest from "./Guest";

class Greeting extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <User />;
    }

    return <Guest />;
  }
}

export default Greeting;
