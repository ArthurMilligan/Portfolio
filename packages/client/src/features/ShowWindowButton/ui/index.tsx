import { WindowStore } from '@entities';
import { Icon, type TIconName } from '@ui';
import { observer } from 'mobx-react-lite';
import { type FC } from 'react';
import s from './showWindowsButton.module.scss';

interface IShowWindowButtonProps {
  id: number;
  name: string;
  icon: TIconName;
  className?: string;
}
const ShowWindowButton: FC<IShowWindowButtonProps> = observer(
  ({ id, name, icon, className }) => {
    const { showWindow, moveWindowToTop } = WindowStore;
    const handleClick = (): void => {
      showWindow(id);
      moveWindowToTop(id);
    };

    return (
      <button
        type='button'
        aria-label={name}
        className={`${s.showWindowsButton} ${className}`}
        onClick={handleClick}
      >
        <Icon name={icon} id={`${id}`} />
      </button>
    );
  },
);

export default ShowWindowButton;
