import {
  scene,
  player,
  mainCamera,
  map,
  warriorFactory,
  objectFactory,
} from "./configure";
import { Vector2, Size, Character } from "./classes";
import update from "./update";
import { randInt } from "./utils";
import infoFactory from "./configure/infoFactory";

const mapSizeK = 5;

export default function windowOnLoad(): void {
  scene.init(".game-scene");
  scene.setFullSize(innerWidth * mapSizeK, innerWidth * mapSizeK);
  scene.add(player.character.object);

  map.init(".map");
  map.setSize(new Size({ width: 200, height: 200 }));

  player.character.object.coor = new Vector2(scene.width / 2, scene.height / 2);

  for (let i = 0; i < 30; i++) {
    const enemy = warriorFactory.create(
      new Character(objectFactory.copy(player.character.object))
    );

    enemy.character.object.coor = new Vector2(
      randInt(0, scene.width),
      randInt(0, scene.height)
    );

    enemy.character.setStats({
      name: `enemy-${i}`,
      health: 100,
    });

    const viewRadius = randInt(50, 150);

    enemy.setParams({
      viewRadius,
      fightRadius: viewRadius,
    });

    const velRand = randInt(1, player.character.stats.vel.x - 1);

    enemy.character.stats.vel = new Vector2(velRand, velRand);

    enemy.applyEnemy(player.character);
    scene.add(enemy.character.object);
    warriorFactory.add(enemy);
    infoFactory.add(infoFactory.create(enemy.character));
  }

  mainCamera.init(scene);
  mainCamera.watch(player.character.object);

  infoFactory.add(infoFactory.create(player.character));

  update(0);
}
