'use client'
import { motion } from 'framer-motion';
import { Heart, PawPrint, Phone, Mail, HomeIcon, Clock } from 'lucide-react';

export default function Home() {
  const animals = [
    {
      name: "Luna",
      type: "Dog",
      age: "2 years",
      image: "/api/placeholder/400/300",
      description: "Friendly and energetic Golden Retriever looking for an active family"
    },
    {
      name: "Whiskers",
      type: "Cat",
      age: "1 year",
      image: "/api/placeholder/400/300",
      description: "Sweet and gentle tabby cat who loves cuddles"
    },
    {
      name: "Rocky",
      type: "Dog",
      age: "3 years",
      image: "/api/placeholder/400/300",
      description: "Loyal German Shepherd mix with a heart of gold"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold mb-6"
          >
            Give Them a Forever Home
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8"
          >
            Every pet deserves a loving family
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-600 transition-colors"
          >
            Adopt Now
          </motion.button>
        </div>

        <motion.div 
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 text-white"
        >
          <PawPrint className="w-8 h-8" />
        </motion.div>
      </motion.header>

      {/* Featured Pets Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-800">Meet Our Furry Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {animals.map((animal, index) => (
            <motion.div
              key={animal.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-amber-800">{animal.name}</h3>
                <p className="text-gray-600 mb-2">{animal.type} • {animal.age}</p>
                <p className="text-gray-700">{animal.description}</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 flex items-center gap-2 bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  Meet Me
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Adopt Section */}
      <section className="bg-amber-100 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-800">Why Adopt?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Save a Life", text: "Give a homeless pet a second chance at happiness" },
              { icon: HomeIcon, title: "Find Your Best Friend", text: "Discover unconditional love and companionship" },
              { icon: PawPrint, title: "Make a Difference", text: "Help reduce the number of pets in shelters" }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-800">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-500" />
                <div>
                  <h3 className="font-semibold text-amber-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-amber-500" />
                <div>
                  <h3 className="font-semibold text-amber-800">Email</h3>
                  <p className="text-gray-600">adopt@pawfriends.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-amber-500" />
                <div>
                  <h3 className="font-semibold text-amber-800">Hours</h3>
                  <p className="text-gray-600">Mon-Sat: 9AM-6PM</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">© 2025 PawFriends Animal Adoption. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-amber-300 transition-colors">About</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}