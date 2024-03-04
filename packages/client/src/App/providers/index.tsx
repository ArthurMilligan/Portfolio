import { type ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';

const withProviders = (children: ReactNode): ReactNode => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default withProviders;
