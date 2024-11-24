'use client';

import { ChangeEvent, FC, FormEvent } from 'react';
import CheckBoxInput from '../../components/input/CheckBoxInput';
import { wrap } from '@styles/containers/login-page/EmailFormSection.css';
import {
  loginButton,
  textContainer,
} from '@styles/components/button/Button.css';
import { inputBaseStyle } from '@styles/components/input/TextInput.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface FormState {
  email: string;
  password: string;
}

interface LoginFormSectionProps {
  formData: FormState;
  setFormData: React.Dispatch<React.SetStateAction<FormState>>;
}

const EmailFormSection: FC<LoginFormSectionProps> = ({
  formData,
  setFormData,
}) => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://180.229.38.20:8085/user/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        const { accessToken, refreshToken } = response.data.data;
        document.cookie = `accessToken=${accessToken}; path=/; max-age=3600;`;
        document.cookie = `refreshToken=${refreshToken}; path=/; max-age=86400;`;
        router.push('/');
      } else {
        alert('로그인 실패.');
        console.error(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          alert(error.response.data.error.message);
        } else {
          alert('알 수 없는 오류가 발생했습니다.');
        }
      } else {
        console.error(error);
        alert('요청 처리 중 문제가 발생했습니다.');
      }
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form className={wrap} onSubmit={handleSubmit}>
      <input
        name="email"
        id="eamil"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="이메일을 입력해주세요"
        className={inputBaseStyle}
      />
      <input
        value={formData.password}
        name="password"
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={handleInputChange}
        className={inputBaseStyle}
      />
      <button type="submit" className={loginButton}>
        <div className={textContainer}>로그인</div>
      </button>
      <CheckBoxInput />
    </form>
  );
};

export default EmailFormSection;
