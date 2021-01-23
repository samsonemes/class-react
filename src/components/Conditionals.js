import React, { Component } from "react";

import Greeting from "./conditionals/Greeting";

class Conditionals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleClick = () => {
    this.setState((state) => ({
      isLoggedIn: !state.isLoggedIn,
    }));
  };

  render() {
    const Login = <span>Login</span>;
    const Logout = <span>Logout</span>;

    return (
      <div className="mt-4 mb-4">
        <h2 className="font-bold">Conditional Rendering</h2>
        <br />

        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <button
          onClick={() => this.handleClick()}
          className="px-2 py-1 bg-black text-white"
        >
          {this.state.isLoggedIn ? Logout : Login}
        </button>
      </div>
    );
  }
}

export default Conditionals;
