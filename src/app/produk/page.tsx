import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Zap, Globe, Leaf } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog Eksklusif | Solok Radjo",
  description: "Jelajahi 8 koleksi kopi spesialti terbaik dari Nagari Aia Dingin yang telah menembus pasar internasional.",
};

const products = [
  {
    id: 1,
    name: "Kopi Drip # Mix Varian",
    tag: "Practical",
    description: "Kurasi lima profil rasa berbeda dalam satu kemasan praktis. Solusi cerdas untuk menikmati kopi spesialti di tengah kesibukan mobilitas Anda tanpa mengurangi kualitas ekstraksi.",
    image: "/images/product-drip.jpeg",
    slug: "kopi-drip-mix",
  },
  {
    id: 2,
    name: "Tesora Roasted Natural",
    tag: "Exotic",
    description: "Eksplorasi rasa buah tropis yang intens hasil dari penjemuran ceri utuh secara perlahan. Menghasilkan kemanisan yang kompleks dengan bodi yang lembut dan aromatik.",
    image: "/images/product-tesora.jpeg",
    slug: "tesora-natural",
  },
  {
    id: 3,
    name: "Espresso Sumando Blend",
    tag: "Bold",
    description: "Perpaduan biji pilihan yang dirancang untuk menghasilkan crema tebal dan bodi yang mantap. Sangat ideal sebagai pondasi menu espresso berbasis susu yang gurih.",
    image: "/images/sumando.webp",
    slug: "espresso-sumando",
  },
  {
    id: 4,
    name: "Espresso Sumandan Blend",
    tag: "Smooth",
    description: "Menawarkan keseimbangan rasa yang sempurna dengan tingkat keasaman yang rendah. Pilihan tepat bagi penikmat kopi yang mencari kelembutan dalam setiap tegukan black coffee.",
    image: "/images/product-sumandan.jpeg",
    slug: "espresso-sumandan",
  },
  {
    id: 5,
    name: "Limau Cirago Honey",
    tag: "Signature",
    description: "Kopi ikonik dengan sentuhan rasa jeruk limau dan hazelnut. Proses honey mempertahankan lendir manis alami yang meresap ke dalam biji saat penjemuran di ketinggian 1.500 mdpl.",
    image: "/images/honey.jpeg",
    slug: "limau-cirago-honey",
  },
  {
    id: 6,
    name: "Arabica Solok Natural",
    tag: "Premium",
    description: "Produk unggulan dengan skor cupping di atas 85. Menampilkan karakter winey yang elegan dan bodi yang kuat, mencerminkan kualitas terbaik dari petani binaan Koperasi Solok Radjo.",
    image: "/images/natural.jpeg",
    slug: "arabica-natural",
  },
  {
    id: 7,
    name: "Roasted Bean Semi Wash",
    tag: "Traditional",
    description: "Mengangkat karakter earthy khas Sumatera dengan kebersihan rasa yang terjaga. Melalui kontrol kualitas ketat, varian ini menawarkan bodi yang sangat tebal dan intens.",
    image: "/images/semi wash.jpeg",
    slug: "roasted-semi-wash",
  },
  {
    id: 8,
    name: "Roasted Bean Full Wash",
    tag: "Clean",
    description: "Kejernihan rasa menjadi nilai utama. Melalui proses cuci bersih yang sempurna, kopi ini menghasilkan keasaman cerah dan floral yang menyegarkan bagi indra perasa Anda.",
    image: "/images/full wash.jpeg",
    slug: "roasted-full-wash",
  },
];

export default function CatalogPage() {
  return (
    <div className="bg-[#F8F9F8] min-h-screen pb-32">
    
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 border-b-2 border-[#11281F] pb-12">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#11281F] tracking-tighter">
            Our <span className="italic font-normal">Beans.</span>
          </h1>
          <div className="max-w-md text-right">
            <p className="text-[#11281F]/70 text-lg leading-relaxed font-medium">
              Dari 168 ribu batang kopi di Nagari Aia Dingin, kami menghadirkan 8 profil rasa autentik yang telah diakui dunia.
            </p>
          </div>
        </div>
      </section>

    
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-8">
          {products.map((product, index) => {
            
            const colSpan = (index % 3 === 0) ? "md:col-span-7" : "md:col-span-5";

            return (
              <div key={product.id} className={`${colSpan} group flex flex-col`}>
                <Link href={`/produk/${product.slug}`} className="block relative overflow-hidden rounded-2xl bg-white aspect-[16/10] mb-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#00704A] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                </Link>

                <div className="flex justify-between items-start gap-4">
                  <div className="max-w-sm">
                    <h2 className="text-3xl font-serif font-bold text-[#11281F] mb-4 group-hover:text-[#00704A] transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-[#11281F]/60 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <Link href={`/produk/${product.slug}`} className="w-12 h-12 rounded-full border border-[#11281F]/20 flex items-center justify-center hover:bg-[#00704A] hover:text-white transition-all">
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      
      <section className="mt-40 border-y border-[#11281F]/10 py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <Award className="text-[#00704A] w-8 h-8" />
            <h4 className="font-bold text-[#11281F] text-sm uppercase tracking-widest">Skor 85+</h4>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Zap className="text-[#00704A] w-8 h-8" />
            <h4 className="font-bold text-[#11281F] text-sm uppercase tracking-widest">1.500 MDPL</h4>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Globe className="text-[#00704A] w-8 h-8" />
            <h4 className="font-bold text-[#11281F] text-sm uppercase tracking-widest">Ekspor AS & Jepang</h4>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Leaf className="text-[#00704A] w-8 h-8" />
            <h4 className="font-bold text-[#11281F] text-sm uppercase tracking-widest">Petani Binaan</h4>
          </div>
        </div>
      </section>
    </div>
  );
}