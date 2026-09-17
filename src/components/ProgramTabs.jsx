import React, { useState } from 'react';
import { Baby, Activity, HeartHandshake, Briefcase, Check, ArrowRight, MessageCircle, Clock, Calendar, Sparkles } from 'lucide-react';

export default function ProgramTabs() {
  const [activeTab, setActiveTab] = useState('pos-parto');

  const programs = [
    {
      id: 'pos-parto',
      title: 'Pós-Parto & Diástase Zero',
      label: 'Pós-Parto',
      icon: Baby,
      badge: 'Recuperação Segura',
      badgeColor: 'bg-[#FF5A00] text-white',
      headline: 'Restaure seu core profundo, feche a diástase e recupere sua autoestima pós-maternidade.',
      description: 'Desenvolvido especificamente para mães a partir da liberação médica (parto normal ou cesárea). Foco na ativação do assoalho pélvico, transverso do abdômen e estabilização lombar, combinando com nutrição adaptada para a amamentação.',
      benefits: [
        'Avaliação clínica presencial da diástase e competência abdominal',
        'Exercícios hipopressivos e ativação respiratória diafragmática',
        'Sem exercícios de impacto que possam sobrecarregar o assoalho pélvico',
        'Cardápio seguro e nutritivo sem comprometer a produção de leite'
      ],
      duration: 'Ciclos de 12 a 24 semanas',
      local: 'Boa Viagem, Casa Forte ou Domiciliar'
    },
    {
      id: 'menopausa',
      title: 'Menopausa & Longevidade Ativa',
      label: 'Menopausa 40+',
      icon: Activity,
      badge: 'Saúde Óssea & Metabolismo',
      badgeColor: 'bg-[#FF7A00] text-white',
      headline: 'Acelere o metabolismo, combata o acúmulo de gordura abdominal e proteja seus ossos.',
      description: 'Na transição para a menopausa, a queda de estrogênio reduz a taxa metabólica e favorece a osteopenia. O treino de força com cargas ajustadas estimula osteoblastos e preserva os músculos.',
      benefits: [
        'Treinamento resistido contra perda de densidade mineral óssea',
        'Alimentação rica em fitoestrógenos, cálcio e antioxidantes',
        'Manejo da insônia e fogachos através do controle do cortisol',
        'Suplementação orientada de creatina, ômega-3 e vitamina D3'
      ],
      duration: 'Acompanhamento Contínuo',
      local: 'Boa Viagem & Casa Forte'
    },
    {
      id: 'emagrecimento-tpm',
      title: 'Emagrecimento Sem Fome Emocional',
      label: 'Fim do Efeito Sanfona',
      icon: HeartHandshake,
      badge: 'Comportamental & TPM',
      badgeColor: 'bg-[#FFA040] text-[#090D14] font-bold',
      headline: 'Aprenda a comer com prazer, controle o apetite na TPM e emagreça sem rebote.',
      description: 'Focado em mulheres que já tentaram todas as dietas da moda e sempre voltam a engordar. Trabalhamos os gatilhos emocionais que te levam ao armário à noite.',
      benefits: [
        'Estratégias anti-compulsão com triptofano, magnésio e cacau',
        'Treinos dinâmicos de 45 a 50 minutos que queimam calorias sem cansaço excessivo',
        'Cardápio flexível com inclusão programada de refeições livres',
        'Comunidade de alunas e suporte diário via WhatsApp'
      ],
      duration: 'Protocolos de 8, 12 ou 24 semanas',
      local: 'Presencial ou Consultoria Online'
    },
    {
      id: 'executivas',
      title: 'Mulheres Executivas & Médicas',
      label: 'Rotina Acelerada',
      icon: Briefcase,
      badge: 'Alta Eficiência de Tempo',
      badgeColor: 'bg-[#090D14] text-[#FF5A00] border border-[#FF5A00]/40',
      headline: 'Resultados máximos para quem tem apenas 35 a 45 minutos por dia.',
      description: 'Para advogadas, médicas, empresárias e profissionais que vivem na correria. Treinos de alta densidade sem perda de tempo e planejamento de refeições práticas.',
      benefits: [
        'Horários flexíveis no início da manhã (a partir das 06h) ou noite',
        'Guia de marmitas práticas e opções rápidas para restaurantes em Recife',
        'Treino 100% monitorado sem filas ou conversas paralelas',
        'Vestiários completos com toalhas e amenidades para ir direto ao trabalho'
      ],
      duration: 'Planos Semestrais e Anuais',
      local: 'Estúdios Boa Viagem e Casa Forte'
    }
  ];

  const current = programs.find((p) => p.id === activeTab) || programs[0];
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5581989998899&text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o programa ${current.title} em Recife.`)}`;

  return (
    <section id="programas" className="py-10 sm:py-24 bg-[#090D14] text-white relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF5A00] text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-white/15">
            PROGRAMAS PERSONALIZADOS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-3 sm:mb-5">
            Qual é a sua fase de vida hoje?
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-gray-300 font-sans">
            Cada corpo feminino possui necessidades hormonais, articulares e emocionais distintas. Escolha o seu objetivo e veja o protocolo específico.
          </p>
        </div>

        {/* Abas Interativas com Deslize Horizontal no Mobile */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2 sm:px-0 no-scrollbar pb-1">
          {programs.map((prog) => {
            const Icon = prog.icon;
            const isActive = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-[#FF5A00] text-white shadow-xl shadow-[#FF5A00]/25 scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span>{prog.label}</span>
              </button>
            );
          })}
        </div>

        {/* Card do Programa Selecionado */}
        <div className="bg-[#0F1520] rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 shadow-xl border border-white/10 relative overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Informações Principais (7 Colunas) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <span className={`px-2.5 py-0.5 rounded-full ${current.badgeColor}`}>
                  {current.badge}
                </span>
                <span className="text-gray-400">• Recife - PE</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                {current.title}
              </h3>

              <p className="text-base font-semibold text-[#FFA040] mb-4">
                {current.headline}
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                {current.description}
              </p>

              <div className="space-y-3 mb-8">
                {current.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-[#FF5A00]/20 text-[#FF5A00] mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF5A00]" />
                  <span>Duração: <strong className="text-white">{current.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FF5A00]" />
                  <span>Atendimento: <strong className="text-white">{current.local}</strong></span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#FF5A00]/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Quero Saber Mais Sobre Este Programa</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visual Informativo / Box de Apoio (5 Colunas) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#111823] to-[#090D14] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full border border-[#FF5A00]/20">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FF5A00] text-white flex items-center justify-center mb-6 font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>

                <h4 className="font-display font-extrabold text-xl text-white mb-3">
                  O que está incluso em cada ciclo:
                </h4>

                <ul className="space-y-3.5 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]" />
                    <span>Bioimpedância médica com análise de gordura visceral</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]" />
                    <span>Avaliação postural e de mobilidade articular</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]" />
                    <span>Treinos gravados em vídeo no aplicativo exclusivo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]" />
                    <span>Canal direto no WhatsApp com personal e nutricionista</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]" />
                    <span>Ajustes quinzenais de dieta conforme sua evolução real</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-gray-400">
                <span>Vagas limitadas por turma para garantir atendimento individualizado.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
