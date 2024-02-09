import {
  type ReactNode,
  type FC,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  // type RefObject,
} from 'react';
import s from './resizeContainer.module.scss';

interface IResizeContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  customOnClick?: () => void;
  customOnMouseDown?: () => void;
}
interface IOldCoord {
  top: number;
  left: number;
  biasX: number;
  biasY: number;
}
type TEdge = 'right' | 'left' | 'top' | 'bottom';

const ResizeContainer: FC<IResizeContainerProps> = ({
  children,
  className,
  style,
  customOnClick,
  customOnMouseDown,
}) => {
  const [resizeData, setResizeData] = useState({
    width: 700,
    height: 500,
    minWidth: 200,
    minHeight: 200,
  });

  const [resizing, setResizing] = useState(false);

  const [edge, setEdge] = useState<TEdge | null>(null);

  const ref = useRef<HTMLDivElement>(null);
  const { current: oldCoord } = useRef<IOldCoord>({
    top: 0,
    left: 0,
    biasX: 0,
    biasY: 0,
  });

  const hadleMouseMove = (e: MouseEvent): void => {
    if (!resizing) {
      return;
    }
    switch (edge) {
      case 'right':
        setResizeData({
          ...resizeData,
          width: resizeData.width + e.clientX - oldCoord.left,
        });
        break;

      case 'bottom':
        setResizeData({
          ...resizeData,
          height: resizeData.height + e.clientY - oldCoord.top,
        });
        break;

      case 'top':
        const height = resizeData.height - e.clientY + oldCoord.top;

        if (ref?.current != null && height >= resizeData.minHeight) {
          ref.current.style.top = `${
            oldCoord.biasY + e.clientY - oldCoord.top
          }px`;
        }

        setResizeData({
          ...resizeData,
          height,
        });
        break;

      case 'left':
        const width = resizeData.width - e.clientX + oldCoord.left;

        if (ref?.current != null && width >= resizeData.minWidth) {
          ref.current.style.left = `${
            oldCoord.biasX + e.clientX - oldCoord.left
          }px`;
        }

        setResizeData({
          ...resizeData,
          width,
        });
        break;
    }
  };
  const onMouseUp = (): void => {
    if (ref?.current != null) {
      ref.current.classList.remove(s.resizing_moving);
    }
    setResizing(false);
  };
  const hadleMouseDown = (selectedEdge: TEdge, e: ReactMouseEvent): void => {
    if (ref?.current != null) {
      ref.current.classList.add(s.resizing_moving);
      oldCoord.top = e.clientY;
      oldCoord.left = e.clientX;
      oldCoord.biasX = parseInt(`${ref.current.style.left || 0}`, 10);
      oldCoord.biasY = parseInt(`${ref.current.style.top || 0}`, 10);
    }
    setResizing(true);
    setEdge(selectedEdge);
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
      className={`${s.resizer} ${className ?? ''} ${
        resizing ? s.resizer_active : ''
      }`}
      style={{ ...resizeData, ...(style ?? {}) }}
      onMouseDown={customOnMouseDown}
      onClick={customOnClick}
    >
      <span
        className={s.resizer__right}
        onMouseDown={(e: ReactMouseEvent) => {
          hadleMouseDown('right', e);
        }}
      />
      <span
        className={s.resizer__left}
        onMouseDown={(e: ReactMouseEvent) => {
          hadleMouseDown('left', e);
        }}
      />
      <span
        className={s.resizer__bottom}
        onMouseDown={(e: ReactMouseEvent) => {
          hadleMouseDown('bottom', e);
        }}
      />
      <span
        className={s.resizer__top}
        onMouseDown={(e: ReactMouseEvent) => {
          hadleMouseDown('top', e);
        }}
      />
      {children}
    </div>
  );
};

export default ResizeContainer;
