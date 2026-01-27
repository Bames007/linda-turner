// components/Sections/NeedHelp.tsx
"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { bebasNeue, poppins } from "../utils/constants";

const NeedHelp = () => {
  const resources = useMemo(
    () => [
      {
        icon: (
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        title: "Crisis Support",
        description:
          "Immediate help and guidance for those in difficult situations",
        phone: "+234 812 772 8084",
        available: "24/7 Available",
      },
      {
        icon: (
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
        title: "Group Sessions",
        description:
          "Join supportive community sessions for shared healing and growth",
        info: "Weekly Meetings",
        available: "Free to Join",
      },
      {
        icon: (
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
        title: "One-on-One Counseling",
        description: "Personalized sessions with certified hope counselors",
        info: "Private & Confidential",
        available: "By Appointment",
      },
      {
        icon: (
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        ),
        title: "Resources & Materials",
        description:
          "Access free hope-building resources and educational materials",
        info: "Download Available",
        available: "Always Free",
      },
    ],
    [],
  );

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-24 w-48 md:w-72 h-48 md:h-72 bg-blue-100 rounded-full opacity-20 md:opacity-40 blur-2xl md:blur-3xl" />
        <div className="absolute bottom-20 -right-24 w-64 md:w-96 h-64 md:h-96 bg-purple-100 rounded-full opacity-15 md:opacity-30 blur-2xl md:blur-3xl" />
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2" />
            <span
              className={`text-blue-700 text-sm font-medium ${poppins.className}`}
            >
              Support Available
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight ${bebasNeue.className}`}
          >
            Need Help or
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
              Counseling?
            </span>
          </h2>

          <p
            className={`text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            You don't have to face your challenges alone. Linda and her team
            offer various support services to help you find hope and healing.
          </p>
        </motion.div>

        {/* Resources Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg border border-blue-100 p-4 md:p-6 text-center transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:shadow-md transition-all duration-300">
                <div className="text-white">{resource.icon}</div>
              </div>

              {/* Content */}
              <h3
                className={`text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 ${bebasNeue.className}`}
              >
                {resource.title}
              </h3>

              <p
                className={`text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base ${poppins.className}`}
              >
                {resource.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                {resource.phone && (
                  <a
                    href={`tel:${resource.phone}`}
                    className="inline-flex items-center justify-center w-full bg-blue-50 text-blue-700 px-3 md:px-4 py-2 rounded-lg md:rounded-xl font-semibold hover:bg-blue-100 transition-all duration-200 text-sm md:text-base"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {resource.phone}
                  </a>
                )}

                {resource.info && (
                  <div className="text-xs md:text-sm text-gray-500 font-medium">
                    {resource.info}
                  </div>
                )}

                <div
                  className={`text-xs md:text-sm font-semibold ${
                    resource.available === "24/7 Available"
                      ? "text-green-600"
                      : resource.available === "Free to Join"
                        ? "text-blue-600"
                        : "text-purple-600"
                  }`}
                >
                  {resource.available}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Help Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 text-white text-center shadow-lg md:shadow-xl shadow-blue-200"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full mb-4 md:mb-6">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h3
              className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 ${bebasNeue.className}`}
            >
              Immediate Crisis Support
            </h3>
            <p
              className={`text-blue-100 text-base md:text-lg leading-relaxed mb-4 md:mb-6 max-w-2xl mx-auto ${poppins.className}`}
            >
              If you're in crisis or having thoughts of self-harm, please reach
              out immediately. Help is available 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <a
                href="tel:+2348127728084"
                className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg flex items-center justify-center w-full sm:w-auto hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className={poppins.className}>
                  Call Now: +234 812 772 8084
                </span>
              </a>

              <button className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg w-full sm:w-auto hover:bg-white/10 transition-colors">
                <span className={poppins.className}>Send a Message</span>
              </button>
            </div>

            <p
              className={`text-blue-200 text-xs md:text-sm mt-4 md:mt-6 ${poppins.className}`}
            >
              All conversations are confidential and non-judgmental
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NeedHelp;
