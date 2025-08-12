'use client'; // Necessário para indicar que este é um Componente de Cliente (usa estado)

import { useState } from 'react';
import Link from 'next/link'; // Componente do Next.js para navegação otimizada

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Links do menu para fácil manutenção
  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '#servicos' }, // Exemplo de link para uma seção
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Nome da Empresa */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold tracking-wider">
              Estética SF <span>Santos</span>
            </Link>
          </div>

          {/* Links do Menu para Telas Grandes */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Botão do Menu Hambúrguer para Telas Pequenas */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Ícone do menu (hambúrguer ou X) */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (aparece quando o estado isOpen é true) */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}