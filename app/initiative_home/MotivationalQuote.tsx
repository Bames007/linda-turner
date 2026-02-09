"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { poppins } from "../utils/constants";
import {
  Quote,
  Share2,
  Copy,
  Download,
  Heart,
  Users,
  HandHeart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const MotivationalQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const primaryColor = "#691C33";
  const secondaryColor = "#FFE6EE";
  const accentColor = "#8A2E4D";

  const quotes = useMemo(
    () => [
      {
        text: "When we lift up our elders, we honor our past and build a stronger future for everyone.",
        author: "Community Initiative",
        topic: "Honoring Elders",
      },
      {
        text: "True compassion is seeing a need and taking action—one meal, one visit, one helping hand at a time.",
        author: "Community Initiative",
        topic: "Compassion in Action",
      },
      {
        text: "In helping our most vulnerable, we discover our own strength and humanity.",
        author: "Community Initiative",
        topic: "Shared Humanity",
      },
      {
        text: "Every grandmother's wisdom is a treasure; every helping hand is an investment in our collective wellbeing.",
        author: "Community Initiative",
        topic: "Community Treasure",
      },
    ],
    [],
  );

  // Optimized auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const handleCopyQuote = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(quotes[currentQuote].text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }, [currentQuote, quotes]);

  const nextQuote = useCallback(() => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  }, [quotes.length]);

  const prevQuote = useCallback(() => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  }, [quotes.length]);

  return (
    <section
      id="motivational-quote"
      className="relative py-12 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-[#FFE6EE]/10 overflow-hidden"
    >
      {/* Background Elements - Cleaner background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-xl"
          style={{ backgroundColor: primaryColor }}
        />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gray-100/20 rounded-full opacity-10 blur-xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="inline-flex items-center px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-4 lg:mb-6"
          >
            <HandHeart
              className="w-4 h-4 mr-2"
              style={{ color: primaryColor }}
            />
            <span
              className={`text-sm font-semibold ${poppins.className}`}
              style={{ color: primaryColor }}
            >
              Words of Compassion & Community
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className={`text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 ${poppins.className}`}
            style={{ color: primaryColor }}
          >
            Daily Dose of
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="block mt-1"
              style={{ color: accentColor }}
            >
              Compassion
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className={`text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto ${poppins.className}`}
          >
            Let these reminders of our shared humanity inspire you to make a
            difference
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile Navigation Arrows */}
          {isMobile && (
            <div className="flex justify-center items-center mb-4">
              <button
                onClick={prevQuote}
                className="p-2 rounded-full mr-4"
                style={{ backgroundColor: secondaryColor, color: primaryColor }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextQuote}
                className="p-2 rounded-full"
                style={{ backgroundColor: secondaryColor, color: primaryColor }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Main Quote Display */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
            {/* Quote Card */}
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:w-2/3 w-full"
            >
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg border border-gray-100 overflow-hidden relative">
                {/* Decorative Header */}
                <div
                  className="p-4 sm:p-6 lg:p-8 text-center"
                  style={{ backgroundColor: primaryColor }}
                >
                  <div
                    className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl mb-3 backdrop-blur-sm"
                    style={{ backgroundColor: secondaryColor, opacity: 0.9 }}
                  >
                    <Quote
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                      style={{ color: primaryColor }}
                    />
                  </div>
                  <h3
                    className={`relative text-white text-base sm:text-lg font-semibold ${poppins.className}`}
                  >
                    {quotes[currentQuote].topic}
                  </h3>
                </div>

                {/* Quote Content */}
                <div className="p-4 sm:p-6 lg:p-8 relative">
                  <motion.p
                    key={`quote-text-${currentQuote}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`text-lg sm:text-xl lg:text-2xl text-gray-800 text-center leading-relaxed mb-4 sm:mb-6 font-light ${poppins.className}`}
                  >
                    "{quotes[currentQuote].text}"
                  </motion.p>

                  {/* Author Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 shadow-md"
                          style={{ borderColor: secondaryColor }}
                        >
                          <Image
                            src="/images/hero2.jpeg"
                            alt="Community Volunteer"
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                            priority={currentQuote === 0}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div
                        className="w-10 h-1 mb-1.5 rounded-full"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <p
                        className={`text-gray-900 text-sm sm:text-base font-bold ${poppins.className}`}
                      >
                        {quotes[currentQuote].author}
                      </p>
                      <p
                        className={`text-xs sm:text-sm ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        Helping Hands Together
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Community Portrait Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="lg:w-1/3 w-full mt-6 lg:mt-0"
            >
              <div className="relative">
                <div
                  className="rounded-2xl p-4 sm:p-6 shadow-md border border-gray-200"
                  style={{ backgroundColor: secondaryColor }}
                >
                  <div className="relative w-full h-48 sm:h-56 lg:h-72">
                    <Image
                      src="/images/hero3.jpeg"
                      alt="Community members helping elders"
                      fill
                      className="object-cover rounded-xl shadow-lg"
                      sizes="(max-width: 1024px) 100vw, 320px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
                  </div>

                  <div className="text-center mt-4">
                    <h4
                      className={`text-xl sm:text-2xl font-bold ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Together We Care
                    </h4>
                    <p
                      className={`text-sm sm:text-base font-semibold mt-1 ${poppins.className}`}
                      style={{ color: accentColor }}
                    >
                      Community Support Initiative
                    </p>
                    <button
                      className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mt-3 text-sm sm:text-base transition-colors hover:bg-[#5a162b]"
                      style={{ backgroundColor: primaryColor, color: "white" }}
                    >
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                      <span className={`${poppins.className}`}>
                        Join Our Mission
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="flex flex-col items-center mt-6 lg:mt-8 space-y-4"
          >
            <div className="flex space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-150 ${
                    currentQuote === index
                      ? "scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  style={{
                    backgroundColor:
                      currentQuote === index ? primaryColor : undefined,
                  }}
                />
              ))}
            </div>

            {/* Share Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm w-full max-w-md">
              <p
                className={`text-gray-600 text-center text-sm mb-3 ${poppins.className}`}
              >
                Share this inspiration
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { icon: Copy, label: "Copy", action: handleCopyQuote },
                  { icon: Share2, label: "Share", action: () => {} },
                  { icon: Download, label: "Save", action: () => {} },
                ].map((action, index) => (
                  <button
                    key={action.label}
                    onClick={action.action}
                    className="border text-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium flex items-center space-x-2 text-sm hover:shadow transition-shadow duration-150"
                    style={{
                      backgroundColor: secondaryColor,
                      borderColor: "#E5C6D6",
                      color: primaryColor,
                    }}
                  >
                    <action.icon className="w-4 h-4" />
                    <span className={poppins.className}>
                      {isCopied && action.label === "Copy"
                        ? "Copied!"
                        : action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Community Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="mt-8 lg:mt-12 rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center shadow-lg relative overflow-hidden"
            style={{ backgroundColor: primaryColor }}
          >
            <h3
              className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 ${poppins.className}`}
            >
              Compassion Builds Community
            </h3>
            <p
              className={`text-white/90 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto ${poppins.className}`}
            >
              Remember that helping our elders and those in need isn't just
              charity—it's an investment in the soul of our community. Every act
              of kindness strengthens the bonds that hold us together.
            </p>
            <button
              className="bg-white rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:bg-gray-50 transition-colors"
              style={{ color: primaryColor }}
            >
              <span
                className={`flex items-center justify-center space-x-2 px-4 py-3 sm:px-6 sm:py-3 ${poppins.className}`}
              >
                <Heart className="w-4 h-4" />
                <span>Make a Difference Today</span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MotivationalQuote;
