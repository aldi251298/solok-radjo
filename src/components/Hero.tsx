import Image from "next/image";
import Link from "next/link"

export default function Hero() {
  return (
    
    <section className="relative w-full pt-24 pb-32 md:pt-32 md:pb-48 flex flex-col justify-center z-10">
      
      
      <div className="absolute inset-0 z-0 bg-[#0A1812] overflow-hidden">
        <Image
          src="/images/hero.png" 
          alt="Perkebunan Kopi Solok Radjo"
          fill
          priority
          className="object-cover object-center opacity-60 mix-blend-overlay" 
          sizes="100vw"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1812]/95 via-[#0A2812]/70 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-3xl"> 
          
          <span className="inline-block py-1 px-3 mb-6 border border-[#EADDCB]/30 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-[#EADDCB]">
            Kopi Spesialti Sumatera Barat
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 -leading-[1.05] tracking-tight">
            Meracik Mahakarya <br className="hidden md:block" />
            Dalam Tiap Cangkir, <br className="hidden md:block" />
            
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            Dari pelukan kabut Gunung Talang ke meja Anda. Sebuah simfoni rasa otentik yang diproses dengan presisi, hadir untuk membangunkan jiwa di setiap fajar.
          </p>
          
         <Link
      href="https://wa.me/6281276919553"
      target="_blank"
      className="inline-flex items-center mt-8 gap-2 px-7 py-3.5
bg-[#1F3D2B] text-white font-semibold
rounded-xl shadow-lg
hover:bg-emerald-700 hover:shadow-xl
active:scale-95 transition-all duration-200"
    >
      Pesan Sekarang
    </Link>

        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Box Statistik */}
          <div className="bg-[#EADDCB] text-[#0A1812] py-10 px-8 md:px-16 shadow-2xl rounded-sm border border-[#0A1812]/5">
  
  <div className="flex flex-wrap justify-center items-center divide-x divide-[#0A1812]/20">
    
    <div className="px-10 text-center">
      <p className="text-4xl md:text-5xl font-serif font-bold">50+</p>
      <p className="text-xs mt-2 font-bold uppercase tracking-[0.2em] opacity-70">
        Varian Kopi
      </p>
    </div>

    <div className="px-10 text-center">
      <p className="text-4xl md:text-5xl font-serif font-bold">18T</p>
      <p className="text-xs mt-2 font-bold uppercase tracking-[0.2em] opacity-70">
        Kapasitas Produksi
      </p>
    </div>

    <div className="px-10 text-center">
      <p className="text-4xl md:text-5xl font-serif font-bold">&gt;85</p>
      <p className="text-xs mt-2 font-bold uppercase tracking-[0.2em] opacity-70">
        Skor Cupping
      </p>
    </div>

  </div>

</div>

        </div>
      </div>

    </section>
  );
}