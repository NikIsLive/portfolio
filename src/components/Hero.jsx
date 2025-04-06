import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6"
    >
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm {"Nikhil"}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Nikhil
          </span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-xl mx-auto">
          I craft clean, creative, and performant web experiences. Let's build
          something great together.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:border-white text-gray-300 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
