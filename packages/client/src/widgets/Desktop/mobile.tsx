import { DesktopElementsMobile } from '@entities';
import { OpenModalButtonMobile } from '@features';
import { type FC } from 'react';

const DesktopMobile: FC = () => (
  <DesktopElementsMobile ElementButton={OpenModalButtonMobile} />
);

export default DesktopMobile;
