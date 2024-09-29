'use client';

import { ChangeEvent } from 'react';
import Input from '../../components/input/TextInput';
import CheckBoxInput from '../../components/input/CheckBoxInput';
import { wrap } from '@styles/containers/login-page/EmailFormSection.css';

const EmailFormSection = () => {
  const emailInputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <section className={wrap}>
      <Input
        id="eamil-login"
        type="email"
        placeholder="이메일을 입력해주세요"
        onChange={emailInputOnChangeHandler}
      />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={emailInputOnChangeHandler}
      />
      <CheckBoxInput />
    </section>
  );
};

export default EmailFormSection;
