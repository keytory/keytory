import {
  emailButton,
  googleButton,
  kakaoButton,
  logoContainer,
  textContainer,
} from '@styles/components/button/Button.css';
import { wrap } from '@styles/containers/login-page/SNSLoginSection.css';
import Image from 'next/image';

const SNSLoginSection = () => {
  return (
    <section className={wrap}>
      <button className={kakaoButton}>
        <div className={logoContainer}>
          <Image
            src="/icons/kakao.svg"
            alt="Kakao 로고"
            width={30}
            height={30}
          />
        </div>
        <div className={textContainer}>카카오로 가입하기</div>
      </button>
      <button className={googleButton}>
        <div className={logoContainer}>
          <Image
            src="/icons/google.svg"
            alt="Google 로고"
            width={30}
            height={30}
          />
        </div>
        <div className={textContainer}>Google로 가입하기</div>
      </button>
      <button className={emailButton}>
        <div className={textContainer}>이메일로 가입하기</div>
      </button>
    </section>
  );
};

export default SNSLoginSection;
