import {
  caption,
  detail,
  link,
  title,
  wrapper,
} from '@styles/containers/main-page/HeroSection.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className={wrapper}>
      <p className={caption}>simulation</p>
      <h1 className={title}>키토리 탐방: 다양한 커스텀 키보드를 한눈에</h1>
      <p className={detail}>
        다양한 사용자들이 만든 독창적인 커스텀 키보드를 감상하고, 나만의
        디자인을 만들어보세요.
        <br />
        색상, 레이아웃, 조합에 따라 다양한 스타일을 확인해볼 수 있습니다!
      </p>
      <Link href="/keytory" className={link}>
        키토리 페이지로 이동
      </Link>
    </div>
  );
}
