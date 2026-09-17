import React, { useState, useRef } from 'react';
import { Star, MessageCircle, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { defaultSocialProofCases } from '../data/socialProofCases';

/**
 * SocialProof (Prova Social) - Comparador Expandido em Alta Resolução
 * com slider fluido baseado em CSS clip-path e depoimentos de alunas.
 */
export default function SocialProof({
  cases = defaultSocialProofCases,
  defaultWhatsappBase = "https://api.whatsapp.com/send?phone=5581989998899",
  className = ""
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeCase, setActiveCase] = useState(2); // Juliana Mendes como padrão conforme print
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const current = cases[activeCase] || cases[0];
  const whatsappUrl = `${defaultWhatsappBase}&text=${encodeURIComponent(
    `Olá! Vi o caso real da ${current.name} (${current.program}) na página de Prova Social e gostaria de agendar uma avaliação inicial para o meu perfil.`
  )}`;

  // Atualiza posição do slider de forma proporcional
  const updateSliderPosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(Math.round(percent));
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="resultados" className={`py-10 sm:py-24 bg-[#090D14] text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24 ${className}`}>
      
      {/* Background Glows Esportivos */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FFA040]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção de Prova Social */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF5A00] text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-white/15 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A00]" />
            <span>RESULTADOS REAIS EM RECIFE</span>
          </span>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-3 sm:mb-5">
            Transformações que começam <br className="hidden sm:inline" />
            <span className="text-[#FF5A00]">de dentro para fora</span>
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-gray-300 font-sans leading-relaxed">
            Sem dietas malucas, sem remédios que causam rebote. Veja os resultados reais de quem confiou no acompanhamento integrado.
          </p>
        </div>

        {/* Seletores de Casos de Alunas com Deslize Horizontal no Mobile */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2 sm:px-0 no-scrollbar pb-1">
          {cases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCase(idx)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeCase === idx
                  ? "bg-[#FF5A00] text-white shadow-lg shadow-[#FF5A00]/30 scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/15 border border-white/10"
              }`}
            >
              <span>{c.name}</span>
              <span className="opacity-50">•</span>
              <span className="text-xs font-normal opacity-85">{c.neighborhood}</span>
            </button>
          ))}
        </div>

        {/* Card Principal de Prova Social e Comparação */}
        <div className="bg-gradient-to-br from-[#0F1520] to-[#141B26] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            
            {/* Comparador Antes e Depois Interativo (6 Colunas) */}
            <div className="lg:col-span-6 flex flex-col items-center w-full">
              <div
                ref={containerRef}
                tabIndex={0}
                role="slider"
                aria-valuenow={sliderPos}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Controle deslizante de comparação antes e depois"
                onKeyDown={handleKeyDown}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="relative w-full max-w-[560px] lg:max-w-[580px] xl:max-w-[620px] h-[400px] min-[380px]:h-[440px] sm:h-[540px] md:h-[640px] lg:h-[740px] rounded-2xl sm:rounded-3xl overflow-hidden select-none border-2 border-[#FF5A00] shadow-[0_0_40px_rgba(255,90,0,0.3)] bg-[#070A10] cursor-ew-resize touch-none group focus:outline-none focus:ring-2 focus:ring-[#FF5A00]"
              >
                
                {/* Imagem "Depois" (Foto cheia 100% da div, sem foto atrás) */}
                <img
                  src={current.afterImg}
                  alt={`Resultado depois - ${current.name}`}
                  className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
                  loading="eager"
                />
                
                {/* Badge DEPOIS fixo no canto superior direito */}
                <span className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#FF5A00] text-white font-black text-xs shadow-xl z-20 border border-white/30 tracking-wider pointer-events-none">
                  DEPOIS
                </span>

                {/* Imagem "Antes" (Foto cheia 100% da div, sem foto atrás, revelada com clip-path) */}
                <div
                  className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                    WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                  }}
                >
                  <img
                    src={current.beforeImg}
                    alt={`Estado antes - ${current.name}`}
                    className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
                    loading="eager"
                  />
                </div>

                {/* Badge ANTES fixo no canto superior esquerdo */}
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/85 text-white font-black text-xs shadow-xl z-20 border border-white/20 tracking-wider backdrop-blur-md pointer-events-none">
                  ANTES
                </span>

                {/* Linha Divisória Vertical do Slider */}
                <div
                  className="absolute top-0 bottom-0 w-[3px] bg-white pointer-events-none z-30 shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Botão de Arraste Central */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center text-[#141A24] font-black text-xs border-2 border-[#FF5A00] group-hover:scale-110 transition-transform">
                    <span className="text-[#FF5A00] font-bold text-sm select-none">↔</span>
                  </div>
                </div>

                {/* Range invisível para leitores de tela */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  aria-label="Controle de arraste antes e depois"
                  className="sr-only"
                />
              </div>

              <span className="text-xs text-gray-400 mt-3.5 font-medium flex items-center gap-1.5 select-none">
                <span>👆 Arraste a barra lateral para comparar o resultado</span>
              </span>
            </div>

            {/* Depoimento, Métricas e Ação (6 Colunas) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#FF5A00] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-white ml-2">5.0 • Caso Auditado</span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                  {current.name}, {current.age}
                </h3>
                <p className="text-sm font-semibold text-[#FFA040] mb-6">
                  {current.program} • {current.neighborhood}
                </p>

                {/* Citação do Caso */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6 relative">
                  <Quote className="w-7 h-7 text-[#FF5A00]/30 absolute top-3 right-3" />
                  <p className="text-sm sm:text-base text-gray-200 italic leading-relaxed relative z-10 font-sans">
                    "{current.quote}"
                  </p>
                </div>

                {/* Métricas do Caso */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-8">
                  {current.stats.map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-wider">{st.label}</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#FF5A00] mt-0.5 block">{st.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de Conversão WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-[#FF5A00]/30 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Quero Resultados Como Este</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
