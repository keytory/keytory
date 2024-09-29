import { style } from '@vanilla-extract/css';

export const inputBaseStyle = style({
  width: '100%',
  padding: '12px 24px',
  borderRadius: '12px',
  border: '1px solid #FF9A79',
  boxSizing: 'border-box',
  transition: 'background-color 0.2s ease',
  ':focus': {
    outline: 'none',
    backgroundColor: '#FFF1EC',
    color: '#FF8B66',
  },
});
