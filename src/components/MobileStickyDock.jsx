import React from 'react';
import { MessageCircle, Link2, Sparkles } from 'lucide-react';

export default function MobileStickyDock({ onOpenBioLinks }) {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Vim pela página e gostaria de agendar uma avaliação inicial em Recife.");

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#090D14]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        
        {/* Botão para Link da Bio */}
        <button
          onClick={onOpenBioLinks}
          className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/10 flex flex-col items-center justify-center shrink-0 active:scale-95 transition-transform"
          aria-label="Acessar Links da Bio"
        >
          <Link2 className="w-4 h-4 text-[#FF5A00]" />
          <span className="text-[9px] mt-0.5 font-bold">Bio</span>
        </button>

        {/* CTA Principal WhatsApp Pulsante */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 px-4 rounded-2xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-extrabold text-xs sm:text-sm flex items-center justify-between shadow-lg shadow-[#FF5A00]/25 active:scale-98 transition-all"
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Agendar Avaliação</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-black px-2 py-0.5 rounded-full bg-black/25 text-white">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Recife</span>
          </div>
        </a>

      </div>
    </div>
  );
}
