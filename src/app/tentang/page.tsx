import Image from "next/image";
import type React from "react";
import type { Metadata } from "next";
import { MapPin, Trophy, Globe, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Solok Radjo | Kisah Kopi dari Ranah Minang",
  description: "Dari ketinggian 1.500 mdpl di Nagari Aia Dingin, anak muda Minang membangun Solok Radjo hingga menembus pasar internasional.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-kopi-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
          Kisah Kami
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kopi-900 mb-6 leading-tight">
          Dari Ranah Minang <br className="hidden md:block" />
          Menembus Pasar Dunia
        </h1>
        <p className="text-lg md:text-xl text-kopi-800/70 max-w-2xl mx-auto leading-relaxed">
          Berawal dari inisiatif untuk membangun nagari, Solok Radjo lahir di ketinggian 1.500 mdpl untuk mengangkat derajat kopi Sumatera Barat.
        </p>
      </section>

      
      <section className="py-12 bg-kopi-50 border-y border-kopi-800/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-kopi-800/10">
            
            <div className="flex flex-col items-center text-center px-4">
              <MapPin className="w-8 h-8 text-kopi-accent mb-4" />
              <h3 className="text-3xl font-bold text-kopi-900 mb-2">1.500</h3>
              <p className="text-sm text-kopi-800/70">Meter di atas permukaan laut</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4">
              <Leaf className="w-8 h-8 text-kopi-accent mb-4" />
              <h3 className="text-3xl font-bold text-kopi-900 mb-2">18 Ton</h3>
              <p className="text-sm text-kopi-800/70">Produksi Arabika per tahun</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4">
              <Trophy className="w-8 h-8 text-kopi-accent mb-4" />
              <h3 className="text-3xl font-bold text-kopi-900 mb-2">&gt;85</h3>
              <p className="text-sm text-kopi-800/70">Skor Cupping (Q Grader)</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4">
              <Globe className="w-8 h-8 text-kopi-accent mb-4" />
              <h3 className="text-3xl font-bold text-kopi-900 mb-2">4</h3>
              <p className="text-sm text-kopi-800/70">Benua Tujuan Ekspor</p>
            </div>

          </div>
        </div>
      </section>

      
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
         
          <div className="space-y-6 text-lg text-kopi-800/80 leading-relaxed">
            <h2 className="text-3xl font-bold text-kopi-900 mb-8">
              Membangun Nagari Lewat Kopi
            </h2>
            <p>
              Daerah yang berada di Nagari Aia Dingin, Kecamatan Lembah Gumanti, Kabupaten Solok, Sumatera Barat itu menjelma jadi salah satu sentra kopi baru mengusung nama <strong className="text-kopi-900">Solok Radjo</strong>. Berjarak 60 kilometer dari Kota Padang, tempat ini kini dikenal sebagai penghasil kopi spesialti terkemuka.
            </p>
            <p>
              Awal mula kebangkitan kopi di daerah ini adalah buah inisiatif sejumlah anak muda yang memilih pulang kampung untuk membangun nagari, seperti Alfadrian Syah (Adi), Teuku Firmansyah, dan rekan-rekannya.
            </p>
            <p>
              Mereka menggagas pendirian <strong className="text-kopi-900">Koperasi Solok Radjo</strong> yang memfasilitasi pembelian kopi dari petani, membimbing budidaya secara profesional, melakukan pengolahan pascapanen yang tepat, hingga memasarkannya. Kini, hasil dari 168 ribu batang kopi varietas <em>Sigarar Utang</em> dan <em>Kartika</em> dikelola secara terpadu.
            </p>
          </div>

          
          <div className="relative aspect-[4/3] w-full bg-kopi-50 rounded-2xl overflow-hidden border border-kopi-800/10">
            
            <Image
              src="/images/pabrik.jpg" 
              alt="Aktivitas di Koperasi Solok Radjo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      
      <section className="py-24 bg-kopi-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CoffeeIcon className="w-12 h-12 text-kopi-accent mx-auto mb-8" />
          
          <blockquote className="text-2xl md:text-4xl font-medium leading-tight mb-10">
            &ldquo;Rasa paling menonjol dari Kopi Solok Radjo adalah lemon, cokelat, hingga rasa manis di ujung lidah sehingga untuk menikmatinya tak perlu dicampur gula.&rdquo;
          </blockquote>
          
          <div className="w-24 h-1 bg-kopi-accent mx-auto mb-10 rounded-full"></div>
          
          <div className="text-base md:text-lg text-kopi-50/80 space-y-6 max-w-3xl mx-auto leading-relaxed">
            <p>
              Karakter rasa ini diakui oleh para Q Grader sejak 2013. Solok Radjo terus berjaya dengan skor tinggi di Thailand (2014) dan dua tahun berturut-turut di Melbourne, Australia (2016-2017).
            </p>
            <p>
              Untuk menjaga standar ini, kami memiliki ahli budi daya tanaman dan tim kontrol ketat yang mengawasi setiap tahapan. Kini, Kopi Solok Radjo telah rutin diekspor ke Amerika Serikat, Jepang, Korea, dan Australia.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}


function CoffeeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>
    </svg>
  )
}