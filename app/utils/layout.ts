import { Point } from "../interfaces";

export const getCenter = (node: HTMLElement) => {
  const x = node.offsetLeft + node.offsetWidth / 2;
  const y = node.offsetTop + node.offsetHeight / 2;
  return { x, y };
};

export const distanceBetweenPoints = (point1: Point, point2: Point) => {
  const x = Math.pow(point1.x - point2.x, 2);
  const y = Math.pow(point1.y - point2.y, 2);
  return Math.sqrt(x + y);
};

export const getPosition = (index: number, size: number) => {
  const positionX = size * (index % 6);
  const positionY = size * Math.floor(index / 6);
  return { positionX, positionY };
};
