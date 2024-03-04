import { observer } from 'mobx-react-lite';
import { type FC } from 'react';
import { type TWindowType, WindowStore } from '../model';
import WindowModal from './WindowModal';

interface IWIndowsProps {
  CloseButton: FC<{ id: number }>;
  CollapseButton: FC<{ id: number }>;
  ElementButton: FC<{
    name: string;
    icon: string;
    id: number;
    type: TWindowType;
    elemId?: number;
    inFolder?: boolean;
  }>;
}

const Windows: FC<IWIndowsProps> = observer(
  ({ CloseButton, CollapseButton, ElementButton }) => {
    const { windows, moveWindowToTop } = WindowStore;

    return (
      <>
        {windows.map(
          ({ name, order, status, id, content, type, fetchStatus }) => (
            <WindowModal
              id={id}
              key={id}
              status={status}
              order={order}
              name={name}
              CloseButton={CloseButton}
              CollapseButton={CollapseButton}
              contentType={type}
              content={content}
              fetchStatus={fetchStatus}
              ElementButton={ElementButton}
              moveOnTop={moveWindowToTop}
            />
          ),
        )}
      </>
    );
  },
);

export default Windows;
