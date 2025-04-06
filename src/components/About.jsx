import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen bg-[#0a0a0a] px-6 py-20 flex items-center justify-center"
    >
      {/* Floating SVGs */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="fill-purple-500/20 w-full h-full">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-16 w-28 h-28"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="fill-indigo-500/20 w-full h-full">
          <rect x="20" y="20" width="60" height="60" rx="12" />
        </svg>
      </motion.div>

      {/* Properly aligned content */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-400 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm a web developer who specializes in crafting clean, modern, and efficient digital experiences. I blend creativity with performance to create visually stunning and functional solutions with a focus on detail and user engagement.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
