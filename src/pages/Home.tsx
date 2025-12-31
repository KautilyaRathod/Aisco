import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PageLoader from '../components/PageLoader';
import { useSEO } from '../hooks/useSEO';

// Lazy load below-the-fold components for better performance
const AboutSection = lazy(() => import('../components/AboutSection'));
const VisionMissionSection = lazy(() => import('../components/VisionMissionSection'));
const ProductsSection = lazy(() => import('../components/ProductsSection'));
const ManufacturingSection = lazy(() => import('../components/ManufacturingSection'));
const QualitySection = lazy(() => import('../components/QualitySection'));
const SustainabilitySection = lazy(() => import('../components/SustainabilitySection'));
const ClientsSection = lazy(() => import('../components/ClientsSection'));
const SupportSection = lazy(() => import('../components/SupportSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useSEO({
    title: 'AISCO – Angola Iron and Steel Corporation, LDA | Leading Steel Manufacturer',
    description: 'AISCO – Angola Iron and Steel Corporation, LDA - Leading manufacturer of Grade A500 NR reinforcing steel bars with 30+ years of experience and cutting-edge European technology. Quality steel products for construction and infrastructure projects in Angola and beyond.',
    keywords: 'AISCO, Angola Iron and Steel Corporation, Grade A500 NR steel bars, reinforcing steel, construction steel, steel manufacturing Angola, steel bars Angola, reinforced concrete steel, construction materials, infrastructure steel, building materials Angola, steel supplier Angola, steel industry Angola, European steel technology, quality steel products, construction industry Angola',
    ogUrl: 'https://aisco.ao/',
    canonical: 'https://aisco.ao/',
    ogImage: 'https://aisco.ao/Angola Logo.png'
  });

  useEffect(() => {
    // Only preload hero images on non-mobile devices for better performance
    if (window.innerWidth >= 768) {
      const heroImages = [
        "/IMG-20221130-WA0009.jpeg.jpg",
        "/dji_fly_20240328_152040_0129_1712060248798_photo.jpg",
        "/IMG-20231005-WA0015.jpg"
      ];
      
      heroImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <PageLoader onLoadingComplete={handleLoadingComplete} pageName="Home" />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <VisionMissionSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ProductsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ManufacturingSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <QualitySection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <SustainabilitySection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ClientsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <SupportSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;