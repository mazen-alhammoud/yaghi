import { useEffect, useRef } from "react";
import khaledImg from "../assets/Khaled Yaghi.png";

const ACHIEVEMENTS = [
  { number: "11+", label: "Years Teaching Math" },
  { number: "B.E.", label: "Civil Engineering" },
  { number: "87.3", label: "GPA – Distinction" },
  { number: "AUB", label: "Alma Mater" },
];

const CREDENTIALS = [
  "Math Instructor — 11+ years of private and institutional tutoring",
  "B.E. in Civil Engineering — American University of Beirut (2010–2014), Graduated with Distinction",
];

export default function KhaledYaghi() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.add("in-view");
    });
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-white">
      <section ref={sectionRef} className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ─── Left: Photo + stats ─── */}
            <div className="flex flex-col items-center lg:items-start animate-fade-up" style={{ animationDelay: "0s" }}>
              {/* Photo */}
              <div className="relative mb-8">
                <div
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden"
                  style={{
                    boxShadow: "0 24px 80px rgba(36,68,226,0.15), 0 0 0 1px rgba(36,68,226,0.08)",
                  }}
                >
                  <img
                    src={khaledImg}
                    alt="Khaled Yaghi"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative accent */}
                <div
                  className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl -z-10"
                  style={{
                    background: "linear-gradient(135deg, #2444E2, #6b8cff)",
                    opacity: 0.15,
                  }}
                />
              </div>

              {/* Stats grid */}
              <div
                className="grid grid-cols-2 gap-4 w-full max-w-xs animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                {ACHIEVEMENTS.map((a) => (
                  <div
                    key={a.label}
                    className="text-center p-3 rounded-xl"
                    style={{
                      background: "rgba(36,68,226,0.04)",
                      border: "1px solid rgba(36,68,226,0.08)",
                    }}
                  >
                    <div
                      className="text-2xl font-extrabold"
                      style={{ color: "#2444E2" }}
                    >
                      {a.number}
                    </div>
                    <div className="text-[0.65rem] text-gray-500 font-medium mt-0.5">
                      {a.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Right: Identity content ─── */}
            <div>
              {/* Tag */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 animate-fade-up"
                style={{
                  background: "rgba(36,68,226,0.06)",
                  border: "1px solid rgba(36,68,226,0.1)",
                  animationDelay: "0.05s",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#2444E2" }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "#2444E2" }}
                >
                  Meet the Visionary
                </span>
              </div>

              {/* Name */}
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 animate-fade-up"
                style={{
                  animationDelay: "0.1s",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                }}
              >
                Khaled{" "}
                <span
                  className="bg-clip-text text-transparent animate-gradient-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #1a33b8, #2444E2, #6b8cff, #2444E2, #1a33b8)",
                  }}
                >
                  Yaghi
                </span>
              </h2>

              {/* Role */}
              <p
                className="mt-2 text-lg font-medium text-gray-500 animate-fade-up"
                style={{ animationDelay: "0.15s" }}
              >
                Math Instructor &middot; Civil Engineer &middot; Prep-Me Partner
              </p>

              {/* Bio */}
              <p
                className="mt-5 text-base text-gray-600 leading-relaxed max-w-lg animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                For over 11 years, Khaled Yaghi has been one of Lebanon's most
                sought-after math instructors, combining deep subject mastery
                with an analytical mindset shaped by his civil engineering
                background at AUB. His tutoring endeavor is at the heart of the
                Yaghi &amp; Prep-Me synergy: proven teaching methods, now
                to be amplified through technology to reach more students with
                greater precision and impact.
              </p>

              {/* Credentials */}
              <div
                className="mt-6 space-y-2.5 animate-fade-up"
                style={{ animationDelay: "0.25s" }}
              >
                {CREDENTIALS.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#2444E2" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-700">{c}</span>
                  </div>
                ))}
              </div>

              {/* Personal statement */}
              <blockquote
                className="mt-8 pl-4 border-l-2 animate-fade-up"
                style={{
                  borderColor: "#2444E2",
                  animationDelay: "0.35s",
                }}
              >
                <p className="text-sm text-gray-500 italic leading-relaxed">
                  "They may forget Math201 or Taylor and Binomial, but they will never forget how much I love them."
                </p>
                <p className="mt-2 text-xs text-gray-400 font-medium">
                  — December 22, 2017
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
