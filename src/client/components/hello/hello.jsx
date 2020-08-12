import React from "react";
import { Card, Message } from "~gui-library";

export const Hello = () => {
  return (
    <div>
      <Card>
        <Message
          message={{
            visible: true,
            icon: true,
            content: "Hello World!",
            type: "Info",
          }}
        />
      </Card>
    </div>
  );
};
