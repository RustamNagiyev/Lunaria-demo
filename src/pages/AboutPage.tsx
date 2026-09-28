import React from 'react';
import { NavPage } from '../types.ts';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. PAGE HEADER (Dark Charcoal Background) */}
      <section className="relative w-full bg-[#0e0e10] text-[#e5e1e4] py-20 overflow-hidden border-b border-[#4e4639]/30">
        {/* Subtle Architectural Background Watermark / Geometry */}
        <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
          <svg
            className="w-[840px] h-[840px] text-[#4e4639]/50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.35"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="48" strokeDasharray="1 3" />
            <circle cx="50" cy="50" r="32" strokeDasharray="0.5 2" />
            <line x1="50" x2="50" y1="2" y2="98" />
            <line x1="2" x2="98" y1="50" y2="50" />
            <polygon points="50,15 85,50 50,85 15,50" />
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 md:px-8 relative z-10 flex flex-col items-start">
          {/* Breadcrumb & Philosophy Label Row */}
          <div className="w-full flex flex-wrap items-center justify-between gap-y-3 pb-3 mb-6 border-b border-[#4e4639]/20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-label-caps text-xs tracking-[0.25em] text-[#d1c5b4] uppercase">
              <button
                onClick={() => onNavigate('ana-sehife')}
                className="hover:text-[#e8c176] transition-colors"
                type="button"
              >
                Ana səhifə
              </button>
              <span className="text-[#c9a45c] text-[9px]">•</span>
              <span className="text-[#e8c176] font-semibold">Haqqımızda</span>
            </nav>

            {/* Small Gold Label with Diamond Bullets */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#c9a45c]" />
              <span className="font-label-caps text-xs text-[#e8c176] tracking-[0.3em] uppercase font-semibold">
                Fəlsəfə və Dəyərlərimiz
              </span>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#c9a45c]" />
            </div>
          </div>

          {/* Grand Editorial Serif Title */}
          <div className="max-w-4xl">
            <h1 className="font-display-hero text-4xl sm:text-6xl md:text-[84px] md:leading-[92px] text-[#e5e1e4] leading-tight tracking-tight mb-4 font-normal">
              Haqqımızda
            </h1>
            <p className="font-body-xl text-lg md:text-xl text-[#d1c5b4] max-w-2xl font-light leading-relaxed">
              Bakıda və regionda lüks yaşayış və kommersiya məkanlarının memarlıq, təmir və interyer dizaynı üzrə etibarlı tərəfdaşınız.
            </p>
          </div>

          {/* Architectural Monograph Metadata Band */}
          <div className="w-full mt-10 pt-4 border-t border-[#4e4639]/30 flex flex-wrap items-center justify-between gap-4 text-[#b6a798] font-caption text-xs tracking-[0.15em] uppercase">
            <div className="flex items-center gap-6">
              <span>Büro: Heydər Əliyev pr. 152</span>
              <span className="hidden sm:inline text-[#4e4639]">•</span>
              <span>Dərəcə: Lüks İnteryer & Memarlıq</span>
            </div>
            <div className="font-label-editorial text-[14px] text-[#dec486] italic lowercase tracking-normal">
              nəfis təfsilatlar, mühəndislik intizamı
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER & STORY SECTION (Dual-Pane Ivory / Warm Monograph Plate) */}
      <section className="w-full bg-[#ede8df] text-[#131315] py-20 border-b border-[#221a10]/10">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-md bg-[#131315] p-3 shadow-2xl border border-[#4e4639]/30">
                <div className="relative overflow-hidden bg-[#201f21] aspect-[4/5] w-full">
                  <img
                    className="w-full h-full object-cover grayscale contrast-[1.08] hover:scale-[1.02] transition-transform duration-700 ease-out"
                    alt="Solmaz Əhmədova"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCShlZZOsHLDYVttgOd6HyVLunAEJrVBG1K1jYG7Tx4OnizNeU6sNhU_HwXiHV_wKLIZvWN7SvTRRtcvScJp6Zi1z55EvcRa204vRYF9saalcWRVt-TbGXFwnK9tjW1pesD7HagMApLm0ZnFaxYOJZle8hh9-g9F5LwwjYp1YCjr1-WPAD7RMOJot__PN7j0kGd4sj-IXp4dX0tikix0pL3586yCMqERIt4-lwo2vSgS4e-RYZsBeYaXw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 font-label-caps text-[10px] text-[#ede8df] tracking-[0.25em] uppercase bg-[#131315]/80 px-2 py-1 font-semibold">
                    Portret • 2026
                  </div>
                </div>

                <div className="mt-3 pt-3 px-2 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-lg md:text-xl text-[#e5e1e4] tracking-wide font-normal">
                      Solmaz Əhmədova
                    </span>
                    <span className="font-label-caps text-[10px] text-[#c9a45c] tracking-widest uppercase font-semibold">
                      Mühəndis-Arxitektor
                    </span>
                  </div>
                  <p className="font-label-editorial text-[14px] text-[#b6a798] italic mt-1">
                    Təsisçi & Baş Memar (2 ali təhsilli mühəndis-arxitektor)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Text & Monograph Letter */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#594715]" />
                <span className="font-label-caps text-[11px] text-[#594715] tracking-[0.28em] uppercase font-bold">
                  Təsisçidən Məktub
                </span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl text-[#131315] leading-tight mb-6 font-normal">
                Hər detalda keyfiyyət və dəqiqlik
              </h2>
              <div className="space-y-4 text-[#2a2a2c] font-body-lg text-base md:text-lg leading-relaxed">
                <p>
                  LUNARIA sadəcə təmir və tikinti şirkəti deyil; hər bir sakinin həyat tərzinə, estetik duyumuna və gündəlik rahatlığına xidmət edən məkanların müəllifidir. 10 ildən artıq peşəkar fəaliyyətimiz dövründə biz memarlıq kompromislərindən imtina edərək, hər layihədə mühəndislik dəqiqliyini və yüksək sənətkarlığı prioritet seçdik.
                </p>
                <p>
                  Port Baku, Sea Breeze və Bakının ən nüfuzlu rezidensiyalarında imza atdığımız mənzil, villa və kommersiya obyektləri bizim dəyişməz fəlsəfəmizi əks etdirir: şəffaf smeta, premium materiallar və vaxtında qüsursuz açar təslim icra.
                </p>
              </div>

              {/* Metric Strip */}
              <div className="grid grid-cols-2 gap-6 my-6 py-4 bg-[#e3ddd2]/60 px-6 border border-[#221a10]/10">
                <div>
                  <div className="font-display-hero text-3xl md:text-4xl text-[#594715] leading-none mb-1 font-normal">
                    10+
                  </div>
                  <div className="font-label-caps text-[11px] text-[#473c31] tracking-wider uppercase font-semibold">
                    İl Mühəndislik Təcrübəsi
                  </div>
                </div>
                <div>
                  <div className="font-display-hero text-3xl md:text-4xl text-[#594715] leading-none mb-1 font-normal">
                    100%
                  </div>
                  <div className="font-label-caps text-[11px] text-[#473c31] tracking-wider uppercase font-semibold">
                    Şəffaf Müqavilə və İcra
                  </div>
                </div>
              </div>

              {/* Founder Signature Block */}
              <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                <div className="flex flex-col">
                  {/* Stylized Editorial SVG Calligraphy */}
                  <svg
                    className="w-48 h-12 text-[#594715]"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.4"
                    viewBox="0 0 200 50"
                  >
                    <path d="M10,38 C25,10 38,8 45,28 C52,48 60,15 75,20 C90,25 95,42 110,30 C125,18 135,32 150,22 C165,12 175,28 190,18" />
                    <path d="M35,32 C60,35 120,28 170,26" strokeDasharray="2 3" />
                  </svg>
                  <span className="font-headline-sm text-lg text-[#131315] mt-1 font-medium">
                    Solmaz Əhmədova
                  </span>
                  <span className="font-label-caps text-[10px] text-[#504539] tracking-[0.2em] uppercase font-semibold">
                    Təsisçi & Baş Memar
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-label-caps text-[11px] text-[#775a19] block tracking-[0.2em] uppercase font-bold">
                    Bakı Memarlıq Atelyesi
                  </span>
                  <span className="font-caption text-xs text-[#504539]">
                    Lunaria MMC • Qeydiyyat № 2014-AZ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION (Dark Bedrock Charcoal #0E0E10) */}
      <section className="w-full bg-[#0e0e10] text-[#e5e1e4] py-20 relative border-b border-[#4e4639]/30">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rotate-45 bg-[#c9a45c]" />
                <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.3em] uppercase font-semibold">
                  Prinsiplərimiz
                </span>
              </div>
              <h2 className="font-headline-xl text-3xl md:text-5xl text-[#e5e1e4] font-normal">
                Əsas Dəyərlərimiz
              </h2>
            </div>
            <p className="font-body-md text-sm md:text-base text-[#d1c5b4] max-w-md leading-relaxed">
              Hər addımımızda dürüstlük, sənətkarlıq və müştəri məmnuniyyəti dayanır. Memarlıqda təsadüflərə yer yoxdur.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Keyfiyyət və Mühəndislik */}
            <div className="bg-[#201f21] border border-[#4e4639]/30 p-8 flex flex-col justify-between group hover:bg-[#2a2a2c] transition-colors duration-300">
              <div>
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#1b1b1d] border border-[#4e4639]/30 text-[#c9a45c] group-hover:text-[#e8c176] transition-colors">
                  <span className="material-symbols-outlined text-[28px]">verified</span>
                </div>
                <div className="font-label-caps text-[10px] text-[#b6a798] tracking-[0.2em] uppercase mb-2 font-semibold">
                  01 • Mühəndislik İntizamı
                </div>
                <h3 className="font-headline-md text-2xl text-[#e5e1e4] mb-3 font-normal">
                  Keyfiyyət və Mühəndislik
                </h3>
                <p className="font-body-md text-sm text-[#d1c5b4] leading-relaxed">
                  Avropanın aparıcı standartlarına cavab verən materiallar, Almaniya mühəndislik həlləri və hər bir santimetrdə qüsursuz işləmə. Konstruktiv dəqiqlik bizim təməl prinsipimizdir.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#4e4639]/30 flex items-center justify-between text-[#d4c4b4] font-caption text-xs">
                <span>DIN & EN Standartları</span>
                <span className="material-symbols-outlined text-[16px] text-[#e8c176]">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 2: Şəffaflıq və Dürüstlük */}
            <div className="bg-[#201f21] border border-[#4e4639]/30 p-8 flex flex-col justify-between group hover:bg-[#2a2a2c] transition-colors duration-300">
              <div>
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#1b1b1d] border border-[#4e4639]/30 text-[#c9a45c] group-hover:text-[#e8c176] transition-colors">
                  <span className="material-symbols-outlined text-[28px]">account_balance</span>
                </div>
                <div className="font-label-caps text-[10px] text-[#b6a798] tracking-[0.2em] uppercase mb-2 font-semibold">
                  02 • Maliyyə Etibarlılığı
                </div>
                <h3 className="font-headline-md text-2xl text-[#e5e1e4] mb-3 font-normal">
                  Şəffaflıq və Dürüstlük
                </h3>
                <p className="font-body-md text-sm text-[#d1c5b4] leading-relaxed">
                  Gizli xərclər yoxdur. İş başlamazdan öncə təsdiqlənən dəqiq baş smeta və müqavilə şərtlərinin tam təminatı. Hər bir manatın təyinatı sənədləşdirilir və əsaslandırılır.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#4e4639]/30 flex items-center justify-between text-[#d4c4b4] font-caption text-xs">
                <span>Dəqiq Baş Smeta</span>
                <span className="material-symbols-outlined text-[16px] text-[#e8c176]">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 3: Vaxtında Təhvil */}
            <div className="bg-[#201f21] border border-[#4e4639]/30 p-8 flex flex-col justify-between group hover:bg-[#2a2a2c] transition-colors duration-300">
              <div>
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#1b1b1d] border border-[#4e4639]/30 text-[#c9a45c] group-hover:text-[#e8c176] transition-colors">
                  <span className="material-symbols-outlined text-[28px]">schedule</span>
                </div>
                <div className="font-label-caps text-[10px] text-[#b6a798] tracking-[0.2em] uppercase mb-2 font-semibold">
                  03 • Qrafik İntizamı
                </div>
                <h3 className="font-headline-md text-2xl text-[#e5e1e4] mb-3 font-normal">
                  Vaxtında Təhvil
                </h3>
                <p className="font-body-md text-sm text-[#d1c5b4] leading-relaxed">
                  Günün dəqiqliyi ilə hazırlanmış iş qrafiki, həftəlik foto/video hesabatlar və gecikməsiz açar təslim təhvil. Hər mərhələ məsul mühəndis tərəfindən aktlaşdırılır.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#4e4639]/30 flex items-center justify-between text-[#d4c4b4] font-caption text-xs">
                <span>Həftəlik Şəxsi Hesabat</span>
                <span className="material-symbols-outlined text-[16px] text-[#e8c176]">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM & PROCESS IMAGE STRIP (Ivory Monograph Plate) */}
      <section className="w-full bg-[#ede8df] text-[#131315] py-20 border-b border-[#221a10]/10">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          {/* Header Strip */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#594715]" />
                <span className="font-label-caps text-[11px] text-[#594715] tracking-[0.25em] uppercase font-bold">
                  Komanda və Sahədə İş
                </span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl text-[#131315] font-normal leading-tight">
                Meydanda və Emalatxanada
              </h2>
            </div>
            <p className="font-body-md text-sm md:text-base text-[#473c31] max-w-md leading-relaxed">
              LUNARIA brend loqolu geyimdə çalışan peşəkar mühəndis, usta və dizayner heyəti layihənin hər mərhələsini şəxsi məsuliyyətlə icra edir.
            </p>
          </div>

          {/* 4 Photographic Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#131315] text-[#ede8df] flex flex-col group overflow-hidden shadow-lg border border-[#4e4639]/30">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#201f21]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Mühəndis nəzarəti və lazer ölçü"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHR6WWJUCr5qlzLS2q3eFDZex7fkcQq_GYBrOT9J9T4vWnzVyuggumkLoaVSFmxPXnmeZjnUJnzq0lJTKcf_LD7BIkI92wbITXv8fre0NuihA7bhzrYSF_3-UVvzWSJG6YJeOTcnq9CBkBeCxav8fnfteHPBfnb3q5XQYqMmxdkcTNojKYkZIVyEzNFpNdLt76PNs4I1SiZQa2l3HyNpDTNnxeMw14pjEEsh02hpjqxJCz5cBzUGig0A"
                />
                <div className="absolute top-3 left-3 bg-[#131315]/80 px-2 py-1 font-label-caps text-[10px] text-[#e8c176] tracking-widest uppercase font-semibold">
                  01 • Sahə Nəzarəti
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-headline-sm text-lg text-[#e5e1e4] mb-1 font-normal">
                    Mühəndis nəzarəti və lazer ölçü
                  </h4>
                  <p className="font-caption text-xs text-[#b6a798] leading-relaxed">
                    Lazer skanerlərlə milimetrik koordinat yoxlanışı və memarlıq cizgilərinin təftişi.
                  </p>
                </div>
                <div className="mt-4 pt-2 text-[#dec486] font-label-caps text-[10px] tracking-wider uppercase border-t border-[#4e4639]/30 font-semibold">
                  Standart: DIN 18202
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#131315] text-[#ede8df] flex flex-col group overflow-hidden shadow-lg border border-[#4e4639]/30">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#201f21]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Təbii daş və mərmər montajı"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlXlzIps_pnwJMHuLOpGVogOfHl7fVkyqTugdkdygaNjple1zLWYcMU3F-BWjBnkqSk29P3XgnEWMHqR8O-LqQC5bZBAb6-UYChsbz9Z3Ju1sEZowgR9JEAqUXQ9Q1alqeRwdgMIuorGK6k7P1h7_kPNaAFmbr-NGwm4artgbwyCjkyoGUFM7FFIIibhnCjLuX6gWvunlyYYWipQpERg6ulFtr_o1wNmyHgV2lN9DBpq5dV3DXIDOj1w"
                />
                <div className="absolute top-3 left-3 bg-[#131315]/80 px-2 py-1 font-label-caps text-[10px] text-[#e8c176] tracking-widest uppercase font-semibold">
                  02 • Sənətkarlıq
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-headline-sm text-lg text-[#e5e1e4] mb-1 font-normal">
                    Təbii daş və mərmər montajı
                  </h4>
                  <p className="font-caption text-xs text-[#b6a798] leading-relaxed">
                    İtaliya və İspaniya daş karxanalarından seçilmiş mərmərlərin fərdi qovuşma tətbiqi.
                  </p>
                </div>
                <div className="mt-4 pt-2 text-[#dec486] font-label-caps text-[10px] tracking-wider uppercase border-t border-[#4e4639]/30 font-semibold">
                  Bookmatched Calacatta
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#131315] text-[#ede8df] flex flex-col group overflow-hidden shadow-lg border border-[#4e4639]/30">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#201f21]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Fərdi mebel atelyesi"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOR_LpqBs_3R3P5duyljPU5kR9Eab1hi5WnXehYAkCQbkAa6aWlweZGqirGQ2hqH8ClcMNNtM76954N7Tn1kSAveCmO_c05YrEV7ZO9K_A9zrSpOxt16gN08DxrYZ-tVYv9uremNWozso1Cl9C0xoM76EKGifN3EEfceY9El0eFoCvLKd9q6tOX8_8ELHYSWJArtoVp2iE1k5q07x_ukKuja0rfAnipKKnu7MBcCdPCIBNBPle3ajo2A"
                />
                <div className="absolute top-3 left-3 bg-[#131315]/80 px-2 py-1 font-label-caps text-[10px] text-[#e8c176] tracking-widest uppercase font-semibold">
                  03 • Fərdi İstehsal
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-headline-sm text-lg text-[#e5e1e4] mb-1 font-normal">
                    Fərdi mebel atelyesi
                  </h4>
                  <p className="font-caption text-xs text-[#b6a798] leading-relaxed">
                    İtalyan mexanizmləri və xüsusi ağac növləri ilə mebel konstruksiyalarının yığılması.
                  </p>
                </div>
                <div className="mt-4 pt-2 text-[#dec486] font-label-caps text-[10px] tracking-wider uppercase border-t border-[#4e4639]/30 font-semibold">
                  Blum & Grass Mexanizmləri
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#131315] text-[#ede8df] flex flex-col group overflow-hidden shadow-lg border border-[#4e4639]/30">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#201f21]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Material seçimi və vizuallaşdırma"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAASc-BU02fgFQTp2lIaMddtxcdeWTFzsYIebiXXQya5U6dB5P4uK6b0DEiv_jY-cPUd16UcQJOCRJikE0T220dxsIxCwYVigAmTjbUx7Td9UYRTSeXvUyElIvX8rGqbD7pQq49ku13hnCFQjiEXZvD5DzLvsiB-YbX641nU65Lex9CzSm1JcywSHMn-rMsniNdH1UvGCOIJoJQmbZsS1qy7gsCZWS-5yEDLeLt47WFngjMMqsl5H2u8A"
                />
                <div className="absolute top-3 left-3 bg-[#131315]/80 px-2 py-1 font-label-caps text-[10px] text-[#e8c176] tracking-widest uppercase font-semibold">
                  04 • Kurasiya
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-headline-sm text-lg text-[#e5e1e4] mb-1 font-normal">
                    Material seçimi və vizuallaşdırma
                  </h4>
                  <p className="font-caption text-xs text-[#b6a798] leading-relaxed">
                    Toxunma duyğusu, işıq sınaqları və 3D fotorealist layihələndirmə konsultasiyası.
                  </p>
                </div>
                <div className="mt-4 pt-2 text-[#dec486] font-label-caps text-[10px] tracking-wider uppercase border-t border-[#4e4639]/30 font-semibold">
                  Taktil Moodboard Sessiyası
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATES & GUARANTEE STRIP (Dark Band) */}
      <section className="w-full bg-[#0e0e10] text-[#e5e1e4] py-14 border-b border-[#4e4639]/30">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
            <div className="flex flex-col items-center text-center px-4">
              <span className="material-symbols-outlined text-[28px] text-[#e8c176] mb-2">
                description
              </span>
              <span className="font-headline-sm text-xl text-[#e5e1e4] mb-1 font-normal">
                Hüquqi Təminat
              </span>
              <span className="font-label-caps text-[10px] text-[#d1c5b4] tracking-[0.18em] uppercase font-semibold">
                Rəsmi Müqavilə və Sənədləşmə
              </span>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <span className="material-symbols-outlined text-[28px] text-[#e8c176] mb-2">
                security
              </span>
              <span className="font-headline-sm text-xl text-[#e5e1e4] mb-1 font-normal">
                5 İl Zəmanət
              </span>
              <span className="font-label-caps text-[10px] text-[#d1c5b4] tracking-[0.18em] uppercase font-semibold">
                Bütün Konstruktiv İşlərə
              </span>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <span className="material-symbols-outlined text-[28px] text-[#e8c176] mb-2">
                history_edu
              </span>
              <span className="font-headline-sm text-xl text-[#e5e1e4] mb-1 font-normal">
                10+ İl Təcrübə
              </span>
              <span className="font-label-caps text-[10px] text-[#d1c5b4] tracking-[0.18em] uppercase font-semibold">
                Sınaqdan Keçmiş Mühəndislik
              </span>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <span className="material-symbols-outlined text-[28px] text-[#e8c176] mb-2">
                apartment
              </span>
              <span className="font-headline-sm text-xl text-[#e5e1e4] mb-1 font-normal">
                100+ Layihə
              </span>
              <span className="font-label-caps text-[10px] text-[#d1c5b4] tracking-[0.18em] uppercase font-semibold">
                Uğurla Tamamlanmış Portfel
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="w-full bg-[#1b1b1d] py-20 relative">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <div className="bg-[#201f21] border border-[#4e4639]/40 p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#e8c176]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl flex flex-col items-start z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rotate-45 bg-[#e8c176]" />
                <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.3em] uppercase font-semibold">
                  Görüş Təyin Edin
                </span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl text-[#e5e1e4] font-normal mb-3 leading-tight">
                Birlikdə işləyək
              </h2>
              <p className="font-body-xl text-base md:text-xl text-[#d1c5b4] font-light leading-relaxed max-w-xl">
                Gələcək mənziliniz və ya layihəniz haqqında komandamızla bir fincan qəhvə arxasında fikir mübadiləsi aparaq. Məkanınızın memarlıq potensialını birlikdə kəşf edək.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto z-10">
              <button
                onClick={() => onNavigate('elaqe')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#e8c176] text-[#412d00] font-label-caps text-[11px] tracking-[0.22em] uppercase font-bold hover:bg-[#ffdea4] transition-colors duration-300 shadow-md"
                type="button"
              >
                <span>Əlaqə saxlayın</span>
                <span className="material-symbols-outlined text-[18px] ml-2">east</span>
              </button>
              <button
                onClick={() => onNavigate('paketler')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#2a2a2c] text-[#e5e1e4] font-label-caps text-[11px] tracking-[0.22em] uppercase hover:bg-[#353437] hover:text-[#e8c176] transition-colors duration-300 border border-[#4e4639]/40 font-semibold"
                type="button"
              >
                <span>Paketlərə bax</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
