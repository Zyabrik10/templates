import { Character } from "../character";
import Warrior from "./Warrior";

export default class WarriorFactory {
  public warriors: Array<Warrior>;

  constructor() {
    this.warriors = [];
  }

  create(obj: Character): Warrior {
    return new Warrior(obj);
  }

  add(obj: Warrior) {
    this.warriors.push(obj);
  }

  update() {
    this.warriors.forEach((warior) => {
      warior.seek();
      if (warior.canSeeEnemy) warior.follow();
      warior.renderVisibility();
    });
  }
}
