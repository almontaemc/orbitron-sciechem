import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Package, Tag, ArrowLeft } from "lucide-react";
import { PRODUCTS, DIVISIONS } from "@/lib/data";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Orbitron Sciechem`,
    description: product.tagline + " — Available in East Africa from Orbitron Sciechem Limited.",
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const division = DIVISIONS.find((d) => d.id === product.divisionId);
  const related  = PRODUCTS.filter(
    (p) => p.divisionId === product.divisionId && p.slug !== product.slug
  ).slice(0, 4);

  const imgSrc = product.image.startsWith("photo-")
    ? `https://images.unsplash.com/${product.image}?w=1200&h=600&fit=crop&q=85`
    : product.image;

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-white/50 font-heading font-medium">
          <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft size={12} /> Products
          </Link>
          <span>/</span>
          <Link href={`/products#${product.divisionId}`} className="hover:text-white transition-colors">
            {division?.title}
          </Link>
          <span>/</span>
          <span className="text-white/80">{product.name}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[50vh]">
          {/* Left: content */}
          <div className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
            {/* Division badge */}
            {division && (
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${division.color} text-white text-xs font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit mb-5`}>
                <span>{division.icon}</span> {division.title}
              </div>
            )}

            <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-acc-300 font-heading font-semibold text-lg italic mb-6">
              {product.tagline}
            </p>

            {product.casNumber && (
              <p className="text-white/40 text-xs font-mono mb-6">
                CAS No: {product.casNumber}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-all shadow-lg"
              >
                Request a Quote <ArrowRight size={15} />
              </Link>
              <a
                href="https://wa.me/254742651823"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative min-h-[300px] lg:min-h-full">
            <Image
              src={imgSrc}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-navy-950/20 to-navy-950/60" />
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description + Applications */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading font-black text-navy-900 text-2xl mb-4">Product Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="font-heading font-black text-navy-900 text-xl mb-5">Applications</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.applications.map((app) => (
                    <div key={app} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <CheckCircle2 size={16} className="text-acc-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm leading-snug">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar: specs + CTA */}
            <div className="space-y-5">
              {/* Grades */}
              <div className="bg-navy-950 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={16} className="text-acc-400" />
                  <h3 className="font-heading font-black text-white text-sm uppercase tracking-wider">Available Grades</h3>
                </div>
                <ul className="space-y-2.5">
                  {product.grades.map((g) => (
                    <li key={g} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-acc-500 shrink-0" />
                      <span className="text-white/80 text-sm">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packaging */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Package size={16} className="text-navy-900" />
                  <h3 className="font-heading font-black text-navy-900 text-sm uppercase tracking-wider">Packaging Options</h3>
                </div>
                <ul className="space-y-2.5">
                  {product.packaging.map((pkg) => (
                    <li key={pkg} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-900 shrink-0" />
                      <span className="text-gray-600 text-sm">{pkg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote CTA */}
              <div className="bg-acc-500 rounded-2xl p-6 text-white text-center">
                <p className="font-heading font-black text-lg mb-2">Need This Product?</p>
                <p className="text-white/80 text-sm mb-5">Get a tailored quote within 2 business hours.</p>
                <Link
                  href="/contact#quote"
                  className="block w-full bg-white text-acc-600 font-heading font-black text-sm py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Request a Quote
                </Link>
                <a
                  href="https://wa.me/254742651823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-2 bg-white/20 hover:bg-white/30 text-white font-heading font-semibold text-sm py-3 rounded-full transition-colors"
                >
                  💬 WhatsApp Us
                </a>
              </div>

              {/* Certifications */}
              <div className="rounded-2xl p-5 border border-gray-200">
                <p className="text-xs font-heading font-bold text-gray-400 uppercase tracking-wider mb-3">Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {["KEBS", "ISO", "GMP", "HACCP"].map((c) => (
                    <span key={c} className="bg-navy-950 text-white text-xs font-heading font-bold px-2.5 py-1 rounded-lg">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading font-black text-navy-900 text-xl">
                More from {division?.title}
              </h2>
              <Link href={`/products#${product.divisionId}`} className="text-sm text-acc-500 font-heading font-semibold hover:underline flex items-center gap-1">
                View all <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((rel) => {
                const relImg = rel.image.startsWith("photo-")
                  ? `https://images.unsplash.com/${rel.image}?w=400&h=250&fit=crop&q=80`
                  : rel.image;
                return (
                  <Link
                    key={rel.slug}
                    href={`/products/${rel.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={relImg}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-black text-navy-900 text-sm mb-1 leading-snug">{rel.name}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{rel.tagline}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-heading font-bold text-acc-500 group-hover:gap-2 transition-all">
                        View <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
