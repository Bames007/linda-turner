// components/Sections/Patrons.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { bebasNeue, poppins } from "../utils/constants";
import {
  Crown,
  Star,
  Award,
  Heart,
  Users,
  Sparkles,
  ChevronRight,
  Trophy,
  Shield,
  Globe,
  Banknote,
  Gift,
  Briefcase,
  CheckCircle,
  Quote,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

const Patrons = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activePatron, setActivePatron] = useState(0);

  const primaryColor = "#691C33";
  const secondaryColor = "#FFE6EE";
  const accentColor = "#8A2E4D";

  const patronImages = [
    "/images/hero.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
  ];

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const patrons = [
    {
      id: 1,
      name: "Goodluck Jonathan",
      title: "Grand Patron",
      role: "Philanthropist & Business Leader",
      contribution: "₦500M+",
      category: "Leadership & Vision",
      description:
        "Visionary leader whose generous contributions have transformed thousands of lives through sustainable community initiatives.",
      impact: [
        "Funded 5 community centers",
        "Supported 10,000 families",
        "Established youth scholarship fund",
      ],
      quote:
        "True wealth is measured by the lives you touch and the communities you build.",
      // Get image using modulus to alternate through 5 images
      image: patronImages[0 % patronImages.length], // image1.jpeg
      color: "#FFD700",
      featured: true,
    },
    {
      id: 2,
      name: "Aliko Dangote",
      title: "Principal Patron",
      role: "Industrialist & Philanthropist",
      contribution: "₦250M+",
      category: "Economic Empowerment",
      description:
        "Champion of economic empowerment through strategic investments in food security and nutrition programs.",
      impact: [
        "Built 3 food banks",
        "Created 500 jobs",
        "Supported agricultural training",
      ],
      quote:
        "Empowering communities begins with ensuring their basic needs are met.",
      image: patronImages[1 % patronImages.length], // image2.jpeg
      color: "#4169E1",
      featured: false,
    },
    {
      id: 3,
      name: "Folorunsho Alakija",
      title: "Distinguished Patron",
      role: "Businesswoman & Philanthropist",
      contribution: "₦180M+",
      category: "Women Empowerment",
      description:
        "Dedicated advocate for women's economic empowerment and gender equality initiatives.",
      impact: [
        "Trained 1,000 women entrepreneurs",
        "Established 2 vocational centers",
        "Provided startup grants",
      ],
      quote: "When you empower a woman, you empower a community.",
      image: patronImages[2 % patronImages.length], // image3.jpeg
      color: "#FF1493",
      featured: false,
    },
    {
      id: 4,
      name: "Tony Elumelu",
      title: "Strategic Patron",
      role: "Investor & Philanthropist",
      contribution: "₦200M+",
      category: "Youth Development",
      description:
        "Pioneer of youth entrepreneurship and leadership development across Nigeria.",
      impact: [
        "Mentored 750 young leaders",
        "Funded 100 startups",
        "Created innovation hubs",
      ],
      quote: "The future of Africa lies in the hands of our empowered youth.",
      image: patronImages[3 % patronImages.length], // image4.jpeg
      color: "#32CD32",
      featured: false,
    },
    {
      id: 5,
      name: "Herbert Wigwe",
      title: "Visionary Patron",
      role: "Banking Executive & Philanthropist",
      contribution: "₦150M+",
      category: "Education Reform",
      description:
        "Transformative leader in educational reform and access to quality learning.",
      impact: [
        "Renovated 15 schools",
        "Provided 5,000 scholarships",
        "Established digital libraries",
      ],
      quote: "Education is the most powerful weapon for changing the world.",
      image: patronImages[4 % patronImages.length], // image5.jpeg
      color: "#9370DB",
      featured: false,
    },
    {
      id: 6,
      name: "Amina Mohammed",
      title: "Global Patron",
      role: "UN Deputy Secretary-General",
      contribution: "Strategic Leadership",
      category: "Sustainable Development",
      description:
        "Global advocate for sustainable development and community resilience building.",
      impact: [
        "International partnerships",
        "Policy advocacy",
        "Sustainable initiatives",
      ],
      quote: "Sustainable development begins at the community level.",
      // Cycle back to first image since we only have 5 images
      image: patronImages[0 % patronImages.length], // image1.jpeg
      color: "#20B2AA",
      featured: false,
    },
  ];

  const patronBenefits = [
    {
      icon: Trophy,
      title: "Recognition",
      description:
        "Featured recognition across our platforms and annual reports",
      level: "All Levels",
    },
    {
      icon: Globe,
      title: "Impact Reports",
      description:
        "Detailed quarterly reports on how your contribution creates change",
      level: "Principal+",
    },
    {
      icon: Users,
      title: "Exclusive Events",
      description: "Invitations to private events with community leaders",
      level: "Distinguished+",
    },
    {
      icon: Shield,
      title: "Advisory Role",
      description: "Opportunity to advise on program direction and strategy",
      level: "Strategic+",
    },
    {
      icon: Banknote,
      title: "Tax Benefits",
      description: "Full tax deduction for all charitable contributions",
      level: "All Levels",
    },
    {
      icon: Gift,
      title: "Naming Rights",
      description: "Opportunity to name programs and facilities",
      level: "Principal+",
    },
  ];

  const currentPatron = patrons[activePatron];

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
            <Crown className="w-4 h-4 mr-2" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Visionary Supporters
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight ${bebasNeue.className}`}
            style={{ color: primaryColor }}
          >
            Our Esteemed
            <span className="block" style={{ color: accentColor }}>
              Patrons & Supporters
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 ${poppins.className}`}
          >
            Visionary individuals whose generosity and leadership fuel our
            mission and amplify our impact across communities.
          </p>
        </motion.div>

        {/* Grand Patron Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden">
            <div
              className="p-4 md:p-6 lg:p-8"
              style={{ backgroundColor: secondaryColor }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                {/* Grand Patron Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-1 flex items-center justify-center bg-gray-200 relative">
                      <Image
                        src={patrons[0].image}
                        alt={patrons[0].name}
                        fill
                        sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                        className="object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            const fallbackDiv = document.createElement("div");
                            fallbackDiv.className =
                              "w-full h-full flex items-center justify-center";
                            fallbackDiv.style.backgroundColor =
                              patrons[0].color;
                            fallbackDiv.innerHTML = `
                              <div class="text-center">
                                <Crown class="w-8 h-8 text-white mx-auto mb-1" />
                                <span class="text-xs text-white font-medium">${patrons[0].name.split(" ")[0]}</span>
                              </div>
                            `;
                            parent.appendChild(fallbackDiv);
                          }
                        }}
                      />
                      <div
                        className="absolute inset-0 border-1"
                        style={{
                          borderColor: primaryColor,
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <Crown className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
                    <div
                      className="px-3 py-1 rounded-full flex items-center gap-2"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <Crown className="w-3 h-3 text-white" />
                      <span
                        className={`text-xs md:text-sm font-medium text-white ${poppins.className}`}
                      >
                        Grand Patron
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles
                        className="w-4 h-4 mr-1"
                        style={{ color: accentColor }}
                      />
                      <span
                        className={`text-xs md:text-sm font-medium ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        Leading Visionary
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${bebasNeue.className}`}
                    style={{ color: primaryColor }}
                  >
                    Goodluck Jonathan
                  </h3>
                  <p
                    className={`text-base md:text-lg font-medium mb-3 ${poppins.className}`}
                    style={{ color: accentColor }}
                  >
                    Philanthropist & Business Leader
                  </p>
                  <p
                    className={`text-sm md:text-base text-gray-700 mb-4 max-w-3xl ${poppins.className}`}
                  >
                    Visionary leader whose generous contributions have
                    transformed thousands of lives through sustainable community
                    initiatives.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <div className="text-center">
                      <div
                        className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        ₦500M+
                      </div>
                      <div
                        className={`text-xs md:text-sm ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        Total Contribution
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        50K+
                      </div>
                      <div
                        className={`text-xs md:text-sm ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        Lives Impacted
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        5+
                      </div>
                      <div
                        className={`text-xs md:text-sm ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        Years Supporting
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Details */}
            <div className="p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                {patrons[0].impact.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-gray-50 rounded-lg p-4"
                  >
                    <div className="mr-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: patrons[0].color }}
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <span
                      className={`text-sm md:text-base ${poppins.className}`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div
                className="border-l-4 pl-4 md:pl-6 py-3 md:py-4 bg-gray-50 rounded-r-lg"
                style={{ borderColor: patrons[0].color }}
              >
                <div className="flex items-start">
                  <Quote
                    className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
                    style={{ color: patrons[0].color }}
                  />
                  <p
                    className={`italic text-base md:text-lg ${poppins.className}`}
                    style={{ color: accentColor }}
                  >
                    "{patrons[0].quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Patrons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          <h3
            className={`text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center ${bebasNeue.className}`}
            style={{ color: primaryColor }}
          >
            Distinguished Patrons
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {patrons.slice(1).map((patron, index) => (
              <motion.div
                key={patron.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                  activePatron === patron.id
                    ? "border-[#691C33]"
                    : "border-transparent"
                }`}
                onClick={() => setActivePatron(patron.id)}
              >
                <div className="p-4 md:p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200">
                          <Image
                            src={patron.image}
                            alt={patron.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                            onError={(e) => {
                              // Fallback if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const parent = target.parentElement;
                              if (parent) {
                                parent.style.backgroundColor = patron.color;
                                parent.innerHTML = `
                                  <div class="w-full h-full flex items-center justify-center">
                                    <div class="text-center">
                                      <User class="w-6 h-6 text-white mx-auto" />
                                      <span class="text-xs text-white">${patron.name.split(" ")[0].charAt(0)}</span>
                                    </div>
                                  </div>
                                `;
                              }
                            }}
                          />
                        </div>
                        <div>
                          <div
                            className="px-2 py-1 rounded-full text-xs font-medium mb-1"
                            style={{
                              backgroundColor: secondaryColor,
                              color: primaryColor,
                            }}
                          >
                            {patron.title}
                          </div>
                          <h4
                            className={`text-lg md:text-xl font-bold ${bebasNeue.className}`}
                            style={{ color: primaryColor }}
                          >
                            {patron.name}
                          </h4>
                        </div>
                      </div>
                      <p
                        className={`text-sm ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        {patron.role}
                      </p>
                    </div>
                    <Award
                      className="w-6 h-6"
                      style={{ color: patron.color }}
                    />
                  </div>

                  {/* Contribution */}
                  <div
                    className="p-3 rounded-lg mb-4"
                    style={{ backgroundColor: `${patron.color}15` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className={`text-xs font-medium ${poppins.className}`}
                          style={{ color: primaryColor }}
                        >
                          Contribution
                        </p>
                        <div
                          className={`text-lg font-bold ${bebasNeue.className}`}
                          style={{ color: patron.color }}
                        >
                          {patron.contribution}
                        </div>
                      </div>
                      <div
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: patron.color,
                          color: "white",
                        }}
                      >
                        {patron.category}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm text-gray-600 mb-4 line-clamp-3 ${poppins.className}`}
                  >
                    {patron.description}
                  </p>

                  {/* Impact Preview */}
                  <div className="space-y-2">
                    {patron.impact.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <Star
                          className="w-3 h-3 mr-2 flex-shrink-0"
                          style={{ color: patron.color }}
                        />
                        <span className={`text-xs ${poppins.className}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* View More Indicator */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span
                      className={`text-xs font-medium ${poppins.className}`}
                      style={{ color: patron.color }}
                    >
                      Click to view details
                    </span>
                    <ChevronRight
                      className="w-4 h-4"
                      style={{ color: patron.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Patron Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl p-4 md:p-6 lg:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 ${bebasNeue.className}`}
                style={{ color: primaryColor }}
              >
                Patron Benefits & Recognition
              </h3>
              <p
                className={`text-sm md:text-base text-gray-700 max-w-2xl mx-auto ${poppins.className}`}
              >
                Our patrons enjoy exclusive benefits and recognition based on
                their level of support and commitment to our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {patronBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg md:rounded-xl p-4 hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div
                      className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      <benefit.icon
                        className="w-5 h-5"
                        style={{ color: primaryColor }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4
                          className={`text-base md:text-lg font-bold ${bebasNeue.className}`}
                          style={{ color: primaryColor }}
                        >
                          {benefit.title}
                        </h4>
                        <span
                          className="px-2 py-1 rounded-full text-xs font-medium ml-2 flex-shrink-0"
                          style={{
                            backgroundColor: secondaryColor,
                            color: primaryColor,
                          }}
                        >
                          {benefit.level}
                        </span>
                      </div>
                      <p
                        className={`text-sm text-gray-600 ${poppins.className}`}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Summary */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4
                    className={`text-lg font-bold mb-4 ${bebasNeue.className}`}
                    style={{ color: primaryColor }}
                  >
                    Why Become a Patron?
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Direct impact on community transformation",
                      "Strategic influence on program direction",
                      "Networking with other visionary leaders",
                      "Enhanced corporate social responsibility profile",
                      "Legacy building through named initiatives",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle
                          className="w-4 h-4 mr-3 flex-shrink-0"
                          style={{ color: accentColor }}
                        />
                        <span className={`text-sm ${poppins.className}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4
                    className={`text-lg font-bold mb-4 ${bebasNeue.className}`}
                    style={{ color: primaryColor }}
                  >
                    Our Commitment to Patrons
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Transparent reporting on fund utilization",
                      "Regular updates on project milestones",
                      "Personalized impact assessments",
                      "Exclusive access to field visits",
                      "Recognition in all communications",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Shield
                          className="w-4 h-4 mr-3 flex-shrink-0"
                          style={{ color: accentColor }}
                        />
                        <span className={`text-sm ${poppins.className}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Become a Patron CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl"
            style={{ backgroundColor: primaryColor }}
          >
            <div className="p-6 md:p-8 lg:p-12 text-white">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col items-center mb-6 md:mb-8">
                  <Crown className="w-12 h-12 md:w-16 md:h-16 mb-4" />
                  <h3
                    className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 ${bebasNeue.className}`}
                  >
                    Join Our Circle of Visionaries
                  </h3>
                  <p className={`text-lg mb-6 md:mb-8 ${poppins.className}`}>
                    Become a patron and help shape the future of community
                    development while enjoying exclusive benefits and
                    recognition.
                  </p>
                </div>

                {/* Partnership Levels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-12">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                        <Star className="w-5 h-5" />
                      </div>
                      <h4 className={`font-bold ${bebasNeue.className}`}>
                        Grand Patron
                      </h4>
                    </div>
                    <p className={`text-sm mb-2 ${poppins.className}`}>
                      ₦100M+ annually
                    </p>
                    <p className={`text-xs opacity-80 ${poppins.className}`}>
                      Ultimate recognition & legacy impact
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                        <Award className="w-5 h-5" />
                      </div>
                      <h4 className={`font-bold ${bebasNeue.className}`}>
                        Principal Patron
                      </h4>
                    </div>
                    <p className={`text-sm mb-2 ${poppins.className}`}>
                      ₦25M - ₦100M annually
                    </p>
                    <p className={`text-xs opacity-80 ${poppins.className}`}>
                      Strategic influence & major recognition
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                        <Heart className="w-5 h-5" />
                      </div>
                      <h4 className={`font-bold ${bebasNeue.className}`}>
                        Supporting Patron
                      </h4>
                    </div>
                    <p className={`text-sm mb-2 ${poppins.className}`}>
                      ₦5M - ₦25M annually
                    </p>
                    <p className={`text-xs opacity-80 ${poppins.className}`}>
                      Meaningful impact & recognition
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-shadow"
                    style={{
                      backgroundColor: secondaryColor,
                      color: primaryColor,
                    }}
                  >
                    <span
                      className={`flex items-center justify-center gap-2 ${poppins.className}`}
                    >
                      <Crown className="w-4 h-4 md:w-5 md:h-5" />
                      Become a Patron
                    </span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all border-2"
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      borderColor: "white",
                    }}
                  >
                    <span
                      className={`flex items-center justify-center gap-2 ${poppins.className}`}
                    >
                      <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                      Download Patron Brochure
                    </span>
                  </motion.button>
                </div>

                <p className={`text-sm mt-6 opacity-80 ${poppins.className}`}>
                  Contact our Partnership Director for a confidential
                  discussion:
                  <a
                    href="mailto:partnership@lindahope.org"
                    className="underline ml-2"
                  >
                    partnership@lindahope.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Patrons;
