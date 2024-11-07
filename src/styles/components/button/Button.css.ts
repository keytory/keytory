import { color } from '@styles/color.css';
import { style } from '@vanilla-extract/css';

export const rectangleButton = style({
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

export const primaryButton = style([
  rectangleButton,
  {
    backgroundColor: color.primary[10],
    color: color.primary[100],
    border: `1px solid ${color.primary[70]}`,
  },
]);

export const loginButton = style([
  rectangleButton,
  {
    width: '100%',
    backgroundColor: color.primary[100],
    color: '#FFFFFF',
    fontSize: '14px',
  },
]);

export const kakaoButton = style([
  rectangleButton,
  {
    width: '100%',
    backgroundColor: '#FEE500',
    fontSize: '14px',
    color: 'black',
  },
]);

export const googleButton = style([
  rectangleButton,
  {
    width: '100%',
    backgroundColor: '#FFFFFF',
    border: '1px solid #eee',
    fontSize: '14px',
    color: 'black',
  },
]);

export const emailButton = style([
  rectangleButton,
  {
    width: '100%',
    backgroundColor: color.basic[20],
    color: '#767676',
    fontSize: '14px',
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
