import { type FC } from 'react';
import { Clock, Text } from '@ui';
import s from './header.module.scss';

const Header: FC = () => (
  <div className={s.header}>
    <Text bold size='large'>
      Arthur Bokshaaa
    </Text>
    <div className={s.header__meta}>
      <Clock />
      <Text>v1.1</Text>
    </div>
  </div>
);

export default Header;
