import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Number with decorative elements */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="w-12 h-0.5 bg-black"></div>
            </div>
            <span className="text-black text-sm font-medium tracking-wide">
              Error 404
            </span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-black"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
          
          {/* Large 404 */}
          <h1 className="text-8xl md:text-9xl font-bold text-gray-300 mb-4">
            404
          </h1>
          
          {/* Decorative gradient line */}
          <div className="w-32 h-1 bg-gradient-to-l from-lime-200 to-green-400/70 mx-auto mb-8"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Oops! The page you're looking for seems to have vanished into thin air. 
          Don't worry though, our best financial advisors are on the case!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/"
            className="flex items-center gap-2 bg-gradient-to-l from-lime-200 to-green-400/70 hover:bg-green-500 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 group"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Looking for something?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              to="/services"
              className="block p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Our Services</h4>
              <p className="text-gray-600 text-sm">Explore our financial solutions</p>
            </Link>
            <Link 
              to="/about"
              className="block p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">About Us</h4>
              <p className="text-gray-600 text-sm">Learn about our company</p>
            </Link>
            <Link 
              to="/contact"
              className="block p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
              <p className="text-gray-600 text-sm">Get in touch with our team</p>
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>If you believe this is an error, please <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium">contact our support team</Link>.</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound