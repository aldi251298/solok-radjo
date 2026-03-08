import Image from "next/image";

export default function OriginStory() {
  return (
    <section className="py-32 bg-[#F8F9F8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#00704A]">
            Asal Kopi
          </span>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0A1812] mt-4">
            Dari Lereng Gunung Talang
          </h2>
        </div>

        {/* Large Image */}
        <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl mb-16">
          <Image
            src="/images/hero.png"
            alt="Perkebunan Kopi Solok Radjo"
            fill
            className="object-cover"
          />
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-lg text-[#0A1812]/70 leading-relaxed mb-6 text-justify">
            Di Nagari Aia Dingin, Kabupaten Solok, kopi tumbuh subur di lereng
            Gunung Talang pada ketinggian lebih dari 1.500 mdpl. Tanah vulkanik
            yang kaya mineral dan iklim pegunungan yang sejuk menciptakan
            karakter rasa yang kompleks dan elegan.
          </p>

          <p className="text-lg text-[#0A1812]/70 leading-relaxed mb-6 text-justify">
            Melalui kemitraan dengan ratusan petani lokal, Solok Radjo menjaga
            kualitas dari panen hingga proses roasting modern, memastikan setiap
            cangkir kopi menghadirkan cita rasa autentik dari Sumatera Barat.
          </p>

        </div>

        {/* Small Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-30">

          <div>
            <p className="text-3xl font-serif font-bold text-[#0A1812]">
              1500+
            </p>
            <p className="text-xs uppercase tracking-widest text-[#0A1812]/60">
              MDPL
            </p>
          </div>

          <div>
            <p className="text-3xl font-serif font-bold text-[#0A1812]">
              168K
            </p>
            <p className="text-xs uppercase tracking-widest text-[#0A1812]/60">
              Pohon Kopi
            </p>
          </div>

          <div>
            <p className="text-3xl font-serif font-bold text-[#0A1812]">
              85+
            </p>
            <p className="text-xs uppercase tracking-widest text-[#0A1812]/60">
              Cupping Score
            </p>
          </div>

          <div>
            <p className="text-3xl font-serif font-bold text-[#0A1812]">
              3
            </p>
            <p className="text-xs uppercase tracking-widest text-[#0A1812]/60">
              Negara Ekspor
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}