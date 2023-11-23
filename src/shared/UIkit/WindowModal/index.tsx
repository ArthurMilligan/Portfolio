import { type FC, type MouseEvent as ReactMouseEvent } from 'react';
import s from './windowModal.module.scss';
import useDraggable from './lib/hooks/useDraggable';
import { PanelButton, ResizeContainer, Text } from '..';

interface IWindowModalProps {
  name: string;
}
const WindowModal: FC<IWindowModalProps> = ({ name }) => {
  const { handleMouseDown, handleMouseMove, coord, isMove } = useDraggable();
  const handleСollapse = (e: ReactMouseEvent<HTMLElement>): void => {
    console.log('collapse', e);
  };
  const handleClose = (e: ReactMouseEvent<HTMLElement>): void => {
    console.log('close', e);
  };

  return (
    <ResizeContainer className={s.windowModal} style={coord}>
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        className={`${s.windowModal__header} ${
          isMove ? s.windowModal__header_moving : ''
        }`}
      >
        {/* TODO: Добавить нормальное выравнивание и нарисовать полоски */}
        <PanelButton
          onClick={handleClose}
          type='close'
          name={`${Date.now()}`}
        />
        <PanelButton
          onClick={handleСollapse}
          type='collapse'
          name={`${Date.now()}`}
        />
        <Text
          className={`${s.windowModal__title} ${
            isMove ? s.windowModal__title_moving : ''
          }`}
        >
          {name}
        </Text>
      </div>
    </ResizeContainer>
  );
};

export default WindowModal;
