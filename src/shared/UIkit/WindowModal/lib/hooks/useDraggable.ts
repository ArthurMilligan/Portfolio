import { useState, type MouseEvent as ReactMouseEvent } from 'react';

interface ICoord {
  top?: number;
  left?: number;
}

interface IPositionState {
  oldCoord: ICoord;
  newCoord: ICoord;
}

interface IUseDraggagleReturn {
  handleMouseDown: (arg: ReactMouseEvent) => void;
  handleMouseMove: (arg: ReactMouseEvent) => void;
  isMove: boolean;
  coord: ICoord;
}

const useDraggable = (): IUseDraggagleReturn => {
  const [isMove, setIsMove] = useState(false);
  const [position, setPosition] = useState<IPositionState>({
    oldCoord: {},
    newCoord: {},
  });
  const onMouseUp = (): void => {
    setIsMove(false);
    document.removeEventListener('mouseup', onMouseUp);
  };
  const handleMouseDown = (e: ReactMouseEvent): void => {
    setPosition({ ...position, oldCoord: { left: e.clientX, top: e.clientY } });
    setIsMove(true);
    document.addEventListener('mouseup', onMouseUp);
  };
  // TODO: Придумать решение для нормального перемещения
  const handleMouseMove = (e: ReactMouseEvent): void => {
    if (isMove) {
      const top =
        (e.currentTarget.parentNode as HTMLDivElement).offsetTop +
        e.clientY -
        (position?.oldCoord?.top as number);
      const left =
        (e.currentTarget.parentNode as HTMLDivElement).offsetLeft +
        e.clientX -
        (position?.oldCoord?.left as number);

      setPosition({
        oldCoord: { left: e.clientX, top: e.clientY },
        newCoord: { top, left },
      });
    }
  };

  return {
    handleMouseDown,
    handleMouseMove,
    isMove,
    coord: position.newCoord,
  };
};

export default useDraggable;
