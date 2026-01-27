// components/Sections/Videos.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { bebasNeue, poppins } from "../utils/constants";

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const videos = useMemo(
    () => [
      {
        id: "video1",
        youtubeId: "dQw4w9WgXcQ",
        title: "The Power of Hope in Difficult Times",
        description:
          "Discover how to find hope and strength when facing life's biggest challenges in this powerful keynote speech.",
        duration: "24:16",
        views: "125K",
        date: "2024",
        category: "Keynote Speech",
      },
      {
        id: "video2",
        youtubeId: "dQw4w9WgXcQ",
        title: "Transforming Pain into Purpose",
        description:
          "Learn the transformative process of turning personal struggles into meaningful purpose and impact.",
        duration: "18:42",
        views: "89K",
        date: "2024",
        category: "Workshop",
      },
      {
        id: "video3",
        youtubeId: "dQw4w9WgXcQ",
        title: "Awakening Your Inner Strength",
        description:
          "Unlock the incredible power within you to overcome obstacles and achieve your dreams.",
        duration: "32:05",
        views: "156K",
        date: "2023",
        category: "Motivational Talk",
      },
      {
        id: "video4",
        youtubeId: "dQw4w9WgXcQ",
        title: "The Resilience Revolution",
        description:
          "Join the movement of building unshakeable resilience in an ever-changing world.",
        duration: "28:34",
        views: "203K",
        date: "2023",
        category: "Keynote Speech",
      },
      {
        id: "video5",
        youtubeId: "dQw4w9WgXcQ",
        title: "Finding Light in Darkness",
        description:
          "Practical strategies for maintaining hope and positivity during life's darkest moments.",
        duration: "21:17",
        views: "167K",
        date: "2024",
        category: "Inspirational Talk",
      },
      {
        id: "video6",
        youtubeId: "dQw4w9WgXcQ",
        title: "The Hope Mindset",
        description:
          "Cultivate a mindset of hope that transforms how you approach challenges and opportunities.",
        duration: "26:48",
        views: "142K",
        date: "2024",
        category: "Training Session",
      },
    ],
    [],
  );

  // Optimized video progress simulation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const openYouTube = useCallback(() => {
    window.open("https://www.youtube.com/c/YourChannelName", "_blank");
  }, []);

  const playVideo = useCallback((index: number) => {
    setActiveVideo(index);
    setIsPlaying(true);
    setVideoProgress(0);
  }, []);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced animation complexity */}
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 shadow-sm mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2" />
            <span
              className={`text-purple-700 text-sm font-medium ${poppins.className}`}
            >
              Featured Content
            </span>
          </motion.div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight ${bebasNeue.className}`}
          >
            Inspirational
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Moments
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Experience Linda's powerful messages of hope and transformation
            through these selected talks and presentations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Featured Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-purple-100 overflow-hidden border border-purple-100">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-pink-900 rounded-t-3xl overflow-hidden">
                {isPlaying ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Simulated Video Player */}
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.01, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-center"
                      >
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl">
                          <svg
                            className="w-8 h-8 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p
                          className={`text-white text-lg ${poppins.className}`}
                        >
                          Now Playing
                        </p>
                      </motion.div>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${videoProgress}%` }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    className="absolute inset-0 cursor-pointer w-full"
                    onClick={() => playVideo(activeVideo)}
                  >
                    {/* Thumbnail */}
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl"
                        >
                          <svg
                            className="w-8 h-8 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                        <p
                          className={`text-white text-lg font-semibold ${poppins.className}`}
                        >
                          Click to Play
                        </p>
                      </div>
                    </div>
                  </motion.button>
                )}

                {/* Video Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium ${poppins.className}`}
                  >
                    {videos[activeVideo].category}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                  {videos[activeVideo].duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 lg:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVideo}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3
                      className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight ${bebasNeue.className}`}
                    >
                      {videos[activeVideo].title}
                    </h3>
                    <p
                      className={`text-gray-600 leading-relaxed mb-6 ${poppins.className}`}
                    >
                      {videos[activeVideo].description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-purple-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                          </svg>
                          <span
                            className={`text-gray-600 text-sm ${poppins.className}`}
                          >
                            {videos[activeVideo].views} views
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-purple-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                          </svg>
                          <span
                            className={`text-gray-600 text-sm ${poppins.className}`}
                          >
                            {videos[activeVideo].date}
                          </span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => playVideo(activeVideo)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center sm:justify-start w-full sm:w-auto"
                      >
                        <svg
                          className="w-5 h-5 text-white mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className={poppins.className}>
                          {isPlaying ? "Playing" : "Play Video"}
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Video Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border-2 ${
                  activeVideo === index
                    ? "border-purple-500 shadow-xl"
                    : "border-transparent hover:border-purple-200"
                }`}
                onClick={() => {
                  setActiveVideo(index);
                  setIsPlaying(false);
                }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                  {/* Play Indicator */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 transition-all duration-200 ${
                      activeVideo === index
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center text-white">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-2">
                        <svg
                          className="w-4 h-4 text-white ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span
                        className={`text-sm font-medium ${poppins.className}`}
                      >
                        Play
                      </span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>

                  {/* Active Indicator */}
                  {activeVideo === index && (
                    <div className="absolute top-3 left-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h4
                    className={`font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-purple-700 transition-colors duration-200 ${poppins.className}`}
                  >
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className={poppins.className}>
                      {video.views} views
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        video.category === "Keynote Speech"
                          ? "bg-purple-100 text-purple-700"
                          : video.category === "Workshop"
                            ? "bg-pink-100 text-pink-700"
                            : "bg-blue-100 text-blue-700"
                      } ${poppins.className}`}
                    >
                      {video.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-purple-200 max-w-4xl mx-auto">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </motion.div>

            <h3
              className={`text-3xl lg:text-4xl font-bold mb-4 ${bebasNeue.className}`}
            >
              Join Our YouTube Community
            </h3>
            <p
              className={`text-purple-100 text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Subscribe to our channel for weekly inspirational content,
              exclusive talks, and transformative messages
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openYouTube}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center mx-auto hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span className={poppins.className}>Visit YouTube Channel</span>
            </motion.button>

            <p className={`text-purple-200 text-sm mt-6 ${poppins.className}`}>
              50K+ subscribers and growing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Videos;
