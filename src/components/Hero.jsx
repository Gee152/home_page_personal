import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import HeroQuickCards from './HeroQuickCards';
import {
  silhueta,
  heroCardTimetable,
  heroCardClasses,
  heroCardJoinus,
  introWebBackground
} from '../assets/images';

export default function Hero({ onOpenBioLinks }) {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5581989998899&text=" + encodeURIComponent("Olá! Gostaria de agendar uma avaliação inicial na consultoria em Recife.");

  // Processamento dinâmico em canvas: usa silhueta.webp, remove fundo branco preservando a camiseta e gera o efeito duotone laranja
  const [silhouetteSrc, setSilhouetteSrc] = useState(silhueta);
  const [orangeSilhouetteSrc, setOrangeSilhouetteSrc] = useState(silhueta);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = silhueta;
    img.onload = () => {
      try {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (!w || !h) return;

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        // Verifica se as bordas/cantos possuem fundo branco
        const isCornerWhite =
          (data[0] >= 235 && data[1] >= 235 && data[2] >= 235 && data[3] > 100) ||
          (data[(w - 1) * 4] >= 235 && data[(w - 1) * 4 + 1] >= 235 && data[(w - 1) * 4 + 2] >= 235 && data[(w - 1) * 4 + 3] > 100);

        if (isCornerWhite) {
          // BFS Flood Fill a partir das bordas externas para remover o fundo branco sem tocar na camiseta
          const visited = new Uint8Array(w * h);
          const queue = [];

          for (let x = 0; x < w; x++) {
            const top = x;
            const bot = (h - 1) * w + x;
            if (data[top * 4] >= 235 && data[top * 4 + 1] >= 235 && data[top * 4 + 2] >= 235) {
              visited[top] = 1;
              queue.push(top);
            }
            if (data[bot * 4] >= 235 && data[bot * 4 + 1] >= 235 && data[bot * 4 + 2] >= 235) {
              visited[bot] = 1;
              queue.push(bot);
            }
          }

          for (let y = 0; y < h; y++) {
            const left = y * w;
            const right = y * w + (w - 1);
            if (!visited[left] && data[left * 4] >= 235 && data[left * 4 + 1] >= 235 && data[left * 4 + 2] >= 235) {
              visited[left] = 1;
              queue.push(left);
            }
            if (!visited[right] && data[right * 4] >= 235 && data[right * 4 + 1] >= 235 && data[right * 4 + 2] >= 235) {
              visited[right] = 1;
              queue.push(right);
            }
          }

          let head = 0;
          while (head < queue.length) {
            const idx = queue[head++];
            const x = idx % w;
            const y = (idx / w) | 0;
            const p = idx * 4;

            data[p + 3] = 0; // Torna o fundo transparente

            if (x > 0 && !visited[idx - 1]) {
              const np = (idx - 1) * 4;
              if (data[np] >= 235 && data[np + 1] >= 235 && data[np + 2] >= 235) {
                visited[idx - 1] = 1;
                queue.push(idx - 1);
              }
            }
            if (x < w - 1 && !visited[idx + 1]) {
              const np = (idx + 1) * 4;
              if (data[np] >= 235 && data[np + 1] >= 235 && data[np + 2] >= 235) {
                visited[idx + 1] = 1;
                queue.push(idx + 1);
              }
            }
            if (y > 0 && !visited[idx - w]) {
              const np = (idx - w) * 4;
              if (data[np] >= 235 && data[np + 1] >= 235 && data[np + 2] >= 235) {
                visited[idx - w] = 1;
                queue.push(idx - w);
              }
            }
            if (y < h - 1 && !visited[idx + w]) {
              const np = (idx + w) * 4;
              if (data[np] >= 235 && data[np + 1] >= 235 && data[np + 2] >= 235) {
                visited[idx + w] = 1;
                queue.push(idx + w);
              }
            }
          }

          ctx.putImageData(imgData, 0, 0);
        }

        const cleanPng = canvas.toDataURL('image/png');
        setSilhouetteSrc(cleanPng);

        // Gera a silhueta laranja com o gradiente duotone exato (#FF5A00)
        const orangeCanvas = document.createElement('canvas');
        orangeCanvas.width = w;
        orangeCanvas.height = h;
        const oCtx = orangeCanvas.getContext('2d');
        oCtx.drawImage(canvas, 0, 0);

        const oImgData = oCtx.getImageData(0, 0, w, h);
        const od = oImgData.data;

        // Gera a silhueta em cor sólida neon pura (#FF5A00) para servir de borda e contorno elétrico perfeito
        for (let i = 0; i < od.length; i += 4) {
          if (od[i + 3] > 0) {
            od[i] = 255;     // Canal R
            od[i + 1] = 90;  // Canal G
            od[i + 2] = 0;   // Canal B
          }
        }

        oCtx.putImageData(oImgData, 0, 0);
        setOrangeSilhouetteSrc(orangeCanvas.toDataURL('image/png'));
      } catch (err) {
        console.warn('Canvas silhouette process error:', err);
      }
    };
  }, []);

  const quickCards = [
    {
      id: "timetable",
      title: "Horários & Estúdios",
      label: "Horários",
      subtitle: "Boa Viagem & Casa Forte",
      href: "#unidades",
      img: heroCardTimetable,
      tag: "Recife - PE"
    },
    {
      id: "classes",
      title: "Modalidades & Treinos",
      label: "Modalidades",
      subtitle: "Força, Pós-Parto & Menopausa",
      href: "#modalidades",
      img: heroCardClasses,
      tag: "Feminino"
    },
    {
      id: "join-us",
      title: "Junte-se a Nós!",
      label: "Junte-se a Nós!",
      subtitle: "Consultoria Integrada Exclusiva",
      href: whatsappUrl,
      isExternal: true,
      img: heroCardJoinus,
      tag: "Vagas Abertas"
    }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-[96vh] pt-28 sm:pt-36 md:pt-44 pb-8 sm:pb-14 md:pb-20 bg-[#090D14] text-white overflow-hidden flex flex-col justify-between scroll-mt-20">
      
      {/* Background Image com Overlay Escuro Esportivo (Alta Resolução do modeloSite.png) */}
      <div className="absolute inset-0 z-0">
        <img
          src={introWebBackground}
          alt="Treino feminino de alta performance e consultoria em Recife"
          className="w-full h-full object-cover object-center opacity-35 filter contrast-125 brightness-90"
        />
        {/* Gradiente de Fusão Superior e Inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-[#090D14]/75 to-[#090D14]/85" />
      </div>

      {/* Marca D'água Gigante em Contorno (OBJETIVO / RECIFE do modeloSite.png) */}
      <div className="absolute top-16 left-4 sm:left-8 md:left-24 pointer-events-none select-none z-0">
        <span className="font-display font-black text-6xl sm:text-8xl md:text-[160px] leading-none uppercase text-stroke-outline opacity-30 sm:opacity-40">
          OBJETIVO
        </span>
      </div>
      <div className="absolute top-1/3 right-4 md:right-16 pointer-events-none select-none z-0">
        <span className="font-display font-black text-5xl sm:text-7xl md:text-[140px] leading-none uppercase text-stroke-outline opacity-25 sm:opacity-30">
          RECIFE
        </span>
      </div>

      {/* Conteúdo Principal do Hero: Texto & Botões sobrepondo a Imagem da Letice à direita (50% da tela) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full mb-2 sm:mb-6 lg:-mb-10 xl:-mb-14">
        <div className="relative lg:grid lg:grid-cols-12 lg:gap-12 items-end min-h-[360px] min-[380px]:min-h-[390px] sm:min-h-[440px] lg:min-h-0">
          
          {/* Coluna de Textos e CTAs (Sobrepõe suavemente à imagem com z-20) */}
          <div className="relative z-20 w-[78%] min-[400px]:w-[74%] sm:w-[70%] lg:w-auto lg:col-span-7 flex flex-col justify-center pb-2 sm:pb-6 lg:pb-12">
            
            {/* Tag de Posicionamento Oficial */}
            <div className="inline-flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-md sm:rounded-lg bg-black/60 sm:bg-white/10 text-[#FF5A00] text-[8.5px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-5 border border-[#FF5A00]/40 backdrop-blur-md shadow-lg w-fit max-w-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF5A00] animate-ping shrink-0" />
              <span className="truncate min-[420px]:whitespace-normal">EMAGRECIMENTO • SAÚDE • FITNESS</span>
            </div>

            {/* Headline Monumental Fiel ao Print com Sombra para Sobrescrita */}
            <h1 className="font-display font-black text-2xl min-[360px]:text-[26px] min-[400px]:text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white leading-[1.06] mb-2 sm:mb-5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              <span className="text-stroke-orange">ALCANCE SEU OBJETIVO</span> <br />
              <span className="text-[#FF5A00] text-stroke-black drop-shadow-[0_0_25px_rgba(255,90,0,0.6)]">
                NA CONSULTORIA
              </span>
            </h1>

            {/* Subtítulo Sucinto e Direto com Formação e Chamada */}
            <p className="text-left text-[12px] min-[360px]:text-[13px] min-[400px]:text-[14px] sm:text-base md:text-lg text-gray-200 sm:text-gray-300 max-w-[52vw] min-[360px]:max-w-[54vw] min-[400px]:max-w-[40vw] sm:max-w-xl font-sans leading-snug sm:leading-relaxed mb-3 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Consultoria esportiva para quem busca resultados: acompanhamento integrado de Ed. Física, Nutrição e Biomedicina em Boa Viagem e Casa Forte. BOORAAA?!
            </p>

            {/* Botões de Ação no Desktop (No mobile são renderizados no espaço livre abaixo da foto) */}
            <div className="hidden sm:flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 sm:gap-2.5 px-3.5 py-2 sm:px-7 sm:py-3.5 rounded-lg bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-black text-[11px] min-[360px]:text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#FF5A00]/30 transition-all hover:scale-105 active:scale-95 group text-center whitespace-nowrap"
              >
                <span>Quero Começar</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#modalidades"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-6 sm:py-3.5 rounded-lg bg-black/60 sm:bg-white/10 hover:bg-white/20 text-white font-bold text-[10.5px] min-[360px]:text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all hover:scale-105 text-center whitespace-nowrap"
              >
                <span>Conhecer Treinos</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Imagem da Letice ampliada para preencher o espaço vertical e o topo à direita */}
          <div className="absolute right-[-23%] min-[360px]:right-[-35%] min-[400px]:right-[-30%] sm:right-0 bottom-[-40px] sm:bottom-0 lg:static lg:col-span-5 flex justify-end items-end z-10 pointer-events-none select-none">
            <div className="relative w-[86vw] min-[360px]:w-[92vw] min-[390px]:w-[98vw] min-[430px]:w-[105vw] max-w-[480px] sm:max-w-none h-[400px] min-[360px]:h-[450px] min-[390px]:h-[490px] min-[430px]:h-[530px] sm:h-auto sm:w-[48vw] lg:w-[550px] xl:w-[650px] 2xl:w-[720px] translate-y-1 sm:translate-y-4 lg:translate-y-12 xl:translate-y-16 origin-bottom-right flex justify-end items-end">
              
              {/* Imagem de Trás: Borda e Contorno em Neon (#FF5A00) perfeitamente alinhada */}
              <img
                src={orangeSilhouetteSrc}
                alt="Letice Santana - Borda Neon"
                className="absolute inset-0 w-full h-full object-contain object-bottom scale-[1.018] origin-bottom -z-10 pointer-events-none select-none opacity-100"
                style={{
                  filter: 'drop-shadow(0 0 1px #f8c257ff) drop-shadow(0 0 3px #FF5A00) drop-shadow(0 0 10px #FF5A00) drop-shadow(0 0 15px rgba(255,90,0,0.95))'
                }}
                loading="eager"
              />

              {/* Imagem da Frente: Fotografia principal com sombra natural */}
              <img
                src={silhouetteSrc}
                alt="Letice Santana - Personal Trainer e Consultoria Esportiva"
                className="relative w-full h-full object-contain object-bottom opacity-100 drop-shadow-[0_15px_40px_rgba(0,0,0,0.95)]"
                loading="eager"
              />
            </div>
          </div>

        </div>

        {/* Botões de Ação no Mobile: Posicionados no espaço livre abaixo da foto da Letice e acima das caixas (Print 2) */}
        <div className="flex sm:hidden flex-row items-center justify-center gap-2.5 min-[360px]:gap-3.5 w-full mt-4 mb-2 relative z-30 px-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-[360px]:px-5 min-[360px]:py-3 rounded-xl bg-[#FF5A00] hover:bg-[#FF7A00] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#FF5A00]/30 transition-all hover:scale-105 active:scale-95 group text-center whitespace-nowrap"
          >
            <span>Quero Começar</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#modalidades"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-[360px]:px-4 min-[360px]:py-3 rounded-xl bg-black/60 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all hover:scale-105 text-center whitespace-nowrap"
          >
            <span>Conhecer Treinos</span>
          </a>
        </div>
      </div>

      {/* Os 3 Cards Flutuantes de Acesso Rápido (Exatos ao modeloSite.png: Timetable, Classes, Join Us!) */}
      <HeroQuickCards cards={quickCards} />

    </section>
  );
}

