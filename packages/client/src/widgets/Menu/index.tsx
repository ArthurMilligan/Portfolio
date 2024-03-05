import { MenuItems } from '@entities';
import { ShowWindowButton } from '@features';
import { type FC } from 'react';

const Menu: FC = () => <MenuItems ShowWindowButton={ShowWindowButton} />;

export default Menu;
