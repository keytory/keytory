import { wrap } from '@styles/containers/login-page/index.css';
import Image from 'next/image';
import { FC } from 'react';
import AgreeTerms from '../../containers/signup-page/AgreeTerms';
import { formStyle, signup } from '@styles/containers/signup-page/index.css';
import SignupFormSection from '../../containers/signup-page/SignupFormSection';

const SignUpPage: FC = () => {
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
        <form className={formStyle}>
          <SignupFormSection />
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
