import { CharacterStatsType } from "../../types";
import { Character } from "../character";

export default class InfoCharacter {
  public character: Character;

  constructor(obj: Character) {
    this.character = obj;
  }

  render() {
    const { name, health, maxHealth } = this.character.stats;
    const { coor, size } = this.character.object;
    const { ctx } = this.character.object.scene;

    const font = 13;

    ctx.beginPath();
    ctx.font = `${font}px Arial`;
    ctx.fillStyle = "black";
    ctx.fillText(
      name,
      coor.x + size.width / 2 - (font / 2) * (name.length / 2),
      coor.y - 20
    );

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(coor.x, coor.y - 10, size.width * (health / maxHealth), 5);
  }
}
