import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
};

export const blackButton = () => (
  <div>
    <Button variant="black">Button</Button>
  </div>
);

export const redButton = () => (
  <div>
    <Button variant="red">Button</Button>
  </div>
);

export const orangeButton = () => (
  <div>
    <Button variant="orange">Button</Button>
  </div>
);

export const whiteButton = () => (
  <div>
    <Button variant="white">Button</Button>
  </div>
);

export const DefaultComponent = () => {
  return (
    <div>
      <Button>Button</Button>
    </div>
  );
};
