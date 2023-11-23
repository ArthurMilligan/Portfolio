import { useState, type FC } from 'react';
import { Icon, Text } from '..';
import s from './desktopIcon.module.scss';

interface IDesltopProps {
  icon: 'folder' | 'profile';
  name: string;
  onDoubleClick?: () => void;
}
const DesktopIcon: FC<IDesltopProps> = ({ icon, name, onDoubleClick }) => {
  const [active, setActive] = useState(false);
  const shortName =
    !active && name.length > 10 ? `${name.slice(0, 10)}...` : name;

  return (
    <button
      className={s.desktopIcon}
      tabIndex={0}
      onDoubleClick={onDoubleClick}
      onFocus={() => {
        setActive(true);
      }}
      onBlur={() => {
        setActive(false);
      }}
    >
      <Icon size={66} name={icon} />
      <Text className={s.desktopIcon__name}>{shortName}</Text>
    </button>
  );
};

export default DesktopIcon;
