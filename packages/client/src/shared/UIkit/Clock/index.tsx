import { useState, type FC } from 'react';
import Text from '../Text';
import s from './clock.module.scss';

const intlTime = new Intl.DateTimeFormat('ru', {
  hour: 'numeric',
  minute: 'numeric',
});
// const intlDate = new Intl.DateTimeFormat('ru', {
//   year: 'numeric',
//   month: 'numeric',
//   day: 'numeric',
// });

const Clock: FC = () => {
  const [time, setTime] = useState(Date.now());

  setTimeout(() => {
    setTime(Date.now());
  }, 10000);

  return (
    <div className={s.clock}>
      <Text bold className={s.clock__text}>
        {intlTime.format(time)}{' '}
      </Text>
      {/* <Text bold size='small' className={s.clock__text}>
        {intlDate.format(time)}{' '}
      </Text> */}
    </div>
  );
};

export default Clock;
