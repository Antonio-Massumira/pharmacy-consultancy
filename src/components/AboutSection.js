export default function AboutSection() {
  const cards = [
    {
      title: "Explicação de Medicamentos",
      description: "Entenda como usar os medicamentos corretamente a partir da sua receita médica."
    },
    {
      title: "Reconciliação de Receitas",
      description: "Analisamos suas receitas para prevenir problemas com medicamentos."
    },
    {
      title: "Consultoria Farmacêutica",
      description: "Orientações para abertura e gestão de farmácias e assuntos relacionados."
    },
  ];

  return (
    <div className="container mx-auto text-center items-center py-4 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
