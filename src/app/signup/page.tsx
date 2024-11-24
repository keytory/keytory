'use client';

import { wrap } from '@styles/containers/login-page/index.css';
import Image from 'next/image';
import { FC, FormEvent, useState } from 'react';
import AgreeTerms from '../../containers/signup-page/AgreeTerms';
import { formStyle, signup } from '@styles/containers/signup-page/index.css';
import SignupFormSection from '../../containers/signup-page/SignupFormSection';
import axios from 'axios';

interface FormState {
  email: string;
  verificationCode: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}

const SignUpPage: FC = () => {
  const [formData, setFormData] = useState<FormState>({
    email: '',
    verificationCode: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://180.229.38.20:8085/user/signup',
        formData, // 부모 컴포넌트에서 formData 사용
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        alert('회원가입이 완료되었습니다.');
        // 성공 시 리다이렉트 또는 초기화 로직
      } else {
        alert('회원가입에 실패했습니다.');
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <main className={wrap}>
        <Image
          src="https://placehold.co/197x103"
          alt="Logo"
          width="197"
          height="103"
        />
        <hr style={{ width: '100%' }} />

        <h1>이메일로 회원가입</h1>
        <form className={formStyle} onSubmit={handleSubmit}>
          {/* formData와 setFormData를 SignupFormSection에 전달 */}
          <SignupFormSection formData={formData} setFormData={setFormData} />
          <AgreeTerms />

          <button type="submit" className={signup}>
            가입하기
          </button>
        </form>
      </main>
    </>
  );
};

export default SignUpPage;
