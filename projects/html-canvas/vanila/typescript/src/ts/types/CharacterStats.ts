import { Vector2 } from "../classes";

export type CharacterStatsType = {
  name?: string;
  vel?: Vector2;
  health?: number;
  maxHealth?: number;
  level?: number;
  exp?: number;
};
