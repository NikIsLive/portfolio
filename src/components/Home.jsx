import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden"
    >
    
      <motion.div
        style={{ y: y1 }}
        className="absolute left-10 top-10 w-40 h-40 opacity-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-pink-500/40">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute right-16 bottom-10 w-52 h-52 opacity-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-cyan-500/40">
          <rect x="20" y="20" width="60" height="60" rx="12" />
        </svg>
      </motion.div>

    
      <motion.div
        className="text-center z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hey, I'm <span className="text-cyan-400">Nikhil</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          I design and build modern web experiences that blend beauty, brains, and performance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-xl text-white shadow-md transition-all duration-300">
            View Projects
          </button>
          <button className="px-6 py-2 border border-cyan-600 hover:bg-cyan-600 rounded-xl text-white transition-all duration-300">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
