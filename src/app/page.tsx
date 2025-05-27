import Navbar from '@/components/shared/navBar';
import Hero from '@/pages/hero';
import Iyara from '@/pages/iyara';
import Squirel from '@/pages/squirel';
import Mirabex from '@/pages/mirobex';
import Contact from '@/pages/contact';
import Footer from '@/components/shared/footer';

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <Iyara />
      <Squirel/>
      <Mirabex />
      <Contact />
      <Footer />
    </main>
  );
}