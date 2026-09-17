import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const defaultImages = [
  '/images/pain_point_compulsion.jpg',
  '/images/pain_point_hormonal.jpg',
  '/images/pain_point_core.jpg',
  '/images/pain_point_menopause.jpg'
];

/**
 * PainPointCard
 * Componente individual de card de dor/necessidade feminina.
 * Estilizado com corte paralelepípedo esportivo (slanted parallelogram)
 * e fotografia atlética de alta intensidade com overlay escuro/laranja,
 * fiel à estética do modelo esportivo (modeloSite.png).
 */
export default function PainPointCard({ item, idx = 0, defaultWhatsappBase = "https://api.whatsapp.com/send?phone=5581989998899", className = "" }) {
  const Icon = item.icon;
  const bgImage = item.bgImg || defaultImages[idx % defaultImages.length];

  // URL direcionada para cada dor específica
  const whatsappUrl = item.whatsappUrl || `${defaultWhatsappBase}&text=${encodeURIComponent(
    `Olá! Me identifiquei muito com o tema "${item.title}" (${item.tag}) e gostaria de entender como o método de consultoria em Recife pode me ajudar.`
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-skewed-parallelogram group relative overflow-hidden rounded-2xl border border-white/15 hover:border-[#FF5A00] transition-all duration-300 hover:-translate-y-1.5 shadow-2xl p-5 sm:p-8 flex flex-col justify-between min-h-[290px] sm:min-h-[330px] cursor-pointer ${className}`}
    >
      {/* Imagem de Fundo Atlética com Zoom no Hover */}
      <img
        src={bgImage}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover object-center scale-125 group-hover:scale-130 transition-transform duration-700 filter brightness-[0.38] contrast-125"
      />

      {/* Gradiente Duotone/Dark com Iluminação Laranja no Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-[#090D14]/85 to-[#090D14]/50 group-hover:from-[#090D14] group-hover:via-[#1a0f07]/90 group-hover:to-[#FF5A00]/25 transition-all duration-500" />

      {/* Glow Sutil no Canto */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF5A00]/10 rounded-full blur-2xl group-hover:bg-[#FF5A00]/30 transition-all duration-500 pointer-events-none" />

      {/* Conteúdo Desinclinado (Reto e 100% legível) */}
      <div className="card-skewed-content relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Topo: Ícone estilizado + Tag */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md group-hover:bg-[#FF5A00] transition-all duration-300 flex items-center justify-center text-[#FF5A00] group-hover:text-white border border-white/20 group-hover:border-[#FF5A00] shadow-lg group-hover:scale-105">
              {Icon && <Icon className="w-6 h-6 stroke-[2.2]" />}
            </div>
            <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-gray-200 border border-white/20 group-hover:border-[#FF5A00]/50 group-hover:text-white transition-all shadow-sm">
              {item.tag}
            </span>
          </div>

          {/* Título Monumental */}
          <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-3 group-hover:text-[#FF5A00] transition-colors leading-snug drop-shadow-md">
            {item.title}
          </h3>

          {/* Descrição Acolhedora & Científica */}
          <p className="text-sm text-gray-300 leading-relaxed font-sans font-normal drop-shadow-sm">
            {item.description}
          </p>
        </div>

        {/* Rodapé: Chamada para Solução */}
        <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-bold text-gray-300 group-hover:text-[#FF5A00] transition-colors">
          <span className="flex items-center gap-1.5">
            <span>Como solucionamos no método</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 group-hover:bg-[#FF5A00] group-hover:text-white transition-colors border border-white/15 flex items-center gap-0.5">
            <span>Entender</span>
            <ArrowUpRight className="w-3 h-3 stroke-[3]" />
          </span>
        </div>
      </div>
    </a>
  );
}
