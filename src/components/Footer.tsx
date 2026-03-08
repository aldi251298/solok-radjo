"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1812] text-[#EADDCB]">

      {/* subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00704A] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">
              Solok<span className="text-[#00704A]">Radjo</span>
            </h2>

            <p className="text-sm text-[#EADDCB]/70 leading-relaxed mb-6">
              Kopi spesialti dari lereng Gunung Talang, Sumatera Barat.
              Diproses dengan standar internasional untuk menghadirkan
              pengalaman kopi yang autentik di setiap cangkir.
            </p>

            <Link
              href="https://wa.me/6281276919553"
              target="_blank"
              className="inline-block bg-[#00704A] hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300"
            >
              Pesan via WhatsApp
            </Link>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6 text-[#EADDCB]/60">
              Navigasi
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00704A] transition-colors"
                >
                  Beranda
                </Link>
              </li>

              <li>
                <Link
                  href="/produk"
                  className="hover:text-[#00704A] transition-colors"
                >
                  Katalog Produk
                </Link>
              </li>

              <li>
                <Link
                  href="/tentang"
                  className="hover:text-[#00704A] transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>

              <li>
                <Link
                  href="/kontak"
                  className="hover:text-[#00704A] transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6 text-[#EADDCB]/60">
              Kontak
            </h3>

            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-[#00704A]" />
                <span className="text-[#EADDCB]/70">
                  Aie Dingin, Kec. Lembah Gumanti, Kabupaten Solok, Sumatera Barat 27371
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#00704A]" />
                <span className="text-[#EADDCB]/70">
                  +62 812 7691 9553
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#00704A]" />
                <span className="text-[#EADDCB]/70">
                  solokradjo@gmail.com
                </span>
              </li>

            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6 text-[#EADDCB]/60">
              Ikuti Kami
            </h3>

            <p className="text-sm text-[#EADDCB]/70 mb-6">
              Ikuti perjalanan kopi kami dan temukan cerita di balik
              setiap biji kopi Solok Radjo.
            </p>

            <div className="flex items-center gap-4">

              <Link
                href="https://www.instagram.com/solokradjo/"
                className="w-10 h-10 rounded-full border border-[#EADDCB]/20 flex items-center justify-center hover:bg-[#00704A] hover:border-[#00704A] transition-all duration-300"
              >
                <Instagram size={18} />
              </Link>

              <Link
                href="https://web.facebook.com/profile.php?id=100083144568060"
                className="w-10 h-10 rounded-full border border-[#EADDCB]/20 flex items-center justify-center hover:bg-[#00704A] hover:border-[#00704A] transition-all duration-300"
              >
                <Facebook size={18} />
              </Link>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 h-[1px] w-full bg-[#EADDCB]/10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#EADDCB]/50 gap-4">

          <p>
            © {new Date().getFullYear()} Solok Radjo Coffee. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#00704A] transition-colors">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-[#00704A] transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}