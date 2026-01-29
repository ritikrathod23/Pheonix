import { motion } from "framer-motion";
import { Play, TrendingUp } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Market Opening Strategy",
    subtitle: "Nifty & BankNifty Analysis",
    src: "https://www.youtube.com/shorts/l8MZo91MrR4?feature=share",
  },
  {
    id: 2,
    title: "Stock of the Day",
    subtitle: "High Probability Setup",
    src: "https://www.youtube.com/shorts/l8MZo91MrR4?feature=share",
  },
  {
    id: 3,
    title: "Risk Management Tip",
    subtitle: "Protect Your Capital",
    src: "https://www.youtube.com/shorts/l8MZo91MrR4?feature=share",
  },
];

export default function ReelsSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-black rounded-full" />
              <span className="w-12 h-0.5 bg-black" />
            </div>

            <span className="text-sm font-medium tracking-wide text-black">
              Market Reels
            </span>

            <div className="flex items-center gap-2">
              <span className="w-12 h-0.5 bg-black" />
              <span className="w-3 h-3 bg-black rounded-full" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Watch. Learn. Invest Smarter.
          </h2>
          <p className="text-gray-700 mt-3">
            Quick investing insights crafted for smart investors
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-xl bg-black"
            >
              {/* Video (9:16) */}
              {/* Video rendering logic */}
              {video.src.includes("youtube.com") || video.src.includes("youtu.be") ? (
                <iframe
                  className="w-full aspect-[9/16] object-cover pointer-events-none group-hover:pointer-events-auto"
                  src={`https://www.youtube.com/embed/${video.src.split("/shorts/")[1]?.split("?")[0] || video.src.split("v=")[1]?.split("&")[0]
                    }?&mute=1&loop=1&playlist=${video.src.split("/shorts/")[1]?.split("?")[0] || video.src.split("v=")[1]?.split("&")[0]
                    }&controls=0&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={video.src}
                  muted
                  loop
                  playsInline
                  className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-500"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent opacity-90 pointer-events-none" />

              {/* Play Icon */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.15 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-14 h-14 rounded-full bg-green-500/90 flex items-center justify-center shadow-lg">
                  <Play className="text-white ml-1 cursor-pointer" size={26} />
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="absolute bottom-0 p-5 pointer-events-none">
                <h3 className="text-lg font-bold text-white">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {video.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
