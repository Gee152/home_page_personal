import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PhilosophyVideoSection from './PhilosophyVideoSection';
import SessaoCard from './SessaoCard';
import { painPointHormonal } from '../assets/images';

/**
 * ============================================================================
 * COMPONENTE: PhilosophySection
 * ============================================================================
 * 
 * Seção composta por dois blocos estruturantes inspirados no modelo esportivo:
 * 1. PhilosophyVideoSection:
 *    - Apresentação da Filosofia Letice Santana Fit.
 *    - Player de VÍDEO REAL com thumbnail do treinador.
 *    - Integração de clique para CARREGAR AS PROVAS SOCIAIS (#resultados).
 * 2. Personal Training:
 *    - Detalhamento do treinamento individualizado, biomecânica e benefícios.
 *    - Card visual com SessaoCard (type="image").
 *    - Botão de agendamento no WhatsApp.
 * ============================================================================
 */
export default function PhilosophySection() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Gostaria de agendar com o Personal Trainer da consultoria em Recife.");

  return (
    <section id="filosofia" className="py-10 sm:py-20 lg:py-24 bg-[#090D14] text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      
      {/* Container Principal com Margens Padronizadas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 
          ====================================================================
          SESSÃO 1 COMPONENTIZADA: Filosofia com Vídeo Real e Provas Sociais
          ====================================================================
        */}
        <PhilosophyVideoSection />

        {/* 
          ====================================================================
          SESSÃO 2: Personal Training — (Layout 2 Colunas com Ordem Invertida)
          ====================================================================
        */}
        <div id="personal-training" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Imagem Institucional do Personal Trainer */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SessaoCard
              type="image"
              imageSrc={painPointHormonal}
              imageAlt="Treinamento individualizado e biomecânica com Personal Trainer em Recife"
              bannerTitle="Atendimento Individualizado"
              bannerSubtitle="Estúdios climatizados em Boa Viagem & Casa Forte"
            />
          </div>

          {/* Coluna Direita: Conteúdo de Personal Training & Benefícios */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            
            {/* Tag Oficial de Autoridade e Credenciais */}
            <div className="hidden sm:flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] sm:text-xs font-bold text-[#FFA040] border border-[#FFA040]/30 shadow-sm">
                🎓 Ed. Física • Nutrição • Biomedicina 🧪
              </span>
              <a
                href="https://www.instagram.com/emagreserpi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FF5A00]/20 hover:bg-[#FF5A00]/30 text-[11px] font-black text-[#FF5A00] border border-[#FF5A00]/40 transition-colors"
              >
                <span>@emagreserpi</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-[#FF5A00]">Treino Personalizado</span>
                <span className="text-white">—</span>
              </h2>
            </div>

            {/* Chamada de Posicionamento e Resultados */}
            <div className="mb-4 sm:mb-5 p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-black/90 to-[#111823]/90 border border-[#FF5A00]/30 shadow-md">
              <p className="text-xs sm:text-sm font-black text-white leading-snug">
                🔥 Consultoria esportiva para quem busca resultados: <span className="text-[#FF5A00]">BOORAAA ?! ⤵️</span>
              </p>
            </div>

            <p className="text-gray-300 text-xs sm:text-base leading-relaxed mb-5 sm:mb-6 font-sans">
              O escopo de atuação do nosso treinamento pessoal tem foco prioritário na prevenção de lesões, ativação correta de glúteos e core profundo, e otimização hormonal da mulher saudável ou em reabilitação (pós-parto e menopausa).
            </p>

            <ul className="space-y-3 mb-8 text-xs sm:text-sm text-gray-200 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFA040] shrink-0" />
                <span>Bioimpedância médica com rastreamento de massa magra e gordura</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFA040] shrink-0" />
                <span>Correção postural em tempo real sem salas lotadas ou disputas de aparelhos</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFA040] shrink-0" />
                <span>Integração semanal direta com o cardápio da nutricionista clínica</span>
              </li>
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#FF5A00]/30 transition-all hover:scale-105 active:scale-95 group"
            >
              <span>Agendar Meu Personal</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
