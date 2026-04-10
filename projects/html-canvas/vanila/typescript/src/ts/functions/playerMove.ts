import { Vector2 } from "../classes";
import { keys, player } from "../configure";

export default function playerMove() {
  const { KeyW, KeyS, KeyA, KeyD, Space } = keys;

  if (KeyW) {
    player.character.move(new Vector2(0, -player.character.stats.vel.y));
  }

  if (KeyS) {
    player.character.move(new Vector2(0, player.character.stats.vel.y));
  }

  if (KeyA) {
    player.character.move(new Vector2(-player.character.stats.vel.x, 0));
  }

  if (KeyD) {
    player.character.move(new Vector2(player.character.stats.vel.x, 0));
  }

  if (Space) {
    console.log("Space bar was touched");
  }

  player.character.edge();
}
