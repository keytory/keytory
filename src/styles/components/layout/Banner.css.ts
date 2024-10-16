import { style } from '@vanilla-extract/css';
import { color } from '@styles/color.css';

export const banner = style({
  width: '100%',
  height: 37,
  background: color.basic[110],
  color: color.basic[10],
  fontSize: 15,
  textAlign: 'center',
  lineHeight: 2.5,

  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});
