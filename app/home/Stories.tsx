// components/Sections/Stories.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { bebasNeue, poppins } from "../utils/constants";

const Stories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const stories = useMemo(
    () => [
      {
        id: 1,
        title: "From Despair to Hope",
        excerpt:
          "How Linda's words helped me find light in my darkest moments and rediscover my purpose...",
        content:
          "I was at the lowest point in my life when I attended Linda's talk. Her message about finding hope in adversity resonated deeply. Her words weren't just motivational - they were transformative. Within weeks, I started making positive changes that completely turned my life around. Today, I'm living a life I never thought possible.",
        author: "Sarah Johnson",
        role: "Elementary School Teacher",
        duration: 5000,
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
        duration: 5000,
      },
      {
        id: 3,
        title: "Healing Through Words",
        excerpt:
          "Finding emotional healing and strength after personal loss...",
        content:
          "After losing my husband, I felt like I had lost myself too. Linda's compassionate words about grief and renewal touched my soul. She taught me that healing isn't about moving on, but about moving forward with love. Her message gave me the strength to rebuild my life while honoring his memory.",
        author: "Maria Rodriguez",
        role: "Healthcare Administrator",
        duration: 5000,
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
        duration: 5000,
      },
    ],
    [],
  );

  // Optimized auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, stories[activeStory].duration);

    return () => clearInterval(interval);
  }, [activeStory, isAutoPlaying, stories]);

  const handleStorySelect = useCallback((index: number) => {
    setActiveStory(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-48 md:w-72 h-48 md:h-72 bg-purple-100 rounded-full blur-2xl md:blur-3xl opacity-20 md:opacity-40" />
        <div className="absolute bottom-1/4 right-10 w-64 md:w-96 h-64 md:h-96 bg-pink-100 rounded-full blur-2xl md:blur-3xl opacity-15 md:opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2" />
            <span
              className={`text-purple-700 text-sm font-medium ${poppins.className}`}
            >
              Real Transformations
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight ${bebasNeue.className}`}
          >
            Stories of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Hope & Healing
            </span>
          </h2>

          <p
            className={`text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Discover how Linda's powerful message has touched hearts and
            transformed lives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Story Navigation - Optimized */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6 order-2 xl:order-1">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStory === index
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg md:shadow-xl shadow-purple-200"
                    : "bg-white hover:bg-gray-50 text-gray-900 shadow-sm md:shadow-lg shadow-gray-100"
                }`}
                onClick={() => handleStorySelect(index)}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <h3
                      className={`font-semibold text-base md:text-lg lg:text-xl leading-tight ${activeStory === index ? "text-white" : "text-gray-900"} ${poppins.className}`}
                    >
                      {story.title}
                    </h3>

                    {/* Active Indicator */}
                    <div
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full flex-shrink-0 mt-1 ml-2 md:ml-4 ${
                        activeStory === index ? "bg-white" : "bg-purple-300"
                      } ${activeStory === index ? "animate-pulse" : ""}`}
                    />
                  </div>

                  <p
                    className={`text-sm md:text-base leading-relaxed ${
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
                      className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-b-xl md:rounded-b-2xl"
                    />
                  )}
                </div>
              </motion.div>
            ))}

            {/* Auto-play Toggle - Mobile Optimized */}
            <div className="flex items-center justify-center pt-2 md:pt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full border transition-all duration-200 ${
                  isAutoPlaying
                    ? "bg-purple-100 border-purple-300 text-purple-700"
                    : "bg-gray-100 border-gray-300 text-gray-600"
                } ${poppins.className}`}
              >
                <div
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full mr-2 ${
                    isAutoPlaying ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
                <span className="text-xs md:text-sm font-medium">
                  {isAutoPlaying ? "Auto-playing" : "Click to play"}
                </span>
              </button>
            </div>
          </div>

          {/* Story Content - Optimized */}
          <div className="relative order-1 xl:order-2 mb-6 md:mb-8 xl:mb-0">
            <div className="relative bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl shadow-purple-100 overflow-hidden border border-purple-50">
              {/* Decorative Top Bar */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1 md:h-2 w-full" />

              <div className="p-4 md:p-6 lg:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    {/* Quote Icon - Hidden on mobile */}
                    <div className="hidden md:block absolute -top-4 -left-2 text-8xl text-purple-100 font-serif leading-none">
                      "
                    </div>

                    {/* Story Content */}
                    <div className="relative z-10">
                      <p
                        className={`text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 lg:mb-10 mt-0 md:mt-6 ${poppins.className}`}
                      >
                        {stories[activeStory].content}
                      </p>

                      {/* Author Info */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="border-t border-gray-200 pt-4 md:pt-6 lg:pt-8"
                      >
                        <p
                          className={`font-semibold text-gray-900 text-lg md:text-xl mb-1 ${bebasNeue.className}`}
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

              {/* Navigation Dots - Mobile Optimized */}
              <div className="flex justify-center space-x-2 md:space-x-3 pb-4 md:pb-6 lg:pb-8">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStorySelect(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                      activeStory === index
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <p className={`text-gray-600 mb-6 ${poppins.className}`}>
            Ready to create your own transformation story?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <span className={poppins.className}>Start Your Journey</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;
