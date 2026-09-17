import React from 'react';
import { Instagram, MessageCircle, MapPin, Share2, Sparkles } from 'lucide-react';

export default function RightSocialDock({ onOpenBioLinks }) {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Vim pelo site oficial e gostaria de agendar uma avaliação inicial em Recife.");

  return (
    <aside 
      aria-label="Canais Sociais Oficiais"
      className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-2xl bg-[#111823]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
    >
      {/* Botão para BioLinks */}
      <button
        onClick={onOpenBioLinks}
        className="p-2.5 rounded-xl bg-gradient-to-tr from-[#FF5A00] to-[#FFA040] text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-[#FF5A00]/30"
        title="Acessar Links da Bio / Linktree"
      >
        <Sparkles className="w-4 h-4" />
      </button>

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FF5A00] text-gray-300 hover:text-white transition-all hover:scale-110"
        title="WhatsApp Direto Recife"
      >
        <MessageCircle className="w-4 h-4" />
      </a>

      {/* Instagram Oficial */}
      <a
        href="https://www.instagram.com/emagreserpi/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FF7A00] text-gray-300 hover:text-white transition-all hover:scale-110"
        title="Instagram Oficial @emagreserpi"
      >
        <Instagram className="w-4 h-4" />
      </a>

      {/* Unidades Recife */}
      <a
        href="#unidades"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/20 text-gray-300 hover:text-white transition-all hover:scale-110"
        title="Estúdios em Boa Viagem e Casa Forte"
      >
        <MapPin className="w-4 h-4 text-[#FF5A00]" />
      </a>

      <div className="w-4 h-[1px] bg-white/15 my-1" />

      {/* Rotacionado / Vertical Indicator */}
      <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 rotate-90 my-2 select-none">
        RECIFE
      </span>
    </aside>
  );
}
