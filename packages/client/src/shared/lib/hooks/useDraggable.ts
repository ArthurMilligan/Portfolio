import {
  useState,
  type MouseEvent as ReactMouseEvent,
  useRef,
  type RefObject,
  useEffect,
} from 'react';

interface ICoord {
  top?: number;
  left?: number;
}

interface IOldCoord {
  element: ICoord;
  mouse: ICoord;
}

interface IUseDraggagleReturn {
  handleMouseDown: (arg: ReactMouseEvent) => void;
  isMove: boolean;
  ref: RefObject<HTMLDivElement>;
}

const useDraggable = (index: number): IUseDraggagleReturn => {
  const [isMove, setIsMove] = useState(false);
  const {
    current: { mouse, element },
  } = useRef<IOldCoord>({
    mouse: {},
    element: {},
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(ref?.current){
      ref.current.style.left = `calc(25vw + ${index*9}px)`
      ref.current.style.top = `calc(10vh + ${index*9}px)`
    }
  },[])

  const handleMouseMove = (e: MouseEvent): void => {
    const mouseTop = mouse.top ?? 0;
    const mouseLeft = mouse.left ?? 0;

    const elementTop = element.top ?? 0;
    const elementLeft = element.left ?? 0;

    const top = elementTop + e.clientY - mouseTop;
    const left = elementLeft + e.clientX - mouseLeft;

    // Убрать возможность перенемсти окно вверх
    // const canMoveTop = top > 0;
    // const canMoveLeft = left > 0;

    if (ref.current != null) {
      ref.current.style.left = `${left}px`;
      ref.current.style.top = `${top}px`;
    }
  };

  const onMouseUp = (): void => {
    setIsMove(false);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseDown = (e: ReactMouseEvent): void => {
    mouse.left = e.clientX;
    mouse.top = e.clientY;
    element.left = ref.current?.offsetLeft;
    element.top = ref.current?.offsetTop;
    setIsMove(true);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
  };

  return {
    handleMouseDown,
    isMove,
    ref,
  };
};

export default useDraggable;
