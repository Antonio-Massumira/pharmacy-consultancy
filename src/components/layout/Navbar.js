'use client';

import { useState } from 'react';
import { Menu, X, Home, Info, ClipboardList, Mail, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    const navbar = document.querySelector('header');

    if (el && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setIsOpen(false);
    }
  };


  const menuItems = [
    { id: 'inicio', label: 'Início', icon: <Home size={18} className="mr-2" /> },
    { id: 'information', label: 'Perfil', icon: <User size={18} className="mr-2" /> },
    { id: 'sobre', label: 'Sobre', icon: <Info size={18} className="mr-2" /> },
    { id: 'reconciliacao', label: 'Reconciliação', icon: <ClipboardList size={18} className="mr-2" /> },
    { id: 'contacto', label: 'Contacto', icon: <Mail size={18} className="mr-2" />},
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            className="w-10 h-10 text-[#2A9D8F]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <div className="leading-tight">
            <h1 className="text-3xl font-extrabold text-[#2A9D8F]">Arubeia</h1>
            <span className="text-base text-gray-600 font-medium">
              Consultoria
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 items-center">
          {menuItems.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="flex items-center hover:text-[#21867A] font-medium transition"
            >
              {icon}
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#2A9D8F] hover:text-[#21867A] transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          {menuItems.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="flex items-center w-full text-left py-2 text-gray-700 hover:text-[#2A9D8F] transition"
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
