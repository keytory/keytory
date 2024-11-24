import { color } from '@styles/color.css';
import { style } from '@vanilla-extract/css';

export const signup = style({
  width: '100%',
  backgroundColor: color.primary[100],
  border: 'none',
  color: color.basic[10],
  borderRadius: '4px',
  padding: '14px',
  fontWeight: 700,
  fontSize: '18px',
});

export const formStyle = style({
  width: '100%',
  display: 'flex',
  gap: '48px',
  flexDirection: 'column',
});
