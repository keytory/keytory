import { style } from '@vanilla-extract/css';
import { color } from '../../color.css';

export const sidebar = style({
  boxSizing: 'border-box',
  width: 200,
  height: '100%',
  background: color.basic[10],
  display: 'flex',
  flexDirection: 'column',
  padding: '0 30px',
});

export const sidebarLogo = style({
  height: 40,
  margin: '40px 0',
  fontSize: 40,
  textAlign: 'center',
});

export const sidebarTop = style({
  flexGrow: 1,
});

export const sidebarLink = style({
  display: 'block',
  height: 44,
  fontSize: 17,
  fontWeight: 500,
  color: color.basic[110],
  textDecoration: 'none',
});

export const sidebarLinkActive = style({
  display: 'block',
  position: 'relative',
  width: 'fit-content',
  height: 44,
  fontSize: 17,
  fontWeight: 500,
  textDecoration: 'none',
  color: color.primary[100],
  '::after': {
    content: '""',
    display: 'block',
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: color.primary[100],
    position: 'absolute',
    top: -2,
    right: -12,
  },
});
