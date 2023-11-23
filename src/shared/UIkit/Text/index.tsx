import { type FC } from 'react';
import s from './text.module.scss';

interface ITextProps {
  children: string;
  className?: string;
}

const Text: FC<ITextProps> = ({ children, className = '' }) => (
  <span className={`${s.text} ${className}`}>{children}</span>
);

export default Text;
