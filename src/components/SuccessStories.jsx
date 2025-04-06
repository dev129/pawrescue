'use client'
import React from 'react'
import { motion } from 'framer-motion';

const SuccessStories = () => {
    const successStories = [
        {
          name: "Goldy",
          description: "Found injured on the streets, now living her best life with a loving family",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-29Dd85xMJLqcP623vyyTi0GOwdMNVSD_A&s"
        },
        {
          name: "Sheru",
          description: "Rescued from a drain during monsoon, now a therapy dog helping others",
          image: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_640.jpg"
        },
        {
          name: "Bugs",
          description: "Survived a car accident, now spreading joy in her forever home",
          image: "https://i.pinimg.com/736x/b8/25/e1/b825e1484a21bb183466a3890df21c39.jpg"
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