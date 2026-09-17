import React, { useState } from 'react';
import { Play, Sparkles, X, Volume2 } from 'lucide-react';

/**
 * ============================================================================
 * COMPONENTE: SessaoCard (sessaCard)
 * ============================================================================
 * 
 * Componente modular de mídia com suporte a:
 * 1. Reprodução de VÍDEO REAL:
 *    - Inicia reprodução direta no card ou via modal.
 *    - Suporta URLs de stream MP4 ou embeds de vídeo (YouTube / Vimeo).
 *    - Controles nativos (play, pause, volume, tela cheia).
 * 2. Carregamento de PROVAS SOCIAIS:
 *    - Botão de acesso rápido integrado ("Carregar Provas Sociais")
 *      que conduz o usuário diretamente para os resultados reais de alunas (#resultados).
 * 3. Modo Imagem Institucional:
 *    - Exibe foto de treino com banner e dados de atendimento.
 * 
 * PROPRIEDADES (PROPS):
 * - type ('video' | 'image'): Modo do card. Padrão: 'video'.
 * - imageSrc (string): Imagem estática / thumbnail de capa.
 * - imageAlt (string): Descrição para acessibilidade da imagem.
 * - videoUrl (string): URL do vídeo a ser reproduzido (MP4 ou embed).
 * - badgeText (string): Texto de duração/descrição no canto inferior.
 * - bannerTitle (string): Título do banner (modo 'image').
 * - bannerSubtitle (string): Subtítulo do banner (modo 'image').
 * - onPlay (function): Callback disparado ao clicar no botão de play.
 * - onLoadSocialProof (function): Callback disparado ao clicar em "Carregar Provas Sociais".
 * - className (string): Classes CSS adicionais para o container.
 * ============================================================================
 */
import { coachVideoThumb } from '../assets/images';

export default function SessaoCard({
  type = 'video',
  imageSrc = coachVideoThumb,
  imageAlt = 'Apresentação visual da sessão',
  videoUrl = 'https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1&enablejsapi=1',
  badgeText = 'Assistir: Como funciona o método integrado (2 min)',
  bannerTitle = 'Atendimento Individualizado',
  bannerSubtitle = 'Estúdios climatizados em Boa Viagem & Casa Forte',
  onPlay,
  onLoadSocialProof,
  className = ''
}) {
  // Estado que controla se o vídeo real está sendo reproduzido diretamente no card
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  /**
   * Dispara o início da reprodução do vídeo real
   */
  const handleStartPlay = () => {
    setIsPlayingVideo(true);
    if (onPlay) {
      onPlay();
    }
  };

  /**
   * Encerra a reprodução e retorna à capa/thumbnail
   */
  const handleStopVideo = (e) => {
    e.stopPropagation();
    setIsPlayingVideo(false);
  };

  /**
   * Aciona a transição/carregamento das provas sociais
   */
  const handleTriggerSocialProof = (e) => {
    e.stopPropagation();
    if (onLoadSocialProof) {
      onLoadSocialProof();
    } else {
      // Fallback padrão: rola suavemente até a seção de resultados e destaca com brilho
      const socialEl = document.getElementById('resultados');
      if (socialEl) {
        socialEl.scrollIntoView({ behavior: 'smooth' });
        socialEl.classList.add('ring-4', 'ring-[#FF5A00]', 'transition-all', 'duration-500');
        setTimeout(() => socialEl.classList.remove('ring-4', 'ring-[#FF5A00]'), 2500);
      }
    }
  };

  return (
    /* Container com cantos arredondados, bordas em gradiente sutil e sombra 3D */
    <div className={`relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-[#111823] ${className}`}>
      
      {/* 
        ====================================================================
        CASO 1: VÍDEO ATIVO EM REPRODUÇÃO REAL
        - Renderiza o player ativo (iframe com autoplay ou tag video nativa).
        ====================================================================
      */}
      {type === 'video' && isPlayingVideo ? (
        <div className="relative w-full h-72 sm:h-96 bg-black flex items-center justify-center animate-fadeIn">
          {videoUrl.includes('youtube') || videoUrl.includes('vimeo') ? (
            /* Player embed responsivo com controles e áudio */
            <iframe
              src={videoUrl}
              title="Vídeo de Apresentação do Método Integrado"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            /* Player HTML5 nativo para arquivos MP4 */
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          )}

          {/* Botão de Fechar o Vídeo e Voltar à Capa */}
          <button
            type="button"
            onClick={handleStopVideo}
            aria-label="Voltar para a capa do vídeo"
            className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 shadow-lg cursor-pointer"
            title="Voltar à capa"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Barra Flutuante de Atalho: Carregar Provas Sociais durante o vídeo */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-auto">
            <button
              type="button"
              onClick={handleTriggerSocialProof}
              className="px-3.5 py-1.5 rounded-xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ver Provas Sociais (Alunas) ↗</span>
            </button>
          </div>
        </div>
      ) : (
        /* 
          ====================================================================
          CASO 2: THUMBNAIL / CAPA COM BOTÃO DE PLAY E AÇÃO DE PROVAS SOCIAIS
          ====================================================================
        */
        <>
          {/* Imagem de Fundo de Alta Resolução com Zoom ao passar o mouse */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-72 sm:h-96 object-cover object-center filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-700"
          />

          {/* Camada de Gradiente / Overlay */}
          {type === 'video' ? (
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors pointer-events-none" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-[#090D14]/20 to-transparent opacity-85 pointer-events-none" />
          )}

          {/* Botão Play Central com Animação Radar Pulsante */}
          {type === 'video' && (
            <button
              type="button"
              onClick={handleStartPlay}
              aria-label="Assistir ao vídeo do método integrado"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF5A00] hover:bg-[#FF7A00] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group/btn cursor-pointer z-20"
            >
              <div className="w-full h-full rounded-full flex items-center justify-center relative">
                <span className="absolute inset-0 rounded-full bg-[#FF5A00] animate-ping opacity-45 pointer-events-none" />
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-white relative z-10" />
              </div>
            </button>
          )}

          {/* Rodapé do Card de Vídeo com Etiqueta e Botão de Provas Sociais */}
          {type === 'video' && (
            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2">
              {/* Etiqueta com Duração do Vídeo */}
              <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-[11px] font-bold text-gray-200 border border-white/15 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-pulse" />
                <span>{badgeText}</span>
              </div>

              {/* Botão de Atalho para Carregar Provas Sociais */}
              <button
                type="button"
                onClick={handleTriggerSocialProof}
                className="px-3.5 py-1.5 rounded-xl bg-white/15 hover:bg-[#FF5A00] backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider border border-white/20 hover:border-[#FF5A00] transition-all flex items-center gap-1.5 shadow-md cursor-pointer hover:scale-105 active:scale-95"
                title="Carregar Casos Reais e Antes/Depois"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFA040] group-hover:text-white" />
                <span>Provas Sociais ↗</span>
              </button>
            </div>
          )}

          {/* Banner de Informações para type="image" */}
          {type === 'image' && (
            <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-2xl bg-[#090D14]/85 backdrop-blur-md border border-white/10 text-xs shadow-xl">
              <span className="text-[#FF5A00] font-black uppercase tracking-wider block mb-0.5">
                {bannerTitle}
              </span>
              <span className="text-gray-300 font-medium">
                {bannerSubtitle}
              </span>
            </div>
          )}
        </>
      )}

    </div>
  );
}

// Alias export compatível com 'sessaCard'
export { SessaoCard as SessaCard };
