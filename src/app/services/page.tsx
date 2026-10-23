'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  ShieldCheck,
  Zap,
  Lightbulb,
  Cpu,
  Lamp,
  CheckCircle2,
  Wrench,
  Headphones,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ClipboardCheck,
  Award,
  Clock,
  Phone,
  Settings,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { MobileDrawer } from '@/components/MobileDrawer';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';
import { SERVICES_DATA, ServiceItem } from '@/data/services';

export default function ServicesPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-7 h-7" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7" />;
      case 'Zap':
        return <Zap className="w-7 h-7" />;
      case 'Lightbulb':
        return <Lightbulb className="w-7 h-7" />;
      case 'Cpu':
        return <Cpu className="w-7 h-7" />;
      case 'Lamp':
        return <Lamp className="w-7 h-7" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-7 h-7" />;
      case 'Wrench':
      default:
        return <Wrench className="w-7 h-7" />;
    }
  };

  const WORKFLOW_STEPS = [
    {
      step: '01',
      title: 'Site Survey & Assessment',
      desc: 'Our electrical engineers conduct on-site load analysis, soil resistivity measurement, or space auditing.',
    },
    {
      step: '02',
      title: 'Engineering & SLD Design',
      desc: 'Detailed CAD blueprints, fault calculation, short-circuit withstand planning, and bill of quantities.',
    },
    {
      step: '03',
      title: 'Execution & Calibration',
      desc: 'Precise on-site mechanical erection, torque tightening, dielectric testing, and secondary injection.',
    },
    {
      step: '04',
      title: 'Commissioning & Handover',
      desc: 'Live energization under load, infrared thermography audit, and official compliance certification.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen relative pb-16 md:pb-0 bg-[#f4f8fb]">
      {/* Header */}
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="flex-1 w-full pt-16">
        {/* Page Hero Header */}
        <section className="w-full bg-[#00283d] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00283d] via-[#003850] to-[#004d6d] opacity-90" />
          <div className="absolute -left-10 -bottom-10 w-80 h-80 bg-[#0098da]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] font-title text-[#98cded]">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-bold">Electrical Services</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-3 max-w-3xl">
                <span className="font-title text-[#38bdf8] uppercase tracking-widest font-bold text-[12px]">
                  ON-SITE &amp; TURNKEY SOLUTIONS
                </span>
                <h1 className="font-title text-white text-[30px] sm:text-[42px] font-extrabold leading-tight">
                  Industrial Electrical Engineering &amp; Commissioning Services
                </h1>
                <p className="font-body text-[#c3e8ff] text-[15px] sm:text-[16px] leading-relaxed">
                  Comprehensive field services spanning high-voltage cabling, chemical earthing, lightning surge dissipation, power house setup, and certified switchgear testing across Pakistan.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 self-start md:self-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[13px] font-bold rounded-xl shadow-lg active:scale-95 transition-all whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  <span>Book Field Engineer</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Overview Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-4">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#d5e7f2] flex flex-col gap-6">
            <div className="flex flex-col items-center text-center gap-1.5">
              <span className="font-title text-[#0098da] text-[11px] uppercase tracking-widest font-bold">
                OUR PROVEN METHODOLOGY
              </span>
              <h2 className="font-title text-[#00283d] text-[22px] sm:text-[26px] font-bold">
                How We Execute Electrical Engineering Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {WORKFLOW_STEPS.map((wf, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#f7fbfe] border border-[#e1f0f8] flex flex-col gap-2 relative group hover:bg-[#eaf4fb] transition-colors"
                >
                  <span className="font-technical text-[24px] font-black text-[#0098da]/30 group-hover:text-[#0098da] transition-colors">
                    {wf.step}
                  </span>
                  <h3 className="font-title text-[#00283d] text-[15px] font-bold">
                    {wf.title}
                  </h3>
                  <p className="font-body text-[#3e5261] text-[13px] leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Detailed List */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-title text-[#0098da] text-[12px] uppercase tracking-widest font-bold">
              FULL SCOPE OF WORK
            </span>
            <h2 className="font-title text-[#00283d] text-[26px] sm:text-[32px] font-bold">
              Our Comprehensive Industrial Services
            </h2>
            <div className="w-16 h-1 bg-[#0098da] rounded-full my-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#d5e7f2] flex flex-col justify-between transition-all duration-300 group p-6 sm:p-7"
              >
                <div className="flex flex-col gap-5">
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#0098da]/10 text-[#0098da] group-hover:bg-[#0098da] group-hover:text-white flex items-center justify-center flex-shrink-0 border border-[#0098da]/20 transition-all duration-300 shadow-sm">
                        {getServiceIcon(srv.iconName)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-technical text-[10px] text-[#0098da] uppercase tracking-wider font-bold">
                          {srv.badge}
                        </span>
                        <h3 className="font-title text-[#00283d] text-[19px] sm:text-[20px] font-bold leading-snug">
                          {srv.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-[#3e5261] text-[14px] leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  {/* Key Features & Standards */}
                  <div className="flex flex-col gap-2 pt-3 border-t border-[#edf4f8]">
                    <span className="font-title text-[12px] text-[#00283d] font-bold uppercase tracking-wider">
                      Technical Capabilities &amp; Inclusions
                    </span>
                    <ul className="flex flex-col gap-1.5">
                      {srv.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="text-[13px] text-[#3e5261] flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0098da] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="bg-[#f2f8fc] p-4 rounded-xl border border-[#dcecf7] flex flex-col gap-1.5">
                    <span className="font-title text-[11px] uppercase tracking-wider text-[#004d6d] font-bold flex items-center gap-1.5">
                      <ClipboardCheck className="w-4 h-4 text-[#0098da]" /> Project Deliverables
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {srv.deliverables.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 bg-white text-[#00283d] text-[11px] font-medium rounded-md border border-[#cbe4f4] shadow-2xs"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 mt-4 border-t border-[#edf4f8]">
                  <div className="flex items-center gap-1.5 flex-wrap self-start sm:self-center">
                    {srv.standards.map((std, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-full bg-[#e1f2fb] text-[#004d6d] font-technical text-[10px] font-bold"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[13px] font-bold rounded-xl shadow-xs transition-all active:scale-95 whitespace-nowrap"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency & AMC Callout Banner */}
          <div className="bg-gradient-to-r from-[#00283d] via-[#003850] to-[#004d6d] p-8 sm:p-10 rounded-2xl border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#38bdf8] flex items-center justify-center flex-shrink-0 border border-white/15">
                <Headphones className="w-7 h-7 text-[#38bdf8]" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-title text-white text-[20px] sm:text-[22px] font-bold">
                  Annual Maintenance Contracts (AMC) &amp; Emergency Breakdown
                </h3>
                <p className="font-body text-[#c3e8ff] text-[14px] max-w-xl">
                  Protect your plant against unplanned electrical outages. We offer customized quarterly AMC inspection packages and rapid-response fault isolation.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[14px] font-bold rounded-xl shadow-lg active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Get AMC Proposal</span>
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
