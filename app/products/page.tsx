import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DIVISIONS, PRODUCTS } from "@/lib/data";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Products | Industrial Chemicals, Lab Equipment & Food Ingredients — Orbitron Sciechem",
  description:
    "Browse Orbitron Sciechem's 1,000+ product catalog: industrial chemicals, food ingredients, pharmaceutical raw materials, laboratory equipment, petroleum solvents, and food & beverage inputs.",
};

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #2B75CC 0%, transparent 55%), radial-gradient(circle at 80% 50%, #F58220 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-acc-400 font-heading font-bold text-sm tracking-widest uppercase mb-4">
            Our Products
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
            1,000+ Products Across{" "}
            <span className="text-acc-400">Six Divisions</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Click any product to view full specifications, grades, packaging, and to request a quote.
          </p>
        </div>
      </section>

      {/* Division index nav */}
      <nav className="bg-navy-900 border-b border-white/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {DIVISIONS.map((div) => (
              <a
                key={div.id}
                href={`#${div.id}`}
                className="shrink-0 flex items-center gap-1.5 px-4 py-1.5 text-xs font-heading font-bold text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors whitespace-nowrap"
              >
                <Icon name={div.icon} size={13} className="opacity-80" /> {div.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Divisions */}
      {DIVISIONS.map((div, idx) => {
        const divProducts = PRODUCTS.filter((p) => p.divisionId === div.id);

        return (
          <section
            key={div.id}
            id={div.id}
            className={`py-20 scroll-mt-36 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Division header */}
              <div className="flex items-center gap-5 mb-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${div.color} flex items-center justify-center shadow-lg shrink-0`}
                >
                  <Icon name={div.icon} size={30} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-heading font-bold text-acc-500 uppercase tracking-widest mb-0.5">
                    Division {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-heading font-black text-navy-900 text-2xl sm:text-3xl">
                    {div.title}
                  </h2>
                </div>
              </div>

              {/* Product cards */}
              {divProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {divProducts.map((product) => {
                    const imgSrc = product.image.startsWith("photo-")
                      ? `https://images.unsplash.com/${product.image}?w=500&h=320&fit=crop&q=80`
                      : product.image;

                    return (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-acc-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* Image */}
                        <div className="relative h-44 overflow-hidden">
                          <Image
                            src={imgSrc}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />

                          {/* Grades badge */}
                          <div className="absolute bottom-3 left-3">
                            <span className={`text-[10px] font-heading font-black uppercase tracking-widest bg-gradient-to-r ${div.color} text-white px-2.5 py-1 rounded-full`}>
                              {product.grades[0].split(" ")[0]}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h3 className="font-heading font-black text-navy-900 text-sm leading-snug mb-1.5">
                            {product.name}
                          </h3>
                          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                            {product.tagline}
                          </p>

                          {/* Packaging preview */}
                          <p className="text-[10px] text-gray-400 font-medium mb-3">
                            {product.packaging[0]}
                            {product.packaging.length > 1 && ` +${product.packaging.length - 1} more`}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-1 text-xs font-heading font-bold text-acc-500 group-hover:gap-2 transition-all">
                              View Details <ArrowRight size={11} />
                            </span>
                            <span className="text-[10px] text-gray-400 font-mono">
                              {product.casNumber ?? ""}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                /* Fallback: text list for products not yet in PRODUCTS array */
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {div.products.map((name) => (
                    <div
                      key={name}
                      className="bg-white border border-gray-200 rounded-xl p-5 hover:border-acc-500/40 hover:shadow-md transition-all"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${div.color} mb-3`} />
                      <h3 className="font-heading font-bold text-navy-900 text-sm leading-snug mb-3">
                        {name}
                      </h3>
                      <Link
                        href="/contact#quote"
                        className="text-xs text-acc-500 font-semibold flex items-center gap-1 hover:underline"
                      >
                        Request Quote <ArrowRight size={10} />
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {/* Division CTA */}
              <div className="mt-8">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-800 text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  Get a Quote for {div.title} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl mb-5">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Our catalog covers 1,000+ products but we can source specialised items on request. Talk to our technical team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-acc-500 hover:bg-acc-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors"
          >
            Talk to an Expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
