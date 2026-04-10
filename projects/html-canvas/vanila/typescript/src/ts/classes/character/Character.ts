import { CharacterInterface, SceneObjectInterface } from "../../interfaces";
import { CharacterStatsType } from "../../types";
import { Vector2 } from "../base";

export default class Character implements CharacterInterface {
  public object: SceneObjectInterface;
  public stats: CharacterStatsType;

  constructor(obj: SceneObjectInterface) {
    this.object = obj;

    this.stats = {
      name: "unamed",
      health: undefined,
      vel: new Vector2(undefined, undefined),
      maxHealth: undefined,
    };
  }

  setStats(obj: CharacterStatsType): void {
    const { name, vel, health } = obj;
    if (name) this.stats.name = name;
    if (vel) this.stats.vel = vel;
    if (health && !this.stats.maxHealth) {
      this.stats.health = health;
      this.stats.maxHealth = health;
    } else if (health !== undefined && health >= 0) {
      this.stats.health = health;
    }
  }

  edge() {
    if (this.object.coor.y < 0)
      this.object.coor = new Vector2(this.object.coor.x, 0);

    if (this.object.coor.y + this.object.size.height > this.object.scene.height)
      this.object.coor = new Vector2(
        this.object.coor.x,
        this.object.scene.height - this.object.size.height
      );

    if (this.object.coor.x < 0)
      this.object.coor = new Vector2(0, this.object.coor.y);

    if (this.object.coor.x + this.object.size.width > this.object.scene.width)
      this.object.coor = new Vector2(
        this.object.scene.width - this.object.size.width,
        this.object.coor.y
      );
  }

  move(obj: Vector2): void {
    const { x = 0, y = 0 } = obj;

    this.object.coor.add(new Vector2(x, y));
  }
}
