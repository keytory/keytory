import { style } from '@vanilla-extract/css';

export const wrap = style({
  maxWidth: '550px',
  width: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});
