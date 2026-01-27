// components/Sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { bebasNeue, poppins } from "../utils/constants";
import { ArrowRight, Play, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-purple-50/50 to-blue-50/30">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(#8B5CF6_1px,transparent_1px),linear-gradient(90deg,#8B5CF6_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Refined Animated Particles - Only render on client */}
        {isClient &&
          [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-300 rounded-full"
              initial={{
                x: Math.random() * 400,
                y: Math.random() * 800,
                scale: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [null, -15, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

        {/* Enhanced Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full opacity-50 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full opacity-40 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-20">
          {/* Premium Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-purple-100 shadow-lg mb-6 sm:mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"
              />
              <span
                className={`text-purple-700 text-sm font-semibold ${poppins.className}`}
              >
                Now Booking 2024 Speaking Events
              </span>
            </motion.div>

            {/* Premium Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="block"
              >
                IGNITING
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
              >
                HOPE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="block"
              >
                THROUGH WORDS
              </motion.span>
            </motion.h1>

            {/* Refined Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className={`text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl ${poppins.className}`}
            >
              Linda Turner transforms lives through inspirational speaking that
              awakens{" "}
              <span className="text-purple-600 font-semibold bg-purple-50 px-1 rounded">
                hope
              </span>
              , empowers{" "}
              <span className="text-pink-600 font-semibold bg-pink-50 px-1 rounded">
                change
              </span>
              , and creates{" "}
              <span className="text-blue-600 font-semibold bg-blue-50 px-1 rounded">
                lasting impact
              </span>
              .
            </motion.p>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              {[
                { number: "50K+", label: "Lives Transformed" },
                { number: "100+", label: "Global Events" },
                { number: "25+", label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                  className="text-center lg:text-left group"
                >
                  <div
                    className={`text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 ${bebasNeue.className}`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-gray-600 text-xs sm:text-sm ${poppins.className} flex items-center justify-center lg:justify-start`}
                  >
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 flex items-center justify-center"
              >
                <span
                  className={`relative z-10 flex items-center ${poppins.className}`}
                >
                  Book Linda to Speak
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "#8B5CF6",
                }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg bg-white/80 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-600 group-hover:scale-110 transition-transform duration-200" />
                <span className={`${poppins.className}`}>Watch Talks</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Premium Image Section - Fixed for Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 relative mb-8 sm:mb-0 order-1 lg:order-2"
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              {/* Enhanced Floating Image */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] h-auto">
                  {/* Background Decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-[2rem] sm:rounded-[2.5rem] transform rotate-1 sm:rotate-2 scale-105" />

                  {/* Main Image Container */}
                  <div className="absolute inset-0 bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl sm:shadow-2xl overflow-hidden">
                    <Image
                      src="/images/linda turner image one.jpg"
                      alt="Linda Turner - International Speaker & Hope Advocate"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </div>

                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-[2rem] sm:rounded-[2.5rem] blur-lg sm:blur-xl -z-10 scale-105" />
                </div>
              </motion.div>

              {/* Mobile-Optimized Floating Quote Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -10, y: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6, type: "spring" }}
                className="absolute top-2 -left-1 sm:top-4 sm:-left-2 lg:top-6 lg:-left-4 bg-white/95 backdrop-blur-md border border-purple-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] z-30"
              >
                <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 mb-1 sm:mb-2" />
                <p
                  className={`text-gray-700 text-xs leading-tight ${poppins.className}`}
                >
                  Hope is the anchor for the soul
                </p>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1 sm:mt-2" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, x: 10, y: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6, type: "spring" }}
                className="absolute -bottom-2 -right-1 sm:-bottom-4 sm:-right-2 lg:-bottom-6 lg:-right-4 bg-gradient-to-br from-purple-600 to-pink-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] z-30"
              >
                <p
                  className={`text-white text-xs font-medium leading-tight ${poppins.className}`}
                >
                  Your words create your world
                </p>
                <div className="flex space-x-1 mt-1 sm:mt-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        delay: i * 0.2,
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/80 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Animated Decorations - Hidden on smallest screens */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-purple-200/30 rounded-full hidden xs:block"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border border-pink-200/30 rounded-full hidden xs:block"
              />
            </div>

            {/* Background Architectural Elements - Hidden on mobile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] border border-purple-100/10 rounded-full -z-10 hidden sm:block"
            />
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span
              className={`text-xs mb-2 tracking-wider ${poppins.className} hidden sm:block`}
            >
              EXPLORE MORE
            </span>
            <div className="w-4 h-6 sm:w-5 sm:h-8 border border-purple-300 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-0.5 h-1.5 sm:h-2 bg-purple-400 rounded-full mt-1.5 sm:mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
