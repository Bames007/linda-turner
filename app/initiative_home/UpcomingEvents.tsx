// components/Sections/UpcomingEvents.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { bebasNeue, poppins } from "../utils/constants";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  User,
  CheckCircle,
  AlertCircle,
  Heart,
  Share2,
  Bookmark,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const UpcomingEvents = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventId: "",
    date: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeView, setActiveView] = useState<"calendar" | "list">("calendar");
  const [isMobile, setIsMobile] = useState(false);
  const [showEventList, setShowEventList] = useState(true);

  const primaryColor = "#691C33";
  const secondaryColor = "#FFE6EE";
  const accentColor = "#8A2E4D";

  // Define unique weekday headers with proper keys
  const weekDays = useMemo(
    () => [
      { key: "sun", label: "S" },
      { key: "mon", label: "M" },
      { key: "tue", label: "T" },
      { key: "wed", label: "W" },
      { key: "thu", label: "T" },
      { key: "fri", label: "F" },
      { key: "sat", label: "S" },
    ],
    [],
  );

  // Define full weekday names for desktop view
  const fullWeekDays = useMemo(
    () => [
      { key: "sunday", label: "Sun" },
      { key: "monday", label: "Mon" },
      { key: "tuesday", label: "Tue" },
      { key: "wednesday", label: "Wed" },
      { key: "thursday", label: "Thu" },
      { key: "friday", label: "Fri" },
      { key: "saturday", label: "Sat" },
    ],
    [],
  );

  // Generate months from current month to July
  const months = useMemo(() => {
    const monthsArray = [];
    const current = new Date();
    const targetMonth = new Date(current.getFullYear(), 6, 1); // July is month 6

    while (current <= targetMonth) {
      monthsArray.push(new Date(current));
      current.setMonth(current.getMonth() + 1);
    }
    return monthsArray;
  }, []);

  // Upcoming Events Data
  const upcomingEvents = useMemo(
    () => [
      {
        id: 1,
        title: "Community Food Drive",
        description:
          "Monthly food collection and distribution for families in need. Join us to sort, pack, and deliver essential food items.",
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
        time: "9:00 AM - 3:00 PM",
        location: "Community Center, Main Hall",
        organizer: "Operation Feed the Poor",
        volunteersNeeded: 25,
        volunteersRegistered: 18,
        category: "Food Support",
        requirements: [
          "Comfortable clothing",
          "Closed-toe shoes",
          "Positive attitude!",
        ],
        contact: {
          phone: "+234 812 345 6789",
          email: "fooddrive@community.org",
        },
        images: ["/images/food-drive1.jpg", "/images/food-drive2.jpg"],
      },
      {
        id: 2,
        title: "Elder Health Check Camp",
        description:
          "Free health check-ups, medication distribution, and wellness workshops for our elderly community members.",
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 20),
        time: "8:00 AM - 4:00 PM",
        location: "Health Clinic, Downtown",
        organizer: "Adopt a Grandma Initiative",
        volunteersNeeded: 15,
        volunteersRegistered: 12,
        category: "Healthcare",
        requirements: [
          "Medical background preferred",
          "Patience and empathy",
          "Valid ID",
        ],
        contact: {
          phone: "+234 813 456 7890",
          email: "healthcamp@community.org",
        },
        images: ["/images/health-camp1.jpg", "/images/health-camp2.jpg"],
      },
      {
        id: 3,
        title: "Youth Mentorship Workshop",
        description:
          "Empowering at-risk youth through career guidance, life skills training, and educational support.",
        date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 5),
        time: "10:00 AM - 2:00 PM",
        location: "Youth Center, Education Wing",
        organizer: "Community Youth Program",
        volunteersNeeded: 20,
        volunteersRegistered: 15,
        category: "Education",
        requirements: [
          "Background check",
          "Commitment to 3-month program",
          "Teaching experience helpful",
        ],
        contact: {
          phone: "+234 814 567 8901",
          email: "youthmentor@community.org",
        },
        images: ["/images/youth-workshop1.jpg", "/images/youth-workshop2.jpg"],
      },
      {
        id: 4,
        title: "Women's Empowerment Session",
        description:
          "Skills training, financial literacy workshops, and support groups for women from underprivileged backgrounds.",
        date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 12),
        time: "2:00 PM - 6:00 PM",
        location: "Women's Resource Center",
        organizer: "Gender Support Network",
        volunteersNeeded: 10,
        volunteersRegistered: 8,
        category: "Empowerment",
        requirements: [
          "Female volunteers preferred",
          "Experience in counseling/training",
          "Cultural sensitivity",
        ],
        contact: {
          phone: "+234 815 678 9012",
          email: "womensupport@community.org",
        },
        images: [
          "/images/womens-empowerment1.jpg",
          "/images/womens-empowerment2.jpg",
        ],
      },
      {
        id: 5,
        title: "Community Garden Planting",
        description:
          "Create sustainable food sources by planting vegetables and fruits in our community garden.",
        date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 25),
        time: "7:00 AM - 12:00 PM",
        location: "Community Garden, Green Zone",
        organizer: "Sustainable Living Initiative",
        volunteersNeeded: 30,
        volunteersRegistered: 22,
        category: "Environment",
        requirements: [
          "Gardening tools if available",
          "Sun protection",
          "Water bottle",
        ],
        contact: { phone: "+234 816 789 0123", email: "garden@community.org" },
        images: [
          "/images/garden-planting1.jpg",
          "/images/garden-planting2.jpg",
        ],
      },
      {
        id: 6,
        title: "Mobile Clinic Outreach",
        description:
          "Bringing healthcare services to remote communities without access to medical facilities.",
        date: new Date(new Date().getFullYear(), new Date().getMonth() + 2, 3),
        time: "8:00 AM - 5:00 PM",
        location: "Rural Community Center",
        organizer: "Healthcare Access Program",
        volunteersNeeded: 18,
        volunteersRegistered: 14,
        category: "Healthcare",
        requirements: [
          "Medical professionals only",
          "Valid license",
          "Travel gear",
        ],
        contact: {
          phone: "+234 817 890 1234",
          email: "mobileclinic@community.org",
        },
        images: ["/images/mobile-clinic1.jpg", "/images/mobile-clinic2.jpg"],
      },
      {
        id: 7,
        title: "Elderly Tech Training",
        description:
          "Teaching basic smartphone and computer skills to our elderly community members.",
        date: new Date(new Date().getFullYear(), new Date().getMonth() + 2, 18),
        time: "10:00 AM - 1:00 PM",
        location: "Library, Computer Lab",
        organizer: "Adopt a Grandma Initiative",
        volunteersNeeded: 12,
        volunteersRegistered: 9,
        category: "Education",
        requirements: ["Tech-savvy", "Patience", "Teaching ability"],
        contact: {
          phone: "+234 818 901 2345",
          email: "techtraining@community.org",
        },
        images: ["/images/tech-training1.jpg", "/images/tech-training2.jpg"],
      },
      {
        id: 8,
        title: "School Supplies Distribution",
        description:
          "Providing essential school supplies to children from low-income families.",
        date: new Date(new Date().getFullYear(), new Date().getMonth() + 3, 8),
        time: "9:00 AM - 4:00 PM",
        location: "Central School Campus",
        organizer: "Operation Feed the Poor",
        volunteersNeeded: 25,
        volunteersRegistered: 20,
        category: "Education",
        requirements: [
          "Organizational skills",
          "Experience with children",
          "Valid ID",
        ],
        contact: {
          phone: "+234 819 012 3456",
          email: "schoolsupplies@community.org",
        },
        images: [
          "/images/school-supplies1.jpg",
          "/images/school-supplies2.jpg",
        ],
      },
      {
        id: 9,
        title: "Community Clean-up Drive",
        description:
          "Cleaning public spaces and creating awareness about environmental responsibility.",
        date: new Date(new Date().getFullYear(), new Date().getMonth() + 3, 22),
        time: "7:00 AM - 12:00 PM",
        location: "Various locations across city",
        organizer: "Environmental Action Group",
        volunteersNeeded: 50,
        volunteersRegistered: 35,
        category: "Environment",
        requirements: [
          "Cleaning supplies if possible",
          "Comfortable clothing",
          "Community spirit",
        ],
        contact: { phone: "+234 820 123 4567", email: "cleanup@community.org" },
        images: ["/images/cleanup1.jpg", "/images/cleanup2.jpg"],
      },
      {
        id: 10,
        title: "Holiday Meal Preparation",
        description:
          "Preparing and delivering special holiday meals to isolated elderly and families in need.",
        date: new Date(new Date().getFullYear(), 6, 15), // July 15
        time: "6:00 AM - 8:00 PM",
        location: "Community Kitchen",
        organizer: "Operation Feed the Poor",
        volunteersNeeded: 40,
        volunteersRegistered: 28,
        category: "Food Support",
        requirements: [
          "Food handling certificate if available",
          "Team player",
          "Full day commitment",
        ],
        contact: {
          phone: "+234 821 234 5678",
          email: "holidaymeals@community.org",
        },
        images: ["/images/holiday-meals1.jpg", "/images/holiday-meals2.jpg"],
      },
    ],
    [],
  );

  // Get events for selected date
  const getEventsForDate = (date: Date) => {
    return upcomingEvents.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    );
  };

  // Calendar generation functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const hasEvent = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    return getEventsForDate(date).length > 0;
  };

  const handleDateClick = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    setSelectedDate(date);
    const events = getEventsForDate(date);
    if (events.length > 0) {
      setSelectedEvent(events[0]);
      if (isMobile) {
        setShowEventList(false);
      }
    }
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Registration submitted:", registrationForm);
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      setSelectedEvent(null);
      setRegistrationForm({
        name: "",
        phone: "",
        email: "",
        eventId: "",
        date: "",
      });
      if (isMobile) {
        setShowEventList(true);
      }
    }, 3000);
  };

  // Get events for current month
  const eventsForCurrentMonth = upcomingEvents.filter(
    (event) => event.date.getMonth() === currentMonth.getMonth(),
  );

  // Generate calendar days
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Previous month padding
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 md:h-12" />);
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEventOnDay = hasEvent(day);
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth.getMonth();

      days.push(
        <motion.button
          key={`day-${day}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleDateClick(day)}
          className={`relative h-10 md:h-12 flex items-center justify-center rounded-lg transition-all duration-200 ${
            isToday(day)
              ? "ring-2 ring-offset-1 md:ring-offset-2 font-bold"
              : ""
          } ${
            isSelected
              ? "text-white shadow-lg"
              : hasEventOnDay
                ? "text-gray-900 font-medium hover:shadow-md"
                : "text-gray-700 hover:bg-gray-100"
          }`}
          style={{
            backgroundColor: isSelected
              ? primaryColor
              : isToday(day)
                ? secondaryColor
                : "transparent",
            borderColor: isToday(day) ? primaryColor : "transparent",
            color: isSelected
              ? "white"
              : isToday(day)
                ? primaryColor
                : "inherit",
          }}
        >
          {day}
          {hasEventOnDay && !isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute bottom-1 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
          )}
        </motion.button>,
      );
    }

    return days;
  };

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setActiveView("calendar");
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
            <Calendar className="w-4 h-4 mr-2" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Join Our Movement
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight ${bebasNeue.className}`}
            style={{ color: primaryColor }}
          >
            Upcoming
            <span className="block" style={{ color: accentColor }}>
              Events & Activities
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 ${poppins.className}`}
          >
            Be part of something meaningful. Join our upcoming events and make a
            real difference in your community.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* View Toggle - Desktop */}
          {!isMobile && (
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="inline-flex p-1 rounded-xl bg-gray-100">
                <button
                  onClick={() => setActiveView("calendar")}
                  className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all ${poppins.className} ${
                    activeView === "calendar"
                      ? "shadow-md"
                      : "opacity-80 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor:
                      activeView === "calendar" ? primaryColor : "transparent",
                    color: activeView === "calendar" ? "white" : "#4B5563",
                  }}
                >
                  <span className={`text-sm md:text-base ${poppins.className}`}>
                    Calendar View
                  </span>
                </button>
                <button
                  onClick={() => setActiveView("list")}
                  className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all ${poppins.className} ${
                    activeView === "list"
                      ? "shadow-md"
                      : "opacity-80 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor:
                      activeView === "list" ? primaryColor : "transparent",
                    color: activeView === "list" ? "white" : "#4B5563",
                  }}
                >
                  <span className={`text-sm md:text-base ${poppins.className}`}>
                    List View
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Mobile View Toggle */}
          {isMobile && (
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
                {months.slice(0, 4).map((month, index) => (
                  <button
                    key={`month-${index}`}
                    onClick={() => setCurrentMonth(month)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all ${
                      currentMonth.getMonth() === month.getMonth()
                        ? "shadow-md"
                        : ""
                    }`}
                    style={{
                      backgroundColor:
                        currentMonth.getMonth() === month.getMonth()
                          ? primaryColor
                          : secondaryColor,
                      color:
                        currentMonth.getMonth() === month.getMonth()
                          ? "white"
                          : primaryColor,
                    }}
                  >
                    {month.toLocaleDateString("en-US", { month: "short" })}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Calendar Section */}
            {(activeView === "calendar" || isMobile) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 ${
                  isMobile && !showEventList ? "hidden" : "block"
                }`}
              >
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth() - 1,
                        ),
                      )
                    }
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <h3
                    className={`text-lg md:text-xl lg:text-2xl font-bold ${bebasNeue.className}`}
                  >
                    {currentMonth.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h3>
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth() + 1,
                        ),
                      )
                    }
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                {/* Month Selector - Desktop */}
                {!isMobile && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-4 md:mb-6">
                    {months.map((month, index) => (
                      <button
                        key={`month-selector-${index}`}
                        onClick={() => setCurrentMonth(month)}
                        className={`py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                          currentMonth.getMonth() === month.getMonth()
                            ? "shadow-md"
                            : ""
                        }`}
                        style={{
                          backgroundColor:
                            currentMonth.getMonth() === month.getMonth()
                              ? primaryColor
                              : secondaryColor,
                          color:
                            currentMonth.getMonth() === month.getMonth()
                              ? "white"
                              : primaryColor,
                        }}
                      >
                        {month.toLocaleDateString("en-US", { month: "short" })}
                      </button>
                    ))}
                  </div>
                )}

                {/* Calendar Grid */}
                <div className="mb-4 md:mb-6">
                  {/* Weekday Headers - Mobile shows single letters */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {weekDays.map((day) => (
                      <div
                        key={day.key}
                        className="text-center text-gray-600 text-xs md:text-sm font-medium py-2"
                      >
                        {day.label}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-2"
                      style={{ backgroundColor: accentColor }}
                    />
                    <span className={`text-xs md:text-sm ${poppins.className}`}>
                      Event Day
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-2 ring-2 ring-offset-1 md:ring-offset-2 ring-[#691C33]"
                      style={{
                        backgroundColor: secondaryColor,
                      }}
                    />
                    <span className={`text-xs md:text-sm ${poppins.className}`}>
                      Today
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-2"
                      style={{ backgroundColor: primaryColor }}
                    />
                    <span className={`text-xs md:text-sm ${poppins.className}`}>
                      Selected
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Events List / Details Section */}
            <div className="space-y-4 md:space-y-6">
              {/* Selected Event Details (Mobile) */}
              {isMobile && selectedEvent && !showEventList ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl md:rounded-3xl shadow-lg md:shadow-xl overflow-hidden"
                >
                  {/* Back Button */}
                  <div className="p-4 border-b">
                    <button
                      onClick={() => setShowEventList(true)}
                      className="flex items-center text-sm font-medium"
                      style={{ color: primaryColor }}
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Back to Events
                    </button>
                  </div>

                  {/* Event Header */}
                  <div
                    className="p-4 md:p-6"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm">
                        <span
                          className={`text-xs font-medium ${poppins.className}`}
                          style={{ color: primaryColor }}
                        >
                          {selectedEvent.category}
                        </span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm">
                        <span
                          className={`text-xs font-medium ${poppins.className}`}
                          style={{ color: primaryColor }}
                        >
                          {selectedEvent.volunteersNeeded -
                            selectedEvent.volunteersRegistered}{" "}
                          spots left
                        </span>
                      </div>
                    </div>

                    <h3
                      className={`text-lg md:text-xl font-bold mb-2 ${bebasNeue.className}`}
                      style={{ color: primaryColor }}
                    >
                      {selectedEvent.title}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className={`text-sm ${poppins.className}`}>
                          {selectedEvent.date.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className={`text-sm ${poppins.className}`}>
                          {selectedEvent.time}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className={`text-sm ${poppins.className}`}>
                          {selectedEvent.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-4 md:p-6">
                    <p
                      className={`text-sm text-gray-700 mb-4 leading-relaxed ${poppins.className}`}
                    >
                      {selectedEvent.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div
                        className="text-center p-3 rounded-lg"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        <div
                          className={`text-lg md:text-xl font-bold mb-1 ${bebasNeue.className}`}
                          style={{ color: primaryColor }}
                        >
                          {selectedEvent.volunteersRegistered}
                        </div>
                        <div
                          className={`text-xs ${poppins.className}`}
                          style={{ color: accentColor }}
                        >
                          Registered
                        </div>
                      </div>
                      <div
                        className="text-center p-3 rounded-lg"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        <div
                          className={`text-lg md:text-xl font-bold mb-1 ${bebasNeue.className}`}
                          style={{ color: primaryColor }}
                        >
                          {selectedEvent.volunteersNeeded}
                        </div>
                        <div
                          className={`text-xs ${poppins.className}`}
                          style={{ color: accentColor }}
                        >
                          Needed
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-4">
                      <h4
                        className={`text-base font-bold mb-2 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        Requirements
                      </h4>
                      <ul className="space-y-1">
                        {selectedEvent.requirements.map(
                          (req: string, index: number) => (
                            <li
                              key={`req-${index}`}
                              className="flex items-start"
                            >
                              <CheckCircle
                                className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                                style={{ color: accentColor }}
                              />
                              <span
                                className={`text-sm text-gray-700 ${poppins.className}`}
                              >
                                {req}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-4">
                      <h4
                        className={`text-base font-bold mb-2 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        Contact Organizer
                      </h4>
                      <div className="space-y-2">
                        <a
                          href={`tel:${selectedEvent.contact.phone}`}
                          className="flex items-center text-sm text-gray-700 hover:text-gray-900"
                        >
                          <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className={poppins.className}>
                            {selectedEvent.contact.phone}
                          </span>
                        </a>
                        <a
                          href={`mailto:${selectedEvent.contact.email}`}
                          className="flex items-center text-sm text-gray-700 hover:text-gray-900"
                        >
                          <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className={poppins.className}>
                            {selectedEvent.contact.email}
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Registration Form */}
                    <div>
                      <h4
                        className={`text-base font-bold mb-3 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        Register as Volunteer
                      </h4>
                      {isRegistered ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-4 rounded-lg text-center"
                          style={{ backgroundColor: secondaryColor }}
                        >
                          <CheckCircle
                            className="w-8 h-8 mx-auto mb-2"
                            style={{ color: accentColor }}
                          />
                          <h5
                            className={`text-lg font-bold mb-1 ${bebasNeue.className}`}
                            style={{ color: primaryColor }}
                          >
                            Registration Successful!
                          </h5>
                          <p
                            className={`text-sm text-gray-700 ${poppins.className}`}
                          >
                            Thank you for registering. We'll contact you with
                            more details soon.
                          </p>
                        </motion.div>
                      ) : (
                        <form
                          onSubmit={handleRegistration}
                          className="space-y-3"
                        >
                          <div>
                            <label
                              className={`block mb-1 text-xs font-medium ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              Full Name
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="text"
                                required
                                value={registrationForm.name}
                                onChange={(e) =>
                                  setRegistrationForm({
                                    ...registrationForm,
                                    name: e.target.value,
                                  })
                                }
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                                placeholder="Enter your full name"
                                style={
                                  { "--tw-ring-color": primaryColor } as any
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              className={`block mb-1 text-xs font-medium ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              Phone Number
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="tel"
                                required
                                value={registrationForm.phone}
                                onChange={(e) =>
                                  setRegistrationForm({
                                    ...registrationForm,
                                    phone: e.target.value,
                                  })
                                }
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                                placeholder="Enter your phone number"
                                style={
                                  { "--tw-ring-color": primaryColor } as any
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              className={`block mb-1 text-xs font-medium ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              Email Address
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="email"
                                required
                                value={registrationForm.email}
                                onChange={(e) =>
                                  setRegistrationForm({
                                    ...registrationForm,
                                    email: e.target.value,
                                  })
                                }
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                                placeholder="Enter your email"
                                style={
                                  { "--tw-ring-color": primaryColor } as any
                                }
                              />
                            </div>
                          </div>
                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm"
                            style={{
                              backgroundColor: primaryColor,
                              color: "white",
                            }}
                          >
                            <span
                              className={`flex items-center justify-center gap-2 ${poppins.className}`}
                            >
                              <Heart className="w-4 h-4" />
                              Register as Volunteer
                            </span>
                          </motion.button>
                        </form>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : null}

              {/* Selected Event Details (Desktop) */}
              {!isMobile && selectedEvent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden"
                >
                  {/* Event Header */}
                  <div
                    className="p-6"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm">
                          <span
                            className={`text-sm font-medium ${poppins.className}`}
                            style={{ color: primaryColor }}
                          >
                            {selectedEvent.category}
                          </span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm">
                          <span
                            className={`text-sm font-medium ${poppins.className}`}
                            style={{ color: primaryColor }}
                          >
                            {selectedEvent.volunteersNeeded -
                              selectedEvent.volunteersRegistered}{" "}
                            spots left
                          </span>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                        <Bookmark
                          className="w-5 h-5"
                          style={{ color: primaryColor }}
                        />
                      </button>
                    </div>

                    <h3
                      className={`text-xl md:text-2xl font-bold mb-3 ${bebasNeue.className}`}
                      style={{ color: primaryColor }}
                    >
                      {selectedEvent.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 md:gap-4">
                      <div className="flex items-center text-sm md:text-base text-gray-700">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className={poppins.className}>
                          {selectedEvent.date.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-700">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className={poppins.className}>
                          {selectedEvent.time}
                        </span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-700">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className={poppins.className}>
                          {selectedEvent.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-4 md:p-6">
                    <p
                      className={`text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed ${poppins.className}`}
                    >
                      {selectedEvent.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div
                        className="text-center p-3 md:p-4 rounded-lg md:rounded-xl"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        <div
                          className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 ${bebasNeue.className}`}
                          style={{ color: primaryColor }}
                        >
                          {selectedEvent.volunteersRegistered}
                        </div>
                        <div
                          className={`text-xs md:text-sm ${poppins.className}`}
                          style={{ color: accentColor }}
                        >
                          Registered Volunteers
                        </div>
                      </div>
                      <div
                        className="text-center p-3 md:p-4 rounded-lg md:rounded-xl"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        <div
                          className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 ${bebasNeue.className}`}
                          style={{ color: primaryColor }}
                        >
                          {selectedEvent.volunteersNeeded}
                        </div>
                        <div
                          className={`text-xs md:text-sm ${poppins.className}`}
                          style={{ color: accentColor }}
                        >
                          Volunteers Needed
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-4 md:mb-6">
                      <h4
                        className={`text-base md:text-lg font-bold mb-2 md:mb-3 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        Requirements
                      </h4>
                      <ul className="space-y-1 md:space-y-2">
                        {selectedEvent.requirements.map(
                          (req: string, index: number) => (
                            <li
                              key={`req-${index}`}
                              className="flex items-center"
                            >
                              <CheckCircle
                                className="w-4 h-4 mr-2 md:mr-3 flex-shrink-0"
                                style={{ color: accentColor }}
                              />
                              <span
                                className={`text-sm md:text-base text-gray-700 ${poppins.className}`}
                              >
                                {req}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-4 md:mb-6">
                      <h4
                        className={`text-base md:text-lg font-bold mb-2 md:mb-3 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        Contact Organizer
                      </h4>
                      <div className="flex flex-wrap gap-3 md:gap-4">
                        <a
                          href={`tel:${selectedEvent.contact.phone}`}
                          className="flex items-center text-sm md:text-base text-gray-700 hover:text-gray-900"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          <span className={poppins.className}>
                            {selectedEvent.contact.phone}
                          </span>
                        </a>
                        <a
                          href={`mailto:${selectedEvent.contact.email}`}
                          className="flex items-center text-sm md:text-base text-gray-700 hover:text-gray-900"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          <span className={poppins.className}>
                            {selectedEvent.contact.email}
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Registration Form */}
                    <div>
                      <h4
                        className={`text-base md:text-lg font-bold mb-3 md:mb-4 ${bebasNeue.className}`}
                        style={{ color: primaryColor }}
                      >
                        Register as Volunteer
                      </h4>
                      {isRegistered ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-4 md:p-6 rounded-lg md:rounded-xl text-center"
                          style={{ backgroundColor: secondaryColor }}
                        >
                          <CheckCircle
                            className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4"
                            style={{ color: accentColor }}
                          />
                          <h5
                            className={`text-lg md:text-xl font-bold mb-1 md:mb-2 ${bebasNeue.className}`}
                            style={{ color: primaryColor }}
                          >
                            Registration Successful!
                          </h5>
                          <p
                            className={`text-sm md:text-base text-gray-700 ${poppins.className}`}
                          >
                            Thank you for registering. We'll contact you with
                            more details soon.
                          </p>
                        </motion.div>
                      ) : (
                        <form
                          onSubmit={handleRegistration}
                          className="space-y-3 md:space-y-4"
                        >
                          <div>
                            <label
                              className={`block mb-1 md:mb-2 text-xs md:text-sm font-medium ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              Full Name
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                              <input
                                type="text"
                                required
                                value={registrationForm.name}
                                onChange={(e) =>
                                  setRegistrationForm({
                                    ...registrationForm,
                                    name: e.target.value,
                                  })
                                }
                                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm md:text-base"
                                placeholder="Enter your full name"
                                style={
                                  { "--tw-ring-color": primaryColor } as any
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              className={`block mb-1 md:mb-2 text-xs md:text-sm font-medium ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              Phone Number
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                              <input
                                type="tel"
                                required
                                value={registrationForm.phone}
                                onChange={(e) =>
                                  setRegistrationForm({
                                    ...registrationForm,
                                    phone: e.target.value,
                                  })
                                }
                                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm md:text-base"
                                placeholder="Enter your phone number"
                                style={
                                  { "--tw-ring-color": primaryColor } as any
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              className={`block mb-1 md:mb-2 text-xs md:text-sm font-medium ${poppins.className}`}
                              style={{ color: primaryColor }}
                            >
                              Email Address
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                              <input
                                type="email"
                                required
                                value={registrationForm.email}
                                onChange={(e) =>
                                  setRegistrationForm({
                                    ...registrationForm,
                                    email: e.target.value,
                                  })
                                }
                                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm md:text-base"
                                placeholder="Enter your email address"
                                style={
                                  { "--tw-ring-color": primaryColor } as any
                                }
                              />
                            </div>
                          </div>
                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 md:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm md:text-base"
                            style={{
                              backgroundColor: primaryColor,
                              color: "white",
                            }}
                          >
                            <span
                              className={`flex items-center justify-center gap-2 ${poppins.className}`}
                            >
                              <Heart className="w-4 h-4 md:w-5 md:h-5" />
                              Register as Volunteer
                            </span>
                          </motion.button>
                        </form>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : null}

              {/* Events List - Only show when no event is selected on desktop, or always on mobile in list mode */}
              {(!selectedEvent || (isMobile && showEventList)) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 ${
                    !isMobile && activeView === "list" ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3
                      className={`text-lg md:text-xl lg:text-2xl font-bold ${bebasNeue.className}`}
                      style={{ color: primaryColor }}
                    >
                      {isMobile
                        ? "Events This Month"
                        : activeView === "list"
                          ? "All Upcoming Events"
                          : "Upcoming Events This Month"}
                    </h3>
                    {!isMobile && (
                      <span
                        className={`text-sm text-gray-500 ${poppins.className}`}
                      >
                        {eventsForCurrentMonth.length} events
                      </span>
                    )}
                  </div>
                  <div
                    className={`space-y-3 md:space-y-4 ${
                      activeView === "list"
                        ? "max-h-[600px] overflow-y-auto pr-2"
                        : ""
                    }`}
                  >
                    {(activeView === "list"
                      ? upcomingEvents
                      : eventsForCurrentMonth
                    ).map((event) => (
                      <motion.div
                        key={`event-${event.id}`}
                        whileHover={{ x: 4 }}
                        onClick={() => {
                          setSelectedEvent(event);
                          setSelectedDate(event.date);
                          if (isMobile) setShowEventList(false);
                        }}
                        className="p-3 md:p-4 rounded-lg border border-gray-200 hover:shadow-md cursor-pointer transition-all"
                        style={{ borderColor: secondaryColor }}
                      >
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h4
                                className={`font-bold text-sm md:text-base ${poppins.className}`}
                                style={{ color: primaryColor }}
                              >
                                {event.title}
                              </h4>
                              <div
                                className="px-2 md:px-3 py-1 rounded-full text-xs font-medium ml-2 md:ml-4 flex-shrink-0"
                                style={{
                                  backgroundColor: secondaryColor,
                                  color: primaryColor,
                                }}
                              >
                                {event.category}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 md:gap-3 mb-2">
                              <span className="flex items-center text-xs text-gray-600">
                                <Calendar className="w-3 h-3 mr-1" />
                                {event.date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              <span className="flex items-center text-xs text-gray-600">
                                <Clock className="w-3 h-3 mr-1" />
                                {event.time}
                              </span>
                              <span className="flex items-center text-xs text-gray-600">
                                <Users className="w-3 h-3 mr-1" />
                                {event.volunteersRegistered}/
                                {event.volunteersNeeded}
                              </span>
                            </div>
                            <p
                              className={`text-xs md:text-sm text-gray-600 line-clamp-2 ${poppins.className}`}
                            >
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Quick Stats */}
              {(!selectedEvent || !isMobile) && (
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-md text-center">
                    <div
                      className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 ${bebasNeue.className}`}
                      style={{ color: primaryColor }}
                    >
                      {upcomingEvents.length}
                    </div>
                    <div
                      className={`text-xs md:text-sm ${poppins.className}`}
                      style={{ color: accentColor }}
                    >
                      Total Events
                    </div>
                  </div>
                  <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-md text-center">
                    <div
                      className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 ${bebasNeue.className}`}
                      style={{ color: primaryColor }}
                    >
                      {upcomingEvents.reduce(
                        (sum, event) => sum + event.volunteersNeeded,
                        0,
                      )}
                    </div>
                    <div
                      className={`text-xs md:text-sm ${poppins.className}`}
                      style={{ color: accentColor }}
                    >
                      Volunteers Needed
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
