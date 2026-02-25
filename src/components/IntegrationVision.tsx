import { useEffect, useRef } from "react";

/* ─── Data ─── */

const COURSES = [
  "MATH", "PHYS", "STAT", "ECON", "CIVE", "EECE", "INDE", "ENGL",
];

const UNIVERSITIES = [
  "AUB", "LAU", "USJ", "NDU", "BAU", "LU", "USEK",
];

/* ─── SVG grid config ─── */

const SVG_W = 960;
const SVG_H = 580;
const CX = SVG_W / 2;
const CY = SVG_H / 2;

/* Horizontal spacing for courses */
const H_SPAN = 680;
const H_START = CX - H_SPAN / 2;
const hStep = H_SPAN / (COURSES.length - 1);

/* Vertical spacing for universities */
const V_SPAN = 380;
const V_START = CY - V_SPAN / 2;
const vStep = V_SPAN / (UNIVERSITIES.length - 1);

/* ─── Component ─── */

export default function IntegrationVision() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("in-view"));
  }, []);

  return (
    <div className="h-screen overflow-y-auto bg-white">
      <section ref={sectionRef} className="relative min-h-full flex flex-col justify-center py-20">
        {/* Ambient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(36,68,226,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
          {/* ── Header ── */}
          <div className="text-center mb-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 animate-fade-up"
              style={{
                background: "rgba(36,68,226,0.06)",
                border: "1px solid rgba(36,68,226,0.1)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2444E2" }} />
              <span className="text-xs font-medium" style={{ color: "#2444E2" }}>
                The Vision
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
                Achieve Together
              </span>
            </h2>

            <p
              className="mt-3 text-sm text-gray-500 max-w-lg mx-auto animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Scaling across every course and every university in Lebanon.
            </p>
          </div>

          {/* ── Integration Grid Visual ── */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="w-full"
              style={{ maxHeight: "580px" }}
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="hLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2444E2" stopOpacity="0" />
                  <stop offset="20%" stopColor="#2444E2" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#2444E2" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="#2444E2" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2444E2" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="vLine" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6b8cff" stopOpacity="0" />
                  <stop offset="20%" stopColor="#6b8cff" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#6b8cff" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="#6b8cff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#6b8cff" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="nodeGlow">
                  <stop offset="0%" stopColor="#2444E2" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#2444E2" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="centerGlow">
                  <stop offset="0%" stopColor="#2444E2" stopOpacity="0.3" />
                  <stop offset="40%" stopColor="#2444E2" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#2444E2" stopOpacity="0" />
                </radialGradient>

                {/* Pulse animation for traveling dots */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* ── Grid lines (faint) ── */}
              {UNIVERSITIES.map((_, ui) => {
                const y = V_START + ui * vStep;
                return (
                  <line
                    key={`hg-${ui}`}
                    x1={H_START - 20}
                    y1={y}
                    x2={H_START + H_SPAN + 20}
                    y2={y}
                    stroke="url(#hLine)"
                    strokeWidth="1"
                  />
                );
              })}
              {COURSES.map((_, ci) => {
                const x = H_START + ci * hStep;
                return (
                  <line
                    key={`vg-${ci}`}
                    x1={x}
                    y1={V_START - 20}
                    x2={x}
                    y2={V_START + V_SPAN + 20}
                    stroke="url(#vLine)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* ── Center radial glow ── */}
              <circle cx={CX} cy={CY} r={160} fill="url(#centerGlow)" />

              {/* ── Intersection nodes ── */}
              {UNIVERSITIES.map((_, ui) =>
                COURSES.map((_, ci) => {
                  const x = H_START + ci * hStep;
                  const y = V_START + ui * vStep;
                  const distFromCenter = Math.sqrt(
                    ((x - CX) / (H_SPAN / 2)) ** 2 + ((y - CY) / (V_SPAN / 2)) ** 2
                  );
                  const opacity = Math.max(0.15, 1 - distFromCenter * 0.6);
                  const r = 3 + (1 - distFromCenter) * 2.5;
                  return (
                    <g key={`node-${ui}-${ci}`}>
                      <circle cx={x} cy={y} r={r * 3} fill="url(#nodeGlow)" />
                      <circle
                        cx={x}
                        cy={y}
                        r={Math.max(2, r)}
                        fill="#2444E2"
                        opacity={opacity}
                      />
                    </g>
                  );
                })
              )}

              {/* ── Horizontal axis: "Courses" arrow & labels ── */}
              {/* Arrow line */}
              <line
                x1={H_START - 40}
                y1={CY}
                x2={H_START + H_SPAN + 40}
                y2={CY}
                stroke="#2444E2"
                strokeWidth="2"
                strokeOpacity="0.6"
              />
              {/* Arrow head right */}
              <polygon
                points={`${H_START + H_SPAN + 40},${CY} ${H_START + H_SPAN + 28},${CY - 6} ${H_START + H_SPAN + 28},${CY + 6}`}
                fill="#2444E2"
                opacity="0.6"
              />
              {/* Arrow head left */}
              <polygon
                points={`${H_START - 40},${CY} ${H_START - 28},${CY - 6} ${H_START - 28},${CY + 6}`}
                fill="#2444E2"
                opacity="0.6"
              />

              {/* Course labels along top */}
              {COURSES.map((course, ci) => {
                const x = H_START + ci * hStep;
                return (
                  <g key={`cl-${ci}`}>
                    <rect
                      x={x - 26}
                      y={V_START - 48}
                      width={52}
                      height={22}
                      rx={6}
                      fill="rgba(36,68,226,0.06)"
                      stroke="rgba(36,68,226,0.12)"
                      strokeWidth="1"
                    />
                    <text
                      x={x}
                      y={V_START - 33}
                      textAnchor="middle"
                      fill="#2444E2"
                      fontSize="10"
                      fontWeight="700"
                      fontFamily="Inter, system-ui, sans-serif"
                    >
                      {course}
                    </text>
                  </g>
                );
              })}

              {/* ── Vertical axis: "Universities" arrow & labels ── */}
              <line
                x1={CX}
                y1={V_START - 40}
                x2={CX}
                y2={V_START + V_SPAN + 40}
                stroke="#6b8cff"
                strokeWidth="2"
                strokeOpacity="0.6"
              />
              {/* Arrow head bottom */}
              <polygon
                points={`${CX},${V_START + V_SPAN + 40} ${CX - 6},${V_START + V_SPAN + 28} ${CX + 6},${V_START + V_SPAN + 28}`}
                fill="#6b8cff"
                opacity="0.6"
              />
              {/* Arrow head top */}
              <polygon
                points={`${CX},${V_START - 40} ${CX - 6},${V_START - 28} ${CX + 6},${V_START - 28}`}
                fill="#6b8cff"
                opacity="0.6"
              />

              {/* University labels along left */}
              {UNIVERSITIES.map((uni, ui) => {
                const y = V_START + ui * vStep;
                return (
                  <g key={`ul-${ui}`}>
                    <rect
                      x={H_START - 80}
                      y={y - 11}
                      width={48}
                      height={22}
                      rx={6}
                      fill="rgba(107,140,255,0.08)"
                      stroke="rgba(107,140,255,0.15)"
                      strokeWidth="1"
                    />
                    <text
                      x={H_START - 56}
                      y={y + 4}
                      textAnchor="middle"
                      fill="#4a6bff"
                      fontSize="10"
                      fontWeight="700"
                      fontFamily="Inter, system-ui, sans-serif"
                    >
                      {uni}
                    </text>
                  </g>
                );
              })}

              {/* ── Traveling pulses on horizontal axis ── */}
              {[0, 1, 2].map((i) => (
                <circle key={`hp-${i}`} r="4" fill="#2444E2" filter="url(#glow)" opacity="0.7">
                  <animateMotion
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                    begin={`${i * 1}s`}
                    path={`M ${H_START - 30} ${CY} L ${H_START + H_SPAN + 30} ${CY}`}
                  />
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" begin={`${i * 1}s`} />
                </circle>
              ))}

              {/* ── Traveling pulses on vertical axis ── */}
              {[0, 1, 2].map((i) => (
                <circle key={`vp-${i}`} r="4" fill="#6b8cff" filter="url(#glow)" opacity="0.7">
                  <animateMotion
                    dur={`${3.5 + i * 0.5}s`}
                    repeatCount="indefinite"
                    begin={`${i * 1.2}s`}
                    path={`M ${CX} ${V_START - 30} L ${CX} ${V_START + V_SPAN + 30}`}
                  />
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur={`${3.5 + i * 0.5}s`} repeatCount="indefinite" begin={`${i * 1.2}s`} />
                </circle>
              ))}

              {/* ── Center fusion node ── */}
              {/* Expanding pulse rings */}
              {[0, 1, 2].map((i) => (
                <circle
                  key={`pr-${i}`}
                  cx={CX}
                  cy={CY}
                  r="20"
                  fill="none"
                  stroke="#2444E2"
                  strokeWidth="1"
                  opacity="0"
                >
                  <animate
                    attributeName="r"
                    values="20;60"
                    dur="3s"
                    begin={`${i}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0"
                    dur="3s"
                    begin={`${i}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}

              {/* Core node */}
              <circle cx={CX} cy={CY} r="22" fill="url(#centerGlow)" />
              <circle
                cx={CX}
                cy={CY}
                r="14"
                fill="#2444E2"
              >
                <animate
                  attributeName="r"
                  values="14;16;14"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={CX}
                cy={CY}
                r="15"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
              {/* Lightning icon in center */}
              <g transform={`translate(${CX - 7}, ${CY - 9})`}>
                <polygon
                  points="8 0 2 9 7 9 6 18 12 8 7 8 8 0"
                  fill="rgba(255,255,255,0.9)"
                />
              </g>

              {/* ── Horizontal axis label (right side, large) ── */}
              <g>
                <rect
                  x={H_START + H_SPAN + 48}
                  y={CY - 28}
                  width={140}
                  height={56}
                  rx={12}
                  fill="#2444E2"
                />
                <text
                  x={H_START + H_SPAN + 118}
                  y={CY - 6}
                  fill="#fff"
                  fontSize="14"
                  fontWeight="800"
                  fontFamily="Inter, system-ui, sans-serif"
                  textAnchor="middle"
                  letterSpacing="0.08em"
                >
                  HORIZONTAL
                </text>
                <text
                  x={H_START + H_SPAN + 118}
                  y={CY + 14}
                  fill="rgba(255,255,255,0.7)"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="Inter, system-ui, sans-serif"
                  textAnchor="middle"
                >
                  Multiple Courses
                </text>
              </g>

              {/* ── Vertical axis label (bottom, large) ── */}
              <g>
                <rect
                  x={CX - 80}
                  y={V_START + V_SPAN + 44}
                  width={160}
                  height={56}
                  rx={12}
                  fill="#4a6bff"
                />
                <text
                  x={CX}
                  y={V_START + V_SPAN + 68}
                  fill="#fff"
                  fontSize="14"
                  fontWeight="800"
                  fontFamily="Inter, system-ui, sans-serif"
                  textAnchor="middle"
                  letterSpacing="0.08em"
                >
                  VERTICAL
                </text>
                <text
                  x={CX}
                  y={V_START + V_SPAN + 86}
                  fill="rgba(255,255,255,0.7)"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="Inter, system-ui, sans-serif"
                  textAnchor="middle"
                >
                  Multiple Universities
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
