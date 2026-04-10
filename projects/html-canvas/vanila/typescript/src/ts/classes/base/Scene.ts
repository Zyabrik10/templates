import { SceneObjectInterface } from "../../interfaces";
import { MouseType } from "../../types";
import Vector2 from "./Vector2";

type EventOffsetts = {
  offsetX: number;
  offsetY: number;
};

export const defaultMouse: MouseType = {
  isMouseDown: false,
  coor: new Vector2(0, 0),
  downCoor: new Vector2(0, 0),
};

export default class Scene {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mouse: MouseType;
  objects: Array<SceneObjectInterface>;
  width: number;
  height: number;
  keyDown: {
    [key: string]: boolean;
  };

  setFullSize(width: number, height: number): void {
    if (!width || !height || width < 0 || height < 0)
      throw new Error("Canvas width and height cannot be less than 0");
    this.width = this.canvas.width = width;
    this.height = this.canvas.height = height;
  }

  init(canvasSelector: string): void {
    this.canvas = document.querySelector(canvasSelector);

    if (!this.canvas)
      throw new Error(`Canvas ${canvasSelector} is not defined`);

    this.ctx = this.canvas.getContext("2d");
    this.mouse = defaultMouse;
    this.objects = [];

    this.keyDown = {};
  }

  addMouseMoveHandler(func: () => void): void {
    if (func) {
      this.canvas.addEventListener("mousemove", func);
      return;
    }

    this.canvas.addEventListener("mousemove", this.mouseMoveHandler);
  }

  addMouseDownHandler(func: () => void): void {
    if (func) {
      this.canvas.addEventListener("mousedown", func);
      return;
    }

    this.canvas.addEventListener("mousedown", this.mouseDownHandler);
  }

  addMouseUpHandler(func: () => void): void {
    if (func) {
      this.canvas.addEventListener("mouseup", func);
      return;
    }

    this.canvas.addEventListener("mouseup", this.mouseUpHandler);
  }

  mouseMoveHandler = ({ offsetX, offsetY }: EventOffsetts): void => {
    this.mouse.coor = new Vector2(offsetX, offsetY);
  };

  mouseDownHandler = ({ offsetX, offsetY }: EventOffsetts): void => {
    this.mouse.downCoor = new Vector2(offsetX, offsetY);
    this.mouse.isMouseDown = true;
  };

  mouseUpHandler = (): void => {
    this.mouse.isMouseDown = false;
  };

  add(...objects: Array<SceneObjectInterface>) {
    objects.forEach((e) => (e.scene = this));
    this.objects.push(...objects);
  }

  clear() {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  render() {
    // TODO: optimization
    this.ctx.save(); // Зберегти поточний стан контексту
    this.objects.forEach((e) => {
      e.render();
    });
    this.ctx.restore(); // Відновити стан контексту
  }

  setBackgroundColor(color: string) {
    this.canvas.style.backgroundColor = color;
  }
}
