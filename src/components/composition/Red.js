import React from "react";
import CompositonComponent from "../Composition";

export default function Blue(props) {
  return (
    <CompositonComponent color="red-600">
      <h2>This is Red</h2>
    </CompositonComponent>
  );
}
