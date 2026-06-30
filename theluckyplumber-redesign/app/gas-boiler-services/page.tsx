import Link from "next/link";
import { gasBoilerServices, home, site } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: gasBoilerServices.title,
};

const serviceIcons = [
  <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg key="5" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
  <svg key="6" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="7" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
];

export default function GasBoilerServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-pattern-sm py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
              style={{ backgroundColor: "rgba(196,154,26,0.15)", color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current inline-block"></span>
              Gas Safe Registered
            </div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {gasBoilerServices.hero.h1}
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed mb-8">
              {gasBoilerServices.hero.subheading}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="btn-gold inline-flex items-center gap-2 px-7 py-4 rounded-lg text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {site.phone}
              </a>
              <Link href="/contact" className="btn-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg text-base">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Boiler brand bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400" style={{ fontFamily: "var(--font-montserrat)" }}>
              We Service All Makes
            </p>
            {home.boilerBrands.map((brand) => (
              <span
                key={brand}
                className="font-bold text-sm px-4 py-2 rounded"
                style={{ color: "#1B3A5C", backgroundColor: "#F4F3F0", fontFamily: "var(--font-montserrat)" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ backgroundColor: "#F4F3F0" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-2"
              style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
            >
              The Lucky Plumber Services
            </h2>
            <p className="text-gray-500 text-sm">{gasBoilerServices.tagline}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gasBoilerServices.services.map((svc, i) => (
              <div
                key={svc.title}
                className="service-card bg-white rounded-xl p-6 flex flex-col items-start border border-transparent"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFF9EC", color: "#C49A1A" }}
                >
                  {serviceIcons[i]}
                </div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
                >
                  {svc.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {gasBoilerServices.trust.map((t) => (
              <div
                key={t}
                className="rounded-xl p-6 flex items-start gap-3"
                style={{ backgroundColor: "#F4F3F0" }}
              >
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm font-medium" style={{ color: "#1B3A5C" }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section style={{ backgroundColor: "#0F2640" }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl font-extrabold text-white mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Areas We Serve In South East London
          </h2>
          <p className="text-blue-200 mb-6 text-sm">Gas boiler services across all major SE London boroughs.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {gasBoilerServices.areas.map((area) => (
              <span
                key={area}
                className="area-pill px-4 py-2 rounded-full text-sm font-semibold text-blue-100 border border-blue-700"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ backgroundColor: "#1B3A5C" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {gasBoilerServices.cta}
          </h2>
          <p className="text-blue-200 mb-8">Available 24 hours a day, 7 days a week.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now — {site.phone}
            </a>
            <Link href="/contact" className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
