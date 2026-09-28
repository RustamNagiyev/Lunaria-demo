import React, { useState } from 'react';
import { NavPage } from '../types.ts';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenFreeMeasure: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenFreeMeasure,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'ana-sehife', label: 'Ana səhifə' },
    { id: 'xidmetler', label: 'Xidmətlər' },
    { id: 'paketler', label: 'Paketlər' },
    { id: 'layiheler', label: 'Layihələr' },
    { id: 'haqqimizda', label: 'Haqqımızda' },
    { id: 'elaqe', label: 'Əlaqə' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#0e0e10]/92 backdrop-blur-md border-b border-[#4e4639]/30 transition-all duration-300">
      <div className="h-20 max-w-[1240px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('ana-sehife')}
          className="flex items-center gap-3 group focus:outline-none text-left"
          type="button"
        >
          <div className="w-9 h-9 flex items-center justify-center text-[#c9a45c] relative">
            <svg
              className="w-7 h-7 text-[#c9a45c] transition-transform duration-500 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8A9 9 0 0 0 12 3z"
                fill="currentColor"
                fillOpacity="0.15"
              />
              <line
                stroke="currentColor"
                strokeDasharray="1 3"
                strokeWidth="0.75"
                x1="2"
                x2="22"
                y1="12"
                y2="12"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-[20px] md:text-[22px] tracking-[0.25em] text-[#e5e1e4] uppercase group-hover:text-[#e8c176] transition-colors font-medium">
              LUNARİA
            </span>
            <span className="font-label-caps text-[10px] md:text-[11px] text-[#b6a798] tracking-[0.3em] uppercase -mt-1 font-semibold">
              TƏMİR VƏ DİZAYN
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-label-caps text-[11px] tracking-[0.22em] uppercase py-2 transition-all relative font-semibold ${
                  isActive
                    ? 'text-[#e8c176] border-b border-[#e8c176]'
                    : 'text-[#d1c5b4] hover:text-[#e5e1e4]'
                }`}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenFreeMeasure}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#c9a45c] hover:bg-[#e8c176] text-[#523a00] font-label-caps text-[11px] tracking-[0.18em] uppercase font-semibold transition-colors duration-300 shadow-sm hover:shadow"
            type="button"
          >
            Pulsuz ölçü
          </button>

          <button
            onClick={() => handleNavClick('elaqe')}
            title="Şəxsi kabinet və müraciət"
            className="w-8 h-8 rounded-full bg-[#e8c176] hover:bg-[#ffdea4] flex items-center justify-center transition-colors text-[#412d00]"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            aria-label="Menyu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#d1c5b4] hover:text-[#e8c176] transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131315] border-b border-[#4e4639]/40 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-label-caps text-[12px] tracking-[0.2em] uppercase py-2 transition-colors font-semibold ${
                    isActive ? 'text-[#e8c176] pl-2 border-l-2 border-[#e8c176]' : 'text-[#d1c5b4]'
                  }`}
                  type="button"
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#4e4639]/30 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFreeMeasure();
              }}
              className="w-full py-3 bg-[#c9a45c] text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase font-bold text-center"
              type="button"
            >
              Pulsuz ölçü sifariş et
            </button>
            <a
              href="tel:+994505300369"
              className="flex items-center justify-center gap-2 py-2.5 text-[#e8c176] font-body-md text-sm border border-[#4e4639]/50"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>050 530 03 69</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
