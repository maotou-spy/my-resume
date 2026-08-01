import { Seo } from '@/components/common/Seo';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
