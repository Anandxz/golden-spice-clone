
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: "What makes your turmeric special?",
      answer: "Our turmeric is sourced directly from premium farms in India, where it's cultivated using traditional methods that preserve its natural qualities. We ensure high curcumin content and authentic flavor through careful processing and quality control."
    },
    {
      question: "How should I store turmeric powder?",
      answer: "Store turmeric powder in an airtight container in a cool, dark place. Avoid exposure to direct sunlight and humidity to maintain its vibrant color and potency."
    },
    {
      question: "How long does your turmeric powder stay fresh?",
      answer: "When stored properly, our turmeric powder maintains its quality for up to 24 months from the date of packaging. The packaging date is clearly marked on each container."
    },
    {
      question: "Do you ship across all of India?",
      answer: "Yes, we provide shipping services to all states and union territories across India. Delivery times may vary depending on your location."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and cash on delivery for most locations."
    },
    {
      question: "Do you offer wholesale or bulk quantities?",
      answer: "Yes, we offer special pricing for bulk orders and wholesale purchases. Please contact us directly through our Contact page for more information."
    }
  ];

  return (
    <div className="bg-turmeric-cream min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-playfair text-turmeric-darkGreen mb-8">Frequently Asked Questions</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-xl font-playfair text-turmeric-darkGreen mb-3">{faq.question}</h3>
                <p className="font-poppins text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-turmeric-gold p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-playfair text-turmeric-darkGreen mb-4">
              Still have questions?
            </h2>
            <p className="font-poppins text-turmeric-darkGreen mb-6 max-w-xl mx-auto">
              If you couldn't find the answer you were looking for, please feel free to reach out to our customer support team.
            </p>
            <a 
              href="/contact" 
              className="bg-turmeric-darkGreen text-white px-6 py-3 rounded font-poppins hover:bg-opacity-90 transition duration-300 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
