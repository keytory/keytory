'use client';

import {
  carouselText,
  carouselWrapper,
  carousel,
  wrapper,
  listContainer,
  listItem,
  selectedListItem,
  carouselIndexContainer,
  listImage,
  carouselImage,
} from '@styles/containers/main-page/CarouselSection.css';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination, Virtual } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// TODO: 이미지 url fetch하는 것으로 변경
const imageList: string[] = [
  '/images/example1.png',
  '/images/example2.jpg',
  '/images/example3.png',
  '/images/example4.jpg',
  '/images/example5.jpg',
];

export default function CarouselSection() {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const onSwiper = (swiper: SwiperClass) => {
    setSwiperRef(swiper);
  };

  const onSlideChange = () => {
    let index = swiperRef?.activeIndex;
    if (!index || index === 6) index = 1;
    setActiveIndex(index);
  };

  const handleImageClick = (index: number) => {
    swiperRef?.slideTo(index + 1);
  };

  return (
    <section className={wrapper}>
      <div className={carouselText}>마치 실물처럼.</div>
      <div className={carouselWrapper}>
        <div className={carousel}>
          <Swiper
            onSwiper={onSwiper}
            onSlideChange={onSlideChange}
            slidesPerView={1}
            loop
            modules={[Pagination, Autoplay]}
            pagination={{
              type: 'fraction',
              renderFraction: (currentClass, totalClass) =>
                `<div class="${carouselIndexContainer}">
                  <span class="${currentClass}"></span>/<span class="${totalClass}"></span>
                </div>`,
            }}
            autoplay={{ disableOnInteraction: false, waitForTransition: false }}
          >
            {imageList.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt="image"
                  fill
                  sizes="(max-width: 600px) 100vw, 756px"
                  className={carouselImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={listContainer}>
          {imageList.map((image, index) => (
            <div
              key={index}
              className={
                activeIndex === index + 1 ? selectedListItem : listItem
              }
            >
              <Image
                src={image}
                onClick={() => handleImageClick(index)}
                alt="sub image"
                fill
                className={listImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
