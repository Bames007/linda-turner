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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update scroll progress
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "talks",
        "videos",
        "stories",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Talks", href: "#talks", id: "talks" },
    { name: "Videos", href: "#videos", id: "videos" },
    { name: "Stories", href: "#stories", id: "stories" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-purple-100/50 border-b border-purple-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Enhanced Logo with EBCom Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <motion.div
              animate={{
                rotate: isScrolled ? 0 : [0, 5, -5, 0],
                scale: isScrolled ? 1 : [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: isScrolled ? 0 : Infinity }}
              className="relative"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-purple-200 bg-white">
                <Image
                  src="/images/ebcom logo.png"
                  alt="EBCom Technologies"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              {/* Animated glow effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl blur-sm -z-10"
              />
            </motion.div>

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
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link href={item.href}>
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      color: "#7C3AED",
                    }}
                    whileTap={{ scale: 0.95 }}
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

                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 border-2 border-purple-200 rounded-xl -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.span>
                </Link>
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
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(128, 90, 213, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
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

      {/* Enhanced Mobile Menu - Fixed Background */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with solid background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/95 backdrop-blur-xl lg:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl border-l border-purple-100 lg:hidden z-50"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-purple-100 bg-gradient-to-br from-white to-purple-50">
                <div className="flex items-center space-x-3 mb-4">
                  {/* EBCom Logo in Mobile Menu */}
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

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg"
                >
                  <span className={poppins.className}>Book Linda to Speak</span>
                </motion.button>
              </div>

              {/* Mobile Navigation */}
              <nav className="p-6 bg-white">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={item.href}>
                        <motion.span
                          whileHover={{ x: 10 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                            poppins.className
                          } ${
                            activeSection === item.id
                              ? "bg-purple-50 text-purple-600 border-r-4 border-purple-500"
                              : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                          }`}
                        >
                          {item.name}

                          {/* Active indicator */}
                          {activeSection === item.id && (
                            <motion.div
                              layoutId="mobileActiveSection"
                              className="w-2 h-2 bg-purple-500 rounded-full ml-2"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 p-4 bg-purple-50 rounded-2xl border border-purple-200"
                >
                  <h4
                    className={`font-semibold text-gray-800 mb-3 ${poppins.className}`}
                  >
                    Get In Touch
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-purple-500 mr-2"
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
                      +234 812 772 8084
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-purple-500 mr-2"
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
                      Abuja, Nigeria
                    </div>
                  </div>

                  {/* EBCom Technologies Credit */}
                  <div className="mt-4 pt-3 border-t border-purple-200">
                    <p className="text-xs text-gray-500 text-center">
                      Built by{" "}
                      <span className="text-purple-600 font-semibold">
                        EBCom Technologies
                      </span>
                    </p>
                  </div>
                </motion.div>
              </nav>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors duration-300"
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
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
};

export default Header;
