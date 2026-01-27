// components/Layout/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { bebasNeue, poppins } from "../utils/constants";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [
        "home",
        "quote",
        "videos",
        "stories",
        "help",
        "live",
        "events",
        "podcast",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Inspiration", id: "quote" },
    { name: "Videos", id: "videos" },
    { name: "Stories", id: "stories" },
    { name: "Help", id: "help" },
    { name: "Live", id: "live" },
    { name: "Events", id: "events" },
    { name: "Podcast", id: "podcast" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-purple-100/50 border-b border-purple-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("home")}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-purple-200 bg-white">
                  <Image
                    src="/images/ebcom logo.png"
                    alt="EBCom Technologies"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <motion.span
                  className={`font-bold text-gray-800 leading-none ${
                    isScrolled ? "text-xl" : "text-2xl"
                  } ${bebasNeue.className}`}
                >
                  Linda Turner
                </motion.span>
                <motion.span
                  className={`leading-none ${
                    isScrolled ? "text-xs" : "text-sm"
                  } ${poppins.className} ${
                    isScrolled ? "text-purple-600" : "text-purple-500"
                  } font-medium`}
                >
                  The Hope Initiative
                </motion.span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      color: "#7C3AED",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                      poppins.className
                    } ${
                      activeSection === item.id
                        ? "text-purple-600 bg-purple-50"
                        : isScrolled
                          ? "text-gray-700 hover:text-purple-600"
                          : "text-white hover:text-purple-200"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick("contact")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  poppins.className
                } ${
                  isScrolled
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                }`}
              >
                Book Linda to Speak
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                  backgroundColor:
                    isScrolled || isMobileMenuOpen ? "#4C1D95" : "#FFFFFF",
                }}
                className="w-6 h-0.5 rounded-full mb-1.5 transition-colors duration-300"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  backgroundColor:
                    isScrolled || isMobileMenuOpen ? "#4C1D95" : "#FFFFFF",
                }}
                className="w-6 h-0.5 rounded-full mb-1.5 transition-colors duration-300"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                  backgroundColor:
                    isScrolled || isMobileMenuOpen ? "#4C1D95" : "#FFFFFF",
                }}
                className="w-6 h-0.5 rounded-full transition-colors duration-300"
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-50 lg:hidden"
          >
            {/* Menu Header */}
            <div className="p-6 border-b border-purple-100 bg-gradient-to-br from-white to-purple-50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-purple-200 bg-white">
                    <Image
                      src="/images/ebcom logo.png"
                      alt="EBCom Technologies"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-gray-800 font-bold text-lg ${bebasNeue.className}`}
                    >
                      Linda Turner
                    </h3>
                    <p
                      className={`text-purple-600 text-sm ${poppins.className}`}
                    >
                      The Hope Initiative
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleNavClick("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg mb-6"
              >
                <span className={poppins.className}>Book Linda to Speak</span>
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-6 overflow-y-auto h-[calc(100vh-200px)]">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between w-full px-4 py-4 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                        poppins.className
                      } ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 border-2 border-purple-200"
                          : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200"
              >
                <h4
                  className={`font-semibold text-gray-800 mb-4 ${poppins.className}`}
                >
                  Get In Touch
                </h4>
                <div className="space-y-3">
                  <a
                    href="tel:+2348127728084"
                    className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
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
                          d="M3 5a2 2 0 012-2h3.28a1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">+234 812 772 8084</div>
                      <div className="text-sm text-gray-500">
                        Available 24/7
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
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
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Abuja, Nigeria</div>
                      <div className="text-sm text-gray-500">Global Reach</div>
                    </div>
                  </div>
                </div>

                {/* EBCom Technologies Credit */}
                <div className="mt-6 pt-6 border-t border-purple-200 flex items-center justify-center">
                  <p className="text-sm text-gray-500">
                    Built by{" "}
                    <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                      EBCom Technologies
                    </span>
                  </p>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
