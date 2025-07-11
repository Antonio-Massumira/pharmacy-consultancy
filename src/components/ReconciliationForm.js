'use client';
import { useState } from 'react';

export default function ReconciliationForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    descricao: [
      { fnm: '', generico: '', dosagem: '', forma: '' }
    ],
    comentarios: '',
    imagem: [],
  });

  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e, index = null, field = null) => {
    const { name, value, files } = e.target;

    if (name === 'imagem') {
      const selectedFiles = Array.from(files);
      const total = formData.imagem.length + selectedFiles.length;

      if (total > 4) {
        alert('Você só pode anexar no máximo 4 imagens.');
        return;
      }

      setFormData((prev) => ({
        ...prev,
        imagem: [...prev.imagem, ...selectedFiles],
      }));
    } else if (name === 'descricao' && index !== null && field) {
      const novaDescricao = [...formData.descricao];
      novaDescricao[index][field] = value;
      setFormData((prev) => ({ ...prev, descricao: novaDescricao }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddDescricao = () => {
    setFormData((prev) => ({
      ...prev,
      descricao: [...prev.descricao, { fnm: '', generico: '', dosagem: '', forma: '' }],
    }));
  };

  const handleRemoveDescricao = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      descricao: prev.descricao.filter((_, i) => i !== indexToRemove),
    }));
  };

  const handleRemoveImagem = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      imagem: prev.imagem.filter((_, i) => i !== indexToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem('');

    try {
      const body = new FormData();
      body.append('nome', formData.nome);
      body.append('email', formData.email);
      body.append('comentarios', formData.comentarios);

      // Adiciona múltiplas descrições como JSON
      body.append('descricao', JSON.stringify(formData.descricao));

      // Adiciona imagens
      formData.imagem.forEach((file) => {
        body.append('imagem', file);
      });

      const res = await fetch('/api/send-email', {
        method: 'POST',
        body,
      });

      const data = await res.json();
      setMensagem(data.message || 'Pedido enviado com sucesso!');
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao enviar pedido.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Pedido de Reconciliação de Receita
      </h2>
      <p className="text-gray-500 mb-6">
        Preencha os campos abaixo para que possamos analisar e fornecer o uso
        correto da sua receita médica.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        {/* Nome e Email */}
        <div>
          <label className="block mb-1 text-gray-700 font-semibold">
            👤 Nome Completo
          </label>
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

        <div>
          <label className="block mb-1 text-gray-700 font-semibold">
            📧 Email
          </label>
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

       {/* Descrições */}
<div>
  <label className="block mb-3 text-gray-700 font-bold text-lg">
    📜 Descrição da Receita
  </label>
  {formData.descricao.map((item, idx) => (
    <div
      key={idx}
      className="
        flex flex-col gap-2 mb-6
        md:grid md:grid-cols-2 md:gap-4 md:mb-4
        lg:grid-cols-4
      "
    >
      <input
        type="text"
        placeholder="FNM"
        value={item.fnm}
        onChange={(e) => handleChange(e, idx, "fnm")}
        name="descricao"
        required
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
      />
      <input
        type="text"
        placeholder="Nome Genérico"
        value={item.generico}
        onChange={(e) => handleChange(e, idx, "generico")}
        name="descricao"
        required
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
      />
      <input
        type="text"
        placeholder="Dosagem"
        value={item.dosagem}
        onChange={(e) => handleChange(e, idx, "dosagem")}
        name="descricao"
        required
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
      />
      <div className="flex w-full items-center gap-2">
        <input
          type="text"
          placeholder="Forma"
          value={item.forma}
          onChange={(e) => handleChange(e, idx, "forma")}
          name="descricao"
          required
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
        />
        {/* Só mostra o botão ao lado em telas médias e maiores */}
        {formData.descricao.length > 1 && (
          <button
            type="button"
            onClick={() => handleRemoveDescricao(idx)}
            className="hidden md:inline text-red-500 hover:text-red-700 text-xs ml-4"
          >
            Remover
          </button>
        )}
      </div>
      {/* Exibe o botão abaixo do campo em mobile */}
      {formData.descricao.length > 1 && (
        <button
          type="button"
          onClick={() => handleRemoveDescricao(idx)}
          className="md:hidden text-red-500 hover:text-red-700 text-xs mt-1 self-end"
        >
          Remover
        </button>
      )}
    </div>
  ))}
  <button
    type="button"
    onClick={handleAddDescricao}
    className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-2"
  >
    ➕ Adicionar outra descrição
  </button>
</div>

        {/* Comentários */}
        <div>
          <label className="block mb-1 text-gray-700 font-semibold">
            💬 Comentários Adicionais
          </label>
          <textarea
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Upload de Imagens */}
        <div>
          <label className="block mb-1 text-gray-700 font-semibold">
            📎 Anexar até 4 Imagens da Receita Médica
          </label>
          <input
            type="file"
            name="imagem"
            accept="image/*"
            multiple
            onChange={handleChange}
            required
            className="w-full px-2 py-2 border border-gray-300 rounded-md"
          />
          {formData.imagem.length > 0 && (
            <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
              {formData.imagem.map((file, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{file.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveImagem(idx)}
                    className="text-red-500 hover:text-red-700 text-xs ml-4"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Botão */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            {loading ? "A Enviar..." : "📩 Enviar Pedido"}
          </button>
        </div>

        {mensagem && (
          <div className="text-center mt-4 text-sm text-green-600 font-medium">
            {mensagem}
          </div>
        )}
      </form>
    </div>
  );
}
