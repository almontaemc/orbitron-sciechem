"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    headline: "East Africa's Premier Chemical & Lab Solutions",
    sub: "1,000+ products. 500+ clients. One trusted supplier.",
    image: "https://images.pexels.com/photos/8544944/pexels-photo-8544944.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Request a Quote", href: "/contact#quote" },
    cta2: { label: "View Products",   href: "/products" },
  },
  {
    id: 2,
    headline: "Precision Lab Equipment & Analytical Reagents",
    sub: "Complete laboratory solutions — from instruments to consumables.",
    image: "https://images.pexels.com/photos/9243566/pexels-photo-9243566.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Browse Lab Equipment", href: "/products#laboratory" },
    cta2: { label: "Talk to a Specialist",  href: "/contact" },
  },
  {
    id: 3,
    headline: "GMP-Certified Pharmaceutical Raw Materials",
    sub: "USP/BP grade with full CoA, SDS and regulatory documentation.",
    image: "https://images.pexels.com/photos/8392825/pexels-photo-8392825.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Pharma Products",        href: "/products#pharma" },
    cta2: { label: "Request Documentation",  href: "/contact" },
  },
  {
    id: 4,
    headline: "Food-Grade Ingredients That Meet Every Standard",
    sub: "KEBS, ISO and HACCP compliant for food & beverage production.",
    image: "https://images.pexels.com/photos/9243549/pexels-photo-9243549.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Food Chemicals", href: "/products#food" },
    cta2: { label: "Get a Quote",    href: "/contact#quote" },
  },
  {
    id: 5,
    headline: "Powering Industries Across East Africa",
    sub: "Kenya · Uganda · Tanzania · Rwanda · Ethiopia · South Sudan.",
    image: "https://images.pexels.com/photos/10386893/pexels-photo-10386893.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta1: { label: "Our Industries",  href: "/industries" },
    cta2: { label: "About Orbitron",  href: "/about" },
  },
];

const INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused,  setPaused]  = useState(false);
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
    progRef.current = setInterval(() => setProgress((p) => Math.min(p + step, 100)), 50);
    return () => { if (progRef.current) clearInterval(progRef.current); };
  }, [current, paused]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-navy-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/65" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div key={animKey} className="max-w-3xl animate-fade-in-up">

            <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-5">
              {slide.headline}
            </h1>

            <p className="text-white/60 text-xl mb-10">
              {slide.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={slide.cta1.href}
                className="inline-flex items-center justify-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                {slide.cta1.label} <ArrowRight size={15} />
              </Link>
              <Link
                href={slide.cta2.href}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-heading font-semibold text-sm px-7 py-3.5 rounded-full transition-all"
              >
                {slide.cta2.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="relative z-10 pb-10">
        {/* Progress bar */}
        <div className="h-px bg-white/10 mb-8">
          <div
            className="h-full bg-acc-500"
            style={{ width: `${progress}%`, transition: paused ? "none" : "width 50ms linear" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-7 h-2 bg-acc-500" : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev_}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
