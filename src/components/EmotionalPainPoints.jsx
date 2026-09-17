import React from 'react';
import { HeartCrack, Brain, Moon, Flame, Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';
import PainPointsGrid from './PainPointsGrid';
import {
  painPointCompulsion,
  painPointHormonal,
  painPointCore,
  painPointMenopause
} from '../assets/images';

export default function EmotionalPainPoints() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Me identifiquei muito com a parte da fome emocional e gostaria de entender como a consultoria pode me ajudar.");

  const painPoints = [
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


  return (
    <section id="dores" className="py-10 sm:py-20 bg-[#090D14] relative overflow-hidden text-white scroll-mt-20 sm:scroll-mt-24">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#FF5A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A00]/15 border border-[#FF5A00]/30 text-[#FF5A00] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A00]" />
            <span>Acolhimento & Ciência Sem Julgamento</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-5">
            Você não precisa de mais <br className="hidden sm:inline" />
            <span className="text-[#FF5A00]">força de vontade</span>. Precisa de modulação.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
            Quantas vezes você começou uma dieta na segunda-feira para abandoná-la na sexta por ansiedade? 
            O erro nunca esteve na sua disciplina, mas em tentar aplicar protocolos masculinos ou genéricos a um corpo feminino cíclico.
          </p>
        </div>

        {/* Grid de Cards de Dores Acolhidas (Estética Paralelepípedo Esportivo modeloSite.png) */}
        <PainPointsGrid items={painPoints} defaultWhatsappBase="https://api.whatsapp.com/send?phone=5581989998899" />

      </div>
    </section>
  );
}
