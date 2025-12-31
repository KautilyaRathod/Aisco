import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import Leadership from '../components/about/Leadership';
import VisionMission from '../components/about/VisionMission';
import CoreValues from '../components/about/CoreValues';
import ManufacturingFacility from '../components/about/ManufacturingFacility';
import QualityCertifications from '../components/about/QualityCertifications';
import SustainabilityCSR from '../components/about/SustainabilityCSR';
import ClientsTestimonials from '../components/about/ClientsTestimonials';
import ContactCTA from '../components/about/ContactCTA';
import PageLoader from '../components/PageLoader';
import { useSEO } from '../hooks/useSEO';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useSEO({
    title: 'About AISCO – Angola Iron and Steel Corporation | Our Story, Mission & Vision',
    description: 'Learn about AISCO – Angola Iron and Steel Corporation, LDA. Discover our 30+ years of experience in steel manufacturing, our mission, vision, core values, leadership team, and commitment to quality and sustainability in Angola\'s construction industry.',
    keywords: 'About AISCO, Angola Iron and Steel Corporation history, AISCO mission vision, steel company Angola, AISCO leadership, steel manufacturing company, Angola steel industry, construction steel manufacturer, AISCO values, steel company culture, Angola infrastructure, manufacturing facility Angola, steel industry expertise, quality commitment, sustainability Angola',
    ogUrl: 'https://aisco.ao/about',
    canonical: 'https://aisco.ao/about',
    ogImage: 'https://aisco.ao/Angola Logo.png'
  });

  useEffect(() => {
    // Only preload hero image on non-mobile devices for better performance
    if (window.innerWidth >= 768) {
      const heroImage = "/IMG-20221130-WA0001.jpeg.jpg";
      const img = new Image();
      img.src = heroImage;
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <PageLoader onLoadingComplete={handleLoadingComplete} pageName="About Us" />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <WhoWeAre />
      <Leadership />
      <VisionMission />
      <CoreValues />
      <ManufacturingFacility />
      <QualityCertifications />
      <SustainabilityCSR />
      <ClientsTestimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default About;