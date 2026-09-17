import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, MessageCircle } from 'lucide-react';

export default function MetabolicQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    objective: '',
    struggle: '',
    location: ''
  });

  const step1Options = [
    { id: 'pos-parto', label: 'Quero recuperar meu corpo e fechar a diástase após a gestação' },
    { id: 'menopausa', label: 'Estou na fase 40+ ou menopausa com acúmulo de gordura abdominal' },
    { id: 'ansiedade', label: 'Tenho compulsão por doces e sofro com efeito sanfona' },
    { id: 'alta-rotina', label: 'Sou profissional ocupada e tenho menos de 50 minutos diários' }
  ];

  const step2Options = [
    { id: 'falta-tempo', label: 'Falta de tempo para planejar dieta e treinar' },
    { id: 'fome-emocional', label: 'Ansiedade, estresse do trabalho e fome emocional' },
    { id: 'dores', label: 'Dores articulares / medo de lesão ao treinar sozinha' },
    { id: 'metabolismo-lento', label: 'Metabolismo travado após os 35 ou gestações' }
  ];

  const step3Options = [
    { id: 'boa-viagem', label: 'Estúdio Exclusivo em Boa Viagem (Recife)' },
    { id: 'casa-forte', label: 'Estúdio Exclusivo em Casa Forte (Recife)' },
    { id: 'domiciliar', label: 'Atendimento Personal Domiciliar em Recife' },
    { id: 'online', label: 'Consultoria Híbrida / Online com Acompanhamento' }
  ];

  const handleSelect = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const resetQuiz = () => {
    setAnswers({ objective: '', struggle: '', location: '' });
    setStep(1);
  };

  const generateWhatsAppMessage = () => {
    const text = `Olá! Acabei de preencher o diagnóstico rápido no site:
- *Objetivo:* ${answers.objective}
- *Principal Dificuldade:* ${answers.struggle}
- *Preferência:* ${answers.location}

Gostaria de agendar minha avaliação diagnóstica com a equipe!`;
    return `https://api.whatsapp.com/send?phone=5581989998899&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="quiz" className="py-10 sm:py-24 bg-[#090D14] text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF5A00]/10 via-[#FFA040]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header do Quiz */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF5A00] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Diagnóstico Rápido em 1 Minuto</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#F9F7F1] tracking-tight mb-3 sm:mb-4">
            Descubra o protocolo exato para o seu perfil hormonal e rotina
          </h2>

          <p className="text-xs sm:text-base text-gray-300 font-sans">
            Responda a 3 perguntas simples para receber uma análise preliminar da nossa equipe clínica.
          </p>
        </div>

        {/* Card do Quiz */}
        <div className="bg-[#0F1520] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative">
          
          {/* Barra de Progresso */}
          {step <= 3 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-2">
                <span>Passo {step} de 3</span>
                <span className="text-[#FF5A00]">{Math.round((step / 3) * 100)}% Concluído</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF5A00] to-[#FFA040] transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Pergunta 1 */}
          {step === 1 && (
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                1. Qual é o seu objetivo principal ou fase de vida atual?
              </h3>
              <div className="space-y-3">
                {step1Options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('objective', opt.label)}
                    className="w-full text-left p-4 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#FF5A00] transition-all font-semibold text-sm text-gray-200 flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF5A00] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pergunta 2 */}
          {step === 2 && (
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                2. Qual tem sido a sua maior dificuldade com o emagrecimento?
              </h3>
              <div className="space-y-3">
                {step2Options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('struggle', opt.label)}
                    className="w-full text-left p-4 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#FF5A00] transition-all font-semibold text-sm text-gray-200 flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF5A00] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="mt-6 text-xs text-gray-400 hover:text-white"
              >
                ← Voltar pergunta anterior
              </button>
            </div>
          )}

          {/* Pergunta 3 */}
          {step === 3 && (
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                3. Onde você prefere realizar seu acompanhamento?
              </h3>
              <div className="space-y-3">
                {step3Options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('location', opt.label)}
                    className="w-full text-left p-4 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#FF5A00] transition-all font-semibold text-sm text-gray-200 flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF5A00] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-6 text-xs text-gray-400 hover:text-white"
              >
                ← Voltar pergunta anterior
              </button>
            </div>
          )}

          {/* Tela de Resultado / Conversão para WhatsApp */}
          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#FF5A00] text-white flex items-center justify-center mx-auto mb-4 font-black shadow-lg shadow-[#FF5A00]/30 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                Diagnóstico Concluído!
              </h3>

              <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
                Identificamos que o seu perfil necessita do <strong>Protocolo Duplo Integrado</strong> para desbloquear a queima de gordura e regularizar a saciedade.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto mb-8 text-left text-xs text-gray-300 space-y-1.5">
                <p><strong>🎯 Objetivo:</strong> {answers.objective}</p>
                <p><strong>⚡ Ponto Crítico:</strong> {answers.struggle}</p>
                <p><strong>📍 Preferência:</strong> {answers.location}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-extrabold text-sm shadow-xl shadow-[#FF5A00]/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enviar Diagnóstico e Falar no WhatsApp</span>
                </a>

                <button
                  onClick={resetQuiz}
                  className="p-3 text-xs text-gray-400 hover:text-white flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
