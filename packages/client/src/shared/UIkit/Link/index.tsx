import { type FC, type ReactNode } from 'react';
import s from './link.module.scss';

interface ILinkProps {
  children: ReactNode | string | string[];
  href: string;
  className?: string;
}
const Link: FC<ILinkProps> = ({ children, className, href }) => (
  <a href={href} className={`${s.link} ${className}`}>
    {children}
  </a>
);

export default Link;
