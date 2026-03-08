import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#F8F9F8]">

      {/* HERO */}
      <section className="pt-32 pb-20 text-center">
        <span className="text-[#00704A] text-xs font-bold tracking-[0.3em] uppercase">
          Hubungi Kami
        </span>

        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#0A1812] mt-6">
          Mari Berbicara Tentang Kopi
        </h1>

        <p className="max-w-xl mx-auto text-[#0A1812]/70 mt-6 text-lg">
          Punya pertanyaan tentang produk kami atau ingin bekerja sama?
          Tim Solok Radjo siap membantu Anda.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Lokasi */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#0A1812]/5 text-center hover:shadow-xl transition">

            <div className="w-14 h-14 mx-auto rounded-full bg-[#00704A]/10 flex items-center justify-center mb-6">
              <MapPin className="text-[#00704A]" />
            </div>

            <h3 className="font-serif text-xl font-bold mb-3 text-[#0A1812]">
              Lokasi
            </h3>

            <p className="text-[#0A1812]/70 text-sm leading-relaxed">
              Solok, Sumatera Barat  
              Indonesia
            </p>

          </div>

          {/* Telepon */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#0A1812]/5 text-center hover:shadow-xl transition">

            <div className="w-14 h-14 mx-auto rounded-full bg-[#00704A]/10 flex items-center justify-center mb-6">
              <Phone className="text-[#00704A]" />
            </div>

            <h3 className="font-serif text-xl font-bold mb-3 text-[#0A1812]">
              Telepon
            </h3>

            <p className="text-[#0A1812]/70 text-sm">
              +62 812 7691 9553
            </p>

          </div>

          {/* Email */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#0A1812]/5 text-center hover:shadow-xl transition">

            <div className="w-14 h-14 mx-auto rounded-full bg-[#00704A]/10 flex items-center justify-center mb-6">
              <Mail className="text-[#00704A]" />
            </div>

            <h3 className="font-serif text-xl font-bold mb-3 text-[#0A1812]">
              Email
            </h3>

            <p className="text-[#0A1812]/70 text-sm">
              solokradjo@gmail.com
            </p>

          </div>

        </div>
      </section>

      {/* FORM */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-32">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#0A1812] mb-6">
              Kirim Pesan
            </h2>

            <p className="text-[#0A1812]/70 mb-8 leading-relaxed">
              Jika Anda memiliki pertanyaan tentang produk, kerja sama,
              atau ingin memesan dalam jumlah besar, silakan kirim pesan
              melalui formulir ini.
            </p>

            <Link
              href="https://wa.me/6281276919553"
              target="_blank"
              className="inline-block bg-[#00704A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
            >
              Chat WhatsApp
            </Link>
          </div>

          {/* Form */}
          <form className="bg-white p-10 rounded-2xl shadow-sm border border-[#0A1812]/5 space-y-6">

            <div>
              <label className="text-sm font-medium text-[#0A1812]">
                Nama
              </label>
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-[#0A1812]/10 focus:outline-none focus:ring-2 focus:ring-[#00704A]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#0A1812]">
                Email
              </label>
              <input
                type="email"
                placeholder="email@contoh.com"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-[#0A1812]/10 focus:outline-none focus:ring-2 focus:ring-[#00704A]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#0A1812]">
                Pesan
              </label>
              <textarea
                rows={4}
                placeholder="Tulis pesan Anda..."
                className="w-full mt-2 px-4 py-3 rounded-lg border border-[#0A1812]/10 focus:outline-none focus:ring-2 focus:ring-[#00704A]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00704A] text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
            >
              Kirim Pesan
            </button>

          </form>

        </div>

      </section>

      {/* MAP */}
      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="rounded-3xl overflow-hidden shadow-lg border border-[#0A1812]/10">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.048869359268!2d100.78389647372654!3d-1.1252746354687397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2b574f4b6b2067%3A0x82bd73109bd9e5d7!2sSolok%20Radjo%20Edu%20Farm!5e0!3m2!1sid!2sid!4v1772953922380!5m2!1sid!2sid" 
              width="100%"
              height="450"
              loading="lazy"
            />

          </div>

        </div>

      </section>

    </main>
  );
}