'use client';
import { useState } from 'react';

export default function ReconciliationForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    fnm: '',
    generico: '',
    dosagem: '',
    forma: '',
    comentarios: '',
    imagem: null,
  });

  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imagem') {
      setFormData((prev) => ({ ...prev, imagem: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem('');

    try {
      const body = new FormData();
      body.append('nome', formData.nome);
      body.append('email', formData.email);
      body.append('fnm', formData.fnm);
      body.append('generico', formData.generico);
      body.append('dosagem', formData.dosagem);
      body.append('forma', formData.forma);
      body.append('comentarios', formData.comentarios);
      body.append('imagem', formData.imagem);

      const res = await fetch('/api/send-email', {
        method: 'POST',
        body,
      });

      const data = await res.json();
      setMensagem(data.message || 'Pedido enviado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao enviar pedido.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Pedido de Reconciliação de Receita</h2>
      <p className="text-gray-500 mb-6">
        Preencha os campos abaixo para que possamos analisar e fornecer o uso correto da sua receita médica.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        {/* Nome */}
        <div>
          <label className="block mb-1 text-gray-700 font-semibold">👤 Nome Completo</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Ex: António João"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-gray-700 font-semibold">📧 Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="exemplo@dominio.com"
          />
        </div>

        {/* Descrição da Receita */}

        <div>
          <label className="block mb-3 text-gray-700 font-bold text-lg">📜 Descrição da Receita</label>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* FNM */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">💊 FNM</label>
              <input
                type="text"
                name="fnm"
                value={formData.fnm}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Ex: Rxl"
              />
            </div>

            {/* Nome Genérico */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">🧪 Nome Genérico</label>
              <input
                type="text"
                name="generico"
                value={formData.generico}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Ex: Acetaminofeno"
              />
            </div>

            {/* Dosagem */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">📏 Dosagem</label>
              <input
                type="text"
                name="dosagem"
                value={formData.dosagem}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Ex: 500mg"
              />
            </div>

            {/* Forma Farmacêutica */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Forma Farmacêutica</label>
              <input
                type="text"
                name="forma"
                value={formData.forma}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Ex: Comprimido"
              />
            </div>
          </div>
        </div>


        {/* Comentários */}
        <div>
          <label className="block mb-1 text-gray-700 font-semibold">💬 Comentários Adicionais</label>
          <textarea
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Upload da Imagem */}
        <div>
          <label className="block mb-1 text-gray-700 font-semibold">📎 Anexar Receita Médica (imagem)</label>
          <input
            type="file"
            name="imagem"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full px-2 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Botão */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            {loading ? 'A Enviar...' : '📩 Enviar Pedido'}
          </button>
        </div>

        {/* Mensagem */}
        {mensagem && (
          <div className="text-center mt-4 text-sm text-green-600 font-medium">{mensagem}</div>
        )}
      </form>
    </div>
  );
}
