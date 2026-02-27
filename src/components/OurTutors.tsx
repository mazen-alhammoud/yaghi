import { useEffect, useRef } from "react";

const tutors = [
  { name: "Hassan Abou Daher", uni: "AUB", major: "Chemistry", courses: "Chemistry Courses", fit: 91 },
  { name: "Ramzi Alaywan", uni: "AUB", major: "Industrial Engineering (3rd Year)", courses: "Industrial Engineering Courses", fit: 87 },
  { name: "Kevin Khoury", uni: "AUB", major: "Industrial Engineering (3rd Year)", courses: "Industrial Engineering Courses", fit: 93 },
  { name: "Mohammad Shouman", uni: "AUB", major: "Engineering", courses: "Engineering Courses", fit: 88 },
  { name: "Wassim Kassem", uni: "AUB", major: "ECE (4th Year)", courses: "Electrical Courses", fit: 95 },
  { name: "Mohammad Sleiman", uni: "AUB", major: "Computer Science (2nd Year)", courses: "CS & Math Courses", fit: 90 },
  { name: "Jad Medlej", uni: "AUB", major: "Chemical Engineering", courses: "Chemical Engineering Courses", fit: 84 },
  { name: "Fouad Abdul Hussein", uni: "AUB", major: "Accounting", courses: "Accounting Courses", fit: 89 },
  { name: "Yahia Messaykeh", uni: "AUB", major: "Mechanical Engineering", courses: "Mechanical Courses", fit: 92 },
  { name: "Louay Shaker", uni: "AUB", major: "ECE", courses: "Electrical Engineering Courses", fit: 86 },
  { name: "Rabieh Mneimneh", uni: "Balamand", major: "Medical Lab", courses: "English, Sociology, Cultural Studies, Biochem, Medical Lab", fit: 94 },
  { name: "Mokhtar Chawa", uni: "AUB", major: "Mechanical Engineering", courses: "Statics", fit: 83 },
  { name: "Mazen Al Hammoud", uni: "LAU", major: "Medicine", courses: "Biology", fit: 96 },
  { name: "Karim Fattah", uni: "LAU", major: "Economics", courses: "Microeconomics, Macroeconomics, International Economics", fit: 97 },
  { name: "Lana Al Hammoud", uni: "AUB", major: "Finance", courses: "MGT210, FINA220, CMPS208", fit: 85 },
  { name: "Ralph Maalouf", uni: "LAU", major: "Banking & Finance", courses: "Accounting & Finance", fit: 88 },
  { name: "Aya Al Ashi", uni: "LAU & Haigazian", major: "Psychology", courses: "Psychology & Cultural Studies", fit: 93 },
  { name: "Nour Senno", uni: "LAU", major: "Psychology", courses: "Psychology", fit: 92 },
  { name: "Molham Al Haffar", uni: "Balamand", major: "Medical Lab", courses: "Microbiology, Biochem, Physics 1 & 2", fit: 94 },
];

function getFitColor(fit: number) {
  if (fit > 90) return "#16a34a";
  if (fit >= 85) return "#6b8cff";
  return "#94a3b8";
}

export default function OurTutors() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.add("in-view");
    });
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full flex flex-col items-center bg-white px-6 pt-20 pb-10 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 shrink-0 animate-fade-up">
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
          style={{
            background: "rgba(36,68,226,0.06)",
            border: "1px solid rgba(36,68,226,0.1)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#2444E2" }}
          />
          <span
            className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: "#2444E2" }}
          >
            Tutor Network
          </span>
        </span>
        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
          style={{ lineHeight: "1.1", letterSpacing: "-0.03em" }}
        >
          Our{" "}
          <span
            className="bg-clip-text text-transparent animate-gradient-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1a33b8, #2444E2, #6b8cff, #2444E2, #1a33b8)",
            }}
          >
            Tutors
          </span>
        </h2>
        <p className="mt-2 text-sm text-gray-500 max-w-lg mx-auto">
          Verified university students across AUB, LAU & Balamand — matched by expertise and values.
        </p>
      </div>

      {/* Tutor Grid */}
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {tutors.map((t, i) => (
          <div
            key={t.name}
            className="relative rounded-xl p-3 animate-fade-up"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(36,68,226,0.08)",
              boxShadow: "0 2px 16px rgba(36,68,226,0.05)",
              animationDelay: `${0.1 + i * 0.03}s`,
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-b-full"
              style={{
                background: `linear-gradient(90deg, ${getFitColor(t.fit)}, #6b8cff)`,
              }}
            />

            {/* Name */}
            <p
              className="text-[0.7rem] font-bold text-gray-900 leading-tight truncate"
              title={t.name}
            >
              {t.name}
            </p>

            {/* University badge */}
            <span
              className="inline-block mt-1 px-1.5 py-0.5 rounded text-[0.55rem] font-semibold"
              style={{
                background:
                  t.uni === "AUB"
                    ? "rgba(36,68,226,0.08)"
                    : t.uni === "LAU"
                    ? "rgba(220,38,38,0.08)"
                    : "rgba(16,185,129,0.08)",
                color:
                  t.uni === "AUB"
                    ? "#2444E2"
                    : t.uni === "LAU"
                    ? "#dc2626"
                    : "#059669",
              }}
            >
              {t.uni}
            </span>

            {/* Major */}
            <p
              className="mt-1 text-[0.6rem] text-gray-500 leading-tight truncate"
              title={t.major}
            >
              {t.major}
            </p>

            {/* Courses */}
            <p
              className="mt-0.5 text-[0.55rem] text-gray-400 leading-tight truncate"
              title={t.courses}
            >
              {t.courses}
            </p>

            {/* Fit score */}
            <div className="mt-1.5 flex items-center gap-1">
              <div
                className="h-1 flex-1 rounded-full overflow-hidden"
                style={{ background: "rgba(36,68,226,0.06)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${t.fit}%`,
                    background: getFitColor(t.fit),
                    transition: "width 0.6s ease",
                  }}
                />
              </div>
              <span
                className="text-[0.55rem] font-bold"
                style={{ color: getFitColor(t.fit) }}
              >
                {t.fit}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
