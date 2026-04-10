import { SceneObjectInterface } from "../../interfaces";
import { SceneObjectType } from "../../types";
import Color from "./Color";
import Vector2 from "./Vector2";
import Scene from "./Scene";
import Size from "./Size";

export default class Rect implements SceneObjectInterface {
  public coor: Vector2;
  public scene: Scene;
  public size: Size;
  public color: Color;

  constructor(obj: SceneObjectType) {
    const { coor, size, color } = obj;

    this.coor = coor;
    this.scene = undefined;
    this.size = size;
    this.color = color;
  }

  render(): void {
    const { ctx } = this.scene;
    const { fill, stroke } = this.color;
    const { x, y } = this.coor;
    const { width, height } = this.size;

    ctx.beginPath();
    ctx.rect(x, y, width, height);

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
