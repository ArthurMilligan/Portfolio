import { Toggle, useThemeContext } from '@ui';
import { useState, type FC } from 'react';

const ThemeChangeToggle: FC = () => {
  const {
    theme: { name },
    changeTheme,
  } = useThemeContext();

  const [value, setValue] = useState(name === 'old');
  const onChange = (val: boolean): void => {
    setValue(val);
    changeTheme();
  };

  return <Toggle value={value} onChange={onChange} />;
};

export default ThemeChangeToggle;
