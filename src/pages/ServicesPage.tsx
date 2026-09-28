import React from 'react';
import { NavPage } from '../types.ts';

interface ServicesPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenFreeMeasure: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenFreeMeasure,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* PAGE HEADER */}
      <section className="w-full bg-[#0e0e10] py-20 px-4 md:px-8 border-b border-[#4e4639]/30">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#c9a45c]" />
            <span className="font-label-caps text-[11px] tracking-[0.3em] text-[#c9a45c] uppercase font-semibold">
              MƏHARƏT VƏ DƏQİQLİK
            </span>
            <span className="w-1.5 h-1.5 bg-[#c9a45c]" />
          </div>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#d1c5b4] font-caption text-xs uppercase tracking-[0.18em] mb-4">
            <button
              onClick={() => onNavigate('ana-sehife')}
              className="hover:text-[#e8c176] transition-colors"
              type="button"
            >
              Ana səhifə
            </button>
            <span className="text-[#4e4639]">/</span>
            <span className="text-[#c9a45c] font-semibold">Xidmətlər</span>
          </nav>

          <h1 className="font-headline-xl text-4xl md:text-6xl text-[#e5e1e4] mb-4 tracking-tight font-normal">
            Xidmətlərimiz
          </h1>
          <p className="font-body-xl text-lg md:text-xl text-[#d1c5b4] max-w-2xl font-light leading-relaxed">
            Hər bir məkana fərdi memarlıq baxışı, beynəlxalq mühəndislik dəqiqliyi və yüksək səviyyəli icra.
          </p>

          {/* Monograph Rule */}
          <div className="w-24 h-[1px] bg-[#c9a45c]/40 mt-8" />
        </div>
      </section>

      {/* 01. TƏMİR (Ivory Pane / Text Right) */}
      <section className="w-full bg-[#f1e0cf] text-[#0e0e10] py-20 px-4 md:px-8 border-b border-[#221a10]/10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Media Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-2 bg-[#0e0e10]/5 shadow-xl">
              <img
                className="w-full aspect-[4/3] object-cover"
                alt="Kapital və Kosmetik Təmir"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrTXYY0F4Xd9JOe3xGDqCQpnCDqLaG5tMlhHHt_M2i3JTMjKl-Ap1ddoNnXwYs5fBzBHEGdheD8YH68A_sxqbCYp9ohz4Q53Pg73ERu130yqqqm5Bl2YdqNeEGQrT723NAgBjOsyPajiszvBvJhUPSWeoh-GMZaeRQRPo6p-epDZXYY_6cg58OiC8bZiDOzya2Byw-283iwyleseFd5Pd3-nICJgphrP22vtEsU0yjk7rAsWu-oM_7tQ"
              />
              <div className="absolute bottom-4 left-4 bg-[#0e0e10]/90 px-3 py-1.5 text-[#e5e1e4] font-label-caps text-[10px] tracking-widest uppercase font-semibold">
                Açar Təslim Layihə № 108
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-headline-xl text-5xl text-[#c9a45c] font-light">01</span>
              <span className="font-label-caps text-[11px] tracking-[0.25em] text-[#473c31] uppercase font-semibold">
                KAPİTAL VƏ KOSMETİK TƏMİR
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#0e0e10] mb-1 font-normal">
              Təmir
            </h2>
            <p className="font-label-editorial text-[15px] text-[#473c31] italic mb-3">
              Mənzil, villa və kommersiya obyektləri
            </p>
            <p className="font-body-md text-sm md:text-base text-[#353437] mb-6 leading-relaxed">
              Məkanın memarlıq layihəsinə uyğun olaraq, ən incə detallara qədər düşünülmüş açar təslim təmir işləri. Avropa standartlarına cavab verən materiallar və peşəkar mühəndis nəzarəti ilə icra olunur.
            </p>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Açar təslim mənzil və rezidensiya təmiri
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Yüksək dəqiqlikli akustik və mühəndislik izolyasiyası
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Premium santexnika və gizli qapı/plintus quraşdırılması
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  5 il rəsmi hüquqi zəmanət və müəllif nəzarəti
                </span>
              </li>
            </ul>
            <div>
              <button
                onClick={() => onNavigate('paketler')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0e0e10] text-[#e8c176] hover:bg-[#c9a45c] hover:text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-bold"
                type="button"
              >
                <span>Paketlərə bax</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 02. TİKİNTİ (Deep Black / Text Left) */}
      <section className="w-full bg-[#0e0e10] text-[#e5e1e4] py-20 px-4 md:px-8 border-b border-[#4e4639]/30">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pr-6 order-2 lg:order-1">
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-headline-xl text-5xl text-[#e8c176] font-light">02</span>
              <span className="font-label-caps text-[11px] tracking-[0.25em] text-[#b6a798] uppercase font-semibold">
                MONOLİT VƏ ƏSASLI İNŞAAT
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e5e1e4] mb-1 font-normal">
              Tikinti
            </h2>
            <p className="font-label-editorial text-[15px] text-[#b6a798] italic mb-3">
              Fərdi villa, malikanə və komplekslər
            </p>
            <p className="font-body-md text-sm md:text-base text-[#d1c5b4] mb-6 leading-relaxed">
              Sıfırdan təməlqoyma, monolit karkas və tam mühəndislik infrastrukturu daxil olmaqla fərdi tikinti layihələri. Geodeziya təhlilindən son dam örtüyünə qədər dəqiq hesablanmış proses.
            </p>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#d1c5b4]">
                  Geoloji analiz və seysmik dayanıqlı monolit tikinti
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#d1c5b4]">
                  Enerji effektiv fasad və izolyasiya sistemləri
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#d1c5b4]">
                  Həftəlik foto/video hesabat və laborator sınaqlar
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#d1c5b4]">
                  Şəffaf və dəyişməz baş smeta təsdiqi
                </span>
              </li>
            </ul>
            <div>
              <button
                onClick={() => onNavigate('elaqe')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2a2a2c] text-[#e8c176] hover:bg-[#c9a45c] hover:text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-bold"
                type="button"
              >
                <span>Fərdi təklif al</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Media Column */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative p-2 bg-[#2a2a2c]/40 shadow-xl border border-[#4e4639]/30">
              <img
                className="w-full aspect-[4/3] object-cover"
                alt="Monolit və Əsaslı Tikinti"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5H3_L409e4ymHR5eR_j1h_Oz_9-WmmplIryZGmCz90MPn-K3sxQXviH9rVXzk4zAatgYBV2h7jHL5i2_a-6kI0ub6EWz6SEvt8L__yZZhfOpaONrwOszjEuzW-X6ud9ndvROQLysW3tufoFY85DSq1WSvL9kiDKpMNiBAQoMANbsN8Pwk82hGfx-J5-Mfp6P5vtR30qVEDZpP4ok0rRQ82B93ExAPdw2dGRpEMA8r8CO5doegKUu87Q"
              />
              <div className="absolute bottom-4 right-4 bg-[#0e0e10]/90 px-3 py-1.5 text-[#d4c4b4] font-label-caps text-[10px] tracking-widest uppercase font-semibold">
                Mərdəkan • 920 m²
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. İNTERYER DİZAYN (Ivory Pane / Text Right) */}
      <section className="w-full bg-[#f1e0cf] text-[#0e0e10] py-20 px-4 md:px-8 border-b border-[#221a10]/10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Media Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-2 bg-[#0e0e10]/5 shadow-xl">
              <img
                className="w-full aspect-[4/3] object-cover"
                alt="İnteryer Dizayn və 3D Konsept"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5j4dPN77pognvYF6jzTm8JNX5hEPZ18bFv-BxccAa4p28-j5OppnoXuaCcmP5P2dE9AsFOj9QwigfkX2Qj5PnNeqOZBicXOULYj0xYXXO5JotIhWBVsZqFpeRdtnyOWCQ2CfyAsV9qcPfyKDsK-O8vg-y0K4Pa6zOuqVkyPsYyEIf7wNrapgIX0qyPNUJXOHxK0l-RkU9mjRjdQ-KW9rlL3CEuGjo90FSmBOiAvlHvfhborzul_H4Vg"
              />
              <div className="absolute bottom-4 left-4 bg-[#0e0e10]/90 px-3 py-1.5 text-[#e5e1e4] font-label-caps text-[10px] tracking-widest uppercase font-semibold">
                3D Konsept & VR
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-headline-xl text-5xl text-[#c9a45c] font-light">03</span>
              <span className="font-label-caps text-[11px] tracking-[0.25em] text-[#473c31] uppercase font-semibold">
                MEMARLIQ VƏ ESTETİKA
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#0e0e10] mb-1 font-normal">
              İnteryer dizayn
            </h2>
            <p className="font-label-editorial text-[15px] text-[#473c31] italic mb-3">
              3D layihə və material seçimi
            </p>
            <p className="font-body-md text-sm md:text-base text-[#353437] mb-6 leading-relaxed">
              Məkanın fərdi xarakterini və funksionallığını üzə çıxaran unikal konseptual dizayn. Avropanın aparıcı brendlərindən birbaşa material təchizatı və vizuallaşdırma.
            </p>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Fotorealistik 3D vizuallaşdırma və VR tur
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Tam işçi cizgilər (elektrik, santexnika, tavan planı)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  İtaliya və İspaniya materiallarının fərdi spesifikasiyası
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Müəllif nəzarəti və sahədə birbaşa müşayiət
                </span>
              </li>
            </ul>
            <div>
              <button
                onClick={() => onNavigate('layiheler')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0e0e10] text-[#e8c176] hover:bg-[#c9a45c] hover:text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-bold"
                type="button"
              >
                <span>Portfelə bax</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 04. MEBEL (Deep Black / Text Left) */}
      <section className="w-full bg-[#0e0e10] text-[#e5e1e4] py-20 px-4 md:px-8 border-b border-[#4e4639]/30">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pr-6 order-2 lg:order-1">
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-headline-xl text-5xl text-[#e8c176] font-light">04</span>
              <span className="font-label-caps text-[11px] tracking-[0.25em] text-[#b6a798] uppercase font-semibold">
                ÖZƏL ATELYE VƏ İSTEHSAL
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e5e1e4] mb-1 font-normal">
              Mebel
            </h2>
            <p className="font-label-editorial text-[15px] text-[#b6a798] italic mb-3">
              Xüsusi ölçü və fərdi dizaynla
            </p>
            <p className="font-body-md text-sm md:text-base text-[#d1c5b4] mb-6 leading-relaxed">
              İtaliya və Avstriya mexanizmləri, təbii ağac kaplama və daş səthlərlə zənginləşdirilmiş xüsusi mebel istehsalı. İnteryerinizlə tam harmoniyada olan erqonomik həllər.
            </p>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#d1c5b4]">
                  Mətbəx, qarderob və vanna mebellərinin fərdi istehsalı
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#d1c5b4]">
                  Blum və Grass furniturları ilə səssiz mexanizmlər
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#d1c5b4]">
                  Təbii mərmər, kvars və qoz ağacı detallar
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#e8c176] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#d1c5b4]">
                  Quraşdırma və post-təhvil servis təminatı
                </span>
              </li>
            </ul>
            <div>
              <button
                onClick={() => onNavigate('elaqe')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2a2a2c] text-[#e8c176] hover:bg-[#c9a45c] hover:text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-bold"
                type="button"
              >
                <span>Mebel atelyesi</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Media Column */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative p-2 bg-[#2a2a2c]/40 shadow-xl border border-[#4e4639]/30">
              <img
                className="w-full aspect-[4/3] object-cover"
                alt="Özəl mebel atelyesi"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlqrSo-EZCgk6TpL0qNQZj94WZ5yk-Z9CJLrDrnsEjSdmD0Zr19ZIVy-XyCNss0JeVq2bRW2VTpOFVBMfcvanW9-Y79ZZuu-gPU73QfrcySoAYTJGXUR8bKCkEMLfPJiwVqFCg62hljPhUuOS1WSlt0viW65UBwW5RnxqPrO3MV3dFu4J8Q8PQXa_HKiPWHA8YwNoIWrgnVRmD8rdthM60iCnhRM0tVbFZ1aMr4CR1ibkTSwr7ScRQFg"
              />
              <div className="absolute bottom-4 right-4 bg-[#0e0e10]/90 px-3 py-1.5 text-[#d4c4b4] font-label-caps text-[10px] tracking-widest uppercase font-semibold">
                Özəl İstehsalat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. EXTERİOR (Ivory Pane / Text Right) */}
      <section className="w-full bg-[#f1e0cf] text-[#0e0e10] py-20 px-4 md:px-8 border-b border-[#221a10]/10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Media Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-2 bg-[#0e0e10]/5 shadow-xl">
              <img
                className="w-full aspect-[4/3] object-cover"
                alt="Memarlıq Fasadi və Landşaft"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX3bCbGriJMROI0VgCqBb7f8xcSILHHYNfr4s-lkAlH71faltkGuVcJwbRe4B6Kty4gnCLrDpGecgUGiYoTYROvStpBB7cUzsf0Jpp6t2bWkuSg5jDB71gByW26QpQUOxXUTpHkMETZV9qmEk0OFGsFN9jCkYk2DwbSaLSua_fF9P_-ou66rOoT47HEn7zdIvQosXbfb-DrLGnpQrmMOFupUJMmDr_ZTt4MCvg0R-oyLtqO-JrFyb6tw"
              />
              <div className="absolute bottom-4 left-4 bg-[#0e0e10]/90 px-3 py-1.5 text-[#e5e1e4] font-label-caps text-[10px] tracking-widest uppercase font-semibold">
                Fasad & Landşaft
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-headline-xl text-5xl text-[#c9a45c] font-light">05</span>
              <span className="font-label-caps text-[11px] tracking-[0.25em] text-[#473c31] uppercase font-semibold">
                MEMARLIQ FASADI VƏ LANDŞAFT
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#0e0e10] mb-1 font-normal">
              Exterior
            </h2>
            <p className="font-label-editorial text-[15px] text-[#473c31] italic mb-3">
              Fasad və həyət dizaynı
            </p>
            <p className="font-body-md text-sm md:text-base text-[#353437] mb-6 leading-relaxed">
              Müasir memarlıq fasadlarının layihələndirilməsi, təbii aqlay, travertin və ventilyasiya olunan fasad sistemlərinin quraşdırılması. Həyətyanı sahənin landşaft və hovuz dizaynı.
            </p>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Ventilyasiya olunan və təbii daş fasad örtükləri
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Landşaft dizaynı, avtomatik suvarma və hovuz quraşdırılması
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Fasadın arxitektur işıqlandırma ssenarisi
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#c9a45c] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-body-md text-sm md:text-base text-[#201f21]">
                  Xarici iqlim təsirlərinə qarşı yüksək müqavimətli materiallar
                </span>
              </li>
            </ul>
            <div>
              <button
                onClick={() => onNavigate('layiheler')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0e0e10] text-[#e8c176] hover:bg-[#c9a45c] hover:text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-bold"
                type="button"
              >
                <span>Layihələrlə tanış ol</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAND */}
      <section className="w-full bg-[#2a2a2c] py-20 px-4 md:px-8">
        <div className="max-w-[1040px] mx-auto bg-[#1b1b1d] border border-[#4e4639]/40 p-8 md:p-14 text-center flex flex-col items-center">
          <span className="font-label-caps text-[11px] tracking-[0.25em] text-[#e8c176] mb-3 uppercase font-semibold">
            FƏRDİ MƏSLƏHƏT VƏ DƏYƏRLƏNDİRMƏ
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e5e1e4] mb-3 font-normal">
            Hansı xidmət sizə uyğundur?
          </h2>
          <p className="font-body-lg text-base md:text-lg text-[#d1c5b4] max-w-xl font-light mb-8 leading-relaxed">
            Mütəxəssislərimiz obyektinizə baxış keçirərək ehtiyaclarınıza uyğun ən optimal həlli və smetanı təqdim etsinlər.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
            <button
              onClick={() => onNavigate('elaqe')}
              className="px-8 py-3.5 bg-[#c9a45c] hover:bg-[#e8c176] text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-bold shadow-md"
              type="button"
            >
              Bizimlə əlaqə
            </button>
            <a
              className="text-[#d1c5b4] hover:text-[#e8c176] font-body-md text-base tracking-wider transition-colors flex items-center gap-2 border border-[#4e4639]/50 px-6 py-3"
              href="tel:+994505300369"
            >
              <span className="material-symbols-outlined text-[20px] text-[#e8c176]">phone</span>
              <span>+994 50 530 03 69</span>
            </a>
          </div>

          <div className="w-12 h-[1px] bg-[#4e4639]/30 mb-3" />
          <p className="font-caption text-xs text-[#b6a798] tracking-wider">
            Çinar Plaza, Heydər Əliyev pr. 152, Bakı, Azərbaycan
          </p>
        </div>
      </section>
    </div>
  );
};
