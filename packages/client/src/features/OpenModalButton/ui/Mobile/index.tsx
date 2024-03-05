import { type FC } from 'react';
import { Icon, type TIconName, Text } from '@ui';
import { type TWindowType, WindowStore } from '@entities';
import { observer } from 'mobx-react-lite';
import s from './openModalButtonMobile.module.scss';

interface IOpenModalButtonMobileProps {
  icon: TIconName;
  name: string;
  type: TWindowType;
  id: number;
  elemId?: number;
  inFolder?: boolean;
  className?: string;
}
const OpenModalButtonMobile: FC<IOpenModalButtonMobileProps> = observer(
  ({ id, icon, name, type, elemId, className = '', inFolder = false }) => {
    const { addWindow } = WindowStore;
    const handleClick = (): void => {
      addWindow(name, id, type, elemId);
    };

    return (
      <button
        name={`${id}`}
        className={`${s.openModalButton} ${className}`}
        tabIndex={0}
        onClick={handleClick}
      >
        <Icon size={66} name={icon} />
        <Text inFolder={inFolder} className={s.openModalButton__name}>
          {name}
        </Text>
      </button>
    );
  },
);

export default OpenModalButtonMobile;
