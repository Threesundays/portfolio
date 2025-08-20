"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link className="font-semibold tracking-tight" href="/">Anton Krat</Link>

        {/* Desktop menu */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
          <Link className="hover:text-white" href="/#works">Works</Link>
          <Link className="hover:text-white" href="/about">About</Link>
          <Link className="hover:text-white" href="/contact">Contact</Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/20"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="sm:hidden border-t border-white/10 bg-neutral-950/95">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-neutral-300">
            <Link onClick={() => setOpen(false)} className="hover:text-white" href="/#works">Works</Link>
            <Link onClick={() => setOpen(false)} className="hover:text-white" href="/about">About</Link>
            <Link onClick={() => setOpen(false)} className="hover:text-white" href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
