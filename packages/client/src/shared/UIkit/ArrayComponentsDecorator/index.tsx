import { type FC, type ReactNode, useState } from 'react';
import s from './arrayComponentDecorator.module.scss';
import Text from '../Text';

interface IArrayComponentDecoratorProps {
  children: ReactNode[];
  className?: string;
}

const ArrayComponentsDecorator: FC<IArrayComponentDecoratorProps> = ({
  children,
  className = '',
}) => {
  const [show, setShow] = useState(false);

  if (children.length < 4) {
    return children;
  }

  const handleButtonClick = (): void => {
    setShow(!show);
  };
  const displayingArray = show ? children : children?.slice(0, 4);

  return (
    <>
      {displayingArray}
      <div className={className}>
        <button
          className={s.arrayComponentDecorator__button}
          type='button'
          onClick={handleButtonClick}
        >
          <Text inFolder>{show ? 'Свернуть' : 'Развернуть'}</Text>
        </button>
      </div>
    </>
  );
};

export default ArrayComponentsDecorator;
