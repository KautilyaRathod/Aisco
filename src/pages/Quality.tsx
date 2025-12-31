import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QualityHero from '../components/quality/QualityHero';
import QualityPhilosophy from '../components/quality/QualityPhilosophy';
import CertificationsCompliance from '../components/quality/CertificationsCompliance';
import TraceabilitySystem from '../components/quality/TraceabilitySystem';
import LaboratoryTesting from '../components/quality/LaboratoryTesting';
import MechanicalChemicalProperties from '../components/quality/MechanicalChemicalProperties';
import QualityProcessFlow from '../components/quality/QualityProcessFlow';
import QualityCTA from '../components/quality/QualityCTA';
import PageLoader from '../components/PageLoader';
import { useSEO } from '../hooks/useSEO';

const Quality = () => {
  const [isLoading, setIsLoading] = useState(true);

  useSEO({
    title: 'Quality Assurance & Certifications | ISO Certified Steel Products | AISCO',
    description: 'AISCO\'s comprehensive quality assurance system with ISO certifications, laboratory testing, traceability systems, and rigorous quality control. Mechanical and chemical property testing ensuring Grade A500 NR steel bars meet international standards.',
    keywords: 'steel quality assurance, ISO certification steel, quality control steel, laboratory testing, steel traceability, mechanical properties testing, chemical properties steel, quality certifications, steel quality standards, Grade A500 NR certification, quality assurance Angola, steel quality process, quality management system, certified steel products, quality compliance',
    ogUrl: 'https://aisco.ao/quality',
    canonical: 'https://aisco.ao/quality',
    ogImage: 'https://aisco.ao/Angola Logo.png'
  });

  useEffect(() => {
    // Preload critical images
    const imagesToPreload = [
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg"
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
    return <PageLoader onLoadingComplete={handleLoadingComplete} pageName="Quality" />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <QualityHero />
      <QualityPhilosophy />
      <CertificationsCompliance />
      <TraceabilitySystem />
      <LaboratoryTesting />
      <MechanicalChemicalProperties />
      <QualityProcessFlow />
      <QualityCTA />
      <Footer />
    </div>
  );
};

export default Quality;