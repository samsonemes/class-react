import React from "react";
import CompositionComponent from "../Composition";

export default function Blue(props) {
  return (
    <CompositionComponent color="blue-500">
      <h2>This is Blue</h2>
    </CompositionComponent>
  );
}
