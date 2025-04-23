
import React from 'react';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      image: "/lovable-uploads/edcb42cd-a1df-41b7-9975-7deef0b3e098.png",
      title: "Savor the Unparalleled Aroma and",
      ctaText: "Explore More"
    },
    {
      id: 2,
      image: "/lovable-uploads/edcb42cd-a1df-41b7-9975-7deef0b3e098.png",
      title: "Indulge in the",
      ctaText: "Shop Now",
      badge: "Nisl cong."
    },
    {
      id: 3,
      image: "/lovable-uploads/edcb42cd-a1df-41b7-9975-7deef0b3e098.png",
      title: "Discover the",
      ctaText: "Explore Our Collection"
    },
    {
      id: 4,
      image: "/lovable-uploads/edcb42cd-a1df-41b7-9975-7deef0b3e098.png",
      title: "Unlock the Secrets of",
      ctaText: "Shop Now"
    }
  ];

  return (
    <div className="bg-turmeric-cream py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair text-turmeric-darkGreen">
            Discover the Wonders of
          </h2>
          <p className="text-turmeric-darkGreen font-poppins mt-4">
            Unlock the Secret to Culinary Excellence with Our Premium
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-turmeric-beige rounded-lg overflow-hidden relative">
              {product.badge && (
                <div className="absolute top-4 right-4 bg-turmeric-orange text-white px-3 py-1 rounded-md font-poppins text-sm">
                  {product.badge}
                </div>
              )}
              <div className="p-6 h-80 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={`Product ${product.id}`}
                  className="w-4/5 h-4/5 object-contain" 
                />
              </div>
              <div className="p-4">
                <h3 className="font-poppins text-lg text-turmeric-darkGreen">{product.title}</h3>
                <p className="text-gray-400 font-poppins mt-2">
                  {product.id === 2 || product.id === 4 ? "Add to Cart" : "Buy"}
                </p>
                <Link 
                  to="/products" 
                  className={`mt-4 inline-block ${
                    product.ctaText === "Shop Now" 
                      ? "bg-turmeric-orange text-white" 
                      : "border border-turmeric-orange text-turmeric-orange"
                  } px-6 py-2 rounded-md font-poppins hover:bg-opacity-90 transition duration-300`}
                >
                  {product.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
