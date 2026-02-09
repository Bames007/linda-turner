// components/Layout/Footer.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { bebasNeue, poppins } from "../utils/constants";
import { Heart, ChevronUp, Globe } from "lucide-react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

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

  // Social media links
  const socialMedia = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "#",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "#",
      color: "#E4405F",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      href: "#",
      color: "#000000",
    },
    {
      name: "YouTube",
      icon: YouTubeIcon,
      href: "#",
      color: "#FF0000",
    },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${secondaryColor} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
            {/* Logo and Name */}
            <div className="flex flex-col items-center space-y-3">
              <div
                className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl flex items-center justify-center"
                style={{ backgroundColor: secondaryColor }}
              >
                <Heart
                  className="w-6 h-6 md:w-8 md:h-8"
                  style={{ color: primaryColor }}
                />
              </div>
              <h2
                className={`text-xl md:text-2xl lg:text-3xl font-bold text-white ${bebasNeue.className}`}
              >
                Linda Hope Initiative
              </h2>
              <p
                className={`text-white/80 text-sm md:text-base max-w-md ${poppins.className}`}
              >
                Creating lasting change through compassion and community
                support.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 md:pt-6">
              <p
                className={`text-white text-sm md:text-base mb-3 md:mb-4 ${poppins.className}`}
              >
                Follow Our Journey
              </p>
              <div className="flex items-center justify-center gap-3 md:gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 md:p-3 rounded-lg transition-all duration-200 hover:bg-white/10"
                    style={{ color: social.color }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Built by Section */}
            <div className="pt-4 md:pt-6 border-t border-white/10 w-full max-w-md">
              <div className="flex flex-col items-center space-y-2">
                <p
                  className={`text-white/60 text-xs md:text-sm ${poppins.className}`}
                >
                  Built by
                </p>
                <a
                  href="https://www.ebcomtechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-white/90 transition-colors"
                >
                  <span
                    className={`font-medium text-sm md:text-base ${poppins.className}`}
                  >
                    EBCom Technologies
                  </span>
                </a>
                <p className={`text-white/40 text-xs ${poppins.className}`}>
                  www.ebcomtechnologies.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p
                  className={`text-white/60 text-xs md:text-sm ${poppins.className}`}
                >
                  © {year} Linda Hope Initiative. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// SVG Social Icons (Same as before)
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="white" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="white" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="white" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="white" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default Footer;
