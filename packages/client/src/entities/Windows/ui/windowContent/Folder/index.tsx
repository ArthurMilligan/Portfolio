import { type FC } from 'react';
import { Text } from '@ui';
import type { IFolder, TWindowType } from '../../../index';
import s from './folder.module.scss';

interface IFolderProps extends IFolder {
  ElementButton: FC<{
    name: string;
    icon: string;
    id: number;
    type: TWindowType;
    elemId?: number;
    inFolder?: boolean;
  }>;
  isMobile?: boolean;
}

const Folder: FC<IFolderProps> = ({ ElementButton, items, isMobile }) => (
  <div
    className={s.folder}
    style={{
      columnGap: isMobile ? '3vw' : undefined,
      rowGap: isMobile ? '3vh' : undefined,
    }}
  >
    {!items.length && <Text className={s.folder__message}>Папка пуста</Text>}
    {items.map(({ icon, id, name, type, elementId }) => (
      <div
        style={{ width: isMobile ? '30%' : 120 }}
        className={s.folder__element}
      >
        <ElementButton
          key={id}
          icon={icon}
          id={id}
          elemId={elementId}
          name={name}
          type={type}
          inFolder
        />
      </div>
    ))}
  </div>
);

export default Folder;
