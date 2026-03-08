"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Katalog", href: "/produk" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header className="sticky top-0 z-50">

      {/* NAVBAR */}
      <div
        className={`
        transition-all duration-500
        ${
          isScrolled
            ? "backdrop-blur-xl bg-[#0C1F19]/85 border-b border-white/10 shadow-xl"
            : "bg-gradient-to-b from-[#081712] to-[#0C1F19]"
        }
      `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex items-center justify-between h-[88px]">

            {/* LOGO */}
            <Link href="/" className="group text-left">

              <div className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-[#F3EEE5]">
                Solok
                <span className="text-[#00704A] group-hover:text-[#1ED760] transition-colors">
                  Radjo
                </span>
              </div>

              <div className="text-[10px] tracking-[0.35em] text-[#CFC7B6] uppercase mt-1">
                Specialty Coffee
              </div>

            </Link>

            {/* MENU DESKTOP */}
            <nav className="hidden md:flex items-center gap-12 text-sm uppercase tracking-widest font-medium">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[#E9E4D8]/80 hover:text-white transition group"
                >
                  {link.name}

                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#00704A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

            </nav>

            {/* RIGHT ICON */}
            <div className="flex items-center gap-5 text-[#E9E4D8]">

              <Link
                href="/keranjang"
                className="relative p-2 rounded-full hover:bg-white/10 transition"
              >
                <ShoppingBag size={20} />

                <span className="absolute -top-1 -right-1 text-[10px] bg-[#00704A] w-4 h-4 flex items-center justify-center rounded-full text-white">
                  0
                </span>
              </Link>

              {/* MOBILE MENU */}
              <button
                className="md:hidden text-[#F3EEE5]"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
        md:hidden transition-all duration-400
        ${mobileOpen ? "max-h-[400px]" : "max-h-0 overflow-hidden"}
      `}
      >
        <div className="bg-[#0C1F19] px-6 py-6 space-y-6 text-[#F3EEE5]">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg font-serif"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>

    </header>
  );
}