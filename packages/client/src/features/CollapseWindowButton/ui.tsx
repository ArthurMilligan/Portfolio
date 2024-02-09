import { WindowStore } from '@entities';
import { PanelButton } from '@ui';
import { observer } from 'mobx-react-lite';
import { type FC } from 'react';

interface ICloseWindowButtonProps {
  id: number;
}

const CollapseWindowButton: FC<ICloseWindowButtonProps> = observer(({ id }) => {
  const { collapseWindow } = WindowStore;
  const handleClick = (): void => {
    collapseWindow(id);
  };

  return <PanelButton type='collapse' onClick={handleClick} name={`${id}`} />;
});

export default CollapseWindowButton;
