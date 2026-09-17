import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhilosophySection from './components/PhilosophySection';
import ClassesGrid from './components/ClassesGrid';
import PulsingIntroScreen from './components/PulsingIntroScreen';
import { customIntroSlides } from './data/introSlides';
import RightSocialDock from './components/RightSocialDock';
import SocialProofTicker from './components/SocialProofTicker';
import EmotionalPainPoints from './components/EmotionalPainPoints';
import IntegratedMethod from './components/IntegratedMethod';
import ProgramTabs from './components/ProgramTabs';
import SocialProof from './components/SocialProof';
import LocalClinics from './components/LocalClinics';
import MetabolicQuiz from './components/MetabolicQuiz';
import FAQAccordion from './components/FAQAccordion';
import Footer from './components/Footer';
import MobileStickyDock from './components/MobileStickyDock';
import BioLinks, { isBioLinksRoute } from './components/BioLinks';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    return isBioLinksRoute() ? 'biolinks' : 'landing';
  });

  useEffect(() => {
    const handlePopState = () => {
      if (isBioLinksRoute()) {
        setCurrentView('biolinks');
      } else {
        setCurrentView('landing');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'biolinks') {
      window.history.pushState(null, '', '?page=links');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Estado que controla se a intro (Print 1) desapareceu para virar a sessão Hero (Print 2)
  const [introDismissed, setIntroDismissed] = useState(() => {
    if (typeof window !== 'undefined') {
      return Boolean(window.location.hash || window.scrollY > 20);
    }
    return false;
  });

  const handleDismissIntro = () => {
    setIntroDismissed(true);
  };

  useEffect(() => {
    if (introDismissed) {
      // Quando já na página, se estiver no topo absoluto (scrollY <= 0) e rolar para cima, pode restaurar a tela inicial
      const handleRestoreOnWheelUp = (e) => {
        if (window.scrollY <= 0 && e.deltaY < -40) {
          setIntroDismissed(false);
        }
      };
      window.addEventListener('wheel', handleRestoreOnWheelUp, { passive: true });
      return () => window.removeEventListener('wheel', handleRestoreOnWheelUp);
    }

    // Enquanto no Print 1, qualquer scroll (roda do mouse, swipe touch ou teclas) faz o Print 1 desaparecer suavemente
    const handleWheel = (e) => {
      if (e.deltaY > 5) {
        handleDismissIntro();
      }
    };

    let startTouchY = 0;
    const handleTouchStart = (e) => {
      startTouchY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      const deltaY = startTouchY - e.touches[0].clientY;
      if (deltaY > 15) {
        handleDismissIntro();
      }
    };

    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        handleDismissIntro();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [introDismissed]);

  if (currentView === 'biolinks') {
    return <BioLinks onNavigateHome={() => handleNavigate('landing')} />;
  }

  return (
    <div className="min-h-screen bg-[#090D14] text-white font-sans antialiased selection:bg-[#FF5A00] selection:text-white overflow-x-hidden">
      
      {/* 1. TELA INICIAL PULSANTE ANTES DO SCROLL (Print 1 - Ao scrollar, desaparece suavemente) */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out transform ${
          introDismissed 
            ? "-translate-y-full opacity-0 pointer-events-none" 
            : "translate-y-0 opacity-100 pointer-events-auto"
        }`}
      >
        <PulsingIntroScreen 
          slides={customIntroSlides} 
          onScrollDown={handleDismissIntro} 
        />
      </div>

      {/* 2. SITE COMPLETO (Print 2 - Hero e sessões seguintes reveladas fluidamente) */}
      <div id="main-site" className="relative z-10">
        {/* Navbar */}
        <Navbar onOpenBioLinks={() => handleNavigate('biolinks')} />

        {/* Dock Social Lateral Vertical */}
        <RightSocialDock onOpenBioLinks={() => handleNavigate('biolinks')} />

        <main className="pb-24 md:pb-0">
          {/* Hero Principal */}
          <Hero onOpenBioLinks={() => handleNavigate('biolinks')} />

          {/* Fita de Prova Social */}
          <SocialProofTicker />

          {/* OUR PHILOSOPHY & Personal Training com Vídeo */}
          <PhilosophySection />

          {/* OUR CLASSES com Watermark e Grid de Modalidades */}
          <ClassesGrid />

          {/* Acolhimento das Dores Femininas & TPM */}
          <EmotionalPainPoints />

          {/* Casos Reais com Comparador Antes & Depois Interativo (Social Proof) */}
          <SocialProof />

          {/* Estúdios Físicos em Boa Viagem e Casa Forte */}
          <LocalClinics />

          {/* Diagnóstico Metabólico Rápido em 3 Passos */}
          <MetabolicQuiz />

          {/* FAQ Estruturado */}
          <FAQAccordion />
        </main>

        {/* Rodapé Institucional */}
        <Footer onOpenBioLinks={() => handleNavigate('biolinks')} />

        {/* Dock Flutuante Mobile */}
        <MobileStickyDock onOpenBioLinks={() => handleNavigate('biolinks')} />
      </div>

    </div>
  );
}
