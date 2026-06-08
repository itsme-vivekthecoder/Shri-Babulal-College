"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white font-bold text-xl shadow-lg">
            S
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              SBLM
            </h1>

            <p className="text-xs text-slate-500">
              Digital Campus
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-700 hover:text-blue-900 transition font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Button */}

        <div className="hidden lg:block">
          <button className="rounded-full bg-blue-900 px-6 py-3 text-white font-semibold shadow-lg transition hover:scale-105 hover:bg-blue-800">
            Admissions Open
          </button>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          <Menu size={30} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <button className="mt-2 rounded-full bg-blue-900 py-3 text-white font-semibold">
              Admissions Open
            </button>
          </div>
        </div>
      )}
    </header>
  );
}