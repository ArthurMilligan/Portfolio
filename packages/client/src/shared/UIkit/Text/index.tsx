import { type ReactNode, type FC } from 'react';
import s from './text.module.scss';

interface ITextProps {
  children: string | string[] | ReactNode;
  size?: 'normal' | 'small' | 'large';
  className?: string;
  bold?: boolean;
}

const Text: FC<ITextProps> = ({
  children,
  size = 'normal',
  className = '',
  bold = false,
}) => (
  <span
    className={`${s.text} ${s[`text_${size}`]} ${
      bold && s.text_bold
    } ${className}`}
  >
    {children}
  </span>
);

export default Text;
