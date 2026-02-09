// components/Layout/Header.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Globe,
  Search,
  User,
  Calendar,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const primaryColor = "#691C33";
  const secondaryColor = "#FFE6EE";
  const accentColor = "#8A2E4D";

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && isMobile) {
        const target = event.target as HTMLElement;
        if (
          !target.closest(".mobile-menu") &&
          !target.closest(".menu-button")
        ) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, isMobile]);

  // Close dropdowns on scroll
  useEffect(() => {
    const handleScrollClose = () => {
      setActiveDropdown(null);
    };
    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Our Work",
      href: "#",
      dropdown: [
        { label: "Operation Feed the Poor", href: "/work/food" },
        { label: "Adopt a Grandma", href: "/work/grandma" },
        { label: "Gender-Based Violence", href: "/work/gbv" },
        { label: "Youth Empowerment", href: "/work/youth" },
      ],
    },
    {
      label: "Get Involved",
      href: "#",
      dropdown: [
        { label: "Volunteer", href: "/volunteer" },
        { label: "Donate", href: "/donate" },
        { label: "Partner with Us", href: "/partner" },
        { label: "Fundraise", href: "/fundraise" },
      ],
    },
    {
      label: "Impact",
      href: "#",
      dropdown: [
        { label: "Success Stories", href: "/stories" },
        { label: "Impact Reports", href: "/reports" },
        { label: "Our Team", href: "/team" },
        { label: "Annual Review", href: "/annual-review" },
      ],
    },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const handleDonateClick = () => {
    const causesSection = document.getElementById("causes");
    if (causesSection) {
      causesSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown((active) => (active === label ? null : label));
  }, []);

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-gradient-to-r from-[#691C33] to-[#8A2E4D] text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <a
                href="tel:+2349012345678"
                className="flex items-center hover:text-[#FFE6EE] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className="truncate">+234 901 234 5678</span>
              </a>
              <a
                href="mailto:contact@lindahope.org"
                className="flex items-center hover:text-[#FFE6EE] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className="truncate hidden sm:inline">
                  contact@lindahope.org
                </span>
                <span className="truncate sm:hidden">Email Us</span>
              </a>
              <div className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-xs sm:text-sm">Follow us:</span>
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg bg-white" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 z-50"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <div
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: primaryColor,
                    boxShadow: `0 4px 12px ${primaryColor}40`,
                  }}
                >
                  <Heart
                    className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                    fill="white"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1
                  className={`text-xl lg:text-2xl font-bold tracking-tight leading-tight`}
                  style={{ color: primaryColor }}
                >
                  Linda Hope
                  <span className="block text-sm lg:text-base font-normal text-gray-600">
                    Initiative for Change
                  </span>
                </h1>
              </div>
              <div className="sm:hidden">
                <h1
                  className={`text-lg font-bold tracking-tight`}
                  style={{ color: primaryColor }}
                >
                  Linda Hope
                </h1>
                <p className="text-xs text-gray-600">Initiative</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button className="flex items-center space-x-1 px-3 xl:px-4 py-2 text-gray-700 hover:text-[#691C33] font-medium transition-colors rounded-lg hover:bg-gray-50">
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                            style={{
                              boxShadow: "0 20px 60px rgba(105, 28, 51, 0.15)",
                            }}
                          >
                            {item.dropdown.map((subItem, idx) => (
                              <motion.div
                                key={subItem.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-3 text-gray-700 hover:bg-[#FFE6EE] hover:text-[#691C33] transition-colors border-b border-gray-50 last:border-b-0"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3 xl:px-4 py-2 text-gray-700 hover:text-[#691C33] font-medium transition-colors rounded-lg hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDonateClick}
                className="ml-4 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{
                  backgroundColor: primaryColor,
                  color: "white",
                  boxShadow: `0 4px 20px ${primaryColor}40`,
                }}
              >
                <span className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Donate Now</span>
                </span>
              </motion.button>
            </nav>

            {/* Mobile Menu Button - Single Clear Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="lg:hidden menu-button relative z-50"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                {isOpen ? (
                  <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    className="absolute"
                  >
                    <X className="w-6 h-6" style={{ color: primaryColor }} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    className="absolute"
                  >
                    <Menu className="w-6 h-6" style={{ color: primaryColor }} />
                  </motion.div>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden z-40"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="mobile-menu fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl lg:hidden z-50 overflow-y-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #FFFFFF 0%, #FFF9FB 100%)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Menu Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between z-10">
                  <Link
                    href="/"
                    className="flex items-center space-x-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        backgroundColor: primaryColor,
                        boxShadow: `0 4px 12px ${primaryColor}40`,
                      }}
                    >
                      <Heart className="w-6 h-6 text-white" fill="white" />
                    </div>
                    <div>
                      <h2
                        className="font-bold text-lg"
                        style={{ color: primaryColor }}
                      >
                        Linda Hope
                      </h2>
                      <p className="text-xs text-gray-600">
                        Initiative for Change
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Mobile Menu Content */}
                <div className="p-6">
                  {/* Quick Actions */}
                  <div className="flex gap-3 mb-8">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDonateClick}
                      className="flex-1 px-4 py-3 rounded-xl font-semibold text-center shadow-lg"
                      style={{
                        backgroundColor: primaryColor,
                        color: "white",
                        boxShadow: `0 4px 20px ${primaryColor}40`,
                      }}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <Heart className="w-4 h-4" />
                        <span>Donate</span>
                      </span>
                    </motion.button>
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 px-4 py-3 rounded-xl font-semibold text-center border-2"
                      style={{
                        borderColor: primaryColor,
                        color: primaryColor,
                        backgroundColor: "transparent",
                      }}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Volunteer</span>
                      </span>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="space-y-2 mb-8">
                    {navItems.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg overflow-hidden"
                      >
                        {item.dropdown ? (
                          <div className="space-y-1">
                            <button
                              onClick={() => toggleDropdown(item.label)}
                              className="flex items-center justify-between w-full px-4 py-3 text-gray-800 hover:text-[#691C33] font-medium rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  activeDropdown === item.label
                                    ? "rotate-180 text-[#691C33]"
                                    : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === item.label && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="pl-4 space-y-1 overflow-hidden"
                                >
                                  {item.dropdown.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                      className="block px-4 py-3 text-gray-600 hover:text-[#691C33] hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-gray-800 hover:text-[#691C33] font-medium rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Contact Info Card */}
                  <div
                    className="mb-8 p-5 rounded-2xl shadow-sm"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <h3
                      className="font-semibold mb-4"
                      style={{ color: primaryColor }}
                    >
                      Get in Touch
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+2349012345678"
                        className="flex items-center text-gray-700 hover:text-[#691C33] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm group-hover:shadow transition-shadow">
                          <Phone
                            className="w-4 h-4"
                            style={{ color: primaryColor }}
                          />
                        </div>
                        <div>
                          <div className="font-medium">Call Us</div>
                          <div className="text-sm">+234 901 234 5678</div>
                        </div>
                      </a>
                      <a
                        href="mailto:contact@lindahope.org"
                        className="flex items-center text-gray-700 hover:text-[#691C33] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm group-hover:shadow transition-shadow">
                          <Mail
                            className="w-4 h-4"
                            style={{ color: primaryColor }}
                          />
                        </div>
                        <div>
                          <div className="font-medium">Email Us</div>
                          <div className="text-sm">contact@lindahope.org</div>
                        </div>
                      </a>
                      <div className="flex items-center text-gray-700 group">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm">
                          <MapPin
                            className="w-4 h-4"
                            style={{ color: primaryColor }}
                          />
                        </div>
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-sm">Lagos, Nigeria</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Events Preview */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3
                        className="font-semibold"
                        style={{ color: primaryColor }}
                      >
                        Upcoming Events
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">
                            Community Outreach
                          </div>
                          <div className="text-xs text-gray-600">
                            Dec 15, 2024
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                          style={{ backgroundColor: accentColor }}
                        >
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">
                            Food Distribution
                          </div>
                          <div className="text-xs text-gray-600">
                            Dec 20, 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-600 mb-4">
                      Follow Our Journey
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                          aria-label={social.label}
                          onClick={() => setIsOpen(false)}
                        >
                          <social.icon className="w-5 h-5 text-gray-700" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Footer Note */}
                  <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500">
                      Making a difference, one life at a time
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: accentColor }}
                      />
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: secondaryColor }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
