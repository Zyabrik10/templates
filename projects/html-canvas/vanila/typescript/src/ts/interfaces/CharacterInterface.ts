import { Vector2 } from "../classes";
import { SceneObjectInterface } from ".";
import { CharacterStatsType } from "../types";

export default interface CharacterInterface {
  object: SceneObjectInterface;
  stats: CharacterStatsType;
  setStats: (obj: CharacterStatsType) => void;
  move: (obj: Vector2) => void;
}
