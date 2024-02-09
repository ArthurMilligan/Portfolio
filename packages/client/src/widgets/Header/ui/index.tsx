import { type FC } from 'react';
import { Clock, Text } from '@ui';
import s from './header.module.scss';

const Header: FC = () => (
  <div className={s.header}>
    <Text bold size='large'>
      Arthur Bokshaaa
    </Text>
    <Clock />
  </div>
);

export default Header;
