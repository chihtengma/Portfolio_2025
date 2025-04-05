import FAQs from '@/sections/FAQs';
import Hero from '@/sections/Hero';
import Intro from '@/sections/Intro';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Testimonials from '@/sections/Testimonials';
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}
