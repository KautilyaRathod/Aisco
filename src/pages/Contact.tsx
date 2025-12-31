import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactHero from '../components/contact/ContactHero';
import OfficeLocation from '../components/contact/OfficeLocation';
import ContactForm from '../components/contact/ContactForm';
import DepartmentContacts from '../components/contact/DepartmentContacts';
import SocialChannels from '../components/contact/SocialChannels';
import VisitUsSection from '../components/contact/VisitUsSection';
import FinalCTA from '../components/contact/FinalCTA';
import PageLoader from '../components/PageLoader';
import { useSEO } from '../hooks/useSEO';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useSEO({
    title: 'Contact AISCO – Angola Iron and Steel Corporation | Get in Touch',
    description: 'Contact AISCO – Angola Iron and Steel Corporation, LDA. Find our office location, contact information, department contacts, and social media channels. Reach out for inquiries about our Grade A500 NR steel products and services.',
    keywords: 'contact AISCO, AISCO Angola contact, steel company contact, Angola Iron and Steel contact, office location, steel supplier contact, construction steel inquiry, AISCO address, steel company phone, business inquiry, customer service, sales contact, technical support, visit AISCO, company location Angola',
    ogUrl: 'https://aisco.ao/contact',
    canonical: 'https://aisco.ao/contact',
    ogImage: 'https://aisco.ao/Angola Logo.png'
  });

  useEffect(() => {
    // Preload critical images
    const imagesToPreload = [
      "https://images.pexels.com/photos/162568/steel-mill-factory-industry-162568.jpeg"
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <PageLoader onLoadingComplete={handleLoadingComplete} pageName="Contact Us" />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <OfficeLocation />
      <ContactForm />
      <DepartmentContacts />
      <SocialChannels />
      <VisitUsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Contact;