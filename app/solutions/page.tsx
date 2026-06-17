import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SOLUTIONS } from "@/lib/data";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Solutions | Technical, Logistics & Custom Chemical Services — Orbitron Sciechem",
  description:
    "End-to-end chemical solutions: technical consulting, quality assurance, logistics & distribution, supply chain management, and custom formulations across East Africa.",
};

export default function Solutions() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy-950 py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 60%, #2B75CC 0%, transparent 55%), radial-gradient(circle at 75% 40%, #F58220 0%, transparent 55%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,144,217,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,217,0.12) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-acc-400 font-heading font-bold text-sm tracking-widest uppercase mb-4">
            Our Solutions
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            End-to-End{" "}
            <span className="text-acc-400">Chemical Solutions</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Expert guidance for every chemical challenge — from sourcing and
            formulation to delivery and compliance.
          </p>

          {/* Quick-jump chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {SOLUTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white text-xs font-heading font-bold px-4 py-2 rounded-full transition-colors"
              >
                <Icon name={s.icon} size={13} className="opacity-80" /> {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky section nav ── */}
      <nav className="bg-navy-900 border-b border-white/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {SOLUTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 flex items-center gap-1.5 px-4 py-1.5 text-xs font-heading font-bold text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors whitespace-nowrap"
              >
                <Icon name={s.icon} size={13} className="opacity-80" /> {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Solution sections ── */}
      {SOLUTIONS.map((solution, idx) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-24 scroll-mt-36 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: text */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                {/* Division number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg shrink-0`}
                  >
                    <Icon name={solution.icon} size={30} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-heading font-bold text-acc-500 uppercase tracking-widest mb-0.5">
                      Solution {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-heading font-black text-navy-900 text-2xl sm:text-3xl">
                      {solution.title}
                    </h2>
                  </div>
                </div>

                <p className="text-acc-500 font-heading font-semibold text-base mb-4 italic">
                  &ldquo;{solution.tagline}&rdquo;
                </p>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {solution.desc}
                </p>

                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-md"
                >
                  Request This Service <ArrowRight size={15} />
                </Link>
              </div>

              {/* Right: feature list card */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-navy-950 rounded-2xl p-8 shadow-2xl">
                  <p className="text-acc-400 font-heading font-bold text-xs tracking-widest uppercase mb-5">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-4">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-acc-500 mt-0.5 shrink-0"
                        />
                        <span className="text-white/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <Link
                      href="/contact"
                      className="flex items-center justify-between text-white/60 hover:text-white text-sm font-heading font-semibold transition-colors group"
                    >
                      <span>Talk to a specialist about this solution</span>
                      <ArrowRight
                        size={16}
                        className="text-acc-500 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Why Orbitron for solutions ── */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-400 font-heading font-bold text-sm tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading font-black text-white text-3xl sm:text-4xl">
              One Partner. Five End-to-End Solutions.
            </h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">
              Whether you need a single product or a fully managed chemical
              supply chain — we handle it from source to site.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SOLUTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-acc-500/40 rounded-2xl p-5 text-center transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 mx-auto">
                  <Icon name={s.icon} size={20} className="text-acc-400" />
                </div>
                <h3 className="font-heading font-black text-white text-sm leading-snug mb-1">
                  {s.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{s.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-acc-400 font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={11} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #001A4A 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl mb-5">
            Ready to Power Your Industry?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Partner with Orbitron Sciechem for world-class chemical, laboratory
            and industrial solutions. Join 500+ companies who trust us daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-heading font-bold px-8 py-4 rounded-full transition-colors"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
