import { type FC } from 'react';
import { Desktop, Header, Menu, Window } from '@widgets';

const Home: FC = () => (
  <div style={{ position: 'relative' }}>
    <Header />
    <Window />
    <Desktop />
    <Menu />
  </div>
);

export default Home;
