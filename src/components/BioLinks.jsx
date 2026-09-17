import React, { useState } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  Share2, 
  Check, 
  Calendar, 
  Award, 
  Instagram, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Globe,
  ArrowRight
} from 'lucide-react';
import { telaPulsanteAntesCroll } from '../assets/images';

export function isBioLinksRoute() {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  const path = window.location.pathname.toLowerCase();
  return params.get('page') === 'links' || path.includes('/links') || path.includes('/bio');
}

export default function BioLinks({ onNavigateHome }) {
  const [copied, setCopied] = useState(false);

  // Função para compartilhar o link da bio
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Consultoria Feminina Recife | Personal & Nutrição",
          text: "Emagrecimento definitivo e saúde da mulher com acompanhamento integrado em Recife.",
          url: url,
        });
      } catch (err) {
        // Fallback silencioso caso o usuário cancele
      }
    } else {
      // Fallback para Clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        // Fallback sem suporte
      }
    }
  };

  const whatsappBase = "https://api.whatsapp.com/send?phone=5581989998899";
  
  const bioLinks = [
    {
      id: "whatsapp-avaliacao",
      name: "Agendar Avaliação Inicial",
      actionText: "Atendimento imediato em Boa Viagem ou Casa Forte",
      destUrlText: "WhatsApp Oficial",
      badge: "Mais Rápido",
      badgeColor: "bg-[#FF5A00] text-white",
      icon: MessageCircle,
      href: `${whatsappBase}&text=${encodeURIComponent("Olá! Vim pelo link da bio e gostaria de agendar minha avaliação inicial para o programa de emagrecimento.")}`,
      isExternal: true,
      highlight: true
    },
    {
      id: "quiz-metabolico",
      name: "Diagnóstico Metabólico & Fome Emocional",
      actionText: "Descubra o protocolo exato para o seu perfil",
      destUrlText: "Quiz Gratuito em 1 min",
      badge: "Destaque",
      badgeColor: "bg-[#FF7A00] text-white",
      icon: Sparkles,
      href: "#diagnostico",
      onClick: () => {
        if (onNavigateHome) {
          onNavigateHome();
          setTimeout(() => {
            const el = document.getElementById('quiz-metabolico');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }
      },
      isExternal: false
    },
    {
      id: "unidades-recife",
      name: "Estúdios Boa Viagem & Casa Forte",
      actionText: "Conheça as instalações e horários de treino",
      destUrlText: "Ver Localizações",
      icon: MapPin,
      href: "#unidades",
      onClick: () => {
        if (onNavigateHome) {
          onNavigateHome();
          setTimeout(() => {
            const el = document.getElementById('unidades');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }
      },
      isExternal: false
    },
    {
      id: "programas-mulher",
      name: "Programas: Pós-Parto e Menopausa",
      actionText: "Diástase Zero e Aceleração Metabólica 40+",
      destUrlText: "Conhecer Metodologia",
      icon: Award,
      href: "#programas",
      onClick: () => {
        if (onNavigateHome) {
          onNavigateHome();
          setTimeout(() => {
            const el = document.getElementById('programas');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }
      },
      isExternal: false
    },
    {
      id: "antes-depois",
      name: "Resultados Reais de Alunas",
      actionText: "Casos reais de mulheres em Recife",
      destUrlText: "Galeria de Transformações",
      icon: Calendar,
      href: "#resultados",
      onClick: () => {
        if (onNavigateHome) {
          onNavigateHome();
          setTimeout(() => {
            const el = document.getElementById('resultados');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }
      },
      isExternal: false
    },
    {
      id: "instagram-oficial",
      name: "Instagram Oficial • @emagreserpi",
      actionText: "Dicas diárias de emagrecimento, treinos e bastidores",
      destUrlText: "@emagreserpi",
      icon: Instagram,
      href: "https://www.instagram.com/emagreserpi/",
      isExternal: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090D14] via-[#0F1520] to-[#090D14] text-white flex flex-col items-center justify-between px-4 py-6 font-sans relative selection:bg-[#FF5A00] selection:text-white">
      {/* Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#FF5A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FFA040]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card Container (max-w-md estrito) */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center relative z-10">
        
        {/* Top Bar: Retornar ao Site & Botão Compartilhar */}
        <div className="w-full flex items-center justify-between mb-6 pt-2">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-semibold text-[#F9F7F1] transition-all border border-white/10"
          >
            <Globe className="w-3.5 h-3.5 text-[#FF5A00]" />
            <span>Acessar Site Completo</span>
          </button>

          <button
            onClick={handleShare}
            aria-label="Compartilhar página de links"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all border border-white/10 hover:scale-105 active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 text-[#FFA040]" /> : <Share2 className="w-4 h-4 text-white" />}
          </button>
        </div>

        {/* Toast Notificação de Link Copiado */}
        {copied && (
          <div className="fixed top-4 bg-[#FF5A00] text-white font-bold text-xs py-2 px-4 rounded-full shadow-xl animate-bounce z-50 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Link copiado para a área de transferência!
          </div>
        )}

        {/* Bloco 2: Perfil / Header do Usuário */}
        <div className="flex flex-col items-center text-center mb-7">
          {/* Avatar com Borda em Gradiente Laranja */}
          <div className="relative mb-3 group">
            <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#FF5A00] via-[#FFA040] to-[#FF7A00] shadow-lg shadow-[#FF5A00]/20 animate-pulse-neon">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#090D14] border-2 border-[#090D14]">
                <img 
                  src={telaPulsanteAntesCroll} 
                  alt="Coach @emagreserpi - Emagrecimento Feminino Recife" 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
            {/* Selo de Verificado / Status Online */}
            <div className="absolute bottom-1 right-1 bg-[#FF5A00] text-white rounded-full p-1 border-2 border-[#090D14] shadow-md flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 stroke-[3]" />
            </div>
          </div>

          {/* Nome Principal & Instagram Tag */}
          <h1 className="text-2xl font-black tracking-tight text-[#F9F7F1] flex items-center gap-1.5 font-display">
            LETICE SANTANA FIT
          </h1>
          
          <a
            href="https://www.instagram.com/emagreserpi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-0.5 text-xs font-black text-[#FFA040] hover:text-[#FF5A00] transition-colors"
          >
            <span>@emagreserpi</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Credenciais Acadêmicas Oficiais */}
          <div className="inline-flex items-center gap-1.5 mt-2 px-3.5 py-1 rounded-full bg-white/10 text-[11px] sm:text-xs font-bold text-[#FF5A00] tracking-wide border border-[#FF5A00]/30 shadow-sm">
            <span>🎓 Ed. Física | Acad. Nutrição • Biomedicina 🧪</span>
          </div>

          {/* Mini Bio Oficial de Impacto */}
          <div className="mt-3 text-xs text-gray-200 max-w-xs leading-relaxed font-sans">
            <p className="font-bold text-[#FFA040] tracking-wide uppercase text-[11px]">
              Emagrecimento • Saúde • Fitness
            </p>
            <p className="mt-1 text-gray-300 font-semibold">
              🔥 CONSULTORIA ESPORTIVA para quem busca RESULTADOS! <br />
              <span className="text-white font-black">BOORAAA ?! ⤵️</span>
            </p>
          </div>

          {/* Tags de Localização */}
          <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-gray-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#FF5A00]" />
              Boa Viagem
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#FFA040]" />
              Casa Forte
            </span>
            <span>•</span>
            <span className="text-[#FF7A00]">Online</span>
          </div>
        </div>

        {/* Bloco 3: Lista de Links de Conversão (Action Cards) */}
        <div className="w-full space-y-3.5">
          {bioLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={link.onClick}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={`group relative flex items-center justify-between w-full p-3.5 rounded-2xl transition-all duration-200 border text-left ${
                  link.highlight
                    ? "bg-gradient-to-r from-white/15 to-white/10 hover:from-white/25 hover:to-white/15 border-[#FF5A00]/60 shadow-lg shadow-[#FF5A00]/10 hover:scale-[1.02]"
                    : "bg-white/10 hover:bg-white/15 border-white/10 hover:border-white/20 hover:scale-[1.01]"
                }`}
              >
                {/* Lado Esquerdo: Ícone + Textos */}
                <div className="flex items-center gap-3.5 min-w-0 pr-2">
                  <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${
                    link.highlight 
                      ? "bg-[#FF5A00] text-white" 
                      : "bg-white/10 text-[#FF5A00] group-hover:bg-[#FF5A00] group-hover:text-white transition-colors"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#F9F7F1] tracking-tight group-hover:text-[#FF5A00] transition-colors">
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${link.badgeColor}`}>
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-300 mt-0.5 truncate">
                      {link.actionText}
                    </p>
                  </div>
                </div>

                {/* Seta Lateral Indicadora */}
                <div className="shrink-0 text-gray-400 group-hover:text-[#FF5A00] group-hover:translate-x-1 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Card de Atendimento de Urgência / Plantão WhatsApp */}
        <div className="w-full mt-5 p-3.5 rounded-2xl bg-[#FF5A00]/15 border border-[#FF5A00]/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5A00]"></span>
            </span>
            <div>
              <p className="text-xs font-bold text-white">Vagas Limitadas para Recife</p>
              <p className="text-[10px] text-gray-300">Agendamentos abertos para este mês</p>
            </div>
          </div>
          <a
            href={`${whatsappBase}&text=${encodeURIComponent("Olá! Gostaria de verificar a disponibilidade de vagas para atendimento presencial em Recife.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-[#FF5A00] text-white text-xs font-bold hover:bg-[#FF7A00] transition-colors flex items-center gap-1 shrink-0"
          >
            <span>Consultar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Bloco 4: Rodapé Institucional */}
      <footer className="w-full max-w-md mx-auto text-center mt-8 pt-4 border-t border-white/10 text-[11px] text-gray-400">
        <p className="mb-1">
          © {new Date().getFullYear()} Letice Santana Fit - Consultoria Integrada de Saúde Feminina
        </p>
        <p className="text-[10px] text-gray-500">
          Atendimento Clínico & Presencial • Boa Viagem & Casa Forte • Recife - PE
        </p>
        
        <div className="mt-3">
          <button 
            onClick={onNavigateHome}
            className="text-xs text-[#FF5A00] hover:underline font-semibold"
          >
            ← Voltar para a Apresentação Completa
          </button>
        </div>
      </footer>
    </div>
  );
}
