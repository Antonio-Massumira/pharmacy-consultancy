'use client';

import { FaPills, FaFilePrescription, FaBriefcaseMedical } from 'react-icons/fa';

export default function AboutSection() {
  const cards = [
    {
      title: "Explicação de Medicamentos",
      description: "Entenda como usar os medicamentos corretamente a partir da sua receita médica.",
      icon: <FaPills className="text-4xl text-[#2A9D8F]" />
    },
    {
      title: "Reconciliação de Receitas",
      description: "Analisamos suas receitas para prevenir problemas relacionados com o uso de medicamentos.",
      icon: <FaFilePrescription className="text-4xl text-[#2A9D8F]" />
    },
    {
      title: "Consultoria Farmacêutica",
      description: "Orientação para abertura de farmácia, gestão de medicamentos e assuntos relacionados.",
      icon: <FaBriefcaseMedical className="text-4xl text-[#2A9D8F]" />
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-[#E0F4F1] rounded-full">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-[#21867A] mb-3">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
