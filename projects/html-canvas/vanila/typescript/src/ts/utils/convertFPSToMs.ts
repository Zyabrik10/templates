export default function convertFPSToMs(fps: number): number {
  return fps > 0 ? 1000 / fps : 16;
}