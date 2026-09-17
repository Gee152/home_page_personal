import React, { useState, useRef } from 'react';
import { ArrowUpRight, Clock, Users, Flame, Dumbbell, Baby, Activity, HeartHandshake } from 'lucide-react';
import {
  heroCardClasses,
  painPointCore,
  painPointMenopause,
  painPointCompulsion
} from '../assets/images';

export default function ClassesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const cardStep = clientWidth * 0.86 + 16;
    const index = Math.round(scrollLeft / cardStep);
    setActiveIndex(Math.min(Math.max(index, 0), classesList.length - 1));
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

  const whatsappBase = "https://api.whatsapp.com/send?phone=5581989998899";

  const classesList = [
    {
      id: "forca-feminina",
      title: "Hipertrofia & Definição Feminina",
      category: "Musculação Biomecânica",
      subtitle: "Sobrecarga progressiva com foco em glúteos, pernas e postura sem masculinização.",
      duration: "45 a 50 min",
      intensity: "Moderada a Alta",
      icon: Dumbbell,
      badge: "Mais Procurado",
      badgeColor: "bg-[#FF5A00] text-white",
      img: heroCardClasses
    },
    {
      id: "pos-parto",
      title: "Reabilitação Pós-Parto & Diástase",
      category: "Saúde Pélvica & Core",
      subtitle: "Fechamento seguro da diástase, ativação do assoalho pélvico e tônus pós-gestação.",
      duration: "40 min",
      intensity: "Adaptada / Segura",
      icon: Baby,
      badge: "Pós-Maternidade",
      badgeColor: "bg-[#FF7A00] text-white",
      img: painPointCore
    },
    {
      id: "menopausa-40",
      title: "Treino Metabólico na Menopausa (40+)",
      category: "Longevidade & Densidade Óssea",
      subtitle: "Estímulo hormonal contra a perda muscular, proteção óssea e redução da gordura visceral.",
      duration: "45 min",
      intensity: "Progressiva",
      icon: Activity,
      badge: "Saúde 40+",
      badgeColor: "bg-[#FFA040] text-[#090D14]",
      img: painPointMenopause
    },
    {
      id: "fome-emocional",
      title: "Consultoria Comportamental & TPM",
      category: "Nutrição + Treino",
      subtitle: "Modulação de serotonina e dopamina para cessar o ciclo da culpa e a compulsão por doces.",
      duration: "Acompanhamento Diário",
      intensity: "Comportamental",
      icon: HeartHandshake,
      badge: "Anti-Compulsão",
      badgeColor: "bg-[#FFB703] text-[#090D14]",
      img: painPointCompulsion
    }
  ];

  return (
    <section id="modalidades" className="py-10 sm:py-20 lg:py-24 bg-[#0B0F17] text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      
      {/* Marca D'água Gigante em Contorno (MODALIDADES do modeloSite.png) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-display font-black text-5xl sm:text-8xl md:text-[130px] leading-none uppercase text-stroke-outline opacity-15 whitespace-nowrap">
          MODALIDADES
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="w-8 h-1 bg-[#FF5A00] mx-auto mb-3 sm:mb-4" />
          
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-2 sm:mb-4">
            NOSSAS MODALIDADES
          </h2>

          <p className="text-xs sm:text-base text-gray-300 font-sans leading-relaxed max-w-2xl mx-auto">
            Metodologia integrada combinando musculação de alta precisão, reabilitação pélvica e nutrição comportamental.
          </p>
        </div>

        {/* Grid de Cards das Modalidades com Deslize Horizontal no Mobile e Grid no Desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-4 pt-1 px-[7vw] sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full snap-x snap-mandatory no-scrollbar"
        >
          {classesList.map((item) => {
            const Icon = item.icon;
            const whatsappModalidadeUrl = `${whatsappBase}&text=${encodeURIComponent(`Olá! Gostaria de agendar uma aula experimental para a modalidade ${item.title} em Recife.`)}`;
            return (
              <div
                key={item.id}
                className="w-[86vw] sm:w-auto md:w-full shrink-0 snap-center group bg-[#111823] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl hover:border-[#FF5A00] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Imagem Superior do Card com Overlay */}
                <div className="relative h-44 sm:h-52 overflow-hidden bg-gray-900">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge de Categoria */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Ícone no Canto */}
                  <div className="absolute bottom-3.5 right-3.5 p-2 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/20">
                    <Icon className="w-4 h-4 text-[#FF5A00]" />
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#FFA040] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>

                    <h3 className="font-display font-black text-lg text-white mb-2 group-hover:text-[#FF5A00] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-300 leading-relaxed mb-6 font-sans">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Detalhes de Duração & Botão */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-gray-400 pt-3 border-t border-white/10 mb-4 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {item.duration}
                      </span>
                      <span>Intensidade: <strong>{item.intensity}</strong></span>
                    </div>

                    <a
                      href={whatsappModalidadeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-white/10 group-hover:bg-[#FF5A00] text-white font-black text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>Agendar Horário</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Indicadores de Deslize no Mobile (Pills Interativos) */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4">
          {classesList.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Ver modalidade ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? "w-7 bg-[#FF5A00] shadow-[0_0_12px_rgba(255,90,0,0.8)]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
