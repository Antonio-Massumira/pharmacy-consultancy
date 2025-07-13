'use client';

import {
  FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram,
  FaPhoneAlt, FaTelegram, FaGlobe, FaMapMarkerAlt
} from 'react-icons/fa';

export default function ContactSection() {
  const phoneNumber = "+258863812777";
  const phoneDisplay = "+258 86 381 2777";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const email = "arubeiam@gmail.com";
  const facebookLink = "https://facebook.com/arubeia";
  const instagramLink = "https://instagram.com/arubeia";
  const telegramLink = "https://t.me/arubeia_suporte";
  const siteLink = "https://pharmacy-consultancy.vercel.app/";
  const address = "Maputo, Moçambique";

  return (
    <section className="max-w-3xl mx-auto py-12 px-4 bg-white rounded-3xl shadow-2xl mt-10">
      <p className="text-[#506D84] text-lg mb-10 text-center font-medium">
        Tem dúvidas? Precisa de ajuda? A nossa equipa está pronta para responder!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {/* Contact Item */}
        {[
          {
            href: `tel:${phoneNumber}`,
            icon: <FaPhoneAlt className="text-4xl text-green-500 group-hover:text-green-700" />,
            label: phoneDisplay,
            sub: "Chamada",
          },
          {
            href: `mailto:${email}`,
            icon: <FaEnvelope className="text-4xl text-[#2A9D8F] group-hover:text-[#21786D]" />,
            label: email,
            sub: "E-mail",
          },
          {
            href: whatsappLink,
            icon: <FaWhatsapp className="text-4xl text-green-500 group-hover:text-green-700" />,
            label: "WhatsApp",
          },
          {
            href: facebookLink,
            icon: <FaFacebook className="text-4xl text-blue-700 group-hover:text-blue-900" />,
            label: "Facebook",
          },
          {
            href: instagramLink,
            icon: <FaInstagram className="text-4xl text-pink-500 group-hover:text-pink-700" />,
            label: "Instagram",
          },
          {
            href: telegramLink,
            icon: <FaTelegram className="text-4xl text-sky-500 group-hover:text-sky-700" />,
            label: "Telegram",
          },
          {
            href: siteLink,
            icon: <FaGlobe className="text-4xl text-gray-800 group-hover:text-blue-600" />,
            label: "Site Oficial",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center group transition-transform hover:scale-105"
            title={item.label}
          >
            <div className="bg-blue-50 rounded-full p-4 mb-2 transition-all">
              {item.icon}
            </div>
            <span className="text-sm text-gray-800 group-hover:text-[#2A9D8F] font-medium">
              {item.label}
            </span>
            {item.sub && (
              <span className="text-xs text-gray-500">{item.sub}</span>
            )}
          </a>
        ))}

        {/* Endereço */}
        <div className="flex flex-col items-center text-center group transition-transform hover:scale-105" title="Endereço">
          <div className="bg-blue-50 rounded-full p-4 mb-2">
            <FaMapMarkerAlt className="text-4xl text-red-400 group-hover:text-red-600 transition-colors duration-300" />
          </div>
          <span className="text-sm text-gray-800 group-hover:text-red-600 font-medium">
            {address}
          </span>
          <span className="text-xs text-gray-500">Endereço</span>
        </div>
      </div>
    </section>
  );
}
