import { type FC } from 'react';
import uuid from 'react-uuid';
import s from './switcher.module.scss';
import Text from '../Text';

interface ISwitcherProps {
  values: Array<{ label: string; name: string }>;
  setCurrent: (current: string) => void;
  current: string;
  name: string;
  id: string;
}

const Switcher: FC<ISwitcherProps> = ({
  name,
  id,
  values,
  setCurrent,
  current,
}) => {
  const handleSwitchClick = (): void => {
    const currentIndex = values.findIndex(({ label }) => label === current);

    if (currentIndex === values.length - 1) {
      setCurrent(values[0].label);

      return;
    }
    setCurrent(values[currentIndex + 1].label);
  };

  return (
    <div className={s.switcher}>
      <button
        aria-label={name}
        type='button'
        onClick={handleSwitchClick}
        className={s.switcher__button}
        name={name}
        id={id}
      />
      <label className={s.switcher__label} htmlFor={name}>
        {values.map(({ label, name: ruName }) => (
          <Text
            key={uuid()}
            className={`${s.switcher__item} ${
              label === current ? s.switcher__item_active : null
            }`}
          >
            {ruName}
          </Text>
        ))}
      </label>
    </div>
  );
};

export default Switcher;
