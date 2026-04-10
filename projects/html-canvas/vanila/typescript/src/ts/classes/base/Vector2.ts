export default class Vector2 {
  x?: number;
  y?: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(obj: Vector2) {
    const { x = 0, y = 0 } = obj;
    this.x += x;
    this.y += y;
  }

  findDistanceBetween(obj: Vector2): {
    dx: number;
    dy: number;
    ax: number;
    ay: number;
    dist: number;
  } {
    const { x, y } = obj;

    const dx = this.x - x;
    const dy = this.y - y;
    const dist = +Math.hypot(dx, dy).toFixed(2);

    const ax = +(dx / dist).toFixed(2) || 0;
    const ay = +(dy / dist).toFixed(2) || 0;

    return {
      dx,
      dy,
      ax,
      ay,
      dist,
    };
  }
}
