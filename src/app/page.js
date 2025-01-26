'use client'
import { motion } from 'framer-motion';
import { Camera, Heart, Footprints, Upload, Phone, Home, PawPrint, Heart as HeartIcon, Info, Users, Calendar } from 'lucide-react';
import { useState } from 'react';

const EmergencyPetReport = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

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
      // This is where you would send the uploaded image to your backend.
      // Example: const response = await fetch('/api/upload', { method: 'POST', body: JSON.stringify({ image: uploadedImage }) });
    };

  const stats = [
    { icon: HeartIcon, value: "15,000+", label: "Animals Rescued" },
    { icon: Home, value: "8,000+", label: "Successful Adoptions" },
    { icon: Users, value: "5,000+", label: "Active Volunteers" },
    { icon: Calendar, value: "24/7", label: "Emergency Response" }
  ];

  const successStories = [
    {
      name: "Luna",
      description: "Found injured on the streets, now living her best life with a loving family",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Max",
      description: "Rescued from a drain during monsoon, now a therapy dog helping others",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Bella",
      description: "Survived a car accident, now spreading joy in her forever home",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100 relative overflow-hidden">
      {/* Floating Paw Prints Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100,
              y: Math.random() * 100,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
            className="absolute"
          >
            <Footprints className="w-8 h-8 text-rose-200" />
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Emergency Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-6">
            Help Them Heal
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Spotted an injured animal? Take a quick photo and we'll dispatch help immediately.
          </p>
        </motion.div>

        {/* Main Upload Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              {/* Upload Zone */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border-4 border-dashed border-rose-200 rounded-2xl p-8 text-center bg-rose-50 relative overflow-hidden"
              >
                <input 
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <div className="space-y-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Camera className="w-16 h-16 text-rose-400 mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Take or Upload a Photo
                  </h3>
                  <p className="text-gray-600">
                    {/* to make it easy to be accessible by the backend */}
                    {/* you would easily send the  image using this value */}
                    {uploadedImage&&<p className="text-green-500">uploaded image</p>}
                    
                    Click here to capture or upload an image of the injured animal
                  </p>
                </div>
              </motion.div>

              {/* Emergency Instructions */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-rose-50 rounded-xl p-6">
                  {/* <AlertCircle className="w-8 h-8 text-rose-500 mb-4" /> */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Stay at a Safe Distance
                  </h3>
                  <p className="text-gray-600">
                    Keep yourself safe while helping. Don't approach injured animals directly.
                  </p>
                </div>
                <div className="bg-rose-50 rounded-xl p-6">
                  <Phone className="w-8 h-8 text-rose-500 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Emergency Support
                  </h3>
                  <p className="text-gray-600">
                    Call us at 1-800-PET-HELP for immediate assistance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Statistics */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <stat.icon className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Adopt Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Adopt a Stray?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img src={story.image} alt={story.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* Footer */}
     
    </div>
  );
}

export default EmergencyPetReport;
