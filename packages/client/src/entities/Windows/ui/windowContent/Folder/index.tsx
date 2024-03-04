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
}

const Folder: FC<IFolderProps> = ({ ElementButton, items }) => (
  <div className={s.folder}>
    {!items.length && <Text className={s.folder__message}>Папка пуста</Text>}
    {items.map(({ icon, id, name, type, elementId }) => (
      <ElementButton
        key={id}
        icon={icon}
        id={id}
        elemId={elementId}
        name={name}
        type={type}
        inFolder
      />
    ))}
  </div>
);

export default Folder;
