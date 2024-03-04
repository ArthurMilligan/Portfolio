import { type FC, type ReactNode, useEffect, useState } from 'react';
import s from './helloWindow.module.scss';
import Text from '../Text';
import { Icon } from '../Icon';

interface IHelloWindowsProps {
  children: ReactNode;
}

const HelloWindow: FC<IHelloWindowsProps> = ({ children }) => {
  const [isDisplaying, setIsDisplaying] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      setIsDisplaying(false);
    }, 3 * 1000);

    const animationTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 2.5 * 1000);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  if (isDisplaying) {
    return (
      <>
        <div
          className={`${s.helloWindow} ${
            startAnimation && s.helloWindow_animate
          }`}
        >
          <div className={s.helloWindow__content}>
            <Icon
              className={s.helloWindow__topIcon}
              name='mountains'
              size={60}
            />
            <Text bold size='Large' inFolder className={s.helloWindow__text}>
              Welcome to Arthur&apos;s portfolio
            </Text>
            <Icon
              className={s.helloWindow__bottomIcon}
              name='mountains2'
              size={60}
            />
          </div>
        </div>
        {children}
      </>
    );
  }

  return children;
};

export default HelloWindow;
