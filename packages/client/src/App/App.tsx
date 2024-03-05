import { type FC } from 'react';
import './styles/style.css';
import { Background, BackgroundMobile } from '@ui';
import Home, { Mobile } from '../pages';
import withProviders from './providers';

const { innerWidth } = window;

const App: FC = () =>
  innerWidth < 750 ? (
    <BackgroundMobile>
      <Mobile />
    </BackgroundMobile>
  ) : (
    <Background>
      <Home />
    </Background>
  );

export default withProviders(<App />);
