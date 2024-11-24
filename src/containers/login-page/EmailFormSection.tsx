'use client';

import { ChangeEvent } from 'react';
import CheckBoxInput from '../../components/input/CheckBoxInput';
import { wrap } from '@styles/containers/login-page/EmailFormSection.css';
import {
  loginButton,
  textContainer,
} from '@styles/components/button/Button.css';
import { inputBaseStyle } from '@styles/components/input/TextInput.css';

const EmailFormSection = () => {
  const emailInputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <section className={wrap}>
      <input id="eamil-login"
        type="email"
        placeholder="이메일을 입력해주세요"
        className={inputBaseStyle} />
      <input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={emailInputOnChangeHandler}
        className={inputBaseStyle} />
      <button className={loginButton}>
        <div className={textContainer}>로그인</div>
      </button>
      <CheckBoxInput />
    </section>
  );
};

export default EmailFormSection;
