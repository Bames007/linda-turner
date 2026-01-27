// components/Sections/UpcomingEvents.tsx
"use client";
import { motion } from "framer-motion";
import { bebasNeue, poppins } from "../utils/constants";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Global Hope Summit 2024",
      date: "April 15-16, 2024",
      location: "New York City, NY",
      type: "Conference",
      description:
        "Join Linda as she delivers the keynote address at this year's Global Hope Summit, focusing on transformative leadership.",
      status: "Confirmed",
      seats: "Limited",
      image: "/images/event-1.jpg",
    },
    {
      id: 2,
      title: "Women in Leadership Workshop",
      date: "May 8, 2024",
      location: "Virtual Event",
      type: "Workshop",
      description:
        "An interactive workshop designed to empower women leaders with tools for resilience and hope in leadership.",
      status: "Open Registration",
      seats: "Available",
      image: "/images/event-2.jpg",
    },
    {
      id: 3,
      title: "Corporate Resilience Training",
      date: "June 12, 2024",
      location: "Chicago, IL",
      type: "Corporate",
      description:
        "Specialized training for corporate teams on building resilience and maintaining hope during organizational change.",
      status: "Early Bird",
      seats: "Filling Fast",
      image: "/images/event-3.jpg",
    },
    {
      id: 4,
      title: "Hope & Healing Retreat",
      date: "July 20-22, 2024",
      location: "Sedona, AZ",
      type: "Retreat",
      description:
        "A transformative weekend retreat focused on personal healing, hope restoration, and spiritual growth.",
      status: "Waitlist",
      seats: "Full",
      image: "/images/event-4.jpg",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Open Registration":
        return "bg-blue-100 text-blue-700";
      case "Early Bird":
        return "bg-purple-100 text-purple-700";
      case "Waitlist":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getSeatsColor = (seats: string) => {
    switch (seats) {
      case "Limited":
        return "text-red-600";
      case "Available":
        return "text-green-600";
      case "Filling Fast":
        return "text-orange-600";
      case "Full":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
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
          className="absolute top-1/4 -right-24 w-96 h-96 bg-pink-100 rounded-full opacity-20 blur-3xl"
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
          className="absolute bottom-1/4 -left-24 w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-3xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 shadow-sm mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2" />
            <span
              className={`text-purple-700 text-sm font-medium ${poppins.className}`}
            >
              Join Linda Live
            </span>
          </motion.div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight ${bebasNeue.className}`}
          >
            Upcoming
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Events & Speaking
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Don't miss these opportunities to experience Linda's transformative
            message of hope and inspiration in person
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-purple-100 overflow-hidden transition-all duration-500 cursor-pointer"
            >
              <div className="relative">
                {/* Event Image */}
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />
                  <div className="absolute bottom-4 left-6">
                    <span
                      className={`bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium ${poppins.className}`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-6">
                    <span
                      className={`${getStatusColor(
                        event.status
                      )} px-3 py-1 rounded-full text-sm font-medium ${
                        poppins.className
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={`text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 ${bebasNeue.className}`}
                    >
                      {event.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                    >
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  <p
                    className={`text-gray-600 leading-relaxed mb-6 ${poppins.className}`}
                  >
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-purple-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className={poppins.className}>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-purple-500 mr-3"
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
                      <span className={poppins.className}>
                        {event.location}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-purple-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span
                        className={`font-medium ${getSeatsColor(event.seats)} ${
                          poppins.className
                        }`}
                      >
                        {event.seats} Seats
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      event.status === "Waitlist"
                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
                    } ${poppins.className}`}
                  >
                    {event.status === "Waitlist"
                      ? "Join Waitlist"
                      : "Register Now"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-purple-200 max-w-4xl mx-auto">
            <h3
              className={`text-2xl lg:text-3xl font-bold mb-4 ${bebasNeue.className}`}
            >
              Want Linda at Your Event?
            </h3>
            <p
              className={`text-purple-100 text-lg leading-relaxed mb-6 max-w-2xl mx-auto ${poppins.className}`}
            >
              Bring Linda's transformative message of hope and inspiration to
              your organization, conference, or special event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg"
              >
                <span className={poppins.className}>Book Linda to Speak</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg"
              >
                <span className={poppins.className}>View Speaking Topics</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
