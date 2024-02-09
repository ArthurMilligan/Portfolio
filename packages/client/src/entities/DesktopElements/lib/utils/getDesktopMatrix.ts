const getDesktopMatrix = (): Array<Array<number | null>> => {
  const desktopElementsMatrix: Array<Array<number | null>> = [];
  const { innerHeight, innerWidth } = window;

  for (let i = 0; i < innerWidth / 100; i += 1) {
    desktopElementsMatrix[i] = [];
    for (let j = 0; j < (innerHeight * 0.95) / 100; j += 1) {
      desktopElementsMatrix[i][j] = null;
    }
  }

  return desktopElementsMatrix;
};

export default getDesktopMatrix;
