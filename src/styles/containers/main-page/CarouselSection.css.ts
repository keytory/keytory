import { style } from '@vanilla-extract/css';
import { color } from '../../color.css';

export const wrapper = style({
  paddingTop: 50,
  width: 927,
  margin: 'auto',

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      paddingTop: 0,
    },
  },
});

export const carouselText = style({
  width: 155,
  height: 47,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#F9F9F9',
  borderRadius: 24,
  color: '#767676',
  fontSize: 12,
  fontWeight: 600,
  marginLeft: 772,
  marginBottom: 16,

  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});

export const carouselWrapper = style({
  width: 927,
  display: 'flex',
  flexDirection: 'row',
  gap: 16,

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%',
    },
  },
});

export const carousel = style({
  width: 756,
  height: 528,
  display: 'flex',
  position: 'relative',

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%',
      height: 284,
    },
  },
});

export const carouselImage = style({
  borderRadius: 8,
});

export const carouselIndexContainer = style({
  position: 'absolute',
  zIndex: 100,
  bottom: 16,
  right: 24,
  display: 'flex',
  alignItems: 'center',
  borderRadius: 20,
  padding: '6px 14px',
  gap: 4,
  fontSize: 14,
  color: color.basic[10],
  background: `rgba(0, 0, 0, 0.5)`,
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});

export const listItem = style({
  borderRadius: 6,
  cursor: 'pointer',
  boxSizing: 'border-box',
});

export const selectedListItem = style([
  listItem,
  {
    border: `solid 2px ${color.primary[100]}`,
  },
]);
