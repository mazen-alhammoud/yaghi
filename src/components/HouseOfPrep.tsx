import { useEffect, useRef } from "react";
import prepmeLogo from "../assets/prepme.svg";
import weguideLogo from "../assets/weguide_logo.svg";
import elmyLogo from "../assets/elmy.png";
import testprepLogo from "../assets/testprep.png";

const COMPANIES = [
  {
    name: "WeGuide",
    logo: weguideLogo,
    color: "#2444E2",
    description: "A Longitudinal Student Development & Career Intelligence Program.",
  },
  {
    name: "TestPrep",
    logo: testprepLogo,
    color: "#1a33b8",
    description: "Structured Preparation for Standardized Exam Excellence.",
  },
  {
    name: "Prep-Me",
    logo: prepmeLogo,
    color: "#6b8cff",
    description: "Personalized Academic Tutoring for School & University Success.",
  },
  {
    name: "Elmy",
    logo: elmyLogo,
    color: "#2444E2",
    description: "Digital Infrastructure for Assessment & Educational Management.",
  },
];

export default function HouseOfPrep() {
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
                Our Ecosystem
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 animate-fade-up"
              style={{ animationDelay: "0.05s", lineHeight: "1.1", letterSpacing: "-0.03em" }}
            >
              The{" "}
              <span
                className="bg-clip-text text-transparent animate-gradient-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #1a33b8, #2444E2, #6b8cff, #2444E2, #1a33b8)",
                }}
              >
                House of Prep
              </span>
            </h2>

            <p
              className="mt-4 text-base text-gray-500 max-w-xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Four companies, one mission — empowering students through guidance,
              preparation, technology, and digital assessment.
            </p>
          </div>

          {/* Company cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {COMPANIES.map((company, i) => (
              <div
                key={company.name}
                className="relative rounded-2xl p-8 flex flex-col items-center text-center animate-fade-up"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(36,68,226,0.08)",
                  boxShadow: "0 4px 32px rgba(36,68,226,0.06)",
                  animationDelay: `${0.15 + i * 0.1}s`,
                }}
              >
                {/* Logo */}
                <div
                  className="w-32 h-32 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${company.color}12, ${company.color}08)`,
                    border: `1px solid ${company.color}18`,
                  }}
                >
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-full h-full object-contain p-3"
                    />
                  ) : (
                    <span
                      className="text-4xl font-extrabold"
                      style={{ color: company.color }}
                    >
                      {company.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                >
                  {company.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {company.description}
                </p>

                {/* Accent line at top */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full"
                  style={{ background: company.color }}
                />
              </div>
            ))}
          </div>

          {/* Connecting tagline */}
          <p
            className="text-center mt-10 text-sm text-gray-400 font-medium animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            WeGuide &rarr; TestPrep &rarr; Prep-Me &rarr; Elmy — a full-spectrum student success pipeline
          </p>

        </div>
      </section>
    </div>
  );
}
