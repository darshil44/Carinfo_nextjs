import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarSection from './components/CarSection/CarSection';
import Footers from './footers/footer';
import Download from './components/download';
import FAQ from './components/faq';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CarSection />
      <br></br>
      <Download />
      <br></br>
      <FAQ />
      <br></br>
     <Footers />
    </>
  );
}
