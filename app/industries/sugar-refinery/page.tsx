import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Sugar Refinery Chemicals Kenya | Sugar Mill Chemical Supplier East Africa — Orbitron Sciechem",
  description:
    "Orbitron Sciechem supplies all sugar refinery process chemicals in Kenya and East Africa: phosphoric acid, lime, activated carbon, flocculants, CIP chemicals, boiler water treatment, and cooling tower chemicals. Trusted by sugar mills across Kenya, Uganda, Tanzania, and Ethiopia.",
  keywords: [
    "sugar refinery chemicals Kenya",
    "sugar mill chemicals East Africa",
    "phosphoric acid sugar clarification Kenya",
    "activated carbon sugar decolourisation",
    "lime calcium hydroxide sugar refining",
    "flocculants sugar factory Kenya",
    "polyacrylamide sugar clarification East Africa",
    "boiler water treatment chemicals sugar mill",
    "CIP chemicals sugar factory Kenya",
    "cooling tower chemicals sugar refinery",
    "caustic soda sugar CIP cleaning",
    "ion exchange resins sugar demineralisation",
    "chemical supplier sugar industry Kenya",
    "Orbitron Sciechem sugar chemicals",
    "sugar processing chemicals Nairobi",
  ],
  openGraph: {
    title: "Sugar Refinery Chemicals Supplier — Orbitron Sciechem Kenya",
    description:
      "Complete chemical solutions for sugar mills and refineries across East Africa: process chemicals, boiler treatment, cooling tower, CIP, water treatment, and laboratory chemicals.",
  },
};

/* ── Chemical tables from the PDF ── */
const PROCESS_CHEMICALS = [
  { name: "Phosphoric Acid",       application: "Juice clarification and impurity removal",     slug: "phosphoric-acid",          available: true },
  { name: "Sulfuric Acid",         application: "pH adjustment and process cleaning",            slug: "sulfuric-acid",             available: true },
  { name: "Hydrochloric Acid",     application: "Equipment cleaning and regeneration",           slug: "hydrochloric-acid",         available: true },
  { name: "Lime (Calcium Hydroxide)", application: "Clarification and pH control",              slug: "lime-calcium-hydroxide",    available: true },
  { name: "Quicklime (Calcium Oxide)", application: "Production of milk of lime",               slug: "lime-calcium-hydroxide",    available: true },
  { name: "Sulfur Dioxide",        application: "Sulphitation and colour reduction",            slug: null,                        available: false },
  { name: "Activated Carbon",      application: "Decolourisation",                              slug: "activated-carbon",          available: true },
  { name: "Powdered Activated Carbon", application: "Colour removal",                          slug: "activated-carbon",          available: true },
  { name: "Ion Exchange Resins",   application: "Demineralisation and purification",            slug: null,                        available: false },
  { name: "Flocculants",           application: "Settling suspended solids",                    slug: "flocculants-polyacrylamide", available: true },
  { name: "Polyacrylamide",        application: "Clarification and filtration",                 slug: "flocculants-polyacrylamide", available: true },
  { name: "Hydrogen Peroxide",     application: "Colour correction and sanitation",             slug: "hydrogen-peroxide",         available: true },
];

const BOILER_CHEMICALS = [
  { name: "Sodium Hydroxide (Caustic Soda)", application: "Boiler pH control",                  slug: "caustic-soda",              available: true },
  { name: "Sodium Sulfite",                  application: "Corrosion prevention (oxygen scavenger)", slug: "sodium-sulfite",        available: true },
  { name: "Sodium Phosphate",                application: "Scale prevention",                   slug: null,                        available: false },
  { name: "Polymer Dispersants",             application: "Deposit control",                    slug: "antiscalants-corrosion-inhibitors", available: true },
  { name: "Antiscalants",                    application: "Scale prevention",                   slug: "antiscalants-corrosion-inhibitors", available: true },
];

const COOLING_TOWER_CHEMICALS = [
  { name: "Biocides",              application: "Algae and bacteria control",                   slug: null,                        available: false },
  { name: "Isothiazolinone",       application: "Microbial control",                            slug: null,                        available: false },
  { name: "Chlorine",              application: "Biological control",                           slug: "sodium-hypochlorite",        available: true },
  { name: "Sodium Hypochlorite",   application: "Disinfection",                                 slug: "sodium-hypochlorite",        available: true },
  { name: "Corrosion Inhibitors",  application: "Equipment protection",                         slug: "antiscalants-corrosion-inhibitors", available: true },
  { name: "Antiscalants",          application: "Scale control",                                slug: "antiscalants-corrosion-inhibitors", available: true },
];

const WATER_TREATMENT_CHEMICALS = [
  { name: "Aluminium Sulfate (Alum)", application: "Coagulation",                              slug: "aluminium-sulfate-alum",    available: true },
  { name: "Polyaluminium Chloride (PAC)", application: "Clarification",                        slug: "polyaluminium-chloride",    available: true },
  { name: "Ferric Chloride",         application: "Water clarification",                       slug: "ferric-chloride",           available: true },
  { name: "Sodium Hypochlorite",     application: "Water disinfection",                        slug: "sodium-hypochlorite",        available: true },
  { name: "Calcium Hypochlorite",    application: "Water treatment",                           slug: null,                        available: false },
  { name: "Activated Carbon",        application: "Taste and odour removal",                   slug: "activated-carbon",          available: true },
];

const CIP_CHEMICALS = [
  { name: "Caustic Soda",           application: "CIP alkaline cleaning",                      slug: "caustic-soda",              available: true },
  { name: "Nitric Acid",            application: "Mineral deposit removal",                    slug: "nitric-acid",               available: true },
  { name: "Phosphoric Acid",        application: "Scale removal",                              slug: "phosphoric-acid",           available: true },
  { name: "Peracetic Acid",         application: "Sanitisation",                               slug: "peracetic-acid",            available: true },
  { name: "Hydrogen Peroxide",      application: "Surface disinfection",                       slug: "hydrogen-peroxide",         available: true },
  { name: "Sodium Hydroxide",       application: "Equipment cleaning",                         slug: "caustic-soda",              available: true },
];

const LAB_CHEMICALS = [
  { name: "EDTA",                   application: "Hardness testing",                           slug: "ar-grade-reagents",         available: true },
  { name: "Silver Nitrate",         application: "Chloride testing",                           slug: "ar-grade-reagents",         available: true },
  { name: "Phenolphthalein",        application: "Titration",                                  slug: "ar-grade-reagents",         available: true },
  { name: "Methyl Orange",          application: "Titration",                                  slug: "ar-grade-reagents",         available: true },
  { name: "Buffer Solutions",       application: "pH calibration",                             slug: "ph-conductivity-meter",     available: true },
  { name: "Karl Fischer Reagents",  application: "Moisture testing",                           slug: "ar-grade-reagents",         available: true },
  { name: "Sucrose Standards",      application: "Brix and purity analysis",                   slug: "ar-grade-reagents",         available: true },
];

type ChemRow = { name: string; application: string; slug: string | null; available: boolean };

function ChemTable({ rows, title, num }: { rows: ChemRow[]; title: string; num: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <div className="bg-navy-950 px-6 py-4 flex items-center gap-3">
        <span className="text-acc-400 font-heading font-black text-sm tabular-nums">{num}</span>
        <h3 className="font-heading font-black text-white text-base">{title}</h3>
        <span className="ml-auto text-xs text-white/40">{rows.filter((r) => r.available).length}/{rows.length} in stock</span>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50">
            <th className="text-left px-5 py-2.5 text-xs font-heading font-bold text-gray-500 uppercase tracking-wider">Chemical</th>
            <th className="text-left px-5 py-2.5 text-xs font-heading font-bold text-gray-500 uppercase tracking-wider">Application</th>
            <th className="text-left px-5 py-2.5 text-xs font-heading font-bold text-gray-500 uppercase tracking-wider w-28">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="px-5 py-3 font-semibold text-navy-900">
                {row.available && row.slug ? (
                  <Link href={`/products/${row.slug}`} className="hover:text-acc-500 transition-colors flex items-center gap-1 group">
                    {row.name}
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-acc-500" />
                  </Link>
                ) : (
                  row.name
                )}
              </td>
              <td className="px-5 py-3 text-gray-600">{row.application}</td>
              <td className="px-5 py-3">
                {row.available ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-gray-500 bg-gray-100 rounded-full px-2.5 py-0.5">
                    On Request
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SugarRefinery() {
  return (
    <>
      {/* ── JSON-LD for SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sugar Refinery Chemical Supply — Orbitron Sciechem",
            "description": "Complete chemical solutions for sugar mills and refineries in Kenya and East Africa. Process chemicals, boiler water treatment, cooling tower, CIP, water treatment, and laboratory chemicals.",
            "provider": {
              "@type": "Organization",
              "name": "Orbitron Sciechem Limited",
              "url": "https://orbitronsciechem.com",
              "telephone": "+254742651823",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hillpark Business Park, Go-Down 4",
                "addressLocality": "Nairobi",
                "addressCountry": "KE",
              },
            },
            "areaServed": ["KE", "UG", "TZ", "RW", "ET", "SS"],
            "keywords": "sugar refinery chemicals Kenya, sugar mill chemicals East Africa, phosphoric acid sugar clarification, activated carbon sugar decolourisation",
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-navy-950 min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=1920&h=800&fit=crop&q=85"
          alt="Sugar refinery factory East Africa"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-acc-500/20 border border-acc-500/40 text-acc-300 text-xs font-heading font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-acc-500 animate-pulse" />
              Industry Solution
            </div>
            <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              Sugar Refinery<br />
              <span className="text-acc-400">Chemical Solutions</span><br />
              in Kenya
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Complete supply of all process chemicals, boiler treatment, cooling tower, CIP, water treatment, and laboratory chemicals for sugar mills and refineries across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#quote" className="inline-flex items-center justify-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/254742651823" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full transition-colors">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Orbitron for sugar ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Factory",     title: "Single-Source Supplier",  desc: "All 7 chemical categories for your sugar mill from one trusted supplier — process, boiler, cooling, CIP, water treatment, lab." },
              { icon: "PackageCheck",title: "Buffer Stock Maintained",  desc: "Critical chemicals always in stock at our Nairobi warehouse for immediate dispatch to your factory." },
              { icon: "Truck",       title: "Mill-Direct Delivery",     desc: "Delivery to sugar mills across Kenya, Uganda, Tanzania, and Ethiopia with HAZMAT-compliant transport." },
              { icon: "Microscope",  title: "Technical Support",        desc: "Chemical engineers available for dosage advice, troubleshooting, and formulation support." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={20} className="text-acc-400" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-navy-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Complete chemical tables ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Complete Reference</p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">
              All Chemicals for Sugar Refinery Operations
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Click any chemical name to view full product specifications. Items marked <strong>In Stock</strong> are available for immediate dispatch from our Nairobi warehouse.
            </p>
          </div>

          <div className="space-y-6">
            <ChemTable rows={PROCESS_CHEMICALS} title="Process Chemicals (Clarification, Decolourisation & Crystallisation)" num="01" />
            <ChemTable rows={BOILER_CHEMICALS} title="Boiler Water Treatment Chemicals" num="02" />
            <ChemTable rows={COOLING_TOWER_CHEMICALS} title="Cooling Tower Chemicals" num="03" />
            <ChemTable rows={WATER_TREATMENT_CHEMICALS} title="Water Treatment Plant Chemicals" num="04" />
            <ChemTable rows={CIP_CHEMICALS} title="Cleaning & CIP (Clean-in-Place) Chemicals" num="05" />
            <ChemTable rows={LAB_CHEMICALS} title="Laboratory & Quality Control Chemicals" num="06" />
          </div>
        </div>
      </section>

      {/* ── Key products spotlight ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">Most Requested</p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">
              Top Sugar Refinery Chemicals
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { slug: "phosphoric-acid",       name: "Phosphoric Acid",           use: "Juice clarification & impurity removal",    img: "photo-yWL3SiO0KIw" },
              { slug: "lime-calcium-hydroxide", name: "Lime (Calcium Hydroxide)", use: "Defecation, milk-of-lime & pH control",     img: "photo-VIb8pHrBUC4" },
              { slug: "activated-carbon",       name: "Activated Carbon",         use: "Sugar syrup decolourisation",               img: "photo-zFqjUjnJNo8" },
              { slug: "flocculants-polyacrylamide", name: "Flocculants / Polyacrylamide", use: "Juice clarification & settling",    img: "photo-bv2pvCGMtzg" },
              { slug: "caustic-soda",           name: "Caustic Soda (NaOH)",      use: "CIP alkaline cleaning & boiler pH control", img: "photo-yWL3SiO0KIw" },
              { slug: "antiscalants-corrosion-inhibitors", name: "Antiscalants", use: "Boiler & evaporator scale prevention",        img: "photo-S9NchuPb79I" },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${p.img}?w=500&h=280&fit=crop&q=80`}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-black text-navy-900 text-base mb-1">{p.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{p.use}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-heading font-bold text-acc-500 group-hover:gap-2 transition-all">
                    View Specifications <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO content block ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-navy-900 text-2xl sm:text-3xl mb-6">
            Kenya&apos;s Trusted Sugar Refinery Chemical Supplier
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Orbitron Sciechem Limited is a leading supplier of <strong>sugar refinery chemicals in Kenya</strong> and across East Africa. We supply all process chemicals required in a modern sugar mill — from raw juice treatment and clarification through to crystallisation, CIP cleaning, boiler water management, and quality control laboratory chemicals.
            </p>
            <p>
              Our <strong>phosphoric acid for sugar clarification</strong>, <strong>lime (calcium hydroxide)</strong> for the defecation process, and <strong>activated carbon for sugar decolourisation</strong> are sourced from GMP and ISO-certified manufacturers in Europe and Asia, with full Certificates of Analysis and KEBS compliance for every batch.
            </p>
            <p>
              For <strong>boiler water treatment in sugar factories</strong>, we supply sodium sulfite (oxygen scavenger), antiscalants, and polymer dispersants to protect your evaporators, heat exchangers, and steam systems from corrosion and scale buildup.
            </p>
            <p>
              Our <strong>CIP chemicals for sugar mills</strong> include caustic soda, nitric acid, phosphoric acid, and peracetic acid sanitisers — covering alkaline, acid, and biocidal cleaning cycles for all food-contact surfaces and processing equipment.
            </p>
            <p>
              We deliver to sugar mills across Kenya (Mumias, Chemelil, Sony, Nzoia, Butali, Kibos, West Kenya, Kwale), Uganda (Kakira, Sugar Corporation of Uganda), Tanzania (Kilombero, TPC, Mtibwa), and Ethiopia. Contact our industrial chemicals team for pricing, delivery schedules, and technical consultation.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              "Phosphoric acid for sugar juice clarification",
              "Lime / calcium hydroxide for defecation process",
              "Activated carbon for sugar syrup decolourisation",
              "Flocculants & polyacrylamide for settling",
              "Caustic soda for CIP alkaline cleaning",
              "Boiler antiscalants & corrosion inhibitors",
              "Sodium hypochlorite for disinfection",
              "PAC & alum for water treatment",
              "Nitric & hydrochloric acid for mineral deposit removal",
              "Peracetic acid for food-grade sanitation",
              "Laboratory reagents for QC & analysis",
              "Hydrogen peroxide for colour correction",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                <CheckCircle2 size={15} className="text-acc-500 mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-acc-400 font-heading font-bold text-sm tracking-widest uppercase mb-3">Get Started</p>
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl mb-5">
            Supply All Your Sugar Mill Chemicals<br />from One Reliable Source
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Request a quote or send us your chemical requirements list and our team will respond within 2 business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#quote" className="inline-flex items-center justify-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/254742651823" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              💬 WhatsApp Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
