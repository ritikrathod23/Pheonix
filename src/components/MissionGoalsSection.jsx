import React, { useState } from 'react';
import { Check, ArrowRight, ArrowUp } from 'lucide-react';

export default function MissionGoalsSection() {
  const [activeTab, setActiveTab] = useState('Inspection');

  const tabs = ['Inspection', 'Approach', 'Performance'];

  const features = [
    { text: 'Efficient Resource Allocation', column: 1 },
    { text: 'Maintain ethics & compliance', column: 2 },
    { text: 'Improved Productivity', column: 1 },
    { text: 'Give Profit-oriented advice', column: 2 },
    { text: 'Auto reporting system', column: 1 },
    { text: 'Ensure timely updates', column: 2 }
  ];

  return (
    <div className="w-full bg-gray-100 rounded-t-[60px] relative py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left Image */}
              <div className="rounded-3xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                  alt="Business analytics"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right Image */}
              <div className="rounded-3xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Professional woman"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="rounded-3xl overflow-hidden h-80">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
                  alt="Man working on laptop"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="rounded-3xl overflow-hidden h-80">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Circle Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-1 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-white text-[10px] font-medium leading-tight px-2">
                  <div className="whitespace-nowrap">Smart Consulting Help</div>
                  <div className="whitespace-nowrap mt-0.5">Smart Consulting</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-12 h-0.5 bg-black"></div>
                </div>
                <span className="text-black text-sm font-medium tracking-wide">Mission And Goals</span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-black"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                Achieving Success Through Clear Company Goals.
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 mb-6 border-b border-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-lg font-medium transition-colors relative ${
                    activeTab === tab
                      ? 'text-black'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              Proin libero feugiat tristique accumsan maecenas potenti ultricies. Consequat magna ante condimentum neque at luctus nibh. Ut hendrerit semper vel class aptent taciti sociosqu. Suscipit auctor curabitur.
            </p>

            {/* Features Checklist - Two Columns */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <button className="flex items-center gap-2 bg-gradient-to-l from-lime-200 to-green-400/70 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors shadow-lg z-50">
        <ArrowUp className="w-6 h-6 text-black" />
      </div>
    </div>
  );
}