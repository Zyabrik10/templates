import { SceneObjectInterface } from "../interfaces";
import { Scene, Size } from "./base";

export default class Map {
  public mappedScene: Scene;
  public scene: Scene;
  public kx: number;
  public ky: number;

  constructor(mappedScene: Scene) {
    this.mappedScene = mappedScene;
    this.kx = 0;
    this.ky = 0;
  }

  init(canavasSelector: string) {
    this.scene = new Scene();
    this.scene.init(canavasSelector);
  }

  setSize(obj: Size) {
    const { width, height } = obj;

    this.scene.setFullSize(width, height);
    this.kx = this.scene.width / this.mappedScene.width;
    this.ky = this.scene.height / this.mappedScene.height;
  }

  render() {
    this.scene.clear();

    const { ctx } = this.scene;
    this.mappedScene.objects.forEach((obj: SceneObjectInterface) => {
      ctx.beginPath();
      ctx.fillStyle = obj.color.fill;
      ctx.fillRect(
        this.kx * obj.coor.x,
        this.ky * obj.coor.y,
        this.kx * obj.size.width,
        this.ky * obj.size.height
      );
    });
  }
}
