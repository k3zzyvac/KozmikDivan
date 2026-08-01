"use client";

import React, { memo } from "react";
import { Video, Link2, BarChart3, Sparkles, TrendingUp, Users } from "lucide-react";

const IPhoneMockup = memo(function IPhoneMockup() {
  return (
    <div className="relative w-full mx-auto flex items-center justify-center select-none px-4 sm:px-0">
      {/* Phone container */}
      <div
        className="relative w-full max-w-[260px] sm:max-w-[300px] h-[520px] sm:h-[600px] rounded-[44px] sm:rounded-[48px] p-[3px]"
        style={{
          background: "linear-gradient(145deg, #FAF9F5 0%, #E8E4DE 30%, #D5D0C8 50%, #E8E4DE 70%, #FAF9F5 100%)",
          boxShadow: "0 20px 50px rgba(28, 26, 23, 0.1), 0 8px 24px rgba(28, 26, 23, 0.05), inset 0 1px 0.5px rgba(255,255,255,0.9)",
        }}
      >
        {/* Inner bezel */}
        <div
          className="w-full h-full rounded-[41px] sm:rounded-[45px] p-[5px] sm:p-[6px] relative"
          style={{
            background: "linear-gradient(160deg, #FDFCF9 0%, #E8E4DE 50%, #D5D0C8 100%)",
          }}
        >
          {/* Screen */}
          <div className="w-full h-full rounded-[36px] sm:rounded-[39px] overflow-hidden bg-[#F9F8F3] relative flex flex-col">
            
            {/* Status Bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 pt-2.5 sm:pt-3 pb-1">
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#1C1A17]">9:41</span>
              
              {/* Dynamic Island */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2 sm:top-2.5 w-[70px] sm:w-[80px] h-[18px] sm:h-[20px] bg-[#1C1A17] rounded-full z-30" />
              
              <div className="flex items-center gap-1.5">
                {/* Signal */}
                <svg width="14" height="10" viewBox="0 0 16 12" fill="none" className="text-[#1C1A17]">
                  <rect x="1" y="8" width="2.5" height="4" rx="0.5" fill="currentColor" />
                  <rect x="5" y="5" width="2.5" height="7" rx="0.5" fill="currentColor" />
                  <rect x="9" y="2" width="2.5" height="10" rx="0.5" fill="currentColor" />
                  <rect x="13" y="0" width="2.5" height="12" rx="0.5" fill="currentColor" />
                </svg>
                
                {/* Battery */}
                <div className="relative w-[20px] h-[10px] rounded-[3px] border border-[#1C1A17] p-[1px] flex items-center">
                  <div className="w-full h-full bg-[#1C1A17] rounded-[2px]" />
                  <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] rounded-r-[1px] bg-[#1C1A17]" />
                </div>
              </div>
            </div>

            {/* App Header */}
            <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-2 sm:pb-3 flex items-center justify-center">
              <span className="font-heading text-[14px] sm:text-[16px] font-semibold tracking-[0.04em] text-[#1C1A17]" style={{ fontFamily: "var(--font-playfair)" }}>
                Adora
              </span>
            </div>

            {/* Welcome Card */}
            <div className="px-3 sm:px-4 mb-2 sm:mb-3">
              <div 
                className="rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-4 text-center border"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 248, 243, 0.9) 100%)",
                  borderColor: "rgba(232, 228, 222, 0.8)",
                }}
              >
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] font-semibold text-[#9B9590] block mb-0.5 sm:mb-1">
                  Hoş Geldiniz
                </span>
                <h3 className="font-heading text-[12px] sm:text-[14px] font-semibold text-[#1C1A17] leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  AI Reklam Asistanınız
                </h3>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="flex-1 px-3 sm:px-4 pb-3 sm:pb-4">
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                {/* UGC Video */}
                <div 
                  className="rounded-[12px] sm:rounded-[14px] p-2 sm:p-2.5 flex flex-col items-center justify-center aspect-square border"
                  style={{
                    background: "#FDFCF9",
                    borderColor: "#F0ECE6",
                  }}
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F9F8F3] border border-[#E8E4DE] flex items-center justify-center mb-1 sm:mb-1.5">
                    <Video size={12} className="sm:hidden text-[#C19F5F]" strokeWidth={2} />
                    <Video size={15} className="hidden sm:block text-[#C19F5F]" strokeWidth={2} />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-medium text-[#6B6560] text-center leading-tight">
                    UGC Video
                  </span>
                </div>

                {/* Link'ten Reklam */}
                <div 
                  className="rounded-[12px] sm:rounded-[14px] p-2 sm:p-2.5 flex flex-col items-center justify-center aspect-square border"
                  style={{
                    background: "#FDFCF9",
                    borderColor: "#F0ECE6",
                  }}
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F9F8F3] border border-[#E8E4DE] flex items-center justify-center mb-1 sm:mb-1.5">
                    <Link2 size={12} className="sm:hidden text-[#C19F5F]" strokeWidth={2} />
                    <Link2 size={15} className="hidden sm:block text-[#C19F5F]" strokeWidth={2} />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-medium text-[#6B6560] text-center leading-tight">
                    Link'ten Reklam
                  </span>
                </div>

                {/* Reklam Analizi */}
                <div 
                  className="rounded-[12px] sm:rounded-[14px] p-2 sm:p-2.5 flex flex-col items-center justify-center aspect-square border"
                  style={{
                    background: "#FDFCF9",
                    borderColor: "#F0ECE6",
                  }}
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F9F8F3] border border-[#E8E4DE] flex items-center justify-center mb-1 sm:mb-1.5">
                    <BarChart3 size={12} className="sm:hidden text-[#C19F5F]" strokeWidth={2} />
                    <BarChart3 size={15} className="hidden sm:block text-[#C19F5F]" strokeWidth={2} />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-medium text-[#6B6560] text-center leading-tight">
                    Reklam Analizi
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                {/* AI Oyuncular */}
                <div 
                  className="rounded-[12px] sm:rounded-[14px] p-2 sm:p-2.5 flex flex-col items-center justify-center aspect-square border"
                  style={{
                    background: "#FDFCF9",
                    borderColor: "#F0ECE6",
                  }}
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F9F8F3] border border-[#E8E4DE] flex items-center justify-center mb-1 sm:mb-1.5">
                    <Users size={12} className="sm:hidden text-[#C19F5F]" strokeWidth={2} />
                    <Users size={15} className="hidden sm:block text-[#C19F5F]" strokeWidth={2} />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-medium text-[#6B6560] text-center leading-tight">
                    AI Oyuncular
                  </span>
                </div>

                {/* ROAS Takibi */}
                <div 
                  className="rounded-[12px] sm:rounded-[14px] p-2 sm:p-2.5 flex flex-col items-center justify-center aspect-square border"
                  style={{
                    background: "#FDFCF9",
                    borderColor: "#F0ECE6",
                  }}
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F9F8F3] border border-[#E8E4DE] flex items-center justify-center mb-1 sm:mb-1.5">
                    <TrendingUp size={12} className="sm:hidden text-[#C19F5F]" strokeWidth={2} />
                    <TrendingUp size={15} className="hidden sm:block text-[#C19F5F]" strokeWidth={2} />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-medium text-[#6B6560] text-center leading-tight">
                    ROAS Takibi
                  </span>
                </div>

                {/* Otomatik Reklam */}
                <div 
                  className="rounded-[12px] sm:rounded-[14px] p-2 sm:p-2.5 flex flex-col items-center justify-center aspect-square border"
                  style={{
                    background: "#FDFCF9",
                    borderColor: "#F0ECE6",
                  }}
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F9F8F3] border border-[#E8E4DE] flex items-center justify-center mb-1 sm:mb-1.5">
                    <Sparkles size={12} className="sm:hidden text-[#C19F5F]" strokeWidth={2} />
                    <Sparkles size={15} className="hidden sm:block text-[#C19F5F]" strokeWidth={2} />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-medium text-[#6B6560] text-center leading-tight">
                    Otomatik Reklam
                  </span>
                </div>
              </div>

              {/* Quick Action Card */}
              <div 
                className="rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between border"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  borderColor: "rgba(232, 228, 222, 0.8)",
                }}
              >
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-[12px]" style={{ background: "rgba(193, 159, 95, 0.15)" }}>
                    <span>🎬</span>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-[#1C1A17] block leading-tight">
                      Yeni Video Üret
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-[#9B9590]">Link yapıştır, hazır</span>
                  </div>
                </div>
                <span className="text-[12px] sm:text-[14px] text-[#C19F5F] font-bold">→</span>
              </div>
            </div>

            {/* Bottom Nav Indicator */}
            <div className="flex justify-center pb-2 sm:pb-3 pt-1">
              <div className="w-[90px] sm:w-[100px] h-[3.5px] sm:h-[4px] bg-[#1C1A17] rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default IPhoneMockup;
