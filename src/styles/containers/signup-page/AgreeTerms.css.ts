import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

export const items = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const checkbox = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
});

export const textStyles = style({
  marginLeft: '8px',
});