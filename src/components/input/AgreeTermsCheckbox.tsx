import React, { FC } from 'react';
import {
  customSquareCheckmarkerVariants,
  hiddenCheckboxStyles,
} from '@styles/components/input/CheckBoxInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { textStyles } from '@styles/containers/signup-page/AgreeTerms.css';

interface AgreeTermsCheckboxProps {
  text: string;
  index: number;
  checked: boolean; // checked 속성을 추가하여 오류 해결
  onChange: () => void; // onChange 속성을 추가하여 오류 해결
}

const AgreeTermsCheckbox: FC<AgreeTermsCheckboxProps> = ({
  text,
  index,
  checked,
  onChange,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange} // 부모에서 전달된 onChange 사용
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
