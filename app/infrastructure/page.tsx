import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Package, Truck, FlaskConical, Shield, Warehouse, Thermometer, Zap, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Infrastructure | Warehouse, Storage & Quality Labs — Orbitron Sciechem",
  description: "Explore Orbitron Sciechem's state-of-the-art warehouse, bulk liquid storage, quality control laboratory, HAZMAT-certified fleet and compliance certifications in Nairobi, Kenya.",
};

const STATS = [
  { value: "10,000+", unit: "sq ft", label: "Warehouse Facility" },
  { value: "500+",    unit: "MT",    label: "Bulk Storage Capacity" },
  { value: "30+",     unit: "units", label: "Delivery Fleet" },
  { value: "1,000+",  unit: "SKUs",  label: "Products in Stock" },
  { value: "6",       unit: "countries", label: "Distribution Reach" },
  { value: "24 / 7", unit: "",       label: "Order Fulfilment" },
];

const WAREHOUSE_SPECS = [
  { icon: Warehouse,    label: "Covered Storage",          value: "10,000+ sq ft purpose-built chemical warehouse" },
  { icon: Thermometer,  label: "Temperature Zones",        value: "Ambient, cool-store and controlled temperature bays" },
  { icon: Package,      label: "Racking & Bulk Storage",   value: "Pallet racking + ground-level bulk zones for drums & IBCs" },
  { icon: Shield,       label: "Segregation",              value: "MSDS-compliant chemical segregation — acids, alkalis, oxidisers, flammables" },
  { icon: Zap,          label: "Safety Systems",           value: "CCTV, fire suppression, spill bunds and emergency eyewash stations" },
  { icon: Clock,        label: "Inventory Management",     value: "Real-time stock tracking with same-day dispatch capability" },
];

const STORAGE_SPECS = [
  "Stainless steel and HDPE lined tanks for corrosive liquids",
  "Separate bunded zones for acids, alkalis and oxidising agents",
  "Bulk storage for sodium hypochlorite, caustic soda and HCl",
  "IBC and drum storage for petroleum solvents and specialty chemicals",
  "Explosion-proof zones for flammable solvent storage",
  "Daily tank level monitoring and leak detection systems",
];

const LAB_CAPABILITIES = [
  { test: "Identity Testing",        method: "FTIR, Titration, Specific Gravity" },
  { test: "Purity & Assay",          method: "Potentiometric Titration, Gravimetry" },
  { test: "Physical Properties",     method: "Refractive Index, pH, Viscosity, Flash Point" },
  { test: "Heavy Metals Screening",  method: "Colorimetric & Atomic Absorption methods" },
  { test: "Microbiological",         method: "TPC, Yeast & Mould, E.coli (food grade products)" },
  { test: "Water Quality",           method: "COD, BOD, Turbidity, Chlorine residual" },
];

const CERTIFICATIONS = [
  { name: "KEBS",            full: "Kenya Bureau of Standards",          color: "bg-blue-500/10 border-blue-500/30 text-blue-300" },
  { name: "ISO 9001:2015",   full: "Quality Management System",          color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" },
  { name: "GMP",             full: "Good Manufacturing Practice",        color: "bg-violet-500/10 border-violet-500/30 text-violet-300" },
  { name: "HACCP",           full: "Food Safety Management",             color: "bg-acc-500/10 border-acc-500/30 text-acc-300" },
  { name: "HAZMAT",          full: "Dangerous Goods Transport Certified", color: "bg-red-500/10 border-red-500/30 text-red-300" },
  { name: "EPRA",            full: "Energy & Petroleum Reg. Authority",  color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300" },
];

export default function InfrastructurePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-navy-950">
        <Image
          src="https://images.pexels.com/photos/12845179/pexels-photo-12845179.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Orbitron Sciechem warehouse and storage facility"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-32">
          <div className="inline-flex items-center gap-2 bg-acc-500/20 border border-acc-500/40 text-acc-300 text-xs font-heading font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-acc-500 animate-pulse" />
            Infrastructure
          </div>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            Built to Supply<br />
            <span className="text-acc-400">East Africa</span> at Scale
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed mb-8">
            Purpose-built warehousing, bulk liquid storage, in-house quality labs and a HAZMAT-certified fleet — the backbone of reliable chemical supply across 6 countries.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm font-heading">
            <MapPin size={14} className="text-acc-500" />
            Nairobi, Kenya — serving Kenya, Uganda, Tanzania, Rwanda, Ethiopia & South Sudan
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-navy-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-heading font-black text-acc-400 text-2xl sm:text-3xl leading-none">
                  {s.value}
                  {s.unit && <span className="text-sm font-bold text-white/40 ml-1">{s.unit}</span>}
                </p>
                <p className="text-white/50 text-xs font-heading font-semibold mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warehouse & Distribution ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">01 — Warehouse & Distribution</p>
              <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl mb-5 leading-tight">
                Nairobi Distribution Centre
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our 10,000+ sq ft purpose-built warehouse in Nairobi is the logistics heart of Orbitron Sciechem. Designed to MSDS chemical storage standards, it holds over 1,000 product SKUs across temperature-zoned bays — enabling same-day dispatch for in-stock orders and next-day delivery across Greater Nairobi.
              </p>
              <div className="space-y-4">
                {WAREHOUSE_SPECS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-acc-400" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-navy-900 text-sm">{label}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/37912780/pexels-photo-37912780.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Orbitron Sciechem warehouse facility"
                  width={800} height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Warehouse shelving and storage"
                    width={400} height={250}
                    className="w-full object-cover h-44"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/2786527/pexels-photo-2786527.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Chemical barrels in storage"
                    width={400} height={250}
                    className="w-full object-cover h-44"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bulk Liquid Storage ── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="https://images.pexels.com/photos/31403876/pexels-photo-31403876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bulk liquid chemical storage tanks"
                width={800} height={550}
                className="w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">02 — Bulk Liquid Storage</p>
              <h2 className="font-heading font-black text-white text-3xl sm:text-4xl mb-5 leading-tight">
                500+ MT Bulk<br />Chemical Storage
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                For high-volume industrial and municipal clients, Orbitron Sciechem maintains dedicated bulk liquid storage infrastructure. Corrosion-resistant tanks, separate bunded zones for incompatible chemicals, and continuous monitoring ensure safe, uninterrupted supply.
              </p>
              <ul className="space-y-3">
                {STORAGE_SPECS.map((spec) => (
                  <li key={spec} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                    <CheckCircle2 size={15} className="text-acc-500 mt-0.5 shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quality Control Lab ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">03 — Quality Control Laboratory</p>
              <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl mb-5 leading-tight">
                In-House QC Lab — Every Batch Tested
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every product that enters our warehouse undergoes incoming quality inspection in our in-house analytical laboratory before release to customers. Our QC lab is equipped with modern analytical instruments and follows ISO and pharmacopoeial testing protocols to ensure every shipment meets specification.
              </p>
              <div className="space-y-3">
                {LAB_CAPABILITIES.map(({ test, method }) => (
                  <div key={test} className="flex items-start justify-between gap-4 py-3 border-b border-gray-200 last:border-0">
                    <span className="font-heading font-bold text-navy-900 text-sm">{test}</span>
                    <span className="text-gray-500 text-xs text-right leading-relaxed max-w-[55%]">{method}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 lg:pt-16">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/9243566/pexels-photo-9243566.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Orbitron Sciechem quality control laboratory"
                  width={800} height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/8540616/pexels-photo-8540616.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Laboratory testing and analysis"
                  width={800} height={300}
                  className="w-full object-cover h-52"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logistics & Fleet ── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">04 — Logistics & Fleet</p>
              <h2 className="font-heading font-black text-white text-3xl sm:text-4xl mb-5 leading-tight">
                HAZMAT-Certified<br />
                <span className="text-acc-400">30+ Vehicle Fleet</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Our owned and contracted delivery fleet is fully HAZMAT certified for dangerous goods transport. From small express deliveries within Nairobi to bulk tanker consignments to Uganda, Tanzania, Rwanda, Ethiopia and South Sudan — we manage the last mile.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Express Vans", detail: "Next-day delivery within Kenya" },
                  { label: "Flatbed Trucks", detail: "Bulk drum & IBC transport" },
                  { label: "Tanker Fleet", detail: "Liquid bulk — 5,000–30,000 L" },
                  { label: "Reefer Units", detail: "Temperature-sensitive cargo" },
                ].map((v) => (
                  <div key={v.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="font-heading font-black text-white text-sm mb-1">{v.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{v.detail}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {[
                  "HAZMAT-trained drivers with dangerous goods licences",
                  "Emergency response kits and spill containment on every vehicle",
                  "GPS tracking and real-time ETA sharing with clients",
                  "Cross-border documentation: EAC certificates, COMESA clearance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                    <CheckCircle2 size={14} className="text-acc-500 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/35501714/pexels-photo-35501714.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Orbitron Sciechem delivery fleet"
                width={800} height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Compliance & Certifications</p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">
              Certified. Audited. Trusted.
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Our facilities, products and processes are regularly audited against international and East African regulatory standards.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className={`rounded-2xl border p-6 ${cert.color.replace("text-", "").replace(/text-\S+/, "")} bg-navy-950`}>
                <div className={`inline-flex items-center gap-2 border rounded-full px-3 py-1 text-xs font-heading font-black tracking-widest uppercase mb-3 ${cert.color}`}>
                  {cert.name}
                </div>
                <p className="text-white font-heading font-bold text-base mb-1">{cert.name}</p>
                <p className="text-white/50 text-sm">{cert.full}</p>
              </div>
            ))}
          </div>

          {/* Document download strip */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <p className="font-heading font-black text-navy-900 text-base mb-1">Need compliance documentation?</p>
              <p className="text-gray-500 text-sm">Request our company profile, certificates, SDS sheets or CoA documentation.</p>
            </div>
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-all whitespace-nowrap shrink-0"
            >
              Request Documents <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-navy-950 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl mb-4">
            Ready to source from a supplier with real infrastructure?
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Talk to our team about your chemical supply requirements — bulk, drum or express.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#quote" className="inline-flex items-center justify-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold px-8 py-3.5 rounded-full transition-all">
              Request a Quote <ArrowRight size={15} />
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-semibold px-8 py-3.5 rounded-full transition-all">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
