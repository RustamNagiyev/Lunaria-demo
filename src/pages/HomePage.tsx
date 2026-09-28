import React from 'react';
import { NavPage } from '../types.ts';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenFreeMeasure: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenFreeMeasure,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] w-full flex items-center justify-center bg-[#0e0e10] -mt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida/AEtjO1UBGa_tnJMovwWKS1it_1NdYkm4imsSZkapXZgs2Uuex9OmMGUvwZATIiWBZjMm_l3O46JWc39N7TKjeMZx-3Yfxw7ctpBTkNp1BU3QAaLsf8yuxT1FUTFaSrk0Ilp3ierrIujUcuaaaGTFRYp7Vcsz3BazGkl-yPTw5a8X1hwzdb6Kbje4QzeQuWxScDfIx-YOkvNZpAXTUBFfj52QSmXN1goEE5ol7mbLHBA8hOChvM03Ljp-1YcxKauz')`,
          }}
        />
        {/* Architectural Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-[#0e0e10]/75 to-[#0e0e10]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0e0e10]/30 to-[#0e0e10]/90" />

        <div className="relative z-10 max-w-[1240px] w-full mx-auto px-4 md:px-8 pt-32 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#2a2a2c]/60 backdrop-blur-md mb-8 border border-[#4e4639]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8c176]" />
            <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.28em] uppercase font-semibold">
              TƏMİR • TİKİNTİ • İNTERYER DİZAYN
            </span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-6xl md:text-[84px] md:leading-[92px] text-[#e5e1e4] max-w-4xl tracking-tight mb-6 leading-tight font-normal">
            Xəyalınızdakı məkanı birlikdə yaradaq
          </h1>

          <p className="font-body-xl text-lg md:text-xl text-[#d1c5b4] max-w-2xl font-light tracking-wide mb-12 leading-relaxed">
            10 ildən artıq təcrübə ilə mənzil, villa və obyektlər üçün açar təslim həllər.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <button
              onClick={onOpenFreeMeasure}
              className="w-full sm:w-auto px-9 py-4 bg-[#c9a45c] hover:bg-[#e8c176] text-[#523a00] font-label-caps text-[11px] tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-xl text-center"
              type="button"
            >
              Pulsuz ölçü sifariş et
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('layiheler');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onNavigate('layiheler');
                }
              }}
              className="w-full sm:w-auto px-9 py-4 bg-[#0e0e10]/60 backdrop-blur-sm border border-[#4e4639]/50 text-[#e8c176] hover:bg-[#c9a45c] hover:text-[#523a00] font-label-caps text-[11px] tracking-[0.22em] uppercase transition-all duration-300 text-center font-semibold"
              type="button"
            >
              Layihələrə bax
            </button>
          </div>

          {/* Floor Coordinates Indicator */}
          <div className="mt-20 flex items-center gap-6 text-[#b6a798] font-caption text-xs uppercase tracking-[0.25em]">
            <span>BAKI • 40.4093° N, 49.8671° E</span>
            <span className="w-8 h-[1px] bg-[#4e4639]/40" />
            <span>MEMARLIQ MONOQRAFİYASI</span>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="w-full bg-[#0e0e10] py-10 border-b border-[#4e4639]/30">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex-shrink-0 bg-[#201f21] flex items-center justify-center text-[#c9a45c] border border-[#4e4639]/20">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xl md:text-[22px] text-[#e5e1e4] tracking-wide font-normal">
                  10+ İl
                </span>
                <span className="font-label-caps text-[11px] text-[#d1c5b4] uppercase tracking-[0.16em] font-semibold">
                  Peşəkar Təcrübə
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex-shrink-0 bg-[#201f21] flex items-center justify-center text-[#c9a45c] border border-[#4e4639]/20">
                <span className="material-symbols-outlined text-[24px]">shield</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xl md:text-[22px] text-[#e5e1e4] tracking-wide font-normal">
                  5 İl
                </span>
                <span className="font-label-caps text-[11px] text-[#d1c5b4] uppercase tracking-[0.16em] font-semibold">
                  Rəsmi Zəmanət
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex-shrink-0 bg-[#201f21] flex items-center justify-center text-[#c9a45c] border border-[#4e4639]/20">
                <span className="material-symbols-outlined text-[24px]">description</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xl md:text-[22px] text-[#e5e1e4] tracking-wide font-normal">
                  Müqavilə
                </span>
                <span className="font-label-caps text-[11px] text-[#d1c5b4] uppercase tracking-[0.16em] font-semibold">
                  Dəqiq Smeta & Qrafik
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex-shrink-0 bg-[#201f21] flex items-center justify-center text-[#c9a45c] border border-[#4e4639]/20">
                <span className="material-symbols-outlined text-[24px]">key</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xl md:text-[22px] text-[#e5e1e4] tracking-wide font-normal">
                  Açar Təslim
                </span>
                <span className="font-label-caps text-[11px] text-[#d1c5b4] uppercase tracking-[0.16em] font-semibold">
                  Kompleks Yanaşma
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. XİDMƏTLƏR (Dual-Pane Ivory Section) */}
      <section className="w-full bg-[#f1e0cf] text-[#221a10] py-28 transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-[11px] text-[#504539] uppercase tracking-[0.25em] block mb-3 font-semibold">
                Mükəmməllik və İnteryer
              </span>
              <h2 className="font-headline-xl text-3xl md:text-5xl lg:text-[56px] text-[#221a10] tracking-tight font-normal">
                Xidmətlərimiz
              </h2>
            </div>
            <button
              onClick={() => onNavigate('xidmetler')}
              className="inline-flex items-center gap-2 font-label-caps text-[11px] text-[#221a10] tracking-[0.2em] uppercase hover:text-[#c9a45c] transition-colors group font-semibold"
              type="button"
            >
              Bütün xidmətlər
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Services Grid (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Təmir */}
            <div
              onClick={() => onNavigate('xidmetler')}
              className="bg-[#0e0e10]/5 backdrop-blur-sm p-6 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="w-full h-64 overflow-hidden mb-6 bg-[#b6a798]/20">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Kapital təmir"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGVGOWZiDearn2jAYPlTufey90_TBXF_CVWr4NIIni4Nn3W5lyBdmzMlJ9kTqmb0hH91pVDUjEFsykZa8n3krOB15qSTvFzMKq4r2MVEmAOor-0YfTQLfwtIxSsFPQJ6zvxEYGq96PT4nr99S-5l14gvNXWMMBOmw-xXUR1w17FlyNKcCP5mZKvHUXa_Ekip4MwfA68vo6KWuapsKNP9iPFbGArMoSNTyS9U3rkZ8yrsbrcYjqXoyG3w"
                  />
                </div>
                <span className="font-label-caps text-[10px] text-[#504539] tracking-[0.2em] block mb-2 font-semibold">
                  01 / KAPİTAL TƏMİR
                </span>
                <h3 className="font-headline-md text-2xl text-[#221a10] mb-3 font-normal">
                  Təmir
                </h3>
                <p className="font-body-md text-sm text-[#504539] mb-6 leading-relaxed">
                  Açar təhvili premium mənzil və rezidensiya təmiri.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-[#221a10] font-caption text-xs uppercase tracking-wider border-t border-[#221a10]/10">
                <span>Standart: Premium</span>
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </div>
            </div>

            {/* Card 2: Tikinti */}
            <div
              onClick={() => onNavigate('xidmetler')}
              className="bg-[#0e0e10]/5 backdrop-blur-sm p-6 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="w-full h-64 overflow-hidden mb-6 bg-[#b6a798]/20">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Tikinti"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDtUxMY62B8JYE71QlFLvzJcK8y4E9SxMKGdyh16gG2dAdwPEZfsOy9557yngYSU0Gz80h1i3GFMr0qvLSvlLnIUElxK34R71MJ85H8-2YPtpumx0rU2ccLlTwiZwUmJlrfzUzedrv2D9WXc3gtCicrcMd4KRDPqGdwokMTIng3u8qtBXKvgWvpouPltJjziLFcAjrr8JgX5WQF94BC8Lp0TBOIWG_I3iOpYR6GUHKgY_grqeUKF-8qw"
                  />
                </div>
                <span className="font-label-caps text-[10px] text-[#504539] tracking-[0.2em] block mb-2 font-semibold">
                  02 / MÜHƏNDİSLİK
                </span>
                <h3 className="font-headline-md text-2xl text-[#221a10] mb-3 font-normal">
                  Tikinti
                </h3>
                <p className="font-body-md text-sm text-[#504539] mb-6 leading-relaxed">
                  Fərdi villa, malikanə və kommersiya obyektlərinin monolit inşası.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-[#221a10] font-caption text-xs uppercase tracking-wider border-t border-[#221a10]/10">
                <span>Standart: Monolit</span>
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </div>
            </div>

            {/* Card 3: İnteryer dizayn */}
            <div
              onClick={() => onNavigate('xidmetler')}
              className="bg-[#0e0e10]/5 backdrop-blur-sm p-6 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="w-full h-64 overflow-hidden mb-6 bg-[#b6a798]/20">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="İnteryer dizayn"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5MS8bSrW9VYFrHwmWR8VQgu6xKGSDJGwlbfsf7pVVSqvRYWzeZnEGM4-Ak9E8GQuGgKbnvTqjneme24RnjAkTbKHuuz0X6uoEUfAN5jHTQs-UWq79uOotlKb5P8FunDSmprR3lfle6EKLKQjL4be0bACnDNsOkNMX-NSqnpcRttj_s1pPU0z8GhKBRDobWDHWHGRpfr2ikvYW9H0TEZmkbIqrzYORLC7m_8EOS7cMSXP-BFmu8Eosdw"
                  />
                </div>
                <span className="font-label-caps text-[10px] text-[#504539] tracking-[0.2em] block mb-2 font-semibold">
                  03 / KONSEPT
                </span>
                <h3 className="font-headline-md text-2xl text-[#221a10] mb-3 font-normal">
                  İnteryer dizayn
                </h3>
                <p className="font-body-md text-sm text-[#504539] mb-6 leading-relaxed">
                  Məkanın fərdi xarakterini əks etdirən 3D arxitektur layihələndirmə.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-[#221a10] font-caption text-xs uppercase tracking-wider border-t border-[#221a10]/10">
                <span>Standart: 3D Studio</span>
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </div>
            </div>

            {/* Card 4: Mebel */}
            <div
              onClick={() => onNavigate('xidmetler')}
              className="bg-[#0e0e10]/5 backdrop-blur-sm p-6 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="w-full h-64 overflow-hidden mb-6 bg-[#b6a798]/20">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Mebel"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLKxUtcfmXvA1_2-2XDZUw-avSob_e3r3m43Dmud8lafGRtrt2QrtxUS7gY08H-uHgq6jdVROU1M7tq23DaJQuRdvA0ZWRmzjXbkXggmqNeqOAC9p61UmMXQeCiLWfsmrWpGw55XtHTy5crFv4cnhXYB-4PGrPVCpBvhW3EUIcCqXURmJHwBkhFw_s5BODelK8cnmjVA64QNqUJGbmVGXFYNasiKtbmY9-6RXUan1pCHlEFhWJ5iXijQ"
                  />
                </div>
                <span className="font-label-caps text-[10px] text-[#504539] tracking-[0.2em] block mb-2 font-semibold">
                  04 / ATELYE
                </span>
                <h3 className="font-headline-md text-2xl text-[#221a10] mb-3 font-normal">
                  Mebel
                </h3>
                <p className="font-body-md text-sm text-[#504539] mb-6 leading-relaxed">
                  Xüsusi layihə əsasında İtalyan standartlı fərdi mebel istehsalı.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-[#221a10] font-caption text-xs uppercase tracking-wider border-t border-[#221a10]/10">
                <span>Standart: Atelye</span>
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NECƏ İŞLƏYİRİK (Dark Architectural Section) */}
      <section className="w-full bg-[#0e0e10] py-28 relative">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <span className="px-4 py-1 bg-[#201f21] border border-[#4e4639]/30 font-label-caps text-[11px] text-[#e8c176] tracking-[0.25em] uppercase mb-4 font-semibold">
              İŞ METODOLOGİYASI
            </span>
            <h2 className="font-headline-xl text-3xl md:text-5xl lg:text-[56px] text-[#e5e1e4] tracking-tight font-normal">
              Necə işləyirik
            </h2>
            <p className="font-body-md text-sm md:text-base text-[#d1c5b4] max-w-xl mt-3">
              Hər layihə arxitektur dəqiqlik, şəffaf büdcələşdirmə və ardıcıl nəzarətlə idarə olunur.
            </p>
          </div>

          {/* 4 Horizontal Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-[#201f21] border border-[#4e4639]/30 p-8 relative flex flex-col justify-between group hover:bg-[#2a2a2c] transition-colors duration-300">
              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display-hero text-5xl text-[#e8c176] font-light">
                    01
                  </span>
                  <span className="font-label-caps text-[11px] text-[#b6a798] uppercase tracking-[0.2em] font-semibold">
                    MƏRHƏLƏ
                  </span>
                </div>
                <h3 className="font-headline-sm text-2xl text-[#e5e1e4] mb-4 font-normal">
                  Ölçü
                </h3>
                <p className="font-body-md text-sm text-[#d1c5b4] leading-relaxed">
                  Məkanın 3D lazer skaneri ilə dəqiq ölçülməsi və texniki təhlil.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-[#e8c176] font-caption text-xs uppercase tracking-wider border-t border-[#4e4639]/30">
                <span className="material-symbols-outlined text-[16px]">straighten</span>
                <span>Milli Skaner Protokolu</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#201f21] border border-[#4e4639]/30 p-8 relative flex flex-col justify-between group hover:bg-[#2a2a2c] transition-colors duration-300">
              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display-hero text-5xl text-[#e8c176] font-light">
                    02
                  </span>
                  <span className="font-label-caps text-[11px] text-[#b6a798] uppercase tracking-[0.2em] font-semibold">
                    MƏRHƏLƏ
                  </span>
                </div>
                <h3 className="font-headline-sm text-2xl text-[#e5e1e4] mb-4 font-normal">
                  Dizayn
                </h3>
                <p className="font-body-md text-sm text-[#d1c5b4] leading-relaxed">
                  Fərdi planlaşdırma, 3D fotorealistik vizuallaşdırma və material seçimi.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-[#e8c176] font-caption text-xs uppercase tracking-wider border-t border-[#4e4639]/30">
                <span className="material-symbols-outlined text-[16px]">architecture</span>
                <span>Fotorealistik Rendlər</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#201f21] border border-[#4e4639]/30 p-8 relative flex flex-col justify-between group hover:bg-[#2a2a2c] transition-colors duration-300">
              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display-hero text-5xl text-[#e8c176] font-light">
                    03
                  </span>
                  <span className="font-label-caps text-[11px] text-[#b6a798] uppercase tracking-[0.2em] font-semibold">
                    MƏRHƏLƏ
                  </span>
                </div>
                <h3 className="font-headline-sm text-2xl text-[#e5e1e4] mb-4 font-normal">
                  Material seçimi
                </h3>
                <p className="font-body-md text-sm text-[#d1c5b4] leading-relaxed">
                  Avropanın aparıcı brendlərindən birbaşa təchizat və smeta təsdiqi.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-[#e8c176] font-caption text-xs uppercase tracking-wider border-t border-[#4e4639]/30">
                <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                <span>İtaliya & İspaniya İdxalı</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#201f21] border border-[#4e4639]/30 p-8 relative flex flex-col justify-between group hover:bg-[#2a2a2c] transition-colors duration-300">
              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display-hero text-5xl text-[#e8c176] font-light">
                    04
                  </span>
                  <span className="font-label-caps text-[11px] text-[#b6a798] uppercase tracking-[0.2em] font-semibold">
                    MƏRHƏLƏ
                  </span>
                </div>
                <h3 className="font-headline-sm text-2xl text-[#e5e1e4] mb-4 font-normal">
                  Təhvil
                </h3>
                <p className="font-body-md text-sm text-[#d1c5b4] leading-relaxed">
                  Tam hazır mənzilin müəllif nəzarəti ilə təhvili və 5 illik rəsmi zəmanət.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-[#e8c176] font-caption text-xs uppercase tracking-wider border-t border-[#4e4639]/30">
                <span className="material-symbols-outlined text-[16px]">task_alt</span>
                <span>Müəllif Nəzarəti Aktı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇİLMİŞ LAYİHƏLƏR (Dual-Pane Ivory Section) */}
      <section
        className="w-full bg-[#f1e0cf] text-[#221a10] py-28 transition-colors"
        id="layiheler"
      >
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-[11px] text-[#504539] uppercase tracking-[0.25em] block mb-3 font-semibold">
                PORTFEL
              </span>
              <h2 className="font-headline-xl text-3xl md:text-5xl lg:text-[56px] text-[#221a10] tracking-tight font-normal">
                Seçilmiş Layihələr
              </h2>
            </div>
            <button
              onClick={() => onNavigate('layiheler')}
              className="inline-flex items-center gap-2 font-label-caps text-[11px] text-[#221a10] tracking-[0.2em] uppercase hover:text-[#c9a45c] transition-colors group font-semibold"
              type="button"
            >
              Bütün layihələr
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Asymmetric Editorial Gallery Grid (5 Projects) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Project 1: Large Featured Span (7 cols) */}
            <div
              onClick={() => onNavigate('layiheler')}
              className="md:col-span-7 group relative bg-[#0e0e10] overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="w-full h-[480px] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Port Baku Penthaus"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaIZ5ZTrzlrm-UkTbf9AX1NE2tayd1tJ4YuYa4A9oZo54hyfbV_pHm-7-UYngGPNB2vpb7_Z0UpTo9fKvZe7v7OMwEbsFYguwk2fzXktt_3_NSijfAbXj7B_o2RSGUWa-0sQe3euUVczAbkEnl0kBQM6zTIRyTTqTt-iw8jWD66o_ldb8wSFGsTPrSX-AIewAXPk387dcfhs42Iql9PIF0MZF8lTyoRO7P_INz708p5I_GBBhEMGYHSg"
                />
              </div>
              <div className="p-6 bg-[#2a2a2c] text-[#e5e1e4] flex items-center justify-between">
                <div>
                  <span className="font-caption text-xs text-[#e8c176] tracking-[0.2em] uppercase block font-semibold">
                    REZİDENSİYA • 320 M²
                  </span>
                  <h3 className="font-headline-md text-2xl text-[#e5e1e4] mt-1 font-normal">
                    Port Baku • Penthaus
                  </h3>
                </div>
                <span className="material-symbols-outlined text-[#e8c176] text-[24px] group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </div>
            </div>

            {/* Project 2: High Portrait Span (5 cols) */}
            <div
              onClick={() => onNavigate('layiheler')}
              className="md:col-span-5 group relative bg-[#0e0e10] overflow-hidden shadow-lg md:-mt-8 cursor-pointer"
            >
              <div className="w-full h-[480px] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="White City Dupleks"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6GgSNWUFkJGfxJUXpQw7NapjDMR3vk10MnYv3LahZC-8dKVnblbYBGTmN_pZKyXOVq39o8qtWv-wg-yXZnNKFxEZJrLtLM6V5TPyoFIzVXwrn5TB88Aq51dWIIJBe_8uSciQjAqNlcSy_dlZ9XHg4LPJy87stdAGnZYv4xagOEsuycdVMkb-UXeki7QBbn5SWG5xoAxZ7XWQlm76qU1x3WBSeQ-BBjSdb0HOiD0OvPI9rt19hc8CsRQ"
                />
              </div>
              <div className="p-6 bg-[#2a2a2c] text-[#e5e1e4] flex items-center justify-between">
                <div>
                  <span className="font-caption text-xs text-[#e8c176] tracking-[0.2em] uppercase block font-semibold">
                    DUBLEKS • 240 M²
                  </span>
                  <h3 className="font-headline-md text-2xl text-[#e5e1e4] mt-1 font-normal">
                    White City • Dupleks
                  </h3>
                </div>
                <span className="material-symbols-outlined text-[#e8c176] text-[24px] group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </div>
            </div>

            {/* Project 3: 4 cols */}
            <div
              onClick={() => onNavigate('layiheler')}
              className="md:col-span-4 group relative bg-[#0e0e10] overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="w-full h-[380px] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Sea Breeze Villa"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt1CpyMCNjRMr2xYm6ck6YFi634bg1uCZmVV51DIKCSighqLLf4BwUhSZgzdM77ad0f7E1Z-KfUkSRzACaygRDZ_StsmfIdURajMbzxYShVyp8qkbw-gQRq14qsfl-u6b_nz2ECRQuJiUYYCFodiEBXKl26VE2AIA1VTnEvQz2ccoSpcG9W370P0ZLekEmKSbtFoGbOFFgZZscOU5uYum2vonVNuORtIoGncpY4iY3x0EpDDMdA9BrKQ"
                />
              </div>
              <div className="p-6 bg-[#2a2a2c] text-[#e5e1e4] flex items-center justify-between">
                <div>
                  <span className="font-caption text-xs text-[#e8c176] tracking-[0.2em] uppercase block font-semibold">
                    SAHİL VİLLASI • 450 M²
                  </span>
                  <h3 className="font-headline-sm text-xl text-[#e5e1e4] mt-1 font-normal">
                    Sea Breeze • Villa
                  </h3>
                </div>
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </div>
            </div>

            {/* Project 4: 4 cols */}
            <div
              onClick={() => onNavigate('layiheler')}
              className="md:col-span-4 group relative bg-[#0e0e10] overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="w-full h-[380px] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Badamdar Rezidensiya"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6a2uVlR1Km18bpHPKJdZoWEZGk9P5tGOlsuVhMxOCKbI9yKtOJVhvlZbqlTw3ieoThMgENkZX9tTYWHc7ME4g0tEJSEn2n1BwfSiIHofblFw4btw9JQby0XWyrDQGSdURgUObT5x7g62-ij5BljAzdlUEC_YjeGWl0_wiAjaYCwoeRCWBvklMcev3ZgIAGEkCh0ILvUEIEvstAVSoa-cJKbrRtH7LuoIztfJlaRDppA5a87QFiFHVgw"
                />
              </div>
              <div className="p-6 bg-[#2a2a2c] text-[#e5e1e4] flex items-center justify-between">
                <div>
                  <span className="font-caption text-xs text-[#e8c176] tracking-[0.2em] uppercase block font-semibold">
                    FƏRDİ EV • 510 M²
                  </span>
                  <h3 className="font-headline-sm text-xl text-[#e5e1e4] mt-1 font-normal">
                    Badamdar • Rezidensiya
                  </h3>
                </div>
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </div>
            </div>

            {/* Project 5: 4 cols */}
            <div
              onClick={() => onNavigate('layiheler')}
              className="md:col-span-4 group relative bg-[#0e0e10] overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="w-full h-[380px] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Nardaran İqamətgah"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChARVSjcE2BV8VKPAUUnaN1jgMgGlTjSw1zA6t8kyei_EgFeeej16weZ5qyx8NmA599asgFlst_CMAB16LHZVeXxDs3_cSVpkw0Q0kqflOrV398BzOO3fCfFAfcs2EJa9sZkHf2Z1Lln2hQfpygJ9eye6LFhNTLH5aH5HicILz-kBgWI5b-xAKXWvdmVPq2Y9fV1vAVollTcljMmc2AYBqTRDIKkDBVXzfVIo9_CvEwtVJS4LxfCDgMw"
                />
              </div>
              <div className="p-6 bg-[#2a2a2c] text-[#e5e1e4] flex items-center justify-between">
                <div>
                  <span className="font-caption text-xs text-[#e8c176] tracking-[0.2em] uppercase block font-semibold">
                    İQAMƏTGAH • 680 M²
                  </span>
                  <h3 className="font-headline-sm text-xl text-[#e5e1e4] mt-1 font-normal">
                    Nardaran • İqamətgah
                  </h3>
                </div>
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PAKETLƏR PREVIEW (Dark Section) */}
      <section className="w-full bg-[#0e0e10] py-28 relative">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.25em] uppercase block mb-3 font-semibold">
                TƏMİR STANDARTLARI
              </span>
              <h2 className="font-headline-xl text-3xl md:text-5xl lg:text-[56px] text-[#e5e1e4] tracking-tight font-normal">
                Təmir Paketləri
              </h2>
            </div>
            <button
              onClick={() => onNavigate('paketler')}
              className="inline-flex items-center gap-2 font-label-caps text-[11px] text-[#d1c5b4] tracking-[0.2em] uppercase hover:text-[#e8c176] transition-colors group font-semibold"
              type="button"
            >
              Bütün paketlər
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Package 1: Premium */}
            <div className="bg-[#201f21] border border-[#4e4639]/30 p-8 md:p-10 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-label-caps text-[11px] text-[#d4c4b4] tracking-[0.25em] uppercase font-semibold">
                    BAZİS STANDART
                  </span>
                  <span className="font-caption text-xs text-[#d1c5b4]">Açar Təhvil</span>
                </div>
                <h3 className="font-headline-lg text-3xl md:text-4xl text-[#e5e1e4] mb-2 font-normal">
                  Premium
                </h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-display-hero text-4xl md:text-5xl text-[#e8c176] font-normal">
                    360
                  </span>
                  <span className="font-body-md text-sm text-[#d1c5b4]">AZN / m²</span>
                </div>
                <ul className="space-y-4 mb-10 text-[#d1c5b4] font-body-md text-sm">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>Almaniya istehsalı santexnika və borular</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>İspan keramoqraniti (60x120)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>Elektrik və su xətlərinin çəkilməsi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>3 illik rəsmi hüquqi zəmanət</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('paketler')}
                className="w-full py-4 bg-[#2a2a2c] text-[#e5e1e4] font-label-caps text-[11px] tracking-[0.2em] uppercase hover:bg-[#c9a45c] hover:text-[#523a00] transition-all text-center font-semibold"
                type="button"
              >
                Ətraflı bax
              </button>
            </div>

            {/* Package 2: VIP (Featured Accent) */}
            <div className="bg-[#2a2a2c] border border-[#c9a45c]/50 p-8 md:p-10 flex flex-col justify-between shadow-2xl relative md:-translate-y-4">
              <div className="absolute -top-3 left-8 px-4 py-1 bg-[#e8c176] text-[#412d00] font-label-caps text-[10px] tracking-[0.2em] uppercase shadow-md font-bold">
                Ən Çox Seçilən
              </div>
              <div>
                <div className="flex items-center justify-between mb-6 pt-2">
                  <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.25em] uppercase font-semibold">
                    EKSKLYUZİV
                  </span>
                  <span className="font-caption text-xs text-[#e8c176] font-semibold">
                    Tam Nəzarət
                  </span>
                </div>
                <h3 className="font-headline-lg text-3xl md:text-4xl text-[#e5e1e4] mb-2 font-normal">
                  Vip
                </h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-display-hero text-4xl md:text-5xl text-[#e8c176] font-normal">
                    440
                  </span>
                  <span className="font-body-md text-sm text-[#d1c5b4]">AZN / m²</span>
                </div>
                <ul className="space-y-4 mb-10 text-[#e5e1e4] font-body-md text-sm">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>Fərdi 3D arxitektur interyer dizayn</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>İtaliya parketi və iri format mərmər örtük</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>Gizli qapılar və kölgəli profil tavanlar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>Müəllif nəzarəti & 5 illik tam zəmanət</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('paketler')}
                className="w-full py-4 bg-[#e8c176] text-[#412d00] font-label-caps text-[11px] tracking-[0.2em] uppercase hover:bg-[#c9a45c] hover:text-[#523a00] transition-all text-center font-bold"
                type="button"
              >
                Ətraflı bax
              </button>
            </div>

            {/* Package 3: Lux */}
            <div className="bg-[#201f21] border border-[#4e4639]/30 p-8 md:p-10 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-label-caps text-[11px] text-[#d4c4b4] tracking-[0.25em] uppercase font-semibold">
                    ULTRA LUXURY
                  </span>
                  <span className="font-caption text-xs text-[#d1c5b4]">Məhdud Sayda</span>
                </div>
                <h3 className="font-headline-lg text-3xl md:text-4xl text-[#e5e1e4] mb-2 font-normal">
                  Lux
                </h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-display-hero text-4xl md:text-5xl text-[#e8c176] font-normal">
                    550
                  </span>
                  <span className="font-body-md text-sm text-[#d1c5b4]">AZN / m²</span>
                </div>
                <ul className="space-y-4 mb-10 text-[#d1c5b4] font-body-md text-sm">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>Ağıllı ev sistemi və səs izolyasiyası</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>Təbii oniks, travertin və bürünc detallar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>Xüsusi sifarişli İtalyan mebel dəstləri</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                      check
                    </span>
                    <span>Limitsiz müəllif müşayiəti & 7 illik zəmanət</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('paketler')}
                className="w-full py-4 bg-[#2a2a2c] text-[#e5e1e4] font-label-caps text-[11px] tracking-[0.2em] uppercase hover:bg-[#c9a45c] hover:text-[#523a00] transition-all text-center font-semibold"
                type="button"
              >
                Ətraflı bax
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA (Ivory Architectural Block) */}
      <section className="w-full bg-[#f1e0cf] text-[#221a10] py-28 transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <div className="bg-[#0e0e10]/5 p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl border border-[#221a10]/10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="font-label-caps text-[11px] text-[#504539] uppercase tracking-[0.25em] block mb-3 font-semibold">
                BAŞLANĞIC NÖQTƏSİ
              </span>
              <h2 className="font-headline-xl text-3xl md:text-5xl lg:text-[56px] text-[#221a10] tracking-tight mb-4 font-normal">
                Layihənizə bu gün başlayın
              </h2>
              <p className="font-body-xl text-lg md:text-xl text-[#504539] font-light leading-relaxed">
                Baş memarımızla görüş təyin edin və ya layihənizi birbaşa müzakirə edin.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">
              <button
                onClick={() => onNavigate('elaqe')}
                className="w-full sm:w-auto px-10 py-5 bg-[#221a10] text-[#f1e0cf] font-label-caps text-[11px] tracking-[0.22em] uppercase hover:bg-[#c9a45c] hover:text-[#523a00] transition-all duration-300 text-center shadow-lg font-bold"
                type="button"
              >
                Müraciət et
              </button>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#d4c4b4]/40 text-[#221a10] font-label-caps text-[11px] tracking-[0.18em] uppercase hover:bg-[#221a10] hover:text-[#f1e0cf] transition-all duration-300 text-center font-bold"
                href="https://wa.me/994505300369"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                050 530 03 69
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
