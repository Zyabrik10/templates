import { SceneObjectType } from "../types";
import SceneObjectInterface from "./SceneObjectInterface";

export default interface SceneObjectFactoryInterface {
  create: (obj: SceneObjectType) => SceneObjectInterface;
  copy: (obj: SceneObjectInterface) => SceneObjectInterface;
}
