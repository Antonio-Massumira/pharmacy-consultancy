import { FaWhatsapp } from 'react-icons/fa'; // Importação do ícone do WhatsApp

export default function ContactSection() {
  const phoneNumber = "+258863812777"; // Número de telefone sem espaços
  const whatsappLink = `https://wa.me/${phoneNumber}`; // Link da API do WhatsApp
  
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-gray-600">
        Tem dúvidas? Precisa de ajuda? Estamos disponíveis para si.
      </p>
      <p className="text-gray-600 mt-4">Email: apoio@Arubeia.com</p>
      <p className="text-gray-600 flex items-center justify-center gap-2">
        <FaWhatsapp className="text-green-500 text-xl" /> 
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
        >
          {phoneNumber}
        </a>
      </p>
    </div>
  );
}