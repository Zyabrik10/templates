import { ColorType } from "../../types";

export default class Color {
  fill: string;
  stroke: string;
  img: string;

  constructor(obj: ColorType) {
    const { fill, stroke, img } = obj;
    this.fill = fill;
    this.stroke = stroke;
    this.img = img;
  }
}
