'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  CheckCircle2,
  AlertCircle,
  Send,
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  ChevronRight,
  MessageSquare,
  Building2,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { MobileDrawer } from '@/components/MobileDrawer';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';
import { CompanyMap } from '@/components/CompanyMap';
import { sendEmail } from '@/app/actions/send-email';

export function ContactClient() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMsg('');

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setStatus('success');
        setFeedbackMsg(result.message || "Thank you! We'll contact you soon.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      } else {
        setStatus('error');
        setFeedbackMsg(result.error || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      console.error('[Contact Form Client Error]:', err);
      setStatus('error');
      setFeedbackMsg('An unexpected network error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative pb-16 md:pb-0 bg-[#f4f8fb]">
      {/* Header */}
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="flex-1 w-full pt-16">
        {/* Page Hero Header */}
        <section className="w-full bg-[#00283d] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00283d] via-[#003850] to-[#004d6d] opacity-90" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#0098da]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] font-title text-[#98cded]">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-bold">Contact Us</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-3 max-w-3xl">
                <span className="font-title text-[#38bdf8] uppercase tracking-widest font-bold text-[12px]">
                  GET IN TOUCH WITH ENGINEERING
                </span>
                <h1 className="font-title text-white text-[30px] sm:text-[42px] font-extrabold leading-tight">
                  Contact Electrical Masters Switchgear
                </h1>
                <p className="font-body text-[#c3e8ff] text-[15px] sm:text-[16px] leading-relaxed">
                  Have a technical query, project tender, or wish to visit our Lahore manufacturing plant? Reach out to our technical team for immediate support and customized quotations.
                </p>
              </div>

              {/* Fast connect card */}
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#c3e8ff] font-technical uppercase">Direct Helpline</span>
                  <a href="tel:+923004466489" className="font-title text-[15px] font-bold text-white hover:text-[#38bdf8]">
                    +92 300 4466489
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 -mt-6 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Phone Card */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#d5e7f2] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e1f2fb] text-[#0098da] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#0098da]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-technical text-[10px] text-[#5b7384] uppercase font-bold">Call Us</span>
                <a href="tel:+923004466489" className="font-title text-[13px] font-bold text-[#00283d] hover:text-[#0098da] truncate">
                  +92 300 4466489
                </a>
                <a href="tel:+923334466489" className="font-title text-[13px] font-bold text-[#00283d] hover:text-[#0098da] truncate">
                  +92 333 4466489
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#d5e7f2] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e1f2fb] text-[#0098da] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#0098da]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-technical text-[10px] text-[#5b7384] uppercase font-bold">Email Inquiries</span>
                <a href="mailto:emswitchgears@gmail.com" className="font-title text-[13px] font-bold text-[#00283d] hover:text-[#0098da] truncate">
                  emswitchgears@gmail.com
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#d5e7f2] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e1f2fb] text-[#0098da] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#0098da]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-technical text-[10px] text-[#5b7384] uppercase font-bold">Working Hours</span>
                <span className="font-title text-[13px] font-bold text-[#00283d] truncate">
                  Mon – Fri: 8AM – 6PM
                </span>
                <span className="text-[11px] text-[#5b7384]">Sat: 9AM – 1PM</span>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#d5e7f2] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-technical text-[10px] text-[#5b7384] uppercase font-bold">WhatsApp Direct</span>
                <a
                  href="https://wa.me/923004466489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-title text-[13px] font-bold text-emerald-700 hover:underline truncate"
                >
                  Chat with Engineer
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Form + Plant Info Grid */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Section (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#d5e7f2] flex flex-col gap-5">
              <div className="flex flex-col gap-1 pb-4 border-b border-[#edf4f8]">
                <span className="font-title text-[#0098da] text-[11px] uppercase tracking-widest font-bold">
                  SEND OFFICIAL INQUIRY
                </span>
                <h2 className="font-title text-[#00283d] text-[22px] sm:text-[26px] font-bold">
                  Request a Switchgear Proposal
                </h2>
                <p className="font-body text-[#5b7384] text-[13.5px]">
                  Fill out your project requirements below. Our engineering team will review your specifications and contact you shortly.
                </p>
              </div>

              {/* Feedback Alerts */}
              {status === 'success' && (
                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-md text-emerald-900 text-[13px] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-emerald-950">Inquiry Sent Successfully!</strong>
                    <span>{feedbackMsg}</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-md text-rose-900 text-[13px] flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-rose-950">Error Sending Inquiry</strong>
                    <span>{feedbackMsg}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-title text-[12px] text-[#3e5261] font-semibold">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Engr. Ahmad Khan"
                    required
                    className="h-11 px-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] transition-all"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-title text-[12px] text-[#3e5261] font-semibold">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      className="h-11 px-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-title text-[12px] text-[#3e5261] font-semibold">
                      Phone / Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      required
                      className="h-11 px-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] transition-all"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-title text-[12px] text-[#3e5261] font-semibold">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Industrial Mill Ltd."
                    className="h-11 px-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] transition-all"
                  />
                </div>

                {/* Your Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-title text-[12px] text-[#3e5261] font-semibold">
                    Project Scope &amp; Panel Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Provide details such as: Panel type (LVS, PFI, MCC), current rating (e.g. 1600A), brand preference (Schneider/ABB), or service requirement..."
                    required
                    className="p-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] resize-none transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full h-12 mt-2 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[15px] rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all font-bold disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Proposal Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Plant & Location Information Panel (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#00283d] text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-white/10 flex flex-col gap-5">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0098da]/20 text-[#38bdf8] flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div>
                    <span className="font-technical text-[10px] text-[#38bdf8] uppercase tracking-wider font-bold">
                      Manufacturing Works
                    </span>
                    <h3 className="font-title text-white text-[17px] font-bold">
                      Electrical Masters Switchgear Pvt. Ltd.
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col gap-4 font-body text-[14px] text-[#d5eefc]">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#98cded] text-[11px] font-bold uppercase tracking-wider block">
                        Factory Address
                      </span>
                      <span className="text-white text-[14px] font-medium leading-relaxed">
                        Nawab Mashkoor Town Kahna Kacha Road Kahna Nou Lahore- Pakistan
                      </span>
                    </div>
                  </div>

                  {/* Visiting Info */}
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-1.5 text-[13px]">
                    <span className="font-title text-[12px] font-bold text-[#38bdf8]">
                      Visitor &amp; Factory Inspection Policy
                    </span>
                    <p className="text-[#c3e8ff] leading-relaxed">
                      Clients and engineering consultants are welcome to attend Factory Acceptance Tests (FAT) and panel witness testing during working hours.
                    </p>
                  </div>

                  {/* Action Link */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Nawab+Mashkoor+Town+Kahna+Kacha+Road+Kahna+Nau+Lahore+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[13px] font-bold rounded-xl shadow transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open in Google Maps Navigation</span>
                  </a>
                </div>
              </div>

              {/* Inquiry Help Box */}
              <div className="bg-white p-6 rounded-2xl border border-[#d5e7f2] shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#e1f2fb] text-[#0098da] flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-[#0098da]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-title text-[#00283d] text-[15px] font-bold">
                    Need an urgent quotation?
                  </h4>
                  <p className="font-body text-[#5b7384] text-[13px] leading-relaxed">
                    Directly call our sales desk at{' '}
                    <a href="tel:+923004466489" className="text-[#0098da] font-bold hover:underline">
                      +92 300 4466489
                    </a>{' '}
                    or email drawings to{' '}
                    <a href="mailto:emswitchgears@gmail.com" className="text-[#0098da] font-bold hover:underline">
                      emswitchgears@gmail.com
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Pinpoint Map Section */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-1">
              <span className="font-title text-[#0098da] text-[11px] uppercase tracking-widest font-bold">
                FACTORY MAP &amp; DIRECTIONS
              </span>
              <h2 className="font-title text-[#00283d] text-[24px] sm:text-[28px] font-bold">
                Pinpoint Location on Map
              </h2>
            </div>

            <CompanyMap showTitle={true} />
          </div>
        </section>
      </main>

      {/* Footer & BottomNav */}
      <Footer />
      <BottomNav />
    </div>
  );
}

export default ContactClient;

