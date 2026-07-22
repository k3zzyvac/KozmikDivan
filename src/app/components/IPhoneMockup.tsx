"use client";

import React, { memo } from "react";
import { Sun, Calendar, BarChart3, Clock, Heart, Menu, Bell } from "lucide-react";

const IPhoneMockup = memo(function IPhoneMockup() {
  return (
    <div className="relative w-full max-w-[550px] h-[480px] sm:h-[520px] mx-auto flex items-center justify-center select-none">
      {/* Background Orbital Rings & Glowing Orb - hidden on mobile via CSS */}
      <div className="orbit-container" aria-hidden="true">
        <div className="orbit-ring-1" />
        <div className="orbit-ring-2" />
        <div className="orbit-ring-3">
          {/* Glowing orb representing a planet on the outer orbit */}
          <div className="orbit-planet" />
        </div>
      </div>

      {/* Phone container with perspective for 3D rotation */}
      <div className="relative w-full h-full flex items-center justify-center perspective-[1000px] z-10">
        
        {/* ==========================================
            1. LEFT IPHONE (Angled Back Profile)
            ========================================== */}
        <div
          className="absolute left-[8%] sm:left-[12%] w-[220px] sm:w-[240px] h-[440px] sm:h-[485px] rounded-[44px] p-[2.5px] transition-all duration-700 hidden xs:block"
          style={{
            background: "linear-gradient(135deg, #FAF9F5 0%, #D5D0C8 40%, #A39D95 70%, #E8E4DE 100%)",
            boxShadow: "-12px 20px 40px rgba(44, 40, 37, 0.12), -4px 6px 12px rgba(44, 40, 37, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
            transform: "rotateY(22deg) rotateX(4deg) rotateZ(-3deg) translateZ(-40px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Outer metal edge details */}
          <div 
            className="w-full h-full rounded-[42px] p-[8px] relative overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #F0EDE8 0%, #E8E4DE 50%, #C4BEB5 100%)",
            }}
          >
            {/* Matte Glass Back Panel */}
            <div 
              className="w-full h-full rounded-[34px] relative flex flex-col items-center justify-between py-10"
              style={{
                background: "linear-gradient(135deg, #FCFAF7 0%, #EFEBE4 100%)",
                boxShadow: "inset 0 1px 3px rgba(255, 255, 255, 0.6), inset 0 -2px 5px rgba(0,0,0,0.02)",
              }}
            >
              {/* Camera Module (Triple Camera Island) */}
              <div 
                className="absolute top-5 left-5 w-[85px] h-[85px] rounded-[24px] p-[1.5px]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(213,208,200,0.4) 100%)",
                  boxShadow: "2px 4px 10px rgba(44, 40, 37, 0.05), inset 0 0.5px 1px rgba(255,255,255,0.8)",
                }}
              >
                <div 
                  className="w-full h-full rounded-[22.5px] relative"
                  style={{
                    background: "linear-gradient(135deg, #F4F0E8 0%, #E5DFD5 100%)",
                    boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  {/* Camera 1 (Top Left) */}
                  <div className="absolute top-[10px] left-[10px] w-[30px] h-[30px] rounded-full bg-[#E3DDD3] border border-[#DCD6C9] shadow-inner flex items-center justify-center">
                    <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#1E1D1B] to-[#3A3835] p-[3px] border border-[#C5BEB3]">
                      <div className="w-full h-full rounded-full bg-[#111] relative overflow-hidden">
                        <div className="absolute top-0.5 left-0.5 w-[5px] h-[5px] rounded-full bg-white/25 filter blur-[0.5px]" />
                        <div className="absolute bottom-1 right-1 w-[4px] h-[4px] rounded-full bg-blue-400/20 filter blur-[0.5px]" />
                      </div>
                    </div>
                  </div>
                  {/* Camera 2 (Bottom Left) */}
                  <div className="absolute bottom-[10px] left-[10px] w-[30px] h-[30px] rounded-full bg-[#E3DDD3] border border-[#DCD6C9] shadow-inner flex items-center justify-center">
                    <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#1E1D1B] to-[#3A3835] p-[3px] border border-[#C5BEB3]">
                      <div className="w-full h-full rounded-full bg-[#111] relative overflow-hidden">
                        <div className="absolute top-0.5 left-0.5 w-[5px] h-[5px] rounded-full bg-white/25 filter blur-[0.5px]" />
                        <div className="absolute bottom-1 right-1 w-[4px] h-[4px] rounded-full bg-blue-400/20 filter blur-[0.5px]" />
                      </div>
                    </div>
                  </div>
                  {/* Camera 3 (Right Center) */}
                  <div className="absolute top-[27.5px] right-[10px] w-[30px] h-[30px] rounded-full bg-[#E3DDD3] border border-[#DCD6C9] shadow-inner flex items-center justify-center">
                    <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#1E1D1B] to-[#3A3835] p-[3px] border border-[#C5BEB3]">
                      <div className="w-full h-full rounded-full bg-[#111] relative overflow-hidden">
                        <div className="absolute top-0.5 left-0.5 w-[5px] h-[5px] rounded-full bg-white/25 filter blur-[0.5px]" />
                        <div className="absolute bottom-1 right-1 w-[4px] h-[4px] rounded-full bg-blue-400/20 filter blur-[0.5px]" />
                      </div>
                    </div>
                  </div>
                  {/* Flash (Top Right) */}
                  <div className="absolute top-[16px] right-[18px] w-[9px] h-[9px] rounded-full bg-[#FAF9F6] border border-[#EBE8E0] shadow-sm flex items-center justify-center">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#FFEFA8] filter blur-[0.2px]" />
                  </div>
                  {/* LiDAR Sensor (Bottom Right) */}
                  <div className="absolute bottom-[16px] right-[18px] w-[9px] h-[9px] rounded-full bg-[#2C2B29] border border-[#403E3B] shadow-inner" />
                </div>
              </div>

              {/* Apple Logo (Centered in Champagne Gold) */}
              <div className="my-auto flex items-center justify-center opacity-[0.25]">
                <svg
                  width="36"
                  height="44"
                  viewBox="0 0 170 170"
                  fill="none"
                  className="text-[#D4AF37]"
                >
                  <path
                    d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.92-14.36-6.17-3.29-2.7-7.14-7.38-11.55-14.04-8.86-13.43-15.02-29.35-18.49-47.76-3.48-18.4-3.6-34.69-.36-48.87 3.24-14.18 10.02-25.29 20.35-33.34 9.17-7.11 19.34-10.79 30.5-11.04 5.26 0 11.02 1.54 17.29 4.63 6.26 3.09 10.74 4.63 13.43 4.63 2.13 0 6.36-1.48 12.69-4.42 6.32-2.95 11.96-4.32 16.92-4.12 16 .62 28.53 6.64 37.6 18.06-13.59 8.24-20.25 19.86-19.98 34.87.27 11.85 4.65 21.6 13.14 29.25 8.5 7.64 18.45 11.83 29.87 12.56-2.54 7.42-5.7 14.8-9.49 22.14zM119.22 9.77c0-7.83 2.76-15.17 8.28-22.02 5.53-6.85 12.44-11.12 20.73-12.82.14 1.25.21 2.37.21 3.35 0 7.54-2.82 14.73-8.47 21.57-5.65 6.84-12.63 11.16-20.96 12.96-.13-1.12-.2-2.12-.2-3.04z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* iPhone Text Details (Bottom) */}
              <div className="text-[7px] text-[#A39D95] tracking-[0.2em] font-medium opacity-50 uppercase">
                iPhone
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            2. RIGHT IPHONE (Front Dashboard Profile - OVERLAPPING)
            ========================================== */}
        <div
          className="absolute left-1/2 -translate-x-[40%] xs:-translate-x-[20%] sm:-translate-x-[10%] w-[250px] sm:w-[270px] h-[460px] sm:h-[500px] rounded-[48px] p-[3px] transition-all duration-700"
          style={{
            background: "linear-gradient(145deg, #FAF9F5 0%, #D5D0C8 30%, #C8C2B8 50%, #D5D0C8 70%, #FAF9F5 100%)",
            boxShadow: "0 25px 55px rgba(44, 40, 37, 0.15), 0 8px 22px rgba(44, 40, 37, 0.08), inset 0 1px 0.5px rgba(255,255,255,0.9)",
          }}
        >
          {/* Inner bezel wrapper */}
          <div
            className="w-full h-full rounded-[45px] p-[7px] relative"
            style={{
              background: "linear-gradient(160deg, #FDFCF9 0%, #E8E4DE 50%, #D5D0C8 100%)",
            }}
          >
            {/* Screen bezel */}
            <div className="w-full h-full rounded-[38px] overflow-hidden bg-white relative flex flex-col justify-between shadow-inner">
              
              {/* Dynamic Screen Content Wrapper */}
              <div className="flex-1 flex flex-col bg-[#FAF9F5] overflow-hidden relative">
                
                {/* 2.1 STATUS BAR */}
                <div className="flex items-center justify-between px-6 pt-3 pb-1 z-20">
                  <span className="text-[10px] font-bold text-[#2C2825] tracking-tight">
                    9:41
                  </span>
                  
                  {/* Dynamic Island */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[75px] h-[18px] bg-[#000] rounded-full z-30 flex items-center justify-between px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-[#222]" />
                    <div className="w-[3px] h-[3px] rounded-full bg-[#05051a] shadow-inner" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Signal Strength */}
                    <svg width="13" height="9" viewBox="0 0 15 11" fill="none" className="text-[#2C2825]">
                      <rect x="1" y="8" width="2" height="3" rx="0.5" fill="currentColor" />
                      <rect x="4" y="6" width="2" height="5" rx="0.5" fill="currentColor" />
                      <rect x="7" y="4" width="2" height="7" rx="0.5" fill="currentColor" />
                      <rect x="10" y="1" width="2" height="10" rx="0.5" fill="currentColor" />
                    </svg>
                    
                    {/* Wifi */}
                    <svg width="13" height="9" viewBox="0 0 15 11" fill="none" className="text-[#2C2825]">
                      <path d="M7.5 3C9.5 3 11.3 3.8 12.6 5.1L14 3.7C12.4 2.1 10.1 1 7.5 1C4.9 1 2.6 2.1 1 3.7L2.4 5.1C3.7 3.8 5.5 3 7.5 3Z" fill="currentColor" />
                      <path d="M7.5 6C8.7 6 9.8 6.5 10.6 7.1L12 5.7C10.8 4.7 9.2 4 7.5 4C5.8 4 4.2 4.7 3 5.7L4.4 7.1C5.2 6.5 6.3 6 7.5 6Z" fill="currentColor" />
                    </svg>

                    {/* Battery */}
                    <div className="relative w-[18px] h-[9px] rounded-[3px] border border-[#2C2825] p-[1px] flex items-center">
                      <div className="w-full h-full bg-[#2C2825] rounded-[1.5px]" />
                      <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[1.5px] h-[3px] rounded-r-[1px] bg-[#2C2825]" />
                    </div>
                  </div>
                </div>

                {/* 2.2 APP HEADER */}
                <div className="px-5 pt-3 pb-2 flex items-center justify-between z-10">
                  <button className="text-[#6B6560] hover:text-[#2C2825] transition-colors">
                    <Menu size={16} />
                  </button>
                  <span className="font-heading text-[15px] font-bold tracking-[0.03em] text-[#2C2825] font-playfair">
                    Kozmik Divan
                  </span>
                  <div className="relative">
                    <Bell size={16} className="text-[#6B6560]" />
                    <span className="absolute top-[0.5px] right-[0.5px] w-2 h-2 rounded-full bg-[#E5484D] border border-white" />
                  </div>
                </div>

                {/* 2.3 APP CONTENT CONTAINER */}
                <div className="flex-1 px-4 flex flex-col justify-start gap-3 mt-1.5 pb-2">
                  
                  {/* Floating Glass Title Badge */}
                  <div 
                    className="rounded-2xl py-3 px-4 text-center border shadow-sm relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 244, 236, 0.7) 100%)",
                      borderColor: "rgba(232, 228, 222, 0.8)",
                    }}
                  >
                    <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-[#9B9590] block mb-0.5">
                      Hoş Geldiniz
                    </span>
                    <h3 className="font-heading text-[15px] font-bold text-[#2C2825] font-playfair tracking-wide leading-tight">
                      Tam Kapsamlı <br/> Kozmik Asistan
                    </h3>
                  </div>

                  {/* 2.4 FEATURES CARD GRID */}
                  <div className="grid grid-cols-3 gap-2">
                    {/* Item 1 */}
                    <div 
                      className="rounded-[16px] p-2.5 flex flex-col items-center justify-between aspect-square border text-center transition-all duration-300 hover:bg-[#FDFCF9]"
                      style={{
                        background: "#FDFCF9",
                        borderColor: "#F0ECE6",
                        boxShadow: "0 2px 8px rgba(44, 40, 37, 0.02)",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#F0ECE6] flex items-center justify-center text-[#D4AF37] shadow-sm">
                        <Sun size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-medium text-[#6B6560] leading-tight mt-1">
                        Derin Fal
                      </span>
                    </div>

                    {/* Item 2 */}
                    <div 
                      className="rounded-[16px] p-2.5 flex flex-col items-center justify-between aspect-square border text-center transition-all duration-300 hover:bg-[#FDFCF9]"
                      style={{
                        background: "#FDFCF9",
                        borderColor: "#F0ECE6",
                        boxShadow: "0 2px 8px rgba(44, 40, 37, 0.02)",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#F0ECE6] flex items-center justify-center text-[#D4AF37] shadow-sm text-[12px] font-bold">
                        ✦
                      </div>
                      <span className="text-[9px] font-medium text-[#6B6560] leading-tight mt-1">
                        Doğum Haritası
                      </span>
                    </div>

                    {/* Item 3 */}
                    <div 
                      className="rounded-[16px] p-2.5 flex flex-col items-center justify-between aspect-square border text-center transition-all duration-300 hover:bg-[#FDFCF9]"
                      style={{
                        background: "#FDFCF9",
                        borderColor: "#F0ECE6",
                        boxShadow: "0 2px 8px rgba(44, 40, 37, 0.02)",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#F0ECE6] flex items-center justify-center text-[#D4AF37] shadow-sm">
                        <Calendar size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-medium text-[#6B6560] leading-tight mt-1">
                        Finans Takvimi
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {/* Item 4 */}
                    <div 
                      className="rounded-[16px] p-2.5 flex flex-col items-center justify-between aspect-square border text-center transition-all duration-300 hover:bg-[#FDFCF9]"
                      style={{
                        background: "#FDFCF9",
                        borderColor: "#F0ECE6",
                        boxShadow: "0 2px 8px rgba(44, 40, 37, 0.02)",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#F0ECE6] flex items-center justify-center text-[#D4AF37] shadow-sm">
                        <BarChart3 size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-medium text-[#6B6560] leading-tight mt-1">
                        Finans Takvimi
                      </span>
                    </div>

                    {/* Item 5 */}
                    <div 
                      className="rounded-[16px] p-2.5 flex flex-col items-center justify-between aspect-square border text-center transition-all duration-300 hover:bg-[#FDFCF9]"
                      style={{
                        background: "#FDFCF9",
                        borderColor: "#F0ECE6",
                        boxShadow: "0 2px 8px rgba(44, 40, 37, 0.02)",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#F0ECE6] flex items-center justify-center text-[#D4AF37] shadow-sm">
                        <Clock size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-medium text-[#6B6560] leading-tight mt-1">
                        Günlük Metrikler
                      </span>
                    </div>

                    {/* Item 6 */}
                    <div 
                      className="rounded-[16px] p-2.5 flex flex-col items-center justify-between aspect-square border text-center transition-all duration-300 hover:bg-[#FDFCF9]"
                      style={{
                        background: "#FDFCF9",
                        borderColor: "#F0ECE6",
                        boxShadow: "0 2px 8px rgba(44, 40, 37, 0.02)",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#F0ECE6] flex items-center justify-center text-[#D4AF37] shadow-sm">
                        <Heart size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-medium text-[#6B6560] leading-tight mt-1">
                        Sinastri
                      </span>
                    </div>
                  </div>

                  {/* 2.5 STATUS CARD (Finans Takvimi - Yatırım Günü) */}
                  <div 
                    className="rounded-2xl px-4 py-3 flex items-center justify-between border cursor-pointer group transition-all duration-300 hover:bg-white/95"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      borderColor: "rgba(232, 228, 222, 0.8)",
                      boxShadow: "0 4px 12px rgba(44, 40, 37, 0.02)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-[#E5F9EB] flex items-center justify-center text-[11px]">
                        🔔
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-semibold text-[#2C2825] leading-tight">
                          Finans: 🦖 Yatırım Günü
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#9B9590] group-hover:text-[#2C2825] transition-colors leading-none font-bold">
                      &rsaquo;
                    </span>
                  </div>

                </div>

                {/* 2.6 BOTTOM NAV INDICATOR */}
                <div className="flex justify-center pb-2 pt-1 bg-transparent">
                  <div className="w-[85px] h-[3.5px] bg-[#2C2825] rounded-full opacity-20" />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default IPhoneMockup;
