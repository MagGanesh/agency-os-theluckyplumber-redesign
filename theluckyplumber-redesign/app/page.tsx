import Link from "next/link";
import { home, site } from "@/content/pages";

const serviceIcons: Record<string, React.ReactNode> = {
  wrench: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  flame: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  ),
  home: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  droplet: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3C12 3 6 10 6 14a6 6 0 0012 0c0-4-6-11-6-11z" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-pattern relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: content */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 fade-up fade-up-1"
                style={{ backgroundColor: "rgba(196,154,26,0.15)", color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-current"></span>
                24/7 Emergency Service Available
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white mb-5 fade-up fade-up-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {home.hero.h1}
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg fade-up fade-up-3">
                {home.hero.h2}
              </p>
              <div className="flex flex-wrap gap-3 mb-10 fade-up fade-up-4">
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="btn-gold inline-flex items-center gap-2 px-7 py-4 rounded-lg text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {site.phone}
                </a>
                <Link
                  href="/contact"
                  className="btn-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg text-base"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>

            {/* Right: trust badges */}
            <div className="flex flex-col gap-4 lg:items-end fade-up fade-up-3">
              <div
                className="rounded-xl p-6 w-full lg:max-w-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(196,154,26,0.25)" }}
              >
                <h3 className="font-bold text-white mb-4 text-sm tracking-wide uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Why Choose Us
                </h3>
                <ul className="space-y-3 text-sm text-blue-100">
                  {[
                    "Gas Safe Registered Engineer",
                    "20+ Years of Experience",
                    "Available 24/7 for Emergencies",
                    "All Boiler Makes Serviced",
                    "South East London Based",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-xl px-6 py-4 w-full lg:max-w-sm flex items-center justify-around gap-4"
                style={{ backgroundColor: "rgba(196,154,26,0.12)", border: "1px solid rgba(196,154,26,0.35)" }}
              >
                <div className="text-center">
                  <p className="font-extrabold text-2xl" style={{ color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}>24/7</p>
                  <p className="text-xs text-blue-100">Emergency</p>
                </div>
                <div className="w-px h-10 bg-blue-700"></div>
                <div className="text-center">
                  <p className="font-extrabold text-2xl" style={{ color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}>20+</p>
                  <p className="text-xs text-blue-100">Years Exp.</p>
                </div>
                <div className="w-px h-10 bg-blue-700"></div>
                <div className="text-center">
                  <p className="font-extrabold text-2xl" style={{ color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}>100%</p>
                  <p className="text-xs text-blue-100">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar — boiler brands */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400" style={{ fontFamily: "var(--font-montserrat)" }}>
              Brands We Service
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
            <div
              className="flex items-center gap-2 px-4 py-2 rounded border"
              style={{ borderColor: "#C49A1A", backgroundColor: "#FFF9EC" }}
            >
              <svg className="w-4 h-4" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs font-bold" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>Gas Safe Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ backgroundColor: "#F4F3F0" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-3"
              style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
            >
              Plumbing Services in SE London &amp;{" "}
              <span style={{ color: "#C49A1A" }}>surrounding areas</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{home.cta}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="service-card bg-white rounded-xl p-6 border border-transparent flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFF9EC", color: "#C49A1A" }}
                >
                  {serviceIcons[svc.icon]}
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{svc.body}</p>
                <span
                  className="mt-4 text-xs font-bold inline-flex items-center gap-1"
                  style={{ color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — stats */}
      <section style={{ backgroundColor: "#1B3A5C" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "20+", label: "Years Experience", desc: "Two decades of trusted plumbing expertise across South East London." },
              { stat: "24/7", label: "Emergency Response", desc: "Round-the-clock availability for urgent plumbing and boiler emergencies." },
              { stat: "100%", label: "Client Satisfaction", desc: "We don't leave until the job is done right and you're happy." },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center">
                <span
                  className="text-5xl font-extrabold mb-2"
                  style={{ color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}
                >
                  {item.stat}
                </span>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.label}
                </h3>
                <p className="text-blue-200 text-sm max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section style={{ backgroundColor: "#0F2640" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Serving South East London
          </h2>
          <p className="text-blue-200 mb-8 text-sm">We cover a wide area across SE London — call to confirm we serve your postcode.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {home.areas.map((area) => (
              <span
                key={area}
                className="area-pill px-4 py-2 rounded-full text-sm font-semibold text-blue-100 border border-blue-700 cursor-default"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-extrabold mb-3"
            style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-gray-400 mb-12 text-sm">Trusted Plumbing Services with Customer Satisfaction</p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Sarah, Dulwich", text: "Fast, reliable, and fair pricing. Ken was here within an hour for our emergency boiler breakdown. Highly recommended." },
              { name: "James, Lambeth", text: "Excellent service from start to finish. Diagnosed the issue quickly and had everything fixed the same day." },
              { name: "Emma, Croydon", text: "Professional and tidy. The boiler installation was done perfectly and he explained everything clearly. Five stars." },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-xl p-6 text-left"
                style={{ backgroundColor: "#F4F3F0" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" style={{ color: "#C49A1A" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic mb-3 leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-xs" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ backgroundColor: "#1B3A5C" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Need a Plumber Today?
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
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
