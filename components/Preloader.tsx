"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PARTICLES = [
  { formula: "H₂O",      left: "3%",    bottom: "5%",  size: 11 },
  { formula: "NaOH",     left: "9.5%",  bottom: "14%", size: 14 },
  { formula: "HCl",      left: "16%",   bottom: "23%", size: 17 },
  { formula: "H₂SO₄",   left: "22.5%", bottom: "32%", size: 20 },
  { formula: "NaCl",     left: "29%",   bottom: "41%", size: 11 },
  { formula: "NH₃",      left: "35.5%", bottom: "5%",  size: 14 },
  { formula: "KNO₃",     left: "42%",   bottom: "14%", size: 17 },
  { formula: "C₆H₁₂O₆", left: "48.5%", bottom: "23%", size: 20 },
  { formula: "Fe₂O₃",   left: "55%",   bottom: "32%", size: 11 },
  { formula: "NaHCO₃",  left: "61.5%", bottom: "41%", size: 14 },
  { formula: "HNO₃",    left: "68%",   bottom: "5%",  size: 17 },
  { formula: "CaCO₃",   left: "74.5%", bottom: "14%", size: 20 },
  { formula: "Mg(OH)₂", left: "81%",   bottom: "23%", size: 11 },
  { formula: "K₂SO₄",   left: "87.5%", bottom: "32%", size: 14 },
  { formula: "C₂H₅OH",  left: "6%",    bottom: "41%", size: 17 },
];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading]   = useState(false);

  useEffect(() => {
    // Start fade-out just before the bar animation finishes (~2.9s)
    const fadeTimer = setTimeout(() => setFading(true), 2900);
    // Remove from DOM after transition completes
    const hideTimer = setTimeout(() => setVisible(false), 3600);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{
        background: "linear-gradient(145deg, #00112E 0%, #002B6E 55%, #001A4A 100%)",
        opacity: fading ? 0 : 1,
        transition: "opacity 650ms cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,144,217,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,217,0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Floating formulas */}
      {PARTICLES.map((p, i) => (
        <span
          key={p.formula}
          className="absolute pointer-events-none font-mono font-bold text-blue-300/40 animate-float-up"
          style={{
            left: p.left,
            bottom: p.bottom,
            fontSize: `${p.size}px`,
            animationDelay: `${i * 0.18}s`,
            animationDuration: `${2.4 + (i % 4) * 0.4}s`,
          }}
        >
          {p.formula}
        </span>
      ))}

      {/* Orbital rings + logo */}
      <div className="relative flex items-center justify-center" style={{ width: 260, height: 260 }}>
        {/* Outer ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 0,
            border: "2px solid transparent",
            borderTopColor: "rgba(245,130,32,0.9)",
            borderRightColor: "rgba(245,130,32,0.25)",
            animation: "orb-cw 1.8s linear infinite",
          }}
        />
        {/* Orange dot on outer ring */}
        <div
          className="absolute rounded-full"
          style={{
            width: 260,
            height: 260,
            animation: "orb-cw 1.8s linear infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: -5,
              transform: "translateY(-50%)",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#F58220",
              animation: "pulse-glow 1.8s ease-in-out infinite",
            }}
          />
        </div>
        {/* Inner ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 24,
            border: "1.5px solid transparent",
            borderTopColor: "rgba(107,173,236,0.7)",
            borderLeftColor: "rgba(107,173,236,0.2)",
            animation: "orb-ccw 1.2s linear infinite",
          }}
        />
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Orbitron Sciechem"
          width={150}
          height={150}
          priority
          style={{
            position: "relative",
            zIndex: 10,
            animation: "logo-pop 0.85s cubic-bezier(0.34,1.56,0.64,1) 0.15s both",
            filter: "drop-shadow(0 0 24px rgba(43,117,204,0.55))",
          }}
        />
      </div>

      {/* Text */}
      <div className="mt-7 text-center" style={{ animation: "fade-up 0.7s ease 0.65s both" }}>
        <p className="font-heading font-black text-white tracking-[0.28em] text-xl">
          ORBITRON SCIECHEM
        </p>
        <p
          className="font-sans text-blue-300/60 tracking-[0.4em] text-[0.6rem] mt-1.5 uppercase"
        >
          Industrial Chemicals &amp; Lab Solutions
        </p>
      </div>

      {/* Progress bar */}
      <div
        className="mt-7 rounded-full overflow-hidden"
        style={{
          width: 180,
          height: 3,
          background: "rgba(255,255,255,0.08)",
          animation: "fade-up 0.5s ease 0.9s both",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #2B75CC, #F58220, #2B75CC)",
            borderRadius: 9999,
            animation: "bar-fill 2.55s cubic-bezier(0.4,0,0.2,1) 0.35s both",
          }}
        />
      </div>

      {/* Tagline */}
      <p
        className="mt-4 font-sans text-blue-400/40 text-[0.6rem] tracking-widest uppercase"
        style={{ animation: "fade-up 0.5s ease 1.1s both" }}
      >
        East Africa&apos;s #1 Chemical Solutions Provider
      </p>
    </div>
  );
}
