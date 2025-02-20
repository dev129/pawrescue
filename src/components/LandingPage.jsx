import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint, Heart, Phone, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-orange-50 ">
      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen ">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Saving Lives, One Paw at a Time
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              At <span className="font-semibold text-rose-600">Paws & Hearts Rescue</span>, we are dedicated to rescuing, rehabilitating, and rehoming animals in need. Join us in making a difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href='/pages/adoption' className='preact-link' >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg shadow-lg hover:bg-rose-700 transition-colors"
              >
                <Heart className="w-5 h-5 mr-2" />
                Adopt a Friend
              </motion.div>
              </Link>
              <Link href='#' className='preact-link'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </motion.div>
                  </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Rescued Dog"
              className="rounded-lg shadow-2xl"
            />
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;