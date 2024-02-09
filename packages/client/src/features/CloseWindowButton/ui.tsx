import { MenuItemStore, WindowStore } from '@entities';
import { PanelButton } from '@ui';
import { observer } from 'mobx-react-lite';
import { type FC } from 'react';

interface ICloseWindowButtonProps {
  id: number;
}

const CloseWindowButton: FC<ICloseWindowButtonProps> = observer(({ id }) => {
  const { closeWindow } = WindowStore;
  const { deleteItem } = MenuItemStore;
  const handleClick = (): void => {
    closeWindow(id);
    deleteItem(id);
  };

  return <PanelButton type='close' onClick={handleClick} name={`${id}`} />;
});

export default CloseWindowButton;
