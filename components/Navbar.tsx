"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { NAV_PRODUCTS, NAV_INDUSTRIES, NAV_SOLUTIONS } from "@/lib/data";

type DropdownKey = "products" | "industries" | "solutions" | null;

export default function Navbar() {
  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const toggle = (key: DropdownKey) => setOpen((prev) => (prev === key ? null : key));

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between bg-navy-950 text-white/80 text-xs px-6 lg:px-10 py-2">
        <span className="tracking-wide font-medium">East Africa&apos;s #1 Chemical Solutions Provider · Delivering Excellence Worldwide</span>
        <div className="flex items-center gap-6">
          <a href="tel:+254742651823" className="flex items-center gap-1.5 hover:text-acc-400 transition-colors">
            <Phone size={11} /> +254 742 651 823
          </a>
          <a href="mailto:info@orbitronsciechem.com" className="flex items-center gap-1.5 hover:text-acc-400 transition-colors">
            <Mail size={11} /> info@orbitronsciechem.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        ref={ref}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy-900/98 shadow-lg backdrop-blur-sm" : "bg-navy-900"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => { setOpen(null); setMobile(false); }}>
            <Image src="/logo.png" alt="Orbitron Sciechem" width={60} height={60} className="object-contain drop-shadow" priority />
            <div className="leading-none">
              <span className="block font-heading font-black text-[1.05rem] tracking-widest text-white">ORBITRON</span>
              <span className="block font-heading font-semibold text-[0.6rem] tracking-[0.22em] text-acc-400">SCIECHEM LIMITED</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {/* Products */}
            <li className="relative">
              <button
                onClick={() => toggle("products")}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold font-heading text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Products <ChevronDown size={13} className={`transition-transform ${open === "products" ? "rotate-180" : ""}`} />
              </button>
              {open === "products" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  {NAV_PRODUCTS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(null)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-900 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Industries */}
            <li className="relative">
              <button
                onClick={() => toggle("industries")}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold font-heading text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Industries <ChevronDown size={13} className={`transition-transform ${open === "industries" ? "rotate-180" : ""}`} />
              </button>
              {open === "industries" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  {NAV_INDUSTRIES.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(null)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-900 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Solutions */}
            <li className="relative">
              <button
                onClick={() => toggle("solutions")}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold font-heading text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Solutions <ChevronDown size={13} className={`transition-transform ${open === "solutions" ? "rotate-180" : ""}`} />
              </button>
              {open === "solutions" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  <Link
                    href="/solutions"
                    onClick={() => setOpen(null)}
                    className="block px-4 py-2.5 text-sm font-heading font-bold text-navy-900 hover:bg-navy-900 hover:text-white transition-colors border-b border-gray-100 mb-1"
                  >
                    All Solutions →
                  </Link>
                  {NAV_SOLUTIONS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(null)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-900 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold font-heading text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                About <ChevronDown size={14} className="opacity-60 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-52 bg-navy-800 border border-white/10 rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/about" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                  About Orbitron
                </Link>
                <Link href="/infrastructure" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                  Infrastructure
                </Link>
              </div>
            </li>
            <li>
              <Link href="/contact" className="px-3 py-2 text-sm font-semibold font-heading text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact#quote"
              className="hidden md:inline-flex items-center bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-5 py-2.5 rounded-full transition-colors shadow-md"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobile((v) => !v)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobile ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobile && (
          <div className="lg:hidden bg-navy-950 border-t border-white/10 pb-4">
            <div className="px-4 pt-3 space-y-1">
              <p className="text-xs font-heading font-bold text-acc-400 uppercase tracking-widest px-3 py-1.5">Products</p>
              {NAV_PRODUCTS.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobile(false)} className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  {item.label}
                </Link>
              ))}
              <p className="text-xs font-heading font-bold text-acc-400 uppercase tracking-widest px-3 py-1.5 mt-3">Industries</p>
              {NAV_INDUSTRIES.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobile(false)} className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  {item.label}
                </Link>
              ))}
              <p className="text-xs font-heading font-bold text-acc-400 uppercase tracking-widest px-3 py-1.5 mt-3">Solutions</p>
              {NAV_SOLUTIONS.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobile(false)} className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 space-y-1">
                <Link href="/about" onClick={() => setMobile(false)} className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">About Orbitron</Link>
                <Link href="/infrastructure" onClick={() => setMobile(false)} className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Infrastructure</Link>
                <Link href="/contact" onClick={() => setMobile(false)} className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Contact</Link>
              </div>
              <div className="pt-3">
                <Link href="/contact#quote" onClick={() => setMobile(false)} className="block w-full text-center bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-5 py-3 rounded-full transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
