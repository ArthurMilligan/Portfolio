import { createContext, useContext } from 'react';
import { type ITheme } from './ThemeContextProvider';

export interface IThemeContext {
  theme: ITheme;
  changeTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: {
    name: 'old',
    fontFamily: '',
    color: '',
    colorInFolder: '',
    fontSizeNormal: 0,
    fontSizeLarge: 0,
    fontSizeSmall: 0,
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    backgroundColor: '',
    backOfElementsColor: '',
    background: '',
    backOfHeader: '',
    backOfWindowHeader: '',
    windowBorder: '',
    windowBorderRadius: 0,
    menuBorderRadius: 0,
  },
  changeTheme: () => {},
});

export const useThemeContext = (): IThemeContext => useContext(ThemeContext);

export default ThemeContext;
