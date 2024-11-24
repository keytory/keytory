import React, { useState } from 'react';
import {
  checkBoxStyles,
  customCheckmarkVariants,
  hiddenCheckboxStyles,
  textStyles,
} from '@styles/components/input/CheckBoxInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheckBoxInput = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <label className={checkBoxStyles}>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleCheckbox}
        className={hiddenCheckboxStyles}
      />
      <span
        className={
          checked
            ? customCheckmarkVariants.checked
            : customCheckmarkVariants.unchecked
        }
      >
        {checked && <FontAwesomeIcon icon={faCheck} />}
      </span>
      <span className={textStyles}>자동 로그인</span>
    </label>
  );
};

export default CheckBoxInput;
