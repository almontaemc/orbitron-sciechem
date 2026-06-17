import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Orbitron Sciechem | Our Story, Mission & Vision",
  description:
    "Learn about Orbitron Sciechem Limited — Africa's trusted chemical and lab solutions hub. Our story, mission, values, and certifications.",
};

const VALUES = [
  { title: "Purpose-Driven",    desc: "Every decision is guided by the impact we create for our clients and communities." },
  { title: "Excellence",        desc: "We hold ourselves to the highest standards in product quality, service, and safety." },
  { title: "Partnership",       desc: "We build long-term relationships, not transactions — your success is our success." },
  { title: "Global Thinking",   desc: "World-class sourcing combined with deep local market knowledge." },
  { title: "Sustainability",    desc: "Responsible sourcing and environmental stewardship in every decision." },
  { title: "Integrity",         desc: "Transparent, honest dealings with every client, supplier, and partner." },
];

const CERTS = [
  { code: "KEBS", full: "Kenya Bureau of Standards",            detail: "Product quality compliance for Kenya market" },
  { code: "ISO",  full: "ISO Quality Management Standards",     detail: "Certified quality management system" },
  { code: "GMP",  full: "Good Manufacturing Practice",          detail: "Pharmaceutical and food-grade product handling" },
  { code: "HACCP",full: "Hazard Analysis Critical Control Points", detail: "Food safety management compliance" },
  { code: "EHS",  full: "Environmental Health & Safety",        detail: "Safe handling and storage of hazardous chemicals" },
  { code: "ICSC", full: "International Chemical Safety Cards",  detail: "International chemical safety standards adherence" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #2B75CC 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-acc-400 font-heading font-bold text-sm tracking-widest uppercase mb-4">About Us</p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Africa&apos;s Most Trusted<br />
            <span className="text-acc-400">Chemical &amp; Lab Solutions Hub</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Founded in Nairobi, Kenya — built to bridge global chemical innovation with East African industrial growth.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl leading-tight mb-6">
                Bridging the Gap Between Global Chemistry &amp; Local Industries
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Orbitron Sciechem Limited was founded with a clear mission: to give East African industries direct access to the same world-class chemical and laboratory solutions that fuel industrial growth everywhere else.
                </p>
                <p>
                  We operate as a multinational importer and distributor, building direct partnerships with leading manufacturers across Europe, Asia, and North America. These partnerships allow us to maintain consistent supply, competitive pricing, and full product documentation — from MSDS sheets to Certificates of Analysis.
                </p>
                <p>
                  Today, we serve 500+ active clients across six countries, operating six specialised divisions that cover industrial chemicals, food processing, pharmaceuticals, petroleum solvents, laboratory equipment, and food &amp; beverage inputs.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&q=85"
                alt="Orbitron Sciechem facility"
                width={800}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-acc-500/20 border border-acc-500/30 flex items-center justify-center text-acc-400 font-heading font-black text-lg mb-5">V</div>
              <h3 className="font-heading font-black text-white text-xl mb-3">Our Vision</h3>
              <p className="text-white/60 leading-relaxed">
                To be Africa&apos;s most trusted and expansive hub for chemical and laboratory solutions, empowering industries through sustainable partnerships and quality-assured products.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 font-heading font-black text-lg mb-5">M</div>
              <h3 className="font-heading font-black text-white text-xl mb-3">Our Mission</h3>
              <p className="text-white/60 leading-relaxed">
                To deliver reliable, affordable, and globally benchmarked chemicals and laboratory solutions that support industrial growth, food security, healthcare, and scientific innovation across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Our Values</p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <span className="font-heading font-black text-4xl text-navy-950/10 mb-3 block leading-none">0{i + 1}</span>
                <h3 className="font-heading font-black text-navy-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Quality Assurance</p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">Certifications &amp; Compliance</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">Every product we supply is backed by rigorous certification and full documentation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTS.map((c) => (
              <div key={c.code} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-acc-500/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center font-heading font-black text-acc-400 text-sm shrink-0">
                  {c.code}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy-900 text-sm mb-1">{c.full}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Sustainability</p>
              <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl leading-tight mb-6">
                Business Success &amp; Environmental Responsibility Go Hand in Hand
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our sustainability framework guides every decision — from supplier selection to packaging choices and distribution methods. We partner with manufacturers who meet our environmental and ethical standards.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Responsible sourcing from manufacturers with environmental credentials",
                  "Eco-conscious logistics and waste reduction across our supply chain",
                  "Full compliance with local and international chemical safety regulations",
                  "Long-term partnerships that drive industrial development sustainably",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 size={16} className="text-acc-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=85"
                alt="Sustainable sourcing"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl mb-5">Partner With Us</h2>
          <p className="text-white/60 text-lg mb-8">Join 500+ companies across East Africa who trust Orbitron Sciechem for their chemical and laboratory needs.</p>
          <Link href="/contact#quote" className="inline-flex items-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
