import { type ReactNode, type FC } from 'react';
import s from './text.module.scss';
import { useThemeContext } from '../ThemeContext';

interface ITextProps {
  children: string | string[] | ReactNode;
  size?: 'Normal' | 'Small' | 'Large';
  className?: string;
  bold?: boolean;
  inFolder?: boolean;
}

const Text: FC<ITextProps> = ({
  children,
  size = 'Normal',
  className = '',
  bold = false,
  inFolder = false,
}) => {
  const { theme } = useThemeContext();

  return (
    <span
      className={`${s.text} ${bold && s.text_bold} ${className}`}
      style={{
        fontSize: theme[`fontSize${size}`],
        fontFamily: theme.fontFamily,
        color: inFolder ? theme.colorInFolder : theme.color,
      }}
    >
      {children}
    </span>
  );
};

export default Text;
