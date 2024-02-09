import { DesktopElements, MenuItems, Windows } from '@entities';
import {
  CloseWindowButton,
  CollapseWindowButton,
  OpenModalButton,
  ShowWindowButton,
} from '@features';
import { type FC } from 'react';
import { Header } from '@widgets';

const Home: FC = () => (
  <div style={{ position: 'relative' }}>
    <Header />
    <Windows
      CloseButton={CloseWindowButton}
      CollapseButton={CollapseWindowButton}
      ElementButton={OpenModalButton}
    />
    <DesktopElements ElementButton={OpenModalButton} />
    <MenuItems ShowWindowButton={ShowWindowButton} />
  </div>
);

export default Home;
