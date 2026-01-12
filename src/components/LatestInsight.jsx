import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LatestInsight() {
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      date: "June 24, 2025",
      title: "Develop Your Edge In A Crowded Market",
      link: "#"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      date: "June 24, 2025",
      title: "Learn How To Trade With Confidence Daily",
      link: "#"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      date: "June 24, 2025",
      title: "Daily Trading Habits For Long-Term Success",
      link: "#"
    }
  ];

  return (
    <div className="w-full bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="w-12 h-0.5 bg-black"></div>
            </div>
            <span className="text-black text-sm font-medium tracking-wide">Recent Blogs</span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-black"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Latest Insight Articles
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-600">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-6 leading-tight group-hover:text-gray-700 transition-colors">
                  {article.title}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-6"></div>

                {/* Continue Reading Link */}
                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 text-black font-medium group-hover:gap-4 transition-all duration-300"
                >
                  <span className="underline">Continue Reading</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}