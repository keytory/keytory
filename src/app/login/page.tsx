import { wrap } from '@styles/containers/login-page/index.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC } from 'react';
import RectangleButton from '../../components/button/RectangleButton';
import Link from 'next/link';
import {
  emailButton,
  googleButton,
  kakaoButton,
} from '@styles/components/button/Button.css';

const EmailFormSection = dynamic(
  () => import('../../containers/login-page/EmailFormSection'),
  {
    ssr: false,
  }
);

const LoginPage: FC = () => {
  return (
    <>
      <main className={wrap}>
        <Image
          src="https://placehold.co/197x103"
          alt="Logo"
          width="197"
          height="103"
        />
        <EmailFormSection />
        <hr style={{ width: '100%' }} />
        <RectangleButton className={kakaoButton} text="카카오로 가입하기" />
        <RectangleButton
          className={googleButton}
          image={{
            src: '/icon/google.svg',
            alt: 'Google',
            width: 30,
            height: 30,
          }}
          text="Google로 가입하기"
        />
        <RectangleButton className={emailButton} text="이메일로 회원가입" />
        <Link href="#">비밀번호를 잊어버리셨나요?</Link>
      </main>
    </>
  );
};

export default LoginPage;
