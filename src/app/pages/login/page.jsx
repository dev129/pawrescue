// LoginSignup.js
"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function LoginSignup() {
  const [activeTab, setActiveTab] = useState('login');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Head>
        <title>WildLife Connect - Login</title>
        <meta name="description" content="Login to Wildlife Connect" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 to-rose-800 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Animal Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-1/10 left-1/20 transform rotate-12 opacity-5" width="200" height="200" viewBox="0 0 100 100">
            <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#3c8d50"></path>
          </svg>
          <svg className="absolute bottom-1/20 right-1/10 transform -rotate-12 opacity-5" width="150" height="150" viewBox="0 0 100 100">
            <path d="M20,20 C40,0 60,0 80,20 C100,40 100,60 80,80 C60,100 40,100 20,80 C0,60 0,40 20,20 Z" fill="#134e5e"></path>
          </svg>
          <svg className="absolute top-3/5 left-1/10 transform rotate-45 opacity-5" width="120" height="120" viewBox="0 0 100 100">
            <path d="M50,15 C65,15 80,30 80,50 C80,70 65,85 50,85 C35,85 20,70 20,50 C20,30 35,15 50,15 Z" fill="#3c8d50"></path>
          </svg>
          <svg className="absolute top-1/5 right-1/10 opacity-5" width="180" height="180" viewBox="0 0 100 100">
            <path d="M30,10 C50,0 70,0 90,10 C100,30 100,50 90,70 C70,90 50,90 30,70 C10,50 10,30 30,10 Z" fill="#134e5e"></path>
          </svg>
        </div>

        <div className="flex w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden relative z-10">
          {/* Left Panel */}
          <div className="hidden md:block md:w-1/2 bg-gray-400 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/70 to-rose-800/70"></div>
            <div className="absolute bottom-10 left-10 right-10 text-white z-10">
              <h1 className="text-3xl font-bold mb-5 drop-shadow-md">WildLife Connect</h1>
              <p className="text-base leading-relaxed drop-shadow-md">
                Join our community dedicated to celebrating and protecting the most magnificent creatures on our planet.
                Discover the beauty of wildlife through our exclusive content and connections.
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-10 text-center">
              <div className="inline-block">
                <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
                  <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#3c8d50" opacity="0.2"></path>
                  <path d="M30,30 C40,25 60,25 70,30 C75,40 75,60 70,70 C60,75 40,75 30,70 C25,60 25,40 30,30 Z" fill="#134e5e"></path>
                  <circle cx="40" cy="40" r="5" fill="white"></circle>
                  <circle cx="60" cy="40" r="5" fill="white"></circle>
                </svg>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex mb-8">
              <button 
                className={`flex-1 text-center py-3 font-semibold border-b-2 ${activeTab === 'login' ? 'border-pink-600 text-pink-600' : 'border-transparent text-gray-500'}`}
                onClick={() => toggleTab('login')}
              >
                Login
              </button>
              <button 
                className={`flex-1 text-center py-3 font-semibold border-b-2 ${activeTab === 'signup' ? 'border-pink-600 text-pink-600' : 'border-transparent text-gray-500'}`}
                onClick={() => toggleTab('signup')}
              >
                Sign Up
              </button>
            </div>

            {/* Login Form */}
            {activeTab === 'login' && (
              <form className="space-y-6">
                <h2 className="text-2xl font-semibold text-center text-rose-800 mb-8">Welcome Back</h2>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-pink-600 to-rose-700 text-white font-medium rounded-lg shadow hover:from-pink-700 hover:to-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transform transition hover:-translate-y-0.5"
                  >
                    Login
                  </button>
                </div>
              </form>
            )}

            {/* Signup Form */}
            {activeTab === 'signup' && (
              <form className="space-y-6">
                <h2 className="text-2xl font-semibold text-center text-rose-800 mb-8">Join Our Community</h2>
                
                <div className="space-y-2">
                  <label htmlFor="fullname" className="block text-sm text-gray-600">Company Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      autoComplete="name"
                      required
                      className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-email" className="block text-sm text-gray-600">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      id="signup-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-password" className="block text-sm text-gray-600">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                    <input
                      id="signup-password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="block text-sm text-gray-600">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-pink-600 to-rose-700 text-white font-medium rounded-lg shadow hover:from-pink-700 hover:to-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transform transition hover:-translate-y-0.5"
                  >
                    Create Account
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  Already have an account?{' '}
                  <button 
                    type="button"
                    className="font-medium text-pink-600 hover:text-pink-500"
                    onClick={() => toggleTab('login')}
                  >
                    Login here
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}