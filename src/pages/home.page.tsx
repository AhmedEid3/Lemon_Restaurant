import About from '../components/about/about';
import Hero from '../components/hero/hero';
import Highlights from '../components/highlights/highlights';
import Testimonials from '../components/testimonials/testimonials';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default HomePage;
