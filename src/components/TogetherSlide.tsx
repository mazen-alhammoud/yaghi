import { useEffect, useRef } from "react";

const YAGHI_ALONE = [
  "11+ years math tutoring experience",
  "Deep student relationships & trust",
  "Proven teaching methodology",
  "Strong AUB student network",
  "Subject mastery (Math & Stats)",
];

const PREP_ALONE = [
  "Technology platform & infrastructure",
  "Digital assessment tools (Elmy)",
  "Student management systems",
  "Marketing & brand reach",
  "Operational scale & resources",
];

const TOGETHER = [
  "5,000+ students annually across multiple universities",
  "Data-driven personalized learning at scale",
  "Seamless registration, assessment & tutoring pipeline",
  "Multi-campus expansion (AUB, LAU, USJ, NDU…)",
  "Full-spectrum student success ecosystem",
];

export default function TogetherSlide() {
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
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

          {/* Header */}
          <div className="text-center mb-12">
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
                The Synergy
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 animate-fade-up"
              style={{ animationDelay: "0.05s", lineHeight: "1.1", letterSpacing: "-0.03em" }}
            >
              Better{" "}
              <span
                className="bg-clip-text text-transparent animate-gradient-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #1a33b8, #2444E2, #6b8cff, #2444E2, #1a33b8)",
                }}
              >
                Together
              </span>
            </h2>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-start">

            {/* Yaghi alone */}
            <div
              className="rounded-2xl p-6 animate-fade-up"
              style={{
                background: "rgba(0,0,0,0.02)",
                border: "1px solid rgba(0,0,0,0.06)",
                animationDelay: "0.1s",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-extrabold"
                  style={{ background: "rgba(148,163,184,0.15)", color: "#64748b" }}
                >
                  Y
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-700">Yaghi Alone</div>
                  <div className="text-[0.6rem] text-gray-400">Current state</div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {YAGHI_ALONE.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-gray-500 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Together — center, highlighted */}
            <div
              className="rounded-2xl p-6 relative animate-fade-up"
              style={{
                background: "rgba(36,68,226,0.04)",
                border: "1px solid rgba(36,68,226,0.12)",
                boxShadow: "0 8px 40px rgba(36,68,226,0.08)",
                animationDelay: "0.2s",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full"
                style={{ background: "linear-gradient(90deg, #2444E2, #6b8cff)" }}
              />

              <div className="flex items-center justify-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "#2444E2" }}
                >
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "#2444E2" }}>Together</div>
                  <div className="text-[0.6rem] text-gray-400">The multiplier</div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {TOGETHER.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                      style={{ color: "#2444E2" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-xs font-medium text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prep-Me alone */}
            <div
              className="rounded-2xl p-6 animate-fade-up"
              style={{
                background: "rgba(0,0,0,0.02)",
                border: "1px solid rgba(0,0,0,0.06)",
                animationDelay: "0.3s",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-extrabold"
                  style={{ background: "rgba(148,163,184,0.15)", color: "#64748b" }}
                >
                  P
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-700">Prep-Me Alone</div>
                  <div className="text-[0.6rem] text-gray-400">Current state</div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {PREP_ALONE.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-gray-500 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Tagline */}
          <p
            className="text-center mt-8 text-sm text-gray-400 font-medium animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Yaghi's expertise &times; Prep-Me's platform = exponential student impact
          </p>

        </div>
      </section>
    </div>
  );
}
