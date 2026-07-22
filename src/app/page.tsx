"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  Copy,
  Check,
  Lock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import IPhoneMockup from "./components/IPhoneMockup";
import { joinWaitlist } from "./actions";

/* ========================================
   Animation Variants
   ======================================== */
const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: easeOut as unknown as [number, number, number, number],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: easeOut as unknown as [number, number, number, number],
    },
  }),
};

/* ========================================
   Animated Section Wrapper
   ======================================== */
function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ========================================
   Feature Data
   ======================================== */
const features = [
  {
    emoji: "🔮",
    title: "Derin Fal Baktırma",
    desc: "Kahve, tarot ve el falının yapay zeka ile anlık, kişiye özel analizi.",
  },
  {
    emoji: "🗺️",
    title: "Detaylı Doğum Haritası",
    desc: "Gezegen konumlarının ve açılarının hayatına etkileri.",
  },
  {
    emoji: "💸",
    title: "Finansal Astroloji Takvimi",
    desc: "Yatırım ve kariyer kararların için en doğru kozmik zamanlama.",
  },
  {
    emoji: "📊",
    title: "Günlük Astro-Metrikler",
    desc: "Enerjini, odaklanmanı ve ruh halini yıldızlara göre yönet.",
  },
  {
    emoji: "👑",
    title: "Sinastri & Uyum Analizi",
    desc: "Partnerin veya ortaklarınla olan bağının derin analizi.",
  },
];

const steps = [
  {
    number: "01",
    title: "Doğum Bilgilerini Gir",
    desc: "Doğum tarihi, saati ve konumunu tanımla.",
  },
  {
    number: "02",
    title: "Yapay Zeka Analizi",
    desc: "Algoritma haritanı anlık gökyüzü hareketleriyle eşleştirsin.",
  },
  {
    number: "03",
    title: "Rehberini Takip Et",
    desc: "Günlük finans, ilişki ve kişisel tavsiyelerini cebinden yönet.",
  },
];

const faqs = [
  {
    q: "Erken erişim ne zaman başlayacak?",
    a: "Çok yakında! Kayıt olan ilk kullanıcılara öncelikli davetiye gönderilecektir.",
  },
  {
    q: "Bilgilerim güvende tutuluyor mu?",
    a: "Tüm doğum haritaları ve analizler tamamen kişisel ve gizli tutulur. Verileriniz üçüncü taraflarla asla paylaşılmaz.",
  },
];

/* ========================================
   FAQ Accordion Item
   ======================================== */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border border-[#E8E4DE] rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: open ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-white/40 transition-colors"
      >
        <span className="text-[15px] sm:text-[16px] font-medium text-[#2C2825] pr-4">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <ChevronDown size={20} className="text-[#9B9590] flex-shrink-0" />
        </motion.div>
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <div className="accordion-inner">
          <div className="px-6 pb-5 text-[14px] sm:text-[15px] text-[#6B6560] leading-relaxed">
            {a}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ========================================
   Main Page Component
   ======================================== */
export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [origin, setOrigin] = useState("https://kozmiKDivan.app");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const referralLink = `${origin}/ref/KD7X92`;

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
      setErrorMsg("Bir hata oluştu, lütfen internet bağlantınızı kontrol edip tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Kozmik Divan'ı keşfet! Yapay zeka destekli kozmik asistan 🌟 ${referralLink}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <main className="flex-1 luxury-drapery">
      {/* ==============================
          HEADER
          ============================== */}
      <header className="w-full pt-10 pb-6 flex items-center justify-center z-20 relative">
        <a
          href="#"
          className="font-heading text-[22px] sm:text-[24px] tracking-[0.04em] text-[#2C2825] font-playfair font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Kozmik Divan
        </a>
      </header>

      {/* ==============================
          HERO SECTION
          ============================== */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-start pt-6 pb-20 px-4 sm:px-6 overflow-hidden"
      >
        {/* Background ambient glows */}
        <div
          className="hero-glow hero-glow-gold"
          style={{ top: "5%", left: "15%" }}
        />
        <div
          className="hero-glow hero-glow-rose"
          style={{ top: "15%", right: "10%" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[32px] sm:text-[44px] md:text-[54px] lg:text-[58px] leading-[1.14] tracking-[-0.01em] text-[#2C2825] max-w-4xl mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Senin Kozmik Rehberin, Finans Takvimin,
            <br className="hidden sm:block" /> Falcın ve Uyum Analizin. Tek Bir Uygulamada.
          </motion.h1>

          {/* iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[550px] mb-2"
          >
            <IPhoneMockup />
          </motion.div>

          {/* Waitlist Form / Success State - Overlapping the mockup */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full max-w-xl mx-auto z-20 -mt-16 sm:-mt-20 relative px-4"
              >
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 p-1 rounded-full bg-white border-[5px] border-white form-glow-container"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    placeholder="E-posta adresiniz"
                    required
                    className="flex-1 px-6 py-4 bg-transparent text-[14px] sm:text-[15px] text-[#2C2825] placeholder:text-[#9B9590] rounded-full border-none outline-none disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-champagne px-8 py-4 text-[14px] sm:text-[15px] font-semibold rounded-full whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {loading ? "Kaydediliyor..." : "Erken Erişime Katıl"}
                  </button>
                </form>

                {errorMsg && (
                  <div className="mt-3 text-[#E05252] text-[13px] font-semibold text-center">
                    {errorMsg}
                  </div>
                )}

                {/* Micro text */}
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-4 text-[12px] sm:text-[13px] text-[#9B9590] font-medium">
                  <span className="flex items-center gap-1">
                    <Lock size={12} className="text-[#9B9590]" /> %100 Gizlilik
                  </span>
                  <span>•</span>
                  <span>Spamsız Kozmic Güncellemeler</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#30A666] inline-block shadow-sm" />
                    250+ kişi sıraya girdi
                  </span>
                </div>
              </motion.div>
            ) : (
              /* ==============================
                 SUCCESS STATE
                 ============================== */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-lg mx-auto text-center"
              >
                <div
                  className="glass-card px-6 sm:px-10 py-8 sm:py-10"
                  style={{ boxShadow: "var(--shadow-elevated)" }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 12,
                      delay: 0.2,
                    }}
                    className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4AF37 0%, #E8D48B 100%)",
                    }}
                  >
                    <Check size={28} className="text-white" />
                  </motion.div>

                  <h2
                    className="font-heading text-[24px] sm:text-[28px] text-[#2C2825] mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Sıradaki Yerin Ayrıldı! 🎉
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-[#6B6560] mb-6 leading-relaxed">
                    Arkadaşlarını davet et, lansman günü öncelikli erişim hakkı
                    kazan.
                  </p>

                  {/* Referral Box */}
                  <div
                    className="flex flex-col sm:flex-row items-stretch gap-2 p-1.5 rounded-2xl sm:rounded-full mb-4"
                    style={{
                      background: "rgba(250, 249, 245, 0.8)",
                      border: "1px solid #E8E4DE",
                    }}
                  >
                    <input
                      type="text"
                      readOnly
                      value={referralLink}
                      className="flex-1 px-4 py-3 bg-transparent text-[13px] text-[#6B6560] rounded-xl sm:rounded-full border-none outline-none text-center sm:text-left"
                    />
                    <button
                      onClick={handleCopy}
                      className="btn-champagne px-5 py-3 text-[13px] font-semibold rounded-xl sm:rounded-full flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <>
                          <Check size={14} /> Kopyalandı!
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Kopyala
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-[13px] font-medium text-[#2C2825] flex items-center justify-center gap-2 mx-auto cursor-pointer transition-all duration-300 hover:bg-[#E8E4DE]"
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                      border: "1px solid #E8E4DE",
                    }}
                  >
                    <MessageCircle size={16} className="text-green-600" />
                    WhatsApp ile Paylaş
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ==============================
          FEATURES SECTION
          ============================== */}
      <AnimatedSection
        id="features"
        className="py-20 sm:py-28 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-14 sm:mb-16"
          >
            <div className="section-divider mx-auto mb-6" />
            <h2
              className="font-heading text-[28px] sm:text-[36px] md:text-[42px] leading-tight tracking-[-0.02em] text-[#2C2825] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hayatının Her Alanında Kozmik Rehberlik
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6B6560] max-w-lg mx-auto">
              Tek bir uygulamada, yapay zeka destekli kozmik rehberlik.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i * 0.05}
                className="glass-card p-6 sm:p-8 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(255,255,255,0.55))",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-[22px] transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, #FDFCF9, #F5F0E8)",
                    border: "1px solid #F0ECE6",
                  }}
                >
                  {feature.emoji}
                </div>
                <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#2C2825] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#6B6560] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==============================
          HOW IT WORKS SECTION
          ============================== */}
      <AnimatedSection
        id="how-it-works"
        className="py-20 sm:py-28 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-14 sm:mb-16"
          >
            <div className="section-divider mx-auto mb-6" />
            <h2
              className="font-heading text-[28px] sm:text-[36px] md:text-[42px] leading-tight tracking-[-0.02em] text-[#2C2825]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Nasıl Çalışır?
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i * 0.1}
                className="flex items-start gap-5 sm:gap-8 group"
              >
                {/* Step Number */}
                <div
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03))",
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <span
                    className="text-[18px] sm:text-[20px] font-semibold tracking-wide"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#D4AF37",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="pt-1.5 sm:pt-2.5">
                  <h3 className="text-[17px] sm:text-[19px] font-semibold text-[#2C2825] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#6B6560] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==============================
          FAQ SECTION
          ============================== */}
      <AnimatedSection id="faq" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="section-divider mx-auto mb-6" />
            <h2
              className="font-heading text-[28px] sm:text-[36px] md:text-[42px] leading-tight tracking-[-0.02em] text-[#2C2825]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==============================
          CTA SECTION (Before Footer)
          ============================== */}
      <AnimatedSection
        id="cta"
        className="py-16 sm:py-24 px-4 sm:px-6"
      >
        <motion.div
          variants={scaleIn}
          className="max-w-2xl mx-auto text-center glass-card px-6 sm:px-12 py-10 sm:py-14 relative overflow-hidden"
        >
          {/* Subtle gold accent */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
          />

          <h2
            className="font-heading text-[24px] sm:text-[32px] leading-tight text-[#2C2825] mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kozmik Yolculuğun Başlasın
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#6B6560] mb-8 max-w-md mx-auto">
            Erken erişim listesine katıl, lansman günü ilk senin olsun.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 p-1.5 rounded-2xl sm:rounded-full max-w-md mx-auto"
              style={{
                background: "rgba(250, 249, 245, 0.8)",
                border: "1px solid #E8E4DE",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                required
                className="flex-1 px-5 py-3 bg-transparent text-[14px] text-[#2C2825] placeholder:text-[#9B9590] rounded-xl sm:rounded-full border-none outline-none"
              />
              <button
                type="submit"
                className="btn-champagne px-6 py-3 text-[14px] font-semibold rounded-xl sm:rounded-full flex items-center justify-center gap-2"
              >
                Katıl
                <ArrowRight size={14} />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-[15px] text-[#D4AF37] font-medium">
              <Check size={18} /> Sıradaki yerin ayrıldı!
            </div>
          )}
        </motion.div>
      </AnimatedSection>

      {/* ==============================
          FOOTER
          ============================== */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-[#E8E4DE]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="font-heading text-[16px] text-[#2C2825]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Kozmik Divan
            </span>
          </div>

          <p className="text-[13px] text-[#9B9590] order-3 sm:order-2">
            © {new Date().getFullYear()} Kozmik Divan. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-6 order-2 sm:order-3">
            <a
              href="#"
              className="text-[13px] text-[#6B6560] hover:text-[#2C2825] transition-colors"
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              className="text-[13px] text-[#6B6560] hover:text-[#2C2825] transition-colors"
            >
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
