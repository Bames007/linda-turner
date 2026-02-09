// components/Sections/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { poppins } from "../utils/constants";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  ChevronRight,
  Heart,
  Users,
  Handshake,
  Video,
  AlertCircle,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  DollarSign,
  ChevronDown,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const primaryColor = "#691C33";
  const secondaryColor = "#FFE6EE";
  const accentColor = "#8A2E4D";

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const contactTypes = [
    { id: "general", label: "General", icon: MessageSquare },
    { id: "donation", label: "Donation", icon: Heart },
    { id: "volunteer", label: "Volunteer", icon: Users },
    { id: "partnership", label: "Partnership", icon: Handshake },
    { id: "media", label: "Media", icon: Video },
    { id: "emergency", label: "Emergency", icon: AlertCircle },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { label: "General", value: "+234 901 234 5678" },
        { label: "Donations", value: "+234 902 345 6789" },
        { label: "Emergency", value: "+234 903 456 7890" },
      ],
      action: "call",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        { label: "General", value: "info@communityhope.org" },
        { label: "Donations", value: "donations@communityhope.org" },
      ],
      action: "email",
    },
    {
      icon: MapPin,
      title: "Our Locations",
      details: [
        {
          label: "Head Office",
          value: "123 Community Street, Victoria Island, Lagos",
        },
        {
          label: "Operations Center",
          value: "45 Hope Avenue, Surulere, Lagos",
        },
      ],
      action: "map",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        { label: "Mon - Fri", value: "8:00 AM - 6:00 PM" },
        { label: "Saturday", value: "9:00 AM - 4:00 PM" },
      ],
      action: "hours",
    },
  ];

  const globalReach = [
    {
      country: "Nigeria",
      cities: ["Lagos", "Abuja", "Port Harcourt", "Kano"],
      donors: "5,000+",
    },
    {
      country: "Ghana",
      cities: ["Accra", "Kumasi", "Tamale"],
      donors: "1,200+",
    },
    {
      country: "Kenya",
      cities: ["Nairobi", "Mombasa", "Kisumu"],
      donors: "800+",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        type: "general",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeSelect = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      type,
    }));
  };

  const faqs = [
    {
      question: "How can I donate to support your initiatives?",
      answer:
        "You can donate through our website, bank transfer, or by visiting any of our offices. We accept one-time and recurring donations.",
      icon: DollarSign,
    },
    {
      question: "What areas in Nigeria do you operate in?",
      answer:
        "We currently operate in Lagos, Abuja, Port Harcourt, and Kano, with plans to expand to other states.",
      icon: MapPin,
    },
    {
      question: "How can I volunteer with your organization?",
      answer:
        "Visit our volunteer page to see current opportunities and fill out the volunteer application form.",
      icon: Users,
    },
  ];

  return (
    <section className="relative py-8 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${primaryColor} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12 lg:mb-16 max-w-4xl mx-auto"
        >
          <div
            className="inline-flex items-center px-4 py-2 rounded-full mb-4 md:mb-6"
            style={{ backgroundColor: primaryColor, color: "white" }}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Get In Touch
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight ${poppins.className}`}
            style={{ color: primaryColor }}
          >
            Contact
            <span className="block" style={{ color: accentColor }}>
              Our Team
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-700 mx-auto leading-relaxed px-2 ${poppins.className}`}
          >
            We&apos;re here to help. Whether you want to volunteer, donate, or
            partner with us, our team is ready to support your journey in making
            a difference.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Global Reach Section - Simplified for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 lg:mb-16"
          >
            <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8">
              <div className="text-center mb-6 md:mb-8">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-2xl mb-3 md:mb-4"
                  style={{ backgroundColor: secondaryColor }}
                >
                  <Globe
                    className="w-6 h-6 md:w-8 md:h-8"
                    style={{ color: primaryColor }}
                  />
                </div>
                <h3
                  className={`text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 ${poppins.className}`}
                  style={{ color: primaryColor }}
                >
                  Our Global Reach
                </h3>
                <p
                  className={`text-sm md:text-base text-gray-700 max-w-3xl mx-auto ${poppins.className}`}
                >
                  Supported by compassionate donors from around the world
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {globalReach.map((country, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg md:rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4
                        className={`text-lg md:text-xl font-bold ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        {country.country}
                      </h4>
                      <div className="text-right">
                        <div
                          className={`text-base md:text-lg font-bold ${poppins.className}`}
                          style={{ color: accentColor }}
                        >
                          {country.donors}
                        </div>
                        <div
                          className={`text-xs ${poppins.className}`}
                          style={{ color: primaryColor }}
                        >
                          Supporters
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p
                        className={`text-xs md:text-sm font-medium ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        Active Cities:
                      </p>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {country.cities.map((city, cityIndex) => (
                          <span
                            key={cityIndex}
                            className="px-2 py-1 rounded-full text-xs"
                            style={{
                              backgroundColor: secondaryColor,
                              color: primaryColor,
                            }}
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats - Simplified */}
              <div className="mt-6 md:mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="text-center">
                    <div
                      className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      50+
                    </div>
                    <p
                      className={`text-xs md:text-sm ${poppins.className}`}
                      style={{ color: accentColor }}
                    >
                      Countries
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      10K+
                    </div>
                    <p
                      className={`text-xs md:text-sm ${poppins.className}`}
                      style={{ color: accentColor }}
                    >
                      Supporters
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      100+
                    </div>
                    <p
                      className={`text-xs md:text-sm ${poppins.className}`}
                      style={{ color: accentColor }}
                    >
                      Cities
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      24/7
                    </div>
                    <p
                      className={`text-xs md:text-sm ${poppins.className}`}
                      style={{ color: accentColor }}
                    >
                      Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8"
            >
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 ${poppins.className}`}
                style={{ color: primaryColor }}
              >
                Send us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 md:p-6 text-center rounded-lg md:rounded-xl"
                  style={{ backgroundColor: secondaryColor }}
                >
                  <CheckCircle
                    className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6"
                    style={{ color: accentColor }}
                  />
                  <h4
                    className={`text-lg md:text-2xl font-bold mb-2 md:mb-4 ${poppins.className}`}
                    style={{ color: primaryColor }}
                  >
                    Message Sent!
                  </h4>
                  <p
                    className={`text-sm md:text-base text-gray-700 ${poppins.className}`}
                  >
                    Thank you for reaching out. Our team will contact you within
                    24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  {/* Inquiry Type */}
                  <div>
                    <label
                      className={`block mb-2 md:mb-3 text-sm font-medium ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      What can we help you with?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                      {contactTypes.map((type) => (
                        <button
                          type="button"
                          key={type.id}
                          onClick={() => handleTypeSelect(type.id)}
                          className={`p-2 md:p-3 rounded-lg md:rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center ${
                            formData.type === type.id
                              ? "border-[#691C33] bg-[#FFE6EE]"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <type.icon
                            className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2"
                            style={{ color: primaryColor }}
                          />
                          <span
                            className={`text-xs font-medium text-center ${poppins.className}`}
                          >
                            {type.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label
                        className={`block mb-1 md:mb-2 text-xs md:text-sm font-medium ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#691C33] focus:border-transparent text-sm md:text-base"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className={`block mb-1 md:mb-2 text-xs md:text-sm font-medium ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#691C33] focus:border-transparent text-sm md:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label
                        className={`block mb-1 md:mb-2 text-xs md:text-sm font-medium ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#691C33] focus:border-transparent text-sm md:text-base"
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className={`block mb-1 md:mb-2 text-xs md:text-sm font-medium ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#691C33] focus:border-transparent text-sm md:text-base"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block mb-1 md:mb-2 text-xs md:text-sm font-medium ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#691C33] focus:border-transparent resize-none text-sm md:text-base"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ backgroundColor: primaryColor, color: "white" }}
                  >
                    {isSubmitting ? (
                      <span
                        className={`flex items-center justify-center gap-2 ${poppins.className}`}
                      >
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span
                        className={`flex items-center justify-center gap-2 ${poppins.className}`}
                      >
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        Send Message
                      </span>
                    )}
                  </motion.button>

                  <p
                    className={`text-xs text-gray-500 text-center ${poppins.className}`}
                  >
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg md:rounded-xl shadow-md p-4 md:p-5 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div
                        className="p-2 md:p-3 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        <info.icon
                          className="w-4 h-4 md:w-6 md:h-6"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-base md:text-lg font-bold mb-2 md:mb-3 ${poppins.className}`}
                          style={{ color: primaryColor }}
                        >
                          {info.title}
                        </h4>
                        <div className="space-y-1 md:space-y-2">
                          {info.details.map((detail, idx) => (
                            <div key={idx} className="break-words">
                              {detail.label && (
                                <p
                                  className={`text-xs md:text-sm font-medium ${poppins.className}`}
                                  style={{ color: accentColor }}
                                >
                                  {detail.label}
                                </p>
                              )}
                              <p
                                className={`text-gray-700 text-xs md:text-sm ${poppins.className}`}
                              >
                                {detail.value}
                              </p>
                            </div>
                          ))}
                        </div>
                        {info.action === "call" && (
                          <a
                            href={`tel:${info.details[0].value}`}
                            className="inline-flex items-center text-xs md:text-sm font-medium mt-2"
                            style={{ color: primaryColor }}
                          >
                            Call Now{" "}
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                          </a>
                        )}
                        {info.action === "email" && (
                          <a
                            href={`mailto:${info.details[0].value}`}
                            className="inline-flex items-center text-xs md:text-sm font-medium mt-2"
                            style={{ color: primaryColor }}
                          >
                            Email Us{" "}
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4
                        className={`text-lg md:text-xl font-bold mb-1 md:mb-2 text-white ${poppins.className}`}
                      >
                        Need Immediate Help?
                      </h4>
                      <p
                        className={`text-white/90 text-xs md:text-sm ${poppins.className}`}
                      >
                        For urgent matters requiring immediate attention
                      </p>
                    </div>
                    <div className="bg-white/20 p-2 md:p-3 rounded-lg md:rounded-xl">
                      <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4">
                    <a
                      href="tel:+2349034567890"
                      className="inline-flex items-center justify-center w-full py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base"
                      style={{ backgroundColor: "white", color: primaryColor }}
                    >
                      <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Call Emergency Line
                    </a>
                    <p
                      className={`text-white/80 text-xs text-center mt-2 ${poppins.className}`}
                    >
                      Available 24/7
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6"
              >
                <h4
                  className={`text-lg md:text-xl font-bold mb-3 md:mb-4 ${poppins.className}`}
                  style={{ color: primaryColor }}
                >
                  Connect With Us
                </h4>
                <p
                  className={`text-gray-600 mb-4 text-sm ${poppins.className}`}
                >
                  Follow our journey on social media for updates and stories.
                </p>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {[
                    {
                      name: "Facebook",
                      icon: Facebook,
                      color: "#1877F2",
                      link: "#",
                    },
                    {
                      name: "Instagram",
                      icon: Instagram,
                      color: "#E4405F",
                      link: "#",
                    },
                    {
                      name: "Twitter",
                      icon: Twitter,
                      color: "#000000",
                      link: "#",
                    },
                    {
                      name: "YouTube",
                      icon: Youtube,
                      color: "#FF0000",
                      link: "#",
                    },
                    {
                      name: "LinkedIn",
                      icon: Linkedin,
                      color: "#0A66C2",
                      link: "#",
                    },
                    {
                      name: "WhatsApp",
                      icon: MessageCircle,
                      color: "#25D366",
                      link: "#",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="flex flex-col items-center justify-center p-2 md:p-3 rounded-lg hover:shadow-md transition-shadow gap-1 md:gap-2"
                      style={{
                        backgroundColor: `${social.color}10`,
                        border: `1px solid ${social.color}30`,
                      }}
                    >
                      <social.icon
                        className="w-4 h-4 md:w-5 md:h-5"
                        style={{ color: social.color }}
                      />
                      <span
                        className={`text-xs font-medium ${poppins.className}`}
                        style={{ color: social.color }}
                      >
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* FAQ Section - Simplified for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 lg:mt-16"
          >
            <div className="text-center mb-6 md:mb-8">
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 ${poppins.className}`}
                style={{ color: primaryColor }}
              >
                Frequently Asked Questions
              </h3>
              <p
                className={`text-sm md:text-base text-gray-700 max-w-2xl mx-auto ${poppins.className}`}
              >
                Quick answers to common questions about our work
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === index ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3 md:gap-4 text-left">
                      <div
                        className="p-1.5 md:p-2 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        <faq.icon
                          className="w-4 h-4 md:w-5 md:h-5"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h4
                        className={`text-base md:text-lg font-bold ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        {faq.question}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${expandedFAQ === index ? "transform rotate-180" : ""}`}
                      style={{ color: primaryColor }}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="mt-3 pl-11 md:pl-14">
                      <p
                        className={`text-gray-600 text-sm md:text-base ${poppins.className}`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 lg:mt-16"
          >
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <div
                className="p-6 md:p-8 lg:p-12 text-center text-white"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                }}
              >
                <h3
                  className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 ${poppins.className}`}
                >
                  Stay Updated With Our Impact
                </h3>
                <p
                  className={`text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto ${poppins.className}`}
                >
                  Subscribe to our newsletter for updates and success stories.
                </p>
                <form className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-white-900 focus:ring-1 focus:ring-1 focus:ring-white text-sm md:text-base"
                    />
                    <button
                      type="submit"
                      className="px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                      style={{
                        backgroundColor: secondaryColor,
                        color: primaryColor,
                      }}
                    >
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                      <span className={poppins.className}>Subscribe</span>
                    </button>
                  </div>
                  <p
                    className={`text-xs md:text-sm mt-2 md:mt-4 opacity-90 ${poppins.className}`}
                  >
                    Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
