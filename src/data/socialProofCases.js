import { antes, depois } from '../assets/images';

export const defaultSocialProofCases = [
  {
    name: "Mariana Albuquerque",
    age: "34 anos",
    neighborhood: "Boa Viagem - Recife",
    program: "Pós-Parto & Diástase Zero",
    result: "-11,5 kg em 4 meses",
    stats: [
      { label: "Diástase", val: "De 3,5cm para 0,6cm" },
      { label: "Cintura", val: "-14 cm" },
      { label: "Gordura Visceral", val: "Nível 7 para 3" }
    ],
    quote: "Depois da minha segunda gestação, achei que nunca mais teria minha barriga de volta sem cirurgia. O treino de core profundo associado ao cardápio sem restrição para amamentação foi a melhor decisão da minha vida.",
    beforeImg: antes,
    afterImg: depois,
  },
  {
    name: "Beatriz Cavalcanti",
    age: "49 anos",
    neighborhood: "Casa Forte - Recife",
    program: "Menopausa & Longevidade Ativa",
    result: "-13,8 kg em 5 meses",
    stats: [
      { label: "Massa Magra", val: "+2,4 kg" },
      { label: "Circunferência Abdominal", val: "-16 cm" },
      { label: "Sono e Disposição", val: "100% Recuperados" }
    ],
    quote: "Estava em pânico com a menopausa, acumulando gordura na barriga e sem energia. O treino de força mudou tudo. Hoje pego peso, me sinto mais forte e segura do que aos 30 anos!",
    beforeImg: antes,
    afterImg: depois,
  },
  {
    name: "Juliana Mendes",
    age: "28 anos",
    neighborhood: "Espinheiro - Recife",
    program: "Emagrecimento Sem Ansiedade",
    result: "-8,2 kg em 10 semanas",
    stats: [
      { label: "Compulsão TPM", val: "Zero episódios" },
      { label: "Percentual Gordura", val: "De 32% para 22%" },
      { label: "Energia Diária", val: "Dobrada" }
    ],
    quote: "Minha vida era o efeito sanfona. Na TPM, eu comia uma caixa de bombom inteira com culpa. A nutricionista me ensinou a modular o doce e o personal adaptou meus treinos. Emagreci sem sofrimento.",
    beforeImg: antes,
    afterImg: depois,
  }
];
