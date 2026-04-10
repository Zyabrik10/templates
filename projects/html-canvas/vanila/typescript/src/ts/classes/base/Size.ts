import { SizeType } from "../../types";

export default class Size {
  width: number;
  height: number;
  radius: number;

  constructor(obj: SizeType) {
    const { width, height, radius } = obj;
    this.width = width;
    this.height = height;
    this.radius = radius;
  }
}
