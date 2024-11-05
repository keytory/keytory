import { color } from '@styles/color.css';
import { style } from '@vanilla-extract/css';

export const inputBaseStyle = style({
  flexGrow: 1,
  padding: '12px 24px',
  borderRadius: '12px',
  border: `1px solid ${color.basic[20]}`,
  boxSizing: 'border-box',
  transition: 'background-color 0.2s ease',
  ':focus': {
    outline: 'none',
    backgroundColor: color.primary[10],
    color: color.primary[100],
  },
});
