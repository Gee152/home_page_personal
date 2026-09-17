import React from 'react';
import { Star, ShieldCheck, Heart, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function SocialProofTicker() {
  const tickerItems = [
    { icon: Sparkles, text: "+1.450 Mulheres Transformadas em Recife", highlight: true },
    { icon: Star, text: "4.9/5 ★ Avaliação Google (240+ depoimentos)", highlight: false },
    { icon: Heart, text: "94% Redução na Ansiedade e Compulsão na TPM", highlight: true },
    { icon: MapPin, text: "Estúdios em Boa Viagem & Casa Forte", highlight: false },
    { icon: ShieldCheck, text: "Acompanhamento Duplo: Nutrição Clínica + Personal", highlight: true },
    { icon: CheckCircle2, text: "Treino Seguro para Diástase Pós-Parto e Menopausa", highlight: false },
  ];

  return (
    <div className="w-full bg-[#1A2A3A] py-4 border-y border-white/10 overflow-hidden relative z-20">
      {/* Ticker Container com Duplicação para Loop Infinito */}
      <div className="flex animate-ticker whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 mx-6 text-xs sm:text-sm font-semibold tracking-wide text-gray-200"
            >
              <span className={`p-1 rounded-md ${item.highlight ? 'bg-[#FF5A00] text-white' : 'bg-[#FF7A00] text-white'}`}>
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span>{item.text}</span>
              <span className="text-gray-500 ml-4">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
