import { type ReactNode, type FC, createElement, type HTMLProps } from 'react';
import s from './heading.module.scss';

interface IHeadingProps extends HTMLProps<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}
const Heading: FC<IHeadingProps> = ({ level = 1, children, className }) =>
  createElement(
    `h${level}`,
    {
      className: `${className ?? ''} ${s.heading} ${
        s[`heading_level_${level}`]
      }`,
    },
    children,
  );

export default Heading;
