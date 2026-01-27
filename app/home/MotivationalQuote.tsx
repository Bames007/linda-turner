"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { bebasNeue, poppins } from "../utils/constants";
import { Quote, Share2, Copy, Download, Heart, Sparkles } from "lucide-react";

const MotivationalQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const quotes = useMemo(
    () => [
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
    ],
    [],
  );

  // Optimized auto-rotate with reduced frequency
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const handleCopyQuote = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(quotes[currentQuote].text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }, [currentQuote, quotes]);

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
      {/* Optimized Background Elements - Simplified */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static gradient orbs - no animation */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full opacity-30 blur-xl" />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-blue-100/20 rounded-full opacity-20 blur-xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="inline-flex items-center px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span
              className={`text-purple-700 text-sm font-semibold ${poppins.className}`}
            >
              Words of Hope & Inspiration
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ${bebasNeue.className}`}
          >
            Daily Dose of
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 block mt-1"
            >
              Inspiration
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto ${poppins.className}`}
          >
            Let Linda's powerful words guide you through your day
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Quote Display - Optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Quote Card */}
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg border border-purple-50 overflow-hidden relative">
                {/* Decorative Header */}
                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 p-6 lg:p-8 text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-3 backdrop-blur-sm">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`relative text-white text-lg font-semibold ${poppins.className}`}
                  >
                    {quotes[currentQuote].topic}
                  </h3>
                </div>

                {/* Quote Content */}
                <div className="p-6 lg:p-8 relative">
                  <motion.p
                    key={`quote-text-${currentQuote}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`text-xl lg:text-2xl text-gray-800 text-center leading-relaxed mb-6 font-light ${poppins.className}`}
                  >
                    "{quotes[currentQuote].text}"
                  </motion.p>

                  {/* Author Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-purple-200 shadow-md">
                          <Image
                            src="/images/linda turner image two.jpg"
                            alt="Linda Turner"
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                            priority={currentQuote === 0}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-1.5 rounded-full" />
                      <p
                        className={`text-gray-900 text-base font-bold ${poppins.className}`}
                      >
                        {quotes[currentQuote].author}
                      </p>
                      <p
                        className={`text-purple-600 text-xs ${poppins.className}`}
                      >
                        Inspirational Speaker
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Linda's Portrait Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-md border border-purple-100">
                  <div className="relative w-full h-72 sm:h-56">
                    <Image
                      src="/images/linda turner image three.jpg"
                      alt="Linda Turner - Inspirational Speaker"
                      fill
                      className="object-cover rounded-xl shadow-lg"
                      sizes="(max-width: 1024px) 100vw, 320px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
                  </div>

                  <div className="text-center mt-4">
                    <h4
                      className={`text-xl font-bold text-gray-900 ${bebasNeue.className}`}
                    >
                      Linda Turner
                    </h4>
                    <p
                      className={`text-purple-600 ${poppins.className} text-sm font-semibold mt-1`}
                    >
                      Hope Advocate & Speaker
                    </p>
                    <button className="inline-flex items-center px-3 py-1.5 bg-purple-600 text-white rounded-full mt-3 hover:bg-purple-700 transition-colors text-sm">
                      <Heart className="w-3 h-3 mr-1.5" />
                      <span className={`${poppins.className}`}>
                        Follow Journey
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="flex flex-col items-center mt-8 space-y-4"
          >
            <div className="flex space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-150 ${
                    currentQuote === index
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Share Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-100 shadow-sm w-full max-w-md">
              <p
                className={`text-gray-600 text-center text-sm mb-3 ${poppins.className}`}
              >
                Share this inspiration
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { icon: Copy, label: "Copy", action: handleCopyQuote },
                  { icon: Share2, label: "Share", action: () => {} },
                  { icon: Download, label: "Save", action: () => {} },
                ].map((action, index) => (
                  <button
                    key={action.label}
                    onClick={action.action}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-purple-700 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 text-sm hover:shadow transition-shadow duration-150"
                  >
                    <action.icon className="w-4 h-4" />
                    <span className={poppins.className}>
                      {isCopied && action.label === "Copy"
                        ? "Copied!"
                        : action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hope Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="mt-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-6 lg:p-8 text-white text-center shadow-lg relative overflow-hidden"
          >
            <h3
              className={`text-2xl lg:text-3xl font-bold mb-4 ${bebasNeue.className}`}
            >
              Hope Changes Everything
            </h3>
            <p
              className={`text-purple-100 text-base leading-relaxed mb-6 max-w-2xl mx-auto ${poppins.className}`}
            >
              Remember that hope is not just a feeling—it's a choice. It's the
              decision to believe in better days and to keep moving forward.
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:bg-gray-50 transition-colors">
              <span
                className={`flex items-center space-x-2 ${poppins.className}`}
              >
                <Sparkles className="w-4 h-4" />
                <span>More Inspiration</span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MotivationalQuote;
