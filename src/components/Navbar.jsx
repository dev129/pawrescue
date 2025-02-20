'use client'
import { useState } from 'react'
import { PawPrint, Heart, Menu, X, Bone, PhoneCall } from 'lucide-react'
import {FaHome} from 'react-icons/fa'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/pages/RescueCenterView", label: "Rescue Center", icon: Bone },
    { href: "/pages/adoption", label: "Adoption", icon: PawPrint },
    { href: "/pages/ContactUs", label: "Contact", icon: PhoneCall }
  ]

  return (
    <nav className="bg-pink-50 fixed w-full z-50 top-0 start-0 border-b border-pink-100 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
          >
            <PawPrint className="w-8 h-8 fill-current" />
            <span className="text-2xl font-bold">PawRescue</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <button className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Adopt Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-600 hover:text-pink-700 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-pink-50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 hover:bg-pink-100 transition-colors px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <button 
                className="w-full bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Heart className="w-5 h-5" />
                <span>Adopt Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar