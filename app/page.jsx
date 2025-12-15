import Hero from './components/Hero';
import About from './components/About';
import WhoFor from './components/WhoFor';
import Gains from './components/Gains';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Structure from './components/Structure';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <WhoFor />
      <Gains />
      <Features />
      <Curriculum />
      <Structure />
      <Results />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
