import React, { Component } from "react";

//use keys

class Lists extends Component {
  state = {};
  render() {
    const numbers = [1, 2, 3, 4, 5];

    return (
      <div className="text-center mt-6">
        <h2 className="font-bold">Lists</h2>

        <div>
          {numbers.map((num) => (
            <li key={num.toString()}>{num * 2}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default Lists;
