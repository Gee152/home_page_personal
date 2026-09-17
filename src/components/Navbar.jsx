import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, MapPin, Search, ArrowUpRight, Dumbbell } from 'lucide-react';

export default function Navbar({ onOpenBioLinks }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Metodologia", href: "#filosofia" },
    { label: "Modalidades", href: "#modalidades" },
    { label: "Resultados", href: "#resultados" },
    { label: "Estúdios", href: "#unidades" },
    { label: "Avaliação", href: "#quiz" },
    { label: "FAQ", href: "#faq" },
  ];

  const whatsappUrl = "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Vim pelo site oficial e gostaria de agendar uma avaliação inicial em Recife.");

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? "bg-[#090D14]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10" 
        : "bg-gradient-to-b from-[#090D14]/90 via-[#090D14]/50 to-transparent py-4 md:py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo: LETICE SANTANA FIT */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="font-display font-black text-lg sm:text-2xl italic tracking-tighter text-white flex items-center gap-1">
            <span className="text-white">LETICE SANTANA</span>
            <span className="text-[#FF5A00] not-italic text-[10px] sm:text-xs font-black px-1.5 py-0.5 rounded bg-white/10 border border-[#FF5A00]/30 ml-1">
              FIT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#FF5A00] transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5A00] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action Icons & Button (Inspirado no modeloSite.png) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Botão BioLinks / Linktree */}
          <button
            onClick={onOpenBioLinks}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-gray-200 border border-white/15 transition-all hover:scale-105"
            title="Acessar Links da Bio / Linktree"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A00]" />
            <span>Links da Bio</span>
          </button>

          {/* CTA Principal de Conversão (Estilo modeloSite.png: "Fale no WhatsApp") */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#FF5A00]/30 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Fale no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBioLinks}
            className="px-2.5 py-1.5 rounded-lg bg-white/10 text-white text-xs font-bold border border-white/15"
          >
            Bio
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090D14]/98 border-b border-white/15 backdrop-blur-2xl px-5 pt-4 pb-8 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#FF5A00] border-b border-white/5"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBioLinks();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase border border-white/15"
            >
              <Sparkles className="w-4 h-4 text-[#FF5A00]" />
              <span>Ver Página Linktree / BioLinks</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF5A00] text-white font-black text-xs uppercase tracking-wider shadow-md"
            >
              <span>Agendar Avaliação no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
