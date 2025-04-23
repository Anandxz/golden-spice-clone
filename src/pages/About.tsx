
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-turmeric-cream min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-playfair text-turmeric-darkGreen mb-8">About Our Turmeric</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-playfair text-turmeric-darkGreen mb-4">Our Story</h2>
            <p className="text-gray-700 font-poppins mb-8">
              Founded with a passion for providing the purest and most potent turmeric powder, 
              our journey began in the lush fields of India where turmeric has been cultivated 
              for thousands of years. We work directly with small-scale farmers who employ 
              traditional farming methods to grow turmeric that is rich in curcumin and flavor.
            </p>
            
            <h2 className="text-2xl font-playfair text-turmeric-darkGreen mb-4">Our Process</h2>
            <p className="text-gray-700 font-poppins mb-8">
              Each batch of our turmeric is carefully harvested, cleaned, and processed with minimal 
              intervention to preserve its natural properties. The rhizomes are boiled, dried in the 
              sun, and then ground into the vibrant powder that we package for your kitchen. 
              This traditional process ensures that you receive turmeric with maximum curcumin content 
              and authentic flavor.
            </p>
            
            <h2 className="text-2xl font-playfair text-turmeric-darkGreen mb-4">Our Commitment</h2>
            <p className="text-gray-700 font-poppins">
              We are committed to sustainability, fair trade practices, and providing you with 
              the highest quality turmeric powder available. Each purchase supports traditional 
              farming communities in India while bringing the exceptional health benefits and 
              culinary versatility of premium turmeric to your home.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
