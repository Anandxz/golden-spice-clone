
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-turmeric-beige to-turmeric-cream min-h-[600px] flex items-center relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 z-10">
          <h2 className="text-turmeric-darkGreen text-xl font-poppins mb-2">Welcome to</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-turmeric-darkGreen mb-6">Introducing Our</h1>
          <p className="text-turmeric-darkGreen font-poppins text-lg mb-8 max-w-lg">
            Our turmeric store showcases a wide range of premium turmeric products 
            in various sizes, from 500g to 2kg
          </p>
          <Link 
            to="/products" 
            className="bg-turmeric-darkGreen text-white px-8 py-3 rounded-sm font-poppins hover:bg-opacity-90 transition duration-300 inline-block"
            aria-label="Shop our premium turmeric products"
          >
            Buy Now
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
          <img 
            src="/lovable-uploads/05277c8c-cf36-4fda-a336-b2b99b22e053.png" 
            alt="Turmeric powder heap" 
            className="w-full h-auto object-cover rounded-lg z-10 relative"
          />
          <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-turmeric-darkGreen p-4 flex items-center justify-center text-center">
            <span className="text-white font-playfair text-sm">
              Premium & Pure
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2">
        <img 
          src="/lovable-uploads/30af1ed7-4dcc-49ea-85ff-633f0296ea71.png" 
          alt="Turmeric leaves" 
          className="w-full h-full object-contain object-bottom opacity-70"
        />
      </div>
    </div>
  );
};

export default HeroSection;
