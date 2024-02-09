const getPosition = (
  x: number,
  y: number,
): { biasX: number; biasY: number } => {
  // const { innerWidth, innerHeight } = window;
  const biasX = x * 100 + 4;
  const biasY = y * 100 + 4;

  return { biasX, biasY };
};

export default getPosition;
