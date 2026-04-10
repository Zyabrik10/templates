import {
  SceneObjectFactoryInterface,
  SceneObjectInterface,
} from "../../interfaces";
import { SceneObjectType } from "../../types";
import Arc from "./Arc";
import Rect from "./Rect";

export default class SceneObjectFactory implements SceneObjectFactoryInterface {
  create(obj: SceneObjectType): SceneObjectInterface {
    const { color, size } = obj;
    const { fill, stroke } = color;
    const { radius } = size;

    if (!color || (!fill && !stroke))
      throw new Error(
        `Color property must be provided: color = ${JSON.stringify(
          color
        )}, fill = ${fill}, stroke = ${stroke}}`
      );

    if (radius) {
      return new Arc(obj);
    }

    return new Rect(obj);
  }

  copy(obj: SceneObjectInterface): SceneObjectInterface {
    const { size } = obj;
    const { radius } = size;

    if (radius) {
      return new Arc(obj);
    }

    return new Rect(obj);
  }
}
