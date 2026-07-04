import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { Pilares } from '@/components/sections/Pilares';
import { LaLlama } from '@/components/sections/LaLlama';
import { Amigos } from '@/components/sections/Amigos';
import { Misiones } from '@/components/sections/Misiones';
import { Tradiciones } from '@/components/sections/Tradiciones';
import { Promesa } from '@/components/sections/Promesa';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pilares />
        <LaLlama />
        <Amigos />
        <Misiones />
        <Tradiciones />
        <Promesa />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
