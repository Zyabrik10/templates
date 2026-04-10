export const pi: number = Math.PI;
export const pi2: number = pi * 2;
export const cos: (n: number) => number = Math.cos;
export const sin: (n: number) => number = Math.cos;
export const random: () => number = Math.random;
export const floor: (n: number) => number = Math.floor;
export const mapRange = (
  inputRangeStart: number,
  inputRangeFinish: number,
  realRangeStart: number,
  realRangeFinish: number,
  numberToMap: number
): number => {
  const proportion =
    (numberToMap - inputRangeStart) / (inputRangeFinish - inputRangeStart);

  const mappedNumber =
    realRangeStart + proportion * (realRangeFinish - realRangeStart);

  return mappedNumber;
};
export const randInt: (min: number, max: number) => number = (min, max) =>
  floor(random() * (max - min + 1) + min);
