"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { poppins } from "../utils/constants";
import {
  Heart,
  Shield,
  HandHeart,
  Home,
  Users,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Calendar,
  Target,
  Award,
  CreditCard,
  User,
  Loader2,
  MapPin,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Package,
} from "lucide-react";
import Image from "next/image";

const Causes = () => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedGrandma, setSelectedGrandma] = useState<any>(null);
  const [activeCause, setActiveCause] = useState<"packages" | "grandmas">(
    "packages",
  );
  const [isDonating, setIsDonating] = useState(false);
  const [donationStep, setDonationStep] = useState(1);
  const [donationForm, setDonationForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
    paymentMethod: "bank",
    duration: "one-time",
    anonymous: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [urgencyFilter, setUrgencyFilter] = useState("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const primaryColor = "#691C33";
  const secondaryColor = "#FFE6EE";
  const accentColor = "#8A2E4D";

  // Image arrays for random assignment
  const heroImages = [
    "/images/hero1.jpeg",
    "/images/hero2.jpeg",
    "/images/hero3.jpeg",
  ];

  const grandmaImages = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
  ];

  // Support Packages
  const packages = useMemo(
    () => [
      {
        id: 1,
        name: "Hope Starter",
        price: "20,000",
        originalPrice: "25,000",
        description: "Basic support for one family for a month",
        benefits: [
          "Monthly support for 1 family",
          "Essential food supplies",
          "Basic healthcare items",
          "Emergency support voucher",
          "Delivery to their doorstep",
        ],
        impact: "Supports a family of 4 for 30 days",
        icon: HandHeart,
        popular: false,
        color: "#FF6B6B",
        image: heroImages[0],
      },
      {
        id: 2,
        name: "Nourishment Plus",
        price: "50,000",
        originalPrice: "60,000",
        description: "Enhanced support package with comprehensive care",
        benefits: [
          "Everything in Hope Starter",
          "Fresh produce & nutrition",
          "Healthcare supplements",
          "Educational materials",
          "Nutrition counseling",
          "Regular follow-ups",
        ],
        impact: "Provides complete care for 2 families",
        icon: Heart,
        popular: true,
        color: "#4ECDC4",
        image: heroImages[1],
      },
      {
        id: 3,
        name: "Community Sustainer",
        price: "150,000",
        originalPrice: "180,000",
        description: "Support multiple families with comprehensive care",
        benefits: [
          "Everything in Nourishment Plus",
          "Supports 5 families",
          "Healthcare check-ups",
          "Educational support",
          "Livelihood training",
          "Skill development workshops",
        ],
        impact: "Transforms lives of 20+ individuals",
        icon: Users,
        popular: false,
        color: "#45B7D1",
        image: heroImages[2],
      },
      {
        id: 4,
        name: "Legacy Builder",
        price: "500,000",
        originalPrice: "600,000",
        description: "Create sustainable community solutions",
        benefits: [
          "Everything in Community Sustainer",
          "Community development projects",
          "Vocational training center",
          "Youth empowerment program",
          "Named recognition",
          "Impact report & updates",
          "Dedicated impact coordinator",
        ],
        impact: "Creates lasting change for entire community",
        icon: Shield,
        popular: false,
        color: "#96CEB4",
        image: heroImages[0],
      },
    ],
    [],
  );

  // Helper function to get random image
  const getRandomImage = (index: number, imageArray: string[]) => {
    return imageArray[index % imageArray.length];
  };

  // Adopt a Grandma Profiles - Full list of 20 grandmas
  const grandmas = useMemo(
    () => [
      {
        id: 1,
        name: "Mama Grace Adebayo",
        age: 78,
        location: "Lagos Island, Lagos",
        story:
          "After losing her husband and all three children to illness, Mama Grace has lived alone for 15 years. She survives on occasional help from church members.",
        needs: [
          "Monthly food supplies",
          "Blood pressure medication",
          "House repairs for rainy season",
          "Weekly companionship visits",
        ],
        healthStatus: "Hypertension, Arthritis, Vision problems",
        monthlySupport: "25,000",
        contact: {
          phone: "+234 801 234 5678",
          caregiver: "Pastor James from local church",
        },
        image: getRandomImage(0, grandmaImages),
        urgency: "high",
        quote:
          "I pray every day for just one person to remember I'm still here.",
      },
      {
        id: 2,
        name: "Grandma Comfort Okoro",
        age: 82,
        location: "Agege, Lagos",
        story:
          "A retired teacher who dedicated her life to educating street children. Lost her sight 8 years ago due to untreated diabetes.",
        needs: [
          "Monthly insulin and diabetes medication",
          "Audio Bible and radio",
          "Regular meals delivery",
          "Transportation to hospital",
        ],
        healthStatus: "Blind, Diabetes type 2, Early dementia",
        monthlySupport: "30,000",
        contact: {
          phone: "+234 802 345 6789",
          caregiver: "Former student, Mrs. Bisi",
        },
        image: getRandomImage(1, grandmaImages),
        urgency: "medium",
        quote:
          "I may have lost my sight, but I can still see hope in every helping hand.",
      },
      {
        id: 3,
        name: "Mama Joy Nwankwo",
        age: 75,
        location: "Ikeja, Lagos",
        story:
          "Retired nurse who worked at Lagos University Teaching Hospital for 35 years. Now bedridden after a stroke 3 years ago.",
        needs: [
          "Medical supplies (catheters, diapers)",
          "Home nurse 3x weekly",
          "Special high-protein diet",
          "Wheelchair-accessible modifications",
        ],
        healthStatus: "Bedridden post-stroke, Chronic pain, Depression",
        monthlySupport: "35,000",
        contact: {
          phone: "+234 803 456 7890",
          caregiver: "Neighbor's daughter, Chidinma",
        },
        image: getRandomImage(2, grandmaImages),
        urgency: "high",
        quote:
          "I used to heal others, now I pray for someone to heal my loneliness.",
      },
      {
        id: 4,
        name: "Grandma Patience Eze",
        age: 85,
        location: "Surulere, Lagos",
        story:
          "Fled conflict in the North 5 years ago with her 4 grandchildren after their parents died. They live in a single room.",
        needs: [
          "Food for 5 people",
          "School fees for grandchildren",
          "Rent assistance",
          "Clothing for growing children",
        ],
        healthStatus: "Malnourished, Depression, Hypertension",
        monthlySupport: "45,000",
        contact: {
          phone: "+234 804 567 8901",
          caregiver: "Community leader, Alhaji Sani",
        },
        image: getRandomImage(3, grandmaImages),
        urgency: "critical",
        quote:
          "My strength is fading, but I must be strong for my grandchildren.",
      },
      {
        id: 5,
        name: "Mama Peace Adekunle",
        age: 79,
        location: "Yaba, Lagos",
        story:
          "Former market woman who sold fabrics until age 75. Severe arthritis forced her to stop. Lives in an uncompleted building.",
        needs: [
          "Secure shelter",
          "Arthritis medication",
          "Warm clothing for harmattan",
          "Social interaction",
        ],
        healthStatus: "Severe Arthritis, Anemia, Cataracts",
        monthlySupport: "20,000",
        contact: {
          phone: "+234 805 678 9012",
          caregiver: "Church member, Sister Grace",
        },
        image: getRandomImage(4, grandmaImages),
        urgency: "medium",
        quote:
          "The cold hurts my bones during harmattan, but loneliness hurts my heart more.",
      },
      {
        id: 6,
        name: "Grandma Faith Okafor",
        age: 81,
        location: "Apapa, Lagos",
        story:
          "Her home was demolished 2 years ago for road construction. Now lives in a makeshift shelter near the port.",
        needs: [
          "Permanent shelter",
          "Small business capital",
          "Asthma inhalers",
          "Nutrition supplements",
        ],
        healthStatus: "Asthma, Vision problems, Hearing loss",
        monthlySupport: "28,000",
        contact: {
          phone: "+234 806 789 0123",
          caregiver: "Neighbor, Mama Nkechi",
        },
        image: getRandomImage(5, grandmaImages),
        urgency: "high",
        quote:
          "My shelter may be temporary, but my hope for a better tomorrow is permanent.",
      },
      {
        id: 7,
        name: "Mama Hope Chukwu",
        age: 76,
        location: "Victoria Island, Lagos",
        story:
          "Worked as a house help for 40 years for a wealthy family who dismissed her without pension. Lives in the servant quarters.",
        needs: [
          "Pension support",
          "Legal assistance for benefits",
          "Dignified housing",
          "Companionship",
        ],
        healthStatus: "General weakness, Anxiety, Dental problems",
        monthlySupport: "22,000",
        contact: {
          phone: "+234 807 890 1234",
          caregiver: "Former colleague, Mr. Sunday",
        },
        image: getRandomImage(0, grandmaImages),
        urgency: "medium",
        quote:
          "I served others all my life, now I have no one to serve me a warm meal when I'm sick.",
      },
      {
        id: 8,
        name: "Grandma Charity Bello",
        age: 83,
        location: "Ogudu, Lagos",
        story:
          "Breast cancer survivor who underwent treatment 5 years ago. Left with huge medical bills. Her children are in Canada.",
        needs: [
          "Medical debt relief",
          "Regular cancer check-ups",
          "Transportation to hospital",
          "Therapy for PTSD",
        ],
        healthStatus: "Cancer survivor, PTSD, Hypertension",
        monthlySupport: "40,000",
        contact: {
          phone: "+234 808 901 2345",
          caregiver: "Hospital social worker, Nurse Amina",
        },
        image: getRandomImage(1, grandmaImages),
        urgency: "high",
        quote:
          "I beat cancer, but I can't beat loneliness. The disease took my savings.",
      },
      {
        id: 9,
        name: "Mama Love Yusuf",
        age: 77,
        location: "Gbagada, Lagos",
        story:
          "Retired seamstress with failing eyesight. Lives with her 45-year-old disabled daughter who needs constant care.",
        needs: [
          "Cataract surgery",
          "Caregiver support for daughter",
          "Special equipment for disabled",
          "Food supplies for two",
        ],
        healthStatus: "Cataracts, Back pain from hunching over sewing",
        monthlySupport: "32,000",
        contact: {
          phone: "+234 809 012 3456",
          caregiver: "Daughter (disabled), Aisha",
        },
        image: getRandomImage(2, grandmaImages),
        urgency: "critical",
        quote:
          "I can't see well enough to thread a needle anymore, but I can still feel the love when someone helps us.",
      },
      {
        id: 10,
        name: "Grandma Mercy Johnson",
        age: 80,
        location: "Festac Town, Lagos",
        story:
          "Lost her entire family in a road accident 10 years ago. Lives alone with photo albums as her only company.",
        needs: [
          "Psychological counseling",
          "Social activities",
          "Home help for cleaning",
          "Nutrition support",
        ],
        healthStatus: "Clinical Depression, Isolation, Arthritis",
        monthlySupport: "26,000",
        contact: {
          phone: "+234 810 123 4567",
          caregiver: "Therapist, Dr. Femi",
        },
        image: getRandomImage(3, grandmaImages),
        urgency: "medium",
        quote: "My photos are my only family now. I talk to them every day.",
      },
      {
        id: 11,
        name: "Mama Blessing Okafor",
        age: 74,
        location: "Amuwo Odofin, Lagos",
        story:
          "Former farmer displaced from her village in Anambra. Now lives in a city slum. Still has farming skills but no land.",
        needs: [
          "Agricultural support for urban farming",
          "Shelter improvement",
          "Malaria prevention",
          "Social network",
        ],
        healthStatus: "Malaria prone, Malnutrition, Back problems",
        monthlySupport: "24,000",
        contact: {
          phone: "+234 811 234 5678",
          caregiver: "Community farmer, Mr. Chinedu",
        },
        image: getRandomImage(4, grandmaImages),
        urgency: "high",
        quote:
          "I miss the soil between my fingers. City life is loud, but my heart is quiet without my farm.",
      },
      {
        id: 12,
        name: "Grandma Favour Adeyemi",
        age: 79,
        location: "Ikorodu, Lagos",
        story:
          "Traditional birth attendant who delivered over 500 babies in her community. Now too weak to work and needs care herself.",
        needs: [
          "Retirement support",
          "Regular medical attention",
          "Comfort items (chair, bedding)",
          "Visitors to share stories with",
        ],
        healthStatus: "General weakness, Memory loss, Hearing impairment",
        monthlySupport: "27,000",
        contact: {
          phone: "+234 812 345 6789",
          caregiver: "Former client, Mrs. Adesuwa",
        },
        image: getRandomImage(5, grandmaImages),
        urgency: "medium",
        quote:
          "I brought life to this world, helped mothers bring forth their joy. Now I need help to live my remaining days with dignity.",
      },
      {
        id: 13,
        name: "Mama Glory Ahmed",
        age: 76,
        location: "Badagry, Lagos",
        story:
          "Fish seller who worked at Badagry beach until age 70. Suffers from respiratory issues from years of smoke from fish smoking.",
        needs: [
          "Respiratory treatment",
          "Warm bedding for beach area",
          "Nutrition supplements",
          "Social visits from community",
        ],
        healthStatus: "Chronic respiratory issues, Joint pain, Vision problems",
        monthlySupport: "23,000",
        contact: {
          phone: "+234 813 456 7890",
          caregiver: "Market association chairman, Alhaji Bello",
        },
        image: getRandomImage(0, grandmaImages),
        urgency: "high",
        quote:
          "The sea gave me life for 50 years, now my lungs remember every fish I smoked.",
      },
      {
        id: 14,
        name: "Grandma Victory Nwachukwu",
        age: 82,
        location: "Epe, Lagos",
        story:
          "Lost her home and all belongings in the 2020 flood. Now lives in a temporary shelter provided by the community.",
        needs: [
          "Permanent housing",
          "Trauma counseling",
          "Basic furniture",
          "Clothing replacement",
        ],
        healthStatus: "Trauma, Hypertension, Anxiety during rains",
        monthlySupport: "38,000",
        contact: {
          phone: "+234 814 567 8901",
          caregiver: "Disaster relief coordinator, Mr. Ade",
        },
        image: getRandomImage(1, grandmaImages),
        urgency: "critical",
        quote:
          "Water took everything I had - my home, my photos. But it couldn't take my hope.",
      },
      {
        id: 15,
        name: "Mama Success Ogundipe",
        age: 75,
        location: "Lekki, Lagos",
        story:
          "Former cook for wealthy Lebanese family for 25 years. Dismissed without benefits when family relocated.",
        needs: [
          "Pension fund assistance",
          "Kitchen equipment",
          "Regular medical check-ups",
          "Companionship",
        ],
        healthStatus: "Diabetes, High blood pressure, Obesity",
        monthlySupport: "21,000",
        contact: {
          phone: "+234 815 678 9012",
          caregiver: "Former employer's driver, Mr. Tunde",
        },
        image: getRandomImage(2, grandmaImages),
        urgency: "medium",
        quote:
          "I used to cook feasts for 50 people, now I struggle to cook beans for one.",
      },
      {
        id: 16,
        name: "Grandma Promise Okeke",
        age: 78,
        location: "Ajah, Lagos",
        story:
          "Traditional dancer who entertained at weddings and festivals across Yorubaland. Now too weak to dance but full of stories.",
        needs: [
          "Cultural preservation support",
          "Recording equipment for stories",
          "Comfort items",
          "Audience for her stories",
        ],
        healthStatus: "Weakness, Loneliness, Arthritis in knees",
        monthlySupport: "29,000",
        contact: {
          phone: "+234 816 789 0123",
          caregiver: "Cultural group leader, Chief Adewale",
        },
        image: getRandomImage(3, grandmaImages),
        urgency: "medium",
        quote:
          "My body can't dance anymore, but my stories can still move hearts.",
      },
      {
        id: 17,
        name: "Mama Destiny Mohammed",
        age: 81,
        location: "Ikoyi, Lagos",
        story:
          "Former governess to wealthy children for 40 years. Now lives in servants' quarters with no support.",
        needs: [
          "Legal aid for benefits",
          "Dignified housing",
          "Medical care",
          "Social support",
        ],
        healthStatus: "Arthritis, Vision problems, Heart condition",
        monthlySupport: "33,000",
        contact: {
          phone: "+234 817 890 1234",
          caregiver: "Legal aid lawyer, Barrister Ngozi",
        },
        image: getRandomImage(4, grandmaImages),
        urgency: "high",
        quote:
          "I raised other people's children, taught them to walk and talk. Now I have no one to call my own child.",
      },
      {
        id: 18,
        name: "Grandma Future Onyema",
        age: 77,
        location: "Maryland, Lagos",
        story:
          "Educated woman who was a secretary until retirement. Lost all savings to a Ponzi scheme 5 years ago.",
        needs: [
          "Dignified financial support",
          "Small business startup",
          "Therapy for depression",
          "Social connection",
        ],
        healthStatus: "Depression, Pride barrier, High blood pressure",
        monthlySupport: "31,000",
        contact: {
          phone: "+234 818 901 2345",
          caregiver: "Counselor, Mrs. Chika",
        },
        image: getRandomImage(5, grandmaImages),
        urgency: "medium",
        quote:
          "Pride won't feed me, but it's all I have left of the woman I used to be.",
      },
      {
        id: 19,
        name: "Mama Tomorrow Alabi",
        age: 79,
        location: "Oshodi, Lagos",
        story:
          "Street food seller (akara and pap) until age 75. Now survives on occasional help from former customers.",
        needs: [
          "Regular income support",
          "Medical attention",
          "Warm clothing",
          "Social activities",
        ],
        healthStatus: "Exhaustion, Malnutrition, Dental issues",
        monthlySupport: "26,000",
        contact: {
          phone: "+234 819 012 3456",
          caregiver: "Former customer, Mr. Musa",
        },
        image: getRandomImage(0, grandmaImages),
        urgency: "high",
        quote:
          "I fed strangers for 40 years. Now I wait for strangers to feed me.",
      },
      {
        id: 20,
        name: "Grandma Sunrise Ezeudu",
        age: 76,
        location: "Mushin, Lagos",
        story:
          "Traditional medicine woman who helped many with herbal remedies. Now needs modern medicine for her own ailments.",
        needs: [
          "Medical integration support",
          "Herbal garden setup",
          "Documentation help",
          "Apprentice to train",
        ],
        healthStatus:
          "Traditional healer needing modern care, Diabetes, Hypertension",
        monthlySupport: "34,000",
        contact: {
          phone: "+234 820 123 4567",
          caregiver: "Health worker, Nurse Gladys",
        },
        image: getRandomImage(1, grandmaImages),
        urgency: "medium",
        quote: "I healed with herbs for 50 years, now I need pills to heal.",
      },
    ],
    [],
  );

  // Filter grandmas based on search and urgency
  const filteredGrandmas = useMemo(() => {
    return grandmas.filter((grandma) => {
      const matchesSearch =
        searchTerm === "" ||
        grandma.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        grandma.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesUrgency =
        urgencyFilter === "all" || grandma.urgency === urgencyFilter;

      return matchesSearch && matchesUrgency;
    });
  }, [grandmas, searchTerm, urgencyFilter]);

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();

    if (donationStep === 1) {
      setDonationStep(2);
      return;
    }

    setIsDonating(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset everything
    setIsDonating(false);
    setDonationStep(1);
    setSelectedPackage(null);
    setSelectedGrandma(null);
    setDonationForm({
      name: "",
      email: "",
      phone: "",
      amount: "",
      message: "",
      paymentMethod: "bank",
      duration: "one-time",
      anonymous: false,
    });
  };

  return (
    <section
      id="causes"
      className="relative py-12 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50"
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
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div
            className="inline-flex items-center px-4 py-2 rounded-full mb-4 md:mb-6"
            style={{ backgroundColor: primaryColor, color: "white" }}
          >
            <Heart className="w-4 h-4 mr-2" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Support Our Causes
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight ${poppins.className}`}
            style={{ color: primaryColor }}
          >
            Make a
            <span className="block mt-2" style={{ color: accentColor }}>
              Lasting Impact
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed ${poppins.className} px-4`}
          >
            Choose how you want to help. From supporting families to caring for
            our elders, every contribution creates real change.
          </p>
        </motion.div>

        {/* Tabs Navigation - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row justify-center mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:inline-flex sm:p-1 rounded-xl bg-gray-100 gap-2 sm:gap-0 mx-auto">
            <button
              onClick={() => setActiveCause("packages")}
              className={`px-6 sm:px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${activeCause === "packages" ? "shadow-lg" : ""}`}
              style={{
                backgroundColor:
                  activeCause === "packages" ? primaryColor : "transparent",
                color: activeCause === "packages" ? "white" : "#4B5563",
              }}
            >
              <Package className="w-5 h-5" />
              <span className={`text-sm sm:text-base ${poppins.className}`}>
                Support Packages
              </span>
            </button>
            <button
              onClick={() => setActiveCause("grandmas")}
              className={`px-6 sm:px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${activeCause === "grandmas" ? "shadow-lg" : ""}`}
              style={{
                backgroundColor:
                  activeCause === "grandmas" ? primaryColor : "transparent",
                color: activeCause === "grandmas" ? "white" : "#4B5563",
              }}
            >
              <Home className="w-5 h-5" />
              <span className={`text-sm sm:text-base ${poppins.className}`}>
                Adopt a Grandma
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Support Packages Section */}
          {activeCause === "packages" && (
            <motion.div
              key="packages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-8 md:mb-12 px-4">
                <h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 ${poppins.className}`}
                  style={{ color: primaryColor }}
                >
                  Support Packages
                </h3>
                <p
                  className={`text-gray-700 max-w-3xl mx-auto text-sm sm:text-base ${poppins.className}`}
                >
                  Choose a support package that fits your capacity. Every
                  contribution provides essential support to families in need.
                </p>
              </div>

              {/* Packages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-12 px-4 sm:px-0">
                {packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                      pkg.popular ? "ring-2 ring-offset-2 sm:ring-offset-4" : ""
                    }`}
                    style={{
                      backgroundColor: "white",
                      borderColor: pkg.popular ? primaryColor : "transparent",
                    }}
                  >
                    {pkg.popular && (
                      <div
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs font-bold text-white z-10"
                        style={{ backgroundColor: accentColor }}
                      >
                        MOST POPULAR
                      </div>
                    )}

                    <div className="p-4 sm:p-6">
                      <div className="flex justify-center mb-3 sm:mb-4">
                        <div
                          className="p-2 sm:p-3 rounded-lg sm:rounded-xl"
                          style={{ backgroundColor: secondaryColor }}
                        >
                          <pkg.icon
                            className="w-6 h-6 sm:w-8 sm:h-8"
                            style={{ color: primaryColor }}
                          />
                        </div>
                      </div>

                      <h4
                        className={`text-lg sm:text-xl font-bold mb-2 text-center ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        {pkg.name}
                      </h4>

                      <div className="text-center mb-3 sm:mb-4">
                        <div
                          className={`text-2xl sm:text-3xl font-bold mb-1 ${poppins.className}`}
                          style={{ color: accentColor }}
                        >
                          ₦{pkg.price}
                        </div>
                        {pkg.originalPrice && (
                          <div className="text-gray-500 line-through text-sm">
                            ₦{pkg.originalPrice}
                          </div>
                        )}
                      </div>

                      <p
                        className={`text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base ${poppins.className}`}
                      >
                        {pkg.description}
                      </p>

                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        {pkg.benefits.slice(0, 3).map((benefit, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle
                              className="w-4 h-4 mr-2 sm:mr-3 flex-shrink-0"
                              style={{ color: accentColor }}
                            />
                            <span
                              className={`text-xs sm:text-sm ${poppins.className}`}
                            >
                              {benefit}
                            </span>
                          </div>
                        ))}
                        {pkg.benefits.length > 3 && (
                          <div className="text-center">
                            <span
                              className={`text-xs sm:text-sm font-medium ${poppins.className}`}
                              style={{ color: accentColor }}
                            >
                              +{pkg.benefits.length - 3} more benefits
                            </span>
                          </div>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
                        style={{
                          backgroundColor: primaryColor,
                          color: "white",
                        }}
                      >
                        <span className={poppins.className}>
                          Select Package
                        </span>
                      </motion.button>
                    </div>

                    <div
                      className="px-4 py-2 sm:px-6 sm:py-3 text-center"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      <span
                        className={`text-xs sm:text-sm font-medium ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        {pkg.impact}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* How It Works */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg mb-8 md:mb-12 mx-4 sm:mx-0">
                <h4
                  className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center ${poppins.className}`}
                  style={{ color: primaryColor }}
                >
                  How Your Support Helps
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      <Target
                        className="w-6 h-6 sm:w-8 sm:h-8"
                        style={{ color: primaryColor }}
                      />
                    </div>
                    <h5
                      className={`text-base sm:text-lg font-bold mb-2 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Direct Impact
                    </h5>
                    <p
                      className={`text-gray-600 text-sm sm:text-base ${poppins.className}`}
                    >
                      Every package goes directly to families in need. We
                      provide photos and reports.
                    </p>
                  </div>
                  <div className="text-center p-4 sm:p-6">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      <Award
                        className="w-6 h-6 sm:w-8 sm:h-8"
                        style={{ color: primaryColor }}
                      />
                    </div>
                    <h5
                      className={`text-base sm:text-lg font-bold mb-2 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Transparency
                    </h5>
                    <p
                      className={`text-gray-600 text-sm sm:text-base ${poppins.className}`}
                    >
                      We show exactly where your money goes with detailed
                      reports and updates.
                    </p>
                  </div>
                  <div className="text-center p-4 sm:p-6">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      <Calendar
                        className="w-6 h-6 sm:w-8 sm:h-8"
                        style={{ color: primaryColor }}
                      />
                    </div>
                    <h5
                      className={`text-base sm:text-lg font-bold mb-2 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Sustained Support
                    </h5>
                    <p
                      className={`text-gray-600 text-sm sm:text-base ${poppins.className}`}
                    >
                      Packages provide consistent support, not just one-time
                      help.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Adopt a Grandma Section */}
          {activeCause === "grandmas" && (
            <motion.div
              key="grandmas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-8 md:mb-12 px-4">
                <h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 ${poppins.className}`}
                  style={{ color: primaryColor }}
                >
                  Adopt a Grandma Program
                </h3>
                <p
                  className={`text-gray-700 max-w-3xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base ${poppins.className}`}
                >
                  You don't bring grandma to live with you. Instead, you support
                  local caregivers who provide daily care, food, medicine, and
                  companionship to isolated elders in their own communities.
                </p>
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-yellow-50 border border-yellow-200">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 mr-2" />
                  <span
                    className={`text-xs sm:text-sm font-medium ${poppins.className}`}
                    style={{ color: "#B45309" }}
                  >
                    Currently supporting {grandmas.length} grandmothers
                  </span>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="mb-6 md:mb-8 px-4 sm:px-0">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                      style={{ outlineColor: primaryColor }}
                    />
                  </div>

                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="md:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 text-sm"
                    style={{ color: primaryColor }}
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                    {showMobileFilters ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {/* Filters - Desktop */}
                  <div className="hidden md:flex gap-3">
                    <select
                      value={urgencyFilter}
                      onChange={(e) => setUrgencyFilter(e.target.value)}
                      className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base min-w-[140px]"
                      style={{ outlineColor: primaryColor }}
                    >
                      <option value="all">All Urgency Levels</option>
                      <option value="critical">Critical Need</option>
                      <option value="high">High Priority</option>
                      <option value="medium">Medium Priority</option>
                    </select>

                    <select
                      className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base min-w-[160px]"
                      style={{ outlineColor: primaryColor }}
                    >
                      <option>Sort by: Recently Added</option>
                      <option>Sort by: Urgency</option>
                      <option>Sort by: Age</option>
                      <option>Sort by: Monthly Support</option>
                    </select>
                  </div>
                </div>

                {/* Mobile Filters Dropdown */}
                {showMobileFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden mt-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="space-y-4">
                      <div>
                        <label
                          className={`block mb-2 text-sm font-medium ${poppins.className}`}
                        >
                          Filter by Urgency
                        </label>
                        <select
                          value={urgencyFilter}
                          onChange={(e) => setUrgencyFilter(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm"
                          style={{ outlineColor: primaryColor }}
                        >
                          <option value="all">All Urgency Levels</option>
                          <option value="critical">Critical Need</option>
                          <option value="high">High Priority</option>
                          <option value="medium">Medium Priority</option>
                        </select>
                      </div>

                      <div>
                        <label
                          className={`block mb-2 text-sm font-medium ${poppins.className}`}
                        >
                          Sort By
                        </label>
                        <select
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm"
                          style={{ outlineColor: primaryColor }}
                        >
                          <option>Recently Added</option>
                          <option>Urgency</option>
                          <option>Age</option>
                          <option>Monthly Support</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Grandmas Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-12 px-4 sm:px-0">
                {filteredGrandmas.map((grandma) => (
                  <motion.div
                    key={grandma.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedGrandma(grandma)}
                    className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="relative h-40 sm:h-48">
                      <Image
                        src={grandma.image}
                        alt={grandma.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-bold ${
                            grandma.urgency === "critical"
                              ? "bg-red-500/90 text-white"
                              : grandma.urgency === "high"
                                ? "bg-orange-500/90 text-white"
                                : "bg-yellow-500/90 text-white"
                          }`}
                        >
                          {grandma.urgency.toUpperCase()}
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="px-2 py-1 rounded-full text-xs font-bold bg-black/60 text-white">
                          {grandma.age} years
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`text-base sm:text-lg font-bold truncate ${poppins.className}`}
                            style={{ color: primaryColor }}
                          >
                            {grandma.name}
                          </h4>
                          <div className="flex items-center text-gray-600 text-xs sm:text-sm truncate">
                            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className={`truncate ${poppins.className}`}>
                              {grandma.location}
                            </span>
                          </div>
                        </div>
                        <div className="text-right ml-2 flex-shrink-0">
                          <div
                            className={`text-base sm:text-lg font-bold ${poppins.className}`}
                            style={{ color: accentColor }}
                          >
                            ₦{grandma.monthlySupport}
                          </div>
                          <div
                            className={`text-xs ${poppins.className}`}
                            style={{ color: primaryColor }}
                          >
                            /month
                          </div>
                        </div>
                      </div>

                      <p
                        className={`text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 ${poppins.className}`}
                      >
                        {grandma.story}
                      </p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                        {grandma.needs.slice(0, 2).map((need, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded-full text-xs"
                            style={{
                              backgroundColor: secondaryColor,
                              color: primaryColor,
                            }}
                          >
                            {need}
                          </span>
                        ))}
                        {grandma.needs.length > 2 && (
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                            +{grandma.needs.length - 2} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              `tel:${grandma.contact.phone}`,
                              "_blank",
                            );
                          }}
                          className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-gray-900"
                        >
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          <span className={poppins.className}>
                            Call Caregiver
                          </span>
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium"
                          style={{
                            backgroundColor: primaryColor,
                            color: "white",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedGrandma(grandma);
                          }}
                        >
                          <span className={poppins.className}>Support Now</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* How It Works */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg mx-4 sm:mx-0">
                <h4
                  className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center ${poppins.className}`}
                  style={{ color: primaryColor }}
                >
                  How "Adopt a Grandma" Works
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div
                    className="text-center p-4 sm:p-6 rounded-xl"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <div
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: primaryColor }}
                    >
                      1
                    </div>
                    <h5
                      className={`text-base sm:text-lg font-bold mb-2 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Select a Grandma
                    </h5>
                    <p
                      className={`text-gray-600 text-xs sm:text-sm ${poppins.className}`}
                    >
                      Choose from our list of verified elderly women in need of
                      support.
                    </p>
                  </div>
                  <div
                    className="text-center p-4 sm:p-6 rounded-xl"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <div
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: primaryColor }}
                    >
                      2
                    </div>
                    <h5
                      className={`text-base sm:text-lg font-bold mb-2 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Choose Support Level
                    </h5>
                    <p
                      className={`text-gray-600 text-xs sm:text-sm ${poppins.className}`}
                    >
                      Monthly contributions help cover food, medicine, and
                      caregiver costs.
                    </p>
                  </div>
                  <div
                    className="text-center p-4 sm:p-6 rounded-xl"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <div
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: primaryColor }}
                    >
                      3
                    </div>
                    <h5
                      className={`text-base sm:text-lg font-bold mb-2 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Local Caregiver Support
                    </h5>
                    <p
                      className={`text-gray-600 text-xs sm:text-sm ${poppins.className}`}
                    >
                      Funds go to trained local caregivers who provide daily
                      support.
                    </p>
                  </div>
                  <div
                    className="text-center p-4 sm:p-6 rounded-xl"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <div
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: primaryColor }}
                    >
                      4
                    </div>
                    <h5
                      className={`text-base sm:text-lg font-bold mb-2 ${poppins.className}`}
                      style={{ color: primaryColor }}
                    >
                      Regular Updates
                    </h5>
                    <p
                      className={`text-gray-600 text-xs sm:text-sm ${poppins.className}`}
                    >
                      Receive photos and updates about the difference you're
                      making.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Donation Modal - Fixed with sticky header and reduced height */}
        <AnimatePresence>
          {(selectedPackage || selectedGrandma) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50"
              onClick={() => {
                if (!isDonating) {
                  setSelectedPackage(null);
                  setSelectedGrandma(null);
                  setDonationStep(1);
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[70vh] sm:max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Sticky Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 z-10 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0 pr-4">
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-bold truncate ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        {selectedPackage
                          ? selectedPackage.name
                          : `Support ${selectedGrandma?.name}`}
                      </h3>
                      <p
                        className={`text-gray-600 text-sm sm:text-base ${poppins.className} truncate`}
                      >
                        {selectedPackage
                          ? selectedPackage.description
                          : `Help provide care and support`}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        if (!isDonating) {
                          setSelectedPackage(null);
                          setSelectedGrandma(null);
                          setDonationStep(1);
                        }
                      }}
                      className="text-gray-400 hover:text-gray-600 disabled:opacity-50 flex-shrink-0"
                      disabled={isDonating}
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Loading State */}
                  {isDonating ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 sm:p-8 text-center"
                    >
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-spin"
                        style={{
                          border: `4px solid ${secondaryColor}`,
                          borderTopColor: primaryColor,
                        }}
                      >
                        <Loader2
                          className="w-6 h-6 sm:w-8 sm:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h4
                        className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${poppins.className}`}
                        style={{ color: primaryColor }}
                      >
                        Processing Your Donation
                      </h4>
                      <p
                        className={`text-gray-600 text-sm sm:text-base ${poppins.className}`}
                      >
                        Thank you for your generous support! We're processing
                        your donation now.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      {/* Donation Details */}
                      <div className="mb-6 sm:mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                          <div
                            className="p-3 sm:p-4 rounded-xl"
                            style={{ backgroundColor: secondaryColor }}
                          >
                            <div
                              className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              {selectedPackage
                                ? `₦${selectedPackage.price}`
                                : `₦${selectedGrandma?.monthlySupport}`}
                            </div>
                            <div
                              className={`text-xs sm:text-sm ${poppins.className}`}
                              style={{ color: accentColor }}
                            >
                              {selectedPackage
                                ? "One-time support"
                                : "Monthly support"}
                            </div>
                          </div>
                          <div
                            className="p-3 sm:p-4 rounded-xl"
                            style={{ backgroundColor: secondaryColor }}
                          >
                            <div
                              className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              {selectedPackage
                                ? selectedPackage.impact
                                : "Direct Care Support"}
                            </div>
                            <div
                              className={`text-xs sm:text-sm ${poppins.className}`}
                              style={{ color: accentColor }}
                            >
                              Your impact
                            </div>
                          </div>
                        </div>

                        {selectedGrandma && (
                          <div className="mb-4 sm:mb-6">
                            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0">
                                <Image
                                  src={selectedGrandma.image}
                                  alt={selectedGrandma.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4
                                  className={`text-base sm:text-lg font-bold truncate ${poppins.className}`}
                                  style={{ color: primaryColor }}
                                >
                                  {selectedGrandma.name}
                                </h4>
                                <p
                                  className={`text-xs sm:text-sm text-gray-600 ${poppins.className} truncate`}
                                >
                                  {selectedGrandma.age} years •{" "}
                                  {selectedGrandma.location}
                                </p>
                              </div>
                            </div>

                            <div className="p-3 sm:p-4 rounded-xl bg-yellow-50 border border-yellow-200 mb-3 sm:mb-4">
                              <p
                                className={`italic text-yellow-800 text-xs sm:text-sm ${poppins.className}`}
                              >
                                "{selectedGrandma.quote}"
                              </p>
                              <p
                                className={`text-xs text-yellow-700 mt-1 sm:mt-2 ${poppins.className}`}
                              >
                                — {selectedGrandma.name}
                              </p>
                            </div>

                            <div className="mb-3 sm:mb-4">
                              <h5
                                className={`font-bold mb-1 sm:mb-2 text-sm sm:text-base ${poppins.className}`}
                                style={{ color: primaryColor }}
                              >
                                Specific Needs:
                              </h5>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {selectedGrandma.needs.map(
                                  (need: string, index: number) => (
                                    <span
                                      key={index}
                                      className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                                      style={{
                                        backgroundColor: secondaryColor,
                                        color: primaryColor,
                                      }}
                                    >
                                      {need}
                                    </span>
                                  ),
                                )}
                              </div>
                            </div>

                            <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                              <p>
                                <strong>Health Status:</strong>{" "}
                                {selectedGrandma.healthStatus}
                              </p>
                              <p>
                                <strong>Contact Caregiver:</strong>{" "}
                                {selectedGrandma.contact.caregiver} (
                                {selectedGrandma.contact.phone})
                              </p>
                            </div>
                          </div>
                        )}

                        {selectedPackage && (
                          <div className="mb-4 sm:mb-6">
                            <div className="p-3 sm:p-4 rounded-xl bg-blue-50 border border-blue-200">
                              <h5
                                className={`font-bold mb-2 text-sm sm:text-base ${poppins.className}`}
                                style={{ color: primaryColor }}
                              >
                                Package Benefits:
                              </h5>
                              <ul className="space-y-1.5 sm:space-y-2">
                                {selectedPackage.benefits.map(
                                  (benefit: string, index: number) => (
                                    <li
                                      key={index}
                                      className="flex items-start"
                                    >
                                      <CheckCircle
                                        className="w-3 h-3 sm:w-4 sm:h-4 mr-2 mt-0.5 flex-shrink-0"
                                        style={{ color: accentColor }}
                                      />
                                      <span
                                        className={`text-xs sm:text-sm ${poppins.className}`}
                                      >
                                        {benefit}
                                      </span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Donation Form */}
                      <form onSubmit={handleDonation}>
                        {donationStep === 1 ? (
                          <>
                            <h4
                              className={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              Your Information
                            </h4>
                            <div className="space-y-3 sm:space-y-4">
                              <div>
                                <label
                                  className={`block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium ${poppins.className}`}
                                  style={{ color: primaryColor }}
                                >
                                  Full Name *
                                </label>
                                <div className="relative">
                                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                  <input
                                    type="text"
                                    required
                                    value={donationForm.name}
                                    onChange={(e) =>
                                      setDonationForm({
                                        ...donationForm,
                                        name: e.target.value,
                                      })
                                    }
                                    className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm sm:text-base"
                                    style={{ outlineColor: primaryColor }}
                                    placeholder="Enter your full name"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                  <label
                                    className={`block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium ${poppins.className}`}
                                    style={{ color: primaryColor }}
                                  >
                                    Email Address *
                                  </label>
                                  <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    <input
                                      type="email"
                                      required
                                      value={donationForm.email}
                                      onChange={(e) =>
                                        setDonationForm({
                                          ...donationForm,
                                          email: e.target.value,
                                        })
                                      }
                                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm sm:text-base"
                                      style={{ outlineColor: primaryColor }}
                                      placeholder="your@email.com"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label
                                    className={`block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium ${poppins.className}`}
                                    style={{ color: primaryColor }}
                                  >
                                    Phone Number *
                                  </label>
                                  <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    <input
                                      type="tel"
                                      required
                                      value={donationForm.phone}
                                      onChange={(e) =>
                                        setDonationForm({
                                          ...donationForm,
                                          phone: e.target.value,
                                        })
                                      }
                                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm sm:text-base"
                                      style={{ outlineColor: primaryColor }}
                                      placeholder="+234 800 000 0000"
                                    />
                                  </div>
                                </div>
                              </div>

                              {selectedGrandma && (
                                <div>
                                  <label
                                    className={`block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium ${poppins.className}`}
                                    style={{ color: primaryColor }}
                                  >
                                    Support Duration
                                  </label>
                                  <div className="flex gap-3 sm:gap-4">
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="duration"
                                        value="one-time"
                                        checked={
                                          donationForm.duration === "one-time"
                                        }
                                        onChange={(e) =>
                                          setDonationForm({
                                            ...donationForm,
                                            duration: e.target.value,
                                          })
                                        }
                                        className="mr-1.5 sm:mr-2"
                                        style={{ accentColor: primaryColor }}
                                      />
                                      <span
                                        className={`text-xs sm:text-sm ${poppins.className}`}
                                      >
                                        One-time
                                      </span>
                                    </label>
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="duration"
                                        value="monthly"
                                        checked={
                                          donationForm.duration === "monthly"
                                        }
                                        onChange={(e) =>
                                          setDonationForm({
                                            ...donationForm,
                                            duration: e.target.value,
                                          })
                                        }
                                        className="mr-1.5 sm:mr-2"
                                        style={{ accentColor: primaryColor }}
                                      />
                                      <span
                                        className={`text-xs sm:text-sm ${poppins.className}`}
                                      >
                                        Monthly
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              )}

                              <div>
                                <label
                                  className={`block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium ${poppins.className}`}
                                  style={{ color: primaryColor }}
                                >
                                  Donation Amount *
                                </label>
                                <div className="relative">
                                  <span
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 font-bold text-sm sm:text-base"
                                    style={{ color: primaryColor }}
                                  >
                                    ₦
                                  </span>
                                  <input
                                    type="number"
                                    required
                                    value={
                                      donationForm.amount ||
                                      (selectedPackage
                                        ? selectedPackage.price
                                        : selectedGrandma?.monthlySupport)
                                    }
                                    onChange={(e) =>
                                      setDonationForm({
                                        ...donationForm,
                                        amount: e.target.value,
                                      })
                                    }
                                    className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm sm:text-base"
                                    style={{ outlineColor: primaryColor }}
                                    placeholder="Enter amount"
                                  />
                                </div>
                              </div>

                              <div>
                                <label
                                  className={`block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium ${poppins.className}`}
                                  style={{ color: primaryColor }}
                                >
                                  Message (Optional)
                                </label>
                                <textarea
                                  value={donationForm.message}
                                  onChange={(e) =>
                                    setDonationForm({
                                      ...donationForm,
                                      message: e.target.value,
                                    })
                                  }
                                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm sm:text-base"
                                  style={{ outlineColor: primaryColor }}
                                  placeholder="Add a personal message or note..."
                                  rows={2}
                                />
                              </div>

                              <label className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={donationForm.anonymous}
                                  onChange={(e) =>
                                    setDonationForm({
                                      ...donationForm,
                                      anonymous: e.target.checked,
                                    })
                                  }
                                  className="mr-1.5 sm:mr-2"
                                  style={{ accentColor: primaryColor }}
                                />
                                <span
                                  className={`text-xs sm:text-sm ${poppins.className}`}
                                >
                                  Make this donation anonymous
                                </span>
                              </label>
                            </div>
                          </>
                        ) : (
                          <>
                            <h4
                              className={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              Payment Method
                            </h4>
                            <div className="space-y-3 sm:space-y-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <label
                                  className={`relative border-2 rounded-xl p-3 sm:p-4 cursor-pointer transition-all ${
                                    donationForm.paymentMethod === "bank"
                                      ? "border-[#691C33] bg-[#FFE6EE]/20"
                                      : "border-gray-200"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="bank"
                                    checked={
                                      donationForm.paymentMethod === "bank"
                                    }
                                    onChange={(e) =>
                                      setDonationForm({
                                        ...donationForm,
                                        paymentMethod: e.target.value,
                                      })
                                    }
                                    className="sr-only"
                                  />
                                  <div className="text-center">
                                    <div
                                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2"
                                      style={{
                                        backgroundColor: secondaryColor,
                                      }}
                                    >
                                      <CreditCard
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        style={{ color: primaryColor }}
                                      />
                                    </div>
                                    <span
                                      className={`font-medium text-sm sm:text-base ${poppins.className}`}
                                    >
                                      Bank Transfer
                                    </span>
                                  </div>
                                </label>

                                <label
                                  className={`relative border-2 rounded-xl p-3 sm:p-4 cursor-pointer transition-all ${
                                    donationForm.paymentMethod === "card"
                                      ? "border-[#691C33] bg-[#FFE6EE]/20"
                                      : "border-gray-200"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="card"
                                    checked={
                                      donationForm.paymentMethod === "card"
                                    }
                                    onChange={(e) =>
                                      setDonationForm({
                                        ...donationForm,
                                        paymentMethod: e.target.value,
                                      })
                                    }
                                    className="sr-only"
                                  />
                                  <div className="text-center">
                                    <div
                                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2"
                                      style={{
                                        backgroundColor: secondaryColor,
                                      }}
                                    >
                                      <CreditCard
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        style={{ color: primaryColor }}
                                      />
                                    </div>
                                    <span
                                      className={`font-medium text-sm sm:text-base ${poppins.className}`}
                                    >
                                      Card Payment
                                    </span>
                                  </div>
                                </label>
                              </div>

                              {donationForm.paymentMethod === "bank" && (
                                <div
                                  className="p-3 sm:p-4 rounded-xl"
                                  style={{ backgroundColor: secondaryColor }}
                                >
                                  <h5
                                    className={`font-bold mb-1.5 sm:mb-2 text-sm sm:text-base ${poppins.className}`}
                                    style={{ color: primaryColor }}
                                  >
                                    Bank Transfer Details:
                                  </h5>
                                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                                    <p>
                                      <strong>Bank:</strong> Zenith Bank PLC
                                    </p>
                                    <p>
                                      <strong>Account Name:</strong> Community
                                      Hope Initiative
                                    </p>
                                    <p>
                                      <strong>Account Number:</strong>{" "}
                                      1012345678
                                    </p>
                                    <p>
                                      <strong>Reference:</strong>{" "}
                                      {selectedPackage
                                        ? selectedPackage.name
                                        : selectedGrandma?.name}
                                    </p>
                                  </div>
                                  <p className="text-xs text-gray-600 mt-2 sm:mt-3">
                                    Please use the reference above when making
                                    your transfer. We'll confirm your payment
                                    within 24 hours.
                                  </p>
                                </div>
                              )}

                              {donationForm.paymentMethod === "card" && (
                                <div className="space-y-3 sm:space-y-4">
                                  <div>
                                    <label
                                      className={`block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium ${poppins.className}`}
                                      style={{ color: primaryColor }}
                                    >
                                      Card Number
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="1234 5678 9012 3456"
                                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm sm:text-base"
                                      style={{ outlineColor: primaryColor }}
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    <div>
                                      <label
                                        className={`block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium ${poppins.className}`}
                                        style={{ color: primaryColor }}
                                      >
                                        Expiry Date
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm sm:text-base"
                                        style={{ outlineColor: primaryColor }}
                                      />
                                    </div>
                                    <div>
                                      <label
                                        className={`block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium ${poppins.className}`}
                                        style={{ color: primaryColor }}
                                      >
                                        CVV
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="123"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm sm:text-base"
                                        style={{ outlineColor: primaryColor }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </>
                        )}

                        <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
                          {donationStep === 2 && (
                            <button
                              type="button"
                              onClick={() => setDonationStep(1)}
                              className="flex-1 py-2.5 sm:py-3 rounded-lg font-semibold border-2 text-sm sm:text-base"
                              style={{
                                borderColor: primaryColor,
                                color: primaryColor,
                                backgroundColor: "white",
                              }}
                            >
                              <span className={poppins.className}>Back</span>
                            </button>
                          )}

                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex-1 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base ${donationStep === 1 ? "w-full" : ""}`}
                            style={{
                              backgroundColor: primaryColor,
                              color: "white",
                            }}
                          >
                            <span
                              className={`flex items-center justify-center gap-2 ${poppins.className}`}
                            >
                              {donationStep === 1 ? (
                                <>
                                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                                  Continue to Payment
                                </>
                              ) : (
                                <>
                                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                                  Complete Donation
                                </>
                              )}
                            </span>
                          </motion.button>
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">
                          Your donation is secure and 100% goes to support{" "}
                          {selectedPackage
                            ? "families in need"
                            : selectedGrandma?.name}
                          .
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 lg:mt-20 px-4"
        >
          <div className="max-w-3xl mx-auto">
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${poppins.className}`}
              style={{ color: primaryColor }}
            >
              Your Support Changes Lives
            </h3>
            <p
              className={`text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base ${poppins.className}`}
            >
              Whether you choose to support a family or care for an elder, your
              contribution brings hope, dignity, and real change to our
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCause("packages")}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  backgroundColor: "white",
                  color: primaryColor,
                  border: `2px solid ${primaryColor}`,
                }}
              >
                <span
                  className={`flex items-center justify-center gap-2 ${poppins.className}`}
                >
                  <Package className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Support Packages
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCause("grandmas")}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: primaryColor, color: "white" }}
              >
                <span
                  className={`flex items-center justify-center gap-2 ${poppins.className}`}
                >
                  <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                  Meet Our Grandmas
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Causes;
