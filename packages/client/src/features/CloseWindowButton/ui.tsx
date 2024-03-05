import { MenuItemStore, WindowStore } from '@entities';
import { PanelButton } from '@ui';
import { observer } from 'mobx-react-lite';
import { type FC } from 'react';

interface ICloseWindowButtonProps {
  id: number;
  type?: 'close' | 'mobile';
}

const CloseWindowButton: FC<ICloseWindowButtonProps> = observer(
  ({ id, type = 'close' }) => {
    const { closeWindow } = WindowStore;
    const { deleteItem } = MenuItemStore;
    const handleClick = (): void => {
      closeWindow(id);
      deleteItem(id);
    };

    return <PanelButton type={type} onClick={handleClick} name={`${id}`} />;
  },
);

export default CloseWindowButton;
