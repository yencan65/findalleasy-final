// eslint-disable-next-line
/* eslint-disable import/no-anonymous-default-export */

import React, { useState } from "react";
import { playSnapSound } from "../utils/sounds";

// Optional Lottie import - guarded fallback
import Lottie from "lottie-react";
import snapLogo from "../assets/ai-snap-logo.json";

const AIAsistan = ({ onSnap, t }) => {
  const [glow, setGlow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setGlow(true);
    playSnapSound();
    onSnap();
    setOpen((v) => !v);
    setTimeout(() => setGlow(false), 1200);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Aura with color transition */}
      <div
        className={`absolute w-20 h-20 rounded-full blur-2xl animate-pulse transition-all duration-700 ${
          glow
            ? "bg-gradient-to-r from-[#CDAA7D] via-white to-[#CDAA7D] opacity-70 scale-110"
            : "bg-gradient-to-r from-[#CDAA7D] via-white to-[#CDAA7D] opacity-30"
        }`}
      ></div>

      {/* Logo container */}
      <div className="relative w-16 h-16 bg-[#0F172A]/80 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
        {Lottie && snapLogo ? (
          <Lottie animationData={snapLogo} loop={false} />
        ) : (
          <span className="text-2xl">✨</span>
        )}
      </div>

      {/* Label */}
      <p className="mt-2 text-xs text-[#CDAA7D] font-semibold tracking-wide">
        Findalleasy AI Asistan
      </p>

      {/* Speech bubble */}
      {open && (
        <div className="absolute bottom-24 right-0 bg-[#0F172A]/90 text-[#CDAA7D] text-xs px-4 py-3 rounded-xl shadow-lg border border-[#CDAA7D]/40 backdrop-blur-sm w-56 animate-fade-in">
          <p>👋 {t("welcome")}</p>
          <p className="mt-1">{t("suggestion", { item: "Akıllı Saat ⌚" })}</p>
          <button className="mt-2 w-full py-2 rounded-lg bg-[#CDAA7D] text-slate-900 font-semibold">
            {t("cta")}
          </button>
        </div>
      )}
    </div>
  );
};

export default AIAsistan;
