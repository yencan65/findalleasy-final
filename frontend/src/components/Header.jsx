import React from 'react';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4">
      {/* Left: brand */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-[#CDAA7D]/20 flex items-center justify-center">
          <span className="text-[#CDAA7D] text-xl">✋</span>
        </div>
        <h1 className="text-2xl font-bold text-[#CDAA7D]">Findalleasy</h1>
      </div>
      {/* Right: language indicator (placeholder) */}
      <div className="text-sm opacity-80">🌐</div>
    </header>
  )
}

export default Header;
