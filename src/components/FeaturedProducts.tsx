
import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      image: "/lovable-uploads/94539d5e-ec85-473b-a960-96792442a13f.png",
      title: "Vibrant Turmeric"
    },
    {
      image: "/lovable-uploads/b60e2459-9306-4d98-8346-03164a5ce7b7.png",
      title: "Premium Turmeric"
    },
    {
      image: "/lovable-uploads/edcb42cd-a1df-41b7-9975-7deef0b3e098.png",
      title: "Exceptional Turmeric"
    },
    {
      image: "/lovable-uploads/b60e2459-9306-4d98-8346-03164a5ce7b7.png",
      title: "Pure Turmeric"
    }
  ];

  return (
    <div className="bg-turmeric-gold py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16">Introducing Our Premium Turmeric</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-turmeric-cream rounded-lg p-4 mb-4 w-full aspect-square flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
              <h3 className="text-center font-poppins">
                <span className="block text-xl font-medium">{product.title.split(' ')[0]}</span>
                <span className="block text-xl font-medium">Turmeric</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
