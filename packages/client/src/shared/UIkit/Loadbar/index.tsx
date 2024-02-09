import { type FC } from 'react';
import uuid from 'react-uuid';
import s from './loadbar.module.scss';

interface ILoadbarProps {
  value: number;
  width: number;
  height: number;
}
const loaderElementsCount = 15;
const loaderElements = Array.from(Array(loaderElementsCount).keys());

const Loadbar: FC<ILoadbarProps> = ({ value, width, height }) => (
  <div style={{ width, height }} className={s.loadbar}>
    {loaderElements.map((_, index) => (
      <div
        key={uuid()}
        className={s.loadbar__element}
        style={{
          width: `${width / loaderElementsCount}%`,
          backgroundColor:
            index / loaderElementsCount < value ? 'black' : undefined,
        }}
      />
    ))}
  </div>
);

export default Loadbar;
