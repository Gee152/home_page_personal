import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  heroCardTimetable,
  heroCardClasses,
  heroCardJoinus
} from '../assets/images';

const defaultHeroQuickCards = [
  {
    id: "timetable",
    title: "Horários & Estúdios",
    label: "Horários",
    subtitle: "Boa Viagem & Casa Forte",
    href: "#unidades",
    img: heroCardTimetable,
    tag: "Recife - PE"
  },
  {
    id: "classes",
    title: "Modalidades & Treinos",
    label: "Modalidades",
    subtitle: "Força, Pós-Parto & Menopausa",
    href: "#modalidades",
    img: heroCardClasses,
    tag: "Feminino"
  },
  {
    id: "join-us",
    title: "Junte-se a Nós!",
    label: "Junte-se a Nós!",
    subtitle: "Consultoria Integrada Exclusiva",
    href: "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Gostaria de agendar uma avaliação inicial na consultoria em Recife."),
    isExternal: true,
    img: heroCardJoinus,
    tag: "Vagas Abertas"
  }
];

/**
 * HeroQuickCards
 * Os 3 cards flutuantes de acesso rápido posicionados na base do Hero,
 * com deslizamento horizontal suave no mobile (snap scroll) e grid 3 colunas no desktop.
 */
export default function HeroQuickCards({ cards = defaultHeroQuickCards, className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const cardStep = clientWidth * 0.86 + 16;
    const index = Math.round(scrollLeft / cardStep);
    setActiveIndex(Math.min(Math.max(index, 0), cards.length - 1));
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
    <div className={`w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 relative z-20 ${className}`}>
      {/* Cards com deslizamento horizontal centralizado no mobile e Grid 3 Colunas no Desktop */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto pb-3 pt-1 px-[7vw] sm:px-0 md:grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-7 w-full snap-x snap-mandatory no-scrollbar"
      >
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            target={card.isExternal ? "_blank" : undefined}
            rel={card.isExternal ? "noopener noreferrer" : undefined}
            className="w-[86vw] sm:w-auto md:w-full shrink-0 snap-center card-skewed-parallelogram group relative h-56 min-[360px]:h-60 min-[400px]:h-64 sm:h-56 md:h-60 lg:h-64 rounded-2xl overflow-hidden border border-white/15 hover:border-[#FF5A00] shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(255,90,0,0.35)] flex flex-col justify-between p-5 sm:p-6 cursor-pointer"
          >
            {/* Imagem de Fundo com Escala e Zoom no Hover */}
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover object-center scale-125 group-hover:scale-135 transition-transform duration-700 filter brightness-[0.45] contrast-125"
            />

            {/* Gradiente Duotone/Dark com Acréscimo de Brilho Laranja no Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-[#090D14]/75 to-[#090D14]/30 group-hover:from-[#090D14] group-hover:via-[#220f04]/80 group-hover:to-[#FF5A00]/25 transition-all duration-500" />

            {/* Glow Sutil no Canto */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FF5A00]/10 rounded-full blur-2xl group-hover:bg-[#FF5A00]/30 transition-all duration-500 pointer-events-none" />

            {/* Tag Superior Desinclinada */}
            <div className="card-skewed-content absolute top-4 sm:top-4 right-4 sm:right-4 z-10">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20 group-hover:border-[#FF5A00]/60 group-hover:text-white transition-all shadow-md">
                {card.tag}
              </span>
            </div>

            {/* Espaço Superior */}
            <div className="h-4 sm:h-6" />

            {/* Conteúdo Central Desinclinado (Reto e Nítido) */}
            <div className="card-skewed-content relative z-10 text-center w-full my-auto">
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight group-hover:text-[#FF5A00] transition-colors flex items-center justify-center gap-1.5 sm:gap-2 drop-shadow-lg">
                <span>{card.label}</span>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 stroke-[3] group-hover:text-[#FF5A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 sm:text-gray-300 font-semibold mt-1 drop-shadow-md">
                {card.subtitle}
              </p>
            </div>

            {/* Espaço Inferior */}
            <div className="h-2" />
          </a>
        ))}
      </div>

      {/* Indicadores de Deslize no Mobile (Pills Interativos) */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-3">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            aria-label={`Ver card ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIndex ? "w-7 bg-[#FF5A00] shadow-[0_0_12px_rgba(255,90,0,0.8)]" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
