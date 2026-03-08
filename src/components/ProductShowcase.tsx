"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  processTag: string;
  cupping: {
    acidity: number;
    body: number;
    sweetness: number;
    aroma: number;
    aftertaste: number;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "Kopi Drip # Mix Varian",
    description:
      "Kopi terbaik dari Solok Radjo yang dikemas langsung dengan Drip Kertas, praktis diseduh di rumah, kantor, atau dalam perjalanan.",
    image: "/images/product-drip.jpeg",
    slug: "kopi-drip-mix",
    processTag: "Drip / Mix",
    cupping: { acidity: 3, body: 3, sweetness: 4, aroma: 4, aftertaste: 3 },
  },
  {
    id: 2,
    name: "Tesora Roasted Beans Natural",
    description:
      "Biji kopi panggang berkualitas tinggi dengan proses natural yang menonjolkan profil rasa buah khas.",
    image: "/images/product-tesora.jpeg",
    slug: "tesora-natural",
    processTag: "Natural Process",
    cupping: { acidity: 4, body: 4, sweetness: 5, aroma: 5, aftertaste: 4 },
  },
  {
    id: 3,
    name: "Espresso Sumando Blend",
    description:
      "Racikan espresso spesial Sumando Blend dengan crema tebal dan bodi mantap untuk es kopi susu.",
    image: "/images/sumando.webp",
    slug: "espresso-sumando",
    processTag: "Espresso Blend",
    cupping: { acidity: 2, body: 5, sweetness: 3, aroma: 4, aftertaste: 4 },
  },
];

function CircularGauge({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 5) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-[#11281F]/10"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke={color}
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className="transition-all duration-[1500ms]"
          />
        </svg>

        <div className="absolute flex flex-col items-center">
          <span className="text-lg font-serif font-bold text-[#11281F]">
            {value}
          </span>
          <span className="text-[9px] text-[#11281F]/40">/5</span>
        </div>
      </div>

      <span className="text-[10px] font-bold uppercase tracking-widest text-[#11281F]/60">
        {label}
      </span>
    </div>
  );
}

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-16");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-48 pb-32 bg-[#F8F9F8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-32 scroll-animate opacity-0 translate-y-16 transition-all duration-1000">
          <span className="text-[#00704A] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            Signature Collection
          </span>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#11281F] mb-8">
            Katalog Produk
          </h2>

          <div className="w-24 h-1 bg-[#00704A] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col gap-40">
          {products.map((product, index) => {
            const reverse = index % 2 === 0;

            return (
              <article
                key={product.id}
                className={`scroll-animate opacity-0 translate-y-16 transition-all duration-1000 flex flex-col md:flex-row items-center gap-16 ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full max-w-[500px]">
                  <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-[2000ms]"
                    />
                  </div>
                </div>

                <div className="flex flex-col flex-1 max-w-xl">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00704A] mb-4">
                    {product.processTag}
                  </span>

                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#11281F] mb-6">
                    {product.name}
                  </h3>

                  <p className="text-lg text-[#11281F]/70 mb-10 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 mb-12">
                    <CircularGauge
                      label="Acidity"
                      value={product.cupping.acidity}
                      color="#D6512A"
                    />
                    <CircularGauge
                      label="Body"
                      value={product.cupping.body}
                      color="#5E3F29"
                    />
                    <CircularGauge
                      label="Sweetness"
                      value={product.cupping.sweetness}
                      color="#B26A3E"
                    />
                    <CircularGauge
                      label="Aroma"
                      value={product.cupping.aroma}
                      color="#00704A"
                    />
                    <CircularGauge
                      label="Aftertaste"
                      value={product.cupping.aftertaste}
                      color="#4A1D1F"
                    />
                  </div>

                  <Link
                    href={`/produk/${product.slug}`}
                    className="inline-flex items-center gap-4 font-bold uppercase text-xs tracking-[0.25em] group"
                  >
                    Explore Details
                    <div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-[#00704A] group-hover:text-white transition">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}