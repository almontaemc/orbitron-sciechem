import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/data";

const productLinks = [
  { label: "Industrial Chemicals",         href: "/products#industrial" },
  { label: "Food Ingredients",             href: "/products#food" },
  { label: "Pharmaceutical Solutions",     href: "/products#pharma" },
  { label: "Laboratory Equipment",         href: "/products#laboratory" },
  { label: "Petroleum & Solvents",         href: "/products#petroleum" },
  { label: "Food & Beverage Inputs",       href: "/products#beverage" },
];

const industryLinks = [
  { label: "Manufacturing",     href: "/industries/manufacturing" },
  { label: "Food & Beverage",   href: "/industries/food-beverage" },
  { label: "Pharmaceuticals",   href: "/industries/pharmaceuticals" },
  { label: "Water Treatment",   href: "/industries/water-treatment" },
  { label: "Petroleum & Energy", href: "/industries/petroleum-energy" },
  { label: "Research Labs",     href: "/industries/laboratories" },
  { label: "Agriculture",       href: "/industries/agriculture" },
];

const companyLinks = [
  { label: "About Orbitron",    href: "/about" },
  { label: "Our Story",         href: "/about#story" },
  { label: "Certifications",    href: "/about#certifications" },
  { label: "Sustainability",    href: "/about#sustainability" },
  { label: "Contact Us",        href: "/contact" },
  { label: "Get a Quote",       href: "/contact#quote" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Orbitron Sciechem" width={52} height={52} className="object-contain" />
            <div className="leading-none">
              <span className="block font-heading font-black text-sm tracking-widest text-white">ORBITRON</span>
              <span className="block font-heading font-semibold text-[0.58rem] tracking-[0.22em] text-acc-400">SCIECHEM LIMITED</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed">
            Africa&apos;s trusted importer and distributor of industrial chemicals, food ingredients, pharmaceutical raw materials, and laboratory solutions.
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-start gap-2 hover:text-acc-400 transition-colors">
                <Phone size={14} className="mt-0.5 shrink-0" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2 hover:text-acc-400 transition-colors">
                <Mail size={14} className="mt-0.5 shrink-0" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-acc-500" />
                {CONTACT.address}
              </span>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm tracking-wider mb-4 uppercase">Products</h4>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm hover:text-acc-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm tracking-wider mb-4 uppercase">Industries</h4>
          <ul className="space-y-2.5">
            {industryLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm hover:text-acc-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm tracking-wider mb-4 uppercase">Company</h4>
          <ul className="space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm hover:text-acc-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-5 border-t border-white/10">
            <p className="text-xs text-white/40 mb-2">Serving across:</p>
            <div className="flex flex-wrap gap-1.5">
              {CONTACT.countries.map((c) => (
                <span key={c} className="text-xs bg-white/10 rounded px-1.5 py-0.5 font-heading font-semibold text-white/70">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© 2026 Orbitron Sciechem Limited. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
