"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { poppins } from "../utils/constants";
import { ArrowRight, Play, Heart, Users, Globe, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

  const animationProps = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-gray-50/30"
    >
      {/* Background Elements - Fixed grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Very subtle gradient background instead of grid lines */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-50/10" />

        {/* Soft pattern overlay with reduced opacity */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(90deg, ${primaryColor} 1px, transparent 1px), linear-gradient(${primaryColor} 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gradient circles */}
        <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] bg-gradient-to-r from-[#691C33]/5 to-[#FFE6EE]/10 rounded-full blur-3xl md:blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-gradient-to-r from-[#FFE6EE]/10 to-[#691C33]/5 rounded-full blur-3xl md:blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            {...animationProps}
            className="lg:w-1/2 w-full text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { delay: 0.1, duration: 0.4 }
              }
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFE6EE] border border-[#691C33]/10 shadow-sm mb-6 sm:mb-8 mx-auto lg:mx-0"
            >
              <Heart className="w-4 h-4 mr-2" style={{ color: primaryColor }} />
              <span
                className={`text-sm font-semibold ${poppins.className}`}
                style={{ color: primaryColor }}
              >
                Community Initiative
              </span>
            </motion.div>

            {/* Headline - Using Poppins instead of Bebas */}
            <motion.h1
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { delay: 0.2, duration: 0.5 }
              }
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${poppins.className}`}
              style={{ color: primaryColor }}
            >
              <span className="block tracking-tight">EMPOWERING</span>
              <span className="block tracking-tight">COMMUNITIES</span>
              <span className="block tracking-tight">TOGETHER</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { delay: 0.6, duration: 0.5 }
              }
              className={`text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed ${poppins.className} max-w-2xl mx-auto lg:mx-0`}
            >
              We're dedicated to creating meaningful change through
              community-driven initiatives that
              <span
                className="font-semibold px-1 rounded"
                style={{ color: primaryColor, backgroundColor: secondaryColor }}
              >
                support
              </span>
              ,
              <span
                className="font-semibold px-1 rounded"
                style={{ color: primaryColor, backgroundColor: secondaryColor }}
              >
                empower
              </span>
              , and
              <span
                className="font-semibold px-1 rounded"
                style={{ color: primaryColor, backgroundColor: secondaryColor }}
              >
                uplift
              </span>
              . Together, we're building a brighter future for everyone.
            </motion.p>

            {/* Stats - Using Poppins */}
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { delay: 0.7, duration: 0.5 }
              }
              className="flex flex-col sm:flex-row gap-4 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {[
                {
                  icon: Users,
                  number: "2,500+",
                  label: "Volunteers",
                  color: primaryColor,
                },
                {
                  icon: Globe,
                  number: "50+",
                  label: "Communities",
                  color: accentColor,
                },
                {
                  icon: Shield,
                  number: "100K+",
                  label: "Lives Touched",
                  color: "#8A2E4D",
                },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm flex-1"
                >
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <stat.icon
                      className="w-5 h-5"
                      style={{ color: stat.color }}
                    />
                  </div>
                  <div className="text-left">
                    <div
                      className={`text-xl font-bold ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`text-sm text-gray-600 ${poppins.className}`}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { delay: 0.8, duration: 0.5 }
              }
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0"
            >
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center bg-[#691C33] text-white transition-all duration-200 min-h-[48px] hover:bg-[#5a162b]"
              >
                <span className={`flex items-center ${poppins.className}`}>
                  Join the Movement
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </motion.button>

              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="border border-gray-200 px-6 py-3 rounded-xl font-semibold text-base bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#691C33] transition-all duration-200 min-h-[48px] hover:bg-gray-50"
              >
                <Play className="w-4 h-4 mr-2 text-[#691C33]" />
                <span className={poppins.className}>See Our Impact</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeOut" as const }
            }
            className="lg:w-1/2 w-full relative flex justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto">
              {/* Main Image Container */}
              <div className="relative">
                {/* Background Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFE6EE] to-white rounded-2xl md:rounded-3xl transform rotate-3 scale-105" />

                {/* Main Image */}
                <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/images/hero.jpeg"
                      alt="Community members working together to create positive change"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                      quality={90}
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                {!shouldReduceMotion && (
                  <>
                    {/* "Making a Difference" card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      className="absolute -left-2 -top-2 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg z-30 max-w-[120px] p-2 sm:-left-4 sm:-top-4 sm:max-w-[140px] sm:p-4"
                    >
                      <div className="flex items-center mb-1">
                        <div className="w-2 h-2 rounded-full mr-1 bg-[#691C33]" />
                        <span
                          className={`text-[10px] sm:text-xs font-semibold ${poppins.className} text-[#691C33]`}
                        >
                          Making a Difference
                        </span>
                      </div>
                      <p
                        className={`text-[9px] sm:text-xs text-gray-700 leading-tight ${poppins.className}`}
                      >
                        Real change starts with community
                      </p>
                    </motion.div>

                    {/* "Together we rise" card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.4 }}
                      className="absolute bottom-2 right-2 bg-[#691C33] rounded-xl shadow-lg z-30 max-w-[100px] p-2 sm:-right-4 sm:-bottom-4 sm:max-w-[140px] sm:p-4"
                    >
                      <p
                        className={`text-[10px] sm:text-xs font-medium text-white text-center leading-tight ${poppins.className}`}
                      >
                        "Together we rise"
                      </p>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
