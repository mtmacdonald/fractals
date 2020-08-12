import React from "react";
import { Stage } from "@inlet/react-pixi";
import Point from "./point";

export const Plot = ({}) => {
  return (
    <Stage width={400} height={400}>
      <Point x={10} y={10} width={1} height={1} fill={0xff0000} />
    </Stage>
  );
};
