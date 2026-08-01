"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  Lock,
  ArrowRight,
  Link2,
  Video,
  TrendingUp,
  Users,
  Play,
  BarChart3,
  PieChart,
} from "lucide-react";
import IPhoneMockup from "./components/IPhoneMockup";
import { joinWaitlist } from "./actions";

/* ========================================
   Animation Config
   ======================================== */
const easeOut = [0.16, 1, 0.3, 1] as const;

/* ========================================
   Animated Section
   ======================================== */
const AnimatedSection = memo(function AnimatedSection({
  children,
  className = "",
  id,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={ref} className={className} style={style}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut as unknown as [number, number, number, number] }}
        >
          {children}
        </motion.div>
      ) : (
        <div style={{ opacity: 0 }}>{children}</div>
      )}
    </div>
  );
});

/* ========================================
   Section 01 Visual - Link to Video
   ======================================== */
function Section01Visual() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Input Bar */}
      <div 
        className="rounded-2xl p-4 border mb-4"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderColor: "#E8E4DE",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2">
            <Link2 size={16} className="text-[#C19F5F]" />
            <span className="text-[13px] text-[#9B9590]">Shopify Ürün Linki</span>
          </div>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(193, 159, 95, 0.1)" }}>
            <Copy size={14} className="text-[#C19F5F]" />
          </div>
        </div>
      </div>

      {/* Processing Animation */}
      <div className="flex items-center justify-center gap-4 py-6">
        <div className="flex items-center gap-2">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #E5A11F, #C19F5F)" }}
          >
            <Play size={16} className="text-white ml-0.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-[#1C1A17]">Video Üretiliyor</span>
            <span className="text-[10px] text-[#9B9590]">AI analiz yapıyor...</span>
          </div>
        </div>
      </div>

      {/* Result Preview */}
      <div 
        className="rounded-2xl p-4 border"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          borderColor: "#E8E4DE",
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-16 h-24 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #F5F3ED, #E8E4DE)" }}
          >
            <Video size={24} className="text-[#C19F5F]" />
          </div>
          <div className="flex-1">
            <span className="text-[12px] font-semibold text-[#1C1A17] block mb-1">UGC Video Hazır</span>
            <span className="text-[11px] text-[#6B6560]">15 saniye • Dikey Format</span>
            <div className="flex gap-2 mt-2">
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#F5F3ED] text-[#6B6560]">TikTok</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#F5F3ED] text-[#6B6560]">Reels</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================
   Section 02 Visual - AI Actor
   ======================================== */
function Section02Visual() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Video Frame */}
        <div 
          className="flex-1 rounded-2xl overflow-hidden border"
          style={{
            background: "linear-gradient(180deg, #E8E4DE 0%, #D5D0C8 100%)",
            borderColor: "#E8E4DE",
            aspectRatio: "9/16",
            maxHeight: "320px"
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-6">
            <div className="w-20 h-20 rounded-full mb-4 flex items-center justify-center" style={{ background: "rgba(193, 159, 95, 0.15)" }}>
              <Users size={32} className="text-[#C19F5F]" />
            </div>
            <span className="text-[13px] font-semibold text-[#1C1A17] text-center">AI Oyuncu</span>
            <span className="text-[11px] text-[#6B6560] text-center mt-1">Gerçekçi video sunumu</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-row sm:flex-col gap-2 flex-wrap">
          <div 
            className="px-4 py-2.5 rounded-xl border text-center flex-1 sm:flex-none"
            style={{ background: "rgba(255, 255, 255, 0.9)", borderColor: "#E8E4DE" }}
          >
            <span className="text-[11px] font-medium text-[#1C1A17]">Oyuncu Seç</span>
          </div>
          <div 
            className="px-4 py-2.5 rounded-xl border text-center flex-1 sm:flex-none"
            style={{ background: "rgba(255, 255, 255, 0.9)", borderColor: "#E8E4DE" }}
          >
            <span className="text-[11px] font-medium text-[#1C1A17]">Senaryo Düzenle</span>
          </div>
          <div 
            className="px-4 py-2.5 rounded-xl border text-center flex-1 sm:flex-none"
            style={{ background: "rgba(255, 255, 255, 0.9)", borderColor: "#E8E4DE" }}
          >
            <span className="text-[11px] font-medium text-[#1C1A17]">Otomatik Altyazı</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================
   Section 03 Visual - Analytics
   ======================================== */
function Section03Visual() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Dashboard Card */}
      <div 
        className="rounded-2xl p-5 border"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderColor: "#E8E4DE",
        }}
      >
        {/* ROAS Chart */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[12px] font-semibold text-[#1C1A17]">ROAS Performansı</span>
            <span className="text-[18px] font-bold text-[#C19F5F]">4.5x</span>
          </div>
          {/* Simple Chart Representation */}
          <div className="h-24 flex items-end gap-1.5">
            <div className="flex-1 rounded-t" style={{ height: "40%", background: "rgba(193, 159, 95, 0.2)" }} />
            <div className="flex-1 rounded-t" style={{ height: "55%", background: "rgba(193, 159, 95, 0.3)" }} />
            <div className="flex-1 rounded-t" style={{ height: "45%", background: "rgba(193, 159, 95, 0.25)" }} />
            <div className="flex-1 rounded-t" style={{ height: "70%", background: "rgba(193, 159, 95, 0.4)" }} />
            <div className="flex-1 rounded-t" style={{ height: "85%", background: "rgba(193, 159, 95, 0.5)" }} />
            <div className="flex-1 rounded-t" style={{ height: "75%", background: "rgba(193, 159, 95, 0.45)" }} />
            <div className="flex-1 rounded-t" style={{ height: "100%", background: "linear-gradient(180deg, #E5A11F, #C19F5F)" }} />
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="flex gap-4 mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <PieChart size={14} className="text-[#C19F5F]" />
              <span className="text-[11px] font-medium text-[#1C1A17]">Trafik Kaynakları</span>
            </div>
            <div className="flex gap-1.5">
              <span className="text-[9px] px-2 py-1 rounded-lg bg-[#F5F3ED] text-[#6B6560]">Meta 52%</span>
              <span className="text-[9px] px-2 py-1 rounded-lg bg-[#F5F3ED] text-[#6B6560]">TikTok 48%</span>
            </div>
          </div>
        </div>

        {/* Integration Logos */}
        <div className="flex items-center justify-center gap-4 pt-3 border-t border-[#E8E4DE]">
          <div className="text-[10px] font-semibold text-[#9B9590] px-3 py-1.5 rounded-lg bg-[#F5F3ED]">Shopify</div>
          <div className="text-[10px] font-semibold text-[#9B9590] px-3 py-1.5 rounded-lg bg-[#F5F3ED]">Meta</div>
          <div className="text-[10px] font-semibold text-[#9B9590] px-3 py-1.5 rounded-lg bg-[#F5F3ED]">TikTok</div>
        </div>
      </div>
    </div>
  );
}

/* ========================================
   Main Page
   ======================================== */
export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const siteLink = "https://adora.app";

  // Content translations
  const content = {
    tr: {
      headline: {
        line1: "Senin Yapay Zeka Reklam Ajansın,",
        line2: "UGC Video Üreticin ve Satış Asistanın.",
        line3: "Tek Bir Uygulamada.",
      },
      emailPlaceholder: "E-posta adresiniz",
      ctaButton: "Erken Erişime Katıl",
      submitting: "Kaydediliyor...",
      privacy: "%100 Gizlilik",
      waitlist: "250+ kişi sıraya girdi",
      successTitle: "Sıradaki Yerin Ayrıldı! 🎉",
      successDesc: "Arkadaşlarınla paylaş, birlikte keşfedin!",
      copy: "Kopyala",
      copied: "Kopyalandı!",
      section01: {
        title: "Sıfır Çaba: Link'ten Videoya.",
        desc: "Sadece linkinizi yapıştırın. Adora, ürününüzü anında analiz edip reklam kurgusuna başlar.",
      },
      section02: {
        title: "Sıfır Maliyet: AI UGC Oyuncusu.",
        desc: "Kamera, ışık, oyuncu aramaya son. Binlerce hazır AI oyuncu arasından markanıza en uygununu seçin, saniyeler içinde viral video üretin.",
      },
      section03: {
        title: "Hemen Satış: Entegrasyon & ROAS.",
        desc: "Uygulamadan ayrılmadan reklamlarınızı yönetin. Hangi videonun daha fazla satış getirdiğini takip edin, ROAS'ı katlayın.",
      },
      footerCta: {
        title: "Geleceğin E-Ticaretine Hazır Mısın?",
        desc: "Erken erişim listesine katıl, lansman günü ilk senin olsun.",
        button: "Katıl",
      },
    },
    en: {
      headline: {
        line1: "Your AI Ad Agency,",
        line2: "UGC Video Creator & Sales Assistant.",
        line3: "All in One App.",
      },
      emailPlaceholder: "Your email address",
      ctaButton: "Join Early Access",
      submitting: "Submitting...",
      privacy: "100% Privacy",
      waitlist: "250+ people joined",
      successTitle: "You're In! 🎉",
      successDesc: "Share with friends and explore together!",
      copy: "Copy",
      copied: "Copied!",
      section01: {
        title: "Zero Effort: Link to Video.",
        desc: "Just paste your link. Adora instantly analyzes your product and starts creating ads.",
      },
      section02: {
        title: "Zero Cost: AI UGC Actors.",
        desc: "No more searching for cameras, lights, or actors. Choose from thousands of AI actors for your brand and create viral videos in seconds.",
      },
      section03: {
        title: "Instant Sales: Integration & ROAS.",
        desc: "Manage your ads without leaving the app. Track which videos drive more sales and multiply your ROAS.",
      },
      footerCta: {
        title: "Ready for the Future of E-Commerce?",
        desc: "Join the early access list and be the first on launch day.",
        button: "Join",
      },
    },
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || loading) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await joinWaitlist(email.trim());
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || "Kayıt sırasında bir hata oluştu.");
      }
    } catch (err) {
      setErrorMsg("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(siteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex-1 relative">
      {/* Background Glow */}
      <div className="warm-glow" style={{ top: "10%", left: "20%" }} aria-hidden="true" />
      <div className="warm-glow" style={{ top: "30%", right: "15%" }} aria-hidden="true" />

      {/* =============================
          HEADER
          ============================= */}
      <header className="w-full pt-6 pb-4 px-4 sm:px-6 flex items-center justify-between relative z-20">
        <div className="flex-1" />
        <a
          href="#"
          className="font-heading text-[20px] sm:text-[22px] tracking-[0.06em] text-[#1C1A17] font-semibold"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Adora
        </a>
        <div className="flex-1 flex justify-end">
          <div className="lang-switch flex items-center gap-1">
            <button 
              onClick={() => setLang("tr")} 
              className={lang === "tr" ? "lang-switch-active" : ""}
            >
              TR
            </button>
            <span>|</span>
            <button 
              onClick={() => setLang("en")} 
              className={lang === "en" ? "lang-switch-active" : ""}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* =============================
          HERO SECTION
          ============================= */}
      <section className="relative flex flex-col items-center pt-8 sm:pt-12 pb-16 px-4 sm:px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut as unknown as [number, number, number, number] }}
            className="font-heading text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.2] tracking-[-0.01em] text-[#1C1A17] max-w-3xl mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {t.headline.line1}
            <br className="hidden sm:block" />
            <span className="block sm:inline"> {t.headline.line2}</span>
            <br className="hidden sm:block" />
            <span className="block">{t.headline.line3}</span>
          </motion.h1>

          {/* iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: easeOut as unknown as [number, number, number, number] }}
            className="w-full max-w-[320px] sm:max-w-[340px] mb-6 sm:mb-10"
          >
            <IPhoneMockup />
          </motion.div>

          {/* Waitlist Form */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: 0.35, ease: easeOut as unknown as [number, number, number, number] }}
                className="w-full max-w-md mx-auto z-20 px-4"
              >
                <form onSubmit={handleSubmit} className="flex flex-col items-stretch gap-4">
                  {/* Email Input */}
                  <div 
                    className="w-full px-6 py-4 bg-white rounded-2xl border"
                    style={{ 
                      borderColor: "#E8E4DE",
                      boxShadow: "0 4px 20px rgba(193, 159, 95, 0.08)"
                    }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      placeholder={t.emailPlaceholder}
                      required
                      className="w-full bg-transparent text-[15px] text-[#1C1A17] placeholder:text-[#9B9590] border-none outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gold px-6 py-4 text-[15px] font-semibold rounded-2xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {loading ? t.submitting : t.ctaButton}
                  </button>
                </form>

                {errorMsg && (
                  <div className="mt-3 text-[#D95550] text-[13px] font-medium text-center">
                    {errorMsg}
                  </div>
                )}

                {/* Social Proof */}
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-5 text-[12px] sm:text-[13px] text-[#9B9590] font-medium">
                  <span className="flex items-center gap-1.5">
                    <Lock size={12} className="text-[#9B9590]" /> {t.privacy}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#30A666]" />
                    {t.waitlist}
                  </span>
                </div>
              </motion.div>
            ) : (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: easeOut as unknown as [number, number, number, number] }}
                className="max-w-md mx-auto text-center"
              >
                <div className="feature-card px-6 sm:px-10 py-8">
                  <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #E5A11F, #C19F5F)" }}>
                    <Check size={24} className="text-white" />
                  </div>
                  <h2 className="font-heading text-[22px] sm:text-[26px] text-[#1C1A17] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    {t.successTitle}
                  </h2>
                  <p className="text-[14px] text-[#6B6560] mb-5">
                    {t.successDesc}
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch gap-2 p-1 rounded-2xl" style={{ background: "#F9F8F3", border: "1px solid #E8E4DE" }}>
                    <input
                      type="text"
                      readOnly
                      value={siteLink}
                      className="flex-1 px-4 py-2.5 bg-transparent text-[13px] text-[#6B6560] rounded-xl border-none outline-none text-center sm:text-left"
                    />
                    <button onClick={handleCopy} className="btn-gold px-5 py-2.5 text-[13px] font-semibold rounded-xl flex items-center justify-center gap-2">
                      {copied ? (<><Check size={14} /> {t.copied}</>) : (<><Copy size={14} /> {t.copy}</>)}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =============================
          SECTION 01 - Link to Video
          ============================= */}
      <AnimatedSection className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <span className="section-number">01</span>
              <h2 className="font-heading text-[26px] sm:text-[32px] md:text-[38px] leading-tight text-[#1C1A17] mt-4 mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
                {t.section01.title}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#6B6560] leading-relaxed max-w-md">
                {t.section01.desc}
              </p>
            </div>
            {/* Visual */}
            <div className="order-1 md:order-2">
              <Section01Visual />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* =============================
          SECTION 02 - AI Actor
          ============================= */}
      <AnimatedSection className="py-20 sm:py-28 px-4 sm:px-6" style={{ background: "rgba(249, 248, 243, 0.5)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Visual */}
            <div>
              <Section02Visual />
            </div>
            {/* Content */}
            <div>
              <span className="section-number">02</span>
              <h2 className="font-heading text-[26px] sm:text-[32px] md:text-[38px] leading-tight text-[#1C1A17] mt-4 mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
                {t.section02.title}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#6B6560] leading-relaxed max-w-md">
                {t.section02.desc}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* =============================
          SECTION 03 - Analytics
          ============================= */}
      <AnimatedSection className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <span className="section-number">03</span>
              <h2 className="font-heading text-[26px] sm:text-[32px] md:text-[38px] leading-tight text-[#1C1A17] mt-4 mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
                {t.section03.title}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#6B6560] leading-relaxed max-w-md">
                {t.section03.desc}
              </p>
            </div>
            {/* Visual */}
            <div className="order-1 md:order-2">
              <Section03Visual />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* =============================
          FOOTER CTA SECTION
          ============================= */}
      <AnimatedSection className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-[28px] sm:text-[36px] md:text-[42px] leading-tight text-[#1C1A17] mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
            {t.footerCta.title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#6B6560] mb-8 max-w-md mx-auto">
            {t.footerCta.desc}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col items-stretch gap-4 max-w-md mx-auto">
              {/* Email Input */}
              <div 
                className="w-full px-6 py-4 bg-white rounded-2xl border"
                style={{ 
                  borderColor: "#E8E4DE",
                  boxShadow: "0 4px 20px rgba(193, 159, 95, 0.08)"
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                  className="w-full bg-transparent text-[15px] text-[#1C1A17] placeholder:text-[#9B9590] border-none outline-none"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full btn-gold px-6 py-4 text-[15px] font-semibold rounded-2xl flex items-center justify-center gap-2">
                {t.footerCta.button} <ArrowRight size={14} />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-[15px] text-[#C19F5F] font-medium">
              <Check size={18} /> {t.successTitle.replace(" 🎉", "")}
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* =============================
          FOOTER
          ============================= */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-[#E8E4DE]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading text-[15px] text-[#1C1A17]" style={{ fontFamily: "var(--font-playfair)" }}>
            Adora
          </span>
          <p className="text-[12px] text-[#9B9590] order-3 sm:order-2">
            © {new Date().getFullYear()} Adora. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 order-2 sm:order-3">
            <a href="#" className="text-[12px] text-[#6B6560] hover:text-[#1C1A17] transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-[12px] text-[#6B6560] hover:text-[#1C1A17] transition-colors">
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
