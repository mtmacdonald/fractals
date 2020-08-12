import { Graphics } from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";

export default PixiComponent("Point", {
  create: (props) => {
    return new Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { fill, x, y, width, height } = newProps;
    instance.clear();
    instance.beginFill(fill);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  },
});
