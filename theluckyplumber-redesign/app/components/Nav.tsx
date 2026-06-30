"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav } from "@/content/pages";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement bar */}
      <div style={{ backgroundColor: "#1B3A5C" }} className="px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {site.phone}
          </a>
          <div className="hidden sm:flex items-center gap-4 text-blue-100 text-xs">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
              24/7 Emergency Service
            </span>
            <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="The Lucky Plumber"
                width={100}
                height={39}
                className="object-contain"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-semibold rounded transition-colors"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      color: active ? "#C49A1A" : "#1B3A5C",
                      borderBottom: active ? "2px solid #C49A1A" : "2px solid transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="hidden sm:inline-flex btn-gold items-center gap-2 px-5 py-2.5 rounded text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <button
                className="md:hidden p-2 rounded text-navy hover:bg-gray-100 transition-colors"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? (
                  <svg className="w-6 h-6" fill="none" stroke="#1B3A5C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="#1B3A5C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-3 space-y-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded font-semibold text-sm transition-colors"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      color: active ? "#C49A1A" : "#1B3A5C",
                      backgroundColor: active ? "#FFF9EC" : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="block mt-2 btn-gold text-center px-4 py-3 rounded text-sm"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
