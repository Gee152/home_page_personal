import React from 'react';
import { Sparkles, MapPin, Phone, MessageCircle, Instagram, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenBioLinks }) {
  return (
    <footer className="bg-[#06090E] text-gray-400 text-xs pt-12 sm:pt-16 pb-28 md:pb-16 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Coluna 1: Marca & Registro */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FF5A00] to-[#FF7A00] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-base text-white tracking-tight">
                LETICE SANTANA FIT
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Acompanhamento integrado de Personal Trainer Especializado e Nutrição Clínica Feminina em Recife. Saúde, emagrecimento sem neurose e longevidade ativa.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-gray-300 space-y-1.5">
              <p className="flex items-center gap-1.5 font-semibold text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF5A00]" />
                Formação & Credenciais
              </p>
              <p className="text-white font-medium">🎓 Ed. Física | Acad. Nutrição • Biomedicina 🧪</p>
              <p className="text-[#FFA040] font-bold">🔥 Consultoria Esportiva para Resultados</p>
            </div>
          </div>

          {/* Coluna 2: Unidades Físicas em Recife */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Unidades em Recife
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div>
                <p className="font-bold text-gray-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5A00]" />
                  Boa Viagem (Zona Sul)
                </p>
                <p className="text-gray-400 text-[11px]">
                  Av. Eng. Domingos Ferreira, 2400
                </p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <p className="font-bold text-gray-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FFA040]" />
                  Casa Forte (Zona Norte)
                </p>
                <p className="text-gray-400 text-[11px]">
                  Praça de Casa Forte, 420
                </p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <p className="font-bold text-gray-200">
                  Atendimento Domiciliar
                </p>
                <p className="text-gray-400 text-[11px]">
                  Condomínios em Boa Viagem, Jaqueira, Graças e Parnamirim
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#metodo" className="hover:text-[#FF5A00] transition-colors">O Método Duplo Integrado</a></li>
              <li><a href="#dores" className="hover:text-[#FF5A00] transition-colors">Fome Emocional & TPM</a></li>
              <li><a href="#programas" className="hover:text-[#FF5A00] transition-colors">Pós-Parto & Menopausa</a></li>
              <li><a href="#resultados" className="hover:text-[#FF5A00] transition-colors">Casos Reais em Recife</a></li>
              <li><a href="#unidades" className="hover:text-[#FF5A00] transition-colors">Estúdios & Horários</a></li>
              <li><a href="#faq" className="hover:text-[#FF5A00] transition-colors">Dúvidas Frequentes</a></li>
              <li>
                <button onClick={onOpenBioLinks} className="text-[#FF5A00] font-bold hover:underline">
                  Ver Página Linktree / BioLinks
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento & Redes */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Central de Atendimento
            </h4>
            
            <p className="text-xs text-gray-300">
              Plantão de atendimento presencial e online:
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=5581989998899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-bold text-xs shadow-lg shadow-[#FF5A00]/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: (81) 98999-8899</span>
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://www.instagram.com/emagreserpi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-[#FF7A00]/20 border border-white/10 hover:border-[#FF7A00]/40 text-white transition-all text-xs font-semibold group"
                aria-label="Instagram Oficial @emagreserpi"
              >
                <Instagram className="w-4 h-4 text-[#FF7A00] group-hover:scale-110 transition-transform" />
                <span>@emagreserpi</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Divisória e Disclaimer Médico */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>
            © {new Date().getFullYear()} Letice Santana Fit - Consultoria Integrada de Saúde Feminina Recife. Todos os direitos reservados.
          </p>
          <p className="text-center md:text-right">
            As informações contidas nesta página têm caráter informativo e não substituem avaliação médica individualizada.
          </p>
        </div>

      </div>
    </footer>
  );
}
