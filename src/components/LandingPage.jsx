import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PawPrint, Heart, MessageCircle, MapPin, Camera, Send, X } from 'lucide-react';
import Link from 'next/link';

const LandingPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen ">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col items-center">
        
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-6"
        >
          Meet Your Pet Emergency Assistant
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center text-gray-700 mb-12 max-w-3xl"
        >
          Our 24/7 chatbot is here to help with animal emergencies, provide care advice, and connect you with local rescue resources.
        </motion.p>

        {/* Chatbot Preview - Central Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-md mb-12"
        >
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-rose-200">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4 text-white">
              <div className="flex items-center">
                <PawPrint className="h-6 w-6 mr-2" />
                <div>
                  <h3 className="text-lg font-semibold">Emergency Pet Assistant</h3>
                  <p className="text-sm opacity-90">24/7 Support Available</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="chat-scrollable p-4 bg-gray-50 h-64 overflow-y-auto">
              <div className="flex justify-start mb-4">
                <div className="bg-gray-100 rounded-lg p-3 rounded-bl-none max-w-xs">
                  <p className="text-sm text-black ">Hello! I'm here to help with animal emergencies. How can I assist you today?</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:30 AM</span>
                </div>
              </div>
              
              <div className="flex justify-end mb-4">
                <div className="bg-rose-500 text-white rounded-lg p-3 rounded-br-none max-w-xs">
                  <p className="text-sm">I found an injured stray cat. What should I do?</p>
                  <span className="text-xs opacity-80 mt-1 block">10:31 AM</span>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 rounded-bl-none max-w-xs">
                  <p className="text-sm text-black ">Thank you for helping! First, approach carefully to avoid startling it. If possible, gently place it in a secure carrier or box...</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:32 AM</span>
                  <div className="mt-3 flex flex-col space-y-2">
                    <button className="bg-white text-rose-500 border border-rose-300 rounded-lg p-2 text-sm hover:bg-rose-50 transition-colors text-left flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Find nearest rescue center
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input with Image Preview */}
            <div className="border-t border-gray-200 p-3 bg-white">
              {imagePreview && (
                <div className="mb-2 relative">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-300">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      onClick={removeImage}
                      className="absolute top-0 right-0 bg-gray-800 bg-opacity-70 rounded-full p-1 text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <button
  type="button"
  className="flex-1 text-left p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
  onClick={()=>{window.location.href='/pages/Chatbot'}}

>
  Type your message here...
</button>
                  <div className="p-2 bg-rose-100 text-rose-500 rounded-lg hover:bg-rose-200 transition-colors">
                    <Camera className="w-5 h-5" />
                  </div>
                <button className="p-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg shadow-lg hover:bg-rose-700 transition-colors"
          >
            <Link href="/pages/Chatbot" className="preact-link">
            Start Chatting Now
            </Link>
          </motion.button>
          
            {/* <Link href="/pages/adoption" className="preact-link">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              >
                <Heart className="w-5 h-5 mr-2" />
                Adopt a Friend
              </motion.button>
            </Link> */}
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;