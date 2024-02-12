import { type FC, type ReactNode } from 'react';
import s from './link.module.scss';

interface ILinkProps {
  children: ReactNode | string | string[];
  href: string;
  className?: string;
}
const Link: FC<ILinkProps> = ({ children, className, href }) => (
  <a
    href={href}
    target='_blank'
    className={`${s.link} ${className}`}
    rel='noreferrer'
  >
    {children}
  </a>
);

export default Link;
