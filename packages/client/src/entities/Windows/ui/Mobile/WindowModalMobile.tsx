import { type FC, memo } from 'react';
import { Loader, Text, useThemeContext } from '@ui';
import s from './windows.module.scss';
import { type TWindowType, type TWindowStatus } from '../../model';
import windowContent from '../windowContent';

interface IWindowMobileModalProps {
  id: number;
  name: string;
  CloseButton: FC<{ id: number; type: 'mobile' | 'close' }>;
  CollapseButton: FC<{ id: number }>;
  order: number;
  status: TWindowStatus;
  contentType: TWindowType;
  content: any;
  fetchStatus: 'pending' | 'error' | null;
  ElementButton: FC<{
    name: string;
    icon: string;
    id: number;
    type: TWindowType;
    elemId?: number;
    inFolder?: boolean;
  }>;
  moveOnTop: (id: number) => void;
}

// TODO: Разбить на windowModal и draggbleContainer

const WindowMobileModal: FC<IWindowMobileModalProps> = ({
  id,
  name,
  CloseButton,
  contentType,
  content,
  fetchStatus,
  ElementButton,
}) => {
  const {
    theme: { backOfElementsColor },
  } = useThemeContext();
  const ContentComponent = windowContent[contentType];

  return (
    <div
      className={s.windowModal}
      style={{
        backgroundColor: backOfElementsColor,
      }}
    >
      <div className={s.windowModal__header}>
        <CloseButton id={id} type='mobile' />
        <Text className={s.windowModal__title} inFolder>
          {name}
        </Text>
      </div>
      <div className={s.windowModal__content}>
        {fetchStatus === 'pending' && (
          <div className={s.windowModal__message}>
            <Loader size={30} />
          </div>
        )}

        {fetchStatus === 'error' && (
          <div className={s.windowModal__message}>
            <Text size='Large' bold>
              Error
            </Text>
          </div>
        )}

        {fetchStatus === null && (
          <ContentComponent
            isMobile
            ElementButton={ElementButton}
            {...content}
          />
        )}
      </div>
    </div>
  );
};

export default memo(WindowMobileModal);
