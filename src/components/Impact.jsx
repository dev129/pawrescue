'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { HeartIcon, Home, Users , Calendar  } from 'lucide-react';
const Impact = () => {
    const stats = [
        { icon: HeartIcon, value: "15,000+", label: "Animals Rescued" },
        { icon: Home, value: "8,000+", label: "Successful Adoptions" },
        { icon: Users, value: "5,000+", label: "Active Volunteers" },
        { icon: Calendar, value: "24/7", label: "Emergency Response" }
      ];
  return (
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

  )
}

export default Impact