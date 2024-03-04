import { type ReactNode, type FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import s from './background.module.scss';
import {
  Circle,
  OrangeLarge,
  OrangeMedium,
  OrangeSmall,
  RedLarge,
  RedMedium,
  RedSmall,
} from './svg';

interface IBackgroundProps {
  children: ReactNode;
}

const Background: FC<IBackgroundProps> = ({ children }) => {
  const {
    theme: { name, background },
  } = useThemeContext();

  if (name === 'old') {
    return (
      <div className={s.background} style={{ background }}>
        {children}
      </div>
    );
  }

  return (
    <div className={s.background} style={{ background }}>
      <RedLarge
        className={`${s.background__topFigure} ${s.background_largeAnimation}`}
      />
      <RedMedium
        className={`${s.background__topFigure} ${s.background_mediumAnimation}`}
      />
      <RedSmall
        className={`${s.background__topFigure} ${s.background_smallAnimation}`}
      />
      <Circle className={s.background__centerFigure} width='15%' />
      <OrangeLarge
        className={`${s.background__bottomFigure} ${s.background_largeAnimation}`}
      />
      <OrangeMedium
        className={`${s.background__bottomFigure} ${s.background_mediumAnimation}`}
      />
      <OrangeSmall
        className={`${s.background__bottomFigure} ${s.background_smallAnimation}`}
      />
      {children}
    </div>
  );
};

export default Background;
