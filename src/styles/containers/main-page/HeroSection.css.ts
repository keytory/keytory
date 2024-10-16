import { color } from '@styles/color.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  boxSizing: 'border-box',
  width: 927,
  margin: 'auto',
  padding: '80px 60px',

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      padding: '24px 20px',
    },
  },
});

export const caption = style({
  color: '#FFB69F',
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 14,
});

export const title = style({
  color: color.basic[100],
  fontSize: 36,
  fontWeight: 600,
  marginBottom: 12,

  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: 22,
    },
  },
});

export const detail = style({
  color: '#767676',
  fontSize: 16,
  fontWeight: 400,
  whiteSpace: 'pre-line',
  lineHeight: 1.5,
  marginBottom: 20,
});

export const button = style({
  width: 187,
  height: 36,
  background: '#FF6E40',
  borderRadius: 4,
  border: 'none',
  color: color.basic[10],
  fontSize: 15,
  fontWeight: 500,

  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});
