'use client';

import MainLayout from "@/components/layout/MainLayout";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ReconciliationForm from "@/components/ReconciliationForm";
import ContactSection from "@/components/ContactSection";
import InformationSection from "@/components/Information"
import "@/app/globals.css";

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section id="inicio" className="bg-gray-100 scroll-mt-28 sm:scroll-mt-24">
        <HeroCarousel />
      </section>

      {/* Quem é */}
      <section id="information" className="bg-white py-20 px-6 md:px-16 lg:px-32 text-center scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 uppercase">
          Quem é?
        </h2>
        <InformationSection />
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="bg-gray-100 py-20 px-6 md:px-16 lg:px-32 text-center scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 uppercase">
          Sobre a reconciliação
        </h2>
        <AboutSection />
      </section>

      {/* Reconciliação Farmacêutica */}
      <section
        id="reconciliacao"
        className="bg-white py-20 px-6 md:px-16 lg:px-32 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center uppercase">
          Reconciliação de Receitas Médicas
        </h2>
        <ReconciliationForm />
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="bg-gray-100 py-20 px-6 md:px-16 lg:px-32 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center uppercase">
          Contacte-nos
        </h2>
        <ContactSection />
      </section>
    </MainLayout>
  );
}
