import { wrapper } from '@styles/containers/main-page/index.css';
import CarouselSection from '../containers/main-page/CarouselSection';
import HeroSection from '../containers/main-page/HeroSection';
import SliderSection from '../containers/main-page/SliderSection';

const Home = () => {
  return (
    <main className={wrapper}>
      <CarouselSection />
      <HeroSection />
      <SliderSection />
    </main>
  );
};

export default Home;
