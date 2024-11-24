import { color } from '@styles/color.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'none',

  '@media': {
    'screen and (max-width: 600px)': {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px 20px 20px',
    },
  },
});

export const footerDiv = style({
  height: 100,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 36,
  marginBottom: 30,
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.5,
  color: color.basic[10],
  backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.6)
    ), 
    url("/images/main-bottom-background.jpg")
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const link = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  borderRadius: 8,
  background: color.primary[100],
  color: color.basic[10],
  fontSize: 16,
  fontWeight: 500,
  textDecoration: 'none',
  boxShadow: '0px 16px 16px -8px rgba(12, 12, 12, 0.2)',
});
