import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Vitrin from './components/Vitrin.jsx';
import AIAsistan from './components/AIAsistan.jsx';
import { highlightVitrin, highlightFooter } from './utils/animations.js';

const App = () => {
  const { t } = useTranslation();

  const onSnap = () => {
    highlightVitrin();
    highlightFooter();
  };

  useEffect(()=>{
    // auto snap on load
    setTimeout(()=> onSnap(), 600);
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Header />

      {/* Center */}
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <p className="text-[#CDAA7D] text-3xl md:text-4xl font-semibold underline decoration-[#CDAA7D]/70 underline-offset-8 text-center">
          {t("slogan")}
        </p>
        {/* Search */}
        <div className="mt-6 flex items-center gap-2 w-full max-w-3xl">
          <input
            placeholder={t("search_placeholder")}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-800/70 border border-slate-700 outline-none focus:ring-2 focus:ring-[#CDAA7D]"
          />
          <button
            onClick={onSnap}
            className="px-5 py-3 rounded-xl bg-[#CDAA7D] text-slate-900 font-semibold hover:scale-105 transition-transform duration-200"
          >
            Ara
          </button>
        </div>

        <Vitrin />
      </main>

      <Footer />

      <AIAsistan onSnap={onSnap} t={t} />
    </div>
  )
}

export default App;
