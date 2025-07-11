import { 
  FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, 
  FaPhoneAlt, FaTelegram, FaGlobe, FaMapMarkerAlt 
} from 'react-icons/fa';

export default function ContactSection() {
  const phoneNumber = "+258863812777";
  const phoneDisplay = "+258863812777";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const email = "arubeiam@gmail.com";
  const facebookLink = "https://facebook.com/arubeia";
  const instagramLink = "https://instagram.com/arubeia";
  const telegramLink = "https://t.me/arubeia_suporte";
  const siteLink = "https://pharmacy-consultancy.vercel.app/";
  const address = "Maputo, Moçambique";

  return (
    <section className="max-w-2xl mx-auto py-12 px-4 flex flex-col items-center bg-white rounded-3xl shadow-2xl mt-6">
      <p className="text-gray-600 text-lg mb-8 text-center">
        Tem dúvidas? Precisa de ajuda? Nossa equipa está pronta para responder!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-10 w-full max-w-xl">
        {/* Telefone */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex flex-col items-center group"
          title="Ligar"
        >
          <span className="bg-blue-50 rounded-full p-4 transition-transform group-hover:scale-110">
            <FaPhoneAlt className="text-5xl text-green-400 group-hover:text-green-700 transition-colors duration-300" />
          </span>
          <span className="mt-2 text-base text-gray-700 group-hover:text-green-700">{phoneDisplay}</span>
          <span className="text-xs text-gray-500">Chamada</span>
        </a>
        
        {/* E-mail */}
        <a
          href={`mailto:${email}`}
          className="flex flex-col items-center group"
          title="E-mail"
        >
          <span className="bg-blue-50 rounded-full p-4 transition-transform group-hover:scale-110">
            <FaEnvelope className="text-5xl text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
          </span>
          <span className="mt-2 text-base text-gray-700 group-hover:text-blue-600">{email}</span>
          <span className="text-xs text-gray-500">E-mail</span>
        </a>
        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
          title="WhatsApp"
        >
          <span className="bg-blue-50 rounded-full p-4 transition-transform group-hover:scale-110">
            <FaWhatsapp className="text-5xl text-green-500 group-hover:text-green-700 transition-colors duration-300" />
          </span>
          <span className="mt-2 text-base text-gray-700 group-hover:text-green-600">WhatsApp</span>
        </a>
        {/* Facebook */}
        <a
          href={facebookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
          title="Facebook"
        >
          <span className="bg-blue-50 rounded-full p-4 transition-transform group-hover:scale-110">
            <FaFacebook className="text-5xl text-blue-800 group-hover:text-blue-900 transition-colors duration-300" />
          </span>
          <span className="mt-2 text-base text-gray-700 group-hover:text-blue-800">Facebook</span>
        </a>
        {/* Instagram */}
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
          title="Instagram"
        >
          <span className="bg-blue-50 rounded-full p-4 transition-transform group-hover:scale-110">
            <FaInstagram className="text-5xl text-pink-500 group-hover:text-pink-700 transition-colors duration-300" />
          </span>
          <span className="mt-2 text-base text-gray-700 group-hover:text-pink-600">Instagram</span>
        </a>
        {/* Telegram */}
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
          title="Telegram"
        >
          <span className="bg-blue-50 rounded-full p-4 transition-transform group-hover:scale-110">
            <FaTelegram className="text-5xl text-blue-400 group-hover:text-blue-600 transition-colors duration-300" />
          </span>
          <span className="mt-2 text-base text-gray-700 group-hover:text-blue-400">Telegram</span>
        </a>
        {/* Site */}
        <a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
          title="Site Oficial"
        >
          <span className="bg-blue-50 rounded-full p-4 transition-transform group-hover:scale-110">
            <FaGlobe className="text-5xl text-gray-800 group-hover:text-blue-500 transition-colors duration-300" />
          </span>
          <span className="mt-2 text-base text-gray-700 group-hover:text-blue-500">Site Oficial</span>
        </a>
        {/* Endereço */}
        <div className="flex flex-col items-center">
          <span className="bg-blue-50 rounded-full p-4">
            <FaMapMarkerAlt className="text-5xl text-red-400" />
          </span>
          <span className="mt-2 text-base text-gray-700">{address}</span>
          <span className="text-xs text-gray-500">Endereço</span>
        </div>
      </div>
    </section>
  );
}