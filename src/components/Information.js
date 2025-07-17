'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaHospitalAlt,
  FaPills,
  FaBriefcaseMedical,
} from 'react-icons/fa';

export default function InformationSection() {
  const bioItems = [
    {
      icon: <FaGraduationCap className="text-[#2A9D8F] text-xl" />,
      text: `Graduado como Agente de Farmácia pelo Instituto de Ciências de Saúde de Quelimane (2005) e Licenciado em Farmácia pela Universidade Católica de Moçambique (2021).`,
    },
    {
      icon: <FaHospitalAlt className="text-[#2A9D8F] text-xl" />,
      text: `Com mais de 20 anos no MISAU, actuou como Gestor Distrital e Provincial.`,
    },
    {
      icon: <FaPills className="text-[#2A9D8F] text-xl" />,
      text: `Actuou em várias farmácias de destaque, incluindo Shanaya (Maciana – Manhiça), Dói Dói (Boquisso – Matola e M’Memo – Marracuene), Chungussura (Beira), Maria Elisa (Macuti), Cristal Box e Pontagea.`,
    },
    {
      icon: <FaBriefcaseMedical className="text-[#2A9D8F] text-xl" />,
      text: `Actualmente dedica-se a realizar consultas farmacêuticas na Unidade Sanitária de Namacula e no Hospital Provincial de Lichinga.`,
    },
  ];

  return (
      <section className="bg-gray-50 py-16 sm:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 sm:p-10 md:p-12 flex flex-col md:flex-row gap-10 items-center">

          {/* Conteúdo à esquerda */}
          <motion.div
              className="w-full md:w-[55%] space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl text-left font-bold text-gray-700">Dr. Mussa Bronze Arubeia</h2>
              <hr className="bg-[#2A9D8F] h-1 my-2 border-0 rounded w-32" />
            </div>

            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              {bioItems.map(({ icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="pt-1">{icon}</div>
                    <p className="text-justify">{text}</p>
                  </div>
              ))}
            </div>

            {/* Barras de Progresso */}
            <div className="space-y-4 mt-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700 font-medium">Experiência Profissional</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#2A9D8F] h-2 rounded-full w-[90%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700 font-medium">Consultoria Farmacêutica</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4DD0E1] h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imagem à direita */}
          <motion.div
              className="w-full md:w-[45%] flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
          >
            <div className="relative w-full h-[65vh] max-w-sm rounded-xl overflow-hidden border border-[#2A9D8F]/30 shadow-lg">
              <Image
                  src="/images/Arubeia.jpg"
                  alt="Dr. Mussa Bronze Arubeia"
                  fill
                  className="object-cover object-center"
                  priority
              />
            </div>
          </motion.div>
        </div>
      </section>
  );
}
