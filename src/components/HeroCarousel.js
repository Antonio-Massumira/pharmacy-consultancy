"use client";

import Image from "next/image";

export default function HeroCarousel() {
  return (
    <section className="bg-[#f9fafb]">
      <div className="container max-w-[90%] mx-auto px-3 py-16 flex flex-col md:flex-row items-center gap-4 xl:gap-20">
        {/* Texto à esquerda */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start text-left">
          <h1 className="text-[#2A9D8F] text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight drop-shadow-sm">
            Bem-vindo à <br className="hidden md:block" />
            Plataforma de Consultoria Farmacêutica
          </h1>
          <p className="text-[#506D84] mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            Consultas online para uso correto de medicamentos,{" "}
            <br className="hidden md:block" />
            reconciliação de receitas e apoio à abertura de farmácias.
          </p>
          <button
            className="mt-6 bg-gradient-to-r from-[#2A9D8F] to-[#21867A] text-white font-semibold px-6 py-3 rounded-xl shadow-xl 
                   hover:scale-105 hover:brightness-110 transition-all duration-300 flex items-center gap-2"
          >
            Saber Mais
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="w-full md:w-[50%] aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/Arubeia_hero.jpg"
            alt="Imagem de farmácia"
            fill
            priority
            className="object-cover rounded-2xl filter brightness-95 contrast-105 saturate-110"
            objectPosition="top"
          />
          <div className="absolute inset-0 bg-[#2A9D8F]/10 rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
