import { animate } from "./animate";
import { scene, timeConfig } from "./configure";
import { convertFPSToMs } from "./utils";

function main(): void {
  scene.clear();
  animate();
  scene.render();
}

export default function update(timeStamp: number): void {
  timeConfig.deltaTime = timeStamp - timeConfig.currentTime;
  timeConfig.currentTime = timeStamp;
  if (timeConfig.timer >= convertFPSToMs(timeConfig.fps)) {
    main();
    timeConfig.timer = 0;
  } else timeConfig.timer += timeConfig.deltaTime;

  requestAnimationFrame(update);
}
