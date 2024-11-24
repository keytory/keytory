import {
  footerDiv,
  link,
  wrapper,
} from '@styles/containers/main-page/BannerSection.css';
import Link from 'next/link';

export default function BannerSection() {
  return (
    <section className={wrapper}>
      <div className={footerDiv}>
        나만의 커스텀, 다른 사람의 아이디어까지 <br /> 한눈에! 당신의 완벽한
        키보드를 완성하세요!
      </div>
      <Link href="#" className={link}>
        자세히 보기
      </Link>
    </section>
  );
}
