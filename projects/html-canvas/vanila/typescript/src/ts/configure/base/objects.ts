import { Color, Vector2, SceneObjectFactory, Size } from "../../classes";

export const objectFactory = new SceneObjectFactory();

export const playerRect = objectFactory.create({
  coor: new Vector2(0, 0),
  color: new Color({ fill: "blue" }),
  size: new Size({ width: 50, height: 50 }),
});
