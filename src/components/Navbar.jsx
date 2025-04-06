'use client'
import { useState, useEffect } from 'react'
import { PawPrint, Heart, Menu, X, Bone, PhoneCall, Ambulance, Phone } from 'lucide-react'
import { FaHome, FaPaw, FaDog, FaCat } from 'react-icons/fa'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/pages/RescueCenterView", label: "Rescue Center", icon: Ambulance },
    { href: "/pages/adoption", label: "Adoption", icon: FaPaw }
  ]

  const navbarVariants = {
    scrolled: {
      backgroundColor: "rgba(253, 242, 248, 0.95)",
      boxShadow: "0 4px 20px rgba(237, 100, 166, 0.15)",
      backdropFilter: "blur(8px)",
    },
    top: {
      backgroundColor: "rgba(253, 242, 248, 1)",
      boxShadow: "0 2px 10px rgba(237, 100, 166, 0.1)",
      backdropFilter: "blur(0px)",
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.nav 
      className="fixed w-full z-50 top-0 start-0 border-b border-pink-200"
      variants={navbarVariants}
      animate={scrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <PawPrint className="w-9 h-9 text-pink-600 group-hover:text-pink-700 transition-colors" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-pink-600 group-hover:text-pink-700 transition-colors">PawRescue</span>
              <span className="text-xs text-pink-400 -mt-1">Saving lives, one paw at a time</span>
            </div>
          </Link>
    
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors px-3 py-2 rounded-md text-sm font-medium relative group"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-pink-500 rounded-full w-0 group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            <Link 
              href="/pages/adoption"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span className="font-semibold">Contact Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-pink-600 hover:text-pink-700 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="block h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="block h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-pink-50 border-b border-pink-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-pink-600 hover:bg-pink-100 transition-colors px-4 py-3 rounded-lg text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: menuItems.length * 0.05 }}
                className="pt-2"
              >
                <Link 
                  href="/pages/adoption"
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-3 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-md flex items-center justify-center space-x-2 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Heart className="w-5 h-5 fill-white" />
                  <span className="font-semibold">Adopt Now</span>
                </Link>
              </motion.div>
              
              <motion.div 
                className="pt-4 flex justify-center space-x-6"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (menuItems.length + 1) * 0.05 }}
              >
                <FaDog className="w-6 h-6 text-pink-400 hover:text-pink-600 transition-colors cursor-pointer" />
                <FaCat className="w-6 h-6 text-pink-400 hover:text-pink-600 transition-colors cursor-pointer" />
                <Bone className="w-6 h-6 text-pink-400 hover:text-pink-600 transition-colors cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar