import { type FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useThemeContext, type TIconName } from '@ui';
import { MenuItemStore } from '../model';
import s from './menuItems.module.scss';

interface IMenuItemsProps {
  ShowWindowButton: FC<{
    id: number;
    name: string;
    icon: TIconName;
    className?: string;
  }>;
}

const MenuItems: FC<IMenuItemsProps> = observer(({ ShowWindowButton }) => {
  const { items } = MenuItemStore;
  const {
    theme: { backOfHeader, menuBorderRadius },
  } = useThemeContext();

  return (
    <div className={s.menuItems__wrapper}>
      <div
        className={s.menuItems}
        style={{
          backgroundColor: backOfHeader,
          borderRadius: menuBorderRadius,
        }}
      >
        {items.map(({ id, name, icon }) => (
          <ShowWindowButton
            className={s.menuItems__item}
            key={id}
            id={id}
            name={name}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
});

export default MenuItems;
