"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    badge: "Industrial Chemicals",
    badgeColor: "bg-orange-500/20 border-orange-500/40 text-orange-300",
    dot: "bg-orange-500",
    headline: ["Africa's Premier", "Chemical &", "Lab Solutions Hub"],
    accentLine: 1,
    accentColor: "text-acc-400",
    subtext:
      "1,000+ products. 500+ clients. One reliable supplier trusted across Kenya, Uganda, Tanzania, Rwanda, Ethiopia & South Sudan.",
    image:
      "https://images.pexels.com/photos/8544944/pexels-photo-8544944.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Request a Quote", href: "/contact#quote" },
    cta2: { label: "View Products", href: "/products" },
    pills: ["KEBS Compliant", "ISO Certified", "GMP Standards", "HACCP"],
  },
  {
    id: 2,
    badge: "Laboratory Solutions",
    badgeColor: "bg-blue-500/20 border-blue-500/40 text-blue-300",
    dot: "bg-blue-500",
    headline: ["Precision Lab", "Equipment &", "Analytical Reagents"],
    accentLine: 2,
    accentColor: "text-blue-300",
    subtext:
      "UV-VIS spectrophotometers, HPLC & GC systems, AR-grade reagents, water testing kits — complete laboratory solutions for East Africa.",
    image:
      "https://images.pexels.com/photos/9243566/pexels-photo-9243566.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Browse Lab Equipment", href: "/products#laboratory" },
    cta2: { label: "Talk to a Specialist", href: "/contact" },
    pills: ["Full After-Sales Support", "Calibration Services", "50+ Brands"],
  },
  {
    id: 3,
    badge: "Pharma Grade",
    badgeColor: "bg-violet-500/20 border-violet-500/40 text-violet-300",
    dot: "bg-violet-500",
    headline: ["GMP-Certified", "Pharmaceutical", "Raw Materials"],
    accentLine: 0,
    accentColor: "text-violet-300",
    subtext:
      "APIs, excipients, USP/BP grade glycerin, sorbitol, ethanol and propylene glycol — with full CoA, SDS and regulatory documentation.",
    image:
      "https://images.pexels.com/photos/8392825/pexels-photo-8392825.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Pharma Products", href: "/products#pharma" },
    cta2: { label: "Request Documentation", href: "/contact" },
    pills: ["USP / BP / EP Grade", "Full CoA Provided", "GMP Compliant"],
  },
  {
    id: 4,
    badge: "Food Grade",
    badgeColor: "bg-emerald-500/20 border-emerald-500/40 text-emerald-300",
    dot: "bg-emerald-500",
    headline: ["Food-Grade", "Ingredients That", "Meet Every Standard"],
    accentLine: 2,
    accentColor: "text-emerald-300",
    subtext:
      "Citric acid, preservatives, emulsifiers, enzymes, fortification blends — all KEBS, ISO and HACCP compliant for food & beverage production.",
    image:
      "https://images.pexels.com/photos/9243549/pexels-photo-9243549.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Food Chemicals", href: "/products#food" },
    cta2: { label: "Get a Quote", href: "/contact#quote" },
    pills: ["HACCP Compliant", "Food Grade E-Numbers", "Halal / Kosher Available"],
  },
  {
    id: 5,
    badge: "East Africa's #1",
    badgeColor: "bg-acc-500/20 border-acc-500/40 text-acc-300",
    dot: "bg-acc-500",
    headline: ["Powering East", "Africa's Industries", "Since Day One"],
    accentLine: 1,
    accentColor: "text-acc-400",
    subtext:
      "Kenya · Uganda · Tanzania · Rwanda · Ethiopia · South Sudan. Reliable supply, technical expertise, and dedicated after-sales support.",
    image:
      "https://images.pexels.com/photos/10386893/pexels-photo-10386893.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Our Industries", href: "/industries" },
    cta2: { label: "About Orbitron", href: "/about" },
    pills: ["6 Countries", "500+ Active Clients", "24/7 Support"],
  },
];

const PARTICLES = [
  "H₂O","NaOH","HCl","H₂SO₄","NaCl","NH₃","KNO₃","C₆H₁₂O₆",
  "Fe₂O₃","NaHCO₃","HNO₃","CaCO₃","Mg(OH)₂","K₂SO₄","C₂H₅OH",
];

const INTERVAL = 5500; // ms per slide

export default function HeroSlider() {
  const [current, setCurrent]   = useState(0);
  const [prev, setPrev]         = useState<number | null>(null);
  const [animKey, setAnimKey]   = useState(0);
  const [paused, setPaused]     = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setPrev(current);
    setCurrent(idx);
    setAnimKey((k) => k + 1);
    setProgress(0);
  }, [current]);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev_ = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  // Progress bar
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = 100 / (INTERVAL / 50);
    progRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    return () => { if (progRef.current) clearInterval(progRef.current); };
  }, [current, paused]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-navy-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background images (cross-fade) ── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <Image
            src={s.image}
            alt={s.badge}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-950/70 to-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/20" />
        </div>
      ))}

      {/* ── Floating chemical formula particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[1]" aria-hidden>
        {PARTICLES.map((p, i) => (
          <span
            key={p}
            className="absolute font-mono font-bold text-blue-300/25 animate-float-up"
            style={{
              left: `${5 + i * 6.25}%`,
              bottom: `${5 + (i % 5) * 9}%`,
              fontSize: `${10 + (i % 4) * 3}px`,
              animationDelay: `${i * 0.18}s`,
              animationDuration: `${2.4 + (i % 4) * 0.4}s`,
            }}
          >
            {p}
          </span>
        ))}
      </div>

      {/* ── Slide content ── */}
      <div className="relative z-[2] flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-32">
          <div className="max-w-2xl">

            {/* Badge */}
            <div
              key={`badge-${animKey}`}
              className="inline-flex items-center gap-2 border text-xs font-heading font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${slide.dot}`} />
              <span className={slide.badgeColor.split(" ")[2]}>{slide.badge}</span>
            </div>

            {/* Headline — 3 lines, accent on one */}
            <h1
              key={`h1-${animKey}`}
              className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: "80ms" }}
            >
              {slide.headline.map((line, i) => (
                <span key={i} className={`block ${i === slide.accentLine ? slide.accentColor : ""}`}>
                  {line}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p
              key={`sub-${animKey}`}
              className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              {slide.subtext}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${animKey}`}
              className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href={slide.cta1.href}
                className="inline-flex items-center justify-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-acc-500/30 hover:scale-105"
              >
                {slide.cta1.label} <ArrowRight size={15} />
              </Link>
              <Link
                href={slide.cta2.href}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-heading font-semibold text-sm px-7 py-3.5 rounded-full transition-all backdrop-blur-sm"
              >
                {slide.cta2.label}
              </Link>
            </div>

            {/* Pills */}
            <div
              key={`pills-${animKey}`}
              className="flex flex-wrap items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: "320ms" }}
            >
              {slide.pills.map((pill) => (
                <span key={pill} className="flex items-center gap-1.5 text-xs text-white/50 font-heading font-semibold tracking-wide">
                  <CheckCircle2 size={12} className="text-acc-500" />
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide counter top-right ── */}
      <div className="absolute top-8 right-8 z-[3] text-white/30 font-heading font-bold text-sm tracking-widest hidden lg:block">
        {String(current + 1).padStart(2, "0")} <span className="text-white/15">/</span> {String(SLIDES.length).padStart(2, "0")}
      </div>

      {/* ── Bottom controls ── */}
      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 flex items-end justify-between gap-6">

        {/* Dot nav + progress */}
        <div className="flex items-center gap-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
              style={{ width: i === current ? 40 : 20, background: "rgba(255,255,255,0.2)" }}
            >
              {i === current && (
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-acc-500"
                  style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev_}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
