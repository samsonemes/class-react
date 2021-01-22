import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    };
  }

  handleToggle = (e) => {
    e.preventDefault();
    // this.setState({
    //   isToggle: !this.state.isToggle,
    // });
    this.setState((state) => ({
      isToggle: !state.isToggle,
    }));

    alert(this.state.isToggle);
  };
  render() {
    return (
      <div>
        <button
          className="border px-2 py-2 outline-none border"
          onClick={(e) => this.handleToggle(e)}
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default Events;
