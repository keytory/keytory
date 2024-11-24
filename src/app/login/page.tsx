'use client';

import { linkStyle, wrap } from '@styles/containers/login-page/index.css';
import Image from 'next/image';
import { FC, FormEvent, useState } from 'react';
import Link from 'next/link';
import EmailFormSection from '../../containers/login-page/EmailFormSection';
import SNSLoginSection from '../../containers/login-page/SNSLoginSection';
import axios from 'axios';

interface FormState {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const [formData, setFormData] = useState<FormState>({
    email: '',
    password: '',
  });

  return (
    <>
      <main className={wrap}>
        <Image
          src="https://placehold.co/197x103"
          alt="Logo"
          width="197"
          height="103"
        />
        <EmailFormSection formData={formData} setFormData={setFormData} />
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
