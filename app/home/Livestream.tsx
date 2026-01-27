// components/Sections/LiveStream.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { bebasNeue, poppins } from "../utils/constants";
import { useState, useEffect } from "react";

const LiveStream = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openYouTubeLive = () => {
    window.open("https://www.youtube.com/your-live-stream", "_blank"); // Replace with actual live stream URL
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pulse Rings */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-pink-400 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.05, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-purple-400 rounded-full"
        />

        {/* Floating Particles - Only render on client */}
        {isClient &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * 1000,
                y: Math.random() * 1000,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Live Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-400 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-red-500 rounded-full mr-3"
              />
              <span
                className={`text-red-200 text-sm font-semibold ${poppins.className}`}
              >
                LIVE NOW
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 ${bebasNeue.className}`}
            >
              Join Linda
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 block">
                Live Now
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className={`text-xl text-purple-100 mb-8 leading-relaxed ${poppins.className}`}
            >
              Experience real-time inspiration and connect with Linda in this
              special live session about finding hope in challenging times.
            </motion.p>

            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {[
                { number: "2.4K", label: "Watching Live" },
                { number: "156", label: "Countries" },
                { number: "12K", label: "Messages" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="text-center lg:text-left"
                >
                  <div
                    className={`text-2xl lg:text-3xl font-bold text-white ${bebasNeue.className}`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-purple-200 text-sm ${poppins.className}`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(239, 68, 68, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openYouTubeLive}
                className="group relative bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden"
              >
                <span
                  className={`relative z-10 flex items-center justify-center ${poppins.className}`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-white rounded-full mr-3"
                  />
                  Join Live Stream
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg backdrop-blur-sm"
              >
                <span className={`${poppins.className}`}>Get Reminder</span>
              </motion.button>
            </motion.div>

            {/* Upcoming Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <h4
                className={`text-white font-semibold mb-3 ${poppins.className}`}
              >
                Next Live Session
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-center sm:text-left">
                  <p
                    className={`text-purple-200 font-medium ${poppins.className}`}
                  >
                    The Hope Mindset Workshop
                  </p>
                  <p className={`text-purple-300 text-sm ${poppins.className}`}>
                    March 25, 2024 • 7:00 PM EST
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium"
                >
                  <span className={poppins.className}>Remind Me</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image with Live Effect */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl transform rotate-3 blur-xl opacity-30" />
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src="/images/linda turner image two.jpg"
                        alt="Linda Turner - Live Now"
                        fill
                        className="object-cover"
                        priority
                      />

                      {/* Live Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Live Indicator */}
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-3 h-3 bg-red-500 rounded-full"
                        />
                        <span
                          className={`text-white font-semibold text-sm ${poppins.className}`}
                        >
                          LIVE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements - Hidden on mobile for better experience */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl shadow-2xl flex items-center justify-center z-30 hidden sm:flex"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center z-30 hidden sm:flex"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </motion.div>

              {/* Animated Rings - Hidden on mobile */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-white/10 rounded-full hidden sm:block"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-white/10 rounded-full hidden sm:block"
              />
            </div>

            {/* Viewers Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex justify-center mt-8"
            >
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
                <p
                  className={`text-white text-center mb-3 ${poppins.className}`}
                >
                  Join 2,400+ viewers worldwide
                </p>
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
                      className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"
                    />
                  ))}
                  <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span
                      className={`text-white text-xs font-bold ${poppins.className}`}
                    >
                      +2.3K
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;
