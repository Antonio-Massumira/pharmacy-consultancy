'use client';

import Image from "next/image";

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Imagem de fundo */}
      <Image
        src="/images/farmacia1.jpg"
        alt="Imagem de farmácia"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
        priority
      />

      {/* Texto por cima da imagem */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Bem-vindo à Plataforma de Consultoria Farmacêutica
        </h1>
        <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
          Serviços online para explicar o uso correto de medicamentos, reconciliar receitas e abrir farmácias com segurança.
        </p>
        <button className="mt-6 bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-100 transition">
          Saber Mais
        </button>
      </div>
    </div>
  );
}
