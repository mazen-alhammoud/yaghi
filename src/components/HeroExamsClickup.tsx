import { useEffect, useRef } from "react";

/* ─── Values orbit data ─── */

const VALUES = [
  { label: 'Ethics', angle: 0 },
  { label: 'Credibility', angle: 72 },
  { label: 'Quality', angle: 144 },
  { label: 'Dominance', angle: 216 },
  { label: 'Performance Tracking', angle: 288 },
];

const VALUES_ORBIT_RADIUS = 240;

/* ─── Fusion graphic data ─── */

const PARTICLES = [
  { top: '14%', left: '20%', delay: 0, dx: '-20px', dy: '-30px', dur: 3.5, size: 3 },
  { top: '78%', left: '75%', delay: 0.8, dx: '25px', dy: '20px', dur: 4, size: 2.5 },
  { top: '25%', left: '82%', delay: 1.6, dx: '15px', dy: '-25px', dur: 3.2, size: 3.5 },
  { top: '70%', left: '18%', delay: 2.4, dx: '-30px', dy: '15px', dur: 3.8, size: 2 },
  { top: '10%', left: '55%', delay: 0.4, dx: '10px', dy: '-35px', dur: 4.2, size: 2.5 },
  { top: '85%', left: '45%', delay: 1.2, dx: '-15px', dy: '25px', dur: 3.6, size: 3 },
  { top: '40%', left: '12%', delay: 2.0, dx: '-25px', dy: '-10px', dur: 3.4, size: 2 },
  { top: '55%', left: '88%', delay: 0.6, dx: '20px', dy: '15px', dur: 4.4, size: 2.5 },
];

/* ─── Fusion Graphic ─── */

function FusionGraphic() {
  return (
    <div className="relative flex items-center justify-center w-full" style={{ height: 580 }}>
      {/* Deep ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
        style={{
          width: 500, height: 500,
          animation: 'hero-glow-pulse 5s ease-in-out infinite',
          background: 'radial-gradient(circle, rgba(36,68,226,0.10) 0%, rgba(107,140,255,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Expanding rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
          style={{
            width: 200, height: 200,
            border: '1px solid rgba(36,68,226,0.08)',
            animation: `hero-ring-expand 4s ease-out ${i * 1.3}s infinite`,
          }}
        />
      ))}

      {/* Static orbit rings */}
      <svg
        className="absolute left-1/2 top-1/2 pointer-events-none"
        style={{ width: 450, height: 450, transform: 'translate(-50%, -50%)' }}
        viewBox="0 0 450 450"
      >
        <circle cx="225" cy="225" r="200" fill="none" stroke="rgba(36,68,226,0.06)" strokeWidth="1" />
        <circle cx="225" cy="225" r="155" fill="none" stroke="rgba(36,68,226,0.04)" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      {/* Slow-spinning dotted orbit */}
      <svg
        className="absolute left-1/2 top-1/2 pointer-events-none"
        style={{
          width: 430, height: 430,
          transform: 'translate(-50%, -50%)',
          animation: 'orbit-spin 40s linear infinite',
        }}
        viewBox="0 0 430 430"
      >
        <circle cx="215" cy="215" r="190" fill="none" stroke="rgba(36,68,226,0.07)" strokeWidth="1" strokeDasharray="2 10" />
        {/* Orbiting dot */}
        <circle cx="215" cy="25" r="3" fill="rgba(36,68,226,0.25)" />
      </svg>

      {/* Beam connections (animated dashes) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="beamL" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2444E2" stopOpacity="0" />
            <stop offset="50%" stopColor="#2444E2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2444E2" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamR" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b8cff" stopOpacity="0" />
            <stop offset="50%" stopColor="#6b8cff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6b8cff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="18%" y1="50%" x2="43%" y2="50%" stroke="url(#beamL)" strokeWidth="1.5" strokeDasharray="8 4"
          style={{ animation: 'hero-beam-flow 3s ease-in-out infinite' }} />
        <line x1="57%" y1="50%" x2="82%" y2="50%" stroke="url(#beamR)" strokeWidth="1.5" strokeDasharray="8 4"
          style={{ animation: 'hero-beam-flow 3s ease-in-out 0.5s infinite' }} />
      </svg>

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top, left: p.left,
            width: p.size, height: p.size,
            background: i % 2 === 0
              ? 'rgba(36,68,226,0.4)'
              : 'rgba(107,140,255,0.5)',
            '--dx': p.dx, '--dy': p.dy,
            animation: `particle-drift ${p.dur}s ease-in-out ${p.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}

      {/* ── Left entity: Khaled Yaghi ── */}
      <div
        className="absolute"
        style={{
          left: 'calc(50% - 185px)',
          top: '50%',
          animation: 'hero-float-a 8s ease-in-out infinite',
        }}
      >
        <div
          className="relative overflow-hidden rounded-2xl backdrop-blur-sm"
          style={{
            width: 150, height: 150,
            background: 'linear-gradient(145deg, rgba(26,51,184,0.92), rgba(36,68,226,0.88))',
            boxShadow: '0 20px 60px rgba(36,68,226,0.25), 0 0 0 1px rgba(255,255,255,0.1) inset',
          }}
        >
          {/* Glass shine */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
            }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <span className="text-white/50 text-[0.6rem] font-medium uppercase tracking-[0.2em] mb-1.5">Top Educator</span>
            <span className="text-white font-bold text-base leading-tight">Khaled</span>
            <span className="text-white font-bold text-base leading-tight">Yaghi</span>
          </div>
        </div>
      </div>

      {/* ── Right entity: Prep-Me ── */}
      <div
        className="absolute"
        style={{
          right: 'calc(50% - 185px)',
          top: '50%',
          animation: 'hero-float-b 8s ease-in-out infinite',
        }}
      >
        <div
          className="relative overflow-hidden rounded-2xl backdrop-blur-sm"
          style={{
            width: 150, height: 150,
            background: 'linear-gradient(145deg, rgba(107,140,255,0.92), rgba(36,68,226,0.88))',
            boxShadow: '0 20px 60px rgba(107,140,255,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
            }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <span className="text-white/50 text-[0.55rem] font-medium uppercase tracking-[0.15em] mb-1.5 text-center px-2 leading-snug">Leading Tutoring Services</span>
            <span className="text-white font-bold text-lg leading-tight">Prep-Me</span>
          </div>
        </div>
      </div>

      {/* ── Center fusion node ── */}
      <div className="relative z-10">
        {/* Shimmer ring */}
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: 130, height: 130,
            animation: 'shimmer 8s linear infinite',
            background: 'conic-gradient(from 0deg, transparent, rgba(36,68,226,0.15), transparent, rgba(107,140,255,0.12), transparent)',
            borderRadius: '50%',
          }}
        />
        {/* Core */}
        <div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: 88, height: 88,
            background: 'linear-gradient(145deg, #1a33b8, #2444E2, #4a6bff)',
            animation: 'center-breathe 4s ease-in-out infinite',
          }}
        >
          {/* Inner glass ring */}
          <div
            className="absolute inset-[2px] rounded-full"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          />
          {/* Icon */}
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(255,255,255,0.9)" />
          </svg>
        </div>
      </div>

      {/* ── Values orbit ── */}
      {VALUES.map((v) => {
        const delay = -(v.angle / 360) * 30;
        return (
          <div
            key={v.label}
            className="absolute left-1/2 top-1/2 pointer-events-none"
            style={{
              width: 0, height: 0,
              animation: 'orbit-spin 30s linear infinite',
              animationDelay: `${delay}s`,
            }}
          >
            <div style={{ transform: `translateY(-${VALUES_ORBIT_RADIUS}px)` }}>
              <div
                style={{
                  animation: 'values-counter-spin 30s linear infinite',
                  animationDelay: `${delay}s`,
                }}
              >
                <span
                  className="inline-flex items-center whitespace-nowrap px-3 py-1.5 rounded-full text-[0.65rem] font-semibold tracking-wide backdrop-blur-sm"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    border: '1px solid rgba(36,68,226,0.12)',
                    color: '#2444E2',
                    boxShadow: '0 2px 12px rgba(36,68,226,0.08)',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {v.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Main component ─── */

export default function HeroExamsClickup() {
  const heroSectionRef = useRef<HTMLElement>(null);

  /* ─── Trigger entrance animations on mount ─── */
  useEffect(() => {
    const el = heroSectionRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.add('in-view');
    });
  }, []);

  return (
    <div className="h-screen overflow-hidden hero-bg-mesh hero-grain">
      <section ref={heroSectionRef} className="relative overflow-hidden h-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
            {/* ─── Left column: copy ─── */}
            <div className="pt-24 lg:pt-0">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 animate-fade-up"
                style={{
                  background: 'rgba(36,68,226,0.06)',
                  border: '1px solid rgba(36,68,226,0.1)',
                  animationDelay: '0s',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#2444E2' }}
                />
                <span className="text-xs font-medium" style={{ color: '#2444E2' }}>
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 animate-fade-up"
                style={{ animationDelay: '0.1s', lineHeight: '1.1', letterSpacing: '-0.03em' }}
              >
                The{' '}
                <span
                  className="bg-clip-text text-transparent animate-gradient-text"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #1a33b8, #2444E2, #6b8cff, #2444E2, #1a33b8)',
                  }}
                >
                  Yaghi &<br />Prep-Me
                </span>{' '}
                Synergy
              </h1>

              <p
                className="mt-6 text-lg text-gray-400 leading-relaxed max-w-md animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
              </p>
            </div>

            {/* ─── Right column: fusion graphic ─── */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: '0.35s' }}
            >
              <FusionGraphic />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, white, transparent)' }}
        />
      </section>
    </div>
  );
}
