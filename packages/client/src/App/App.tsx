import { type FC } from 'react';
import './styles/style.css';
import { Background } from '@ui';
import Home, { Mobile } from '../pages';
import withProviders from './providers';

const { innerWidth } = window;

const App: FC = () => (
  <Background>
    {innerWidth < 750 ? (
      <Mobile />
    ) : (
      // <HelloWindow>
      <Home />
      // </HelloWindow>
    )}
  </Background>
);

export default withProviders(<App />);
