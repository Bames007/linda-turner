// components/Sections/MotivationalQuote.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { bebasNeue, poppins } from "../utils/constants";
import { Quote, Share2, Copy, Download, Heart, Sparkles } from "lucide-react";

const MotivationalQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const quotes = [
    {
      text: "Hope is the anchor that keeps us steady in stormy seas and the compass that guides us to brighter shores.",
      author: "Linda Turner",
      topic: "Hope & Resilience",
    },
    {
      text: "Your words create your world. Speak life, speak hope, speak possibilities into existence.",
      author: "Linda Turner",
      topic: "Power of Words",
    },
    {
      text: "In the soil of adversity, hope plants the seeds of transformation and growth.",
      author: "Linda Turner",
      topic: "Growth & Transformation",
    },
    {
      text: "Every ending is merely a new beginning in disguise. Hope helps us see the opportunity in every ending.",
      author: "Linda Turner",
      topic: "New Beginnings",
    },
  ];

  // Auto-rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const handleCopyQuote = async () => {
    try {
      await navigator.clipboard.writeText(quotes[currentQuote].text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-40 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"
        />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-400 rounded-full" />
          <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-pink-400 rotate-45" />
          <div className="absolute top-40 right-40 w-16 h-16 border-2 border-blue-400 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-100 shadow-lg mb-8"
          >
            <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
            <span
              className={`text-purple-700 text-base font-semibold ${poppins.className}`}
            >
              Words of Hope & Inspiration
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight ${bebasNeue.className}`}
          >
            Daily Dose of
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 block mt-2"
            >
              Inspiration
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className={`text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Let Linda's powerful words guide you through your day and inspire
            meaningful transformation
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Enhanced Main Quote Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Quote Card */}
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-purple-100/50 border border-purple-50 overflow-hidden relative">
                {/* Enhanced Decorative Header */}
                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10" />
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm"
                  >
                    <Quote className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`relative text-white text-xl font-semibold ${poppins.className}`}
                  >
                    {quotes[currentQuote].topic}
                  </motion.h3>
                </div>

                {/* Quote Content */}
                <div className="p-8 lg:p-12 relative">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className={`text-2xl lg:text-3xl text-gray-800 text-center leading-relaxed mb-8 font-light ${poppins.className}`}
                  >
                    "{quotes[currentQuote].text}"
                  </motion.p>

                  {/* Author Section with Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex items-center justify-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-200 shadow-lg"
                        >
                          <Image
                            src="/images/linda turner image two.jpg"
                            alt="Linda Turner"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-2 rounded-full" />
                      <p
                        className={`text-gray-900 text-lg font-bold ${poppins.className}`}
                      >
                        {quotes[currentQuote].author}
                      </p>
                      <p
                        className={`text-purple-600 text-sm ${poppins.className}`}
                      >
                        Inspirational Speaker
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg z-20 flex items-center justify-center"
                >
                  <Heart className="w-4 h-4 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl shadow-lg z-20 flex items-center justify-center"
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Linda's Portrait Section */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl shadow-purple-100 border border-purple-200">
                    <div className="relative w-64 h-80 mx-auto">
                      <Image
                        src="/images/linda turner image three.jpg"
                        alt="Linda Turner - Inspirational Speaker"
                        fill
                        className="object-cover rounded-2xl shadow-2xl"
                        sizes="(max-width: 1024px) 256px, 320px"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className="text-center mt-6"
                    >
                      <h4
                        className={`text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
                      >
                        Linda Turner
                      </h4>
                      <p
                        className={`text-purple-600 ${poppins.className} font-semibold mt-1`}
                      >
                        Hope Advocate & Speaker
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full mt-4 cursor-pointer"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        <span className={`text-sm ${poppins.className}`}>
                          Follow Linda's Journey
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Background Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 border-2 border-purple-200 rounded-full z-0"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-pink-200 rounded-full z-0"
                />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Quote Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center mt-12 space-y-6"
          >
            <div className="flex space-x-3">
              {quotes.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentQuote === index
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Enhanced Share Section */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-100 shadow-lg">
              <p
                className={`text-gray-600 text-center mb-4 ${poppins.className}`}
              >
                Share this inspiration with someone who needs hope today
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: Copy, label: "Copy Text", action: handleCopyQuote },
                  { icon: Share2, label: "Share", action: () => {} },
                  { icon: Download, label: "Save", action: () => {} },
                ].map((action, index) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.action}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-purple-700 px-6 py-3 rounded-xl font-semibold flex items-center space-x-3 shadow-md hover:shadow-lg transition-all duration-300 min-w-[140px] justify-center"
                  >
                    <action.icon className="w-5 h-5" />
                    <span className={poppins.className}>
                      {isCopied && action.label === "Copy Text"
                        ? "Copied!"
                        : action.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Hope Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl shadow-purple-200/50 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-white rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className={`text-3xl lg:text-4xl font-bold mb-6 relative z-10 ${bebasNeue.className}`}
            >
              Hope Changes Everything
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className={`text-purple-100 text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto relative z-10 ${poppins.className}`}
            >
              Remember that hope is not just a feeling—it's a choice. It's the
              decision to believe in better days, to trust in your strength, and
              to keep moving forward even when the path isn't clear.
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl relative z-10"
            >
              <span
                className={`flex items-center space-x-2 ${poppins.className}`}
              >
                <Sparkles className="w-5 h-5" />
                <span>Discover More Inspiration</span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MotivationalQuote;
