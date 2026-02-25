import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 5000, suffix: "+", label: "Students Annually", format: true },
  { target: 20000, suffix: "+", label: "Students Across All Programs", format: true },
  { target: 50, suffix: "+", label: "Partner Schools", format: false },
  { target: 150, suffix: "+", label: "Team Members", format: false },
  { target: 12, suffix: "+", label: "Years of Experience", format: false },
];

function formatNumber(n: number) {
  return n.toLocaleString("en-US");
}

function CountUp({ target, suffix, format, delay }: { target: number; suffix: string; format: boolean; delay: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now() + delay;
    let raf: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, delay]);

  return (
    <>
      {format ? formatNumber(value) : value}
      {suffix}
    </>
  );
}

export default function OurNumbers() {
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
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

          {/* Header */}
          <div className="text-center mb-14">
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
                By the Numbers
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 animate-fade-up"
              style={{ animationDelay: "0.05s", lineHeight: "1.1", letterSpacing: "-0.03em" }}
            >
              Our{" "}
              <span
                className="bg-clip-text text-transparent animate-gradient-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #1a33b8, #2444E2, #6b8cff, #2444E2, #1a33b8)",
                }}
              >
                Impact
              </span>
            </h2>

            <p
              className="mt-4 text-base text-gray-500 max-w-xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              The House of Prep in numbers — a decade of growth, reach, and commitment to student success.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative rounded-2xl p-6 flex flex-col items-center text-center animate-fade-up ${
                  i >= 4 ? "col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(36,68,226,0.08)",
                  boxShadow: "0 4px 32px rgba(36,68,226,0.06)",
                  animationDelay: `${0.15 + i * 0.08}s`,
                }}
              >
                <div
                  className="text-3xl sm:text-4xl font-extrabold mb-2 tabular-nums"
                  style={{ color: "#2444E2" }}
                >
                  <CountUp
                    target={stat.target}
                    suffix={stat.suffix}
                    format={stat.format}
                    delay={400 + i * 150}
                  />
                </div>
                <div className="text-sm text-gray-500 font-medium leading-snug">
                  {stat.label}
                </div>

                {/* Accent line at top */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 rounded-b-full"
                  style={{
                    background: "linear-gradient(90deg, #2444E2, #6b8cff)",
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
