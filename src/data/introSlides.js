/**
 * CONFIGURAÇÃO DOS SLIDES DA TELA INICIAL PULSANTE
 * 
 * Agora você pode configurar tanto a imagem de mobile (vertical/portrait)
 * quanto a imagem de desktop/web (widescreen 16:9):
 * - image: caminho da imagem para telas menores (mobile / vertical)
 * - desktopImage: caminho da imagem panorâmica para desktop (widescreen)
 * - tagTitle e tagSubtitle: textos de destaque superior
 * - mainTitleTop, mainTitleMiddle, mainTitleBottom: título principal
 * - whatsappPhone, whatsappText: dados de contato
 */

import { telaPulsanteAntesCroll, introWebBackground, introWebBackground2 } from '../assets/images';

export const customIntroSlides = [
  {
    id: 1,
    image: telaPulsanteAntesCroll, // Imagem vertical para mobile centrada
    desktopImage: introWebBackground, // Imagem widescreen panorâmica para desktop
    tagTitle: "SAÚDE",
    tagSubtitle: "FITNESS",
    tagSubtitleBg: "bg-[#FF5A00]",
    titleMain: "Escolha seu próximo nível",
    titleHighlight: "de saúde & treino",
    subtitle: "Emagrecimento, saúde e fitness com acompanhamento de Ed. Física, Nutrição e Biomedicina em Boa Viagem e Casa Forte.",
    offerText: "Emagrecimento, saúde e fitness com acompanhamento de Ed. Física, Nutrição e Biomedicina em Recife.",
    mainTitleTop: "Escolha seu",
    mainTitleMiddle: "próximo nível",
    mainTitleBottom: "de saúde & treino",
    badgeCircularText: "• @EMAGRESERPI • CONSULTORIA ESPORTIVA • RESULTADOS •",
    logoText: "LETICE SANTANA FIT",
    website: "emagrecimentofemininorecife.com.br",
    whatsappText: "Agende seu horário",
    whatsappPhone: "81 98999-8899",
    whatsappLink: "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Vim pela tela inicial do @emagreserpi e gostaria de agendar uma avaliação.")
  },
  {
    id: 2,
    image: telaPulsanteAntesCroll,
    desktopImage: introWebBackground2, // Estúdio widescreen de treino
    tagTitle: "RESULTADOS",
    tagSubtitle: "BOORAAA",
    tagSubtitleBg: "bg-[#FF7A00] text-white",
    titleMain: "Consultoria Esportiva",
    titleHighlight: "para quem busca resultados",
    subtitle: "Treinos de alta precisão, reabilitação metabólica e acolhimento nutricional em Recife. BOORAAA?!",
    offerText: "Treinos de alta precisão, reabilitação metabólica e acolhimento nutricional em Recife. BOORAAA?!",
    mainTitleTop: "Consultoria",
    mainTitleMiddle: "esportiva para",
    mainTitleBottom: "resultados",
    badgeCircularText: "• @EMAGRESERPI • EMAGRECIMENTO • SAÚDE • FITNESS •",
    logoText: "LETICE SANTANA FIT",
    website: "emagrecimentofemininorecife.com.br",
    whatsappText: "Fale no WhatsApp",
    whatsappPhone: "81 98999-8899",
    whatsappLink: "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Gostaria de agendar uma avaliação com a consultoria do @emagreserpi.")
  }
];
