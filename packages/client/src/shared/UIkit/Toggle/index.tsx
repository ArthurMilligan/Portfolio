import { type FC } from 'react';
import s from './toggle.module.scss';

interface IToggle {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const Toggle: FC<IToggle> = ({ value, onChange, disabled = false }) => {
  const handleChange = (): void => {
    onChange(!value);
  };

  return (
    <input
      type='checkbox'
      className={s.toggle}
      checked={value}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default Toggle;
