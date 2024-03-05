import { Windows } from '@entities';
import {
  CloseWindowButton,
  CollapseWindowButton,
  OpenModalButton,
} from '@features';
import { type FC } from 'react';

const Window: FC = () => (
  <Windows
    CloseButton={CloseWindowButton}
    CollapseButton={CollapseWindowButton}
    ElementButton={OpenModalButton}
  />
);

export default Window;
