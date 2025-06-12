'use client';

import { FaPills, FaFilePrescription, FaBriefcaseMedical } from 'react-icons/fa';

export default function AboutSection() {
  const cards = [
    {
      title: "Explicação de Medicamentos",
      description: "Entenda como usar os medicamentos corretamente a partir da sua receita médica.",
      icon: <FaPills className="text-4xl text-blue-600 mb-4 mx-auto" />
    },
    {
      title: "Reconciliação de Receitas",
      description: "Analisamos suas receitas para prevenir problemas relacionados com o uso de medicamentos.",
      icon: <FaFilePrescription className="text-4xl text-blue-600 mb-4 mx-auto" />
    },
    {
      title: "Consultoria Farmacêutica",
      description: "Orientação para abertura de farmácia, gestão de medicamentos e assuntos relacionados.",
      icon: <FaBriefcaseMedical className="text-4xl text-blue-600 mb-4 mx-auto" />
    },
  ];

  return (
    <div className="container mx-auto text-center items-center py-4 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1 duration-200">
            {card.icon}
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}