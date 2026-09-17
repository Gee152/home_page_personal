import React, { useState, useRef } from 'react';
import PainPointCard from './PainPointCard';
import { Brain, Moon, HeartCrack, Flame } from 'lucide-react';
import {
  painPointCompulsion,
  painPointHormonal,
  painPointCore,
  painPointMenopause
} from '../assets/images';

const defaultPainPoints = [
  {
    icon: Brain,
    title: "O Ciclo da Fome Emocional & Culpa",
    description: "Cortar carboidratos radicalmente eleva o cortisol e gera compulsão rebote. O emagrecimento só se torna definitivo quando sua mente e sua neuroquímica são nutridas, e não punidas.",
    tag: "Neurociência Comportamental",
    bgImg: painPointCompulsion
  },
  {
    icon: Moon,
    title: "A Vontade Incontrolável de Doce na TPM",
    description: "Na fase lútea, os níveis de serotonina despencam e a temperatura basal sobe. Seu corpo pede energia rápida. Em vez de proibir, ensinamos estratégias inteligentes para saciar a dopamina sem sair da dieta.",
    tag: "Modulação Hormonal",
    bgImg: painPointHormonal
  },
  {
    icon: HeartCrack,
    title: "A Frustração com a Diástase Pós-Parto",
    description: "Fazer abdominais tradicionais após a gravidez pode piorar a abertura da musculatura abdominal. Nosso protocolo de fortalecimento profundo do core restaura a firmeza e a postura com segurança.",
    tag: "Recuperação Pós-Parto",
    bgImg: painPointCore
  },
  {
    icon: Flame,
    title: "Metabolismo 'Travado' na Menopausa",
    description: "Com a queda do estrogênio, o corpo tende a perder massa muscular e acumular gordura visceral. O treino de força direcionado com nutrição anti-inflamatória é o único remédio comprovado pela ciência.",
    tag: "Climatério & Menopausa 40+",
    bgImg: painPointMenopause
  }
];

/**
 * PainPointsGrid
 * Grid de cartões de dores com deslizamento horizontal centralizado no mobile e grid no desktop.
 */
export default function PainPointsGrid({
  items = defaultPainPoints,
  defaultWhatsappBase = "https://api.whatsapp.com/send?phone=5581989998899",
  className = ""
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const cardStep = clientWidth * 0.86 + 16;
    const index = Math.round(scrollLeft / cardStep);
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
  };

  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;
    const cardStep = clientWidth * 0.86 + 16;
    scrollContainerRef.current.scrollTo({
      left: index * cardStep,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto pb-4 pt-1 px-[7vw] sm:px-0 md:grid md:grid-cols-2 gap-5 sm:gap-8 mb-4 sm:mb-14 w-full snap-x snap-mandatory no-scrollbar"
      >
        {items.map((item, idx) => (
          <PainPointCard
            key={idx}
            item={item}
            idx={idx}
            defaultWhatsappBase={defaultWhatsappBase}
            className="w-[86vw] sm:w-auto md:w-full shrink-0 snap-center"
          />
        ))}
      </div>

      {/* Indicadores de Deslize no Mobile (Pills Interativos) */}
      <div className="flex md:hidden justify-center items-center gap-2 mb-10">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            aria-label={`Ver dor ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIndex ? "w-7 bg-[#FF5A00] shadow-[0_0_12px_rgba(255,90,0,0.8)]" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export { PainPointCard };
