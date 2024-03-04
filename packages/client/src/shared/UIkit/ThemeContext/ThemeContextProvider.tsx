import { useState, type FC, type ReactNode } from 'react';
import ThemeContext from './ThemeContext';

export interface ITheme {
  name: 'old' | 'new';
  fontFamily: string;
  color: string;
  colorInFolder: string;
  fontSizeNormal: number;
  fontSizeLarge: number;
  fontSizeSmall: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  backgroundColor: string;
  backOfElementsColor: string;
  background: string;
  backOfHeader: string;
  backOfWindowHeader: string;
  windowBorder: string;
  windowBorderRadius: number;
  menuBorderRadius: number;
}
export type TThemes = Record<'old' | 'new', ITheme>;

interface IThemeContextProviderProps {
  children: ReactNode;
  themes: TThemes;
}

const ThemeContextProvider: FC<IThemeContextProviderProps> = ({
  children,
  themes,
}) => {
  const [theme, setTheme] = useState<ITheme>(themes.new);
  const changeTheme = (): void => {
    if (theme.name === 'old') {
      setTheme(themes.new);
    } else {
      setTheme(themes.old);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
