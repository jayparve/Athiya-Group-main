import React from 'react';
import Hero from '../components/landingpage/LandingHero';
import LandingNavbar from '../components/landingpage/LandingNavbar';
import OverviewSection from '../components/landingpage/OverviewSection';
import BenefitsSection from '../components/landingpage/BenefitsSection';
import SpecificsSection from '../components/landingpage/SpecificsSection';
import PricingSection from '../components/landingpage/PricingSection';
import CTASection from '../components/landingpage/CTASection';
import PartnersSection from '../components/landingpage/PartnersSection';
import Footer from '../components/Footer';
import GallerySection from '../components/landingpage/GallerySection';

const LandingPage = () => {
  return (
    <div>
        <LandingNavbar />
        <div id="home">
          <Hero />
        </div>
        <div id="overview">
          <OverviewSection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="partners">
          <PartnersSection />
        </div>
        <div id="specifics">
          <SpecificsSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="cta">
          <CTASection />
        </div>
        <footer>
          <Footer />
        </footer>
    </div>
  );
};

export default LandingPage;
