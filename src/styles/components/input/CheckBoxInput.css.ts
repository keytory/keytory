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
  borderRadius: '50%',
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
  },
  checked: {
    ...baseCheckmarkStyles,
    backgroundColor: '#ff6b6b',
    color: 'white',
    fontSize: '10px',
    border: 'none',
  },
});

export const textStyles = style({
  color: '#767676',
  fontSize: '16px',
});
