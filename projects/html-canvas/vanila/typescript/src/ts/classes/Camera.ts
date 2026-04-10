import { SceneObjectInterface } from "../interfaces";
import { Scene } from "./base";

export default class Camera {
  scene: Scene;
  objectToWatch: SceneObjectInterface;
  visibleField: {
    width: number;
    height: number;
  };

  init(scene: Scene) {
    this.scene = scene;

    const { width, height } = this.scene.canvas.getBoundingClientRect();

    this.visibleField = {
      width,
      height,
    };
  }

  watch(obj: SceneObjectInterface) {
    this.objectToWatch = obj;
  }

  move() {
    const { coor   } = this.objectToWatch;
    const { width, height } = this.visibleField;
    const { ctx } = this.scene;

    let newX = width / 2 - coor.x;
    let newY = height / 2 - coor.y;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(newX, newY);
  }
}
