import { motion } from "framer-motion";
import { useRef } from "react";

export default function ServiceCard({ icon: Icon, title, description }) {
  const scrollRef = useRef(null)
  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      // viewport={{ once: false, amount: 0.2 }}
      className="card group"
    >
      <div className="card-bg"></div>

      <div className="content">
        <motion.div
          transition={{ duration: 0.1, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ rotateY: 180 }}
          className="icon-box group-hover:rotate-y-180"
        >
          <Icon />
        </motion.div>

        <h3 className="text-2xl font-bold">{title}</h3>

        <p>{description}</p>

        <span className="read-more">Read More →</span>
      </div>
    </motion.div>
  );
}
