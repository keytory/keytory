import { color } from '@styles/color.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
});

export const inputBox = style({
  display: 'flex',
  gap: '4px',
  width: '100%',
  height: '40px',
  margin: '8px 0px',
});

globalStyle(`${inputBox} > input:disabled`, {
  backgroundColor: color.basic[20],
});

globalStyle(`${inputBox} > input`, {
  flexGrow: 1,
});

globalStyle(`${inputBox} > button`, {
  width: '100px',
});

export const passwordBox = style({
  display: 'flex',
  gap: '4px',
  flexDirection: 'column',
  margin: '8px 0px',
});

export const descriptionText = style({
  color: color.basic[20],
  fontSize: '12px',
});

export const successText = style([
  descriptionText,
  {
    color: color.success,
  },
]);

export const errorText = style([
  descriptionText,
  {
    color: color.error,
  },
]);
