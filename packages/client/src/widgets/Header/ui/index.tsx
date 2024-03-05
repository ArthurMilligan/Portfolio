import { type FC } from 'react';
import { Clock, Text, useThemeContext } from '@ui';
import s from './header.module.scss';

const Header: FC = () => {
  const {
    theme: { backOfHeader },
  } = useThemeContext();

  return (
    <div style={{ backgroundColor: backOfHeader }} className={s.header}>
      <Text bold size='Large'>
        Digital Economy
      </Text>
      <div className={s.header__meta}>
        {/* <ThemeChangeToggle /> */}
        <Clock />
        <Text>v1.1</Text>
      </div>
    </div>
  );
};

export default Header;
