import React from "react";

//components
import Child from "./components/ChildProps";
import Clock from "./components/Mounting";
import Events from "./components/Events";
import Conditionals from "./components/Conditionals";
import Lists from "./components/Lists";
import Form from "./components/Form";
import Blue from "./components/composition/Blue";
import Red from "./components/composition/Red";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      parent: "Father Abraham",
    };
    // this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  //handle greet
  handleGreetChild = (child) => {
    alert(`Hello ${child} from ${this.state.parent}`);
  };

  render() {
    return (
      <div className="text-center">
        <h2 className="mt-5">{this.state.count}</h2>

        {
          //Binding >> Approach 2
          //   <button
          //   onClick={this.handleIncrement.bind(this)}
          //   className="px-2 py-2 bg-black text-white mr-2"
          // ></button>
        }
        <div className="mt-5">
          <button
            onClick={() => this.handleIncrement()}
            className="px-2 py-2 bg-black text-white mr-2"
          >
            Increment
          </button>
          <button
            onClick={() => this.handleDecrement()}
            className="px-2 py-2 bg-black text-white"
          >
            Decrement
          </button>
        </div>
        <br />

        <div className="mt-3 m-2">
          <Child greet={() => this.handleGreetChild("Isaac")} />
        </div>

        <hr />

        <div className="mt-5">
          <Clock />
        </div>

        <div className="mt-5 mb-5">
          <Events />
        </div>

        <hr />
        <Conditionals />

        <hr />
        <Lists />

        <hr />
        <div className="mt-4 mb-6">
          <Form />
        </div>

        <hr />

        <div className="mt-5">
          <h2 className="font-bold mb-3">Composition Model</h2>
          <Blue />
          <Red />
        </div>
      </div>
    );
  }
}

export default App;
