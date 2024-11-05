'use client';

import { FC, useState } from 'react';
import { customSquareCheckmarkerVariants, hiddenCheckboxStyles } from '@styles/components/input/CheckBoxInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { textStyles } from '@styles/containers/signup-page/AgreeTerms.css';

interface AgreeTermsCheckboxProps {
  text: string;
  index: number;
}

const AgreeTermsCheckbox: FC<AgreeTermsCheckboxProps> = ({ text, index }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleCheckbox}
        className={hiddenCheckboxStyles}
      />
      <span
        className={
          checked
            ? customSquareCheckmarkerVariants.checked
            : customSquareCheckmarkerVariants.unchecked
        }
      >
        {checked && <FontAwesomeIcon icon={faCheck} />}
      </span>
      <p className={textStyles}>{text}</p>
    </div>
  );
};

export default AgreeTermsCheckbox;
