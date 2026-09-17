import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Dumbbell, ChevronDown } from 'lucide-react';
import { telaPulsanteAntesCroll, introWebBackground, introWebBackground2 } from '../assets/images';

const defaultIntroSlides = [
  {
    id: 1,
    image: telaPulsanteAntesCroll, // Imagem vertical da modelo centralizada para mobile
    desktopImage: introWebBackground,
    tagTitle: "SAÚDE",
    tagSubtitle: "TREINO",
    tagSubtitleBg: "bg-[#FF5A00]",
    titleMain: "Escolha seu próximo nível",
    titleHighlight: "de saúde & treino",
    subtitle: "Acompanhamento integrado de treino feminino e nutrição clínica em Boa Viagem e Casa Forte. Conheça nossos programas ou agende sua avaliação.",
    offerText: "Acompanhamento integrado de treino feminino e nutrição clínica em Boa Viagem e Casa Forte.",
    mainTitleTop: "Escolha seu",
    mainTitleMiddle: "próximo nível",
    mainTitleBottom: "de saúde & treino",
    badgeCircularText: "• CUIDE DA SUA SAÚDE • O MELHOR DE RECIFE •",
    logoText: "LETICE SANTANA FIT",
    website: "emagrecimentofemininorecife.com.br",
    whatsappText: "Agende seu horário",
    whatsappPhone: "81 98999-8899",
    whatsappLink: "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Vim pela tela inicial e gostaria de agendar um horário para avaliação.")
  },
  {
    id: 2,
    image: telaPulsanteAntesCroll,
    desktopImage: introWebBackground2,
    tagTitle: "FEMME",
    tagSubtitle: "FITNESS",
    tagSubtitleBg: "bg-[#FF7A00] text-white",
    titleMain: "Cuide de você e alcance",
    titleHighlight: "o seu objetivo",
    subtitle: "Treinos de força biomecânica, reabilitação pós-parto e modulação hormonal com acompanhamento presencial em Boa Viagem e Casa Forte.",
    offerText: "Treinos de força biomecânica, reabilitação pós-parto e modulação hormonal em Boa Viagem e Casa Forte.",
    mainTitleTop: "Cuide de você e",
    mainTitleMiddle: "alcance o seu",
    mainTitleBottom: "objetivo",
    badgeCircularText: "• CONSULTORIA INTEGRADA • RECIFE • NUTRIÇÃO & PERSONAL •",
    logoText: "LETICE SANTANA FIT",
    website: "emagrecimentofemininorecife.com.br",
    whatsappText: "Fale no WhatsApp",
    whatsappPhone: "81 98999-8899",
    whatsappLink: "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Gostaria de conhecer os planos da consultoria em Recife.")
  }
];

export default function PulsingIntroScreen({ 
  slides = defaultIntroSlides,
  onScrollDown
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const totalSlides = slides.length;
  const slide = slides[currentSlide] || slides[0];

  // Auto-play do slider caso haja mais de 1 slide configurado
  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6500);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section 
      ref={containerRef}
      id="intro-screen"
      className="relative w-full h-full min-h-screen bg-[#070A0F] text-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* =========================================================================
          1. BACKGROUND IMAGES (FULL WIDTH & FULL HEIGHT NA TELA INTEIRA)
         ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <picture className="w-full h-full block">
              {s.desktopImage && (
                <source media="(min-width: 768px)" srcSet={s.desktopImage} />
              )}
              {s.image && (
                <source media="(max-width: 767px)" srcSet={s.image} />
              )}
              <img
                src={s.image || s.desktopImage}
                alt="Letice Santana Fit - Consultoria e Treino"
                className="w-full h-full object-cover object-top sm:object-center filter brightness-90 contrast-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = telaPulsanteAntesCroll;
                }}
              />
            </picture>
          </div>
        ))}
      </div>

      {/* =========================================================================
          2. DEGRADÊS LATERAIS E VINHETAS NO MESMO TOM (#070A0F)
         ========================================================================= */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-1/5 lg:w-1/4 bg-gradient-to-r from-[#070A0F] via-[#070A0F]/60 to-transparent pointer-events-none z-10" />
      <div className="hidden md:block absolute inset-y-0 right-0 w-1/5 lg:w-1/4 bg-gradient-to-l from-[#070A0F] via-[#070A0F]/60 to-transparent pointer-events-none z-10" />

      {/* Vinhetas superior e inferior para proteger a legibilidade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070A0F]/90 via-[#070A0F]/40 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-80 sm:h-44 bg-gradient-to-t from-[#070A0F] via-[#070A0F]/85 to-transparent pointer-events-none z-10" />

      {/* =========================================================================
          3. HALTERES FLUTUANTES 3D (DESKTOP ONLY PARA NÃO COBRIR A MODELO NO MOBILE)
         ========================================================================= */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {/* Haltere Flutuante Esquerdo */}
        <div className="absolute top-1/4 left-4 sm:left-16 opacity-75 animate-float-slow blur-[3px] scale-110 rotate-[-28deg]">
          <div className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl text-[#FF5A00]">
            <Dumbbell className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
        </div>

        {/* Haltere Flutuante Direito */}
        <div className="absolute top-1/3 right-6 sm:right-24 opacity-70 animate-float-reverse blur-[1.5px] scale-90 rotate-[22deg]">
          <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-lg text-[#FFA040]">
            <Dumbbell className="w-9 h-9 sm:w-12 sm:h-12" />
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. ELEMENTOS EM TELA CHEIA (ORGANIZAÇÃO INSPIRADA NA REFERÊNCIA)
         ========================================================================= */}
      
      {/* Topo: Cápsula Flutuante LETICE SANTANA FIT, Tag Central e Selo Giratório 360° */}
      <div className="relative z-20 pt-3 sm:pt-8 px-3 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Esquerda: Cápsula LETICE SANTANA FIT */}
        <div className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/65 backdrop-blur-md border border-white/15 shadow-xl shrink-0">
          <span className="font-display font-black text-[10px] sm:text-sm italic tracking-tight text-white flex items-center">
            LETICE SANTANA <span className="text-[#FF5A00] not-italic text-[8.5px] sm:text-xs font-bold px-1 sm:px-1.5 py-0.5 rounded bg-white/10 ml-1 sm:ml-1.5 border border-[#FF5A00]/30">FIT</span>
          </span>
        </div>

        {/* Centro: Tag / Badge de Topo com Indicador Pulsante (Centralizado de forma absoluta para ficar 100% no eixo central da tela) */}
        {slide.tagTitle && (
          <div className="absolute left-1/2 -translate-x-1/2 hidden min-[360px]:inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#FF5A00]/40 text-white text-[9.5px] sm:text-xs font-bold uppercase tracking-wider shadow-lg shrink-0 pointer-events-auto z-10">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF5A00] animate-ping" />
            <span className="text-[#FFA040]">{slide.tagTitle}</span>
          </div>
        )}

        {/* Direita: Selo Giratório 360° com dimensão segura para mobile */}
        <div className="pointer-events-auto shrink-0 z-10">
          <div className="relative w-12 h-12 sm:w-24 sm:h-24 flex items-center justify-center">
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <path
                id="introCirclePathFull"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[8.5px] font-black uppercase tracking-[2.3px] fill-white opacity-95">
                <textPath xlinkHref="#introCirclePathFull" startOffset="0%">
                  {slide.badgeCircularText}
                </textPath>
              </text>
            </svg>

            <div className="absolute w-6 h-6 sm:w-11 sm:h-11 rounded-full bg-[#FF5A00] text-white p-1 shadow-xl flex items-center justify-center border-2 border-white/40 animate-pulse">
              <Dumbbell className="w-2.5 h-2.5 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* 4.1 Título no Mobile (Branco e Laranja): Perfeitamente centralizado no espaço acima da cabeça da modelo */}
      <div className="sm:hidden relative z-20 px-4 max-w-md mx-auto w-full mt-10 min-[360px]:mt-14 min-[390px]:mt-18 min-[430px]:mt-22 mb-2 flex flex-col items-center justify-center text-center">
        <h1 className="font-display font-black text-[18px] min-[360px]:text-[16px] min-[400px]:text-[28px] mt-1 uppercase tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] max-w-xs min-[360px]:max-w-sm mx-auto text-center">
          {slide.titleMain ? (
            <>
              <span className="text-stroke-orange">{slide.titleMain}</span> <br />
              <span className="text-[#FFA040] text-stroke-black drop-shadow-[0_0_35px_rgba(255,160,64,0.7)]">
                {slide.titleHighlight}
              </span>
            </>
          ) : (
            <>
              <span className="text-stroke-orange">{slide.mainTitleTop} {slide.mainTitleMiddle}</span> <br />
              <span className="text-[#FFA040] text-stroke-black drop-shadow-[0_0_35px_rgba(255,160,64,0.7)]">
                {slide.mainTitleBottom}
              </span>
            </>
          )}
        </h1>
      </div>

      {/* 4.2 Bloco Central no Desktop: Título e Subtítulo centralizados */}
      <div className="hidden sm:flex relative z-20 px-8 lg:px-16 max-w-3xl mx-auto w-full my-auto flex-col items-center text-center">
        <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)] max-w-2xl mx-auto">
          {slide.titleMain ? (
            <>
              <span className="text-stroke-orange">{slide.titleMain}</span> <br />
              <span className="text-[#FFA040] text-stroke-black drop-shadow-[0_0_35px_rgba(255,160,64,0.7)]">
                {slide.titleHighlight}
              </span>
            </>
          ) : (
            <>
              <span className="text-stroke-orange">{slide.mainTitleTop} {slide.mainTitleMiddle}</span> <br />
              <span className="text-[#FFA040] text-stroke-black drop-shadow-[0_0_35px_rgba(255,160,64,0.7)]">
                {slide.mainTitleBottom}
              </span>
            </>
          )}
        </h1>

        <p className="mt-4 sm:mt-5 text-base md:text-lg text-gray-200 font-sans leading-relaxed max-w-lg mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-medium text-center">
          {slide.subtitle || slide.offerText}
        </p>
      </div>

      {/* 4.3 Subtítulo no Mobile (Texto em Branco): Posicionado em baixo, acima da seta e barra de contatos */}
      <div className="sm:hidden relative z-20 px-4 w-full mt-auto mb-1.5 flex flex-col items-center text-center">
        <p className="text-[15px] min-[360px]:text-xs mb-[80px] min-[400px]:text-[18px] mb-[80px] text-gray-200 font-sans leading-snug max-w-xs min-[360px]:max-w-[320px] mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] font-medium text-center">
          {slide.subtitle || slide.offerText}
        </p>
      </div>

      {/* Base: Barra Horizontal de Contatos em Linha Única no Mobile e Desktop */}
      <div className="relative z-20 w-full px-3 sm:px-12 lg:px-20 pb-2 sm:pb-5 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Indicador com a Seta Pulsando Posicionada em Cima da Barra (Conforme Solicitado no Mobile) */}
        <div className="flex justify-center mb-1.5 sm:mb-2.5">
          <button
            onClick={onScrollDown}
            aria-label="Rolar para o site principal"
            className="text-[#FF5A00] hover:text-white transition-colors p-1 flex items-center justify-center group cursor-pointer focus:outline-none"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce text-[#FF5A00] drop-shadow-[0_0_12px_rgba(255,90,0,0.9)]" />
          </button>
        </div>

        {/* Div com o Nome e o WhatsApp (Deslocada para a base da tela) */}
        <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 p-2 sm:p-3.5 rounded-2xl sm:rounded-2xl bg-black/85 backdrop-blur-xl border border-white/15 shadow-2xl w-full">
          
          {/* Esquerda: Logo + Website em linha */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink min-w-0">
            <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-[#FF5A00] text-white font-display font-black text-[10px] sm:text-xs uppercase tracking-wider shadow-md shrink-0 whitespace-nowrap">
              {slide.logoText}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-gray-300 tracking-tight">
              {slide.website}
            </span>
          </div>

          {/* Centro: Dots de Paginação */}
          {totalSlides > 1 && (
            <div className="flex items-center gap-1 sm:gap-2 shrink-0 px-1">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Ir para slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentSlide ? "w-4 sm:w-8 bg-[#FF5A00]" : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Direita: WhatsApp CTA em linha única */}
          <a
            href={slide.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-3 py-1.5 sm:py-2 px-2.5 sm:px-5 rounded-xl bg-gradient-to-r from-[#FF5A00] to-[#FF3D00] hover:brightness-110 text-white shadow-lg shadow-[#FF5A00]/30 transition-all active:scale-95 group shrink-0"
          >
            <div className="p-1 sm:p-1.5 rounded-full bg-black/40 text-white shrink-0">
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            </div>
            {/* Desktop: duas linhas com texto e telefone */}
            <div className="text-left hidden sm:block">
              <span className="block text-[10px] uppercase font-bold text-white/90 leading-none">
                {slide.whatsappText}
              </span>
              <span className="block text-xs sm:text-sm font-black tracking-wider text-white leading-tight mt-0.5">
                {slide.whatsappPhone}
              </span>
            </div>
            {/* Mobile: compacto em linha única */}
            <span className="block sm:hidden text-[11px] font-black uppercase tracking-wider text-white whitespace-nowrap">
              WhatsApp
            </span>
          </a>

        </div>

      </div>

    </section>
  );
}
