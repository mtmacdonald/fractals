import React from "react";
import "~gui-library/src/style/global.less";
import { Plot } from "../plot/plot";
import styles from "./main.module.less";

export const Main = () => {
  return (
    <div className={styles.container}>
      <h4>Pixi Plot:</h4>
      <Plot />
    </div>
  );
};
