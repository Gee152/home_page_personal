import React from 'react';
import { Dumbbell, Salad, Smartphone, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function IntegratedMethod() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Gostaria de saber como funciona o plano integrado de nutricionista + personal trainer.");

  return (
    <section id="metodo" className="py-10 sm:py-20 lg:py-24 bg-[#090D14] text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FF5A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFA040]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF5A00] text-xs font-black uppercase tracking-widest border border-white/10 mb-3 sm:mb-4">
            A CIÊNCIA DA SINERGIA
          </span>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#F9F7F1] tracking-tight leading-tight mb-3 sm:mb-5">
            Por que Personal ou Nutricionista <br className="hidden sm:inline" />
            <span className="text-[#FF5A00]">isolados</span> não funcionam para você?
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed font-sans">
            Quando você faz dieta sem o estímulo correto, perde massa muscular e seu metabolismo desacelera. Quando treina sem o suporte nutricional certo, a fome emocional explode. Nosso método une os dois cérebros no mesmo planejamento.
          </p>
        </div>

        {/* Bloco 1: Treino de Força Feminino */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-20">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF5A00]/20 text-[#FF5A00] text-xs font-bold uppercase mb-4">
              <Dumbbell className="w-4 h-4" />
              <span>Pilar 1: Treinamento Biomecânico</span>
            </div>
            
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">
              Estímulo metabólico focado em curvas femininas
            </h3>

            <p className="text-gray-300 leading-relaxed font-sans mb-6 text-sm sm:text-base">
              Nosso treino é desenhado milimetricamente para o corpo da mulher: ativação profunda de glúteo médio e máximo sem sobrecarregar joelhos ou lombar, e sem ganho indesejado de volume nas pernas.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF5A00] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Prevenção e reabilitação de diástase pós-parto</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF5A00] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Preservação de densidade óssea para mulheres 40+ na perimenopausa</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF5A00] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Sessões ágeis de 45-50 minutos que cabem na rotina corporativa ou familiar</span>
              </div>
            </div>

            <a
              href="#unidades"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5A00] hover:text-[#FFA040] transition-colors group"
            >
              <span>Conhecer os estúdios de treino</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group">
              <img
                src="/images/hero_card_timetable.jpg"
                alt="Treino de força feminino e filosofia do método"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-2xl bg-[#0F1520]/90 backdrop-blur-md border border-white/10">
                <p className="text-xs font-bold text-[#FF5A00] uppercase">Estúdios Exclusivos Recife</p>
                <p className="text-xs sm:text-sm font-semibold text-white">Treinos personalizados sem salas lotadas ou filas em aparelhos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2: Nutrição Clínica Comportamental */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group">
              <img
                src="/images/telaPulsanteAntesCroll.jpg"
                alt="Nutrição clínica e consultoria feminina"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-2xl bg-[#0F1520]/90 backdrop-blur-md border border-white/10">
                <p className="text-xs font-bold text-[#FFA040] uppercase">Nutrição Sem Terrorismo</p>
                <p className="text-xs sm:text-sm font-semibold text-white">Coma o que você gosta, celebre nos finais de semana e emagreça</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF7A00]/20 text-[#FF7A00] text-xs font-bold uppercase mb-4">
              <Salad className="w-4 h-4" />
              <span>Pilar 2: Nutrição Clínica Sem Restrição</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">
              Um Cardápio Adaptado à Sua Vida Social e à Sua Rotina Real
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Você não precisa viver de marmita sem sabor ou abandonar jantares em família. 
              Nossa nutricionista clínica elabora um plano flexível com quantidades ajustadas de carboidratos, proteínas e gorduras boas, além de suplementação científica de creatina e fitoterápicos para modular a ansiedade.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-gray-200">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFA040] shrink-0" />
                <span>Estratégia de modulação de dopamina para a semana pré-menstrual (TPM)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFA040] shrink-0" />
                <span>Protocolo de hidratação e suplementação com Creatina pura Creapure®</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFA040] shrink-0" />
                <span>Acompanhamento direto via WhatsApp para tirar dúvidas de compras e restaurantes</span>
              </li>
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5A00] hover:text-[#FF7A00] group"
            >
              <span>Conversar com a Nutricionista</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
