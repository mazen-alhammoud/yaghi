import { useState, useEffect, useCallback } from "react";
import HeroExamsClickup from "./components/HeroExamsClickup";
import KhaledYaghi from "./components/KhaledYaghi";
import RibalAlameh from "./components/RibalAlameh";
import StudentGrowth from "./components/StudentGrowth";
import HouseOfPrep from "./components/HouseOfPrep";
import OurNumbers from "./components/OurNumbers";
import WhatWeOffer from "./components/WhatWeOffer";
import OurTutors from "./components/OurTutors";
import TogetherSlide from "./components/TogetherSlide";
import StudyPlan from "./components/StudyPlan";
import IntegrationVision from "./components/IntegrationVision";

const SLIDES = [
  HeroExamsClickup,
  StudyPlan,
  KhaledYaghi,
  RibalAlameh,
  StudentGrowth,
  HouseOfPrep,
  OurNumbers,
  WhatWeOffer,
  OurTutors,
  TogetherSlide,
  IntegrationVision,
  // Add more slides here:
];

/* ─── Nav bar ─── */

function NavBar({ currentSlide, totalSlides }: { currentSlide: number; totalSlides: number }) {
  const progressPct = totalSlides <= 1 ? 0 : Math.round((currentSlide / (totalSlides - 1)) * 100);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/40">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900 tracking-tight" />
        <div className="hidden md:flex items-center gap-1" />
        <div className="flex items-center gap-4">
          <span
            className="text-[0.625rem] font-semibold tabular-nums tracking-wide"
            style={{ color: '#2444E2' }}
          >
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-100/40">
        <div
          className="h-full transition-[width] duration-300 ease-out"
          style={{
            width: `${progressPct}%`,
            background: 'linear-gradient(90deg, #2444E2, #6b8cff)',
            boxShadow: progressPct > 0 ? '0 0 12px rgba(36,68,226,0.35)' : 'none',
          }}
        />
      </div>
    </nav>
  );
}

/* ─── App (Presentation wrapper) ─── */

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goNext = useCallback(() => {
    if (isTransitioning || currentSlide >= SLIDES.length - 1) return;
    setDirection("next");
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  }, [currentSlide, isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning || currentSlide <= 0) return;
    setDirection("prev");
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  }, [currentSlide, isTransitioning]);

  /* ─── Keyboard navigation ─── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const SlideComponent = SLIDES[currentSlide];

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <NavBar currentSlide={currentSlide} totalSlides={SLIDES.length} />

      {/* Slide container */}
      <div
        key={currentSlide}
        className={`absolute inset-0 ${
          direction === "next" ? "animate-slide-in-next" : "animate-slide-in-prev"
        }`}
        onAnimationEnd={() => setIsTransitioning(false)}
      >
        <SlideComponent />
      </div>

      {/* Left arrow */}
      <button
        onClick={goPrev}
        disabled={currentSlide === 0}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 flex items-center justify-center shadow-lg disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white transition-all cursor-pointer"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={goNext}
        disabled={currentSlide === SLIDES.length - 1}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 flex items-center justify-center shadow-lg disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white transition-all cursor-pointer"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Slide indicator dots */}
      {SLIDES.length > 1 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-[#2444E2] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </main>
  );
}
