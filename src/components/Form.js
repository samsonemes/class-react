import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for signing up : ${this.state.name}`);
  };

  render() {
    return (
      <div className="mt-6">
        <h2 className="mb-3 font-bold">Form</h2>

        <form>
          <label htmlFor="name">Name:</label>
          <input
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            className="border px-2 py-2"
            name="name"
            type="text"
          />

          <label htmlFor="email">Name:</label>
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            className="border px-2 py-2"
            name="email"
            type="email"
          />

          <button
            onClick={(e) => this.handleSubmit(e)}
            className="px-2 py-1 bg-black text-white"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
