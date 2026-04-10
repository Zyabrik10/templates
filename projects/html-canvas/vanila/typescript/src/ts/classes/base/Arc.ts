import { SceneObjectInterface } from "../../interfaces";
import { pi2 } from "../../utils/math";
import { SceneObjectType } from "../../types";
import Vector2 from "./Vector2";
import Scene from "./Scene";
import Size from "./Size";
import Color from "./Color";

export default class Arc implements SceneObjectInterface {
  public coor: Vector2;
  public scene: Scene;
  public size: Size;
  public color: Color;

  constructor(obj: SceneObjectType) {
    const { coor, size, color } = obj;

    const { radius } = size;

    this.coor = coor;
    this.scene = undefined;
    this.size = {
      radius,
      width: radius * 2,
      height: radius * 2,
    };
    this.color = color;
  }

  render(): void {
    const { ctx } = this.scene;
    const { fill, stroke } = this.color;
    const { x, y } = this.coor;
    const { radius } = this.size;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, pi2);

    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }

    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.stroke();
    }
  }
}
