'use client';

import {
  carouselText,
  carouselWrapper,
  carousel,
  wrapper,
  carouselImageContainer,
  listContainer,
  listItem,
  selectedListItem,
  carouselIndexContainer,
  carouselButton,
} from '@styles/containers/main-page/CarouselSection.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// TODO: 이미지 url fetch하는 것으로 변경
const imageList: string[] = [
  '/images/example1.png',
  '/images/example2.jpg',
  '/images/example3.png',
  '/images/example4.jpg',
  '/images/example5.jpg',
];

export default function CarouselSection() {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((current) => (current + 1) % imageList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLeftButtonClick = () => {
    setCarouselIndex((current) => (current === 0 ? 4 : current - 1));
  };

  const handleRightButtonClick = () => {
    setCarouselIndex((current) => (current + 1) % imageList.length);
  };

  const handleImageClick = (index: number) => {
    if (index < 0 || index > imageList.length - 1) return;
    setCarouselIndex(index);
  };

  return (
    <section className={wrapper}>
      <div className={carouselText}>마치 실물처럼.</div>
      <div className={carouselWrapper}>
        <div className={carousel}>
          <div
            className={carouselImageContainer}
            style={{ transform: `translateX(${-756 * carouselIndex}px)` }}
          >
            {imageList.map((image) => (
              <Image
                key={image}
                src={image}
                width={756}
                height={528}
                alt="image"
              />
            ))}
          </div>
          <div className={carouselIndexContainer}>
            <button onClick={handleLeftButtonClick} className={carouselButton}>
              <Image
                src="/icons/carousel-button.svg"
                width={26}
                height={26}
                alt="carousel button"
                style={{ transform: 'rotate(180deg)' }}
              />
            </button>
            {carouselIndex + 1}/5
            <button onClick={handleRightButtonClick} className={carouselButton}>
              <Image
                src="/icons/carousel-button.svg"
                width={26}
                height={26}
                alt="carousel button"
              />
            </button>
          </div>
        </div>
        <div className={listContainer}>
          {imageList.map((image, index) => (
            <Image
              key={index}
              src={image}
              onClick={() => handleImageClick(index)}
              width={155}
              height={98}
              className={carouselIndex === index ? selectedListItem : listItem}
              alt="sub image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
