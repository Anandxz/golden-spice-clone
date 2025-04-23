
import React from 'react';
import { Link } from 'react-router-dom';

const ExploreSection = () => {
  return (
    <div className="bg-turmeric-cream py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <p className="text-turmeric-darkGreen font-poppins mb-2">Discover the Wonders of</p>
            <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-turmeric-darkGreen">Explore Our Premium</h2>
            <p className="text-gray-700 font-poppins mb-8 max-w-md">
              Indulge in the authentic taste and health benefits of our premium turmeric. 
              Elevate your dishes with the perfect balance
            </p>
            <h3 className="text-5xl font-playfair mb-8 text-turmeric-darkGreen">Shop</h3>
            <Link 
              to="/products" 
              className="bg-turmeric-orange text-white px-8 py-3 rounded-md font-poppins hover:bg-turmeric-darkOrange transition duration-300 inline-block"
              aria-label="Purchase premium turmeric powder"
            >
              Buy Now
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-full bg-turmeric-green overflow-hidden w-full aspect-square relative">
              <img 
                src="/lovable-uploads/b60e2459-9306-4d98-8346-03164a5ce7b7.png" 
                alt="Premium turmeric powder" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-turmeric-darkGreen rounded-full p-4 flex items-center justify-center w-24 h-24">
                <span className="text-white font-playfair text-sm text-center">Turmeric<br />Premium & Pure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
