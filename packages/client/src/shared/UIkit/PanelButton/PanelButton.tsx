import { type FC, type MouseEvent as ReactMouseEvent } from 'react';

import s from './panelButton.module.scss';
import { Icon } from '../Icon';

interface IPanelButtonProps {
  type: 'close' | 'collapse' | 'mobile';
  name: string;
  onClick?: (e: ReactMouseEvent<HTMLElement>) => void;
}

const PanelButton: FC<IPanelButtonProps> = ({ type, name, onClick }) => (
  <button
    name={name}
    aria-label={`${type}_button`}
    className={`${s.panelButton} ${s[type]}`}
    type='button'
    onClick={onClick}
  >
    {type === 'mobile' && <Icon name='back' size={40} />}
  </button>
);

export default PanelButton;
