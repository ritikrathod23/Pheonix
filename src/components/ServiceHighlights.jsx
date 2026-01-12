import React from 'react';
import { DollarSign, Users, Briefcase, TrendingUp } from 'lucide-react';

export default function ServiceHighlights() {
  const services = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Decision Streamlining",
      description: "Senectus netus suscipit auctor curabitur facilisi cubilia curae.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Boosted Efficiency",
      description: "Vel maxime voluptatem aut molestias quia sit praesentium.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Recruitment Support",
      description: "Et tempore ipsam non voluptatum molestiae et beatae incidunt.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Budget Optimization",
      description: "Maximizing resources with strategic financial planning and analysis.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
    }
  ];

  return (
    <div className="w-full bg-black rounded-[40px] py-20 px-8 md:px-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
          <span className="text-white text-sm font-medium tracking-wide">Service Highlights</span>
          <div className="flex items-center gap-2">
            <div className="w-12 h-0.5 bg-white"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Built <span className="text-green-400">With</span> Your Needs
        </h2>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative bg-zinc-900 rounded-3xl overflow-hidden hover:bg-zinc-800 transition-all duration-300"
          >
            {/* Image with rounded edge effect */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full">
                <div 
                  className="w-full h-full rounded-bl-[100px] overflow-hidden"
                  style={{
                    clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%, 0 30%)'
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Icon */}
              <div className="absolute bottom-6 left-6 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center text-black shadow-lg">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to top button (visible in image) */}
      <div className="fixed bottom-8 right-8 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors shadow-lg">
        <svg 
          className="w-6 h-6 text-black" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </div>
    </div>
  );
}