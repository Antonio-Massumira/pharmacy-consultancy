'use client';

export default function ReconciliationForm() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Pedido de Reconciliação de Receita</h2>
      <p className="text-gray-500 mb-6">
        Preencha os campos abaixo para que possamos analisar e fornecer o uso correto da sua receita médica.
      </p>

      <form
        action="https://formsubmit.co/arubeiam@gmail.com"
        method="POST"
        className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        {/* Hidden inputs */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="Pedido de Reconciliação de Receita" />

        <div>
          <label className="block mb-1 text-gray-700 font-semibold">👤 Nome Completo</label>
          <input
            type="text"
            name="Nome"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
            placeholder="Ex: António João"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-semibold">📜 Descrição da Receita</label>
          <textarea
            name="Prescrição"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={4}
            required
            placeholder="Ex: Nome dos medicamentos, dosagem, etc."
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-semibold">💬 Comentários Adicionais</label>
          <textarea
            name="Comentários"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={3}
            placeholder="Alguma informação extra que gostaria de partilhar?"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            📩 Enviar Pedido
          </button>
        </div>
      </form>
    </div>
  );
}
