import { Character } from "../character";
import InfoCharacter from "./InfoCharacter";

export default class InfoCharacterFactory {
  public infoCharacters: Array<InfoCharacter>;

  constructor() {
    this.infoCharacters = [];
  }

  create(obj: Character): InfoCharacter {
    return new InfoCharacter(obj);
  }

  add(obj: InfoCharacter) {
    this.infoCharacters.push(obj);
  }

  render() {
    this.infoCharacters.forEach((info) => {
      info.render();
    });
  }
}
