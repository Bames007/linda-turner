// components/Sections/BecomePartner.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { bebasNeue, poppins } from "../utils/constants";
import {
  Handshake,
  Target,
  Users,
  Award,
  CheckCircle,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  FileText,
  Shield,
  Globe,
  Building2,
  Heart,
  Star,
  ArrowRight,
} from "lucide-react";

const BecomePartner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

  const partnershipSteps = [
    {
      step: 1,
      title: "Initial Inquiry",
      description:
        "Submit partnership inquiry form or contact our partnership team",
      icon: Mail,
      duration: "1-2 days",
      details: [
        "Fill online inquiry form",
        "Schedule introductory call",
        "Share organization profile",
      ],
    },
    {
      step: 2,
      title: "Needs Assessment",
      description:
        "Our team assesses alignment and identifies collaboration opportunities",
      icon: Target,
      duration: "3-5 days",
      details: [
        "Review mission alignment",
        "Identify shared goals",
        "Assess resource compatibility",
      ],
    },
    {
      step: 3,
      title: "Proposal Development",
      description:
        "Co-create partnership proposal with mutual objectives and outcomes",
      icon: FileText,
      duration: "1-2 weeks",
      details: [
        "Define partnership scope",
        "Establish success metrics",
        "Create implementation plan",
      ],
    },
    {
      step: 4,
      title: "Agreement Finalization",
      description: "Review and sign partnership agreement with clear terms",
      icon: Shield,
      duration: "1 week",
      details: [
        "Legal review",
        "Budget finalization",
        "Sign partnership agreement",
      ],
    },
    {
      step: 5,
      title: "Launch & Implementation",
      description:
        "Kick-off partnership with joint announcement and project launch",
      icon: Users,
      duration: "Ongoing",
      details: [
        "Joint announcement",
        "Team orientation",
        "Project implementation",
      ],
    },
  ];

  const partnershipTypes = [
    {
      level: "Strategic Partner",
      investment: "₦10M+ annually",
      commitment: "3+ years",
      benefits: [
        "Naming rights for programs",
        "Board advisory role",
        "Annual impact report",
        "Exclusive event invitations",
      ],
      icon: Star,
    },
    {
      level: "Principal Partner",
      investment: "₦5M - ₦10M annually",
      commitment: "2+ years",
      benefits: [
        "Program co-branding",
        "Quarterly impact reports",
        "Site visit opportunities",
        "Recognition in annual report",
      ],
      icon: Award,
    },
    {
      level: "Supporting Partner",
      investment: "₦1M - ₦5M annually",
      commitment: "1+ year",
      benefits: [
        "Digital recognition",
        "Bi-annual updates",
        "Volunteer opportunities",
        "Partnership certificate",
      ],
      icon: Handshake,
    },
    {
      level: "Project Partner",
      investment: "Project-based",
      commitment: "6+ months",
      benefits: [
        "Project-specific recognition",
        "Progress reports",
        "Media mentions",
        "Partnership plaque",
      ],
      icon: Building2,
    },
  ];

  const successStories = [
    {
      partner: "Lagos State Government",
      partnership: "Since 2020",
      impact: "50,000+ lives impacted",
      quote:
        "This partnership has transformed community development across Lagos.",
      category: "Government",
    },
    {
      partner: "Dangote Foundation",
      partnership: "Since 2019",
      impact: "100,000+ meals provided",
      quote:
        "Working together has amplified our food security impact significantly.",
      category: "Corporate",
    },
    {
      partner: "MTN Foundation",
      partnership: "Since 2021",
      impact: "5,000+ youth trained",
      quote:
        "Digital inclusion partnerships create sustainable community change.",
      category: "Tech",
    },
  ];

  return (
    <section className="relative py-8 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
            <Globe className="w-4 h-4 mr-2" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Strategic Alliances
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight ${bebasNeue.className}`}
            style={{ color: primaryColor }}
          >
            Become a
            <span className="block" style={{ color: accentColor }}>
              Strategic Partner
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 ${poppins.className}`}
          >
            Join our network of impact-driven organizations and together create
            sustainable change that transforms communities.
          </p>
        </motion.div>

        {/* Partnership Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl p-4 md:p-6 lg:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 ${bebasNeue.className}`}
                style={{ color: primaryColor }}
              >
                Partnership Journey
              </h3>
              <p
                className={`text-gray-700 max-w-2xl mx-auto ${poppins.className}`}
              >
                Our streamlined process ensures alignment and sets the
                foundation for successful, long-term collaboration.
              </p>
            </div>

            {/* Steps - Mobile */}
            {isMobile ? (
              <div className="space-y-4">
                {partnershipSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      activeStep === index
                        ? "border-[#691C33] bg-[#FFE6EE]"
                        : "border-gray-200"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                          style={{
                            backgroundColor: primaryColor,
                            color: "white",
                          }}
                        >
                          <span
                            className={`text-sm font-bold ${bebasNeue.className}`}
                          >
                            {step.step}
                          </span>
                        </div>
                        <h4
                          className={`text-lg font-bold ${bebasNeue.className}`}
                          style={{ color: primaryColor }}
                        >
                          {step.title}
                        </h4>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          activeStep === index ? "transform rotate-90" : ""
                        }`}
                        style={{ color: primaryColor }}
                      />
                    </div>

                    {activeStep === index && (
                      <div className="pl-11">
                        <p
                          className={`text-sm text-gray-600 mb-3 ${poppins.className}`}
                        >
                          {step.description}
                        </p>
                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle
                                className="w-4 h-4 mr-2 flex-shrink-0"
                                style={{ color: accentColor }}
                              />
                              <span className={`text-sm ${poppins.className}`}>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <span
                            className={`text-xs font-medium ${poppins.className}`}
                            style={{ color: primaryColor }}
                          >
                            Duration: {step.duration}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* Steps - Desktop */
              <div className="relative">
                {/* Timeline Line */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden lg:block"
                  style={{ backgroundColor: secondaryColor }}
                />

                <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4">
                  {partnershipSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                        {/* Step Number */}
                        <div className="flex items-center justify-center mb-4">
                          <div
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-4"
                            style={{
                              backgroundColor: primaryColor,
                              borderColor: secondaryColor,
                            }}
                          >
                            <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <div className="mb-2">
                            <span
                              className="px-2 py-1 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: secondaryColor,
                                color: primaryColor,
                              }}
                            >
                              Step {step.step}
                            </span>
                          </div>
                          <h4
                            className={`text-lg md:text-xl font-bold mb-2 ${bebasNeue.className}`}
                            style={{ color: primaryColor }}
                          >
                            {step.title}
                          </h4>
                          <p
                            className={`text-sm text-gray-600 mb-4 ${poppins.className}`}
                          >
                            {step.description}
                          </p>
                          <div className="space-y-2 mb-4">
                            {step.details.map((detail, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-center"
                              >
                                <CheckCircle
                                  className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0"
                                  style={{ color: accentColor }}
                                />
                                <span
                                  className={`text-xs ${poppins.className}`}
                                >
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: secondaryColor,
                              color: primaryColor,
                            }}
                          >
                            <Calendar className="w-3 h-3 mr-1" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Partnership Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          <div className="text-center mb-6 md:mb-8">
            <h3
              className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 ${bebasNeue.className}`}
              style={{ color: primaryColor }}
            >
              Partnership Levels
            </h3>
            <p
              className={`text-gray-700 max-w-2xl mx-auto ${poppins.className}`}
            >
              Choose the partnership level that aligns with your organization's
              goals and capacity for impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                  index === 0 ? "ring-2 ring-offset-2" : ""
                }`}
                style={{
                  borderColor: index === 0 ? primaryColor : "transparent",
                }}
              >
                <div className="p-4 md:p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div
                        className="inline-flex items-center p-2 rounded-lg mb-3"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        <type.icon
                          className="w-5 h-5"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h4
                        className={`text-lg md:text-xl font-bold ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        {type.level}
                      </h4>
                    </div>
                    {index === 0 && (
                      <div className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Recommended
                      </div>
                    )}
                  </div>

                  {/* Investment */}
                  <div
                    className="p-3 rounded-lg mb-4"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <div className="text-center">
                      <div
                        className={`text-lg md:text-xl font-bold mb-1 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        {type.investment}
                      </div>
                      <div
                        className={`text-xs ${poppins.className}`}
                        style={{ color: accentColor }}
                      >
                        Minimum Investment
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <span
                        className={`text-xs font-medium ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        Commitment: {type.commitment}
                      </span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <p
                      className={`text-sm font-medium ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Key Benefits:
                    </p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle
                            className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                            style={{ color: accentColor }}
                          />
                          <span className={`text-sm ${poppins.className}`}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 py-2.5 rounded-lg font-medium text-sm transition-colors"
                    style={{
                      backgroundColor:
                        index === 0 ? primaryColor : secondaryColor,
                      color: index === 0 ? "white" : primaryColor,
                    }}
                  >
                    <span
                      className={`flex items-center justify-center gap-2 ${poppins.className}`}
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
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
                Partnership Success Stories
              </h3>
              <p
                className={`text-gray-700 max-w-2xl mx-auto ${poppins.className}`}
              >
                See how strategic partnerships have created lasting impact in
                communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: secondaryColor,
                        color: primaryColor,
                      }}
                    >
                      {story.category}
                    </div>
                    <span
                      className={`text-xs text-gray-500 ${poppins.className}`}
                    >
                      {story.partnership}
                    </span>
                  </div>

                  <h4
                    className={`text-lg md:text-xl font-bold mb-3 ${bebasNeue.className}`}
                    style={{ color: primaryColor }}
                  >
                    {story.partner}
                  </h4>

                  <div
                    className="p-3 rounded-lg mb-4"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <div className="flex items-center">
                      <Target
                        className="w-4 h-4 mr-2"
                        style={{ color: primaryColor }}
                      />
                      <span
                        className={`text-sm font-medium ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        {story.impact}
                      </span>
                    </div>
                  </div>

                  <div
                    className="border-l-4 pl-4 py-2"
                    style={{ borderColor: primaryColor }}
                  >
                    <p
                      className={`italic text-sm ${poppins.className}`}
                      style={{ color: accentColor }}
                    >
                      "{story.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
            }}
          >
            <div className="p-6 md:p-8 lg:p-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 ${bebasNeue.className}`}
                >
                  Ready to Create Impact Together?
                </h3>
                <p className={`text-lg mb-6 md:mb-8 ${poppins.className}`}>
                  Join our network of strategic partners and together, we'll
                  build stronger, more resilient communities for generations to
                  come.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Phone className="w-6 h-6 mx-auto mb-2" />
                    <p className={`font-medium ${poppins.className}`}>
                      Call Us
                    </p>
                    <p className={`text-sm ${poppins.className}`}>
                      +234 901 234 5678
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Mail className="w-6 h-6 mx-auto mb-2" />
                    <p className={`font-medium ${poppins.className}`}>
                      Email Us
                    </p>
                    <p className={`text-sm ${poppins.className}`}>
                      partnership@communityhope.org
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Calendar className="w-6 h-6 mx-auto mb-2" />
                    <p className={`font-medium ${poppins.className}`}>
                      Schedule a Call
                    </p>
                    <p className={`text-sm ${poppins.className}`}>
                      Book a 30-min consultation
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
                      <Handshake className="w-4 h-4 md:w-5 md:h-5" />
                      Start Partnership Process
                    </span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all border-2 border-white"
                  >
                    <span
                      className={`flex items-center justify-center gap-2 ${poppins.className}`}
                    >
                      <FileText className="w-4 h-4 md:w-5 md:h-5" />
                      Download Partnership Kit
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomePartner;
