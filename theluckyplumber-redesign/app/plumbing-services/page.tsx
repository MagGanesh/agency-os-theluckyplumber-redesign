import Link from "next/link";
import { plumbingServices, site } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: plumbingServices.title,
};

export default function PlumbingServicesPage() {
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
              Available 24/7
            </div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {plumbingServices.hero.h1}
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
              {plumbingServices.hero.subheading}
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

      {/* Availability */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl font-extrabold mb-4"
                style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
              >
                {plumbingServices.availability.h2}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {plumbingServices.availability.body}
              </p>
              <div
                className="rounded-xl p-5 flex items-start gap-4"
                style={{ backgroundColor: "#F4F3F0" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#FFF9EC" }}
                >
                  <svg className="w-6 h-6" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>Emergency? Call now</p>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-2xl font-extrabold"
                    style={{ color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: "#1B3A5C" }}
            >
              <p
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {plumbingServices.trust}
              </p>
              <p className="text-blue-200 text-sm">We bring 30 years of expertise in residential plumbing services and repairs.</p>
              <div className="mt-4 flex items-center gap-2">
                <svg className="w-5 h-5" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>Gas Safe Registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services checklist */}
      <section style={{ backgroundColor: "#F4F3F0" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-8 text-center"
            style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
          >
            Our Plumbing Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {plumbingServices.services.map((svc) => (
              <div
                key={svc}
                className="bg-white rounded-lg px-5 py-4 flex items-center gap-3 shadow-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-sm" style={{ color: "#1C1C1E" }}>{svc}</span>
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
          <p className="text-blue-200 mb-6 text-sm">Plumbing services across all major SE London boroughs.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {plumbingServices.areas.map((area) => (
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
            {plumbingServices.cta}
          </h2>
          <p className="text-blue-200 mb-8">Call us any time — day or night.</p>
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
