import { color } from '@styles/color.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  width: 927,
  margin: 'auto',
  background: '#F9F9F9',
  padding: '64px 0',
  marginBottom: 100,

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%',
      background: '#ffffff',
      padding: '16px 0',
    },
  },
});

export const title = style({
  fontSize: 30,
  fontWeight: 600,
  color: color.basic[110],
  textAlign: 'center',
  marginBottom: 28,

  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: 22,
      textAlign: 'left',
      margin: '0 20px 20px 20px',
      textTransform: 'uppercase',
    },
  },
});

export const swiperContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,

  '@media': {
    'screen and (max-width: 600px)': {
      padding: 0,
    },
  },
});

export const swiper = style({
  width: 801,
  height: 402,

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
    },
  },
});

globalStyle(`.${wrapper} .swiper-wrapper`, {
  '@media': {
    'screen and (max-width: 600px)': {
      padding: '0 16px',
    },
  },
});

globalStyle(`.${wrapper} .swiper-slide`, {
  '@media': {
    'screen and (max-width: 600px)': {
      width: 300,
    },
  },
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

  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});

export const swiperPrevButton = style([
  swiperButton,
  {
    backgroundImage: 'url(/icons/main-slider-prev.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
]);

export const swiperNextButton = style([
  swiperButton,
  {
    backgroundImage: 'url(/icons/main-slider-next.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
]);

export const card = style({
  boxSizing: 'border-box',
  width: 256,
  height: 402,
  background: color.basic[10],
  borderRadius: 2,
  padding: 20,

  '@media': {
    'screen and (max-width: 600px)': {
      width: 300,
      height: 268,
      padding: 0,
    },
  },
});

export const imageContainer = style({
  width: 216,
  height: 200,
  borderRadius: 2,
  overflow: 'hidden',
  marginBottom: 20,
  position: 'relative',

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%',
      height: 172,
      borderRadius: 8,
      marginBottom: 16,
    },
  },
});

export const imageStyle = style({
  objectFit: 'cover',
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

  '@media': {
    'screen and (max-width: 600px)': {
      width: 26,
      height: 26,
      fontWeight: 400,
    },
  },
});

export const captionStyle = style({
  fontSize: 12,
  fontWeight: 500,
  color: color.basic[50],
  marginBottom: 8,

  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});

export const cardTitle = style({
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1.2,
  color: color.basic[110],
  marginBottom: 20,

  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: 18,
    },
  },
});

export const infoStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: 12,
  fontWeight: 500,
  color: color.basic[50],
  marginBottom: 8,

  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});

export const tagStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1.6,
  background: color.primary[100],
  color: color.basic[10],
});

export const smallTagStyle = style([
  tagStyle,
  {
    width: 48,
    height: 16,
    fontSize: 10,
    fontWeight: 500,
    marginRight: 8,
    borderRadius: 3,
  },
]);

export const largeTagStyle = style([
  tagStyle,
  {
    height: 26,
    padding: '0 10px',
    fontSize: 16,
    fontWeight: 400,
    marginRight: 4,
    borderRadius: 4,
  },
]);

export const largeTagSubStyle = style([
  largeTagStyle,
  {
    background: color.primary[60],
  },
]);

export const tagGroup = style({
  display: 'none',

  '@media': {
    'screen and (max-width: 600px)': {
      display: 'flex',
      marginBottom: 8,
    },
  },
});
