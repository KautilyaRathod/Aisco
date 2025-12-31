import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ManufacturingHero from '../components/manufacturing/ManufacturingHero';
import ProcessOverview from '../components/manufacturing/ProcessOverview';
import MeltingRefining from '../components/manufacturing/MeltingRefining';
import ContinuousCasting from '../components/manufacturing/ContinuousCasting';
import RollingMill from '../components/manufacturing/RollingMill';
import ProductionMetrics from '../components/manufacturing/ProductionMetrics';
import QualityControl from '../components/manufacturing/QualityControl';
import AutomationTechnology from '../components/manufacturing/AutomationTechnology';
import ManufacturingIntelligence from '../components/manufacturing/ManufacturingIntelligence';
import ManufacturingCTA from '../components/manufacturing/ManufacturingCTA';
import PageLoader from '../components/PageLoader';
import { useSEO } from '../hooks/useSEO';

const Manufacturing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useSEO({
    title: 'Manufacturing Process – Advanced Steel Production Technology | AISCO',
    description: 'Explore AISCO\'s state-of-the-art steel manufacturing process. From melting and refining to continuous casting and rolling mill operations. Advanced European technology, automation, quality control, and production metrics for superior Grade A500 NR steel bars.',
    keywords: 'steel manufacturing process, steel production Angola, melting refining process, continuous casting, rolling mill, steel production technology, European steel technology, automated steel manufacturing, quality control manufacturing, steel production metrics, manufacturing facility, steel industry process, advanced manufacturing, production efficiency, steel making Angola',
    ogUrl: 'https://aisco.ao/manufacturing',
    canonical: 'https://aisco.ao/manufacturing',
    ogImage: 'https://aisco.ao/Angola Logo.png'
  });

  useEffect(() => {
    // Only preload hero image on non-mobile devices
    if (window.innerWidth >= 768) {
      const heroImage = "https://images.pexels.com/photos/162568/steel-mill-factory-industry-162568.jpeg";
      const img = new Image();
      img.src = heroImage;
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <PageLoader onLoadingComplete={handleLoadingComplete} pageName="Manufacturing" />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <ManufacturingHero />
      <ProcessOverview />
      <MeltingRefining />
      <ContinuousCasting />
      <RollingMill />
      <ProductionMetrics />
      <QualityControl />
      <AutomationTechnology />
      <ManufacturingIntelligence />
      <ManufacturingCTA />
      <Footer />
    </div>
  );
};

export default Manufacturing;