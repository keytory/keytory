import { style } from '@vanilla-extract/css';

export const wrapper = style({
  height: 'calc(100dvh - 37px)',
  display: 'flex',
  flexDirection: 'row',

  '@media': {
    'screen and (max-width: 600px)': {
      height: '100dvh',
    },
  },
});
