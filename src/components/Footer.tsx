import React from 'react';
import { NavPage } from '../types.ts';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0e0e10] border-t border-[#4e4639]/30 pt-16 pb-10">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        {/* Col 1: Brand & Manifesto */}
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <span className="font-headline-sm text-[22px] tracking-[0.25em] text-[#e5e1e4] uppercase font-medium">
              LUNARİA
            </span>
            <span className="font-label-caps text-[11px] text-[#b6a798] tracking-[0.25em] uppercase font-semibold">
              TƏMİR VƏ DİZAYN
            </span>
          </div>
          <p className="font-body-md text-sm text-[#d1c5b4] mb-2">
            Təmir, tikinti və interyer dizayn.
          </p>
          <p className="font-label-editorial text-[15px] text-[#b6a798] italic leading-relaxed">
            Caucasian monumentality and Caspian light synthesized through rigorous European architectural discipline.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="flex flex-col">
          <span className="font-label-caps text-[11px] text-[#d4c4b4] tracking-[0.25em] uppercase mb-5 font-semibold">
            Keçidlər
          </span>
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => handleNav('ana-sehife')}
              className="text-left font-body-md text-sm text-[#d1c5b4] hover:text-[#e8c176] transition-colors"
              type="button"
            >
              Ana səhifə
            </button>
            <button
              onClick={() => handleNav('xidmetler')}
              className="text-left font-body-md text-sm text-[#d1c5b4] hover:text-[#e8c176] transition-colors"
              type="button"
            >
              Xidmətlər
            </button>
            <button
              onClick={() => handleNav('paketler')}
              className="text-left font-body-md text-sm text-[#d1c5b4] hover:text-[#e8c176] transition-colors"
              type="button"
            >
              Paketlər
            </button>
            <button
              onClick={() => handleNav('layiheler')}
              className="text-left font-body-md text-sm text-[#d1c5b4] hover:text-[#e8c176] transition-colors"
              type="button"
            >
              Layihələr
            </button>
            <button
              onClick={() => handleNav('haqqimizda')}
              className="text-left font-body-md text-sm text-[#d1c5b4] hover:text-[#e8c176] transition-colors"
              type="button"
            >
              Haqqımızda
            </button>
            <button
              onClick={() => handleNav('elaqe')}
              className="text-left font-body-md text-sm text-[#d1c5b4] hover:text-[#e8c176] transition-colors"
              type="button"
            >
              Əlaqə
            </button>
          </nav>
        </div>

        {/* Col 3: Contact Details */}
        <div className="flex flex-col">
          <span className="font-label-caps text-[11px] text-[#d4c4b4] tracking-[0.25em] uppercase mb-5 font-semibold">
            Əlaqə
          </span>
          <div className="flex flex-col space-y-2.5 font-body-md text-sm text-[#d1c5b4]">
            <a
              href="tel:+994505300369"
              className="text-[#e5e1e4] hover:text-[#e8c176] font-headline-sm text-lg tracking-wide transition-colors"
            >
              +994 50 530 03 69
            </a>
            <span className="leading-snug">
              Çinar Plaza, Heydər Əliyev pr. 152, Bakı, Azərbaycan
            </span>
            <a
              className="text-[#c9a45c] hover:text-[#e8c176] transition-colors"
              href="mailto:info@lunaria.az"
            >
              info@lunaria.az
            </a>
          </div>
        </div>

        {/* Col 4: Schedule & Social */}
        <div className="flex flex-col">
          <span className="font-label-caps text-[11px] text-[#d4c4b4] tracking-[0.25em] uppercase mb-5 font-semibold">
            İş Qrafiki & Sosial
          </span>
          <p className="font-body-md text-sm text-[#d1c5b4] mb-4">
            Bazar ertəsi — Şənbə: 09:00 - 19:00
            <br />
            <span className="font-caption text-xs text-[#b6a798]">
              Bazar: Görüş əsasında
            </span>
          </p>
          <div className="flex items-center gap-3">
            <a
              className="w-10 h-10 border border-[#4e4639]/40 flex items-center justify-center text-[#d1c5b4] hover:text-[#c9a45c] hover:border-[#c9a45c] transition-colors"
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            </a>
            <a
              className="w-10 h-10 border border-[#4e4639]/40 flex items-center justify-center text-[#d1c5b4] hover:text-[#c9a45c] hover:border-[#c9a45c] transition-colors"
              href="https://wa.me/994505300369"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="WhatsApp"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </a>
            <a
              className="w-10 h-10 border border-[#4e4639]/40 flex items-center justify-center text-[#d1c5b4] hover:text-[#c9a45c] hover:border-[#c9a45c] transition-colors"
              href="tel:+994505300369"
              aria-label="Zəng et"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 pt-6 border-t border-[#4e4639]/20 flex flex-col sm:flex-row items-center justify-between text-[#d1c5b4] font-caption text-xs gap-3">
        <span>© 2026 Lunaria. Bütün hüquqlar qorunur.</span>
        <span className="tracking-[0.1em] uppercase text-[#b6a798]">
          Memarlıq və İnteryer Dizayn Studiyası • Bakı
        </span>
      </div>
    </footer>
  );
};
