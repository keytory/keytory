'use client';

import { primaryButton } from '@styles/components/button/Button.css';
import { inputBaseStyle } from '@styles/components/input/TextInput.css';
import {
  descriptionText,
  errorText,
  inputBox,
  passwordBox,
  successText,
  wrap,
} from '@styles/containers/signup-page/SignupFormSection.css';
import axios from 'axios';
import { ChangeEvent, FC, useState } from 'react';

interface FormState {
  email: string;
  verificationCode: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}

interface SignupFormSectionProps {
  formData: FormState;
  setFormData: React.Dispatch<React.SetStateAction<FormState>>;
}

interface FormErrors {
  email?: string;
  verificationCode?: string;
  password?: string;
  confirmPassword?: string;
  nickname?: string;
}

const SignupFormSection: FC<SignupFormSectionProps> = ({
  formData,
  setFormData,
}) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isNicknameAvailable, setIsNicknameAvailable] = useState<
    boolean | null
  >(null);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);

  console.log(isNicknameAvailable);

  const sendVerificationCode = async () => {
    try {
      const response = await axios.post(
        'http://180.229.38.20:8085/user/send-verification-code',
        {
          email: formData.email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        setIsCodeSent(true);
        setErrors((prev) => ({ ...prev, email: undefined }));
      }
    } catch (error) {
      console.error(error);
      setErrors((prev) => ({
        ...prev,
        email: '인증 코드 발송 중 오류가 발생했습니다.',
      }));
    }
  };

  const verifyCode = async () => {
    try {
      const response = await axios.post(
        'http://180.229.38.20:8085/user/verify-code',
        {
          email: formData.email,
          verificationCode: formData.verificationCode,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.data) {
        setIsEmailVerified(true);
        setErrors((prev) => ({ ...prev, verificationCode: undefined }));
      } else {
        setErrors((prev) => ({
          ...prev,
          verificationCode: '인증 코드가 일치하지 않습니다.',
        }));
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error?.message;
        console.log('Error message:', errorMessage); // 디버깅용
        setErrors((prev) => ({
          ...prev,
          verificationCode: errorMessage || '오류가 발생했습니다.',
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          verificationCode: '오류가 발생했습니다.',
        }));
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 닉네임에 대해 중복 확인을 초기화
    if (name === 'nickname') {
      setIsNicknameAvailable(null);
    }

    // 비밀번호와 비밀번호 확인 입력 시 실시간 검사를 수행
    if (name === 'password') {
      validatePassword(value);
      // 비밀번호와 확인 비밀번호가 일치하는지 검사
      validateConfirmPassword(value, formData.confirmPassword);
    } else if (name === 'confirmPassword') {
      validateConfirmPassword(formData.password, value);
    }
  };

  const validateNickname = (nickname: string): boolean => {
    if (nickname.length < 3 || nickname.length > 7) {
      setErrors((prev) => ({
        ...prev,
        nickname: '닉네임은 3 ~ 7자 이내로 작성해 주세요.',
      }));
      return false;
    }
    return true;
  };

  const checkNicknameAvailability = async () => {
    if (!validateNickname(formData.nickname)) {
      return;
    }
    try {
      const response = await axios.get(
        `http://180.229.38.20:8085/user/check-nickname`,
        {
          params: {
            nickname: formData.nickname,
          },
          headers: {
            Accept: 'application/json',
          },
        }
      );

      setIsNicknameAvailable(response.data.data);

      if (response.data.data) {
        setErrors((prev) => ({ ...prev, nickname: undefined }));
      } else {
        setErrors((prev) => ({
          ...prev,
          nickname: '이미 사용 중인 닉네임입니다.',
        }));
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        nickname: '닉네임 중복 확인 중 오류가 발생했습니다.',
      }));
    }
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password: '비밀번호는 영문/숫자/특수문자 조합 8 ~ 20자여야 합니다.',
      }));
      return false;
    }
    setErrors((prev) => ({
      ...prev,
      password: undefined,
    }));
    return true;
  };

  const validateConfirmPassword = (
    password: string,
    confirmPassword: string
  ): boolean => {
    if (confirmPassword && password !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: '비밀번호가 일치하지 않습니다.',
      }));
      return false;
    }

    setErrors((prev) => ({
      ...prev,
      confirmPassword: undefined,
    }));
    return true;
  };

  return (
    <div className={wrap}>
      <div>
        <label>이메일</label>
        <div className={inputBox}>
          <input
            name="email"
            value={formData.email}
            placeholder="keytory@email.com"
            onChange={handleInputChange}
            className={inputBaseStyle}
            disabled={isEmailVerified}
          />
          {!isEmailVerified && (
            <button
              type="button"
              onClick={sendVerificationCode}
              className={primaryButton}
              disabled={isEmailVerified}
            >
              {isCodeSent ? '재전송' : '인증'}
            </button>
          )}
        </div>
        {isCodeSent && !isEmailVerified && (
          <div className={inputBox}>
            <input
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleInputChange}
              placeholder="인증번호 입력"
              className={inputBaseStyle}
            />
            <button
              type="button"
              onClick={verifyCode}
              className={primaryButton}
            >
              확인
            </button>
          </div>
        )}
        {errors.email && <p className={errorText}>{errors.email}</p>}
        {errors.verificationCode && (
          <p className={errorText}>{errors.verificationCode}</p>
        )}
        {isEmailVerified && (
          <p className={successText}>이메일 인증이 완료되었습니다.</p>
        )}
        {!isEmailVerified && !errors.verificationCode && !errors.email && (
          <p className={descriptionText}>
            * 올바른 이메일 형태를 입력해주세요.
          </p>
        )}
      </div>

      <div>
        <label>비밀번호</label>
        <div className={passwordBox}>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="영문/숫자/특수문자 조정 8 ~ 20자"
            className={inputBaseStyle}
          />
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="비밀번호 확인"
            className={inputBaseStyle}
          />
        </div>
        {errors.password && <p className={errorText}>{errors.password}</p>}
        {errors.confirmPassword && (
          <p className={errorText}>{errors.confirmPassword}</p>
        )}
        <p className={descriptionText}>
          * 비밀번호는 영문/숫자/특수문자 조합 8 ~ 20자로 설정해주세요.
        </p>
      </div>

      <div>
        <label>닉네임</label>
        <div className={inputBox}>
          <input
            name="nickname"
            placeholder="3 ~ 7자"
            value={formData.nickname}
            onChange={handleInputChange}
            className={inputBaseStyle}
          />
          <button
            type="button"
            onClick={checkNicknameAvailability}
            className={primaryButton}
          >
            중복확인
          </button>
        </div>
        {isNicknameAvailable && (
          <p className={successText}>사용가능한 닉네임 입니다.</p>
        )}
        {!isNicknameAvailable && errors.nickname && (
          <p className={errorText}>{errors.nickname}</p>
        )}
        {!isNicknameAvailable && !errors.nickname && (
          <p className={descriptionText}>
            * 닉네임은 3 ~ 7자 이내로 작성해 주세요.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupFormSection;
