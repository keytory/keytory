import { linkStyle, wrap } from '@styles/containers/login-page/index.css';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import EmailFormSection from '../../containers/login-page/EmailFormSection';
import SNSLoginSection from '../../containers/login-page/SNSLoginSection';

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
        <SNSLoginSection />
        <Link className={linkStyle} href="#">
          비밀번호를 잊어버리셨나요?
        </Link>
      </main>
    </>
  );
};

export default LoginPage;
