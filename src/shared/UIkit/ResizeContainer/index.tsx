import {
  type ReactNode,
  type FC,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import s from './resizeContainer.module.scss';

interface IResizeContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
interface IResizingState {
  resizing: boolean;
  edge?: 'right' | 'left' | 'top' | 'bottom';
  offsetTop: number;
  offsetLeft: number;
}
type TEdge = 'right' | 'left' | 'top' | 'bottom';

// TODO: Добавить остановку контейнера когда он становится 200px
const ResizeContainer: FC<IResizeContainerProps> = ({
  children,
  className,
  style,
}) => {
  const [resizeData, setResizeData] = useState({
    width: 300,
    height: 200,
  });

  const [resizing, setResizing] = useState<IResizingState>({
    resizing: false,
    offsetTop: 0,
    offsetLeft: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  const hadleMouseMove = (e: MouseEvent): void => {
    if (!resizing.resizing) {
      return;
    }
    if (resizing.edge === 'right') {
      setResizeData({
        ...resizeData,
        width: e.clientX - (ref.current?.offsetLeft ?? 0),
      });
    }
    if (resizing.edge === 'bottom') {
      setResizeData({
        ...resizeData,
        height: e.clientY - (ref.current?.offsetTop ?? 0),
      });
    }
    if (resizing.edge === 'top') {
      if (ref?.current != null) {
        ref.current.style.top = `${
          (ref.current?.offsetTop ?? 0) +
          e.clientY -
          (ref.current?.offsetTop ?? 0)
        }px`;
      }
      setResizeData({
        ...resizeData,
        height: resizeData.height - e.clientY + resizing.offsetTop,
      });
    }
    if (resizing.edge === 'left') {
      console.log(ref.current?.clientTop, ref.current?.offsetTop);

      if (ref?.current != null) {
        ref.current.style.left = `${
          (ref.current?.offsetLeft ?? 0) +
          e.clientX -
          (ref.current?.offsetLeft ?? 0)
        }px`;
      }

      setResizeData({
        ...resizeData,
        width: resizeData.width - e.clientX + resizing.offsetLeft,
      });
    }
  };
  const onMouseUp = (): void => {
    if (ref?.current != null) {
      ref.current.classList.remove(s.resizing_moving);
    }
    setResizing({ ...resizing, resizing: false });
  };
  const hadleMouseDown = (edge: TEdge): void => {
    if (ref?.current != null) {
      ref.current.classList.add(s.resizing_moving);
    }
    setResizing({
      resizing: true,
      offsetTop: ref.current?.offsetTop ?? 0,
      offsetLeft: ref.current?.offsetLeft ?? 0,
      edge,
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', hadleMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', hadleMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [resizing]);

  return (
    <div
      ref={ref}
      className={`${s.resizer} ${className ?? ''}`}
      style={{ ...resizeData, ...(style ?? {}) }}
    >
      <span
        className={s.resizer__right}
        onMouseDown={() => {
          hadleMouseDown('right');
        }}
      />
      <span
        className={s.resizer__left}
        onMouseDown={() => {
          hadleMouseDown('left');
        }}
      />
      <span
        className={s.resizer__bottom}
        onMouseDown={() => {
          hadleMouseDown('bottom');
        }}
      />
      <span
        className={s.resizer__top}
        onMouseDown={() => {
          hadleMouseDown('top');
        }}
      />
      {children}
    </div>
  );
};

export default ResizeContainer;
