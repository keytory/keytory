import { color } from '@styles/color.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const checkBoxStyles = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const hiddenCheckboxStyles = style({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
});

const baseCheckmarkStyles = {
  width: '18px',
  height: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.2s ease',
  userSelect: 'none' as const,
  boxSizing: 'border-box' as const,
};

export const customCheckmarkVariants = styleVariants({
  unchecked: {
    ...baseCheckmarkStyles,
    backgroundColor: 'transparent',
    border: '1.2px solid #EFEFEF',
    borderRadius: '50%',
  },
  checked: {
    ...baseCheckmarkStyles,
    backgroundColor: color.primary[100],
    color: 'white',
    fontSize: '10px',
    borderRadius: '50%',
    border: 'none',
  },
});

export const customSquareCheckmarkerVariants = styleVariants({
  unchecked: {
    ...baseCheckmarkStyles,
    backgroundColor: color.basic[20],
    border: '1.2px solid #EFEFEF',
  },
  checked: {
    ...baseCheckmarkStyles,
    backgroundColor: color.primary[100],
    color: 'white',
    fontSize: '10px',
    border: 'none',
  },
});

export const textStyles = style({
  color: '#767676',
  fontSize: '16px',
});
