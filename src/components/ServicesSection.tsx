'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Layers,
  ShieldCheck,
  Zap,
  Lightbulb,
  Cpu,
  Lamp,
  CheckCircle2,
  Wrench,
  Headphones,
  Sparkles,
  ClipboardCheck,
  Timer,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/services';

const SLIDE_DURATION = 5000; // 5 seconds per slide
const TICK_INTERVAL = 50; // 50ms tick

export const ServicesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const totalSlides = SERVICES_DATA.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Timer progression effect with smooth progress & pause handling
  useEffect(() => {
    if (isPaused) return;

    let startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = (elapsed / SLIDE_DURATION) * 100;

      if (pct >= 100) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
        setProgress(0);
        startTime = Date.now();
      } else {
        setProgress(pct);
      }
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, totalSlides]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-12 sm:w-16 h-12 sm:h-16" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-12 sm:w-16 h-12 sm:h-16" />;
      case 'Zap':
        return <Zap className="w-12 sm:w-16 h-12 sm:h-16" />;
      case 'Lightbulb':
        return <Lightbulb className="w-12 sm:w-16 h-12 sm:h-16" />;
      case 'Cpu':
        return <Cpu className="w-12 sm:w-16 h-12 sm:h-16" />;
      case 'Lamp':
        return <Lamp className="w-12 sm:w-16 h-12 sm:h-16" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-12 sm:w-16 h-12 sm:h-16" />;
      case 'Wrench':
      default:
        return <Wrench className="w-12 sm:w-16 h-12 sm:h-16" />;
    }
  };

  const currentService = SERVICES_DATA[currentIndex];
  const remainingSeconds = Math.max(1, Math.ceil(((100 - progress) / 100) * (SLIDE_DURATION / 1000)));

  return (
    <section className="w-full px-4 sm:px-8 py-16 bg-[#004d6d] text-white relative overflow-hidden" id="services-section">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0098da]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/15 pb-5">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#c3e8ff] font-title text-[11px] font-bold uppercase tracking-wider w-fit border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Services Carousel</span>
            </div>
            <h2 className="font-title text-white text-[24px] sm:text-[32px] font-bold leading-tight">
              Turnkey Electrical Engineering Services
            </h2>
            <p className="font-body text-[#e1f0f8] text-[14px] sm:text-[15px] max-w-2xl">
              Expert on-site installation, substation commissioning, chemical earthing, and lightning protection across Pakistan.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-[#0098da] text-white font-title text-[13px] font-bold border border-white/20 transition-all self-start sm:self-end shadow-sm active:scale-95 backdrop-blur-md"
          >
            <span>View All Services ({totalSlides})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CAROUSEL FRAME */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl bg-[#003850]/95 border border-white/20 shadow-2xl overflow-hidden group select-none backdrop-blur-md"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Full Slide Background Clickable Link to Service Details */}
          <Link
            href={`/services#${currentService.id}`}
            className="absolute inset-0 z-0 cursor-pointer"
            title={`Explore ${currentService.title} scope & deliverables`}
            aria-label={`Explore ${currentService.title} scope & deliverables`}
          />

          {/* Main Slide Stage */}
          <div className="relative z-10 w-full min-h-[440px] sm:min-h-[500px] md:min-h-[540px] flex flex-col items-center justify-between p-6 sm:p-10 text-center pointer-events-none">
            {/* Slide Category Badge & Progress/Timer Tag */}
            <div className="w-full flex items-center justify-between gap-2 z-20 pointer-events-auto">
              <span className="font-technical text-[10px] sm:text-[11px] uppercase tracking-widest text-[#38bdf8] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 font-bold">
                {currentService.badge}
              </span>

              {/* Slide Counter */}
              <span className="font-technical text-[11px] text-[#98cded] bg-black/40 px-2.5 py-0.5 rounded-full border border-white/10 font-bold">
                {currentIndex + 1} / {totalSlides}
              </span>
            </div>

            {/* Slide Graphic / Center Feature Box */}
            <Link
              href={`/services#${currentService.id}`}
              className="relative my-auto py-4 flex flex-col items-center justify-center max-w-2xl w-full z-10 transition-all duration-500 ease-out group/center cursor-pointer pointer-events-auto"
              title={`Explore ${currentService.title} details`}
            >
              <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-3xl bg-gradient-to-br from-[#0098da]/30 to-[#004d6d]/50 border-2 border-[#0098da]/50 group-hover/center:border-[#38bdf8] group-hover/center:shadow-[0_0_40px_rgba(56,189,248,0.5)] text-[#38bdf8] flex items-center justify-center shadow-[0_0_35px_rgba(0,152,218,0.3)] mb-4 group-hover/center:scale-106 transition-all">
                {getServiceIcon(currentService.iconName)}
              </div>

              {/* Key Features Pill Bar */}
              <div className="flex items-center justify-center gap-2 flex-wrap max-w-lg">
                {currentService.standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[#98cded] font-technical text-[11px] font-bold group-hover/center:border-[#38bdf8]/40 transition-colors"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </Link>

            {/* Bottom Caption Area */}
            <div className="w-full max-w-2xl flex flex-col items-center gap-2.5 z-20 mt-2 pointer-events-auto">
              <Link
                href={`/services#${currentService.id}`}
                className="hover:text-[#38bdf8] transition-colors cursor-pointer"
              >
                <h3 className="font-title text-white hover:text-[#38bdf8] text-[20px] sm:text-[24px] md:text-[26px] font-bold leading-snug transition-colors">
                  {currentService.title}
                </h3>
              </Link>
              <p className="font-body text-[#c3e8ff] text-[13px] sm:text-[14.5px] leading-relaxed max-w-xl line-clamp-2">
                {currentService.shortDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href={`/services#${currentService.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[13px] font-bold rounded-xl shadow-md active:scale-95 transition-all"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Explore Service Scope</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/10 hover:bg-white/25 text-white font-title text-[13px] font-semibold rounded-xl border border-white/15 transition-all"
                >
                  <span>Book Site Visit</span>
                </Link>
              </div>
            </div>

            {/* Left Chevron Navigation Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous Slide"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/40 hover:bg-[#0098da] text-white flex items-center justify-center transition-all border border-white/15 backdrop-blur-md shadow-lg z-30 active:scale-90 cursor-pointer pointer-events-auto"
            >
              <ChevronLeft className="w-6 sm:w-7 h-6 sm:h-7" />
            </button>

            {/* Right Chevron Navigation Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next Slide"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/40 hover:bg-[#0098da] text-white flex items-center justify-center transition-all border border-white/15 backdrop-blur-md shadow-lg z-30 active:scale-90 cursor-pointer pointer-events-auto"
            >
              <ChevronRight className="w-6 sm:w-7 h-6 sm:h-7" />
            </button>

            {/* Bottom Horizontal Dash/Bar Indicators with Active Timer Fill */}
            <div className="flex items-center justify-center gap-2 pt-6 pb-1 z-20 pointer-events-auto">
              {SERVICES_DATA.map((srv, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}: ${srv.title}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden ${isActive
                      ? 'w-12 bg-white/20 shadow-[0_0_8px_rgba(56,189,248,0.4)]'
                      : 'w-6 bg-white/30 hover:bg-white/60'
                      }`}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-y-0 left-0 bg-[#38bdf8] rounded-full transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
