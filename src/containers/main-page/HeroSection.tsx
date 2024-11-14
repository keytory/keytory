import {
  button,
  caption,
  detail,
  title,
  wrapper,
} from '@styles/containers/main-page/HeroSection.css';

export default function HeroSection() {
  return (
    <div className={wrapper}>
      <p className={caption}>simulation</p>
      <h1 className={title}>타이틀타이틀</h1>
      <p className={detail}>
        {`이에 해당하는 상세 워딩을 작성해주세요이에 해당하는 상세 워딩을 작성해주세요
    이에 해당하는 상세 워딩을 작성해주세요이에 해당하는 상세 워딩을 작성해주세요`}
      </p>
      <button className={button}>자세히보기</button>
    </div>
  );
}
