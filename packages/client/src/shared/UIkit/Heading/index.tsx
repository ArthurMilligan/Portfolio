import { type ReactNode, type FC, createElement, type HTMLProps } from 'react';
import s from './heading.module.scss';
import { useThemeContext } from '../ThemeContext';

interface IHeadingProps extends HTMLProps<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}
const Heading: FC<IHeadingProps> = ({
  level = 1,
  children,
  className = '',
}) => {
  const { theme } = useThemeContext();

  return createElement(
    `h${level}`,
    {
      className: `${className} ${s.heading} ${s.heading}`,
      style: {
        fontFamily: theme.fontFamily,
        fontSize: theme[`h${level}`],
      },
    },
    children,
  );
};

export default Heading;
