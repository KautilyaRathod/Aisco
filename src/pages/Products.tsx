import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/products/ProductsHero';
import ProductOverview from '../components/products/ProductOverview';
import ProductSpecifications from '../components/products/ProductSpecifications';
import ManufacturingProcess from '../components/products/ManufacturingProcess';
import ProductCertifications from '../components/products/ProductCertifications';
import TechnicalDownloads from '../components/products/TechnicalDownloads';
import ProductApplications from '../components/products/ProductApplications';
import ProductInquiry from '../components/products/ProductInquiry';
import PageLoader from '../components/PageLoader';
import { useSEO } from '../hooks/useSEO';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  useSEO({
    title: 'Steel Products – Grade A500 NR Reinforcing Bars | AISCO Angola',
    description: 'Discover AISCO\'s high-quality Grade A500 NR reinforcing steel bars. Complete product specifications, technical data sheets, certifications, applications, and manufacturing process. Premium steel products for construction and infrastructure projects in Angola.',
    keywords: 'A500 NR steel bars, reinforcing steel bars, Grade A500 NR, steel bar specifications, construction steel products, reinforced concrete bars, steel bar dimensions, steel bar technical data, AISCO products, construction steel Angola, building steel bars, infrastructure steel, concrete reinforcement, steel bar certifications, steel product catalog',
    ogUrl: 'https://aisco.ao/products',
    canonical: 'https://aisco.ao/products',
    ogImage: 'https://aisco.ao/Angola Logo.png'
  });

  useEffect(() => {
    // Only preload hero image on non-mobile devices
    if (window.innerWidth >= 768) {
      const heroImage = "/IMG-20250919-WA0005.jpg";
      const img = new Image();
      img.src = heroImage;
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <PageLoader onLoadingComplete={handleLoadingComplete} pageName="Products" />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <ProductsHero />
      <ProductOverview />
      <ProductSpecifications />
      <ManufacturingProcess />
      <ProductCertifications />
      <TechnicalDownloads />
      <ProductApplications />
      <ProductInquiry />
      <Footer />
    </div>
  );
};

export default Products;