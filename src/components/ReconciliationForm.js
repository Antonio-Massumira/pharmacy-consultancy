'use client';

import { useState } from "react";

export default function ReconciliationForm() {
  const [formData, setFormData] = useState({
    name: "",
    prescription: "",
    comments: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Pedido de reconciliação enviado!");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-md rounded-lg">
        <div>
          <label className="block mb-2 font-semibold">Nome Completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Descrição da Receita</label>
          <textarea
            name="prescription"
            value={formData.prescription}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Comentários Adicionais</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="3"
          />
        </div>
         <div>
          <label className="block mb-2 font-semibold">Submeta a receita</label>
          <input
            type="file"
            name="name"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
