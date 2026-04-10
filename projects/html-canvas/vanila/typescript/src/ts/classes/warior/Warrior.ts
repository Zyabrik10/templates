import { pi2 } from "../../utils";
import { Vector2 } from "../base";
import { Character } from "../character";

export default class Warrior {
  public character: Character;
  public enemy: Character;
  public canSeeEnemy: boolean;
  public viewRadius: number;
  public fightRadius: number;

  constructor(character: Character) {
    this.viewRadius = 0;
    this.fightRadius = 0;
    this.canSeeEnemy = false;
    this.character = character;
  }

  setParams(obj: { viewRadius?: number; fightRadius?: number }) {
    const { viewRadius, fightRadius } = obj;

    this.viewRadius = viewRadius || this.viewRadius;
    this.fightRadius = fightRadius || this.fightRadius;
  }

  applyEnemy(enemy: Character): void {
    this.enemy = enemy;
  }

  renderVisibility() {
    const { ctx } = this.character.object.scene;

    const middle = new Vector2(
      this.character.object.coor.x + this.character.object.size.width / 2,
      this.character.object.coor.y + this.character.object.size.height / 2
    );

    ctx.beginPath();
    ctx.arc(middle.x, middle.y, this.viewRadius, 0, pi2);
    ctx.strokeStyle = this.canSeeEnemy ? "red" : "green";
    ctx.stroke();
  }

  seek(): void {
    const middle = new Vector2(
      this.character.object.coor.x + this.character.object.size.width / 2,
      this.character.object.coor.y + this.character.object.size.height / 2
    );

    const middleEnemy = new Vector2(
      this.enemy.object.coor.x + this.enemy.object.size.width / 2,
      this.enemy.object.coor.y + this.enemy.object.size.height / 2
    );

    const { dist } = middleEnemy.findDistanceBetween(middle);

    if (dist <= this.viewRadius + this.enemy.object.size.width / 2) {
      this.canSeeEnemy = true;
    } else {
      this.canSeeEnemy = false;
    }
  }

  follow(): void {
    const { ax, ay, dist } = this.enemy.object.coor.findDistanceBetween(
      this.character.object.coor
    );

    if (dist > 10) {
      this.character.object.coor.add(
        new Vector2(
          this.character.stats.vel.x * ax,
          this.character.stats.vel.y * ay
        )
      );
      this.character.edge();
    }
  }

  fight() {}
}
