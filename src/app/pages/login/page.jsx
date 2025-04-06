// LoginSignup.js
"use client";
import { useState } from 'react';
import Head from 'next/head';
import { PawPrint } from 'lucide-react';

export default function LoginSignup() {
  const [activeTab, setActiveTab] = useState('login');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Head>
        <title>PawRescue - Login</title>
        <meta name="description" content="Login to PawRescue" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 to-rose-800 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Animal Shapes */}
        
        <div className="flex w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden relative z-10">
          {/* Left Panel */}
          <div className="hidden md:block md:w-1/2 bg-gray-400 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/70 to-rose-800/70"></div>
            <div className="absolute bottom-10 left-10 right-10 text-white z-10">
              <h1 className="text-3xl font-bold mb-5 drop-shadow-md">PawRescue</h1>
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
              <PawPrint className="w-9 h-9 text-pink-600 group-hover:text-pink-700 transition-colors" />
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