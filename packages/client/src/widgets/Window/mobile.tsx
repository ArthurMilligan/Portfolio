import { WindowsMobile } from '@entities';
import {
  CloseWindowButton,
  CollapseWindowButton,
  OpenModalButtonMobile,
} from '@features';
import { type FC } from 'react';

const WindowMobile: FC = () => (
  <WindowsMobile
    CloseButton={CloseWindowButton}
    CollapseButton={CollapseWindowButton}
    ElementButton={OpenModalButtonMobile}
  />
);

export default WindowMobile;
