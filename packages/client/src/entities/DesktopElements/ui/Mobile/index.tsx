import { type FC } from 'react';
import { observer } from 'mobx-react-lite';
import { type TWindowType } from '@entities';
import s from './desktopElementsMobile.module.scss';
import { DesktopElementsStore } from '../../model';

interface IDesktopElementsMobileProps {
  ElementButton: FC<{
    name: string;
    icon: string;
    id: number;
    elemId?: number;
    type: TWindowType;
  }>;
}

const DesktopElementsMobile: FC<IDesktopElementsMobileProps> = observer(
  ({ ElementButton }) => {
    const { elements, fetchStatus } = DesktopElementsStore;

    if (fetchStatus === 'error') {
      return <div>error</div>;
    }
    if (fetchStatus === 'pending') {
      return <div>loading</div>;
    }

    return (
      <div className={s.desktop}>
        {elements.map(({ name, id, icon, type, elementId, folderId }) => (
          <div key={`${id}_${type}`} className={s.desktop__element}>
            <ElementButton
              elemId={elementId ?? folderId}
              type={type}
              name={name}
              id={id}
              icon={icon}
            />
          </div>
        ))}
      </div>
    );
  },
);

export default DesktopElementsMobile;
