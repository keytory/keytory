'use client';

import {
  captionStyle,
  card,
  cardTitle,
  imageContainer,
  infoStyle,
  numberContainer,
  swiper,
  swiperButton,
  swiperContainer,
  tagStyle,
  title,
  wrapper,
} from '@styles/containers/main-page/SliderSection.css';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

// TODO: 이미지 url fetch하는 것으로 변경
const imageList: string[] = [
  '/images/example1.png',
  '/images/example2.jpg',
  '/images/example3.png',
  '/images/example4.jpg',
  '/images/example5.jpg',
  '/images/example1.png',
  '/images/example2.jpg',
  '/images/example3.png',
  '/images/example4.jpg',
  '/images/example5.jpg',
];

export default function SliderSection() {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  const onSwiper = (swiper: SwiperClass) => {
    setSwiperRef(swiper);
  };

  const handlePrevClick = () => {
    swiperRef?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef?.slideNext();
  };

  return (
    <div className={wrapper}>
      <h2 className={title}>Best Keyboard</h2>
      <div className={swiperContainer}>
        <button className={swiperButton} onClick={handlePrevClick}></button>
        <div className={swiper}>
          <Swiper
            onSwiper={onSwiper}
            slidesPerView={3}
            spaceBetween={10}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <CarouselCard />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <button className={swiperButton} onClick={handleNextClick}></button>
      </div>
    </div>
  );
}

function CarouselCard() {
  return (
    <div className={card}>
      <div className={imageContainer}>
        <Image src={imageList[0]} alt="image" width={220} height={200} />
        <div className={numberContainer}>1</div>
      </div>
      <p className={captionStyle}>앱코</p>
      <h5 className={cardTitle}>앱코 저소음 풀배열 멤브레인 108키보드</h5>
      <p className={infoStyle}>
        <span className={tagStyle}>레이아웃</span>100%
      </p>
      <p className={infoStyle}>
        <span className={tagStyle}>스위치</span>큐피드 리니어 스위치
      </p>
    </div>
  );
}
