import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, X, Play, CheckCircle2, MessageCircle } from 'lucide-react';
import SessaoCard from './SessaoCard';
import { coachVideoThumb } from '../assets/images';

/**
 * ============================================================================
 * COMPONENTE: PhilosophyVideoSection
 * ============================================================================
 * 
 * Seção institucional com:
 * 1. Apresentação da Filosofia do Método Letice Santana Fit (texto & CTA).
 * 2. Player de VÍDEO REAL com thumbnail do coach e controles de reprodução.
 * 3. Integração direta com PROVAS SOCIAIS:
 *    - Ao clicar no botão de Provas Sociais ou na etiqueta do card,
 *      conduz a cliente imediatamente para a seção de antes/depois (#resultados).
 * 4. Modal interativo de alta resolução para visualização expandida do vídeo.
 * ============================================================================
 */
export default function PhilosophyVideoSection({
  videoUrl = "https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1&enablejsapi=1",
  className = ""
}) {
  // Estado que controla a abertura do modal com o vídeo em tela cheia/expandida
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  /**
   * Função que conduz o usuário suavemente até a seção de Provas Sociais (#resultados)
   * e adiciona um efeito de iluminação temporário para destacar a área de resultados.
   */
  const handleScrollToSocialProof = () => {
    // Fecha o modal caso esteja aberto
    setVideoModalOpen(false);

    const socialSection = document.getElementById('resultados');
    if (socialSection) {
      socialSection.scrollIntoView({ behavior: 'smooth' });
      
      // Feedback visual: anel brilhante em laranja por 2.5 segundos
      socialSection.classList.add('ring-4', 'ring-[#FF5A00]', 'transition-all', 'duration-700');
      setTimeout(() => {
        socialSection.classList.remove('ring-4', 'ring-[#FF5A00]');
      }, 2500);
    }
  };

  return (
    <div className={`relative mb-14 sm:mb-24 lg:mb-28 ${className}`}>
      
      {/* Marca d'água gigante ao fundo (TREINO FEMININO do modeloSite.png) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden lg:block">
        <span className="font-display font-black text-8xl xl:text-[140px] uppercase text-stroke-outline opacity-25">
          TREINO FEMININO
        </span>
      </div>

      {/* Grid responsivo: Coluna de Texto + Coluna de Vídeo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
        
        {/* 
          ------------------------------------------------------------------
          COLUNA DO VÍDEO (No Mobile inicia primeiro com o card do vídeo)
          ------------------------------------------------------------------
        */}
        <div className="lg:col-span-6 relative z-10 order-1 lg:order-2">
          {/* No mobile: cabeçalho da sessão antes do vídeo */}
          <div className="lg:hidden text-center mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10.5px] font-bold text-[#FFA040] border border-white/15 mb-2">
              <span>Emagrecimento • Saúde • Fitness</span>
              <span>•</span>
              <a 
                href="https://www.instagram.com/emagreserpi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FF5A00] font-black hover:underline inline-flex items-center gap-0.5"
              >
                <span>@emagreserpi</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <h2 className="font-display font-black text-2xl uppercase tracking-tight text-white flex items-center justify-center gap-2">
              <span>NOSSA FILOSOFIA & VÍDEO</span>
              <span className="text-[#FF5A00]">—</span>
            </h2>
          </div>

          <SessaoCard
            type="video"
            imageSrc={coachVideoThumb}
            imageAlt="Apresentação da Filosofia e Método pelo Coach de Treino Feminino"
            videoUrl={videoUrl}
            badgeText="Assistir: Como funciona o método integrado (2 min)"
            onPlay={() => setVideoModalOpen(true)}
            onLoadSocialProof={handleScrollToSocialProof}
          />
        </div>

        {/* 
          ------------------------------------------------------------------
          COLUNA DE TEXTO & CTAs (No Desktop à esquerda, no Mobile abaixo do vídeo)
          ------------------------------------------------------------------
        */}
        <div className="lg:col-span-6 relative z-10 order-2 lg:order-1">
          {/* Cabeçalho exclusivo para Desktop */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-[#FFA040] border border-white/15 mb-3">
            <span>Emagrecimento • Saúde • Fitness</span>
            <span>•</span>
            <a 
              href="https://www.instagram.com/emagreserpi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FF5A00] font-black hover:underline inline-flex items-center gap-1"
            >
              <span>@emagreserpi</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3 mb-3 sm:mb-4">
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-white flex items-center gap-2">
              <span>NOSSA FILOSOFIA</span>
              <span className="text-[#FF5A00]">—</span>
            </h2>
          </div>

          <p className="text-gray-300 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 font-sans">
            Conforme resumido em nossa filosofia e missão, acreditamos que o potencial para alcançar qualquer meta de saúde, estética e recomposição corporal reside dentro de cada mulher. Unimos o treino de força de alta precisão ao acolhimento nutricional para transformar seu corpo sem sofrimento. 💪
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
            {/* Botão de Conhecer a História */}
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#FF5A00]/30 transition-all hover:scale-105 active:scale-95 group text-center"
            >
              <span>Conheça Nossa História</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Botão Direto para Carregar Provas Sociais */}
            <button
              type="button"
              onClick={handleScrollToSocialProof}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-5 sm:py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/15 backdrop-blur-sm transition-all hover:scale-105 cursor-pointer text-center"
            >
              <Sparkles className="w-4 h-4 text-[#FFA040]" />
              <span>Ver Provas Sociais</span>
            </button>
          </div>
        </div>

      </div>

      {/* 
        ====================================================================
        MODAL DE VÍDEO INTERATIVO COM PROVAS SOCIAIS
        - Exibido ao clicar no Play para visualização expandida.
        ====================================================================
      */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#111823] rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-5 sm:p-7">
            
            {/* Botão de Fechar Modal */}
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              aria-label="Fechar vídeo"
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="mb-4 pr-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FF5A00] block mb-1">
                Apresentação do Método Integrado
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                Como Funciona a Consultoria Feminina em Recife
              </h3>
            </div>

            {/* Player de Vídeo Responsivo 16:9 */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black mb-5 border border-white/10 shadow-inner">
              <iframe
                src={videoUrl}
                title="Apresentação Oficial do Método Letice Santana Fit"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Rodapé do Modal com Chamada Direta para as Provas Sociais */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-center sm:text-left">
                <span className="text-xs text-gray-300 font-medium block">
                  Pronta para ver os resultados reais das nossas alunas?
                </span>
                <span className="text-[11px] text-[#FFA040] font-bold">
                  Casos auditados de Boa Viagem, Casa Forte e Espinheiro
                </span>
              </div>

              <button
                type="button"
                onClick={handleScrollToSocialProof}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#FF5A00]/30 transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Carregar Provas Sociais ↗</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
