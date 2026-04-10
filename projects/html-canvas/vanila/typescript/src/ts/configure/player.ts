import { Character, Vector2 } from "../classes";
import { playerRect } from "./base";
import warriorFactory from "./warriorFactory";

export const player = warriorFactory.create(new Character(playerRect));

const speed = 10;
const name = "Zyabrik10";
const health = 100;

player.character.setStats({
  name,
  vel: new Vector2(speed, speed),
  health,
});
