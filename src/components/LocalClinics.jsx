import React, { useState, useRef } from 'react';
import { MapPin, Navigation, Car, Wifi, ShieldCheck, Clock, MessageCircle, ExternalLink } from 'lucide-react';

export default function LocalClinics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const cardStep = clientWidth * 0.86 + 16;
    const index = Math.round(scrollLeft / cardStep);
    setActiveIndex(Math.min(Math.max(index, 0), units.length - 1));
  };

  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;
    const cardStep = clientWidth * 0.86 + 16;
    scrollContainerRef.current.scrollTo({
      left: index * cardStep,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };
  const units = [
    {
      id: "boa-viagem",
      name: "Unidade Boa Viagem (Zona Sul)",
      subtitle: "Estúdio Boutique & Consultório Nutricional Integrado",
      address: "Av. Engenheiro Domingos Ferreira, 2400 - Boa Viagem, Recife - PE",
      reference: "Próximo ao Shopping Recife e com fácil acesso pela Via Mangue",
      features: [
        "Estúdio climatizado privativo para mulheres",
        "Estacionamento gratuito com manobrista",
        "Aparelhos de biomecânica isolada para glúteos e pernas",
        "Bioimpedância tetrapolar InBody de alta precisão",
        "Vestiário premium com duchas e amenidades"
      ],
      hours: "Segunda a Sexta: 06h às 21h | Sábados: 07h às 13h",
      mapQuery: "Av. Engenheiro Domingos Ferreira, 2400, Recife"
    },
    {
      id: "casa-forte",
      name: "Unidade Casa Forte (Zona Norte)",
      subtitle: "Centro de Saúde Feminina & Reabilitação Corporal",
      address: "Praça de Casa Forte, 420 - Casa Forte, Recife - PE",
      reference: "Em frente aos jardins históricos, ambiente arborizado e calmo",
      features: [
        "Ambiente intimista e acolhedor sem superlotação",
        "Sala dedicada para reabilitação de diástase e solo pélvico",
        "Atendimento com hora marcada sem espera",
        "Consultório para elaboração de cardápios personalizados",
        "Espaço kids acolhedor para mães no pós-parto"
      ],
      hours: "Segunda a Sexta: 06h às 21h | Sábados: 07h às 14h",
      mapQuery: "Praça de Casa Forte, 420, Recife"
    }
  ];

  return (
    <section id="unidades" className="py-10 sm:py-24 bg-[#090D14] text-white relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF5A00] text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-white/15">
            LOCALIZAÇÃO PRIVILEGIADA EM RECIFE
          </span>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-3 sm:mb-5">
            Onde você treina e se consulta conosco
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-gray-300 font-sans">
            Com unidades estratégicas nas Zonas Sul e Norte de Recife, além de atendimento personalizado no condomínio da aluna ou consultoria 100% online.
          </p>
        </div>

        {/* Grid de Unidades com Deslize Horizontal no Mobile e Grid no Desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-4 pt-1 px-[7vw] sm:px-0 lg:grid lg:grid-cols-2 gap-5 sm:gap-8 mb-4 sm:mb-12 w-full snap-x snap-mandatory no-scrollbar"
        >
          {units.map((unit) => {
            const whatsappLocationUrl = `https://api.whatsapp.com/send?phone=5581989998899&text=${encodeURIComponent(`Olá! Gostaria de agendar uma visita e avaliação na unidade de ${unit.name}.`)}`;
            return (
              <div
                key={unit.id}
                className="w-[86vw] sm:w-auto lg:w-full shrink-0 snap-center bg-[#0F1520] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-white/10 flex flex-col justify-between hover:shadow-2xl hover:border-[#FF5A00]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-[#FF5A00] font-bold text-xs uppercase tracking-wider">
                      <MapPin className="w-4 h-4 fill-current" />
                      <span>Recife - Pernambuco</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[#FF7A00] text-xs font-bold border border-white/10">
                      Presencial Exclusivo
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl text-white mb-2">
                    {unit.name}
                  </h3>

                  <p className="text-sm font-semibold text-[#FFA040] mb-4">
                    {unit.subtitle}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-xs text-gray-300 space-y-2">
                    <p className="flex items-start gap-2">
                      <Navigation className="w-4 h-4 text-[#FF5A00] shrink-0 mt-0.5" />
                      <span><strong>Endereço:</strong> {unit.address}</span>
                    </p>
                    <p className="flex items-start gap-2 text-gray-400">
                      <span className="w-4 inline-block" />
                      <span>{unit.reference}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-300 pt-1 border-t border-white/10">
                      <Clock className="w-4 h-4 text-[#FF5A00] shrink-0" />
                      <span>{unit.hours}</span>
                    </p>
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Diferenciais do Espaço:
                  </h4>

                  <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-gray-300">
                    {unit.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-white/10">
                  <a
                    href={whatsappLocationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-2xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-[#FF5A00]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Agendar Visita nesta Unidade</span>
                  </a>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3.5 px-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Ver no Mapa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Indicadores de Deslize no Mobile (Pills Interativos) */}
        <div className="flex lg:hidden justify-center items-center gap-2 mb-8">
          {units.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Ver unidade ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? "w-7 bg-[#FF5A00] shadow-[0_0_12px_rgba(255,90,0,0.8)]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Card Adicional: Atendimento em Condomínio & Consultoria Online */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#111823] to-[#0F1520] border border-[#FF5A00]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider block mb-1">
              Flexibilidade Total
            </span>
            <h4 className="font-display font-black text-xl sm:text-2xl text-white mb-2">
              Prefere treinar na academia do seu prédio ou 100% online?
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Também oferecemos a modalidade <em>Personal Trainer Domiciliar</em> em condomínios de Boa Viagem, Jaqueira, Parnamirim e Graças, além da <em>Consultoria Híbrida</em> com app exclusivo para viagens e rotinas corridas.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=5581989998899&text=Olá! Gostaria de saber como funciona o atendimento em condomínio ou consultoria online."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-bold text-sm shadow-lg shadow-[#FF5A00]/30 shrink-0 flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Consultar Disponibilidade</span>
          </a>
        </div>

      </div>
    </section>
  );
}
