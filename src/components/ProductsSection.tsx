'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Info,
  Timer,
  Pause,
  Play,
} from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/products';

const SLIDE_DURATION = 5000; // 5 seconds per slide
const TICK_INTERVAL = 50; // 50ms smooth tick

export const ProductsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const totalSlides = PRODUCTS.length;

  // Next and Previous handlers with progress reset
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

  const currentProduct = PRODUCTS[currentIndex];
  const remainingSeconds = Math.max(1, Math.ceil(((100 - progress) / 100) * (SLIDE_DURATION / 1000)));

  return (
    <section className="w-full px-4 sm:px-8 py-16 bg-[#004d6d] text-white relative overflow-hidden" id="products-section">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0098da]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/15 pb-5">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#c3e8ff] font-title text-[11px] font-bold uppercase tracking-wider w-fit border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Products Carousel</span>
            </div>
            <h2 className="font-title text-white text-[24px] sm:text-[32px] font-bold leading-tight">
              Featured Switchgear &amp; Distribution Panels
            </h2>
            <p className="font-body text-[#e1f0f8] text-[14px] sm:text-[15px] max-w-2xl">
              Browse through our complete line of IEC/BS compliant low and medium voltage switchgear systems.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-[#0098da] text-white font-title text-[13px] font-bold border border-white/20 transition-all self-start sm:self-end shadow-sm active:scale-95 backdrop-blur-md"
          >
            <span>View All Products ({totalSlides})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CAROUSEL FRAME with FULL BACKGROUND IMAGE & HERO OVERLAY */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl bg-[#003850]/95 border border-white/20 shadow-2xl overflow-hidden group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Full Cover Background Image with Hero Brightness */}
          <img
            key={currentProduct.id}
            src={currentProduct.imageUrl}
            alt={currentProduct.title}
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.85] transition-all duration-700 ease-in-out"
          />

          {/* Exact Hero Section Gradient Overlay & Opacity Ratio */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-700"
            style={{
              background:
                'linear-gradient(90deg, rgba(2, 44, 66, 0.65) 0%, rgba(3, 56, 82, 0.45) 45%, rgba(4, 72, 104, 0.30) 75%, rgba(6, 85, 120, 0.20) 100%), linear-gradient(180deg, rgba(2, 44, 66, 0.35) 0%, rgba(2, 44, 66, 0.20) 40%, rgba(2, 44, 66, 0.75) 100%)',
            }}
          />

          {/* Full Slide Background Clickable Link to Product Details */}
          <Link
            href={`/products/${currentProduct.id}`}
            className="absolute inset-0 z-0 cursor-pointer"
            title={`View ${currentProduct.title} specifications`}
            aria-label={`View ${currentProduct.title} specifications`}
          />

          {/* Main Slide Stage Content */}
          <div className="relative z-10 w-full min-h-[460px] sm:min-h-[520px] md:min-h-[560px] flex flex-col items-center justify-between p-6 sm:p-10 text-center pointer-events-none">
            {/* Top Slide Meta: Badge & Interactive Timer Badge */}
            <div className="w-full flex items-center justify-between gap-2 pointer-events-auto">
              <span className="font-technical text-[10px] sm:text-[11px] uppercase tracking-widest text-white bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 font-bold shadow-sm">
                {currentProduct.badge}
              </span>

              {/* Slide Count */}
              <span className="font-technical text-[11px] text-[#c3e8ff] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 font-bold">
                {currentIndex + 1} / {totalSlides}
              </span>
            </div>

            {/* Center Visual Feature Pill */}
            <Link
              href={`/products/${currentProduct.id}`}
              className="my-auto py-6 flex flex-col items-center justify-center max-w-xl w-full pointer-events-auto group/spec cursor-pointer"
              title={`View ${currentProduct.title} details`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-[#0098da]/50 group-hover/spec:border-[#38bdf8] group-hover/spec:bg-black/60 shadow-xl transition-all group-hover/spec:scale-105">
                <Sparkles className="w-4 h-4 text-[#38bdf8]" />
                <span className="font-technical text-[12px] sm:text-[13px] text-[#38bdf8] font-bold tracking-wide">
                  {currentProduct.spec}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#38bdf8] opacity-0 -ml-1 group-hover/spec:opacity-100 group-hover/spec:ml-0 transition-all" />
              </div>
            </Link>

            {/* Bottom Caption Area */}
            <div className="w-full max-w-2xl flex flex-col items-center gap-2.5 mt-2 bg-[#022c42]/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/15 shadow-2xl pointer-events-auto">
              <Link
                href={`/products/${currentProduct.id}`}
                className="hover:text-[#38bdf8] transition-colors cursor-pointer"
              >
                <h3 className="font-title text-white hover:text-[#38bdf8] text-[20px] sm:text-[24px] md:text-[26px] font-bold leading-snug transition-colors">
                  {currentProduct.title}
                </h3>
              </Link>
              <p className="font-body text-[#d5eefc] text-[13px] sm:text-[14.5px] leading-relaxed max-w-xl line-clamp-2">
                {currentProduct.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href={`/products/${currentProduct.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[13px] font-bold rounded-xl shadow-md active:scale-95 transition-all"
                >
                  <Info className="w-4 h-4" />
                  <span>View Specifications</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-title text-[13px] font-semibold rounded-xl border border-white/25 backdrop-blur-md transition-all"
                >
                  <span>Request Quote</span>
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
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/50 hover:bg-[#0098da] text-white flex items-center justify-center transition-all border border-white/20 backdrop-blur-md shadow-xl z-30 active:scale-90 cursor-pointer pointer-events-auto"
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
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/50 hover:bg-[#0098da] text-white flex items-center justify-center transition-all border border-white/20 backdrop-blur-md shadow-xl z-30 active:scale-90 cursor-pointer pointer-events-auto"
            >
              <ChevronRight className="w-6 sm:w-7 h-6 sm:h-7" />
            </button>

            {/* Bottom Horizontal Dash/Bar Indicators with Timer Fill on Active Item */}
            <div className="flex items-center justify-center gap-2 pt-6 pb-1 pointer-events-auto">
              {PRODUCTS.map((prod, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}: ${prod.title}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden ${
                      isActive
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
