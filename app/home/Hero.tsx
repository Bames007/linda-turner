"use client";
import { motion, useReducedMotion, Transition } from "framer-motion";
import Image from "next/image";
import { bebasNeue, poppins } from "../utils/constants";
import { ArrowRight, Play, Star, Quote } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

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

  // Optimized particles - reduce count on mobile
  const particleCount = useMemo(() => {
    if (!isClient) return 0;
    return isMobile ? 3 : 8; // Further reduced for mobile
  }, [isClient, isMobile]);

  // Pre-calculate particle positions
  const particlePositions = useMemo(() => {
    if (!isClient) return [];
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * (isMobile ? 150 : 400),
      y: Math.random() * (isMobile ? 300 : 800),
      scale: Math.random() * 0.4 + 0.2,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 1.5,
    }));
  }, [particleCount, isClient, isMobile]);

  // Optimize animations for reduced motion
  const animationProps = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 },
    animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: "easeOut" as const },
  };

  // Fixed float animation with proper typing
  const floatAnimation = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        style: { willChange: "transform" as const },
      };
    }
    return {
      animate: { y: [0, -8, 0] },
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      } satisfies Transition,
      style: { willChange: "transform" as const },
    };
  }, [shouldReduceMotion]);

  // Fixed gradient orb animations - disabled on mobile for performance
  const leftOrbAnimation = useMemo(() => {
    if (shouldReduceMotion || isMobile) {
      return {};
    }
    return {
      animate: {
        x: [0, -20, 0] as [number, number, number],
        y: [0, 15, 0] as [number, number, number],
      },
      transition: {
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut" as const,
      } satisfies Transition,
    };
  }, [shouldReduceMotion, isMobile]);

  const rightOrbAnimation = useMemo(() => {
    if (shouldReduceMotion || isMobile) {
      return {};
    }
    return {
      animate: {
        x: [0, 30, 0] as [number, number, number],
        y: [0, -15, 0] as [number, number, number],
      },
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut" as const,
      } satisfies Transition,
    };
  }, [shouldReduceMotion, isMobile]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-purple-50/50 to-blue-50/30">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static geometric pattern - lighter on mobile */}
        <div className="absolute inset-0 opacity-[0.015] md:opacity-[0.025] bg-[linear-gradient(#8B5CF6_1px,transparent_1px),linear-gradient(90deg,#8B5CF6_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Reduced particles - only desktop */}
        {isClient &&
          !shouldReduceMotion &&
          !isMobile &&
          particlePositions.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-purple-300/40 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                scale: particle.scale,
                opacity: 0,
              }}
              animate={{
                y: [null, -10, 0] as [null, number, number],
                opacity: [0, 0.15, 0] as [number, number, number],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
              style={{ willChange: "transform, opacity" as const }}
            />
          ))}

        {/* Optimized gradient orbs - smaller on mobile */}
        <motion.div
          {...rightOrbAnimation}
          className="absolute top-10 right-10 w-[150px] h-[150px] md:top-20 md:right-20 md:w-[250px] md:h-[250px] bg-gradient-to-r from-purple-100/10 to-pink-100/10 rounded-full opacity-20 blur-xl md:blur-3xl"
        />
        <motion.div
          {...leftOrbAnimation}
          className="absolute bottom-10 left-10 w-[120px] h-[120px] md:bottom-20 md:left-20 md:w-[200px] md:h-[200px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full opacity-15 blur-xl md:blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content - Mobile optimized */}
          <motion.div
            {...animationProps}
            className="lg:w-1/2 w-full text-left order-2 lg:order-1"
          >
            {/* Badge - Better mobile alignment */}
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
              className="inline-flex items-center px-3 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-purple-100 shadow-sm mb-4 sm:mb-6 w-fit"
            >
              {!shouldReduceMotion && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] } as const}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"
                />
              )}
              <span
                className={`text-purple-700 text-xs sm:text-sm font-semibold ${poppins.className}`}
              >
                Now Booking 2024 Speaking Events
              </span>
            </motion.div>

            {/* Headline - Bigger and left-aligned on mobile */}
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
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              <motion.span
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
                }
                animate={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { delay: 0.25, duration: 0.5 }
                }
                className="block tracking-tight"
              >
                IGNITING
              </motion.span>
              <motion.span
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
                }
                animate={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { delay: 0.35, duration: 0.5 }
                }
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-tight"
              >
                HOPE
              </motion.span>
              <motion.span
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
                }
                animate={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { delay: 0.45, duration: 0.5 }
                }
                className="block tracking-tight"
              >
                THROUGH WORDS
              </motion.span>
            </motion.h1>

            {/* Subtitle - Better mobile readability */}
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
              className={`text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed ${poppins.className}`}
            >
              Linda Turner transforms lives through inspirational speaking that
              awakens{" "}
              <span className="text-purple-600 font-semibold bg-purple-50 px-1 rounded">
                hope
              </span>
              , empowers{" "}
              <span className="text-pink-600 font-semibold bg-pink-50 px-1 rounded">
                change
              </span>
              , and creates{" "}
              <span className="text-blue-600 font-semibold bg-blue-50 px-1 rounded">
                lasting impact
              </span>
              .
            </motion.p>

            {/* Stats - Horizontal on mobile, better spacing */}
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
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {[
                { number: "50K+", label: "Lives Changed" },
                { number: "100+", label: "Events" },
                { number: "25+", label: "Countries" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 ${bebasNeue.className}`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-gray-600 text-xs sm:text-sm ${poppins.className} flex items-center justify-center`}
                  >
                    <Star className="w-3 h-3 text-yellow-500 mr-1 flex-shrink-0" />
                    <span className="line-clamp-1">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Better mobile layout */}
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold text-base overflow-hidden transition-all duration-200 flex items-center justify-center w-full sm:w-auto min-h-[48px]"
                style={{ willChange: "transform" as const }}
              >
                <span
                  className={`relative z-10 flex items-center ${poppins.className}`}
                >
                  Book Linda to Speak
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </motion.button>

              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-base bg-white/90 backdrop-blur-sm transition-all duration-200 flex items-center justify-center w-full sm:w-auto min-h-[48px]"
                style={{ willChange: "transform" as const }}
              >
                <Play className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                <span className={`${poppins.className}`}>Watch Talks</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Optimized Image Section - Better mobile positioning */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
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
            className="lg:w-1/2 relative mb-4 sm:mb-0 order-1 lg:order-2 flex justify-center"
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto">
              {/* Floating Image */}
              <motion.div {...floatAnimation} className="relative z-20">
                <div className="relative w-full aspect-[3/4]">
                  {/* Background Decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl md:rounded-3xl transform rotate-1 scale-105" />

                  {/* Main Image Container */}
                  <div className="absolute inset-0 bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl overflow-hidden">
                    <Image
                      src="/images/linda turner image one.jpg"
                      alt="Linda Turner - International Speaker & Hope Advocate"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                      quality={85}
                      loading="eager"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>

                  {/* Reduced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-2xl md:rounded-3xl blur-md -z-10 scale-105" />
                </div>
              </motion.div>

              {/* Floating quote elements - Only on desktop */}
              {!shouldReduceMotion && !isMobile && (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.4,
                      ease: "easeOut" as const,
                    }}
                    className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-purple-100 p-3 rounded-xl shadow-lg max-w-[120px] z-30"
                  >
                    <Quote className="w-3 h-3 text-purple-600 mb-1" />
                    <p
                      className={`text-gray-700 text-xs leading-tight ${poppins.className}`}
                    >
                      Hope is the anchor for the soul
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.9,
                      duration: 0.4,
                      ease: "easeOut" as const,
                    }}
                    className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl shadow-lg max-w-[120px] z-30"
                  >
                    <p
                      className={`text-white text-xs font-medium leading-tight ${poppins.className}`}
                    >
                      Your words create your world
                    </p>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Only on desktop */}
        {!shouldReduceMotion && !isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" as const }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <div className="flex flex-col items-center">
              <span
                className={`text-xs mb-1 text-gray-400 ${poppins.className}`}
              >
                SCROLL
              </span>
              <div className="w-4 h-6 border border-purple-200 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                  className="w-0.5 h-1.5 bg-purple-300 rounded-full mt-1.5"
                  style={{ willChange: "transform" as const }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
