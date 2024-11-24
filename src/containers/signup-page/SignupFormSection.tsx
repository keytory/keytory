import { primaryButton } from '@styles/components/button/Button.css';
import { inputBaseStyle } from '@styles/components/input/TextInput.css';
import {
  descriptionText,
  inputBox,
  passwordBox,
  wrap,
} from '@styles/containers/signup-page/SignupFormSection.css';
import { FC } from 'react';

const SignupFormSection: FC = () => {
  return (
    <div className={wrap}>
      <div>
        <label>이메일</label>
        <div className={inputBox}>
          <input placeholder='keytory@email.com' className={inputBaseStyle} />
          <button className={primaryButton}>인증</button>
        </div>
        <p className={descriptionText}>* 올바른 이메일 형태를 입력해주세요.</p>
      </div>

      <div>
        <label>비밀번호</label>
        <div className={passwordBox}>
          <input placeholder='영문/숫자/특수문자 조정 8 ~ 20자' className={inputBaseStyle} />
          <input placeholder='비밀번호 확인' className={inputBaseStyle} />
        </div>
        <p className={descriptionText}>* 비밀번호는 영문/숫자/특수문자 조합 8 ~ 20자로 설정해주세요.</p>
      </div>

      <div>
        <label>닉네임</label>
        <div className={inputBox}>
          <input placeholder='3 ~ 7자' className={inputBaseStyle} />
          <button className={primaryButton}>중복확인</button>
        </div>
        <p className={descriptionText}>* 닉네임은 3 ~ 7자 이내로 작성해 주세요.</p>
      </div>
    </div>
  );
};

export default SignupFormSection;
