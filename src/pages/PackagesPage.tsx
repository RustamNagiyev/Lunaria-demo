import React, { useState } from 'react';
import { NavPage } from '../types.ts';

interface PackagesPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenFreeMeasure: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onNavigate,
  onOpenFreeMeasure,
}) => {
  const [area, setArea] = useState<number>(110);

  // Calculate estimated duration
  const getDuration = (m2: number) => {
    if (m2 < 80) return '45 — 60 iş günü';
    if (m2 <= 150) return '65 — 85 iş günü';
    if (m2 <= 250) return '90 — 120 iş günü';
    return '120 — 160 iş günü';
  };

  const calculateTotal = (rate: number) => {
    return (rate * area).toLocaleString('az-AZ');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Səhifə Başlığı (Dark Header Section) */}
      <section className="relative w-full bg-[#0e0e10] px-4 md:px-8 py-20 overflow-hidden border-b border-[#4e4639]/30">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#e8c176]/10 via-[#c9a45c]/5 to-transparent blur-3xl" />
          <div className="absolute -bottom-24 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#594715]/20 to-transparent blur-2xl" />
        </div>

        <div className="max-w-[1240px] mx-auto relative z-10">
          {/* Breadcrumb & Label */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('ana-sehife')}
                className="font-label-caps text-[11px] text-[#b6a798] hover:text-[#e8c176] transition-colors uppercase font-semibold"
                type="button"
              >
                Ana səhifə
              </button>
              <span className="text-[#4e4639] text-[10px]">/</span>
              <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.2em] uppercase font-semibold">
                Paketlər
              </span>
            </div>
            <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1 bg-[#2a2a2c] rounded-full border border-[#4e4639]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8c176] animate-pulse" />
              <span className="font-label-caps text-[10px] text-[#dec486] tracking-[0.25em] uppercase font-semibold">
                Şəffaf və dəqiq qiymətlər
              </span>
            </div>
          </div>

          {/* Main Headline Group */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 flex flex-col">
              <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.3em] uppercase mb-2 font-semibold">
                Büdcə və keyfiyyət standartı
              </span>
              <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-[68px] md:leading-[74px] text-[#e5e1e4] tracking-tight font-normal">
                Təmir paketləri
              </h1>
              <p className="font-headline-md text-2xl md:text-3xl text-[#d4c4b4] italic mt-2">
                Büdcənizə uyğun şəffaf qiymətlər
              </p>
            </div>
            <div className="lg:col-span-4 lg:pl-4 pb-1">
              <p className="font-body-lg text-base md:text-lg text-[#d1c5b4] leading-relaxed">
                Məkanınızın miqyasına və fərdi tələblərinizə uyğun, gizli xərclər olmadan təsdiqlənmiş dəqiq smeta və müqavilə öhdəliyi.
              </p>
            </div>
          </div>

          {/* Live Interactive Area Calculator Bar */}
          <div className="mt-12 bg-[#1b1b1d] border border-[#4e4639]/50 p-6 md:p-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="font-label-caps text-[11px] text-[#b6a798] tracking-[0.2em] uppercase font-semibold"
                  htmlFor="area-range"
                >
                  Sahəni təyin edin (m²)
                </label>
                <span className="font-headline-sm text-xl md:text-2xl text-[#e8c176] font-medium">
                  {area} m²
                </span>
              </div>
              <input
                id="area-range"
                type="range"
                min="40"
                max="450"
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#c9a45c] bg-[#353437] cursor-pointer h-2 rounded"
              />
              <div className="flex justify-between text-[11px] text-[#757067] mt-1 font-caption">
                <span>40 m²</span>
                <span>250 m²</span>
                <span>450 m²</span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center border-l-0 md:border-l md:border-[#4e4639]/30 md:pl-6">
              <span className="font-caption text-xs text-[#b6a798] uppercase tracking-wider">
                Təxmini icra müddəti
              </span>
              <span className="font-body-lg text-lg md:text-xl text-[#e5e1e4] font-medium mt-0.5">
                {getDuration(area)}
              </span>
            </div>

            <div className="md:col-span-3 flex justify-start md:justify-end">
              <button
                onClick={onOpenFreeMeasure}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#c9a45c] hover:bg-[#e8c176] text-[#523a00] font-label-caps text-[11px] tracking-[0.18em] uppercase transition-colors rounded font-bold shadow-md"
                type="button"
              >
                <span>Pulsuz smeta al</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Təmir Paketi Kartları */}
      <section className="w-full bg-[#0e0e10] px-4 md:px-8 py-20" id="packages-grid">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {/* Paket 1: Comfort Təmir */}
            <div className="flex flex-col bg-[#1b1b1d] border border-[#4e4639]/30 hover:border-[#c9a45c]/50 rounded-lg p-6 transition-all duration-300 shadow-md relative group">
              <div className="flex flex-col pb-4 border-b border-[#4e4639]/30">
                <span className="font-label-caps text-[10px] text-[#b6a798] tracking-[0.25em] uppercase font-semibold">
                  01 / Giriş
                </span>
                <h3 className="font-headline-sm text-xl text-[#e5e1e4] mt-1 font-normal">
                  Comfort Təmir
                </h3>
                <p className="font-caption text-xs text-[#d1c5b4] mt-1 min-h-[36px]">
                  Baza keyfiyyət və sürətli icra
                </p>
              </div>

              <div className="py-5 flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-display-hero text-4xl text-[#e8c176] font-normal">
                    290
                  </span>
                  <span className="font-label-caps text-[10px] text-[#d4c4b4] uppercase font-semibold">
                    AZN / m²
                  </span>
                </div>
                <span className="font-caption text-xs text-[#b6a798] mt-1 font-medium">
                  Cəmi: ~{calculateTotal(290)} AZN
                </span>
              </div>

              <ul className="flex flex-col space-y-3.5 py-4 flex-grow text-xs text-[#d1c5b4]">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Standart daxili arakəsmə və suvaq işləri</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Türkiyə və Rusiya istehsalı baza naqilləri</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Keyfiyyətli laminat və kafel örtükləri</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>2 il rəsmi mühəndis zəmanəti</span>
                </li>
              </ul>

              <div className="pt-4 mt-auto">
                <button
                  onClick={() => onNavigate('elaqe')}
                  className="w-full py-3 bg-[#2a2a2c] hover:bg-[#c9a45c] hover:text-[#523a00] text-[#e8c176] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-all duration-300 rounded text-center font-bold"
                  type="button"
                >
                  Seç
                </button>
              </div>
            </div>

            {/* Paket 2: Premium Təmir */}
            <div className="flex flex-col bg-[#1b1b1d] border border-[#4e4639]/30 hover:border-[#c9a45c]/50 rounded-lg p-6 transition-all duration-300 shadow-md relative group">
              <div className="flex flex-col pb-4 border-b border-[#4e4639]/30">
                <span className="font-label-caps text-[10px] text-[#b6a798] tracking-[0.25em] uppercase font-semibold">
                  02 / Balans
                </span>
                <h3 className="font-headline-sm text-xl text-[#e5e1e4] mt-1 font-normal">
                  Premium Təmir
                </h3>
                <p className="font-caption text-xs text-[#d1c5b4] mt-1 min-h-[36px]">
                  Optimal həll və Avropa standartı
                </p>
              </div>

              <div className="py-5 flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-display-hero text-4xl text-[#e8c176] font-normal">
                    360
                  </span>
                  <span className="font-label-caps text-[10px] text-[#d4c4b4] uppercase font-semibold">
                    AZN / m²
                  </span>
                </div>
                <span className="font-caption text-xs text-[#b6a798] mt-1 font-medium">
                  Cəmi: ~{calculateTotal(360)} AZN
                </span>
              </div>

              <ul className="flex flex-col space-y-3.5 py-4 flex-grow text-xs text-[#d1c5b4]">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Almaniya istehsalı santexnika və gizli borular</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>İspaniya istehsalı keramoqranit (60×120)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Gizli qapı və kölgəli tavan profilləri</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>3 il rəsmi hüquqi zəmanət və müəllif nəzarəti</span>
                </li>
              </ul>

              <div className="pt-4 mt-auto">
                <button
                  onClick={() => onNavigate('elaqe')}
                  className="w-full py-3 bg-[#2a2a2c] hover:bg-[#c9a45c] hover:text-[#523a00] text-[#e8c176] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-all duration-300 rounded text-center font-bold"
                  type="button"
                >
                  Seç
                </button>
              </div>
            </div>

            {/* Paket 3: Vip Təmir (HIGHLIGHTED - "Ən çox seçilən") */}
            <div className="flex flex-col bg-[#2a2a2c] border-2 border-[#e8c176] rounded-lg p-6 transition-all duration-300 shadow-2xl relative lg:-mt-4 lg:mb-[-14px] z-20">
              {/* Top badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#e8c176] text-[#412d00] font-label-caps text-[10px] tracking-[0.25em] uppercase font-bold rounded-full shadow-lg whitespace-nowrap">
                Ən çox seçilən
              </div>
              <div className="flex flex-col pb-4 pt-2 border-b border-[#4e4639]/40">
                <span className="font-label-caps text-[10px] text-[#e8c176] tracking-[0.25em] uppercase font-semibold">
                  03 / Arxitektura
                </span>
                <h3 className="font-headline-sm text-xl text-[#ffdea4] mt-1 font-semibold">
                  Vip Təmir
                </h3>
                <p className="font-caption text-xs text-[#d1c5b4] mt-1 min-h-[36px]">
                  Fərdi arxitektura və tam rahatlıq
                </p>
              </div>

              <div className="py-5 flex flex-col bg-[#353437]/40 -mx-6 px-6 rounded">
                <div className="flex items-baseline gap-1">
                  <span className="font-display-hero text-4xl text-[#e8c176] font-semibold">
                    440
                  </span>
                  <span className="font-label-caps text-[10px] text-[#fce0a0] uppercase font-semibold">
                    AZN / m²
                  </span>
                </div>
                <span className="font-caption text-xs text-[#e8c176] mt-1 font-semibold">
                  Cəmi: ~{calculateTotal(440)} AZN
                </span>
              </div>

              <ul className="flex flex-col space-y-3.5 py-4 flex-grow text-xs text-[#e5e1e4]">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="font-medium text-[#e5e1e4]">
                    Fərdi 3D arxitektur və interyer dizayn layihəsi daxil
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>İtaliya parketi və böyük format mərmər teksturaları</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>Quraşdırılmış divar panelləri və xüsusi akustika</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>Müəllif nəzarəti və 5 illik rəsmi tam zəmanət</span>
                </li>
              </ul>

              <div className="pt-4 mt-auto">
                <button
                  onClick={() => onNavigate('elaqe')}
                  className="w-full py-3.5 bg-[#c9a45c] hover:bg-[#e8c176] text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded shadow-md text-center"
                  type="button"
                >
                  Seç
                </button>
              </div>
            </div>

            {/* Paket 4: Lux Təmir */}
            <div className="flex flex-col bg-[#1b1b1d] border border-[#4e4639]/30 hover:border-[#c9a45c]/50 rounded-lg p-6 transition-all duration-300 shadow-md relative group">
              <div className="flex flex-col pb-4 border-b border-[#4e4639]/30">
                <span className="font-label-caps text-[10px] text-[#b6a798] tracking-[0.25em] uppercase font-semibold">
                  04 / Eksklüziv
                </span>
                <h3 className="font-headline-sm text-xl text-[#e5e1e4] mt-1 font-normal">
                  Lux Təmir
                </h3>
                <p className="font-caption text-xs text-[#d1c5b4] mt-1 min-h-[36px]">
                  Premium materiallar və eksklüziv sənətkarlıq
                </p>
              </div>

              <div className="py-5 flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-display-hero text-4xl text-[#e8c176] font-normal">
                    550
                  </span>
                  <span className="font-label-caps text-[10px] text-[#d4c4b4] uppercase font-semibold">
                    AZN / m²
                  </span>
                </div>
                <span className="font-caption text-xs text-[#b6a798] mt-1 font-medium">
                  Cəmi: ~{calculateTotal(550)} AZN
                </span>
              </div>

              <ul className="flex flex-col space-y-3.5 py-4 flex-grow text-xs text-[#d1c5b4]">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Ağıllı ev (Smart Home) sistemi və multi-zona səs izolyasiyası</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Təbii oniks, travertin və xüsusi bürünc detallar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>İtaliya sənətkarlarından mebel dəstləri spesifikasiyası</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Limitsiz müəllif müşayiəti və 7 illik zəmanət</span>
                </li>
              </ul>

              <div className="pt-4 mt-auto">
                <button
                  onClick={() => onNavigate('elaqe')}
                  className="w-full py-3 bg-[#2a2a2c] hover:bg-[#c9a45c] hover:text-[#523a00] text-[#e8c176] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-all duration-300 rounded text-center font-bold"
                  type="button"
                >
                  Seç
                </button>
              </div>
            </div>

            {/* Paket 5: Açar Təslim Təmir */}
            <div className="flex flex-col bg-[#1b1b1d] border border-[#4e4639]/30 hover:border-[#c9a45c]/50 rounded-lg p-6 transition-all duration-300 shadow-md relative group">
              <div className="flex flex-col pb-4 border-b border-[#4e4639]/30">
                <span className="font-label-caps text-[10px] text-[#b6a798] tracking-[0.25em] uppercase font-semibold">
                  05 / Mütləq
                </span>
                <h3 className="font-headline-sm text-xl text-[#e5e1e4] mt-1 font-normal">
                  Açar Təslim
                </h3>
                <p className="font-caption text-xs text-[#d1c5b4] mt-1 min-h-[36px]">
                  Mütləq lüks və tam təchizatlı yaşayış
                </p>
              </div>

              <div className="py-5 flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-display-hero text-4xl text-[#e8c176] font-normal">
                    880
                  </span>
                  <span className="font-label-caps text-[10px] text-[#d4c4b4] uppercase font-semibold">
                    AZN / m²
                  </span>
                </div>
                <span className="font-caption text-xs text-[#b6a798] mt-1 font-medium">
                  Cəmi: ~{calculateTotal(880)} AZN
                </span>
              </div>

              <ul className="flex flex-col space-y-3.5 py-4 flex-grow text-xs text-[#d1c5b4]">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>İlkin arxitektur eskizdən mebel və tekstilə qədər</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Fərdi mebel atelyesi və mətbəx avadanlıqları daxil</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Fasad, iqlimləndirmə və landşaft elementləri</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e8c176] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Fərdi layihə meneceri və ömürlük texniki servis</span>
                </li>
              </ul>

              <div className="pt-4 mt-auto">
                <button
                  onClick={() => onNavigate('elaqe')}
                  className="w-full py-3 bg-[#2a2a2c] hover:bg-[#c9a45c] hover:text-[#523a00] text-[#e8c176] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-all duration-300 rounded text-center font-bold"
                  type="button"
                >
                  Seç
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Dual-Pane Material Monograph Callout */}
      <section className="w-full bg-[#1b1b1d] px-4 md:px-8 py-20 border-t border-[#4e4639]/30">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col">
            <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.25em] uppercase mb-2 font-semibold">
              Material və Təchizat Monoqrafiyası
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e5e1e4] font-normal leading-tight">
              Hər bir santimetr birbaşa Avropa və yerli karxanalarla zəmanətlənir.
            </h2>
            <p className="font-body-lg text-base text-[#d1c5b4] mt-4 leading-relaxed">
              Biz heç bir təmir paketimizdə orta dərəcəli əvəzedicilərdən istifadə etmirik. Təyin olunan hər smeta xətti istehsalçı sertifikatı və texniki pasportu ilə birbaşa mənzil sahibinə təhvil verilir.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#201f21] border border-[#4e4639]/30 rounded">
                <span className="font-headline-sm text-2xl text-[#e8c176] block font-normal">
                  100%
                </span>
                <span className="font-caption text-xs text-[#b6a798] uppercase tracking-wider">
                  Orijinal xammal
                </span>
              </div>
              <div className="p-4 bg-[#201f21] border border-[#4e4639]/30 rounded">
                <span className="font-headline-sm text-2xl text-[#e8c176] block font-normal">
                  0 AZN
                </span>
                <span className="font-caption text-xs text-[#b6a798] uppercase tracking-wider">
                  Gizli əlavə xərc
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded overflow-hidden shadow-lg border border-[#4e4639]/30">
              <img
                className="w-full h-full object-cover"
                alt="Carrara və travertin fərdi kəsim"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqp26u0LPN09_r_VKSUfI_8TfTj40RLYkMlWC--lYS2Q3P4rL9g_6Hm8nPtyKjWrrLVxhe1lTyE2VO2pTGkPX2IK-lWmVSIANH_dfQKwxMaLzY66fBUsoeQi8eomSF9-Y6hLnLRrFSL2_8oipYCa2fXjvTUhfJV_wYyzl41uiMg3Hy1UYpVe_FkaoOcrdkWgIX1Gc1WTpi0ANXfN94jlOOFzkHTK5OvnrAu0OyMTReY-0JVKNcK90Tgw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0e0e10]/85 backdrop-blur-sm rounded border border-[#4e4639]/30">
                <span className="font-label-caps text-[10px] text-[#e8c176] tracking-widest uppercase block font-semibold">
                  Mərmər & Daş
                </span>
                <span className="font-caption text-xs text-[#e5e1e4]">
                  Carrara və travertin fərdi kəsim
                </span>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 rounded overflow-hidden shadow-lg border border-[#4e4639]/30 sm:mt-6">
              <img
                className="w-full h-full object-cover"
                alt="Kölgəli baza və təbii taxta kaplama"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoEMyli72GAUyyzkN81JjLkVFlnQjk5BxCcQpmtr7eMFOkHxklawPghhZUxDkdJ8guO2rYlAeMOaAxEx0ooyu4mBMXGH-flis5fU_tBLCLSXX7Ez1YeaGvzse427aFhoUxBc6w7bAAbkM-sopMUK_9xZVSYcVcKgryt2_mLyi61H-S8VfpgmEHeLdfcrAWTBmE8FAE3lfcjVd4XIgx73ihMDD8_ZF45bthqoC2Zw7i1PeP5h2wRgfv5w"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0e0e10]/85 backdrop-blur-sm rounded border border-[#4e4639]/30">
                <span className="font-label-caps text-[10px] text-[#e8c176] tracking-widest uppercase block font-semibold">
                  Ağac & Profil
                </span>
                <span className="font-caption text-xs text-[#e5e1e4]">
                  Kölgəli baza və təbii taxta kaplama
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zəmanət Zolağı (Ivory Monograph Contrast Section) */}
      <section className="w-full bg-[#f1e0cf] text-[#382f24] px-4 md:px-8 py-20 border-t border-[#221a10]/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-label-caps text-[11px] text-[#504539] tracking-[0.25em] uppercase block mb-1 font-semibold">
                Hüquqi və Texniki Təminat
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#221a10] font-normal">
                Sarsılmaz Zəmanət Şərtləri
              </h2>
            </div>
            <p className="font-label-editorial text-[15px] text-[#473c31] italic max-w-md">
              Hər bir müqavilə öhdəliyi Bakı şəhərinin ən yüksək mühəndislik və hüquq standartlarına əsaslanır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Zəmanət 1 */}
            <div className="flex flex-col p-8 bg-[#faf7f2] rounded-lg shadow-sm border border-[#e3ddd1]">
              <div className="w-14 h-14 rounded-full bg-[#fce0a0] flex items-center justify-center text-[#251a00] mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-headline-sm text-2xl text-[#221a10] font-normal mb-2">
                Rəsmi müqavilə
              </h3>
              <p className="font-body-md text-sm text-[#473c31] leading-relaxed">
                Notarial və hüquqi təsdiqli, dəqiq təhvil tarixi və heç bir şəraitdə artmayan sabit baş smeta zəmanəti.
              </p>
            </div>

            {/* Zəmanət 2 */}
            <div className="flex flex-col p-8 bg-[#faf7f2] rounded-lg shadow-sm border border-[#e3ddd1]">
              <div className="w-14 h-14 rounded-full bg-[#fce0a0] flex items-center justify-center text-[#251a00] mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-headline-sm text-2xl text-[#221a10] font-normal mb-2">
                5 il zəmanət
              </h3>
              <p className="font-body-md text-sm text-[#473c31] leading-relaxed">
                İcra olunan bütün mühəndislik, suvaq, santexnika, elektrik və montaj işlərinə şirkət tərəfindən tam sənədləşdirilmiş zəmanət.
              </p>
            </div>

            {/* Zəmanət 3 */}
            <div className="flex flex-col p-8 bg-[#faf7f2] rounded-lg shadow-sm border border-[#e3ddd1]">
              <div className="w-14 h-14 rounded-full bg-[#fce0a0] flex items-center justify-center text-[#251a00] mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-headline-sm text-2xl text-[#221a10] font-normal mb-2">
                Əlavə ödəniş yoxdur
              </h3>
              <p className="font-body-md text-sm text-[#473c31] leading-relaxed">
                Layihə gedişində heç bir gözlənilməz və ya gizli xərc tələb olunmur. Risk idarəetməsi tam olaraq Lunaria-nın balansındadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yekun CTA Bölməsi */}
      <section className="w-full bg-[#0e0e10] px-4 md:px-8 py-20 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="p-8 md:p-14 bg-[#201f21] border border-[#4e4639]/40 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#e8c176]/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col">
                <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.25em] uppercase mb-2 font-semibold">
                  Fərdi Hesablama & Yerində Baxış
                </span>
                <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-[52px] md:leading-[60px] text-[#e5e1e4] font-normal">
                  Sizə uyğun paketi seçək
                </h2>
                <p className="font-body-xl text-base md:text-xl text-[#d1c5b4] mt-3 max-w-2xl leading-relaxed">
                  Məkanınızın planını bizə göndərin və ya peşəkar mühəndisimiz tərəfindən yerində pulsuz ölçü götürülməsini təyin edin.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenFreeMeasure}
                    className="px-8 py-3.5 bg-[#c9a45c] hover:bg-[#e8c176] text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded shadow-lg"
                    type="button"
                  >
                    Pulsuz məsləhət
                  </button>
                  <a
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2a2a2c] hover:bg-[#353437] text-[#e5e1e4] font-headline-sm text-lg transition-colors rounded border border-[#4e4639]/40"
                    href="tel:+994505300369"
                  >
                    <span className="material-symbols-outlined text-[#e8c176] text-[20px]">
                      call
                    </span>
                    <span>+994 50 530 03 69</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col bg-[#1b1b1d] border border-[#4e4639]/30 p-6 rounded-lg shadow-inner">
                <span className="font-label-caps text-[11px] text-[#d4c4b4] tracking-[0.2em] uppercase mb-3 font-semibold">
                  Niyə Lunaria?
                </span>
                <ul className="space-y-3 font-body-md text-sm text-[#d1c5b4]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8c176] shrink-0" />
                    <span>Bütün layihələr üzrə kamera ilə onlayn nəzarət</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8c176] shrink-0" />
                    <span>Mərhələli və şəffaf bank köçürməsi</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8c176] shrink-0" />
                    <span>Avropa istehsalı sertifikatlaşdırılmış materiallar</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8c176] shrink-0" />
                    <span>Müqaviləyə əsasən dəqiq təhvil zəmanəti</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
