"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Global Reach", href: "#global-reach" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-md border-b border-light-dusty-blue/30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-dusty-blue flex items-center justify-center">
            <span className="text-white font-bold text-sm">IN</span>
          </div>
          <span className="text-xl font-bold text-slate-dark tracking-tight">
            Infonova <span className="text-dusty-blue">Tech</span> SRL
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-medium hover:text-dusty-blue transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-lg bg-dusty-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-light-dusty-blue hover:text-slate-dark transition-all"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-dark"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-offwhite border-t border-light-dusty-blue/30 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-slate-medium hover:text-dusty-blue transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block w-full text-center rounded-lg bg-dusty-blue px-5 py-2.5 text-sm font-semibold text-white"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
