// components/Sections/Stories.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { bebasNeue, poppins } from "../utils/constants";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  Users,
  Clock,
  Share2,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  RotateCcw,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

const Stories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false); // Start with autoplay OFF
  const [isMuted, setIsMuted] = useState(true); // Start muted for better UX
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const stories = useMemo(
    () => [
      {
        id: 1,
        title: "Grandma Maria's New Home",
        excerpt:
          "From living in a leaky shack to a warm, safe home with her community's help...",
        content:
          "For years, 78-year-old Maria lived alone in a crumbling house with no proper heating or plumbing. Through our community's collective effort, we not only rebuilt her home but also gave her a renewed sense of belonging. Every Saturday, volunteers visit to help with groceries and share stories, creating the family she never had.",
        author: "Maria Gonzalez",
        role: "Community Elder",
        location: "Southside District",
        duration: 15000, // 15 seconds
        video: "/videos/video1.mp4",
        thumbnail: "/images/hero.jpeg",
        metrics: {
          volunteers: 12,
          duration: "3 months",
          impact: "Complete home rebuild",
        },
        quote: "I thought I was forgotten. Now I know my community cares.",
      },
      {
        id: 2,
        title: "Winter Warmth Campaign",
        excerpt:
          "Providing heating and blankets to 50 vulnerable families during harsh winter...",
        content:
          "Last winter was particularly brutal for our community's poorest families. We mobilized 100 volunteers to deliver heating units, blankets, and warm meals to 50 households. The campaign didn't just provide physical warmth—it showed our most vulnerable neighbors that they're not alone. This initiative continues year-round with regular check-ins.",
        author: "James Wilson",
        role: "Winter Campaign Volunteer",
        location: "North Valley",
        duration: 15000,
        video: "/videos/video2.mp4",
        thumbnail: "/images/image3.jpeg",
        metrics: {
          volunteers: 100,
          duration: "2 months",
          impact: "50 families helped",
        },
        quote: "A warm home shouldn't be a luxury. It's a basic human right.",
      },
      {
        id: 3,
        title: "Community Kitchen Revival",
        excerpt:
          "Turning an abandoned building into a thriving community kitchen serving 300 meals daily...",
        content:
          "An old, abandoned church kitchen now serves as the heart of our community, providing hot meals to anyone in need. What started with 10 volunteers now involves the entire neighborhood—people donate ingredients, cook together, and share meals. It's become more than a kitchen; it's a place of connection and mutual support.",
        author: "Sarah Chen",
        role: "Kitchen Coordinator",
        location: "Downtown Community",
        duration: 15000,
        video: "/videos/video3.mp4",
        thumbnail: "/images/image5.jpeg",
        metrics: {
          volunteers: 50,
          duration: "6 months",
          impact: "300+ meals daily",
        },
        quote: "When we eat together, we become family.",
      },
      {
        id: 4,
        title: "Elder Companionship Program",
        excerpt:
          "Matching isolated elders with caring companions for daily support and friendship...",
        content:
          "Loneliness was a silent epidemic among our elders. Our companionship program pairs isolated seniors with volunteers who provide daily check-ins, help with errands, and most importantly, genuine friendship. The program has dramatically improved mental health outcomes and created beautiful intergenerational bonds.",
        author: "Dr. Robert Miller",
        role: "Program Director",
        location: "Multiple Communities",
        duration: 15000,
        video: "/videos/video4.mp4",
        thumbnail: "/images/hero.jpeg",
        metrics: {
          volunteers: 75,
          duration: "1 year",
          impact: "120 elders supported",
        },
        quote:
          "Every elder has a story worth hearing and a life worth celebrating.",
      },
      {
        id: 5,
        title: "Youth Mentorship Initiative",
        excerpt:
          "Empowering at-risk youth through education, mentorship, and community support...",
        content:
          "We recognized that breaking the cycle of poverty starts with our youth. Through tutoring, mentorship, and after-school programs, we're helping young people discover their potential. Many of our mentees are now volunteers themselves, creating a beautiful cycle of giving back that strengthens our entire community.",
        author: "Marcus Johnson",
        role: "Youth Mentor",
        location: "Eastside Projects",
        duration: 15000,
        video: "/videos/video5.mp4",
        thumbnail: "/images/image6.jpeg",
        metrics: {
          volunteers: 40,
          duration: "2 years",
          impact: "85 youth mentored",
        },
        quote:
          "Our youth aren't just the future—they're our present, and they're worth investing in.",
      },
    ],
    [],
  );

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, stories.length);
  }, [stories.length]);

  // Video event handlers
  const setupVideoListeners = useCallback(
    (video: HTMLVideoElement) => {
      if (!video) return;

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
        setProgress((video.currentTime / video.duration) * 100);
      };

      const handleLoadedData = () => {
        setDuration(video.duration);
        setIsLoading(false);
      };

      const handleEnded = () => {
        if (isAutoPlaying) {
          setActiveStory((prev) => (prev + 1) % stories.length);
        } else {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        }
      };

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("ended", handleEnded);
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("ended", handleEnded);
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    },
    [isAutoPlaying, stories.length],
  );

  // Sync video state with React state
  useEffect(() => {
    const video = videoRefs.current[activeStory];
    if (!video) return;

    // Apply global mute state
    video.muted = isMuted;

    // Apply play state
    if (isPlaying && !video.paused) return;
    if (isPlaying && video.paused) {
      video.play().catch((e) => {
        console.error("Video play failed:", e);
        setIsPlaying(false);
      });
    } else if (!isPlaying && !video.paused) {
      video.pause();
    }

    // Setup listeners
    const cleanup = setupVideoListeners(video);
    return cleanup;
  }, [activeStory, isMuted, isPlaying, setupVideoListeners]);

  // Auto-play control
  useEffect(() => {
    if (!isAutoPlaying || !userInteracted) return;

    const video = videoRefs.current[activeStory];
    if (!video || video.ended || isPlaying) return;

    video.play().catch((e) => {
      console.error("Autoplay failed:", e);
      setIsAutoPlaying(false);
    });
  }, [activeStory, isAutoPlaying, userInteracted, isPlaying]);

  // Video control functions
  const togglePlay = useCallback(() => {
    setUserInteracted(true);
    const video = videoRefs.current[activeStory];
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch((e) => {
        console.error("Play failed:", e);
        setIsPlaying(false);
      });
    }
  }, [activeStory, isPlaying]);

  const toggleMute = useCallback(() => {
    setUserInteracted(true);
    setIsMuted(!isMuted);
  }, [isMuted]);

  const toggleAutoPlay = useCallback(() => {
    setUserInteracted(true);
    const newAutoPlayState = !isAutoPlaying;
    setIsAutoPlaying(newAutoPlayState);

    if (newAutoPlayState && !isPlaying) {
      const video = videoRefs.current[activeStory];
      if (video && video.paused) {
        video.play().catch((e) => {
          console.error("Autoplay start failed:", e);
          setIsAutoPlaying(false);
        });
      }
    }
  }, [isAutoPlaying, isPlaying, activeStory]);

  const handleStorySelect = useCallback(
    (index: number) => {
      setUserInteracted(true);

      // Pause current video
      const currentVideo = videoRefs.current[activeStory];
      if (currentVideo) {
        currentVideo.pause();
      }

      // Reset progress and switch story
      setActiveStory(index);
      setProgress(0);
      setCurrentTime(0);
      setIsPlaying(false);

      // Reset new video to start
      const newVideo = videoRefs.current[index];
      if (newVideo) {
        newVideo.currentTime = 0;
      }
    },
    [activeStory],
  );

  const nextStory = useCallback(() => {
    setUserInteracted(true);
    const nextIndex = (activeStory + 1) % stories.length;
    handleStorySelect(nextIndex);
  }, [activeStory, stories.length, handleStorySelect]);

  const prevStory = useCallback(() => {
    setUserInteracted(true);
    const prevIndex = (activeStory - 1 + stories.length) % stories.length;
    handleStorySelect(prevIndex);
  }, [activeStory, stories.length, handleStorySelect]);

  const seekTo = useCallback(
    (percentage: number) => {
      setUserInteracted(true);
      const video = videoRefs.current[activeStory];
      if (video && video.duration) {
        video.currentTime = (percentage / 100) * video.duration;
        setProgress(percentage);
        setCurrentTime(video.currentTime);
      }
    },
    [activeStory],
  );

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <section
      className="relative py-6 md:py-12 lg:py-20 overflow-hidden"
      style={{ backgroundColor: secondaryColor }}
    >
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <div
            className="inline-flex items-center px-4 py-2 rounded-full mb-4 md:mb-6"
            style={{ backgroundColor: primaryColor, color: "white" }}
          >
            <Heart className="w-4 h-4 mr-2" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Community Impact Stories
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight ${bebasNeue.className}`}
            style={{ color: primaryColor }}
          >
            Lives Transformed
            <span className="block" style={{ color: accentColor }}>
              By Compassion
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 ${poppins.className}`}
          >
            Witness the powerful stories of hope, dignity, and community coming
            together to support our most vulnerable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start">
          {/* Mobile Story Navigation (Top) */}
          {isMobile && (
            <div className="order-1 mb-4">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={prevStory}
                  className="p-2 rounded-full hover:scale-105 active:scale-95 transition-transform"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3
                  className={`text-lg font-semibold text-center px-4 ${poppins.className}`}
                  style={{ color: primaryColor }}
                >
                  {stories[activeStory].title}
                </h3>
                <button
                  onClick={nextStory}
                  className="p-2 rounded-full hover:scale-105 active:scale-95 transition-transform"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-center space-x-2 mb-4">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStorySelect(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      activeStory === index
                        ? "scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    style={{
                      backgroundColor:
                        activeStory === index ? primaryColor : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Story Content with Video */}
          <div
            ref={containerRef}
            className={`relative ${isMobile ? "order-2" : "xl:order-2 xl:col-span-8"} mb-6 xl:mb-0`}
          >
            <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl lg:shadow-2xl overflow-hidden bg-white">
              {/* Video Container */}
              <div className="relative aspect-[4/3] md:aspect-video bg-black">
                <video
                  ref={(el) => {
                    videoRefs.current[activeStory] = el;
                  }}
                  src={stories[activeStory].video}
                  className="w-full h-full object-cover"
                  poster={stories[activeStory].thumbnail}
                  playsInline
                  preload="metadata"
                  onClick={togglePlay}
                />

                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                )}

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                  {/* Progress Bar with Seek */}
                  <div className="relative mb-3 md:mb-4">
                    <div
                      className="h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percentage =
                          ((e.clientX - rect.left) / rect.width) * 100;
                        seekTo(percentage);
                      }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-100"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: secondaryColor,
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span
                        className={`text-xs text-white ${poppins.className}`}
                      >
                        {formatTime(currentTime)}
                      </span>
                      <span
                        className={`text-xs text-white/80 ${poppins.className}`}
                      >
                        {formatTime(duration)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/20 hover:bg-white/30 transition-colors hover:scale-105 active:scale-95"
                        title={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        ) : (
                          <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" />
                        )}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/20 hover:bg-white/30 transition-colors hover:scale-105 active:scale-95"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        ) : (
                          <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        )}
                      </button>
                      <button
                        onClick={nextStory}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/20 hover:bg-white/30 transition-colors hover:scale-105 active:scale-95"
                        title="Next story"
                      >
                        <SkipForward className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <button
                        onClick={toggleFullscreen}
                        className="p-1.5 md:p-2 rounded-lg backdrop-blur-sm bg-white/20 hover:bg-white/30 transition-colors hover:scale-105 active:scale-95"
                        title="Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Auto-play Status */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={toggleAutoPlay}
                    className={`px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2 transition-all ${poppins.className} ${
                      isAutoPlaying
                        ? "bg-green-500/20 text-green-300 hover:bg-green-500/30"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                    title={
                      isAutoPlaying ? "Turn off autoplay" : "Turn on autoplay"
                    }
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-white/60"}`}
                    />
                    <span className="text-xs font-medium">
                      {isAutoPlaying ? "Auto" : "Manual"}
                    </span>
                  </button>
                </div>

                {/* Story Title Overlay */}
                {!isMobile && (
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6">
                    <div
                      className="inline-flex items-center px-3 py-1 rounded-full backdrop-blur-sm mb-2 md:mb-3"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <span
                        className={`text-xs font-medium text-white ${poppins.className}`}
                      >
                        Featured Story
                      </span>
                    </div>
                    <h3
                      className={`text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white ${bebasNeue.className}`}
                    >
                      {stories[activeStory].title}
                    </h3>
                  </div>
                )}
              </div>

              {/* Story Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-4 md:p-6 lg:p-8"
                >
                  {/* Impact Metrics */}
                  <div
                    className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8 p-3 md:p-4 rounded-lg md:rounded-xl"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <div className="text-center">
                      <div
                        className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        {stories[activeStory].metrics.volunteers}
                      </div>
                      <div
                        className={`text-xs md:text-sm ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        Volunteers
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        {stories[activeStory].metrics.duration}
                      </div>
                      <div
                        className={`text-xs md:text-sm ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        Duration
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-sm md:text-base lg:text-lg font-bold mb-1 ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        {stories[activeStory].metrics.impact}
                      </div>
                      <div
                        className={`text-xs md:text-sm ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        Impact
                      </div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="relative">
                    <div
                      className="absolute -left-2 md:-left-4 top-0 text-3xl md:text-4xl lg:text-5xl"
                      style={{ color: secondaryColor }}
                    >
                      "
                    </div>
                    <p
                      className={`text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6 pl-4 md:pl-6 ${poppins.className}`}
                    >
                      {stories[activeStory].content}
                    </p>

                    {/* Quote */}
                    <div
                      className="border-l-4 pl-3 md:pl-4 my-4 md:my-6 lg:my-8"
                      style={{ borderColor: primaryColor }}
                    >
                      <p
                        className={`italic text-base md:text-lg ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        "{stories[activeStory].quote}"
                      </p>
                    </div>
                  </div>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="border-t border-gray-200 pt-4 md:pt-6 lg:pt-8"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 flex-shrink-0"
                        style={{ borderColor: secondaryColor }}
                      >
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`font-bold text-gray-900 text-base md:text-lg truncate ${bebasNeue.className}`}
                        >
                          {stories[activeStory].author}
                        </p>
                        <div className="flex flex-wrap items-center gap-1 md:gap-2">
                          <span
                            className={`font-medium text-sm md:text-base truncate ${poppins.className}`}
                            style={{ color: primaryColor }}
                          >
                            {stories[activeStory].role}
                          </span>
                          <span className="text-gray-400 hidden md:block">
                            •
                          </span>
                          <span
                            className={`text-gray-600 text-xs md:text-sm truncate ${poppins.className}`}
                          >
                            {stories[activeStory].location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots for Desktop */}
              {!isMobile && (
                <div className="flex justify-center space-x-2 pb-4 md:pb-6 lg:pb-8 px-4 md:px-6 lg:px-8">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleStorySelect(index)}
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-200 ${
                        activeStory === index
                          ? "scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      style={{
                        backgroundColor:
                          activeStory === index ? primaryColor : undefined,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Auto-play and Mute Controls */}
            <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 flex-wrap">
              <button
                onClick={toggleAutoPlay}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-200 ${poppins.className} ${
                  isAutoPlaying
                    ? "bg-green-500/10 text-green-700 border border-green-500/30"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full mr-2 ${isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-500"}`}
                />
                <span className="text-xs md:text-sm font-medium">
                  {isAutoPlaying ? "Autoplay: ON" : "Autoplay: OFF"}
                </span>
              </button>

              <button
                onClick={toggleMute}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-200 ${poppins.className} ${
                  isMuted
                    ? "bg-red-500/10 text-red-700 border border-red-500/30"
                    : "bg-blue-500/10 text-blue-700 border border-blue-500/30"
                }`}
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 mr-2" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 mr-2" />
                )}
                <span className="text-xs md:text-sm font-medium">
                  {isMuted ? "Muted" : "Unmuted"}
                </span>
              </button>

              <div className="text-xs text-gray-600 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTime(duration)} per story</span>
              </div>
            </div>
          </div>

          {/* Story Navigation (Desktop) */}
          {!isMobile && (
            <div className="space-y-3 md:space-y-4 lg:space-y-6 xl:order-1 xl:col-span-4">
              <div className="flex items-center justify-between mb-2">
                <h3
                  className={`font-bold ${bebasNeue.className}`}
                  style={{ color: primaryColor }}
                >
                  More Stories
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevStory}
                    className="p-1.5 rounded-full hover:scale-105 active:scale-95 transition-transform"
                    style={{
                      backgroundColor: secondaryColor,
                      color: primaryColor,
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextStory}
                    className="p-1.5 rounded-full hover:scale-105 active:scale-95 transition-transform"
                    style={{
                      backgroundColor: secondaryColor,
                      color: primaryColor,
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {stories.map((story, index) => (
                <motion.div
                  key={story.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative rounded-lg md:rounded-xl lg:rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                    activeStory === index
                      ? "ring-2 shadow-lg md:shadow-xl"
                      : "shadow-md hover:shadow-lg"
                  }`}
                  style={{
                    backgroundColor:
                      activeStory === index ? "white" : secondaryColor,
                    borderColor:
                      activeStory === index ? primaryColor : "transparent",
                    borderWidth: activeStory === index ? "2px" : "0px",
                  }}
                  onClick={() => handleStorySelect(index)}
                >
                  <div className="p-3 md:p-4 lg:p-5">
                    <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                      {/* Thumbnail */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden">
                        <Image
                          src={story.thumbnail}
                          alt={story.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            style={{
                              backgroundColor: primaryColor,
                              opacity: 0.9,
                            }}
                          >
                            <Play className="w-3 h-3 md:w-4 md:h-4 text-white ml-0.5" />
                          </div>
                        </div>
                        {activeStory === index && isPlaying && (
                          <div className="absolute top-2 right-2">
                            <div className="w-6 h-6 rounded-full bg-green-500/90 flex items-center justify-center animate-pulse">
                              <div className="w-3 h-3 bg-white rounded-full" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1 md:mb-2">
                          <h3
                            className={`font-semibold text-sm md:text-base lg:text-lg leading-tight truncate pr-2 ${poppins.className}`}
                            style={{
                              color:
                                activeStory === index
                                  ? primaryColor
                                  : "#374151",
                            }}
                          >
                            {story.title}
                          </h3>
                          {activeStory === index && (
                            <div
                              className="w-2 h-2 rounded-full animate-pulse ml-1 flex-shrink-0"
                              style={{ backgroundColor: primaryColor }}
                            />
                          )}
                        </div>

                        <p
                          className={`text-xs md:text-sm leading-relaxed mb-1 md:mb-2 line-clamp-2 ${poppins.className}`}
                          style={{
                            color:
                              activeStory === index ? "#4B5563" : "#6B7280",
                          }}
                        >
                          {story.excerpt}
                        </p>

                        <div className="flex items-center gap-2 md:gap-3 mt-1 md:mt-2">
                          <div
                            className="flex items-center text-xs"
                            style={{ color: accentColor }}
                          >
                            <Users className="w-3 h-3 mr-1" />
                            <span>{story.metrics.volunteers} volunteers</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{story.metrics.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {activeStory === index && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-gray-200 rounded-b-xl overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                          transition={{
                            duration: 0.1,
                          }}
                          className="h-full rounded-b-xl"
                          style={{ backgroundColor: primaryColor }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-8 md:mt-12 lg:mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <p
              className={`text-gray-700 mb-4 md:mb-6 text-base md:text-lg ${poppins.className}`}
            >
              Every story matters. Every life touched creates ripples of hope
              throughout our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: primaryColor, color: "white" }}
              >
                <span
                  className={`flex items-center justify-center gap-2 ${poppins.className}`}
                >
                  <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  Become a Volunteer
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all border-2"
                style={{
                  backgroundColor: "white",
                  color: primaryColor,
                  borderColor: primaryColor,
                }}
              >
                <span
                  className={`flex items-center justify-center gap-2 ${poppins.className}`}
                >
                  <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                  Share These Stories
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;
