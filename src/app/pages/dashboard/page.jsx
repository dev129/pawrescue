"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>PawRescue - Connect Your Business with Nature</title>
        <meta name="description" content="PawRescue helps businesses integrate with nature conservation efforts" />
      </Head>

      {/* Header/Navigation */}
      {/* <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-10 h-10 mr-3" viewBox="0 0 100 100" fill="none">
              <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#3c8d50" opacity="0.2"></path>
              <path d="M30,30 C40,25 60,25 70,30 C75,40 75,60 70,70 C60,75 40,75 30,70 C25,60 25,40 30,30 Z" fill="#134e5e"></path>
              <circle cx="40" cy="40" r="5" fill="white"></circle>
              <circle cx="60" cy="40" r="5" fill="white"></circle>
            </svg>
            <span className={`font-bold text-xl ${isScrolled ? 'text-rose-800' : 'text-white'}`}>PawRescue</span>
          </div>
          
          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              <li>
                <a href="#features" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Features</a>
              </li>
              <li>
                <a href="#benefits" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Benefits</a>
              </li>
              <li>
                <a href="#testimonials" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Pricing</a>
              </li>
            </ul>
            <div className="ml-8 flex space-x-4">
              <Link href="/login" className="px-4 py-2 font-medium rounded-lg border-2 border-pink-500 transition-colors duration-300 hover:bg-pink-500 hover:text-white">
                <span className={isScrolled ? 'text-pink-600 hover:text-white' : 'text-white'}>Login</span>
              </Link>
              <Link href="/signup" className="px-4 py-2 font-medium rounded-lg bg-pink-500 text-white transition-colors duration-300 hover:bg-pink-600">
                Sign Up
              </Link>
            </div>
          </nav> */}
          
          {/* Mobile menu button */}
          {/* <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div> */}
        
        {/* Mobile Navigation */}
        {/* {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="px-6 py-4 space-y-4">
              <li>
                <a href="#features" className="block font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>Features</a>
              </li>
              <li>
                <a href="#benefits" className="block font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>Benefits</a>
              </li>
              <li>
                <a href="#testimonials" className="block font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="block font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              </li>
              <li className="pt-4 flex flex-col space-y-3">
                <Link href="/login" className="w-full text-center px-4 py-2 font-medium rounded-lg border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Link href="/signup" className="w-full text-center px-4 py-2 font-medium rounded-lg bg-pink-500 text-white hover:bg-pink-600"
                  onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )} 
      </header> 
      */}

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-pink-600 to-rose-800 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-1/5 right-1/10 opacity-10" width="600" height="600" viewBox="0 0 100 100">
            <path d="M30,10 C50,0 70,0 90,10 C100,30 100,50 90,70 C70,90 50,90 30,70 C10,50 10,30 30,10 Z" fill="#ffffff"></path>
          </svg>
          <svg className="absolute -bottom-1/4 -left-1/4 opacity-10" width="800" height="800" viewBox="0 0 100 100">
            <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#ffffff"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between pt-12 lg:pt-20 pb-20">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Connect Your Business with Nature's Beauty
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-8 max-w-lg mx-auto lg:mx-0">
                Enhance your brand with our wildlife-inspired platform built for businesses that value sustainability and natural aesthetics.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/signup" className="px-8 py-4 bg-white text-pink-700 font-bold rounded-lg shadow-lg hover:bg-pink-50 transform transition hover:-translate-y-1">
                 Get Started
                </Link>
                <a href="#features" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transform transition hover:-translate-y-1">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-1">
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src="/api/placeholder/500/350" 
                      alt="Dashboard preview" 
                      className="w-full"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Unified Dashboard</h3>
                      <p className="text-gray-600">Monitor your business's ecological impact with our intuitive analytics platform.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-pink-400 rounded-full z-0"></div>
                <div className="absolute -left-4 -top-4 w-16 h-16 bg-rose-600 rounded-full z-0"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center pb-16">
            {/*
            <p className="text-pink-100 mb-6">Trusted by leading eco-conscious businesses</p>
             <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              
              <div className="h-12 w-32 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                <div className="text-white font-semibold">EcoTech</div>
              </div>
              <div className="h-12 w-32 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                <div className="text-white font-semibold">GreenLife</div>
              </div>
              <div className="h-12 w-32 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                <div className="text-white font-semibold">NatureCorp</div>
              </div>
              <div className="h-12 w-32 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                <div className="text-white font-semibold">EarthWise</div>
              </div>
            </div> */}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Businesses Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our platform offers unique solutions that help your business connect with nature while growing your bottom line.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Eco Impact Tracking</h3>
              <p className="text-gray-600">Monitor and showcase your company's positive environmental contributions through our intuitive dashboard.</p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community Engagement</h3>
              <p className="text-gray-600">Connect with like-minded businesses and customers who value sustainability and wildlife preservation.</p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Analytics</h3>
              <p className="text-gray-600">Track how your sustainability initiatives impact your business growth with detailed analytics.</p>
            </div>
            
            {/* Feature Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Automated Reporting</h3>
              <p className="text-gray-600">Save time with our automated sustainability reports that can be shared with stakeholders and customers.</p>
            </div>
            
            {/* Feature Card 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Partner Network</h3>
              <p className="text-gray-600">Access our worldwide network of conservation partners to expand your business's environmental initiatives.</p>
            </div>
            
            {/* Feature Card 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Data Security</h3>
              <p className="text-gray-600">Your business information is protected with enterprise-grade security and encryption protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How PawRescue Works for Businesses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our simple three-step process helps you integrate sustainability into your business model.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Sign Up & Customize</h3>
                <p className="text-gray-600">Create your account and customize your business profile with your specific sustainability goals and initiatives.</p>
                <div className="my-6 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img src="/api/placeholder/300/200" alt="Setup interface" className="rounded-lg"/>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" className='text-black' />
                    </svg>
                    <span className='text-black'>Quick 5-minute setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" className='text-black'/>
                    </svg>
                    <span className='text-black'>Customizable templates</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Connect & Track</h3>
                <p className="text-gray-600">Integrate your existing systems and begin tracking your environmental impact metrics in real-time.</p>
                <div className="my-6 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img src="/api/placeholder/300/200" alt="Analytics dashboard" className="rounded-lg"/>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" className=' text-black '/>
                    </svg>
                    <span className='text-black'>Simple API integrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" className='text-black'/>
                    </svg>
                    <span className='text-black '>Real-time analytics</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Showcase & Grow</h3>
                <p className="text-gray-600">Share your sustainability achievements with customers and partners to enhance your brand reputation.</p>
                <div className="my-6 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img src="/api/placeholder/300/200" alt="Reporting interface" className="rounded-lg"/>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Shareable reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Marketing tools included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-pink-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Businesses Say About Us</h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">Hear from our customers who have transformed their businesses with PawRescue.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-pink-700">E</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">EcoTech Solutions</h4>
                  <p className="text-gray-600 text-sm">Renewable Energy Sector</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">"PawRescue helped us showcase our sustainability efforts to investors and customers alike. Our brand reputation has never been stronger."</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-pink-700">G</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">GreenLife Retail</h4>
                  <p className="text-gray-600 text-sm">Eco-Friendly Products</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">"The automated reporting saved us dozens of hours each quarter. Now we can focus on actual sustainability work instead of paperwork."</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-pink-700">N</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">NatureCorp</h4>
                  <p className="text-gray-600 text-sm">Conservation Non-Profit</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">"Partnering with PawRescue gave us access to businesses genuinely interested in conservation. The networking opportunities have been invaluable."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your business needs. No hidden fees.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Starter</h3>
                <div className="text-pink-600 font-bold text-4xl mb-2">$49<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600">Perfect for small businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Basic impact dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Up to 1,000 data points</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Monthly reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Email support</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/signup?plan=starter" className="block w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition">
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-white rounded-xl p-8 border border-pink-200 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional</h3>
                <div className="text-pink-600 font-bold text-4xl mb-2">$99<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600">For growing businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Advanced impact dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Up to 10,000 data points</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Weekly reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">API access</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/signup?plan=professional" className="block w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition">
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
                <div className="text-pink-600 font-bold text-4xl mb-2">$249<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600">For large organizations</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom impact dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Unlimited data points</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Real-time reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">24/7 dedicated support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Advanced API & integrations</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/signup?plan=enterprise" className="block w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution?</p>
            <Link href="/contact" className="text-pink-600 font-medium hover:text-pink-700">
              Contact our sales team →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Connect Your Business with Nature?</h2>
            <p className="text-xl text-pink-100 mb-8">Join thousands of businesses making a positive impact on the environment while growing their brand.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/signup" className="px-8 py-4 bg-white text-pink-700 font-bold rounded-lg shadow-lg hover:bg-pink-50 transform transition hover:-translate-y-1">
                Start Your Free Trial
              </Link>
              <Link href="/demo" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transform transition hover:-translate-y-1">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}