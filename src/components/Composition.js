//-- use composition instead of inheritance
//-- to reuse code between components.
import React from "react";

export default function CompositonComponent(props) {
  return <div className={"text-" + props.color}>{props.children}</div>;
}
