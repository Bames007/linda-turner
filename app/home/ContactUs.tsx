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
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-24 w-48 h-48 bg-purple-100/20 rounded-full opacity-30 blur-xl" />
        <div className="absolute bottom-20 -right-24 w-64 h-64 bg-blue-100/20 rounded-full opacity-20 blur-xl" />
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
              Get In Touch
            </span>
          </motion.div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ${bebasNeue.className}`}
          >
            Let's Create
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Something Amazing
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto ${poppins.className}`}
          >
            Ready to bring hope and transformation to your event? Contact Linda
            to discuss speaking opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
                      className={`font-semibold text-gray-900 text-sm ${poppins.className}`}
                    >
                      Phone
                    </h3>
                    <p
                      className={`text-purple-600 font-medium text-sm ${poppins.className}`}
                    >
                      +234 (812) 772 8084
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
                      className={`font-semibold text-gray-900 text-sm ${poppins.className}`}
                    >
                      Email
                    </h3>
                    <p
                      className={`text-purple-600 font-medium text-sm ${poppins.className}`}
                    >
                      speaking@lindaturner.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
                      className={`font-semibold text-gray-900 text-sm ${poppins.className}`}
                    >
                      Based In
                    </h3>
                    <p
                      className={`text-purple-600 font-medium text-sm ${poppins.className}`}
                    >
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-white">
              <h3 className={`text-lg font-bold mb-2 ${bebasNeue.className}`}>
                Quick Response
              </h3>
              <p
                className={`text-purple-100 leading-relaxed text-sm ${poppins.className}`}
              >
                We respond to all inquiries within 24 hours.
              </p>
            </div>

            {/* Speaking Topics */}
            <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-4">
              <h3
                className={`font-bold text-gray-900 mb-3 text-sm ${poppins.className}`}
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
                  <div
                    key={topic}
                    className="bg-purple-50 text-purple-700 px-2 py-1.5 rounded-lg text-xs font-medium text-center"
                  >
                    <span className={poppins.className}>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl lg:rounded-2xl shadow-md border border-purple-100 p-6"
          >
            <h3
              className={`text-xl lg:text-2xl font-bold text-gray-900 mb-6 ${bebasNeue.className}`}
            >
              Book Linda to Speak
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium text-sm ${poppins.className}`}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent text-sm ${poppins.className}`}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium text-sm ${poppins.className}`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2.5 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent text-sm ${poppins.className}`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium text-sm ${poppins.className}`}
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent text-sm ${poppins.className}`}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium text-sm ${poppins.className}`}
                  >
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent text-sm ${poppins.className}`}
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
                  className={`block text-gray-700 mb-2 font-medium text-sm ${poppins.className}`}
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent text-sm ${poppins.className}`}
                />
              </div>

              <div>
                <label
                  className={`block text-gray-700 mb-2 font-medium text-sm ${poppins.className}`}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-3 py-2.5 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent text-sm resize-none ${poppins.className}`}
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-shadow"
              >
                <span className={poppins.className}>Send Booking Request</span>
              </button>

              <p
                className={`text-gray-500 text-xs text-center ${poppins.className}`}
              >
                We'll get back to you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
