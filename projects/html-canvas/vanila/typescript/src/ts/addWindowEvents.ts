import { keys, scene } from "./configure";

export default function addWindowEvents(): void {
  window.addEventListener("resize", (): void => {
    scene.setFullSize(innerWidth * 2, innerWidth * 2);
  });

  window.addEventListener("keydown", ({ code }: { code: string }) => {
    keys[code] = true;
  });

  window.addEventListener("keyup", ({ code }: { code: string }) => {
    keys[code] = false;
  });
}
