"use client";

import { useState } from "react";
import { contact, site } from "@/content/pages";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="hero-pattern-sm py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
              style={{ backgroundColor: "rgba(196,154,26,0.15)", color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current inline-block"></span>
              Same-day service available
            </div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Get in Touch
            </h1>
            <p className="text-blue-100 text-lg mb-8">{contact.subheading}</p>
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
              <span className="btn-outline inline-flex items-center px-5 py-4 rounded-lg text-sm opacity-80">
                Or fill in the form below
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact split layout */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: contact details */}
            <div>
              <h2
                className="text-2xl font-extrabold mb-6"
                style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
              >
                Contact Details
              </h2>

              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#FFF9EC" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>Location</p>
                    <p className="text-gray-600 text-sm">{contact.details.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#FFF9EC" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>Phone</p>
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-gray-600 text-sm hover:underline">
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#FFF9EC" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>Email</p>
                    <a href={`mailto:${site.email}`} className="text-gray-600 text-sm hover:underline">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#FFF9EC" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>Availability</p>
                    <p className="text-gray-600 text-sm">24/7 for emergencies · Mon–Sat 8am–6pm for general enquiries</p>
                  </div>
                </li>
              </ul>

              {/* Emergency callout box */}
              <div
                className="rounded-xl p-5 flex items-center gap-4"
                style={{ backgroundColor: "#1B3A5C" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(196,154,26,0.15)" }}
                >
                  <svg className="w-6 h-6" style={{ color: "#C49A1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
                    24/7 Emergency Line
                  </p>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-xl font-extrabold"
                    style={{ color: "#C49A1A", fontFamily: "var(--font-montserrat)" }}
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#F4F3F0" }}
            >
              <h2
                className="text-xl font-extrabold mb-6"
                style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
              >
                Send Us a Message
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-lg px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C49A1A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-lg px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C49A1A] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C49A1A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>
                    Service Needed
                  </label>
                  <select
                    className="w-full rounded-lg px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C49A1A] transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option>Emergency Plumbing</option>
                    <option>Boiler Installation</option>
                    <option>Boiler Repair / Service</option>
                    <option>General Plumbing</option>
                    <option>Drain Cleaning</option>
                    <option>Central Heating</option>
                    <option>Gas Safety Inspection</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the issue or what you need..."
                    className="w-full rounded-lg px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C49A1A] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-lg text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section style={{ backgroundColor: "#F4F3F0" }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-extrabold mb-2 text-center"
            style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
          >
            {contact.faq.heading}
          </h2>
          <p className="text-gray-500 text-center text-sm mb-8">{contact.faq.subheading}</p>
          <div className="space-y-3">
            {contact.faq.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-sm"
                  style={{ color: "#1B3A5C", fontFamily: "var(--font-montserrat)" }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {item.q}
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", color: "#C49A1A" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
