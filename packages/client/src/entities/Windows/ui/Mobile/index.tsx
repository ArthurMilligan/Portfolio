import { observer } from 'mobx-react-lite';
import { type FC } from 'react';
import { type TWindowType, WindowStore } from '../../model';
import WindowModalMobile from './WindowModalMobile';

interface IWIndowsMobileProps {
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

const WindowsMobile: FC<IWIndowsMobileProps> = observer(
  ({ CloseButton, CollapseButton, ElementButton }) => {
    const { windows, moveWindowToTop } = WindowStore;

    if (!windows.length) {
      return null;
    }
    const [{ name, order, status, id, content, type, fetchStatus }] =
      windows.slice(-1);

    return (
      <WindowModalMobile
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
    );
  },
);

export default WindowsMobile;
