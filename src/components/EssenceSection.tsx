
import React from 'react';
import { Link } from 'react-router-dom';

const EssenceSection = () => {
  return (
    <div className="bg-turmeric-cream py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-center font-poppins text-turmeric-darkGreen mb-16">Explore the World of Turmeric</h3>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
            <div className="rounded-full bg-turmeric-gold overflow-hidden w-full aspect-square">
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/94539d5e-ec85-473b-a960-96792442a13f.png" 
                  alt="Turmeric products" 
                  className="w-4/5 h-4/5 object-contain z-10"
                />
                <img 
                  src="/lovable-uploads/30af1ed7-4dcc-49ea-85ff-633f0296ea71.png" 
                  alt="Turmeric leaves" 
                  className="absolute left-0 top-0 w-2/5 h-1/2 object-contain object-top-left opacity-90"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-12">
            <h4 className="font-poppins text-turmeric-darkGreen mb-4">Discover More</h4>
            <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-turmeric-darkGreen">The Essence of</h2>
            <p className="text-gray-700 font-poppins mb-8 max-w-md">
              Elevate your cooking with our premium turmeric, sourced from the finest farms. 
              Unlock the secrets of this versatile spice
            </p>
            <p className="font-poppins text-turmeric-darkGreen mb-6">Shop Now</p>
            <Link 
              to="/products" 
              className="bg-turmeric-orange text-white px-8 py-3 rounded-md font-poppins hover:bg-turmeric-darkOrange transition duration-300 inline-block"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssenceSection;
