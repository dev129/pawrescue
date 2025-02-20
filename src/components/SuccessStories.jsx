'use client'
import React from 'react'
import { motion } from 'framer-motion';

const SuccessStories = () => {
    const successStories = [
        {
          name: "Luna",
          description: "Found injured on the streets, now living her best life with a loving family",
          image: "https://picsum.photos/200/300"
        },
        {
          name: "Max",
          description: "Rescued from a drain during monsoon, now a therapy dog helping others",
          image: "https://picsum.photos/200/300"
        },
        {
          name: "Bella",
          description: "Survived a car accident, now spreading joy in her forever home",
          image: "https://picsum.photos/200/300"
        }
      ];
    
  return (
    <div className="mb-20">
    <h2 className="text-4xl   font-bold text-center text-gray-800 mb-12">Success Stories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {successStories.map((story, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white text-black  rounded-xl overflow-hidden shadow-lg"
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
  )
}

export default SuccessStories