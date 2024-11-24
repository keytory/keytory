import { wrapper } from '@styles/containers/main-page/index.css';
import CarouselSection from '../containers/main-page/CarouselSection';
import HeroSection from '../containers/main-page/HeroSection';
import SliderSection from '../containers/main-page/SliderSection';
import BannerSection from '../containers/main-page/BannerSection';

export default function Home() {
  return (
    <main className={wrapper}>
      <CarouselSection />
      <HeroSection />
      <SliderSection />
      <BannerSection />
    </main>
  );
}
