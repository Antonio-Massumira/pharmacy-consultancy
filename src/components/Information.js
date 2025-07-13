'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaHospitalAlt,
  FaPills,
  FaBriefcaseMedical
} from 'react-icons/fa';

export default function InformationSection() {
  return (
    <section className="bg-white py-2 px-6 md:px-16 lg:px-32 scroll-mt-24">
      {/* Título principal */}
      <div className="text-center mb-12">
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Conheça o profissional por trás da nossa consultoria farmacêutica.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Texto à esquerda com animação */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-[#2A9D8F] text-left uppercase mb-2">
            dr. Mussa Bronze Arubeia
          </h2>
          <h3 className="text-lg text-left text-gray-700 font-semibold mb-8">
            Consultor Farmacêutico e Gestor de Cuidados Farmacêuticos
          </h3>

          <div className="space-y-8 text-gray-600 text-base leading-relaxed">
            {[
              {
                icon: <FaGraduationCap className="text-[#2A9D8F] text-4xl mt-1 shrink-0" />,
                text: `Graduado como Agente de Farmácia pelo Instituto de Ciências de Saúde de Quelimane (2005) e Licenciado em Farmácia pela Universidade Católica de Moçambique (2021).`
              },
              {
                icon: <FaHospitalAlt className="text-[#2A9D8F] text-4xl mt-1 shrink-0" />,
                text: `Com mais de 20 anos no MISAU, atuou como Gestor Distrital, Gestor Provincial e atualmente é Gestor de Cuidados Farmacêuticos na Unidade Sanitária de Namacula e no Hospital Provincial de Lichinga.`
              },
              {
                icon: <FaPills className="text-[#2A9D8F] text-4xl mt-1 shrink-0" />,
                text: `Actuou em várias farmácias de destaque, incluindo Shanaya (Maciana – Manhiça), Dói Dói (Boquisso – Matola e M’Memo – Marracuene), Chungussura (Beira), Maria Elisa (Macuti), Cristal Box e Pontagea.`
              },
              {
                icon: <FaBriefcaseMedical className="text-[#2A9D8F] text-4xl mt-1 shrink-0" />,
                text: `Actualmente dedica-se à consultoria farmacêutica, reconciliação de receitas e educação em saúde.`
              }
            ].map(({ icon, text }, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 1.2 }}
                viewport={{ once: true }}
              >
                {icon}
                <p style={{ textAlign: 'justify' }}>{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imagem à direita com moldura e sombra */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-64 h-64 md:w-72 md:h-72 relative rounded-full overflow-hidden shadow-2xl ring-4 ring-[#2A9D8F]/30">
            <Image
              src="/images/Arubeia.jpg"
              alt="Dr. Mussa Bronze Arubeia"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
