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
  Map,
  Sparkles,
} from 'lucide-react';
import { sendEmail } from '@/app/actions/send-email';
import { CompanyMap } from './CompanyMap';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [showFullMap, setShowFullMap] = useState(true);

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
      // Call Next.js Server Action
      const result = await sendEmail(formData);

      if (result.success) {
        setStatus('success');
        setFeedbackMsg(result.message || "Thank you! We'll contact you soon.");
        // Clear form fields
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
    <section className="w-full px-4 sm:px-8 py-16 bg-[#004d6d] text-white relative overflow-hidden" id="contact-section">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-title text-[#c3e8ff] uppercase tracking-widest font-bold text-[12px]">
            GET IN TOUCH &amp; VISIT US
          </span>
          <h2 className="font-title text-white text-[26px] sm:text-[34px] font-bold">
            Contact Our Engineering Team
          </h2>
          <div className="w-16 h-1 bg-[#0098da] rounded-full my-1" />
          <p className="font-body text-[#e1f0f8] text-[15px] leading-relaxed max-w-2xl">
            Have questions about our switchgear panels, services, or need an official quotation? Send us a message or find our factory location on the pinpoint map below.
          </p>
        </div>

        {/* 2-Column Desktop Grid (Form + Contact Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-2xl text-[#00283d] flex flex-col gap-5 border border-[#e1f0f8]">
            <div className="flex items-center justify-between pb-3 border-b border-[#edf4f8]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e1f2fb] text-[#0098da] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#0098da]" />
                </div>
                <div>
                  <h3 className="font-title text-[#00283d] text-[18px] font-bold">Send Us a Message</h3>
                  <p className="text-[12px] text-[#5b7384]">We respond within 24 business hours</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1 text-[12px] font-title font-bold text-[#0098da] hover:underline"
              >
                <span>Full Contact Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feedback Notifications */}
            {status === 'success' && (
              <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-md text-emerald-900 text-[13px] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block text-emerald-950">Message Sent!</strong>
                  <span>{feedbackMsg}</span>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-md text-rose-900 text-[13px] flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block text-rose-950">Submission Error</strong>
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
                  placeholder="John Doe"
                  required
                  className="h-11 px-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] focus:border-transparent transition-all"
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
                    placeholder="john@example.com"
                    required
                    className="h-11 px-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-title text-[12px] text-[#3e5261] font-semibold">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    required
                    className="h-11 px-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] focus:border-transparent transition-all"
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
                  placeholder="e.g. Acme Industries Ltd."
                  className="h-11 px-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] focus:border-transparent transition-all"
                />
              </div>

              {/* Your Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-title text-[12px] text-[#3e5261] font-semibold">
                  Your Message or Switchgear Specs <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project requirements, voltage ratings, or services required..."
                  required
                  className="p-3.5 rounded-lg bg-[#f4f8fb] border border-[#d5e3ed] text-[#00283d] placeholder:text-[#8ba2b2] font-body text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0098da] focus:border-transparent resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full h-12 mt-2 bg-[#0098da] hover:bg-[#0084bd] active:bg-[#006f9e] text-white font-title text-[15px] rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all font-bold disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information Panel (5 Cols) with LOCATION & PINPOINT MAP OPTION */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-7 bg-white/10 rounded-2xl border border-white/15 flex flex-col gap-5 backdrop-blur-md shadow-xl">
              <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                <span className="font-title text-[#38bdf8] uppercase tracking-wider font-bold text-[11px]">
                  Head Office &amp; Works
                </span>
                <h3 className="font-title text-white text-[18px] font-bold leading-tight">
                  Electrical Masters Switchgear Private Limited
                </h3>
              </div>

              <div className="flex flex-col gap-4 font-body text-[14px] text-[#d5eefc]">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#38bdf8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#98cded] text-[11px] font-bold uppercase tracking-wider">
                      Company Location
                    </span>
                    <span className="text-white text-[13.5px] font-medium leading-relaxed">
                      Nawab Mashkoor Town Kahna Kacha Road Kahna Nou Lahore- Pakistan
                    </span>
                    <a
                      href="https://www.google.com/maps?q=31.375889,74.352007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#38bdf8] hover:underline mt-0.5"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Navigate in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#38bdf8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#98cded] text-[11px] font-bold uppercase tracking-wider">
                      Phone &amp; WhatsApp
                    </span>
                    <div className="flex flex-col text-[14px] font-medium text-white">
                      <a href="tel:+923004466489" className="hover:text-[#38bdf8] transition-colors">
                        +92 300 4466489
                      </a>
                      <a href="tel:+923334466489" className="hover:text-[#38bdf8] transition-colors">
                        +92 333 4466489
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#38bdf8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#98cded] text-[11px] font-bold uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href="mailto:emswitchgears@gmail.com"
                      className="text-[#38bdf8] hover:text-white underline underline-offset-4 text-[14px] font-medium break-all"
                    >
                      emswitchgears@gmail.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#38bdf8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div className="flex flex-col gap-0.5 text-[13px]">
                    <span className="text-[#98cded] text-[11px] font-bold uppercase tracking-wider">
                      Business Hours
                    </span>
                    <span className="text-white">Mon – Fri: 8:00 AM – 6:00 PM</span>
                    <span className="text-white">Saturday: 9:00 AM – 1:00 PM</span>
                    <span className="text-[#c3e8ff]">Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FULL INTERACTIVE PINPOINT MAP EMBED OPTION ON HOME PAGE */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-[#38bdf8]" />
              <h3 className="font-title text-white text-[18px] sm:text-[20px] font-bold">
                Company Location on Map
              </h3>
            </div>
            <span className="text-[12px] text-[#c3e8ff]">
              Lahore Manufacturing Facility &amp; Head Office
            </span>
          </div>

          <CompanyMap showTitle={true} />
        </div>
      </div>
    </section>
  );
};
