import React from "react";

export interface ButtonPropss {
  label: string;
}

const Bar = (props: ButtonPropss) => {
  return <>Hello World{props.label}</>;
};

export default Bar;
