import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ArrowRight, ArrowUp } from 'lucide-react';

export default function SendQuery() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gray-100 py-16 px-8 relative">
      <div className="max-w-7xl mx-auto bg-white rounded-[60px] p-12 md:p-16 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-12 h-0.5 bg-black"></div>
                </div>
                <span className="text-black text-sm font-medium tracking-wide">Let's Start Talking</span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-black"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Send Us Your Query
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Porta elementum a enim euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec rhoncus.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Company Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-300 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Company Address</h3>
                  <p className="text-gray-600">
                    230 Neville Street New<br />
                    Albany, IN 71520
                  </p>
                </div>
              </div>

              {/* Talk To Us */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-300 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Talk To Us</h3>
                  <p className="text-gray-600">
                    +00-123-456789<br />
                    +000-1234-56789
                  </p>
                </div>
              </div>

              {/* Office Days */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-300 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Office Days</h3>
                  <p className="text-gray-600">
                    Mon to Sat: 09:00am-<br />
                    07:00pm<br />
                    <span className="text-gray-500">Sunday : Closed</span>
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-300 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    info@example.com<br />
                    support@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-black mb-8">
              Book Your Free Consultation
            </h3>

            <div className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Company & Services */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company*"
                  value={formData.company}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 appearance-none cursor-pointer"
                >
                  <option value="">Choose Services*</option>
                  <option value="consulting">Consulting</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Additional Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 bg-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 resize-none"
              />

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Submit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors shadow-lg z-50"
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}