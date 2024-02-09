import { type ReactNode } from 'react';
import uuid from 'react-uuid';

export const addBrToText = (text: string): ReactNode => (
  <>
    {text.split('<br>').map((subText) => (
      <p key={uuid()}>{subText}</p>
    ))}
  </>
);
