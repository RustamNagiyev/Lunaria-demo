import React, { useState } from 'react';
import { NavPage } from '../types.ts';

interface ContactPageProps {
  onNavigate: (page: NavPage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [serviceType, setServiceType] = useState('Interyer');
  const [spatialArea, setSpatialArea] = useState('');
  const [propertyType, setPropertyType] = useState('menzil');
  const [clientNote, setClientNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setClientName('');
    setClientPhone('');
    setServiceType('Interyer');
    setSpatialArea('');
    setPropertyType('menzil');
    setClientNote('');
    setSubmitted(false);
  };

  const getServiceName = (val: string) => {
    switch (val) {
      case 'Temir':
        return 'Təmir (Açar təhvili icraat)';
      case 'Tikinti':
        return 'Fərdi Tikinti & Monolit İnşaat';
      case 'Interyer':
        return 'İnteryer Dizayn & Layihələndirmə';
      case 'Mebel':
        return 'Bespoke Mebel & Xüsusi İstehsal';
      case 'Exterior':
        return 'Eksteryer & Fasad Memarlığı';
      default:
        return val;
    }
  };

  const getPropertyTypeName = (val: string) => {
    if (val === 'villa') return 'Villa';
    if (val === 'kommersiya') return 'Kommersiya';
    return 'Mənzil';
  };

  return (
    <div className="flex flex-col w-full">
      {/* BREADCRUMB & EDITORIAL HERO STRATUM */}
      <section className="w-full relative px-4 md:px-8 pt-12 pb-10 max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 font-caption text-xs text-[#b6a798] uppercase tracking-[0.2em]">
            <button
              onClick={() => onNavigate('ana-sehife')}
              className="hover:text-[#e8c176] transition-colors"
              type="button"
            >
              Ana səhifə
            </button>
            <span className="text-[#4e4639] text-[10px]">/</span>
            <span className="text-[#e8c176] font-semibold">Əlaqə</span>
          </div>
          <div className="inline-flex items-center gap-2 text-[#e8c176] font-label-caps text-[11px] uppercase tracking-[0.25em] mt-1 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#e8c176]" />
            Bizimlə əlaqə və konsultasiya
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-8">
            <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-6xl text-[#e5e1e4] tracking-tight leading-none mb-3 font-normal">
              Bizimlə əlaqə
            </h1>
            <p className="font-body-xl text-base md:text-xl text-[#d4c4b4] max-w-2xl font-light leading-relaxed">
              Məkanınızın fərdi layihələndirilməsi, təmiri və ya tikintisi üçün peşəkar memarlıq komandamızla birbaşa əlaqə qurun.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-center gap-4">
            <div className="flex flex-col text-left lg:text-right font-caption text-xs text-[#b6a798]">
              <span className="uppercase tracking-[0.18em] text-[#d1c5b4] font-label-caps font-semibold">
                Mərkəzi Ofis
              </span>
              <span>Baku Business District • 40.4093° N, 49.8671° E</span>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT MONOGRAPH APPARATUS (DARK CHARCOAL & TACTILE IVORY) */}
      <section className="w-full px-4 md:px-8 pb-20 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden border border-[#4e4639]/40">
          {/* LEFT STRATUM: OBSIDIAN DOSSIER (DARK FOUNDATION) */}
          <div className="lg:col-span-5 bg-[#201f21] p-6 md:p-10 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#4e4639]/30">
            <div className="flex flex-col">
              {/* Monograph Dossier Overline */}
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#4e4639]/30">
                <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.22em] uppercase font-semibold">
                  Protokol 01 // Əlaqə
                </span>
                <span className="font-caption text-xs text-[#b6a798]">14-cü Mərtəbə</span>
              </div>
              <h2 className="font-headline-md text-2xl md:text-3xl text-[#e5e1e4] mb-2 font-normal">
                Əlaqə məlumatları
              </h2>
              <p className="font-body-md text-sm text-[#d1c5b4] mb-8 leading-relaxed">
                Bizimlə birbaşa telefon, WhatsApp və ya ofisimizə yaxınlaşaraq görüş təyin edə bilərsiniz.
              </p>

              {/* Contact Registry Items */}
              <div className="flex flex-col space-y-6">
                {/* Direct Line */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 flex-shrink-0 bg-[#2a2a2c] border border-[#4e4639]/40 flex items-center justify-center text-[#e8c176]">
                    <span className="material-symbols-outlined text-[19px]">call</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-[#b6a798] uppercase tracking-[0.16em] font-semibold">
                      Birbaşa əlaqə xətti
                    </span>
                    <a
                      className="font-headline-sm text-xl text-[#e5e1e4] hover:text-[#e8c176] transition-colors tracking-wide mt-0.5 font-normal"
                      href="tel:+994505300369"
                    >
                      +994 50 530 03 69
                    </a>
                  </div>
                </div>

                {/* WhatsApp Direct Dispatch Action */}
                <div className="pt-1 pb-1">
                  <a
                    className="inline-flex items-center justify-between w-full p-3 bg-[#2a2a2c] hover:bg-[#353437] transition-all duration-300 border border-[#4e4639]/50 group"
                    href="https://wa.me/994505300369"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#e8c176] text-[20px]">chat</span>
                      <span className="font-label-caps text-[11px] text-[#e5e1e4] tracking-[0.18em] uppercase group-hover:text-[#e8c176] transition-colors font-semibold">
                        WhatsApp ilə yazın
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[#c9a45c] text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 flex-shrink-0 bg-[#2a2a2c] border border-[#4e4639]/40 flex items-center justify-center text-[#e8c176]">
                    <span className="material-symbols-outlined text-[19px]">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-[#b6a798] uppercase tracking-[0.16em] font-semibold">
                      Rəsmi elektron poçt
                    </span>
                    <a
                      className="font-body-lg text-sm md:text-base text-[#e5e1e4] hover:text-[#e8c176] transition-colors mt-0.5"
                      href="mailto:info@lunaria.az"
                    >
                      info@lunaria.az
                    </a>
                  </div>
                </div>

                {/* Curated Social Folio */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 flex-shrink-0 bg-[#2a2a2c] border border-[#4e4639]/40 flex items-center justify-center text-[#e8c176]">
                    <span className="material-symbols-outlined text-[19px]">photo_camera</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-[#b6a798] uppercase tracking-[0.16em] font-semibold">
                      Vizual arxiv və portfolio
                    </span>
                    <a
                      className="font-body-lg text-sm md:text-base text-[#e5e1e4] hover:text-[#e8c176] transition-colors mt-0.5 tracking-wide"
                      href="https://instagram.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @lunaria.temir.tikinti
                    </a>
                  </div>
                </div>

                {/* Architectural Headquarters */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 flex-shrink-0 bg-[#2a2a2c] border border-[#4e4639]/40 flex items-center justify-center text-[#e8c176]">
                    <span className="material-symbols-outlined text-[19px]">domain</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-[#b6a798] uppercase tracking-[0.16em] font-semibold">
                      Baş memarlıq bürosu
                    </span>
                    <span className="font-body-md text-sm text-[#d1c5b4] mt-0.5 leading-snug">
                      Çinar Plaza, Heydər Əliyev pr. 152, 14-cü mərtəbə, Bakı, Azərbaycan
                    </span>
                  </div>
                </div>

                {/* Operating Cadence */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 flex-shrink-0 bg-[#2a2a2c] border border-[#4e4639]/40 flex items-center justify-center text-[#e8c176]">
                    <span className="material-symbols-outlined text-[19px]">schedule</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-[#b6a798] uppercase tracking-[0.16em] font-semibold">
                      Qəbul qrafiki
                    </span>
                    <span className="font-body-md text-sm text-[#e5e1e4] mt-0.5">
                      Bazar ertəsi — Şənbə: 09:00 - 19:00
                    </span>
                    <span className="font-caption text-xs text-[#b6a798]">
                      Bazar: Qabaqcadan fərdi görüş əsasında
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Archival Quote Guarantee */}
            <div className="mt-8 pt-4 border-t border-[#4e4639]/30 flex items-start gap-2.5">
              <span className="text-[#e8c176] font-headline-sm leading-none mt-1">✦</span>
              <p className="font-label-editorial text-[14px] text-[#d4c4b4] italic leading-relaxed">
                Hər bir layihə baş memarımızın şəxsi nəzarəti, tam konfidensiallıq və müəllif hüquqları ilə dəyərləndirilir.
              </p>
            </div>
          </div>

          {/* RIGHT STRATUM: DUAL-PANE IVORY APPLICATION DOSSIER */}
          <div className="lg:col-span-7 bg-[#f6f1e9] text-[#131315] p-6 md:p-10 flex flex-col justify-between relative">
            {!submitted ? (
              <div>
                {/* Monograph Overline */}
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#e3ddd1]">
                  <span className="font-label-caps text-[11px] text-[#8c733e] tracking-[0.24em] uppercase font-semibold">
                    Sifariş və Layihələndirmə
                  </span>
                  <span className="font-caption text-xs text-[#757067] tracking-wider">
                    Forma № LNR-2026
                  </span>
                </div>

                <h2 className="font-headline-md text-2xl md:text-3xl text-[#131315] mb-2 font-normal">
                  Müraciət formu
                </h2>
                <p className="font-body-md text-sm text-[#59554e] mb-6 leading-relaxed">
                  Aşağıdakı formu doldurun, 24 saat ərzində sizinlə əlaqə saxlayaraq ilkin smeta və texniki baxış vaxtını təyin edək.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Row 1: Identity & Telephony */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name & Surname */}
                    <div className="flex flex-col space-y-1.5">
                      <label
                        className="font-label-caps text-[10px] text-[#59554e] uppercase tracking-[0.16em] font-semibold"
                        htmlFor="clientName"
                      >
                        Ad və soyad <span className="text-[#8c733e]">*</span>
                      </label>
                      <div className="relative bg-white shadow-sm border border-[#e3ddd1]">
                        <input
                          id="clientName"
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Məs. Rəşad Əliyev"
                          className="w-full bg-transparent px-3 py-2.5 font-body-md text-sm text-[#131315] placeholder-[#a8a297] focus:outline-none focus:bg-[#fffdf9]"
                        />
                      </div>
                    </div>

                    {/* Phone Prefix Block */}
                    <div className="flex flex-col space-y-1.5">
                      <label
                        className="font-label-caps text-[10px] text-[#59554e] uppercase tracking-[0.16em] font-semibold"
                        htmlFor="clientPhone"
                      >
                        Əlaqə nömrəsi <span className="text-[#8c733e]">*</span>
                      </label>
                      <div className="flex items-stretch bg-white shadow-sm border border-[#e3ddd1]">
                        <span className="flex items-center px-3 text-[#59554e] font-body-md text-sm bg-[#ede7dc] select-none font-medium">
                          +994
                        </span>
                        <input
                          id="clientPhone"
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="50 530 03 69"
                          className="w-full bg-transparent px-3 py-2.5 font-body-md text-sm text-[#131315] placeholder-[#a8a297] focus:outline-none focus:bg-[#fffdf9]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Service Classification & Area Dimensions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Service Classification Dropdown */}
                    <div className="flex flex-col space-y-1.5">
                      <label
                        className="font-label-caps text-[10px] text-[#59554e] uppercase tracking-[0.16em] font-semibold"
                        htmlFor="serviceType"
                      >
                        Xidmət növü <span className="text-[#8c733e]">*</span>
                      </label>
                      <div className="relative bg-white shadow-sm border border-[#e3ddd1]">
                        <select
                          id="serviceType"
                          required
                          value={serviceType}
                          onChange={(e) => setServiceType(e.target.value)}
                          className="w-full appearance-none bg-transparent px-3 py-2.5 font-body-md text-sm text-[#131315] focus:outline-none focus:bg-[#fffdf9] cursor-pointer"
                        >
                          <option value="Temir">Təmir (Açar təhvili icraat)</option>
                          <option value="Tikinti">Fərdi Tikinti & Monolit İnşaat</option>
                          <option value="Interyer">İnteryer Dizayn & Layihələndirmə</option>
                          <option value="Mebel">Bespoke Mebel & Xüsusi İstehsal</option>
                          <option value="Exterior">Eksteryer & Fasad Memarlığı</option>
                        </select>
                        <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#757067] text-[18px]">
                          unfold_more
                        </span>
                      </div>
                    </div>

                    {/* Metric Scale */}
                    <div className="flex flex-col space-y-1.5">
                      <label
                        className="font-label-caps text-[10px] text-[#59554e] uppercase tracking-[0.16em] font-semibold"
                        htmlFor="spatialArea"
                      >
                        Sahə (m²)
                      </label>
                      <div className="relative bg-white shadow-sm border border-[#e3ddd1] flex items-center">
                        <input
                          id="spatialArea"
                          type="number"
                          min="1"
                          value={spatialArea}
                          onChange={(e) => setSpatialArea(e.target.value)}
                          placeholder="Məs. 180"
                          className="w-full bg-transparent px-3 py-2.5 font-body-md text-sm text-[#131315] placeholder-[#a8a297] focus:outline-none focus:bg-[#fffdf9]"
                        />
                        <span className="pr-3 text-[#757067] font-label-caps text-xs uppercase select-none">
                          m²
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Architectural Asset Class Selection */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-label-caps text-[10px] text-[#59554e] uppercase tracking-[0.16em] font-semibold">
                      Obyekt növü
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <label
                        onClick={() => setPropertyType('menzil')}
                        className={`relative flex items-center justify-center p-2.5 bg-white shadow-sm cursor-pointer transition-all duration-200 border ${
                          propertyType === 'menzil' ? 'border-[#8c733e]' : 'border-[#e3ddd1]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="propertyType"
                          value="menzil"
                          checked={propertyType === 'menzil'}
                          onChange={() => setPropertyType('menzil')}
                          className="peer sr-only"
                        />
                        <span
                          className={`font-label-caps text-[11px] uppercase tracking-wider select-none text-center ${
                            propertyType === 'menzil'
                              ? 'text-[#131315] font-bold'
                              : 'text-[#59554e]'
                          }`}
                        >
                          Mənzil
                        </span>
                        {propertyType === 'menzil' && (
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#8c733e]" />
                        )}
                      </label>

                      <label
                        onClick={() => setPropertyType('villa')}
                        className={`relative flex items-center justify-center p-2.5 bg-white shadow-sm cursor-pointer transition-all duration-200 border ${
                          propertyType === 'villa' ? 'border-[#8c733e]' : 'border-[#e3ddd1]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="propertyType"
                          value="villa"
                          checked={propertyType === 'villa'}
                          onChange={() => setPropertyType('villa')}
                          className="peer sr-only"
                        />
                        <span
                          className={`font-label-caps text-[11px] uppercase tracking-wider select-none text-center ${
                            propertyType === 'villa'
                              ? 'text-[#131315] font-bold'
                              : 'text-[#59554e]'
                          }`}
                        >
                          Villa
                        </span>
                        {propertyType === 'villa' && (
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#8c733e]" />
                        )}
                      </label>

                      <label
                        onClick={() => setPropertyType('kommersiya')}
                        className={`relative flex items-center justify-center p-2.5 bg-white shadow-sm cursor-pointer transition-all duration-200 border ${
                          propertyType === 'kommersiya' ? 'border-[#8c733e]' : 'border-[#e3ddd1]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="propertyType"
                          value="kommersiya"
                          checked={propertyType === 'kommersiya'}
                          onChange={() => setPropertyType('kommersiya')}
                          className="peer sr-only"
                        />
                        <span
                          className={`font-label-caps text-[11px] uppercase tracking-wider select-none text-center ${
                            propertyType === 'kommersiya'
                              ? 'text-[#131315] font-bold'
                              : 'text-[#59554e]'
                          }`}
                        >
                          Kommersiya
                        </span>
                        {propertyType === 'kommersiya' && (
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#8c733e]" />
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Row 4: Architectural Brief / Specifications */}
                  <div className="flex flex-col space-y-1.5">
                    <label
                      className="font-label-caps text-[10px] text-[#59554e] uppercase tracking-[0.16em] font-semibold"
                      htmlFor="clientNote"
                    >
                      Qeyd / Əlavə məlumat{' '}
                      <span className="font-caption text-xs normal-case tracking-normal text-[#8a8478]">
                        (istəyə bağlı)
                      </span>
                    </label>
                    <div className="relative bg-white shadow-sm border border-[#e3ddd1]">
                      <textarea
                        id="clientNote"
                        rows={3}
                        value={clientNote}
                        onChange={(e) => setClientNote(e.target.value)}
                        placeholder="Layihəniz barədə qısa məlumat və ya xüsusi istəkləriniz..."
                        className="w-full bg-transparent px-3 py-2.5 font-body-md text-sm text-[#131315] placeholder-[#a8a297] focus:outline-none focus:bg-[#fffdf9] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-[#c9a45c] hover:bg-[#b8924b] active:bg-[#9e7a36] text-[#131315] font-label-caps text-[11px] uppercase tracking-[0.24em] font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <span>Müraciəti göndər</span>
                      <span className="material-symbols-outlined text-[18px]">north_east</span>
                    </button>
                  </div>
                </form>

                {/* SLA Commitment */}
                <div className="mt-4 pt-2 flex items-center gap-2 text-[#757067] font-caption text-xs">
                  <span className="text-[#8c733e]">✦</span>
                  <p>
                    24 saat ərzində sizinlə əlaqə saxlayacağıq. Məlumatlarınızın məxfiliyinə tam zəmanət verilir.
                  </p>
                </div>
              </div>
            ) : (
              /* Confirmation State Badge */
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#efe8dc] flex items-center justify-center text-[#8c733e] mb-4 shadow">
                  <span className="material-symbols-outlined text-[32px]">check</span>
                </div>
                <span className="font-label-caps text-[11px] text-[#8c733e] tracking-[0.22em] uppercase mb-1 font-semibold">
                  Status: Qeydə alındı
                </span>
                <h3 className="font-headline-md text-3xl text-[#131315] mb-2 font-normal">
                  Müraciətiniz qəbul olundu
                </h3>
                <p className="font-body-md text-sm text-[#59554e] max-w-md mx-auto mb-6 leading-relaxed">
                  Təşəkkür edirik {clientName ? `, ${clientName}` : ''}. Layihə rəhbərimiz və baş memarımız 24 saat ərzində sizinlə əlaqə saxlayacaq.
                </p>

                <div className="p-4 bg-white shadow-sm border border-[#e3ddd1] inline-flex flex-col text-left max-w-sm w-full mb-6">
                  <span className="font-caption text-xs text-[#757067] uppercase tracking-wider">
                    İlkin baxış sənədi
                  </span>
                  <span className="font-body-md text-[#131315] font-medium text-sm mt-1">
                    {getServiceName(serviceType)} • {getPropertyTypeName(propertyType)}{' '}
                    {spatialArea ? `(${spatialArea} m²)` : ''}
                  </span>
                </div>

                <button
                  onClick={handleReset}
                  className="font-label-caps text-[11px] text-[#8c733e] hover:text-[#131315] uppercase tracking-[0.2em] transition-colors inline-flex items-center gap-1 font-bold"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">refresh</span>
                  <span>Yeni müraciət göndər</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL STUDIO VISITATION & CARTOGRAPHIC STRATUM */}
      <section className="w-full px-4 md:px-8 pb-20 max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#e8c176] font-label-caps text-[11px] uppercase tracking-[0.25em] mb-1 font-semibold">
              <span className="w-1.5 h-1.5 bg-[#e8c176]" />
              Geolokasiya və Giriş
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e5e1e4] font-normal">
              Ofisimizin yeri
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2 text-[#e8c176] font-label-caps text-[11px] tracking-[0.2em] uppercase hover:text-[#e5e1e4] transition-colors duration-200 font-semibold"
            href="https://maps.google.com/?q=Heydar+Aliyev+Avenue+152+Baku"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Xəritədə bax (Google Maps)</span>
            <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
          </a>
        </div>

        {/* Stylized Dark Architectural Map Canvas */}
        <div className="relative w-full h-[460px] bg-[#201f21] overflow-hidden shadow-2xl border border-[#4e4639]/40">
          <div
            className="w-full h-full bg-cover bg-center opacity-85"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgw47itOhkUzOFtXwgj26ozXc7PlIoi6XjL3nZFw2IKhJju_6ne9UbuRR9kpz2FcTfHbwF0pUgN32XaoSOy-umYDtgOQTlywOMdJBfi8AzbpvvwY4EAjB4KzMmz7bA6UmTVgjOdOJQYqOhEaNTZKxMxEuhCYiWzAcUoVkLJdXkQOaLfgX7lCy2zvM12VRwDQcp72rqsETcBVlbfQT5WaBrZH3cJ8mgewC6dzHJ89DVwXJvfjD_kYe34A')`,
            }}
          />
          {/* Architectural Grid Overlay Graticule */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-[#0e0e10]/40 pointer-events-none" />

          {/* High-End Monograph Map Inset Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-auto">
            {/* Pulse Indicator Anchor */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-8 h-8 rounded-full bg-[#e8c176]/30 animate-ping" />
              <div className="w-4 h-4 bg-[#e8c176] rotate-45 shadow-lg shadow-black/80 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#0e0e10]" />
              </div>
            </div>

            {/* Floating Dossier Flag */}
            <div className="mt-3 bg-[#0e0e10]/95 border border-[#4e4639]/50 backdrop-blur-md p-4 max-w-xs shadow-2xl flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className="font-label-caps text-[10px] text-[#e8c176] tracking-[0.2em] uppercase font-semibold">
                  Mərkəzi Ofis
                </span>
                <span className="font-caption text-xs text-[#b6a798]">14F</span>
              </div>
              <span className="font-headline-sm text-lg text-[#e5e1e4] leading-tight font-medium">
                LUNARIA Bureau
              </span>
              <span className="font-caption text-xs text-[#b6a798] mt-1">
                Çinar Plaza • Heydər Əliyev pr. 152, Bakı
              </span>
              <div className="mt-3 pt-2 border-t border-[#4e4639]/30 flex items-center justify-between">
                <span className="font-caption text-xs text-[#d1c5b4]">
                  Yeraltı parking mövcuddur
                </span>
                <span className="text-[#e8c176] text-[10px] uppercase font-label-caps font-bold">
                  VIP Giriş
                </span>
              </div>
            </div>
          </div>

          {/* Ambient Architectural Floor Reference Badge */}
          <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 bg-[#0e0e10]/90 border border-[#4e4639]/40 backdrop-blur-md px-4 py-2.5">
            <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
              navigation
            </span>
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] text-[#e5e1e4] tracking-wider uppercase font-semibold">
                Heydər Əliyev prospekti qovşağı
              </span>
              <span className="font-caption text-xs text-[#b6a798]">
                H.Əliyev Mərkəzindən 4 dəqiqəlik məsafə
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
