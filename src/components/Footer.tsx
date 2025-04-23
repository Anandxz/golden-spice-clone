
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-turmeric-beige pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <svg className="w-12 h-12" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M9,9H15L15,11C15,11.57 14.57,12 14,12H10C9.43,12 9,11.57 9,11" />
              </svg>
            </div>
            <p className="font-poppins text-gray-700 mt-auto">
              © 2025 Turmero, Inc.<br />
              All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-turmeric-darkGreen font-medium font-poppins mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">Home</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">About</Link></li>
              <li><Link to="/products" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">Products</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-turmeric-darkGreen font-medium font-poppins mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">Shipping</Link></li>
              <li><Link to="/returns" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">Returns</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-turmeric-darkGreen font-medium font-poppins mb-4">Connect with Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">Facebook</a></li>
              <li><a href="#" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">Instagram</a></li>
              <li><a href="#" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">Twitter</a></li>
              <li><a href="#" className="text-gray-700 hover:text-turmeric-orange transition duration-300 font-poppins">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="bg-turmeric-orange rounded-full p-8 w-32 h-32 flex items-center justify-center mb-6 md:mb-0">
            <div className="text-white text-center font-playfair">
              <p className="text-xs">YOUR</p>
              <p className="text-lg font-medium">HEALTH</p>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-playfair text-turmeric-orange md:ml-6">Turmeric</h2>
        </div>
        
        <div className="text-center mt-12">
          <p className="font-poppins text-xs text-gray-500">
            Premium & Pure • Since 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
