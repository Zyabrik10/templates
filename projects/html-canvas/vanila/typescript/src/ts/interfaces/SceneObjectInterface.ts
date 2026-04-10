import { Color, Vector2, Scene, Size } from "../classes";

export default interface SceneObjectInterface {
  coor: Vector2;
  scene: Scene;
  color: Color;
  size: Size;
  render: () => void;
}
