import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Section ref for both scroll tracking and view detection
  const sectionRef = useRef(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Parallax triggers
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // View-based animation
  const isInView = useInView(sectionRef, { amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [isInView, controls]);

  const sendEmail = async (e) => {
    e.preventDefault();
    const email = form.current.user_email.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      toast.error("Please enter a valid email", {
        position: "top-center",
        style: {
          background: "#fef2f2",
          color: "#dc2626",
          padding: "8px 16px",
          borderRadius: "8px",
        },
      });
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_ejuouq2",
        "template_rlsg2vc",
        form.current,
        "Qv18AbPqRwDke53Ml"
      );
      toast.success("Message sent!", {
        position: "top-center",
        style: {
          background: "#f0fdf4",
          color: "#16a34a",
          padding: "8px 16px",
          borderRadius: "8px",
        },
      });
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send. Try again.", {
        position: "top-center",
        style: {
          background: "#fef2f2",
          color: "#dc2626",
          padding: "8px 16px",
          borderRadius: "8px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 font-sans"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-800"
        style={{ y }}
      />

      <Toaster position="top-center" />

      {/* Contact Form */}
      <motion.div
        className="relative w-full max-w-md z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Contact <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">
            Drop me a message, let's connect!
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {/* Name */}
          <div className="flex justify-center">
            <div className="w-72">
              <label htmlFor="user_name" className="block text-xs font-medium text-gray-300 mb-1">
                Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-teal-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="Your name"
                  className="w-full pl-10 pr-4 py-2 bg-gray-900/40 border border-gray-700 rounded-lg text-white text-sm font-medium placeholder-gray-500 tracking-wide focus:outline-none focus:ring-2 focus:ring-teal-500/70 focus:border-teal-400 transition duration-200"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex justify-center">
            <div className="w-72">
              <label htmlFor="user_email" className="block text-xs font-medium text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-teal-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2 bg-gray-900/40 border border-gray-700 rounded-lg text-white text-sm font-medium placeholder-gray-500 tracking-wide focus:outline-none focus:ring-2 focus:ring-teal-500/70 focus:border-teal-400 transition duration-200"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex justify-center">
            <div className="w-72">
              <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                Message
              </label>
              <div className="relative">
                <span className="absolute top-2 left-3 text-teal-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-2l3-3h8l3 3v2h-4m-6 0h.01" />
                  </svg>
                </span>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  placeholder="Your message..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-900/40 border border-gray-700 rounded-lg text-white text-sm font-medium placeholder-gray-500 tracking-wide focus:outline-none focus:ring-2 focus:ring-teal-500/70 focus:border-teal-400 transition duration-200 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-72 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
