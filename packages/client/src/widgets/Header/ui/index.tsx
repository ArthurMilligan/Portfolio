import { type FC } from 'react';
import { Clock, Text, useThemeContext } from '@ui';
import { ThemeChangeToggle } from '@features';
import s from './header.module.scss';

const Header: FC = () => {
  const {
    theme: { backOfHeader },
  } = useThemeContext();

  console.log({ backgroundColor: backOfHeader });

  return (
    <div style={{ backgroundColor: backOfHeader }} className={s.header}>
      <Text bold size='Large'>
        Arthur Boksha
      </Text>
      <div className={s.header__meta}>
        <ThemeChangeToggle />
        <Clock />
        <Text>v1.1</Text>
      </div>
    </div>
  );
};

export default Header;
