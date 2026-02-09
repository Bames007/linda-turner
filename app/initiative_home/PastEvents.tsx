// components/Sections/PastEvents.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { bebasNeue, poppins } from "../utils/constants";
import {
  Calendar,
  MapPin,
  Users,
  Heart,
  Shield,
  Utensils,
  Play,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const PastEvents = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [activeMedia, setActiveMedia] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

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

  const pastEvents = useMemo(
    () => [
      {
        id: 1,
        title: "Breaking the Silence: Gender-Based Violence Awareness",
        subtitle: "Empowering survivors, educating communities",
        date: "March 15, 2023",
        location: "Community Center, Downtown",
        description:
          "A powerful month-long campaign focused on raising awareness about gender-based violence in our community. We provided safe spaces for survivors to share their stories, offered counseling services, and educated over 500 community members on prevention and support systems.",
        longDescription:
          "This transformative initiative brought together survivors, advocates, and community leaders for a month of healing and education. Through workshops, support groups, and public forums, we created a network of support that continues to help survivors today. The event culminated in a powerful candlelight vigil where over 300 community members stood in solidarity.",
        impactStats: [
          { label: "Survivors Supported", value: "85+", icon: Shield },
          { label: "Educational Workshops", value: "24", icon: BookOpen },
          { label: "Community Reach", value: "500+", icon: Users },
          { label: "Volunteers Mobilized", value: "45", icon: Heart },
        ],
        media: [
          {
            type: "image",
            src: "/images/image4.jpeg",
            alt: "GBV Awareness Workshop",
          },
          {
            type: "image",
            src: "/images/image6.jpeg",
            alt: "Community Forum",
          },
          {
            type: "video",
            src: "/videos/video5.mp4",
            thumbnail: "/images/image3.jpeg",
            alt: "Event Highlights",
          },
          {
            type: "image",
            src: "/images/image1.jpeg",
            alt: "Candlelight Vigil",
          },
        ],
        testimonial: {
          quote:
            "For the first time, I felt heard and supported. This event gave me the courage to speak up and seek help.",
          author: "Sarah M.",
          role: "Survivor & Advocate",
        },
        outcomes: [
          "Established permanent support groups",
          "Trained 20 community counselors",
          "Created emergency response protocol",
          "Launched 24/7 helpline service",
        ],
      },
      {
        id: 2,
        title: "Operation Feed the Food",
        subtitle: "Fighting hunger, one meal at a time",
        date: "December 10-24, 2023",
        location: "Multiple locations across the city",
        description:
          "Our annual holiday initiative that brought together volunteers to prepare and distribute nutritious meals to families in need. For two weeks, we served hot meals daily and delivered food packages to elderly and disabled community members.",
        longDescription:
          "This massive community effort mobilized over 200 volunteers working in shifts to prepare, package, and deliver meals. We partnered with local farms for fresh produce and restaurants for kitchen space. The operation didn't just provide food—it created a sense of community and shared responsibility that continues to grow.",
        impactStats: [
          { label: "Meals Served", value: "5,200+", icon: Utensils },
          { label: "Families Fed", value: "850", icon: Users },
          { label: "Food Packages", value: "1,200", icon: Heart },
          { label: "Volunteer Hours", value: "3,500+", icon: Calendar },
        ],
        media: [
          {
            type: "image",
            src: "/images/image6.jpeg",
            alt: "Volunteers preparing meals",
          },
          {
            type: "video",
            src: "/videos/video6.mp4",
            thumbnail: "/images/hero3.jpeg",
            alt: "Operation Highlights",
          },
          {
            type: "image",
            src: "/images/image4.jpeg",
            alt: "Food distribution",
          },
          {
            type: "image",
            src: "/images/image5.jpeg",
            alt: "Community meal",
          },
        ],
        testimonial: {
          quote:
            "This Christmas was the first time in years my family had a proper holiday meal. The kindness shown to us was overwhelming.",
          author: "James T.",
          role: "Community Member",
        },
        outcomes: [
          "Established ongoing food bank partnership",
          "Created weekly community kitchen",
          "Trained 50 volunteers in food safety",
          "Developed sustainable sourcing network",
        ],
      },
      {
        id: 3,
        title: "Adopt a Grandma",
        subtitle: "Bridging generations, warming hearts",
        date: "Ongoing since January 2023",
        location: "Homes across the community",
        description:
          "Our intergenerational program that matches isolated elderly community members with caring volunteers who provide companionship, assistance, and regular check-ins. The program has created beautiful friendships and dramatically reduced loneliness among our seniors.",
        longDescription:
          "What started as a simple companionship program has grown into a community-wide movement. Each 'adoption' creates a unique bond—volunteers help with errands, share meals, and most importantly, provide regular companionship. The program has expanded to include health check-ups, technology training, and social events specifically for our elderly community members.",
        impactStats: [
          { label: "Elders Supported", value: "120+", icon: Heart },
          { label: "Volunteer Matches", value: "150", icon: Users },
          { label: "Regular Visits", value: "3,000+", icon: Calendar },
          { label: "Social Events", value: "45", icon: MapPin },
        ],
        media: [
          {
            type: "video",
            src: "/videos/video3.mp4",
            thumbnail: "/images/image1.jpeg",
            alt: "Program Highlights",
          },
          {
            type: "image",
            src: "/images/image2.jpeg",
            alt: "Intergenerational bonding",
          },
          {
            type: "image",
            src: "/images/image3.jpeg",
            alt: "Technology training session",
          },
          {
            type: "image",
            src: "/images/image4.jpeg",
            alt: "Community celebration",
          },
        ],
        testimonial: {
          quote:
            "My volunteer, Maria, is like the granddaughter I never had. She visits me every week and we share stories and laughter.",
          author: "Grandma Rose, 82",
          role: "Program Participant",
        },
        outcomes: [
          "94% reduction in reported loneliness",
          "Established emergency response system",
          "Created intergenerational learning program",
          "Developed health monitoring partnerships",
        ],
      },
    ],
    [],
  );

  const currentEvent = pastEvents[activeEvent];
  const currentMedia = currentEvent.media[activeMedia];

  const nextMedia = () => {
    setActiveMedia((prev) => (prev + 1) % currentEvent.media.length);
    setIsVideoPlaying(false);
  };

  const prevMedia = () => {
    setActiveMedia(
      (prev) =>
        (prev - 1 + currentEvent.media.length) % currentEvent.media.length,
    );
    setIsVideoPlaying(false);
  };

  return (
    <section className="relative py-8 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
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
            <Calendar className="w-4 h-4 mr-2" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Our Impact Journey
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight ${bebasNeue.className}`}
            style={{ color: primaryColor }}
          >
            Past Events That
            <span className="block" style={{ color: accentColor }}>
              Changed Lives
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 ${poppins.className}`}
          >
            Witness how our community comes together to create lasting change
            through compassion and collective action
          </p>
        </motion.div>

        {/* Mobile Event Navigation */}
        {isMobile ? (
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
              {pastEvents.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => {
                    setActiveEvent(index);
                    setActiveMedia(0);
                    setIsVideoPlaying(false);
                    setShowFullDescription(false);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap flex-shrink-0 transition-all duration-300 ${poppins.className} ${
                    activeEvent === index
                      ? "shadow-md transform scale-105"
                      : "hover:shadow-sm"
                  }`}
                  style={{
                    backgroundColor:
                      activeEvent === index ? primaryColor : secondaryColor,
                    color: activeEvent === index ? "white" : primaryColor,
                  }}
                >
                  {event.title.split(":")[0]}
                </button>
              ))}
            </div>
            <div className="flex justify-center space-x-1">
              {pastEvents.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeEvent === index ? "bg-primary" : "bg-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      activeEvent === index ? primaryColor : "#E5E7EB",
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Event Navigation */
          <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
            {pastEvents.map((event, index) => (
              <button
                key={event.id}
                onClick={() => {
                  setActiveEvent(index);
                  setActiveMedia(0);
                  setIsVideoPlaying(false);
                }}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-medium md:font-semibold transition-all duration-300 ${poppins.className} ${
                  activeEvent === index
                    ? "shadow-lg transform scale-105"
                    : "hover:shadow-md"
                }`}
                style={{
                  backgroundColor:
                    activeEvent === index ? primaryColor : secondaryColor,
                  color: activeEvent === index ? "white" : primaryColor,
                }}
              >
                {event.title.split(":")[0]}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Media Gallery */}
          <div className="relative">
            {/* Main Media Display */}
            <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl bg-black aspect-[4/3]">
              {currentMedia.type === "video" ? (
                <div className="relative w-full h-full">
                  <video
                    src={currentMedia.src}
                    className="w-full h-full object-cover"
                    poster={currentMedia.thumbnail}
                    controls={false}
                    muted={isMuted}
                    autoPlay={isVideoPlaying}
                    loop
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  />
                  {/* Custom Video Controls */}
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                      <button
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/50 hover:bg-black/70 transition-colors"
                      >
                        {isVideoPlaying ? (
                          <div className="w-3 h-3 md:w-4 md:h-4 bg-white" />
                        ) : (
                          <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" />
                        )}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/50 hover:bg-black/70 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        ) : (
                          <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs md:text-sm font-medium backdrop-blur-sm bg-black/50 px-2 py-1 md:px-3 md:py-1 rounded-full">
                        {activeMedia + 1} / {currentEvent.media.length}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={prevMedia}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/50 hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/50 hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </button>

              {/* Media Indicator */}
              <div className="absolute top-3 md:top-4 left-3 md:left-4">
                <div
                  className="flex items-center px-2 py-1 md:px-3 md:py-1.5 rounded-full backdrop-blur-sm"
                  style={{ backgroundColor: primaryColor }}
                >
                  <span
                    className={`text-xs font-medium text-white ${poppins.className}`}
                  >
                    {currentMedia.type === "video" ? "VIDEO" : "PHOTO"}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 md:gap-3 mt-3 md:mt-4 lg:mt-6">
              {currentEvent.media.map((media, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveMedia(index);
                    setIsVideoPlaying(false);
                  }}
                  className={`relative flex-1 aspect-square rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 ${
                    activeMedia === index
                      ? "transform scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  style={{
                    border:
                      activeMedia === index
                        ? `3px solid ${primaryColor}`
                        : "none",
                  }}
                >
                  <div className="relative w-full h-full">
                    {media.type === "video" ? (
                      <>
                        <Image
                          src={media.thumbnail || "/image1.jpeg"}
                          alt={media.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 20vw, 10vw"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                      </>
                    ) : (
                      <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 20vw, 10vw"
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {/* Event Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
                <div
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                  style={{ backgroundColor: secondaryColor }}
                >
                  <span
                    className={`text-xs md:text-sm font-medium md:font-semibold ${poppins.className}`}
                    style={{ color: primaryColor }}
                  >
                    {currentEvent.date}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  <span className={`text-xs md:text-sm ${poppins.className}`}>
                    {currentEvent.location}
                  </span>
                </div>
              </div>

              <h3
                className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-3 lg:mb-4 leading-snug ${bebasNeue.className}`}
                style={{ color: primaryColor }}
              >
                {currentEvent.title}
              </h3>
              <p
                className={`text-base md:text-lg lg:text-xl font-medium mb-4 md:mb-6 ${poppins.className}`}
                style={{ color: accentColor }}
              >
                {currentEvent.subtitle}
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
              {currentEvent.impactStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 text-center shadow-sm md:shadow-md border border-gray-100"
                >
                  <div className="flex justify-center mb-2">
                    <div
                      className="p-1.5 md:p-2 rounded-lg"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      <stat.icon
                        className="w-4 h-4 md:w-5 md:h-5"
                        style={{ color: primaryColor }}
                      />
                    </div>
                  </div>
                  <div
                    className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 ${bebasNeue.className}`}
                    style={{ color: primaryColor }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs text-gray-600 leading-tight ${poppins.className}`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Event Description */}
            <div>
              <p
                className={`text-gray-700 leading-relaxed mb-3 md:mb-4 ${poppins.className} ${
                  isMobile && !showFullDescription ? "line-clamp-3" : ""
                }`}
              >
                {currentEvent.description}
                {!isMobile && currentEvent.longDescription}
              </p>

              {isMobile && (
                <>
                  {showFullDescription && (
                    <p
                      className={`text-gray-700 leading-relaxed mb-3 ${poppins.className}`}
                    >
                      {currentEvent.longDescription}
                    </p>
                  )}
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="flex items-center text-sm font-medium"
                    style={{ color: primaryColor }}
                  >
                    {showFullDescription ? "Read Less" : "Read More"}
                    {showFullDescription ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </button>
                </>
              )}
            </div>

            {/* Testimonial */}
            <div
              className="rounded-xl md:rounded-2xl p-4 md:p-6 relative overflow-hidden"
              style={{ backgroundColor: secondaryColor }}
            >
              <div
                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 text-4xl md:text-5xl lg:text-6xl opacity-10"
                style={{ color: primaryColor }}
              >
                "
              </div>
              <p
                className={`text-base md:text-lg italic mb-3 md:mb-4 relative z-10 ${poppins.className}`}
                style={{ color: primaryColor }}
              >
                "{currentEvent.testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`font-bold ${bebasNeue.className}`}
                    style={{ color: accentColor }}
                  >
                    {currentEvent.testimonial.author}
                  </p>
                  <p
                    className={`text-xs md:text-sm ${poppins.className}`}
                    style={{ color: primaryColor }}
                  >
                    {currentEvent.testimonial.role}
                  </p>
                </div>
                <Heart
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: primaryColor }}
                />
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h4
                className={`text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 ${bebasNeue.className}`}
                style={{ color: primaryColor }}
              >
                Lasting Impact
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {currentEvent.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-2 mr-2 md:mr-3 flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    />
                    <span
                      className={`text-gray-700 text-sm md:text-base ${poppins.className}`}
                    >
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-8 md:mt-12 lg:mt-16"
        >
          <div className="max-w-2xl md:max-w-3xl mx-auto">
            <h3
              className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 ${bebasNeue.className}`}
              style={{ color: primaryColor }}
            >
              Be Part of Our Next Success Story
            </h3>
            <p
              className={`text-gray-700 mb-4 md:mb-6 lg:mb-8 text-base md:text-lg ${poppins.className}`}
            >
              Join hundreds of volunteers who are making a real difference in
              our community. Your time and compassion can create stories that
              inspire generations to come.
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
                  Volunteer for Next Event
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
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  View Event Calendar
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PastEvents;
