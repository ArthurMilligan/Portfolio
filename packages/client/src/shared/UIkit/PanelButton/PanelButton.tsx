import { type FC, type MouseEvent as ReactMouseEvent } from 'react';

import s from './panelButton.module.scss';

interface IPanelButtonProps {
  type: 'close' | 'collapse';
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
  />
);

export default PanelButton;
