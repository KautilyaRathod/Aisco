import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteHero from '../components/quote/QuoteHero';
import QuoteForm from '../components/quote/QuoteForm';
import WhyChooseAISCO from '../components/quote/WhyChooseAISCO';
import ContactAssistance from '../components/quote/ContactAssistance';
import ProjectGallery from '../components/quote/ProjectGallery';
import ThankYouCTA from '../components/quote/ThankYouCTA';
import PageLoader from '../components/PageLoader';
import { useSEO } from '../hooks/useSEO';

const RequestQuote = () => {
  const [isLoading, setIsLoading] = useState(true);

  useSEO({
    title: 'Request a Quote – Steel Products Pricing | AISCO Angola',
    description: 'Request a quote for AISCO\'s Grade A500 NR reinforcing steel bars. Get competitive pricing, project specifications, and personalized service. Fill out our quote form for construction and infrastructure projects in Angola and beyond.',
    keywords: 'steel bar quote, request quote steel, steel pricing Angola, construction steel quote, A500 NR price, steel bar pricing, quote request form, steel supplier quote, building materials quote, infrastructure steel quote, competitive steel prices, project quote, bulk steel order, steel procurement, commercial steel quote',
    ogUrl: 'https://aisco.ao/request-quote',
    canonical: 'https://aisco.ao/request-quote',
    ogImage: 'https://aisco.ao/Angola Logo.png'
  });

  useEffect(() => {
    // Only preload hero image on non-mobile devices
    if (window.innerWidth >= 768) {
      const heroImage = "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg";
      const img = new Image();
      img.src = heroImage;
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <PageLoader onLoadingComplete={handleLoadingComplete} pageName="Request Quote" />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <QuoteHero />
      <QuoteForm />
      <WhyChooseAISCO />
      <ContactAssistance />
      <ProjectGallery />
      <ThankYouCTA />
      <Footer />
    </div>
  );
};

export default RequestQuote;