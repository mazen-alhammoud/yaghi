import { useEffect, useRef } from "react";

/* ─── Data ─── */

const HISTORICAL = [
  { year: 2015, students: 50 },
  { year: 2016, students: 100 },
  { year: 2017, students: 250 },
  { year: 2018, students: 550 },
  { year: 2019, students: 700 },
  { year: 2020, students: 1000 },
  { year: 2021, students: 1300 },
  { year: 2022, students: 1600 },
  { year: 2023, students: 1900 },
  { year: 2024, students: 2200 },
  { year: 2025, students: 2500 },
  { year: 2026, students: 2800 },
];

// Organic projection: if Khaled continues solo beyond 2026
const PROJECTED = [
  { year: 2026, students: 2800 },
  { year: 2027, students: 3100 },
  { year: 2028, students: 3400 },
  { year: 2029, students: 3700 },
  { year: 2030, students: 4000 },
];

// Exponential projection: Prep-Me partnership starting 2026
const EXPONENTIAL = [
  { year: 2026, students: 2800 },
  { year: 2027, students: 5000 },
  { year: 2028, students: 9000 },
  { year: 2029, students: 15000 },
  { year: 2030, students: 25000 },
];

const ALL_YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const MAX_VALUE = 25000;

/* ─── Chart dimensions ─── */
const CHART_W = 800;
const CHART_H = 380;
const PAD_LEFT = 60;
const PAD_RIGHT = 30;
const PAD_TOP = 30;
const PAD_BOTTOM = 50;
const PLOT_W = CHART_W - PAD_LEFT - PAD_RIGHT;
const PLOT_H = CHART_H - PAD_TOP - PAD_BOTTOM;

function xPos(year: number) {
  const idx = ALL_YEARS.indexOf(year);
  return PAD_LEFT + (idx / (ALL_YEARS.length - 1)) * PLOT_W;
}

function yPos(value: number) {
  return PAD_TOP + PLOT_H - (value / MAX_VALUE) * PLOT_H;
}

function pointsToPath(data: { year: number; students: number }[]) {
  return data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${xPos(d.year)} ${yPos(d.students)}`)
    .join(" ");
}

/* ─── Y-axis ticks ─── */
const Y_TICKS = [0, 5000, 10000, 15000, 20000, 25000];

function formatNum(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return String(n);
}

/* ─── Component ─── */

export default function StudentGrowth() {
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
      <section ref={sectionRef} className="relative h-full flex flex-col justify-center">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

          {/* Header */}
          <div className="mb-10">
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
                Growth Trajectory
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 animate-fade-up"
              style={{ animationDelay: "0.05s", lineHeight: "1.15", letterSpacing: "-0.03em" }}
            >
              Students Over the{" "}
              <span
                className="bg-clip-text text-transparent animate-gradient-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #1a33b8, #2444E2, #6b8cff, #2444E2, #1a33b8)",
                }}
              >
                Years
              </span>
            </h2>

            <p
              className="mt-3 text-base text-gray-500 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              From 50 students in 2015 to 2,800 by 2026 — and what happens next
              when proven teaching meets Prep-Me's technology and resources.
            </p>
          </div>

          {/* Chart */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <svg
              viewBox={`0 0 ${CHART_W} ${CHART_H}`}
              className="w-full"
              style={{ maxHeight: "420px" }}
            >
              <defs>
                <linearGradient id="expGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2444E2" />
                  <stop offset="100%" stopColor="#6b8cff" />
                </linearGradient>
                <linearGradient id="expFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2444E2" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#2444E2" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2444E2" />
                  <stop offset="100%" stopColor="#1a33b8" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {Y_TICKS.map((tick) => (
                <g key={tick}>
                  <line
                    x1={PAD_LEFT}
                    y1={yPos(tick)}
                    x2={CHART_W - PAD_RIGHT}
                    y2={yPos(tick)}
                    stroke="#e5e7eb"
                    strokeWidth="0.5"
                    strokeDasharray={tick === 0 ? "0" : "4 4"}
                  />
                  <text
                    x={PAD_LEFT - 10}
                    y={yPos(tick) + 4}
                    textAnchor="end"
                    className="text-[10px]"
                    fill="#9ca3af"
                  >
                    {formatNum(tick)}
                  </text>
                </g>
              ))}

              {/* X-axis labels */}
              {ALL_YEARS.map((year) => (
                <text
                  key={year}
                  x={xPos(year)}
                  y={CHART_H - 10}
                  textAnchor="middle"
                  className="text-[10px]"
                  fill={year > 2026 ? "#9ca3af" : "#4b5563"}
                  fontWeight={year === 2026 ? 600 : 400}
                >
                  {year}
                </text>
              ))}

              {/* Divider line at 2026 — partnership starts */}
              <line
                x1={xPos(2026)}
                y1={PAD_TOP}
                x2={xPos(2026)}
                y2={PAD_TOP + PLOT_H}
                stroke="#d1d5db"
                strokeWidth="1"
                strokeDasharray="6 4"
              />
              <text
                x={xPos(2026) + 8}
                y={PAD_TOP + 14}
                className="text-[9px]"
                fill="#9ca3af"
                fontWeight={500}
              >
                Partnership Begins
              </text>

              {/* Exponential area fill */}
              <path
                d={`${pointsToPath(EXPONENTIAL)} L ${xPos(2030)} ${yPos(0)} L ${xPos(2026)} ${yPos(0)} Z`}
                fill="url(#expFill)"
              />

              {/* Projected organic line (dashed) */}
              <path
                d={pointsToPath(PROJECTED)}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="8 6"
                strokeLinecap="round"
              />

              {/* Exponential Prep-Me line */}
              <path
                d={pointsToPath(EXPONENTIAL)}
                fill="none"
                stroke="url(#expGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Historical bars */}
              {HISTORICAL.map((d) => {
                const barW = 28;
                const x = xPos(d.year) - barW / 2;
                const h = (d.students / MAX_VALUE) * PLOT_H;
                const y = PAD_TOP + PLOT_H - h;
                return (
                  <g key={d.year}>
                    <rect
                      x={x}
                      y={y}
                      width={barW}
                      height={h}
                      rx={4}
                      fill="url(#barGrad)"
                    />
                    <text
                      x={xPos(d.year)}
                      y={y - 8}
                      textAnchor="middle"
                      className="text-[10px]"
                      fill="#2444E2"
                      fontWeight={600}
                    >
                      {formatNum(d.students)}
                    </text>
                  </g>
                );
              })}

              {/* Projected organic dots */}
              {PROJECTED.slice(1).map((d) => (
                <circle
                  key={d.year}
                  cx={xPos(d.year)}
                  cy={yPos(d.students)}
                  r={4}
                  fill="white"
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
              ))}

              {/* Exponential dots */}
              {EXPONENTIAL.slice(1).map((d) => (
                <g key={d.year}>
                  <circle
                    cx={xPos(d.year)}
                    cy={yPos(d.students)}
                    r={5}
                    fill="white"
                    stroke="#2444E2"
                    strokeWidth="2.5"
                  />
                  <text
                    x={xPos(d.year)}
                    y={yPos(d.students) - 12}
                    textAnchor="middle"
                    className="text-[10px]"
                    fill="#2444E2"
                    fontWeight={600}
                  >
                    {formatNum(d.students)}
                  </text>
                </g>
              ))}

              {/* Organic end label */}
              <text
                x={xPos(2030) + 2}
                y={yPos(PROJECTED[PROJECTED.length - 1].students) + 4}
                className="text-[9px]"
                fill="#94a3b8"
                fontWeight={500}
                textAnchor="start"
              >
                ← Solo
              </text>
            </svg>
          </div>

          {/* Legend */}
          <div
            className="flex flex-wrap items-center gap-6 mt-6 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-3 rounded-sm" style={{ background: "linear-gradient(180deg, #2444E2, #1a33b8)" }} />
              <span className="text-xs text-gray-600 font-medium">Actual Students (2015–2020)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 border-t-2 border-dashed" style={{ borderColor: "#94a3b8" }} />
              <span className="text-xs text-gray-500">Organic Growth (Solo)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-0.5 rounded" style={{ background: "linear-gradient(90deg, #2444E2, #6b8cff)" }} />
              <span className="text-xs font-semibold" style={{ color: "#2444E2" }}>
                With Prep-Me Partnership
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
