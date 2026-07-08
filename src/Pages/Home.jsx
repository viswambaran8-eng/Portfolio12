import Header from "../Components/Header";
import Hero from "../Components/Hero";
import SubHero from "../Components/SubHero";
import ProjectGrid from "../Components/Project";
import SkillsSection from "../Components/Section5";
import ServicesSection from "../Components/Section6";
import Testimonials from '../Components/Testimonials';
import ContactCTA from '../Components/Cta';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SubHero />
      <ProjectGrid />
      <SkillsSection />
      <ServicesSection />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default Home;
