// components/Sections/LiveStream.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { bebasNeue, poppins } from "../utils/constants";
import { useState, useEffect, useMemo } from "react";

const LiveStream = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openYouTubeLive = () => {
    window.open("https://www.youtube.com/your-live-stream", "_blank");
  };

  // Memoized particles array to prevent re-renders
  const particles = useMemo(
    () =>
      [...Array(8)].map((_, i) => ({
        id: i,
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      })),
    [],
  );

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simplified Pulse Rings - Only on desktop */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 border-2 border-pink-400/50 rounded-full hidden sm:block"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.05, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 border-2 border-purple-400/50 rounded-full hidden sm:block"
        />

        {/* Reduced number of particles */}
        {isClient &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/30 rounded-full hidden sm:block"
              initial={{
                x: particle.x,
                y: particle.y,
                scale: particle.scale,
              }}
              animate={{
                y: [null, -20, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Live Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-400 mb-6 md:mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full mr-2 md:mr-3"
              />
              <span
                className={`text-red-200 text-xs md:text-sm font-semibold ${poppins.className}`}
              >
                LIVE NOW
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 ${bebasNeue.className}`}
            >
              Join Linda
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 block">
                Live Now
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`text-lg md:text-xl text-purple-100 mb-6 md:mb-8 leading-relaxed ${poppins.className}`}
            >
              Experience real-time inspiration and connect with Linda in this
              special live session about finding hope in challenging times.
            </motion.p>

            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8"
            >
              {[
                { number: "2.4K", label: "Watching Live" },
                { number: "156", label: "Countries" },
                { number: "12K", label: "Messages" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className="text-center lg:text-left"
                >
                  <div
                    className={`text-xl md:text-2xl lg:text-3xl font-bold text-white ${bebasNeue.className}`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-purple-200 text-xs md:text-sm ${poppins.className}`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openYouTubeLive}
                className="group relative bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg overflow-hidden"
              >
                <span
                  className={`relative z-10 flex items-center justify-center ${poppins.className}`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mr-2 md:mr-3"
                  />
                  Join Live Stream
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <span className={`${poppins.className}`}>Get Reminder</span>
              </motion.button>
            </motion.div>

            {/* Upcoming Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20"
            >
              <h4
                className={`text-white font-semibold mb-2 md:mb-3 text-sm md:text-base ${poppins.className}`}
              >
                Next Live Session
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 md:gap-3">
                <div className="text-center sm:text-left">
                  <p
                    className={`text-purple-200 font-medium text-sm md:text-base ${poppins.className}`}
                  >
                    The Hope Mindset Workshop
                  </p>
                  <p
                    className={`text-purple-300 text-xs md:text-sm ${poppins.className}`}
                  >
                    March 25, 2024 • 7:00 PM EST
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium hover:bg-white/30 transition-colors"
                >
                  <span className={poppins.className}>Remind Me</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image with Live Effect */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <div className="relative w-full max-w-sm md:max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl md:rounded-3xl transform rotate-2 blur-lg md:blur-xl" />
                  <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border-4 border-white">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src="/images/linda turner image two.jpg"
                        alt="Linda Turner - Live Now"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Live Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {/* Live Indicator */}
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"
                        />
                        <span
                          className={`text-white font-semibold text-xs md:text-sm ${poppins.className}`}
                        >
                          LIVE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Viewers Avatars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="flex justify-center mt-6 md:mt-8"
              >
                <div className="bg-black/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4">
                  <p
                    className={`text-white text-center mb-2 md:mb-3 text-sm md:text-base ${poppins.className}`}
                  >
                    Join 2,400+ viewers worldwide
                  </p>
                  <div className="flex justify-center space-x-1 md:space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
                        className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"
                      />
                    ))}
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center">
                      <span
                        className={`text-white text-xs font-bold ${poppins.className}`}
                      >
                        +2.3K
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;
