import React from "react";
import { storiesOf } from "@storybook/react";
import { Container } from "../../storybook/container";
import { Hello } from "./hello.jsx";

const style = {
  height: "100%",
  width: "100%",
};

storiesOf("Basic|Hello", module).add("default", () => (
  <Container style={style}>
    <Hello />
  </Container>
));
