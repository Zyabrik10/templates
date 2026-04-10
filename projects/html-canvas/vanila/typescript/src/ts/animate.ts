import { mainCamera, map, warriorFactory } from "./configure";
import infoFactory from "./configure/infoFactory";
import { playerMove } from "./functions";

export function animate(): void {
  playerMove();
  mainCamera.move();
  map.render();
  warriorFactory.update();
  infoFactory.render();
}
