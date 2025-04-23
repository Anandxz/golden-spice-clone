import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ExploreSection from '../components/ExploreSection';
import EssenceSection from '../components/EssenceSection';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-turmeric-cream">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <ExploreSection />
      <EssenceSection />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Index;
