import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    companyName: "IBM",
    logo: "/logos/ibm.png", 
    companyDescription: "Global leader in AI & Cloud services.",
    roleTitle: "Frontend Web Development Intern",
    roleDescription:
      "Built responsive UIs using React.js and improved internal UX.",
  },
  {
    companyName: "Prodigal AI",
    logo: "/logos/prodigal.png", 
    companyDescription: "Focused on AI-powered solutions for finance.",
    roleTitle: "Framework Team Intern",
    roleDescription:
      "Worked on core AI framework optimizing performance and integration.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0b0f1a] text-white px-6 md:px-16 py-24"
    >

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-cyan-400 mb-16"
      >
        <h2>My Experience</h2>
      </motion.div>

      <div className="flex justify-between items-center gap-10">
        {/* Left-most Card with margin-left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="ml-[150px]"
        >
          <FlipCard experience={experiences[0]} />
        </motion.div>

        {/* Right-most Card with margin-right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mr-[150px]"
        >
          <FlipCard experience={experiences[1]} />
        </motion.div>
      </div>

      <style>
        {`
          .flip-card {
            perspective: 1000px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.8s;
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
          }

          .flip-card-front {
            background: linear-gradient(135deg, #1f2937, #2a3a4f);
          }

          .flip-card-back {
            background: linear-gradient(135deg, #111827, #1f2d3d);
            transform: rotateY(180deg);
          }

          .flipped {
            transform: rotateY(180deg);
          }

          @media (hover: hover) {
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
          }
        `}
      </style>
    </section>
  );
};

const FlipCard = ({ experience }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
  }, []);

  const handleToggle = () => {
    if (isTouchDevice) {
      setFlipped(!flipped);
    }
  };

  return (
    <div
      className="flip-card w-[300px] h-[400px] cursor-pointer hover:scale-105 transition-transform duration-500"
      onClick={handleToggle}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        {/* Front Face */}
        <div className="flip-card-front">
          <img
            src={experience.logo}
            alt={`${experience.companyName} logo`}
            className="w-16 h-16 mb-4 object-contain"
          />
          <h3 className="text-xl font-bold text-cyan-400">
            {experience.companyName}
          </h3>
          <p className="mt-4 text-sm text-gray-300 max-w-[240px]">
            {experience.companyDescription}
          </p>
        </div>

        {/* Back Face */}
        <div className="flip-card-back">
          <h3 className="text-lg font-semibold text-cyan-300">
            {experience.roleTitle}
          </h3>
          <p className="mt-4 text-sm text-gray-200 max-w-[240px]">
            {experience.roleDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
