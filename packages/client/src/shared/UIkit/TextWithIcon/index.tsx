import { type FC } from 'react';
import { Icon, type TIconName } from '../Icon';
import Text from '../Text';
import s from './textWithIcon.module.scss';

interface ITextWithIconProps {
  children: string;
  iconName: TIconName;
  size?: number;
  className?: string;
  bold?: boolean;
}

const TextWithIcon: FC<ITextWithIconProps> = ({
  iconName,
  children,
  className,
  size = 16,
  bold = false,
}) => (
  <span className={`${s.textWithIcon} ${className}`}>
    <Icon className={s.textWithIcon__icon} size={size} name={iconName} />
    <Text inFolder className={s.textWithIcon__text} bold={bold}>
      {children}
    </Text>
  </span>
);

export default TextWithIcon;
