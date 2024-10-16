import { color } from '@styles/color.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: 927,
  margin: 'auto',
  background: '#F9F9F9',
  padding: '64px 0',
  marginBottom: 100,
});

export const title = style({
  fontSize: 30,
  fontWeight: 600,
  color: color.basic[110],
  textAlign: 'center',
  marginBottom: 28,
});

export const swiperContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
  padding: '0 17px',
});

export const swiper = style({
  width: 801,
  height: 402,
});

export const swiperButton = style({
  width: 36,
  height: 36,
  borderRadius: 18,
  background: color.basic[20],
  border: 'none',

  ':hover': {
    cursor: 'pointer',
  },
});

export const card = style({
  boxSizing: 'border-box',
  width: 256,
  height: 402,
  background: color.basic[10],
  borderRadius: 2,
  padding: 20,
});

export const imageContainer = style({
  borderRadius: 2,
  overflow: 'hidden',
  marginBottom: 20,
  position: 'relative',
});

export const numberContainer = style({
  width: 39,
  height: 39,
  borderRadius: 2,
  position: 'absolute',
  top: 10,
  left: 10,
  background: color.primary[100],
  color: color.basic[10],
  fontSize: 16,
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const captionStyle = style({
  fontSize: 12,
  fontWeight: 500,
  color: color.basic[50],
  marginBottom: 8,
});

export const cardTitle = style({
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1.2,
  color: color.basic[110],
  marginBottom: 20,
});

export const infoStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: 12,
  fontWeight: 500,
  color: color.basic[50],
  marginBottom: 8,
});

export const tagStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 48,
  height: 16,
  borderRadius: 3,
  fontSize: 10,
  fontWeight: 500,
  lineHeight: 1.6,
  background: color.primary[100],
  color: color.basic[10],
  marginRight: 8,
});
