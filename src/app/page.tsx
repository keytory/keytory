import { wrapper } from '@styles/containers/main-page/index.css';
import CarouselSection from '../containers/main-page/CarouselSection';
import HeroSection from '../containers/main-page/HeroSection';

export default function Home() {
  return (
    <main className={wrapper}>
      <CarouselSection />
      <HeroSection />
    </main>
  );
}
