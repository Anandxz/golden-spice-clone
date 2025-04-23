
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-turmeric-darkGreen py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 mr-2">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M9,9H15L15,11C15,11.57 14.57,12 14,12H10C9.43,12 9,11.57 9,11"/>
            </svg>
          </div>
          <span className="text-white text-2xl font-playfair font-bold">Turmero</span>
        </Link>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-white hover:text-turmeric-gold transition duration-300 font-poppins">Home</Link>
        <Link to="/about" className="text-white hover:text-turmeric-gold transition duration-300 font-poppins">About</Link>
        <Link to="/products" className="text-white hover:text-turmeric-gold transition duration-300 font-poppins">Products</Link>
        <Link to="/contact" className="text-white hover:text-turmeric-gold transition duration-300 font-poppins">Contact</Link>
      </div>
      <div>
        <Link to="/faq" className="bg-turmeric-orange px-4 py-2 text-white font-poppins font-medium rounded hover:bg-turmeric-darkOrange transition duration-300">FAQ</Link>
      </div>
    </nav>
  );
};

export default Navbar;
