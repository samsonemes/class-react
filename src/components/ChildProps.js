import React, { Component } from "react";

//function Component

// export default function Hero(props) {
//   return (
//     <div>
//       <button className="border px-2 py-2" onClick={props.greet}>
//         Greet
//       </button>
//     </div>
//   );
// }

//--props are passed by default in --class components
class ChilProps extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="border px-2 py-2" onClick={this.props.greet}>
          Greet
        </button>
      </div>
    );
  }
}

export default ChilProps;
