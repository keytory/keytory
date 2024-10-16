import { color } from '@styles/color.css';
import { style } from '@vanilla-extract/css';

export const rectangleButton = style({
  width: '100%',
  padding: '14px 24px',
  borderRadius: '12px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxSizing: 'border-box',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  position: 'relative',
});

export const loginButton = style([
  rectangleButton,
  {
    backgroundColor: color.primary[100],
    color: '#FFFFFF',
  },
]);

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
    border: '1px solid #eee',
  },
]);

export const emailButton = style([
  rectangleButton,
  {
    backgroundColor: color.basic[20],
    color: '#767676',
  },
]);

export const logoContainer = style({
  position: 'absolute',
  left: '20px',
});

export const textContainer = style({
  textAlign: 'center',
  flex: 1,
});
