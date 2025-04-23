
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-turmeric-cream min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-playfair text-turmeric-darkGreen mb-8">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-playfair text-turmeric-darkGreen mb-6">Send Us a Message</h2>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-turmeric-darkGreen font-poppins mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-turmeric-orange font-poppins"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-turmeric-darkGreen font-poppins mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-turmeric-orange font-poppins"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-turmeric-darkGreen font-poppins mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-turmeric-orange font-poppins"
                  placeholder="Enter subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-turmeric-darkGreen font-poppins mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-turmeric-orange font-poppins"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-turmeric-orange text-white px-6 py-3 rounded-md font-poppins hover:bg-turmeric-darkOrange transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-playfair text-turmeric-darkGreen mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-poppins font-medium text-turmeric-darkGreen">Address</h3>
                  <p className="font-poppins text-gray-700">123 Spice Market Lane, Kerala, India 682001</p>
                </div>
                
                <div>
                  <h3 className="font-poppins font-medium text-turmeric-darkGreen">Email</h3>
                  <p className="font-poppins text-gray-700">info@turmero.com</p>
                </div>
                
                <div>
                  <h3 className="font-poppins font-medium text-turmeric-darkGreen">Phone</h3>
                  <p className="font-poppins text-gray-700">+91 98765 43210</p>
                </div>
                
                <div>
                  <h3 className="font-poppins font-medium text-turmeric-darkGreen">Business Hours</h3>
                  <p className="font-poppins text-gray-700">Monday to Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="font-poppins text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-turmeric-gold p-8 rounded-lg">
              <h3 className="font-playfair text-xl text-turmeric-darkGreen mb-4">Payment Options</h3>
              <p className="font-poppins text-turmeric-darkGreen mb-4">We accept various payment methods for your convenience:</p>
              <ul className="font-poppins text-turmeric-darkGreen space-y-2">
                <li>• UPI (Google Pay, PhonePe, Paytm)</li>
                <li>• Credit/Debit Cards</li>
                <li>• Net Banking</li>
                <li>• Cash on Delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
