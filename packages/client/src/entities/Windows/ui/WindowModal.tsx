import { type FC, memo } from 'react';
import { useDraggable } from '@lib';
import { Loader, ResizeContainer, Text, useThemeContext } from '@ui';
import s from './windows.module.scss';
import { type TWindowType, type TWindowStatus } from '../model';
import windowContent from './windowContent';

interface IWindowModalProps {
  id: number;
  name: string;
  CloseButton: FC<{ id: number }>;
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

const WindowModal: FC<IWindowModalProps> = ({
  id,
  name,
  CloseButton,
  CollapseButton,
  order,
  status,
  contentType,
  content,
  fetchStatus,
  ElementButton,
  moveOnTop,
}) => {
  const {
    theme: {
      backOfElementsColor,
      backOfWindowHeader,
      windowBorder,
      windowBorderRadius,
    },
  } = useThemeContext();
  const { handleMouseDown, ref, isMove } = useDraggable(order);
  const ContentComponent = windowContent[contentType];
  const handleMoveonTop = (): void => {
    moveOnTop(id);
  };

  // TODO: Подумать о перемещении папок в другие папки

  return (
    <div
      ref={ref}
      className={`${s.windowModal__dragContainer} ${
        s[`windowModal__dragContainer_${status}`]
      }`}
      style={{ zIndex: order }}
    >
      <ResizeContainer
        className={s.windowModal}
        style={{
          backgroundColor: backOfElementsColor,
          borderRadius: windowBorderRadius,
          border: windowBorder,
        }}
        customOnMouseDown={handleMoveonTop}
      >
        <div
          onMouseDown={handleMouseDown}
          style={{
            backgroundColor: backOfWindowHeader,
            borderTopLeftRadius: windowBorderRadius,
            borderTopRightRadius: windowBorderRadius,
            borderBottom: windowBorder,
          }}
          className={`${s.windowModal__header} ${
            isMove ? s.windowModal__header_moving : ''
          }`}
        >
          <CloseButton id={id} />
          <CollapseButton id={id} />
          <Text
            className={`${s.windowModal__title} ${
              isMove ? s.windowModal__title_moving : ''
            }`}
            inFolder
          >
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
            <ContentComponent ElementButton={ElementButton} {...content} />
          )}
        </div>
      </ResizeContainer>
    </div>
  );
};

export default memo(WindowModal);
