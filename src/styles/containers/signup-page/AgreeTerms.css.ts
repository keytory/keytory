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

export const toggleButton = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  whiteSpace: 'nowrap',
  gap: '8px',
});

export const downArrow = style({
  transition: 'transform 0.3s ease',
});

export const expandedContent = style({
  padding: '8px 0px 0px 0px',
  color: '#555',
});
