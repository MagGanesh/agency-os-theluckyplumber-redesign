import Link from "next/link";
import Image from "next/image";
import { site, nav, home } from "@/content/pages";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2640" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="The Lucky Plumber" width={44} height={44} className="object-contain" />
              <span className="font-extrabold text-lg leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                The Lucky<br />Plumber
              </span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-3">{site.footerCopy}</p>
            <p className="text-blue-200 text-sm leading-relaxed">{site.expertise}</p>
            <p className="text-xs text-blue-300 mt-3 italic" style={{ fontFamily: "var(--font-montserrat)" }}>
              {site.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-widest text-blue-200 uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-widest text-blue-200 uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>
              Services
            </h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Emergency Callout</li>
              <li>Plumbing Repairs</li>
              <li>Boiler Installation</li>
              <li>Boiler Servicing</li>
              <li>Central Heating</li>
              <li>Drain Cleaning</li>
              <li>Gas Safety Inspections</li>
              <li>Power Flushing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-widest text-blue-200 uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Serving South East London
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-2 hover:text-white transition-colors" style={{ overflowWrap: "anywhere" }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                Available 24/7 for emergencies
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} The Lucky Plumber. All rights reserved.</p>
          <p>Gas Safe Registered · South East London</p>
        </div>
      </div>
    </footer>
  );
}
