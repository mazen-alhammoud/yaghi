import { useEffect, useRef, useState, useCallback } from "react";
import assess1Img from "../assets/assess1.png";
import exam1Img from "../assets/Exam_1.svg";

const COURSES_AUB = [
  { code: "MATH201", name: "Calculus III", credits: 3, instructor: "K. Yaghi", yaghi: true },
  { code: "MATH202", name: "Linear Algebra", credits: 3, instructor: "K. Yaghi", yaghi: true },
  { code: "STAT230", name: "Probability & Statistics", credits: 3, instructor: "K. Yaghi", yaghi: true },
  { code: "PHYS210", name: "Physics II", credits: 3, instructor: "R. Nassar", yaghi: false },
  { code: "CMPS211", name: "Data Structures", credits: 3, instructor: "H. Mourad", yaghi: false },
  { code: "ECON201", name: "Microeconomics", credits: 3, instructor: "S. Khalil", yaghi: false },
  { code: "ENGL230", name: "Academic Writing", credits: 3, instructor: "L. Fares", yaghi: false },
];

const COURSES_IMAGINE = [
  { uni: "AUB", code: "MATH201", name: "Calculus III", credits: 3 },
  { uni: "AUB", code: "MATH202", name: "Linear Algebra", credits: 3 },
  { uni: "AUB", code: "STAT230", name: "Probability & Statistics", credits: 3 },
  { uni: "LAU", code: "MTH201", name: "Calculus III", credits: 3 },
  { uni: "LAU", code: "MTH301", name: "Real Analysis", credits: 3 },
  { uni: "USJ", code: "MAT210", name: "Applied Mathematics", credits: 3 },
  { uni: "NDU", code: "MAT250", name: "Discrete Mathematics", credits: 3 },
];

function CourseTableGraphic() {
  const [imagineIf, setImagineIf] = useState(false);

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-5 pb-3 flex items-start justify-between">
        <div>
          <div className="text-[0.65rem] font-medium text-gray-400 uppercase tracking-wider mb-1">
            Student Schedule — Fall 2025
          </div>
          <div className="text-sm font-bold text-gray-900">
            {imagineIf ? "University Course Registration" : "AUB Course Registration"}
          </div>
        </div>
        <button
          onClick={() => setImagineIf((v) => !v)}
          className="px-3 py-1.5 rounded-full text-[0.65rem] font-semibold transition-all duration-300 cursor-pointer"
          style={{
            background: imagineIf ? "#2444E2" : "rgba(36,68,226,0.08)",
            color: imagineIf ? "#fff" : "#2444E2",
            border: "1px solid rgba(36,68,226,0.15)",
          }}
        >
          {imagineIf ? "Reset" : "Imagine If"}
        </button>
      </div>

      {/* Table */}
      <div className="flex-1 px-5 pb-5 overflow-hidden">
        {!imagineIf ? (
          /* Default: AUB only, mixed instructors */
          <table className="w-full text-left" style={{ borderCollapse: "separate", borderSpacing: "0 4px" }}>
            <thead>
              <tr>
                <th className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-wider pb-2 pl-3">Course</th>
                <th className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-wider pb-2">Name</th>
                <th className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-wider pb-2 text-center">Cr.</th>
                <th className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-wider pb-2 pr-3 text-right">Instructor</th>
              </tr>
            </thead>
            <tbody>
              {COURSES_AUB.map((c) => (
                <tr
                  key={c.code}
                  style={{
                    background: c.yaghi ? "rgba(36,68,226,0.06)" : "rgba(0,0,0,0.015)",
                  }}
                >
                  <td className="py-2 pl-3 rounded-l-lg">
                    <div className="flex items-center gap-2">
                      {c.yaghi && (
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#2444E2" }}
                        />
                      )}
                      <span
                        className="text-xs font-bold"
                        style={{ color: c.yaghi ? "#2444E2" : "#374151" }}
                      >
                        {c.code}
                      </span>
                    </div>
                  </td>
                  <td className="py-2">
                    <span className="text-xs text-gray-600">{c.name}</span>
                  </td>
                  <td className="py-2 text-center">
                    <span className="text-xs text-gray-400">{c.credits}</span>
                  </td>
                  <td className="py-2 pr-3 text-right rounded-r-lg">
                    <span
                      className="text-xs font-medium"
                      style={{ color: c.yaghi ? "#2444E2" : "#9ca3af" }}
                    >
                      {c.instructor}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          /* Imagine If: multi-university, all Yaghi */
          <table className="w-full text-left" style={{ borderCollapse: "separate", borderSpacing: "0 4px" }}>
            <thead>
              <tr>
                <th className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-wider pb-2 pl-3">Uni</th>
                <th className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-wider pb-2">Course</th>
                <th className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-wider pb-2">Name</th>
                <th className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-wider pb-2 pr-3 text-right">Instructor</th>
              </tr>
            </thead>
            <tbody>
              {COURSES_IMAGINE.map((c) => (
                <tr
                  key={`${c.uni}-${c.code}`}
                  style={{ background: "rgba(36,68,226,0.06)" }}
                >
                  <td className="py-2 pl-3 rounded-l-lg">
                    <span
                      className="text-[0.6rem] font-bold px-1.5 py-0.5 rounded"
                      style={{ background: "rgba(36,68,226,0.1)", color: "#2444E2" }}
                    >
                      {c.uni}
                    </span>
                  </td>
                  <td className="py-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#2444E2" }}
                      />
                      <span className="text-xs font-bold" style={{ color: "#2444E2" }}>
                        {c.code}
                      </span>
                    </div>
                  </td>
                  <td className="py-2">
                    <span className="text-xs text-gray-600">{c.name}</span>
                  </td>
                  <td className="py-2 pr-3 text-right rounded-r-lg">
                    <span className="text-xs font-medium" style={{ color: "#2444E2" }}>
                      K. Yaghi
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Legend */}
        <div className="mt-3 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2444E2" }} />
            <span className="text-[0.6rem] font-medium" style={{ color: "#2444E2" }}>
              {imagineIf ? "Yaghi — across universities" : "Yaghi — Prep-Me"}
            </span>
          </div>
          {!imagineIf && (
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <span className="text-[0.6rem] text-gray-400 font-medium">Other Instructors</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const OFFERS = [
  {
    title: "Centralized Digital Platform",
    subtitle: "for Inquiries & Class Registration",
    description:
      "We help you build a unified online hub where university students can explore available classes, submit inquiries, and enroll in courses — simplifying registration and enabling seamless, structured communication across your programs.",
    image: assess1Img as string | null,
    tags: ["Centralized Booking", "Financial Tracking & Reporting", "Student Analytics", "Dashboard", "Management"],
    graphic: null as string | null,
  },
  {
    title: "Diagnostic Assessment & Academic Planning Platform",
    subtitle: "",
    description:
      "We help you build a structured diagnostic exam system that evaluates students' current standing, generates clear performance insights, and translates results into a data-driven action plan — empowering students to understand where they are and strategically plan their next academic steps.",
    image: exam1Img as string | null,
    tags: ["Notes", "Interactive Exercises", "Assessments", "Analytics", "Performance Reports"],
    graphic: null as string | null,
  },
  {
    title: "Scalable Academic Expansion Framework",
    subtitle: "",
    description:
      "We help you extend the philosophy currently applied to the limited courses at American University of Beirut into a scalable, transferable model that can be implemented across additional universities and a broader portfolio of courses.",
    image: null as string | null,
    tags: [] as string[],
    graphic: "course-table" as string | null,
  },
  // Add more offers here
];

export default function WhatWeOffer() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.add("in-view");
    });
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const st = container.scrollTop;
    setScrollY(st);
    const vh = container.clientHeight;
    // First viewport is header, then each offer is one viewport
    const offerIndex = Math.round(Math.max(0, st - vh) / vh);
    setActiveIndex(Math.min(offerIndex, OFFERS.length - 1));
  }, []);

  // Total scrollable height: header (1vh) + offers (n * 1vh)
  const totalSections = 1 + OFFERS.length;

  return (
    <div className="h-screen overflow-hidden bg-white">
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto"
        onScroll={handleScroll}
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* Scrollable spacer */}
        <div style={{ height: `${totalSections * 100}vh` }}>

          {/* Sticky container */}
          <div className="sticky top-0 h-screen">
            <section ref={sectionRef} className="relative h-full flex flex-col">

              {/* Header — fades out as we scroll into offers */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                style={{
                  opacity: scrollY < (scrollRef.current?.clientHeight ?? 800) * 0.5 ? 1 : 0,
                  pointerEvents: scrollY < (scrollRef.current?.clientHeight ?? 800) * 0.5 ? "auto" : "none",
                }}
              >
                <div className="text-center">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 animate-fade-up"
                    style={{
                      background: "rgba(36,68,226,0.06)",
                      border: "1px solid rgba(36,68,226,0.1)",
                      animationDelay: "0s",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2444E2" }} />
                    <span className="text-xs font-medium" style={{ color: "#2444E2" }}>
                      Our Services
                    </span>
                  </div>

                  <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 animate-fade-up"
                    style={{ animationDelay: "0.05s", lineHeight: "1.1", letterSpacing: "-0.03em" }}
                  >
                    What We{" "}
                    <span
                      className="bg-clip-text text-transparent animate-gradient-text"
                      style={{
                        backgroundImage: "linear-gradient(90deg, #1a33b8, #2444E2, #6b8cff, #2444E2, #1a33b8)",
                      }}
                    >
                      Offer
                    </span>
                  </h2>

                  <p
                    className="mt-4 text-base text-gray-500 max-w-xl mx-auto animate-fade-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    Scroll to explore our services
                  </p>

                  {/* Scroll indicator */}
                  <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                    <svg
                      className="w-6 h-6 mx-auto text-gray-300 animate-float"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Offer cards — visible once scrolled past header */}
              <div
                className="absolute inset-0 flex items-center transition-opacity duration-500"
                style={{
                  opacity: scrollY >= (scrollRef.current?.clientHeight ?? 800) * 0.5 ? 1 : 0,
                  pointerEvents: scrollY >= (scrollRef.current?.clientHeight ?? 800) * 0.5 ? "auto" : "none",
                }}
              >
                <div className="w-full h-full">
                  {OFFERS.map((offer, i) => {
                    const isEven = i % 2 === 0;
                    const isActive = activeIndex === i;

                    return (
                      <div
                        key={offer.title}
                        className="absolute inset-0 flex items-center transition-all duration-700"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? "translateY(0)" : "translateY(40px)",
                          pointerEvents: isActive ? "auto" : "none",
                        }}
                      >
                        <div
                          className="w-full h-full flex items-center"
                          style={{ flexDirection: isEven ? "row" : "row-reverse" }}
                        >
                          {/* Content side — 50% width */}
                          <div className="w-1/2 h-full flex items-center px-10 lg:px-16">
                            <div className={isEven ? "" : "ml-auto text-right"}>
                              <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                                style={{
                                  background: "rgba(36,68,226,0.06)",
                                  border: "1px solid rgba(36,68,226,0.1)",
                                }}
                              >
                                <span className="text-xs font-semibold tabular-nums" style={{ color: "#2444E2" }}>
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                              </div>

                              <h3
                                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900"
                                style={{ lineHeight: "1.15", letterSpacing: "-0.02em" }}
                              >
                                {offer.title}
                              </h3>
                              {offer.subtitle && (
                                <p
                                  className="text-lg font-medium mt-1"
                                  style={{ color: "#2444E2" }}
                                >
                                  {offer.subtitle}
                                </p>
                              )}
                              <p className="mt-4 text-base text-gray-500 leading-relaxed max-w-xl">
                                {offer.description}
                              </p>
                              {offer.tags.length > 0 && (
                                <div className={`mt-4 flex flex-wrap gap-2 ${isEven ? "" : "justify-end"}`}>
                                  {offer.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2.5 py-1 rounded-full text-[0.65rem] font-medium"
                                      style={{
                                        background: "rgba(36,68,226,0.06)",
                                        color: "#2444E2",
                                        border: "1px solid rgba(36,68,226,0.1)",
                                      }}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Image side — 50% width, full height */}
                          <div className="w-1/2 h-full flex items-center p-6 lg:p-10">
                            <div
                              className="w-full h-[80%] rounded-2xl overflow-hidden"
                              style={{
                                boxShadow: "0 8px 40px rgba(36,68,226,0.1)",
                                border: "1px solid rgba(36,68,226,0.08)",
                              }}
                            >
                              {offer.graphic === "course-table" ? (
                                <CourseTableGraphic />
                              ) : offer.image ? (
                                <img
                                  src={offer.image}
                                  alt={offer.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div
                                  className="w-full h-full flex items-center justify-center"
                                  style={{
                                    background: "linear-gradient(135deg, rgba(36,68,226,0.06), rgba(107,140,255,0.08))",
                                  }}
                                >
                                  <span className="text-xs text-gray-400 font-medium">Image placeholder</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress dots */}
              {scrollY >= (scrollRef.current?.clientHeight ?? 800) * 0.5 && OFFERS.length > 1 && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  {OFFERS.map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        background: i === activeIndex ? "#2444E2" : "#d1d5db",
                        transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>
              )}

            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
