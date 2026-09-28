import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Sürətli əlaqə" className="fixed bottom-8 right-8 z-50">
      <a
        aria-label="WhatsApp ilə əlaqə (050 530 03 69)"
        className="w-13 h-13 rounded-full bg-[#201f21] border border-[#c9a45c]/80 flex items-center justify-center text-[#c9a45c] hover:bg-[#c9a45c] hover:text-[#523a00] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] group hover:scale-105"
        href="https://wa.me/994505300369"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[24px]">chat</span>
      </a>
    </aside>
  );
};
