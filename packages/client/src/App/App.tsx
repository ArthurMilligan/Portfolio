import { type FC } from 'react';
import Home, { Mobile } from '../pages';
import './styles/style.css';
// eslint-disable-next-line import/order
import { HelloWindow } from '@ui';

const { innerWidth } = window;

const App: FC = () => (
  <div>
    {innerWidth < 750 ? (
      <Mobile />
    ) : (
      <HelloWindow>
        <Home />
      </HelloWindow>
    )}
  </div>
);

export default App;
