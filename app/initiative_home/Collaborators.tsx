// components/Sections/Collaborators.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { bebasNeue, poppins } from "../utils/constants";
import {
  Building2,
  Handshake,
  Globe,
  Shield,
  Award,
  Users,
  ChevronRight,
  Star,
  CheckCircle,
  Target,
} from "lucide-react";

const Collaborators = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  const collaborators = [
    {
      id: 1,
      name: "Lagos State Government",
      logo: "/images/lagos-state-logo.png",
      type: "Government Agency",
      partnership: "Since 2020",
      description:
        "Strategic partnership for community development initiatives across Lagos State",
    },
    {
      id: 2,
      name: "Dangote Foundation",
      logo: "/images/dangote-logo.png",
      type: "Corporate Foundation",
      partnership: "Since 2019",
      description:
        "Major funding partner for food security and nutrition programs",
    },
    {
      id: 3,
      name: "MTN Foundation",
      logo: "/images/mtn-logo.png",
      type: "CSR Initiative",
      partnership: "Since 2021",
      description: "Digital inclusion and youth empowerment programs",
    },
    {
      id: 4,
      name: "FirstBank Nigeria",
      logo: "/images/firstbank-logo.png",
      type: "Corporate Partner",
      partnership: "Since 2018",
      description: "Financial literacy and micro-enterprise support",
    },
    {
      id: 5,
      name: "UN Women Nigeria",
      logo: "/images/un-women-logo.png",
      type: "International Agency",
      partnership: "Since 2022",
      description: "Gender-based violence prevention and women empowerment",
    },
    {
      id: 6,
      name: "Nigerian Red Cross",
      logo: "/images/red-cross-logo.png",
      type: "Humanitarian Org",
      partnership: "Since 2020",
      description: "Emergency response and community health initiatives",
    },
    {
      id: 7,
      name: "Sterling Bank",
      logo: "/images/sterling-logo.png",
      type: "Corporate Partner",
      partnership: "Since 2021",
      description: "Education and skills development programs",
    },
    {
      id: 8,
      name: "Google Nigeria",
      logo: "/images/google-logo.png",
      type: "Tech Partner",
      partnership: "Since 2022",
      description: "Digital skills training and technology access",
    },
  ];

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Corporate Partnerships",
      description:
        "Long-term strategic alliances with corporations for community development",
      benefits: ["Brand visibility", "CSR fulfillment", "Employee engagement"],
    },
    {
      icon: Globe,
      title: "International Agencies",
      description:
        "Collaboration with global organizations for specialized programs",
      benefits: [
        "Expertise sharing",
        "Global standards",
        "Cross-cultural exchange",
      ],
    },
    {
      icon: Shield,
      title: "Government Agencies",
      description:
        "Partnerships with government bodies for policy-aligned initiatives",
      benefits: ["Policy support", "Scale impact", "Sustainability"],
    },
    {
      icon: Users,
      title: "NGO Collaborations",
      description: "Working with other NGOs for complementary service delivery",
      benefits: ["Resource sharing", "Specialized skills", "Community trust"],
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
            <Handshake className="w-4 h-4 mr-2" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Strategic Alliances
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight ${bebasNeue.className}`}
            style={{ color: primaryColor }}
          >
            Our Trusted
            <span className="block" style={{ color: accentColor }}>
              Collaborators & Partners
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 ${poppins.className}`}
          >
            Together with leading organizations, we amplify our impact and
            create sustainable change across communities.
          </p>
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl mb-4"
                  style={{ backgroundColor: secondaryColor }}
                >
                  <type.icon
                    className="w-6 h-6 md:w-7 md:h-7"
                    style={{ color: primaryColor }}
                  />
                </div>
                <h3
                  className={`text-lg md:text-xl font-bold mb-2 ${bebasNeue.className}`}
                  style={{ color: primaryColor }}
                >
                  {type.title}
                </h3>
                <p
                  className={`text-sm md:text-base text-gray-600 mb-4 ${poppins.className}`}
                >
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle
                        className="w-4 h-4 mr-2 flex-shrink-0"
                        style={{ color: accentColor }}
                      />
                      <span
                        className={`text-xs md:text-sm ${poppins.className}`}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaborators Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {collaborators.map((collaborator, index) => (
              <motion.div
                key={collaborator.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Logo Container */}
                <div className="mb-4 p-3 md:p-4 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                  <div className="relative w-full h-12 md:h-16">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="w-8 h-8 md:w-10 md:h-10 text-gray-300" />
                    </div>
                    {/* In production, you would use: */}
                    {/* <Image
                      src={collaborator.logo}
                      alt={collaborator.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100px, 150px"
                    /> */}
                  </div>
                </div>

                {/* Details */}
                <h3
                  className={`text-base md:text-lg font-bold mb-2 ${bebasNeue.className}`}
                  style={{ color: primaryColor }}
                >
                  {collaborator.name}
                </h3>
                <div className="flex items-center mb-2">
                  <span
                    className="px-2 py-1 rounded-full text-xs font-medium mr-3"
                    style={{
                      backgroundColor: secondaryColor,
                      color: primaryColor,
                    }}
                  >
                    {collaborator.type}
                  </span>
                  <span
                    className={`text-xs text-gray-500 ${poppins.className}`}
                  >
                    {collaborator.partnership}
                  </span>
                </div>
                <p
                  className={`text-xs md:text-sm text-gray-600 mb-4 ${poppins.className}`}
                >
                  {collaborator.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span
                    className={`text-xs font-medium ${poppins.className}`}
                    style={{ color: accentColor }}
                  >
                    Active Partnership
                  </span>
                  <Award className="w-4 h-4" style={{ color: primaryColor }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div
                className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${bebasNeue.className}`}
                style={{ color: primaryColor }}
              >
                50+
              </div>
              <div
                className={`text-sm md:text-base ${poppins.className}`}
                style={{ color: accentColor }}
              >
                Strategic Partners
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${bebasNeue.className}`}
                style={{ color: primaryColor }}
              >
                ₦2.5B+
              </div>
              <div
                className={`text-sm md:text-base ${poppins.className}`}
                style={{ color: accentColor }}
              >
                Collective Impact Value
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${bebasNeue.className}`}
                style={{ color: primaryColor }}
              >
                25+
              </div>
              <div
                className={`text-sm md:text-base ${poppins.className}`}
                style={{ color: accentColor }}
              >
                States Covered
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${bebasNeue.className}`}
                style={{ color: primaryColor }}
              >
                500K+
              </div>
              <div
                className={`text-sm md:text-base ${poppins.className}`}
                style={{ color: accentColor }}
              >
                Lives Impacted
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 text-center"
          >
            <h3
              className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 ${bebasNeue.className}`}
              style={{ color: primaryColor }}
            >
              Ready to Join Our Network?
            </h3>
            <p
              className={`text-gray-700 mb-6 max-w-2xl mx-auto ${poppins.className}`}
            >
              Partner with us to create meaningful change and join our growing
              network of impact-driven organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: primaryColor, color: "white" }}
              >
                <span
                  className={`flex items-center justify-center gap-2 ${poppins.className}`}
                >
                  <Handshake className="w-4 h-4 md:w-5 md:h-5" />
                  Become a Partner
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all border-2"
                style={{
                  backgroundColor: "white",
                  color: primaryColor,
                  borderColor: primaryColor,
                }}
              >
                <span
                  className={`flex items-center justify-center gap-2 ${poppins.className}`}
                >
                  <Target className="w-4 h-4 md:w-5 md:h-5" />
                  View Partnership Guide
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborators;
