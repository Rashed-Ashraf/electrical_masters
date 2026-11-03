'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  ArrowRight,
  Info,
  CheckCircle2,
  SlidersHorizontal,
  Zap,
  ShieldCheck,
  ChevronRight,
  Download,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { MobileDrawer } from '@/components/MobileDrawer';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';
import { PRODUCTS, ProductItem } from '@/data/products';

const CATEGORIES = [
  { id: 'all', label: 'All Switchgear & Panels' },
  { id: 'lvs', label: 'Low Voltage Switchgear (LVS)' },
  { id: 'pfi', label: 'Power Factor Improvement (PFI)' },
  { id: 'mcc', label: 'Motor Control Centre (MCC)' },
  { id: 'plc', label: 'PLC Automation Panels' },
  { id: 'amf', label: 'AMF / ATS Transfer Panels' },
  { id: 'db', label: 'Lighting & Power Distribution (DB)' },
  { id: 'cables', label: 'Cable Trays & Ladders' },
];

export function ProductsClient() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.spec.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen relative pb-16 md:pb-0 bg-[#f4f8fb]">
      {/* Header */}
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="flex-1 w-full pt-16">
        {/* Page Hero Header */}
        <section className="w-full bg-[#00283d] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00283d] via-[#003850] to-[#004d6d] opacity-90" />
          <div className="absolute -right-10 -top-10 w-80 h-80 bg-[#0098da]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] font-title text-[#98cded]">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-bold">Products Catalog</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-3 max-w-3xl">
                <span className="font-title text-[#38bdf8] uppercase tracking-widest font-bold text-[12px]">
                  MANUFACTURING &amp; SUPPLY
                </span>
                <h1 className="font-title text-white text-[30px] sm:text-[42px] font-extrabold leading-tight">
                  Industrial Switchgear &amp; Power Distribution Catalog
                </h1>
                <p className="font-body text-[#c3e8ff] text-[15px] sm:text-[16px] leading-relaxed">
                  Precision engineered low voltage switchboards, motor control centers, automatic power factor correction, and synchronization systems built to international IEC &amp; BS standards.
                </p>
              </div>

              {/* Stats pill */}
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-md self-start md:self-end">
                <div className="flex flex-col text-center">
                  <span className="font-title text-[24px] font-extrabold text-[#38bdf8]">6300A</span>
                  <span className="text-[10px] text-[#c3e8ff] font-technical uppercase">Max Rating</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex flex-col text-center">
                  <span className="font-title text-[24px] font-extrabold text-[#38bdf8]">100%</span>
                  <span className="text-[10px] text-[#c3e8ff] font-technical uppercase">Tested</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex flex-col text-center">
                  <span className="font-title text-[24px] font-extrabold text-[#38bdf8]">20+</span>
                  <span className="text-[10px] text-[#c3e8ff] font-technical uppercase">Years Exp</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter, Search & Catalog Body */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 flex flex-col gap-8">
          {/* Controls Bar: Search + Category Selector */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-[#d5e7f2] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#8ba2b2] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products by model, rating, or application (e.g. 'PFI', 'MCC', 'ATS', 'Busbar')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-title font-bold text-[#0098da] hover:underline"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Results */}
            <div className="text-[13px] font-title font-semibold text-[#004d6d] flex items-center gap-2 whitespace-nowrap self-end md:self-center">
              <span>Showing {filteredProducts.length} of {PRODUCTS.length} products</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-title text-[12px] whitespace-nowrap transition-all shadow-xs flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0098da] text-white font-bold shadow-md'
                      : 'bg-white text-[#004d6d] font-semibold border border-[#d5e7f2] hover:bg-[#e1f2fb]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#d5e7f2] flex flex-col justify-between transition-all duration-300 group"
                >
                  <div className="flex flex-col">
                    {/* Image */}
                    <Link
                      href={`/products/${prod.id}`}
                      className="relative w-full h-56 bg-[#00283d] overflow-hidden block"
                    >
                      <img
                        src={prod.imageUrl}
                        alt={prod.title}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-[#00283d]/90 text-white font-technical text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider backdrop-blur-xs border border-white/20">
                        {prod.badge}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001d2b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-[12px] font-title font-bold flex items-center gap-1.5 bg-[#0098da] px-3 py-1.5 rounded-lg shadow">
                          <Info className="w-4 h-4 text-white" /> View Full Specs &amp; Engineering Diagrams
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6 flex flex-col gap-3">
                      <Link href={`/products/${prod.id}`}>
                        <h3 className="font-title text-[#00283d] text-[18px] font-bold leading-snug hover:text-[#0098da] transition-colors">
                          {prod.title}
                        </h3>
                      </Link>
                      <p className="font-body text-[#3e5261] text-[13.5px] leading-relaxed line-clamp-3">
                        {prod.description}
                      </p>

                      {/* Key features bullets */}
                      <div className="flex flex-col gap-1.5 pt-2 border-t border-[#edf4f8]">
                        <span className="font-title text-[11px] uppercase tracking-wider text-[#0098da] font-bold">
                          Key Features
                        </span>
                        <ul className="flex flex-col gap-1">
                          {prod.features.slice(0, 3).map((feat, idx) => (
                            <li key={idx} className="text-[12px] text-[#3e5261] flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0098da] flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="p-6 pt-0 flex flex-col gap-3">
                    <div className="flex items-center justify-between pt-3 border-t border-[#edf4f8]">
                      <span className="font-technical text-[11px] text-[#0076a8] font-bold truncate max-w-[240px] bg-[#e1f2fb] px-2.5 py-1 rounded-md">
                        {prod.spec}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/products/${prod.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[13px] font-bold rounded-xl shadow-xs transition-all active:scale-95"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-4 py-2.5 border border-[#cbe4f4] hover:border-[#0098da] text-[#004d6d] hover:text-[#0098da] bg-[#f8fcff] font-title text-[13px] font-semibold rounded-xl transition-all"
                      >
                        RFQ Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-[#d5e7f2] text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#f2f8fc] text-[#8ba2b2] flex items-center justify-center">
                <Search className="w-8 h-8 text-[#8ba2b2]" />
              </div>
              <h3 className="font-title text-[#00283d] text-[20px] font-bold">No Products Found</h3>
              <p className="font-body text-[#5b7384] text-[14px] max-w-md">
                We couldn't find any products matching &quot;{searchQuery}&quot;. Please try a different keyword or reset the category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2.5 bg-[#0098da] text-white font-title text-[13px] font-bold rounded-xl shadow hover:bg-[#0084bd] transition-all cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Custom Switchgear Inquiry Callout */}
          <div className="bg-gradient-to-r from-[#003850] to-[#004d6d] p-8 sm:p-10 rounded-2xl border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mt-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#38bdf8] flex items-center justify-center flex-shrink-0 border border-white/15">
                <SlidersHorizontal className="w-7 h-7 text-[#38bdf8]" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-title text-white text-[20px] sm:text-[22px] font-bold">
                  Require Custom Specification or Single-Line Diagram Review?
                </h3>
                <p className="font-body text-[#c3e8ff] text-[14px] max-w-xl">
                  Our switchgear design department reviews your electrical drawings, selects optimal components (Schneider, ABB, Terasaki), and delivers comprehensive quotation proposals.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[14px] font-bold rounded-xl shadow-lg active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Submit Single-Line Diagram</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer & BottomNav */}
      <Footer />
      <BottomNav />
    </div>
  );
}

export default ProductsClient;

