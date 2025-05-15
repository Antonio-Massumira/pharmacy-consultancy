'use client';

import MainLayout from "@/components/layout/MainLayout";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ReconciliationForm from "@/components/ReconciliationForm";
import ContactSection from "@/components/ContactSection";
import "@/app/globals.css";

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section id="inicio" className="bg-white">
        <HeroCarousel />
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32 text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Sobre a reconciliação</h2>
        <AboutSection />
      </section>

      {/* Reconciliação Farmacêutica */}
      <section
        id="reconciliacao"
        className="bg-white py-20 px-6 md:px-16 lg:px-32"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Reconciliação de Receitas Médicas
        </h2>
        <ReconciliationForm />
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="bg-gray-100 py-20 px-6 md:px-16 lg:px-32"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Contacte-nos
        </h2>
        <ContactSection />
      </section>
    </MainLayout>
  );
}
