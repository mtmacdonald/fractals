import React from "react";
import { Stage } from "@inlet/react-pixi";
import Point from "./point";
const randomColor = () =>
  `0x${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")}`;

const points = Array(500)
  .fill(undefined)
  .map((_, x) => {
    return Array(500)
      .fill(undefined)
      .map((_, y) => {
        return {
          x,
          y,
          color: randomColor(),
        };
      });
  });

export const Plot = ({}) => {
  return (
    <Stage width={400} height={400}>
      {points.map((r, ix) =>
        r.map((p, iy) => (
          <Point
            key={`${ix}_${iy}`}
            x={p.x}
            y={p.y}
            width={1}
            height={1}
            fill={p.color}
          />
        ))
      )}
    </Stage>
  );
};
