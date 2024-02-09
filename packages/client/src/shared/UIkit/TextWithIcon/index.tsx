import { type FC } from 'react';
import { Icon, type TIconName } from '../Icon';
import Text from '../Text';
import s from './textWithIcon.module.scss';

interface ITextWithIconProps {
  children: string;
  iconName: TIconName;
  size?: number;
  className?: string;
}

const TextWithIcon: FC<ITextWithIconProps> = ({
  iconName,
  children,
  className,
  size = 16,
}) => (
  <span className={`${s.textWithIcon} ${className}`}>
    <Icon size={size} name={iconName} />
    <Text bold>{children}</Text>
  </span>
);

export default TextWithIcon;
