'use client'
import { motion } from 'framer-motion';
import {  Heart,  Upload, Heart as HeartIcon, Info, Users,  MessageCircle } from 'lucide-react';
import { useState } from 'react';
import SuccessStories from '../components/SuccessStories';
import Impact from '../components/Impact';
import LandingPage from '../components/LandingPage';

const EmergencyPetReport = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setUploadedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
  }

  const handleImageUpload = async (event) => {
    handleImageChange(event);
  };

  


  return (<>
      
    <div className="min-h-screen  bg-gradient-to-br from-rose-100 to-pink-200 relative overflow-hidden">
      {/* Floating Paw Prints Background */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Emergency Header */}
        

        {/* Main Upload Section */}
        
        <LandingPage/>

        {/* Impact Statistics */}
<Impact/>
        {/* Why Adopt Section */}
        <div className="mb-20 text-black">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Adopt a Stray?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 text-center">
              <Heart className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Save a Life</h3>
              <p className="text-gray-600">
                Every adoption opens up space for another animal in need. You're not just giving one animal a home - you're helping many.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Loyal Companionship</h3>
              <p className="text-gray-600">
                Rescued animals often show extraordinary loyalty and affection, knowing they've been given a second chance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <Info className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Combat Overpopulation</h3>
              <p className="text-gray-600">
                Adoption helps reduce the stray animal population and promotes responsible pet ownership in your community.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
       <SuccessStories/>
      </div>

      

      {/* Loading Overlay */}
      {isUploading && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-2xl p-8 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
              <Upload className="w-12 h-12 text-rose-500" />
            </motion.div>
            <p className="mt-4 text-lg font-semibold">Uploading photo...</p>
          </div>
        </motion.div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-full shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6" />
            <span>Photo uploaded successfully! Help is on the way.</span>
          </div>
        </motion.div>
      )}
    </div>
      </>
  );
}

export default EmergencyPetReport;