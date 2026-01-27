// components/Sections/ContactUs.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { bebasNeue, poppins } from "../utils/constants";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            duration: 20,
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
            duration: 25,
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
              Get In Touch
            </span>
          </motion.div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight ${bebasNeue.className}`}
          >
            Let's Create
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Something Amazing
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Ready to bring hope and transformation to your event? Contact Linda
            to discuss speaking opportunities and create an unforgettable
            experience for your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-gray-900 ${poppins.className}`}
                    >
                      Phone
                    </h3>
                    <p
                      className={`text-purple-600 font-medium ${poppins.className}`}
                    >
                      +234 (812) 772 8084
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-gray-900 ${poppins.className}`}
                    >
                      Email
                    </h3>
                    <p
                      className={`text-purple-600 font-medium ${poppins.className}`}
                    >
                      speaking@lindaturner.com
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-gray-900 ${poppins.className}`}
                    >
                      Based In
                    </h3>
                    <p
                      className={`text-purple-600 font-medium ${poppins.className}`}
                    >
                      Abuja, Nigeria.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white"
            >
              <h3 className={`text-xl font-bold mb-3 ${bebasNeue.className}`}>
                Quick Response
              </h3>
              <p
                className={`text-purple-100 leading-relaxed ${poppins.className}`}
              >
                We typically respond to all inquiries within 24 hours. For
                urgent speaking engagements, please call directly.
              </p>
            </motion.div>

            {/* Speaking Topics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6"
            >
              <h3
                className={`font-bold text-gray-900 mb-4 ${poppins.className}`}
              >
                Popular Speaking Topics
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Hope & Resilience",
                  "Leadership",
                  "Transformation",
                  "Mindset",
                  "Personal Growth",
                  "Team Building",
                ].map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                  >
                    <span className={poppins.className}>{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8"
          >
            <h3
              className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-6 ${bebasNeue.className}`}
            >
              Book Linda to Speak
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium ${poppins.className}`}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${poppins.className}`}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium ${poppins.className}`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${poppins.className}`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium ${poppins.className}`}
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${poppins.className}`}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium ${poppins.className}`}
                  >
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${poppins.className}`}
                  >
                    <option value="">Select event type</option>
                    <option value="conference">Conference</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="workshop">Workshop</option>
                    <option value="virtual">Virtual Event</option>
                    <option value="nonprofit">Non-Profit Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className={`block text-gray-700 mb-2 font-medium ${poppins.className}`}
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${poppins.className}`}
                />
              </div>

              <div>
                <label
                  className={`block text-gray-700 mb-2 font-medium ${poppins.className}`}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none ${poppins.className}`}
                  placeholder="Tell us about your event, audience, and what you hope to achieve..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(128, 90, 213, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg"
              >
                <span className={poppins.className}>Send Booking Request</span>
              </motion.button>

              <p
                className={`text-gray-500 text-sm text-center ${poppins.className}`}
              >
                We'll get back to you within 24 hours to discuss your event
                details.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
