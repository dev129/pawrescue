import { PawPrint } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-pink-100 text-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
              <PawPrint className="w-9 h-9 text-black group-hover:text-pink-700 transition-colors" />
                <span className="font-bold text-xl">PawRescue</span>
              </div>
              <p className="text-black-400 mb-6">Connecting businesses with nature for a sustainable future.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-black-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-black-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-black-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm5.2-3.4a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </a>
                <a href="#" className="text-black-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-black-400 hover:text-white">About Us</a></li>
                <li><a href="/careers" className="text-black-400 hover:text-white">Careers</a></li>
                <li><a href="/blog" className="text-black-400 hover:text-white">Blog</a></li>
                <li><a href="/press" className="text-black-400 hover:text-white">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/help" className="text-black-400 hover:text-white">Help Center</a></li>
                <li><a href="/docs" className="text-black-400 hover:text-white">Documentation</a></li>
                <li><a href="/partners" className="text-black-400 hover:text-white">Partners</a></li>
                <li><a href="/case-studies" className="text-black-400 hover:text-white">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-black-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-black-400 hover:text-white">Terms of Service</a></li>
                <li><a href="/cookies" className="text-black-400 hover:text-white">Cookie Policy</a></li>
                <li><a href="/gdpr" className="text-black-400 hover:text-white">GDPR Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-black-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-black-400 text-sm mb-4 md:mb-0">© 2025 PawRescue. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="/terms" className="text-black-400 hover:text-white text-sm">Terms</a>
              <a href="/privacy" className="text-black-400 hover:text-white text-sm">Privacy</a>
              <a href="/cookies" className="text-black-400 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer