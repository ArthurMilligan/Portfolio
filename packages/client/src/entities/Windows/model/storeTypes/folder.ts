import { type TIconName } from '@ui';
import { type TWindowType } from '..';

export interface IFolder {
  items: Array<{
    id: number;
    name: string;
    icon: TIconName;
    type: TWindowType;
    elementId: number;
  }>;
  parentId: number | null;
}
