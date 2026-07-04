import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { Promesa } from '@/components/sections/Promesa';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Promesa />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
