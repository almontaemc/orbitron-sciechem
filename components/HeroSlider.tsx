"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ArrowDown, Shield, Award } from "lucide-react";
import { DIVISIONS } from "@/lib/data";
import Icon from "@/components/Icon";

const SLIDES = [
  {
    id: 1,
    badge: "Industrial Chemicals",
    badgeColor: "from-orange-500/30 to-orange-500/10 border-orange-500/30 text-orange-300",
    dot: "bg-orange-500",
    headline: "Africa's Premier",
    accentWord: "Chemical & Lab",
    tailWord: "Solutions Hub",
    accentColor: "text-acc-400",
    subtext:
      "1,000+ products. 500+ clients. One reliable supplier trusted across Kenya, Uganda, Tanzania, Rwanda, Ethiopia & South Sudan.",
    image:
      "https://images.pexels.com/photos/8544944/pexels-photo-8544944.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Request a Quote", href: "/contact#quote" },
    cta2: { label: "View Products", href: "/products" },
  },
  {
    id: 2,
    badge: "Laboratory Solutions",
    badgeColor: "from-blue-500/30 to-blue-500/10 border-blue-500/30 text-blue-300",
    dot: "bg-blue-500",
    headline: "Precision Lab",
    accentWord: "Equipment &",
    tailWord: "Analytical Reagents",
    accentColor: "text-blue-300",
    subtext:
      "UV-VIS spectrophotometers, HPLC & GC systems, AR-grade reagents, water testing kits — complete laboratory solutions for East Africa.",
    image:
      "https://images.pexels.com/photos/9243566/pexels-photo-9243566.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Browse Lab Equipment", href: "/products#laboratory" },
    cta2: { label: "Talk to a Specialist", href: "/contact" },
  },
  {
    id: 3,
    badge: "Pharma Grade",
    badgeColor: "from-violet-500/30 to-violet-500/10 border-violet-500/30 text-violet-300",
    dot: "bg-violet-500",
    headline: "GMP-Certified",
    accentWord: "Pharmaceutical",
    tailWord: "Raw Materials",
    accentColor: "text-violet-300",
    subtext:
      "APIs, excipients, USP/BP grade glycerin, sorbitol, ethanol and propylene glycol — with full CoA, SDS and regulatory documentation.",
    image:
      "https://images.pexels.com/photos/8392825/pexels-photo-8392825.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Pharma Products", href: "/products#pharma" },
    cta2: { label: "Request Documentation", href: "/contact" },
  },
  {
    id: 4,
    badge: "Food Grade",
    badgeColor: "from-emerald-500/30 to-emerald-500/10 border-emerald-500/30 text-emerald-300",
    dot: "bg-emerald-500",
    headline: "Food-Grade",
    accentWord: "Ingredients That",
    tailWord: "Meet Every Standard",
    accentColor: "text-emerald-300",
    subtext:
      "Citric acid, preservatives, emulsifiers, enzymes, fortification blends — all KEBS, ISO and HACCP compliant for food & beverage production.",
    image:
      "https://images.pexels.com/photos/9243549/pexels-photo-9243549.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Food Chemicals", href: "/products#food" },
    cta2: { label: "Get a Quote", href: "/contact#quote" },
  },
  {
    id: 5,
    badge: "East Africa's #1",
    badgeColor: "from-acc-500/30 to-acc-500/10 border-acc-500/30 text-acc-300",
    dot: "bg-acc-500",
    headline: "Powering East",
    accentWord: "Africa's Industries",
    tailWord: "Since Day One",
    accentColor: "text-acc-400",
    subtext:
      "Kenya · Uganda · Tanzania · Rwanda · Ethiopia · South Sudan. Reliable supply, technical expertise, and dedicated after-sales support.",
    image:
      "https://images.pexels.com/photos/10386893/pexels-photo-10386893.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Our Industries", href: "/industries" },
    cta2: { label: "About Orbitron", href: "/about" },
  },
];

const CERTS = [
  "KEBS COMPLIANT",
  "ISO CERTIFIED",
  "GMP STANDARDS",
  "HACCP APPROVED",
  "AUTHORIZED DISTRIBUTOR",
  "HALAL / KOSHER AVAILABLE",
  "FULL COA PROVIDED",
];

const INTERVAL = 5500;

export default function HeroSlider() {
  const [current, setCurrent]   = useState(0);
  const [animKey, setAnimKey]   = useState(0);
  const [paused, setPaused]     = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setAnimKey((k) => k + 1);
    setProgress(0);
  }, []);

  const next  = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev_ = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

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
      {/* ── Background images ── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out"
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
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />
        </div>
      ))}

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Floating chemical formulas ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[1]" aria-hidden>
        {["H₂O","NaOH","HCl","H₂SO₄","NH₃","KNO₃","C₆H₁₂O₆","Fe₂O₃","NaHCO₃","HNO₃","CaCO₃","C₂H₅OH"].map((p, i) => (
          <span
            key={p}
            className="absolute font-mono font-bold text-blue-300/15 animate-float-up"
            style={{
              left: `${4 + i * 8}%`,
              bottom: `${8 + (i % 4) * 10}%`,
              fontSize: `${9 + (i % 3) * 3}px`,
              animationDelay: `${i * 0.22}s`,
              animationDuration: `${2.6 + (i % 4) * 0.5}s`,
            }}
          >
            {p}
          </span>
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute top-28 right-8 z-[3] hidden lg:flex items-center gap-2">
        <span className="font-heading font-black text-white text-xl tabular-nums">
          {String(current + 1).padStart(2, "0")}
        </span>
        <div className="w-8 h-px bg-white/20" />
        <span className="font-heading font-bold text-white/30 text-sm tabular-nums">
          {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-[2] flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12 lg:py-0">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 xl:gap-16 items-center min-h-[calc(100vh-120px)]">

            {/* ── LEFT: Text content ── */}
            <div className="flex flex-col justify-center">

              {/* Badge */}
              <div
                key={`badge-${animKey}`}
                className={`inline-flex items-center gap-2.5 bg-gradient-to-r ${slide.badgeColor} border text-xs font-heading font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-7 w-fit animate-fade-in-up`}
                style={{ animationDelay: "0ms" }}
              >
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${slide.dot}`} />
                {slide.badge}
              </div>

              {/* Headline */}
              <h1
                key={`h1-${animKey}`}
                className="font-heading font-black text-white text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
                style={{ animationDelay: "70ms" }}
              >
                <span className="block">{slide.headline}</span>
                <span className={`block ${slide.accentColor}`}>{slide.accentWord}</span>
                <span className="block">{slide.tailWord}</span>
              </h1>

              {/* Subtext */}
              <p
                key={`sub-${animKey}`}
                className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up"
                style={{ animationDelay: "140ms" }}
              >
                {slide.subtext}
              </p>

              {/* CTAs */}
              <div
                key={`cta-${animKey}`}
                className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up"
                style={{ animationDelay: "210ms" }}
              >
                <Link
                  href={slide.cta1.href}
                  className="inline-flex items-center justify-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-acc-500/40 hover:scale-105 active:scale-95"
                >
                  {slide.cta1.label} <ArrowRight size={15} />
                </Link>
                <Link
                  href={slide.cta2.href}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-heading font-semibold text-sm px-7 py-3.5 rounded-full transition-all backdrop-blur-sm hover:border-white/40"
                >
                  {slide.cta2.label}
                </Link>
              </div>

              {/* Certification badges */}
              <div
                key={`certs-${animKey}`}
                className="flex flex-wrap items-center gap-2 animate-fade-in-up"
                style={{ animationDelay: "280ms" }}
              >
                {[
                  { icon: Shield, label: "KEBS Compliant" },
                  { icon: Award, label: "ISO Certified" },
                  { icon: Shield, label: "GMP Standards" },
                  { icon: Award, label: "HACCP Approved" },
                ].map(({ icon: Ic, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 bg-white/[0.07] border border-white/10 text-white/55 text-xs font-heading font-semibold px-3 py-1.5 rounded-full"
                  >
                    <Ic size={10} className="text-acc-400 shrink-0" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Divisions panel + stats ── */}
            <div
              key={`panel-${animKey}`}
              className="hidden lg:flex flex-col gap-3 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              {/* Divisions card */}
              <div className="bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <p className="text-white/35 text-[0.65rem] font-heading font-bold tracking-widest uppercase mb-3.5">
                  Our Six Divisions
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {DIVISIONS.map((div) => (
                    <Link
                      key={div.id}
                      href={`/products#${div.id}`}
                      className="flex items-center gap-2.5 bg-white/[0.04] hover:bg-white/10 border border-white/[0.06] hover:border-white/20 rounded-xl p-3 transition-all group"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${div.color} flex items-center justify-center shrink-0`}>
                        <Icon name={div.icon} size={14} className="text-white" />
                      </div>
                      <span className="text-white/60 group-hover:text-white text-[0.7rem] font-heading font-bold leading-tight transition-colors">
                        {div.title}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.07]">
                  <Link
                    href="/products"
                    className="flex items-center justify-center gap-1.5 text-acc-400 hover:text-acc-300 text-xs font-heading font-bold transition-colors"
                  >
                    View All 1,000+ Products <ArrowRight size={11} />
                  </Link>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { val: "1,000+", label: "Products" },
                  { val: "500+",   label: "Clients"  },
                  { val: "6",      label: "Countries" },
                  { val: "24/7",   label: "Support"  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-3 text-center"
                  >
                    <p className="font-heading font-black text-acc-400 text-lg leading-none mb-1">{s.val}</p>
                    <p className="text-white/35 text-[0.6rem] font-heading font-semibold uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Slide thumbnails */}
              <div className="flex gap-2">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`relative flex-1 h-14 rounded-xl overflow-hidden border transition-all ${
                      i === current ? "border-acc-500 opacity-100" : "border-white/10 opacity-40 hover:opacity-70"
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.badge}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    {i === current && (
                      <div className="absolute inset-0 bg-acc-500/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-24 z-[3] hidden lg:flex flex-col items-center gap-1.5 text-white/25 hover:text-white/50 transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
        <span className="text-[0.6rem] font-heading font-bold tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>

      {/* ── Full-width progress bar ── */}
      <div className="relative z-[3] h-0.5 bg-white/10">
        <div
          className="h-full bg-acc-500 transition-none"
          style={{ width: `${progress}%`, transition: paused ? "none" : "width 50ms linear" }}
        />
      </div>

      {/* ── Bottom control bar ── */}
      <div className="relative z-[3] bg-navy-950/80 backdrop-blur-sm border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-6">

            {/* Dot nav */}
            <div className="flex items-center gap-2 shrink-0">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-7 h-2 bg-acc-500"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Scrolling cert marquee */}
            <div className="hidden md:flex flex-1 overflow-hidden relative">
              <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
                {[...CERTS, ...CERTS].map((c, i) => (
                  <span key={i} className="text-[0.6rem] font-heading font-bold text-white/25 tracking-widest">
                    · {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={prev_}
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft size={15} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
