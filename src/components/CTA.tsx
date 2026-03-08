import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 bg-[#0A1812] text-white">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          Siap Menikmati Kopi <br />
          Terbaik dari Solok?
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Jelajahi berbagai koleksi kopi spesialti dari Solok Radjo yang
          telah dinikmati oleh pecinta kopi di berbagai negara.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <Link
            href="/produk"
            className="px-8 py-4 bg-[#00704A] rounded-xl font-semibold hover:bg-[#0a8a5c] transition"
          >
            Lihat Semua Produk
          </Link>

          <Link
            href="https://wa.me/6281276919553"
            target="_blank"
            className="px-8 py-4 border border-white/40 rounded-xl font-semibold hover:bg-white hover:text-[#0A1812] transition"
          >
            Pesan via WhatsApp
          </Link>

        </div>

      </div>
    </section>
  );
}