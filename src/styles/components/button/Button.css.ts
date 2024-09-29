import { style } from '@vanilla-extract/css';

export const rectangleButton = style({
  width: '100%',
  padding: '12px 24px',
  borderRadius: '12px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxSizing: 'border-box',
  border: 'none',
});

export const kakaoButton = style([
  rectangleButton,
  {
    backgroundColor: '#FEE500',
  },
]);

export const googleButton = style([
  rectangleButton,
  {
    backgroundColor: '#FFFFFF',
  },
]);

export const emailButton = style([
  rectangleButton,
  {
    backgroundColor: '#EFEFEF',
    color: '#767676',
  },
]);
