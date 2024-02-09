import { type FC } from 'react';
import s from './loader.module.scss';

interface ILoaderProps {
  size: number;
  className?: string;
}
const Loader: FC<ILoaderProps> = ({ size, className }) => (
  <div style={{ fontSize: size }} className={`${s.loader} ${className}`} />
);

export default Loader;
