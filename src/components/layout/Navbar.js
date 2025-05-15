'use client';

import { useState } from 'react';
import { Menu, X, Home, Info, ClipboardList, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: <Home size={18} className="mr-2" /> },
    { id: 'sobre', label: 'Sobre', icon: <Info size={18} className="mr-2" /> },
    { id: 'reconciliacao', label: 'Reconciliação', icon: <ClipboardList size={18} className="mr-2" /> },
    { id: 'contacto', label: 'Contacto', icon: <Mail size={18} className="mr-2" /> },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-800">Arubeia Consultoria</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 items-center">
          {menuItems.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="flex items-center hover:text-blue-600 font-medium transition"
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
            className="text-blue-800 hover:text-blue-600 transition"
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
              className="flex items-center w-full text-left py-2 text-gray-700 hover:text-blue-600 transition"
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
