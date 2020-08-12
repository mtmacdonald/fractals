import React from "react";

import "~gui-library/src/style/global.less";

import { Hello } from "../hello/hello";
import styles from "./main.module.less";

export const Main = () => {
  return (
    <div className={styles.container}>
      <h4>Example using components from GUI Library:</h4>
      <Hello />
    </div>
  );
};
