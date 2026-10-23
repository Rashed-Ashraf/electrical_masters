'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Phone, ShieldCheck, Check } from 'lucide-react';

interface CompanyMapProps {
  className?: string;
  showTitle?: boolean;
}

export const CompanyMap: React.FC<CompanyMapProps> = ({ className = '', showTitle = true }) => {
  const [copied, setCopied] = useState(false);

  const address = 'Nawab Mashkoor Town Kahna Kacha Road Kahna Nou Lahore- Pakistan';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Nawab+Mashkoor+Town+Kahna+Kacha+Road+Kahna+Nau+Lahore+Pakistan';
  // Embed iframe with pin centered on Kahna Kacha Road Lahore
  const embedUrl = 'https://maps.google.com/maps?q=Kahna%20Kacha%20Road%20Kahna%20Nau%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed';

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`w-full rounded-2xl overflow-hidden bg-[#002b40] border border-white/15 shadow-2xl flex flex-col ${className}`}>
      {/* Map Header / Location Bar */}
      {showTitle && (
        <div className="p-4 sm:p-5 bg-[#002233] border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0098da]/20 text-[#38bdf8] flex items-center justify-center flex-shrink-0 border border-[#0098da]/30 shadow-inner">
              <MapPin className="w-5 h-5 text-[#38bdf8] animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-title text-white text-[15px] sm:text-[16px] font-bold">
                  Head Office &amp; Manufacturing Works
                </h4>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-[#0098da]/20 text-[#38bdf8] font-technical text-[10px] font-bold uppercase tracking-wider">
                  Pinpoint Location
                </span>
              </div>
              <p className="font-body text-[#c3e8ff] text-[12px] sm:text-[13px] leading-snug">
                {address}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={copyAddress}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-[#e1f0f8] text-[12px] font-title font-semibold rounded-lg transition-all border border-white/10"
              title="Copy company address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <span>Copy Address</span>
              )}
            </button>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-[#0098da] hover:bg-[#0084bd] active:bg-[#006f9e] text-white text-[12px] font-title font-bold rounded-lg shadow transition-all active:scale-95 whitespace-nowrap"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      )}

      {/* Embedded Pinpoint Map Container */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] bg-[#001c2b]">
        <iframe
          title="Electrical Masters Switchgear Location Map"
          src={embedUrl}
          className="w-full h-full border-0 filter saturate-110 contrast-105"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Pinpoint Indicator Overlay Badge */}
        <div className="absolute top-3 left-3 pointer-events-none bg-[#002233]/90 backdrop-blur-md border border-[#0098da]/40 text-white px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 max-w-[90%]">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-title text-[11px] font-bold text-white leading-tight">
              Electrical Masters Switchgear Pvt. Ltd.
            </span>
            <span className="font-technical text-[10px] text-[#38bdf8]">
              Kahna Kacha Road, Kahna Nau, Lahore
            </span>
          </div>
        </div>

        {/* Floating Bottom Quick Action */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-white text-[#002b40] font-title text-[12px] font-bold rounded-lg shadow-lg hover:bg-[#f0f7fb] transition-all flex items-center gap-1.5"
          >
            <span>View Full Google Map</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#0098da]" />
          </a>
        </div>
      </div>
    </div>
  );
};
