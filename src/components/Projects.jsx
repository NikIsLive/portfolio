import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Dark-themed, animated personal portfolio with cursor, parallax, and more.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Blog",
    description: "Blogs on agentic AI and frameworks like LangChain and Crew AI.",
    tech: ["Next.js", "Markdown", "Vercel"],
    link: "#",
    github: "#",
  },
  {
    title: "Anime Hub",
    description: "All-in-one anime streaming site with search and recommendations.",
    tech: ["React", "Firebase", "REST API"],
    link: "#",
    github: "#",
  },
];

const swingAnimation = {
  animate: {
    rotate: [0, 3, -3, 2, -2, 0],  
    transition: {
      duration: 4,  
      repeat: Infinity,
      ease: "easeInOut",  
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 md:px-16 text-white relative overflow-hidden"
    >
        <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-center text-cyan-400 mb-16"
            >
              <h2>Featured Projects</h2>
            </motion.div>

      
      <div className="flex justify-between items-center gap-16">
        
        <div
          className="relative flex flex-col items-center w-[280px] ml-[100px]"  // Added margin-left
        >
          <div className="w-3 h-3 bg-gray-400 rounded-full shadow-md z-30 mb-2 border border-gray-600" />

          {/* Realistic Ropes */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[280px] h-[100px] pointer-events-none z-20">
            <svg width="100%" height="100%">
              <path
                d="M40 0 Q60 50 80 100"
                stroke="url(#rope-gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#rope-shadow)"
              />
              <path
                d="M240 0 Q220 50 200 100"
                stroke="url(#rope-gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#rope-shadow)"
              />
              <defs>
                <linearGradient id="rope-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9e7d58" />
                  <stop offset="100%" stopColor="#3e2b1f" />
                </linearGradient>
                <filter id="rope-shadow">
                  <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodColor="#000" floodOpacity="0.3" />
                </filter>
              </defs>
            </svg>
          </div>

          <motion.div
            className="w-[280px] mt-[100px] p-6 rounded-[20px] bg-gradient-to-b from-[#1e2a47] to-[#0b0f1a] border border-cyan-900/50 shadow-lg z-10 backdrop-blur-sm"
            variants={swingAnimation}
            animate="animate"
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-3 tracking-tight">
              {projects[0].title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{projects[0].description}</p>
            <div className="flex justify-center gap-4">
              <a href={projects[0].link} target="_blank" rel="noreferrer" className="bg-cyan-700 hover:bg-cyan-600 px-4 py-1.5 rounded-md text-sm font-medium text-white">
                Live
              </a>
              <a href={projects[0].github} target="_blank" rel="noreferrer" className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-md text-sm font-medium text-white">
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* Middle Card (AI Blog) */}
        <div className="relative flex flex-col items-center w-[280px]">
          <div className="w-3 h-3 bg-gray-400 rounded-full shadow-md z-30 mb-2 border border-gray-600" />

          {/* Realistic Ropes */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[280px] h-[100px] pointer-events-none z-20">
            <svg width="100%" height="100%">
              <path
                d="M40 0 Q60 50 80 100"
                stroke="url(#rope-gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#rope-shadow)"
              />
              <path
                d="M240 0 Q220 50 200 100"
                stroke="url(#rope-gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#rope-shadow)"
              />
              <defs>
                <linearGradient id="rope-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9e7d58" />
                  <stop offset="100%" stopColor="#3e2b1f" />
                </linearGradient>
                <filter id="rope-shadow">
                  <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodColor="#000" floodOpacity="0.3" />
                </filter>
              </defs>
            </svg>
          </div>

          
          <motion.div
            className="w-[280px] mt-[100px] p-6 rounded-[20px] bg-gradient-to-b from-[#1e2a47] to-[#0b0f1a] border border-cyan-900/50 shadow-lg z-10 backdrop-blur-sm"
            variants={swingAnimation}
            animate="animate"
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-3 tracking-tight">{projects[1].title}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{projects[1].description}</p>
            <div className="flex justify-center gap-4">
              <a href={projects[1].link} target="_blank" rel="noreferrer" className="bg-cyan-700 hover:bg-cyan-600 px-4 py-1.5 rounded-md text-sm font-medium text-white">
                Live
              </a>
              <a href={projects[1].github} target="_blank" rel="noreferrer" className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-md text-sm font-medium text-white">
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* Rightmost Card */}
        <div
          className="relative flex flex-col items-center w-[280px] mr-[100px]"
        >
          <div className="w-3 h-3 bg-gray-400 rounded-full shadow-md z-30 mb-2 border border-gray-600" />

          {/* Realistic Ropes */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[280px] h-[100px] pointer-events-none z-20">
            <svg width="100%" height="100%">
              <path
                d="M40 0 Q60 50 80 100"
                stroke="url(#rope-gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#rope-shadow)"
              />
              <path
                d="M240 0 Q220 50 200 100"
                stroke="url(#rope-gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#rope-shadow)"
              />
              <defs>
                <linearGradient id="rope-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9e7d58" />
                  <stop offset="100%" stopColor="#3e2b1f" />
                </linearGradient>
                <filter id="rope-shadow">
                  <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodColor="#000" floodOpacity="0.3" />
                </filter>
              </defs>
            </svg>
          </div>

          
          <motion.div
            className="w-[280px] mt-[100px] p-6 rounded-[20px] bg-gradient-to-b from-[#1e2a47] to-[#0b0f1a] border border-cyan-900/50 shadow-lg z-10 backdrop-blur-sm"
            variants={swingAnimation}
            animate="animate"
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-3 tracking-tight">{projects[2].title}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{projects[2].description}</p>
            <div className="flex justify-center gap-4">
              <a href={projects[2].link} target="_blank" rel="noreferrer" className="bg-cyan-700 hover:bg-cyan-600 px-4 py-1.5 rounded-md text-sm font-medium text-white">
                Live
              </a>
              <a href={projects[2].github} target="_blank" rel="noreferrer" className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-md text-sm font-medium text-white">
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
