import React from 'react';
import Hero from '../components/landingpage/LandingHero';
import LandingNavbar from '../components/landingpage/LandingNavbar';
import LandInvestmentCalculator from '../components/landingpage/LandInvestmentCalculator';
import BenefitsSection from '../components/landingpage/BenefitsSection';
import GallerySection from '../components/landingpage/GallerySection';
import LocationSection from '../components/landingpage/LocationSection';
import TeamSection from '../components/landingpage/TeamSection';
import PricingSection from '../components/landingpage/PricingSection';
import PlotData from '../components/landingpage/plotData';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
        <LandingNavbar />
        <div id="home">
          <Hero />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="benefits">
          <PlotData />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        {/* <div id="pricing">
          <PricingSection />
        </div> */}
        {/* <div id="calculator">
          <LandInvestmentCalculator />
        </div> */}
        <div id="location">
          <LocationSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <footer>
          <Footer />
        </footer>
    
    </div>
  );
};

export default LandingPage;
