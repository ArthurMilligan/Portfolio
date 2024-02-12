import { height, width } from "../constants";

const getPosition = (
  x: number,
  y: number,
): { biasX: number; biasY: number } => {
  // const { innerWidth, innerHeight } = window;
  const biasX = x * width + 4;
  const biasY = y * height + 4;

  return { biasX, biasY };
};

export default getPosition;
