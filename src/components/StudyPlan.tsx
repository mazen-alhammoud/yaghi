import { useState, useEffect, useRef } from "react";

/* ─── Types ─── */

type TimeHorizon = "now" | "1year" | "5years";

interface Course {
  code: string;
  name: string;
  yaghiAt: TimeHorizon;
}

/* ─── Data ─── */

const SEMESTERS: { label: string; courses: Course[] }[] = [
  {
    label: "Fall 2026",
    courses: [
      { code: "MATH 201", name: "Calculus III", yaghiAt: "now" },
      { code: "FEAA 200", name: "Principles of Accounting", yaghiAt: "5years" },
      { code: "CIVE 210", name: "Statics", yaghiAt: "1year" },
      { code: "INDE 301", name: "Probability & Statistics for Engineers", yaghiAt: "5years" },
      { code: "ENGL 203", name: "Academic English", yaghiAt: "5years" },
    ],
  },
  {
    label: "Spring 2027",
    courses: [
      { code: "EECE 210", name: "Electrical Circuits", yaghiAt: "5years" },
      { code: "MATH 202", name: "Differential Equations", yaghiAt: "now" },
      { code: "PHYS 210", name: "General Physics", yaghiAt: "1year" },
      { code: "EECE 230", name: "Digital Logic Design", yaghiAt: "5years" },
      { code: "ENGL 206", name: "Technical Writing", yaghiAt: "5years" },
    ],
  },
  {
    label: "Summer 2027",
    courses: [
      { code: "STAT 230", name: "Intro to Probability", yaghiAt: "now" },
      { code: "ECON 211", name: "Microeconomics", yaghiAt: "1year" },
    ],
  },
];

const MAX_ROWS = Math.max(...SEMESTERS.map((s) => s.courses.length));

const HORIZON_ORDER: TimeHorizon[] = ["now", "1year", "5years"];

function isYaghi(course: Course, horizon: TimeHorizon) {
  return HORIZON_ORDER.indexOf(horizon) >= HORIZON_ORDER.indexOf(course.yaghiAt);
}

function getStats(horizon: TimeHorizon) {
  const all = SEMESTERS.flatMap((s) => s.courses);
  const yaghiCount = all.filter((c) => isYaghi(c, horizon)).length;
  return { total: all.length, yaghi: yaghiCount, pct: Math.round((yaghiCount / all.length) * 100) };
}

const TOGGLES: { key: TimeHorizon; label: string; sub: string }[] = [
  { key: "now", label: "Now", sub: "25% Yaghi" },
  { key: "1year", label: "In 1 Year", sub: "50% Yaghi" },
  { key: "5years", label: "In 5 Years", sub: "100% Yaghi" },
];

/* ─── Course card ─── */

function CourseCard({ course, horizon }: { course: Course; horizon: TimeHorizon }) {
  const yaghi = isYaghi(course, horizon);
  return (
    <div
      className="rounded-xl p-3.5 transition-all duration-500"
      style={{
        background: yaghi ? "rgba(36,68,226,0.05)" : "rgba(0,0,0,0.02)",
        border: yaghi
          ? "1px solid rgba(36,68,226,0.18)"
          : "1px solid rgba(0,0,0,0.06)",
        boxShadow: yaghi ? "0 2px 12px rgba(36,68,226,0.08)" : "none",
      }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span
          className="text-sm font-bold tabular-nums transition-colors duration-500"
          style={{ color: yaghi ? "#2444E2" : "#374151" }}
        >
          {course.code}
        </span>
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.6rem] font-semibold transition-all duration-500"
          style={{
            background: yaghi
              ? "linear-gradient(135deg, #2444E2, #4a6bff)"
              : "rgba(0,0,0,0.05)",
            color: yaghi ? "#fff" : "#9ca3af",
          }}
        >
          {yaghi && (
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
          {yaghi ? "Yaghi" : "Other"}
        </span>
      </div>
      <span className="text-xs text-gray-400 leading-tight">{course.name}</span>
    </div>
  );
}

/* ─── Component ─── */

export default function StudyPlan() {
  const [horizon, setHorizon] = useState<TimeHorizon>("now");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("in-view"));
  }, []);

  const stats = getStats(horizon);

  return (
    <div className="h-screen overflow-y-auto bg-white">
      <section ref={sectionRef} className="relative min-h-full flex flex-col justify-center py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

          {/* ── Header row: title + toggles ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 animate-fade-up"
                style={{
                  background: "rgba(36,68,226,0.06)",
                  border: "1px solid rgba(36,68,226,0.1)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2444E2" }} />
                <span className="text-xs font-medium" style={{ color: "#2444E2" }}>
                  Real Student Scenario
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 animate-fade-up"
                style={{ animationDelay: "0.05s", lineHeight: "1.15", letterSpacing: "-0.03em" }}
              >
                One Student.{" "}
                <span
                  className="bg-clip-text text-transparent animate-gradient-text"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #1a33b8, #2444E2, #6b8cff, #2444E2, #1a33b8)",
                  }}
                >
                  Every Course.
                </span>
              </h2>

              <p
                className="mt-2 text-sm text-gray-500 max-w-xl animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                AUB Industrial Engineering — see how Yaghi's reach expands from
                core math to the entire curriculum.
              </p>
            </div>

            {/* Toggle bar */}
            <div
              className="inline-flex rounded-xl p-1 animate-fade-up self-start lg:self-auto"
              style={{
                background: "rgba(36,68,226,0.04)",
                border: "1px solid rgba(36,68,226,0.08)",
                animationDelay: "0.15s",
              }}
            >
              {TOGGLES.map((t) => {
                const active = horizon === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setHorizon(t.key)}
                    className="relative px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer"
                    style={{
                      background: active
                        ? "linear-gradient(135deg, #2444E2, #4a6bff)"
                        : "transparent",
                      color: active ? "#fff" : "#6b7280",
                      boxShadow: active
                        ? "0 4px 16px rgba(36,68,226,0.25)"
                        : "none",
                    }}
                  >
                    <span className="block leading-tight">{t.label}</span>
                    <span
                      className="block text-[0.6rem] font-medium mt-0.5"
                      style={{ opacity: active ? 0.8 : 0.5 }}
                    >
                      {t.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Column layout: 3 semesters side by side ── */}
          <div
            className="grid grid-cols-3 gap-5 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {SEMESTERS.map((sem) => {
              const semYaghi = sem.courses.filter((c) => isYaghi(c, horizon)).length;
              return (
                <div key={sem.label} className="flex flex-col">
                  {/* Semester header */}
                  <div
                    className="rounded-xl px-4 py-3 mb-3"
                    style={{
                      background: "linear-gradient(135deg, rgba(36,68,226,0.06), rgba(36,68,226,0.02))",
                      border: "1px solid rgba(36,68,226,0.08)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-bold"
                        style={{ color: "#2444E2" }}
                      >
                        {sem.label}
                      </span>
                      <span
                        className="text-[0.6rem] font-semibold tabular-nums px-2 py-0.5 rounded-full transition-all duration-500"
                        style={{
                          background: semYaghi === sem.courses.length
                            ? "linear-gradient(135deg, #2444E2, #4a6bff)"
                            : "rgba(36,68,226,0.08)",
                          color: semYaghi === sem.courses.length ? "#fff" : "#2444E2",
                        }}
                      >
                        {semYaghi}/{sem.courses.length}
                      </span>
                    </div>
                    <span className="text-[0.65rem] text-gray-400">
                      {sem.courses.length} course{sem.courses.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Course cards */}
                  <div className="flex flex-col gap-2.5">
                    {sem.courses.map((course) => (
                      <CourseCard key={course.code} course={course} horizon={horizon} />
                    ))}
                    {/* Spacer cells to align columns */}
                    {Array.from({ length: MAX_ROWS - sem.courses.length }).map((_, i) => (
                      <div key={`spacer-${i}`} className="rounded-xl p-3.5" style={{ visibility: "hidden", border: "1px solid transparent" }}>
                        <div className="mb-1.5"><span className="text-sm">&nbsp;</span></div>
                        <span className="text-xs">&nbsp;</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Progress bar ── */}
          <div
            className="mt-5 flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-2.5 h-2.5 rounded-sm"
                  style={{ background: "linear-gradient(135deg, #2444E2, #4a6bff)" }}
                />
                <span className="text-[0.65rem] text-gray-500 font-medium">Yaghi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm bg-gray-200" />
                <span className="text-[0.65rem] text-gray-400">Other</span>
              </div>
            </div>

            <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(36,68,226,0.06)" }}>
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${stats.pct}%`,
                  background: "linear-gradient(90deg, #2444E2, #6b8cff)",
                  boxShadow: "0 0 12px rgba(36,68,226,0.3)",
                }}
              />
            </div>

            <span
              className="text-xs font-bold tabular-nums whitespace-nowrap"
              style={{ color: "#2444E2" }}
            >
              {stats.yaghi}/{stats.total} ({stats.pct}%)
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
