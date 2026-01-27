// components/Sections/Podcast.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { bebasNeue, poppins } from "../utils/constants";

const Podcast = () => {
  const [activeEpisode, setActiveEpisode] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Michael Rodriguez",
      comment:
        "This episode changed my perspective on overcoming challenges. Linda's words are truly transformative!",
      time: "2 days ago",
      likes: 24,
    },
    {
      id: 2,
      name: "Sarah Chen",
      comment:
        "I listen to this every morning. The message about hope resonates deeply with my current journey.",
      time: "1 week ago",
      likes: 18,
    },
    {
      id: 3,
      name: "David Thompson",
      comment:
        "The part about turning pain into purpose brought tears to my eyes. Thank you for this wisdom.",
      time: "3 weeks ago",
      likes: 31,
    },
  ]);

  const episodes = [
    {
      id: 1,
      title: "The Hope Revolution",
      description:
        "Exploring how hope can transform individuals and communities in times of uncertainty.",
      duration: "48:22",
      listens: "25.4K",
      date: "March 15, 2024",
      topics: ["Hope", "Transformation", "Community"],
      coverImage: "/images/podcast-1.jpg",
      audioUrl: "#",
    },
    {
      id: 2,
      title: "Breaking Through Barriers",
      description:
        "Practical strategies for overcoming mental and emotional barriers that hold us back from greatness.",
      duration: "52:18",
      listens: "18.7K",
      date: "March 8, 2024",
      topics: ["Resilience", "Mindset", "Growth"],
      coverImage: "/images/podcast-2.jpg",
      audioUrl: "#",
    },
    {
      id: 3,
      title: "The Power of Words",
      description:
        "How the language we use shapes our reality and influences our journey toward hope and healing.",
      duration: "45:36",
      listens: "22.1K",
      date: "March 1, 2024",
      topics: ["Communication", "Mindfulness", "Healing"],
      coverImage: "/images/podcast-3.jpg",
      audioUrl: "#",
    },
    {
      id: 4,
      title: "From Survival to Thriving",
      description:
        "Moving beyond mere survival to create a life filled with purpose, joy, and meaningful impact.",
      duration: "55:41",
      listens: "19.3K",
      date: "February 22, 2024",
      topics: ["Purpose", "Joy", "Impact"],
      coverImage: "/images/podcast-4.jpg",
      audioUrl: "#",
    },
  ];

  const addComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        name: "You",
        comment: newComment,
        time: "Just now",
        likes: 0,
      };
      setComments([newCommentObj, ...comments]);
      setNewComment("");
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 -left-24 w-72 h-72 bg-purple-100 rounded-full opacity-40 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"
        />
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
              Hope Podcast Series
            </span>
          </motion.div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight ${bebasNeue.className}`}
          >
            Voices of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Hope & Healing
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Dive deeper into transformative conversations about hope,
            resilience, and personal growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Podcast Episodes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3
              className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-6 ${bebasNeue.className}`}
            >
              Latest Episodes
            </h3>

            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer border-2 ${
                  activeEpisode === index
                    ? "border-purple-500 shadow-xl"
                    : "border-transparent hover:border-purple-200"
                }`}
                onClick={() => setActiveEpisode(index)}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Episode Cover */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-lg overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                      </div>
                    </div>

                    {/* Episode Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4
                          className={`font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 line-clamp-1 ${poppins.className}`}
                        >
                          {episode.title}
                        </h4>
                        <span
                          className={`text-sm text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-full ${poppins.className}`}
                        >
                          {episode.duration}
                        </span>
                      </div>

                      <p
                        className={`text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 ${poppins.className}`}
                      >
                        {episode.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span
                            className={`text-sm text-gray-500 ${poppins.className}`}
                          >
                            {episode.listens} listens
                          </span>
                          <span
                            className={`text-sm text-gray-500 ${poppins.className}`}
                          >
                            {episode.date}
                          </span>
                        </div>

                        {/* Topics */}
                        <div className="flex space-x-1">
                          {episode.topics.slice(0, 2).map((topic, i) => (
                            <span
                              key={i}
                              className={`text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full ${poppins.className}`}
                            >
                              {topic}
                            </span>
                          ))}
                          {episode.topics.length > 2 && (
                            <span
                              className={`text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full ${poppins.className}`}
                            >
                              +{episode.topics.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeEpisode === index && (
                  <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 w-full" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Episode Details & Comments */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Current Episode Player */}
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 lg:p-8 text-white">
                <h3
                  className={`text-2xl lg:text-3xl font-bold mb-2 ${bebasNeue.className}`}
                >
                  {episodes[activeEpisode].title}
                </h3>
                <p
                  className={`text-purple-100 leading-relaxed ${poppins.className}`}
                >
                  {episodes[activeEpisode].description}
                </p>
              </div>

              <div className="p-6 lg:p-8">
                {/* Audio Player */}
                <div className="bg-gray-100 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.button>
                      <div>
                        <p
                          className={`text-gray-600 text-sm ${poppins.className}`}
                        >
                          Now Playing
                        </p>
                        <p
                          className={`font-semibold text-gray-900 ${poppins.className}`}
                        >
                          {episodes[activeEpisode].title}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-purple-600 font-semibold ${poppins.className}`}
                    >
                      {episodes[activeEpisode].duration}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "35%" }}
                      transition={{ duration: 1 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    />
                  </div>

                  <div className="flex justify-between text-sm text-gray-500">
                    <span className={poppins.className}>12:45</span>
                    <span className={poppins.className}>
                      {episodes[activeEpisode].duration}
                    </span>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h4
                    className={`font-semibold text-gray-900 mb-3 ${poppins.className}`}
                  >
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {episodes[activeEpisode].topics.map((topic, index) => (
                      <span
                        key={index}
                        className={`bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-sm font-medium ${poppins.className}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div
                      className={`text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
                    >
                      {episodes[activeEpisode].listens}
                    </div>
                    <div
                      className={`text-gray-600 text-sm ${poppins.className}`}
                    >
                      Listens
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
                    >
                      {comments.length}
                    </div>
                    <div
                      className={`text-gray-600 text-sm ${poppins.className}`}
                    >
                      Comments
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
                    >
                      4.9★
                    </div>
                    <div
                      className={`text-gray-600 text-sm ${poppins.className}`}
                    >
                      Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">
              <div className="p-6 lg:p-8">
                <h4
                  className={`text-xl font-bold text-gray-900 mb-6 ${bebasNeue.className}`}
                >
                  Listener Comments
                </h4>

                {/* Add Comment */}
                <div className="mb-6">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts about this episode..."
                    className={`w-full h-24 p-4 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${poppins.className}`}
                  />
                  <div className="flex justify-end mt-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={addComment}
                      disabled={!newComment.trim()}
                      className={`px-6 py-3 rounded-xl font-semibold ${
                        newComment.trim()
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      } ${poppins.className}`}
                    >
                      Post Comment
                    </motion.button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  <AnimatePresence>
                    {comments.map((comment, index) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 rounded-2xl p-4"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p
                              className={`font-semibold text-gray-900 ${poppins.className}`}
                            >
                              {comment.name}
                            </p>
                            <p
                              className={`text-gray-500 text-sm ${poppins.className}`}
                            >
                              {comment.time}
                            </p>
                          </div>
                          <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span className={`text-sm ${poppins.className}`}>
                              {comment.likes}
                            </span>
                          </button>
                        </div>
                        <p
                          className={`text-gray-700 leading-relaxed ${poppins.className}`}
                        >
                          {comment.comment}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
