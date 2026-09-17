import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Mulheres devem tomar creatina? Ela retém líquido ou engorda?",
      a: "Não engorda e não retém líquido subcutâneo! A creatina monohidratada (como Creapure®) retém água exclusivamente dentro da célula muscular (hidratação intracelular). Isso melhora a força nos treinos, preserva a massa magra, combate a fadiga mental e reduz a flacidez. É um dos suplementos mais seguros e recomendados para a saúde feminina."
    },
    {
      q: "Quais são as alternativas e estratégias naturais para a ansiedade de comer doces na TPM?",
      a: "Na fase lútea (TPM), há queda nos níveis de serotonina. Nossa conduta nutricional atua na raiz bioquímica: combinamos fontes ricas em triptofano, magnésio quelato, canela (para controle glicêmico) e cacau 70%. Além disso, prescrevemos receitas doces proteicas e modulamos as calorias diárias para que você mate a vontade com prazer, sem romper o déficit calórico."
    },
    {
      q: "Tenho diástase pós-parto. Posso fazer agachamento, musculação e abdominais?",
      a: "Sim, porém com técnica adaptada! Exercícios abdominais tradicionais (como crunches) geram aumento descontrolado de pressão intra-abdominal, podendo piorar a abertura da diástase. No programa pós-parto, realizamos a ativação do músculo transverso e do assoalho pélvico, combinados com o treino hipopressivo e fortalecimento progressivo."
    },
    {
      q: "Por que o treino de força é tão urgente para mulheres acima dos 40 anos na menopausa?",
      a: "A partir dos 40 anos, a redução do estrogênio acelera a perda de massa muscular (sarcopenia) e a diminuição da densidade óssea (osteopenia). Apenas o treino de força (musculação) exerce tração mecânica sobre os ossos, estimulando sua regeneração e elevando a taxa metabólica basal para queimar calorias mesmo dormindo."
    },
    {
      q: "Qual a diferença entre contratar personal e nutricionista separados vs. a consultoria integrada?",
      a: "Quando você contrata profissionais separados, eles não conversam. Muitas vezes a nutricionista corta calorias no mesmo dia em que o personal prescreve um treino pesado de pernas, gerando fraqueza e compulsão noturna. No nosso método, o treino e o cardápio são ajustados semanalmente em conjunto, maximizando o ganho de massa magra e o emagrecimento."
    },
    {
      q: "Como agendar um horário presencial em Boa Viagem ou Casa Forte?",
      a: "Basta clicar em qualquer botão de WhatsApp nesta página. Nossa coordenadora de atendimento responderá em poucos minutos para entender sua rotina, apresentar os estúdios boutique e agendar sua avaliação física e nutricional inicial no melhor dia e horário."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-10 sm:py-24 bg-[#090D14] text-white relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header do FAQ */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF5A00] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-white/10">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Dúvidas Frequentes & Ciência</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mb-3 sm:mb-4">
            Respostas claras para as principais dúvidas
          </h2>

          <p className="text-xs sm:text-base text-gray-300 font-sans">
            Informação científica simplificada para você tomar uma decisão com total segurança.
          </p>
        </div>

        {/* Lista de Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0F1520] border border-white/10 shadow-md transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#FF5A00] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`p-1.5 rounded-full bg-white/10 text-white shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FF5A00] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/10 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chamada Final no FAQ */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400 mb-4">
            Ainda ficou com alguma dúvida sobre horários, valores ou vagas?
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5581989998899&text=Olá! Gostaria de tirar uma dúvida sobre a consultoria em Recife."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#FF5A00]/25 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com Nossa Equipe no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
