import { type FC } from 'react';
import { Header, WindowMobile, DesktopMobile } from '@widgets';
// import SVG from './svg.svg';
// import s from './mobile.module.scss';

const Mobile: FC = () => (
  // <div className={s.mobile}>
  //   <SVG className={s.mobile__svg} />
  //   <span className={s.mobile__text}>
  //     Мобильная версия находится в разработке и будет доступна в ближайшее
  //     время. Пожалуйста, зайдите на сайт через компьютер.
  //   </span>
  //   <span className={s.mobile__text}>Спасибо за терпение!</span>
  // </div>
  <div style={{ position: 'relative' }}>
    <Header />
    <WindowMobile />
    <DesktopMobile />
  </div>
);

export default Mobile;
