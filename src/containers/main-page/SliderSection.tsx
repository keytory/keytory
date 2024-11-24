'use client';

import {
  captionStyle,
  card,
  cardTitle,
  imageContainer,
  imageStyle,
  infoStyle,
  largeTagStyle,
  largeTagSubStyle,
  numberContainer,
  smallTagStyle,
  swiper,
  swiperContainer,
  swiperNextButton,
  swiperPrevButton,
  tagGroup,
  title,
  wrapper,
} from '@styles/containers/main-page/SliderSection.css';
import Image from 'next/image';
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
    <section className={wrapper}>
      <h2 className={title}>Best Keyboard</h2>
      <div className={swiperContainer}>
        <button className={swiperPrevButton} onClick={handlePrevClick}></button>
        <div className={swiper}>
          <Swiper
            onSwiper={onSwiper}
            slidesPerView={'auto'}
            spaceBetween={16}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              600: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
            }}
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
        <button className={swiperNextButton} onClick={handleNextClick}></button>
      </div>
    </section>
  );
}

function CarouselCard() {
  return (
    <div className={card}>
      <div className={imageContainer}>
        <Image src={imageList[0]} alt="image" fill className={imageStyle} />
        <div className={numberContainer}>1</div>
      </div>
      <p className={captionStyle}>앱코</p>
      <div className={tagGroup}>
        <span className={largeTagStyle}>레이아웃 100%</span>
        <span className={largeTagSubStyle}>큐피드 리니어 스위치</span>
      </div>
      <h5 className={cardTitle}>앱코 저소음 풀배열 멤브레인 108키보드</h5>
      <p className={infoStyle}>
        <span className={smallTagStyle}>레이아웃</span>100%
      </p>
      <p className={infoStyle}>
        <span className={smallTagStyle}>스위치</span>큐피드 리니어 스위치
      </p>
    </div>
  );
}
