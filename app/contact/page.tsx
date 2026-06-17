import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Orbitron Sciechem | Get a Quote · Nairobi, Kenya",
  description:
    "Contact Orbitron Sciechem Limited for product quotes, technical support, or partnership enquiries. Serving East Africa from Nairobi.",
};

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    note: "Mon–Fri 8am–6pm · Sat 9am–2pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: "We respond within 2 business hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: CONTACT.address,
    href: null,
    note: "Warehouse visits by appointment",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: CONTACT.hours.weekdays,
    href: null,
    note: CONTACT.hours.saturday,
  },
];

const INDUSTRIES = [
  "Manufacturing",
  "Food & Beverage",
  "Pharmaceuticals",
  "Water Treatment",
  "Petroleum & Energy",
  "Research / Laboratory",
  "Agriculture",
  "Government / Institution",
  "Other",
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 60%, #F58220 0%, transparent 50%), radial-gradient(circle at 80% 30%, #2B75CC 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-acc-400 font-heading font-bold text-sm tracking-widest uppercase mb-4">
            Contact Us
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
            Let&apos;s Talk{" "}
            <span className="text-acc-400">Business</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto leading-relaxed">
            Have a product inquiry, need a quote, or want to discuss a
            partnership? Our specialists are ready to help.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: info + contact cards */}
            <div className="lg:col-span-2 space-y-5">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, note }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-gray-100 flex gap-4 items-start shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-acc-400" />
                  </div>
                  <div>
                    <p className="text-xs font-heading font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-semibold text-navy-900 hover:text-acc-500 transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-navy-900 text-sm">
                        {value}
                      </p>
                    )}
                    {note && (
                      <p className="text-xs text-gray-400 mt-0.5">{note}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/254742651823"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl p-5 transition-colors shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-xl">
                  💬
                </div>
                <div>
                  <p className="font-heading font-bold text-sm">Chat on WhatsApp</p>
                  <p className="text-white/70 text-xs mt-0.5">
                    Quick responses · 24/7 availability
                  </p>
                </div>
              </a>

              {/* Countries served */}
              <div className="bg-navy-950 rounded-2xl p-5">
                <p className="text-xs font-heading font-bold text-acc-400 uppercase tracking-widest mb-3">
                  Countries Served
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { code: "KE", name: "Kenya" },
                    { code: "UG", name: "Uganda" },
                    { code: "TZ", name: "Tanzania" },
                    { code: "RW", name: "Rwanda" },
                    { code: "ET", name: "Ethiopia" },
                    { code: "SS", name: "South Sudan" },
                  ].map((c) => (
                    <span
                      key={c.code}
                      className="bg-white/10 text-white/80 text-xs font-heading font-semibold rounded-lg px-2.5 py-1"
                    >
                      {c.code} · {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div
              id="quote"
              className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="font-heading font-black text-navy-900 text-2xl mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-7">
                Fill in the details below and our team will get back to you
                within 2 business hours.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-acc-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Kamau"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Industries Ltd."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-acc-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Industry
                  </label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-all bg-white">
                    <option value="">Select your industry</option>
                    {INDUSTRIES.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Message / Product Inquiry{" "}
                    <span className="text-acc-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe the products you need, quantities, specifications, or any questions you have..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-950 hover:bg-navy-800 text-white font-heading font-bold py-4 rounded-full text-sm transition-colors shadow-lg"
                >
                  Send Message — We Respond Within 2 Hours
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" className="underline hover:text-gray-600">
                    privacy policy
                  </a>
                  . We never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
