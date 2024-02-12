import { height, width } from "../constants";

const getDesktopMatrix = (): Array<Array<number | null>> => {
  const desktopElementsMatrix: Array<Array<number | null>> = [];
  const { innerHeight, innerWidth } = window;

  for (let i = 0; i < innerWidth / width; i += 1) {
    desktopElementsMatrix[i] = [];
    for (let j = 0; j < (innerHeight * 0.95) / height; j += 1) {
      desktopElementsMatrix[i][j] = null;
    }
  }

  return desktopElementsMatrix;
};

export default getDesktopMatrix;
