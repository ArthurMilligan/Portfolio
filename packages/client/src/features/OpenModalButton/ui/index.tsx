import { useState, type FC } from 'react';
import { Icon, type TIconName, Text } from '@ui';
import { MenuItemStore, type TWindowType, WindowStore } from '@entities';
import { observer } from 'mobx-react-lite';
import s from './openModalButton.module.scss';

interface IOpenModalButtonProps {
  icon: TIconName;
  name: string;
  type: TWindowType;
  id: number;
  elemId?: number;
}
const OpenModalButton: FC<IOpenModalButtonProps> = observer(
  ({ id, icon, name, type, elemId }) => {
    const [active, setActive] = useState(false);
    const { addWindow } = WindowStore;
    const { addItem } = MenuItemStore;
    const handleDoubleClick = (): void => {
      addWindow(name, id, type, elemId);
      addItem(id, name, icon);
    };
    const shortName =
      !active && name.length > 7 ? `${name.slice(0, 7)}...` : name;

    return (
      <button
        name={`${id}`}
        className={s.openModalButton}
        tabIndex={0}
        onDoubleClick={handleDoubleClick}
        onFocus={() => {
          setActive(true);
        }}
        onBlur={() => {
          setActive(false);
        }}
      >
        <Icon size={66} name={icon} />
        <Text className={s.openModalButton__name}>{shortName}</Text>
      </button>
    );
  },
);

export default OpenModalButton;
