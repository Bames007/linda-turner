"use client";
import { motion } from "framer-motion";
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
    <section className="relative py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-24 w-48 h-48 bg-purple-100/30 rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-20 -right-24 w-64 h-64 bg-blue-100/30 rounded-full opacity-15 blur-xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 mb-4"
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-1.5" />
            <span
              className={`text-purple-700 text-xs font-medium ${poppins.className}`}
            >
              Hope Podcast Series
            </span>
          </motion.div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ${bebasNeue.className}`}
          >
            Voices of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Hope & Healing
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto ${poppins.className}`}
          >
            Transformative conversations about hope, resilience, and personal
            growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Podcast Episodes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3
              className={`text-xl lg:text-2xl font-bold text-gray-900 mb-4 ${bebasNeue.className}`}
            >
              Latest Episodes
            </h3>

            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                className={`group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer border ${
                  activeEpisode === index
                    ? "border-purple-500 shadow-lg"
                    : "border-transparent hover:border-purple-200"
                }`}
                onClick={() => setActiveEpisode(index)}
              >
                <div className="p-4">
                  <div className="flex items-start space-x-3">
                    {/* Episode Cover */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg shadow-md overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Episode Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1.5">
                        <h4
                          className={`font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-200 line-clamp-1 text-sm sm:text-base ${poppins.className}`}
                        >
                          {episode.title}
                        </h4>
                        <span
                          className={`text-xs text-purple-600 font-medium bg-purple-100 px-1.5 py-0.5 rounded-full flex-shrink-0 ml-2 ${poppins.className}`}
                        >
                          {episode.duration}
                        </span>
                      </div>

                      <p
                        className={`text-gray-600 text-xs leading-relaxed mb-2 line-clamp-2 ${poppins.className}`}
                      >
                        {episode.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-xs text-gray-500 ${poppins.className}`}
                          >
                            {episode.listens}
                          </span>
                          <span
                            className={`text-xs text-gray-500 ${poppins.className}`}
                          >
                            {episode.date}
                          </span>
                        </div>

                        {/* Topics */}
                        <div className="flex space-x-1">
                          {episode.topics.slice(0, 1).map((topic, i) => (
                            <span
                              key={i}
                              className={`text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full ${poppins.className}`}
                            >
                              {topic}
                            </span>
                          ))}
                          {episode.topics.length > 1 && (
                            <span
                              className={`text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full ${poppins.className}`}
                            >
                              +{episode.topics.length - 1}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Episode Details & Comments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Current Episode Player */}
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-md border border-purple-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 lg:p-6 text-white">
                <h3
                  className={`text-xl lg:text-2xl font-bold mb-1 ${bebasNeue.className}`}
                >
                  {episodes[activeEpisode].title}
                </h3>
                <p
                  className={`text-purple-100 leading-relaxed text-sm ${poppins.className}`}
                >
                  {episodes[activeEpisode].description}
                </p>
              </div>

              <div className="p-4 lg:p-6">
                {/* Audio Player */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <button className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                        <svg
                          className="w-5 h-5 text-white ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <div>
                        <p
                          className={`text-gray-600 text-xs ${poppins.className}`}
                        >
                          Now Playing
                        </p>
                        <p
                          className={`font-semibold text-gray-900 text-sm ${poppins.className}`}
                        >
                          {episodes[activeEpisode].title}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-purple-600 font-semibold text-sm ${poppins.className}`}
                    >
                      {episodes[activeEpisode].duration}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-300 rounded-full h-1.5 mb-1.5">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full w-1/3" />
                  </div>

                  <div className="flex justify-between text-xs text-gray-500">
                    <span className={poppins.className}>12:45</span>
                    <span className={poppins.className}>
                      {episodes[activeEpisode].duration}
                    </span>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-4">
                  <h4
                    className={`font-semibold text-gray-900 mb-2 text-sm ${poppins.className}`}
                  >
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {episodes[activeEpisode].topics.map((topic, index) => (
                      <span
                        key={index}
                        className={`bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium ${poppins.className}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <div
                      className={`text-lg font-bold text-gray-900 ${bebasNeue.className}`}
                    >
                      {episodes[activeEpisode].listens}
                    </div>
                    <div
                      className={`text-gray-600 text-xs ${poppins.className}`}
                    >
                      Listens
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-lg font-bold text-gray-900 ${bebasNeue.className}`}
                    >
                      {comments.length}
                    </div>
                    <div
                      className={`text-gray-600 text-xs ${poppins.className}`}
                    >
                      Comments
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-lg font-bold text-gray-900 ${bebasNeue.className}`}
                    >
                      4.9★
                    </div>
                    <div
                      className={`text-gray-600 text-xs ${poppins.className}`}
                    >
                      Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-md border border-purple-100 overflow-hidden">
              <div className="p-4 lg:p-6">
                <h4
                  className={`text-lg font-bold text-gray-900 mb-4 ${bebasNeue.className}`}
                >
                  Listener Comments
                </h4>

                {/* Add Comment */}
                <div className="mb-4">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts about this episode..."
                    className={`w-full h-20 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent text-sm ${poppins.className}`}
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={addComment}
                      disabled={!newComment.trim()}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                        newComment.trim()
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      } ${poppins.className}`}
                    >
                      Post Comment
                    </button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 rounded-xl p-3">
                      <div className="flex justify-between items-start mb-1.5">
                        <div>
                          <p
                            className={`font-semibold text-gray-900 text-sm ${poppins.className}`}
                          >
                            {comment.name}
                          </p>
                          <p
                            className={`text-gray-500 text-xs ${poppins.className}`}
                          >
                            {comment.time}
                          </p>
                        </div>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span className={`text-xs ${poppins.className}`}>
                            {comment.likes}
                          </span>
                        </button>
                      </div>
                      <p
                        className={`text-gray-700 leading-relaxed text-sm ${poppins.className}`}
                      >
                        {comment.comment}
                      </p>
                    </div>
                  ))}
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
