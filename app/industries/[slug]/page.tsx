import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Package } from "lucide-react";
import { INDUSTRIES, INDUSTRY_CONTENT, PRODUCTS } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return INDUSTRIES
    .filter((i) => i.slug !== "sugar-refinery")
    .map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  const content = INDUSTRY_CONTENT[slug];
  return {
    title: `${industry.title} | Orbitron Sciechem`,
    description: content?.overview?.slice(0, 155) ?? `Chemical solutions for ${industry.title} in East Africa.`,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "sugar-refinery") notFound();

  const industry = INDUSTRIES.find((i) => i.slug === slug);
  const content = INDUSTRY_CONTENT[slug];
  if (!industry || !content) notFound();

  const relatedProducts = PRODUCTS.filter((p) =>
    content.relatedProducts.includes(p.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-navy-950">
        <Image
          src={industry.img}
          alt={industry.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-navy-950/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-32">
          <div className="inline-flex items-center gap-2 bg-acc-500/20 border border-acc-500/40 text-acc-300 text-xs font-heading font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-acc-500 animate-pulse" />
            {industry.tag}
          </div>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl leading-tight mb-4">
            {content.heroHeadline}
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            {content.overview}
          </p>
        </div>
      </section>

      {/* Chemicals We Supply */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-2">
              Chemicals We Supply
            </p>
            <h2 className="font-heading font-black text-navy-900 text-3xl sm:text-4xl">
              Products for {industry.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.chemicals.map((group) => (
              <div key={group.category} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="w-9 h-9 rounded-lg bg-navy-950 flex items-center justify-center mb-4">
                  <Package size={16} className="text-acc-400" />
                </div>
                <h3 className="font-heading font-black text-navy-900 text-sm mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-xs leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-acc-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Orbitron */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-3">
                Why Orbitron
              </p>
              <h2 className="font-heading font-black text-white text-3xl sm:text-4xl mb-8">
                Why {industry.title} Companies Choose Us
              </h2>
              <ul className="space-y-4">
                {content.whyOrbitron.map((reason) => (
                  <li key={reason} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-acc-500/20 border border-acc-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={15} className="text-acc-400" />
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="font-heading font-black text-white text-xl mb-2">
                Ready to get started?
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Talk to our team about your {industry.title.toLowerCase()} chemical requirements — specs, pricing and delivery.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact#quote"
                  className="flex items-center justify-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-all w-full"
                >
                  Request a Quote <ArrowRight size={14} />
                </Link>
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-semibold text-sm px-6 py-3 rounded-full transition-all w-full"
                >
                  View All Products
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs text-white/40 font-heading">
                {["KEBS Compliant", "ISO Certified", "HACCP / GMP Available", "Full CoA on Request"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle2 size={11} className="text-acc-500" /> {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-acc-500 font-heading font-bold text-sm tracking-widest uppercase mb-2">
                  From Our Catalogue
                </p>
                <h2 className="font-heading font-black text-navy-900 text-2xl sm:text-3xl">
                  Key Products for {industry.title}
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1 text-sm text-acc-500 hover:text-acc-600 font-heading font-bold transition-colors"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-heading font-bold text-acc-500 uppercase tracking-widest mb-1">
                      {product.tagline}
                    </p>
                    <h3 className="font-heading font-black text-navy-900 text-base leading-snug mb-2">
                      {product.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs text-acc-500 font-heading font-bold group-hover:gap-2 transition-all">
                      View Product <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
