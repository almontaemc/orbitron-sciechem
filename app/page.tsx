import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { STATS, DIVISIONS, INDUSTRIES, WHY_CHOOSE, PROCESS_STEPS, TESTIMONIALS } from "@/lib/data";
import HeroSlider from "@/components/HeroSlider";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO — sliding banner
      ═══════════════════════════════════════════════════════ */}
      <HeroSlider />

      {/* ═══════════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy-800 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center py-8 px-4">
                <p className="font-heading font-black text-3xl sm:text-4xl text-acc-400 mb-1">{s.value}</p>
                <p className="text-white/60 text-sm font-medium tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHO WE ARE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Who We Are</p>
              <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl leading-tight mb-6">
                Connecting East African Industries<br className="hidden sm:block" /> to World-Class Chemistry
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Orbitron Sciechem Limited is a multinational importer and distributor specializing in industrial chemicals, food processing ingredients, laboratory equipment, pharmaceutical raw materials, and industrial solutions. We bridge the gap between global chemical manufacturers and East African industries.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Global sourcing from 50+ leading manufacturers across Europe, Asia & North America",
                  "KEBS, ISO, GMP and HACCP certified products across all six divisions",
                  "Consistent inventory with reliable delivery across East Africa",
                  "Dedicated technical specialists for every industry segment we serve",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-acc-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image + badge */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/9243751/pexels-photo-9243751.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Orbitron laboratory facility"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white rounded-xl p-5 shadow-2xl">
                <p className="font-heading font-black text-3xl text-acc-400">24/7</p>
                <p className="text-white/70 text-sm mt-0.5">Technical Support</p>
              </div>
              {/* Region badge */}
              <div className="absolute -top-5 -right-5 bg-acc-500 text-white rounded-xl p-4 shadow-xl text-center">
                <p className="font-heading font-black text-xl">6+</p>
                <p className="text-white/90 text-xs font-semibold">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SIX DIVISIONS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Our Portfolio</p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">Six Business Divisions</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">From raw industrial chemicals to precision laboratory instruments — everything your business needs, from one trusted supplier.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIVISIONS.map((div) => (
              <div
                key={div.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${div.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${div.color} flex items-center justify-center shrink-0`}>
                      <Icon name={div.icon} size={22} className="text-white" />
                    </div>
                    <h3 className="font-heading font-black text-navy-900 text-lg leading-tight">{div.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {div.products.slice(0, 5).map((p) => (
                      <li key={p} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-acc-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                    {div.products.length > 5 && (
                      <li className="text-sm text-acc-500 font-semibold mt-1">
                        +{div.products.length - 5} more products
                      </li>
                    )}
                  </ul>
                  <Link
                    href={`/products#${div.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-heading font-bold text-navy-800 group-hover:text-acc-500 transition-colors"
                  >
                    View Products <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INDUSTRIES SERVED
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-400 font-heading font-bold text-sm tracking-widest uppercase mb-3">Industries We Serve</p>
            <h2 className="font-heading font-black text-white text-3xl sm:text-4xl">Powering 8+ Sectors Across East Africa</h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">Whether you&apos;re in manufacturing, healthcare, agriculture or government — we have the right chemical solution.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
              >
                <Image
                  src={ind.img}
                  alt={ind.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="text-xs font-heading font-bold text-acc-400 uppercase tracking-widest mb-1">{ind.tag}</span>
                  <h3 className="font-heading font-black text-white text-lg leading-tight">{ind.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-white/60 group-hover:text-acc-400 transition-colors font-semibold">
                    Explore <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE ORBITRON
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Why Orbitron</p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">6 Reasons 500+ Companies Trust Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-acc-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={22} className="text-acc-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-heading font-bold text-acc-500/70 tabular-nums">0{i + 1}</span>
                      <h3 className="font-heading font-black text-navy-900 text-base">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW WE WORK
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Our Process</p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">How We Work — 5 Simple Steps</h2>
          </div>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-navy-900 via-acc-500 to-navy-900 opacity-20" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.num} className="relative text-center group">
                  <div className="w-16 h-16 rounded-full bg-navy-900 text-white flex items-center justify-center mx-auto mb-4 font-heading font-black text-lg group-hover:bg-acc-500 transition-colors shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-black text-navy-900 text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -bottom-3 w-0.5 h-6 bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Client Stories</p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">Trusted by Industry Leaders</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">Real results from real clients across East Africa&apos;s most demanding industries.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-acc-400 text-acc-400" />
                  ))}
                </div>

                {/* Industry tag */}
                <span className="inline-block text-xs font-heading font-bold text-acc-500 bg-acc-500/10 rounded-full px-2.5 py-0.5 mb-3 w-fit">
                  {t.industry}
                </span>

                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>

                <div className="mt-5 pt-4 border-t border-gray-200 flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white font-heading font-bold text-sm shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                    <p className="text-acc-500 text-xs font-semibold">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #F58220 0%, transparent 50%), radial-gradient(circle at 80% 50%, #2B75CC 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            Ready to Power Your Industry?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Partner with Orbitron Sciechem Limited for world-class chemical, laboratory and industrial solutions.
            Join 500+ companies across East Africa who trust us daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 shadow-lg hover:shadow-acc-500/30"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-heading font-semibold px-8 py-4 rounded-full text-sm transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONTACT / QUICK FORM
      ═══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Get in Touch</p>
              <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl mb-5">Let&apos;s Start a Conversation</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you need a quote, technical advice, or want to become a partner — our team is ready to assist. We respond within 2 business hours.
              </p>
              <div className="space-y-5">
                {[
                  { label: "Phone", value: "+254 742 651 823", href: "tel:+254742651823" },
                  { label: "Email", value: "info@orbitronsciechem.com", href: "mailto:info@orbitronsciechem.com" },
                  { label: "Address", value: "Hillpark Business Park, Go-Down 4, Nairobi, Kenya", href: null },
                  { label: "Hours", value: "Mon–Fri 8am–6pm · Sat 9am–2pm", href: null },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                      <span className="text-acc-400 text-xs font-heading font-bold">{c.label.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="text-xs font-heading font-bold text-gray-400 uppercase tracking-wider">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-navy-900 font-medium hover:text-acc-500 transition-colors">{c.value}</a>
                      ) : (
                        <p className="text-navy-900 font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-heading font-black text-navy-900 text-xl mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input type="text" required placeholder="John Doe" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">Company Name</label>
                    <input type="text" placeholder="Acme Ltd." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
                    <input type="email" required placeholder="you@company.com" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                    <input type="tel" placeholder="+254 7XX XXX XXX" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">Industry</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 transition-colors bg-white">
                    <option value="">Select your industry</option>
                    {["Manufacturing", "Food & Beverage", "Pharmaceuticals", "Water Treatment", "Petroleum & Energy", "Research / Laboratory", "Agriculture", "Government / Institution", "Other"].map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">Message / Product Inquiry *</label>
                  <textarea required rows={4} placeholder="Describe the products you need, quantities, and any specific requirements..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 transition-colors resize-none" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold py-3.5 rounded-full text-sm transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our privacy policy. We do not share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
