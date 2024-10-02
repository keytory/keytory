import { style } from '@vanilla-extract/css';
import { color } from '../../color.css';

export const wrapper = style({
  paddingTop: 50,
  width: 927,
  margin: 'auto',
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
});

export const carouselWrapper = style({
  width: 927,
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
});

export const carousel = style({
  width: 756,
  height: 528,
  borderRadius: 8,
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
});

export const carouselImageContainer = style({
  width: 756 * 6,
  height: 528,
  position: 'absolute',
  transition: 'transform 1s ease-in-out',
});

export const carouselIndexContainer = style({
  position: 'absolute',
  bottom: 20,
  right: 24,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontSize: 14,
  color: color.basic[50],
});

export const carouselButton = style({
  border: 'none',
  background: 'transparent',
  padding: 0,
  marginTop: 3,
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const listItem = style({
  borderRadius: 6,
  cursor: 'pointer',
  border: `solid 2px ${color.basic[10]}`,
});

export const selectedListItem = style([
  listItem,
  {
    borderColor: color.primary[100],
  },
]);
