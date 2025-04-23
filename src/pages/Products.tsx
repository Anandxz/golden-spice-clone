
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Turmeric Powder - 500g",
      image: "/lovable-uploads/b60e2459-9306-4d98-8346-03164a5ce7b7.png",
      price: "₹399",
      description: "Our finest grade turmeric powder, perfect for daily cooking."
    },
    {
      id: 2,
      name: "Premium Turmeric Powder - 1kg",
      image: "/lovable-uploads/b60e2459-9306-4d98-8346-03164a5ce7b7.png",
      price: "₹749",
      description: "Family-size pack of our premium turmeric powder."
    },
    {
      id: 3,
      name: "Premium Turmeric Powder - 2kg",
      image: "/lovable-uploads/b60e2459-9306-4d98-8346-03164a5ce7b7.png",
      price: "₹1399",
      description: "Bulk pack for restaurants and large families."
    },
    {
      id: 4,
      name: "Organic Turmeric Jar - 500g",
      image: "/lovable-uploads/edcb42cd-a1df-41b7-9975-7deef0b3e098.png",
      price: "₹449",
      description: "Certified organic turmeric in a convenient jar packaging."
    },
  ];

  return (
    <div className="bg-turmeric-cream min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-playfair text-turmeric-darkGreen mb-2">Our Products</h1>
        <p className="text-gray-700 font-poppins mb-12 max-w-2xl">
          Discover our range of premium turmeric powders, carefully sourced and processed to 
          preserve maximum flavor and health benefits.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-64 bg-turmeric-beige flex items-center justify-center p-6">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl text-turmeric-darkGreen mb-2">{product.name}</h3>
                <p className="text-gray-700 font-poppins mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-turmeric-darkGreen font-bold font-playfair text-xl">{product.price}</span>
                  <button className="bg-turmeric-orange text-white px-4 py-2 rounded font-poppins hover:bg-turmeric-darkOrange transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-turmeric-gold p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair text-turmeric-darkGreen mb-4">
                Need bulk quantities for your business?
              </h2>
              <p className="font-poppins text-turmeric-darkGreen">
                We offer special pricing for restaurants, spice shops, and other businesses.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="mt-6 md:mt-0 bg-turmeric-darkGreen text-white px-6 py-3 rounded font-poppins hover:bg-opacity-90 transition duration-300"
            >
              Contact for Wholesale
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
