// components/Sections/Stories.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { bebasNeue, poppins } from "../utils/constants";

const Stories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const stories = [
    {
      id: 1,
      title: "From Despair to Hope",
      excerpt:
        "How Linda's words helped me find light in my darkest moments and rediscover my purpose...",
      content:
        "I was at the lowest point in my life when I attended Linda's talk. Her message about finding hope in adversity resonated deeply. Her words weren't just motivational - they were transformative. Within weeks, I started making positive changes that completely turned my life around. Today, I'm living a life I never thought possible.",
      author: "Sarah Johnson",
      role: "Elementary School Teacher",
      image: "/images/story-1.jpg",
      duration: 4000,
    },
    {
      id: 2,
      title: "Breaking Through Barriers",
      excerpt:
        "Overcoming career obstacles with renewed confidence and clarity...",
      content:
        "As a young professional, I felt stuck and uncertain about my career path. Linda's talk on breaking through mental barriers gave me the courage to pursue my dreams. Her insights on self-belief and taking calculated risks inspired me to start my own business. Six months later, I'm thriving in a career I'm passionate about.",
      author: "Michael Chen",
      role: "Startup Founder",
      image: "/images/story-2.jpg",
      duration: 4000,
    },
    {
      id: 3,
      title: "Healing Through Words",
      excerpt: "Finding emotional healing and strength after personal loss...",
      content:
        "After losing my husband, I felt like I had lost myself too. Linda's compassionate words about grief and renewal touched my soul. She taught me that healing isn't about moving on, but about moving forward with love. Her message gave me the strength to rebuild my life while honoring his memory.",
      author: "Maria Rodriguez",
      role: "Healthcare Administrator",
      image: "/images/story-3.jpg",
      duration: 4000,
    },
    {
      id: 4,
      title: "Corporate Transformation",
      excerpt:
        "How Linda's team workshop revolutionized our workplace culture...",
      content:
        "Our company was facing low morale and high turnover. Linda's corporate workshop didn't just inspire individuals - it transformed our entire organizational culture. Her practical strategies for fostering hope and resilience led to a 40% increase in employee satisfaction and renewed sense of purpose across all departments.",
      author: "David Thompson",
      role: "HR Director, Fortune 500",
      image: "/images/story-4.jpg",
      duration: 4000,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, stories[activeStory].duration);

    return () => clearInterval(interval);
  }, [activeStory, isAutoPlaying, stories.length]);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2" />
            <span
              className={`text-purple-700 text-sm font-medium ${poppins.className}`}
            >
              Real Transformations
            </span>
          </motion.div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight ${bebasNeue.className}`}
          >
            Stories of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Hope & Healing
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Discover how Linda's powerful message has touched hearts and
            transformed lives across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Story Navigation - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6 order-2 xl:order-1"
          >
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                whileHover={{
                  x: 8,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-6 lg:p-7 rounded-2xl cursor-pointer transition-all duration-500 group overflow-hidden ${
                  activeStory === index
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-200 transform scale-105"
                    : "bg-white hover:bg-gray-50 text-gray-900 shadow-lg shadow-gray-100 hover:shadow-xl"
                }`}
                onClick={() => {
                  setActiveStory(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 6000);
                }}
              >
                {/* Background Hover Effect */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeStory === index
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5"
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className={`font-semibold text-lg lg:text-xl leading-tight ${
                        activeStory === index ? "text-white" : "text-gray-900"
                      } ${poppins.className}`}
                    >
                      {story.title}
                    </h3>

                    {/* Active Indicator */}
                    <motion.div
                      animate={{
                        scale: activeStory === index ? [1, 1.2, 1] : 1,
                        opacity: activeStory === index ? 1 : 0.3,
                      }}
                      transition={{
                        duration: 2,
                        repeat: activeStory === index ? Infinity : 0,
                      }}
                      className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ml-4 ${
                        activeStory === index ? "bg-white" : "bg-purple-400"
                      }`}
                    />
                  </div>

                  <p
                    className={`text-sm lg:text-base leading-relaxed ${
                      activeStory === index
                        ? "text-purple-100"
                        : "text-gray-600"
                    } ${poppins.className}`}
                  >
                    {story.excerpt}
                  </p>

                  {/* Progress Bar for Active Story */}
                  {activeStory === index && (
                    <motion.div
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{
                        duration: story.duration / 1000,
                        ease: "linear",
                      }}
                      className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-b-2xl"
                    />
                  )}
                </div>
              </motion.div>
            ))}

            {/* Auto-play Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center pt-4"
            >
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center px-4 py-2 rounded-full border transition-all duration-300 ${
                  isAutoPlaying
                    ? "bg-purple-100 border-purple-300 text-purple-700"
                    : "bg-gray-100 border-gray-300 text-gray-600"
                } ${poppins.className}`}
              >
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"
                  }`}
                />
                <span className="text-sm font-medium">
                  {isAutoPlaying ? "Auto-playing" : "Click to play"}
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Story Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative order-1 xl:order-2 mb-8 xl:mb-0"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-purple-100 overflow-hidden border border-purple-50">
              {/* Decorative Top Bar */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 w-full" />

              <div className="p-6 lg:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStory}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-2 text-8xl text-purple-100 font-serif leading-none">
                      "
                    </div>

                    {/* Story Content */}
                    <div className="relative z-10">
                      <p
                        className={`text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 lg:mb-10 mt-6 ${poppins.className}`}
                      >
                        {stories[activeStory].content}
                      </p>

                      {/* Author Info */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="border-t border-gray-200 pt-6 lg:pt-8"
                      >
                        <p
                          className={`font-semibold text-gray-900 text-lg lg:text-xl mb-1 ${bebasNeue.className}`}
                        >
                          {stories[activeStory].author}
                        </p>
                        <p
                          className={`text-purple-600 font-medium ${poppins.className}`}
                        >
                          {stories[activeStory].role}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-3 pb-6 lg:pb-8">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveStory(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 6000);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStory === index
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg z-20"
            />

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg z-20"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className={`text-gray-600 mb-6 ${poppins.className}`}>
            Ready to create your own transformation story?
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(128, 90, 213, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
          >
            <span className={poppins.className}>Start Your Journey</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;
