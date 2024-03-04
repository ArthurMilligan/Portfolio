import { ThemeContextProvider, type TThemes } from '@ui';
import { type FC, type ReactNode } from 'react';

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const themes: TThemes = {
    old: {
      name: 'old',
      fontFamily: 'EightBitsRu',
      color: 'black',
      colorInFolder: 'black',
      fontSizeNormal: 20,
      fontSizeLarge: 24,
      fontSizeSmall: 16,
      h1: 30,
      h2: 26,
      h3: 24,
      h4: 20,
      backgroundColor: '#E4DCCF',
      backOfElementsColor: '#E4DCCF',
      background: '#E4DCCF',
      backOfHeader: 'rgba(228, 220, 207, 1)',
      backOfWindowHeader: 'rgba(217, 217, 217, 1)',
      windowBorder: '2px solid black',
      windowBorderRadius: 0,
      menuBorderRadius: 0,
    },
    new: {
      name: 'new',
      fontFamily: 'SF',
      color: 'white',
      colorInFolder: 'black',
      fontSizeNormal: 16,
      fontSizeLarge: 20,
      fontSizeSmall: 12,
      h1: 26,
      h2: 22,
      h3: 20,
      h4: 16,
      backgroundColor: '#E4DCCF',
      backOfElementsColor: 'white',
      background: 'rgba(0, 100, 149, 1)',
      backOfHeader: 'rgba(93, 165, 201, 0.57)',
      backOfWindowHeader: 'rgba(194, 194, 194, 1)',
      windowBorder: '0.5px solid black',
      windowBorderRadius: 15,
      menuBorderRadius: 15,
    },
  };

  return (
    <ThemeContextProvider themes={themes}>{children}</ThemeContextProvider>
  );
};

export default ThemeProvider;
