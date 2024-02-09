import {
  // useState,
  type FC,
  type DragEvent as ReactDragEvent,
  useRef,
} from 'react';
import { observer } from 'mobx-react-lite';
import { type TWindowType } from '@entities';
import uuid from 'react-uuid';
import s from './desktopElements.module.scss';
import { DesktopElementsStore } from '../model';
import { getDesktopMatrix, getPosition } from '../lib';

interface IDesktopElementsProps {
  ElementButton: FC<{
    name: string;
    icon: string;
    id: number;
    elemId?: number;
    type: TWindowType;
  }>;
}

const DesktopElements: FC<IDesktopElementsProps> = observer(
  ({ ElementButton }) => {
    const { elements, setElemPosition, getElemPosition, fetchStatus } =
      DesktopElementsStore;
    const { current: desktopElementsMatrix } = useRef(getDesktopMatrix());
    const { innerHeight } = window;

    elements.forEach(
      ({ position: { x, y } }) => (desktopElementsMatrix[x][y] = 1),
    );

    const handleDrop = (e: ReactDragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      const id = Number(e.dataTransfer.getData('id'));

      const dropX = Math.floor(e.clientX / 100);
      const dropY = Math.floor((e.clientY - innerHeight * 0.05) / 100);

      if (desktopElementsMatrix[dropX][dropY] === null && id) {
        const oldCoord = getElemPosition(id);

        if (oldCoord) {
          desktopElementsMatrix[oldCoord.x][oldCoord.y] = null;
        }

        desktopElementsMatrix[dropX][dropY] = 1;

        setElemPosition(id, dropX, dropY);
      }
    };
    const handleDragOver = (e: ReactDragEvent<HTMLDivElement>): void => {
      e.preventDefault();
    };
    const handleDragStart = (
      e: ReactDragEvent<HTMLDivElement>,
      id: number,
    ): void => {
      e.dataTransfer.setData('id', `${id}`);
    };

    if (fetchStatus === 'error') {
      return <div>error</div>;
    }
    if (fetchStatus === 'pending') {
      return <div>loading</div>;
    }

    return (
      <div
        className={s.desktop}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {elements.map(
          ({
            name,
            id,
            icon,
            position: { x, y },
            type,
            elementId,
            folderId,
          }) => {
            const { biasX, biasY } = getPosition(x, y);

            return (
              <div
                key={uuid()}
                className={s.desktop__element}
                style={{ top: biasY, left: biasX }}
                draggable
                onDragStart={(e) => {
                  handleDragStart(e, id);
                }}
              >
                <ElementButton
                  elemId={elementId ?? folderId}
                  type={type}
                  name={name}
                  id={id}
                  icon={icon}
                />
              </div>
            );
          },
        )}
      </div>
    );
  },
);

export default DesktopElements;
