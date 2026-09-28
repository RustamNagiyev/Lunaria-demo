import React, { useState } from 'react';
import { NavPage, ProjectItem } from '../types.ts';

interface ProjectsPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenFreeMeasure: () => void;
}

const projectsData: ProjectItem[] = [
  {
    id: 'port-baku',
    title: 'Port Baku • Penthaus',
    category: 'rezidensiya',
    type: 'rezidensiya',
    area: '320 M²',
    location: 'Port Baku Residence, Bakı',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaIZ5ZTrzlrm-UkTbf9AX1NE2tayd1tJ4YuYa4A9oZo54hyfbV_pHm-7-UYngGPNB2vpb7_Z0UpTo9fKvZe7v7OMwEbsFYguwk2fzXktt_3_NSijfAbXj7B_o2RSGUWa-0sQe3euUVczAbkEnl0kBQM6zTIRyTTqTt-iw8jWD66o_ldb8wSFGsTPrSX-AIewAXPk387dcfhs42Iql9PIF0MZF8lTyoRO7P_INz708p5I_GBBhEMGYHSg',
    altText: 'Port Baku Penthaus',
    description:
      'Xəzər dənizinə panoramik mənzərəsi olan iki səviyyəli penthausun memarlıq layihələndirilməsi və açar təslim təmiri. Təbii Calacatta mərmər, bürünc elementlər və fərdi mebel atelyemizin istehsalı olan qoz ağacı panellər.',
    details: [
      'Açar təslim kapital təmir',
      'İtaliya istehsalı xüsusi mebel dəstləri',
      'Ağıllı ev (Lutron & KNX) sistemi',
      'Akustik izolyasiya və gizli qapılar',
    ],
  },
  {
    id: 'white-city',
    title: 'White City • Dupleks',
    category: 'dupleks',
    type: 'dupleks',
    area: '240 M²',
    location: 'Ağ Şəhər, Bakı',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6GgSNWUFkJGfxJUXpQw7NapjDMR3vk10MnYv3LahZC-8dKVnblbYBGTmN_pZKyXOVq39o8qtWv-wg-yXZnNKFxEZJrLtLM6V5TPyoFIzVXwrn5TB88Aq51dWIIJBe_8uSciQjAqNlcSy_dlZ9XHg4LPJy87stdAGnZYv4xagOEsuycdVMkb-UXeki7QBbn5SWG5xoAxZ7XWQlm76qU1x3WBSeQ-BBjSdb0HOiD0OvPI9rt19hc8CsRQ',
    altText: 'White City Dupleks',
    description:
      'Minimalist arxitektur qaldırıcı pilləkən, qara dumanlı palıd döşəmə və burnished bronze tutacaqlar. Təbii gün işığının sərbəst hərəkət etdiyi qalereya ab-havası.',
    details: [
      'Monolit pilləkən konstruksiyası',
      'İspan keramoqraniti (120x280)',
      'Kölgəli tavan karkasları',
      'Müəllif nəzarəti və tam zəmanət',
    ],
  },
  {
    id: 'sea-breeze',
    title: 'Sea Breeze • Villa',
    category: 'villa',
    type: 'villa',
    area: '450 M²',
    location: 'Sea Breeze Resort, Nardaran',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCt1CpyMCNjRMr2xYm6ck6YFi634bg1uCZmVV51DIKCSighqLLf4BwUhSZgzdM77ad0f7E1Z-KfUkSRzACaygRDZ_StsmfIdURajMbzxYShVyp8qkbw-gQRq14qsfl-u6b_nz2ECRQuJiUYYCFodiEBXKl26VE2AIA1VTnEvQz2ccoSpcG9W370P0ZLekEmKSbtFoGbOFFgZZscOU5uYum2vonVNuORtIoGncpY4iY3x0EpDDMdA9BrKQ',
    altText: 'Sea Breeze Villa',
    description:
      'Sahil kənarında yerləşən malikanənin master yataq otağı və istirahət zonaları. Təbii kətan teksturası, fərdi yataq başlığı və terrasdan dalğalara açılan geniş şüşəbənd pəncərələr.',
    details: [
      'Dəniz iqliminə davamlı fasad örtükləri',
      'Təbii ağacdan terras döşəməsi',
      'Avtomatik iqlimləndirmə və suvarma',
      'İstirahət və hovuz ətrafı landşaft',
    ],
  },
  {
    id: 'badamdar',
    title: 'Badamdar • Rezidensiya',
    category: 'rezidensiya',
    type: 'rezidensiya',
    area: '510 M²',
    location: 'Badamdar qəsəbəsi, Bakı',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6a2uVlR1Km18bpHPKJdZoWEZGk9P5tGOlsuVhMxOCKbI9yKtOJVhvlZbqlTw3ieoThMgENkZX9tTYWHc7ME4g0tEJSEn2n1BwfSiIHofblFw4btw9JQby0XWyrDQGSdURgUObT5x7g62-ij5BljAzdlUEC_YjeGWl0_wiAjaYCwoeRCWBvklMcev3ZgIAGEkCh0ILvUEIEvstAVSoa-cJKbrRtH7LuoIztfJlaRDppA5a87QFiFHVgw',
    altText: 'Badamdar Rezidensiya',
    description:
      'Qoz ağacından divar panelləri ilə inteqrasiya olunmuş gizli qapılar və işıqlandırılmış keramik kolleksiya vitrinləri. Sakit dəbdəbə (quiet luxury) konseptində icra olunmuş yaşayış kompleksi.',
    details: [
      'Gizli profilli qapı və plintuslar',
      'Avstriya istehsalı furniturlar',
      'Multi-zona arxitektur işıqlandırma',
      'Xüsusi səs izolyasiyası',
    ],
  },
  {
    id: 'nardaran',
    title: 'Nardaran • İqamətgah',
    category: 'iqametgah',
    type: 'iqametgah',
    area: '680 M²',
    location: 'Nardaran bağları, Bakı',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChARVSjcE2BV8VKPAUUnaN1jgMgGlTjSw1zA6t8kyei_EgFeeej16weZ5qyx8NmA599asgFlst_CMAB16LHZVeXxDs3_cSVpkw0Q0kqflOrV398BzOO3fCfFAfcs2EJa9sZkHf2Z1Lln2hQfpygJ9eye6LFhNTLH5aH5HicILz-kBgWI5b-xAKXWvdmVPq2Y9fV1vAVollTcljMmc2AYBqTRDIKkDBVXzfVIo9_CvEwtVJS4LxfCDgMw',
    altText: 'Nardaran İqamətgah',
    description:
      'Yekparə travertin masa, xüsusi hazırlanmış bürünc çılçıraq və zeytun bağına açılan vitrajlar. Geniş qonaq və qəbul otaqlarının lüks memarlıq həlli.',
    details: [
      'İtalyan travertin və oniks detallar',
      'Xüsusi istehsal bürünc detallar',
      'Terras və bağça inteqrasiyası',
      '7 illik rəsmi müqavilə zəmanəti',
    ],
  },
  {
    id: 'merdekan',
    title: 'Mərdəkan • Monolit Malikanə',
    category: 'villa',
    type: 'villa',
    area: '920 M²',
    location: 'Mərdəkan, Bakı',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5H3_L409e4ymHR5eR_j1h_Oz_9-WmmplIryZGmCz90MPn-K3sxQXviH9rVXzk4zAatgYBV2h7jHL5i2_a-6kI0ub6EWz6SEvt8L__yZZhfOpaONrwOszjEuzW-X6ud9ndvROQLysW3tufoFY85DSq1WSvL9kiDKpMNiBAQoMANbsN8Pwk82hGfx-J5-Mfp6P5vtR30qVEDZpP4ok0rRQ82B93ExAPdw2dGRpEMA8r8CO5doegKUu87Q',
    altText: 'Mərdəkan Monolit Malikanə',
    description:
      'Sıfırdan təməlqoyma ilə başlayan monolit dəmir-beton karkas və geniş terraslı lüks villa inşası. Müasir fasad sistemləri və dəniz havasına davamlı termoizolyasiya.',
    details: [
      'Seysmik 9 bala dayanıqlı monolit karkas',
      'Hovuz və landşaft mühəndisliyi',
      'Açar təslim daxili və xarici tamamlama',
      'Dəqiq baş smeta və laboratoriya yoxlanışı',
    ],
  },
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenFreeMeasure,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-[#0e0e10] py-20 px-4 md:px-8 border-b border-[#4e4639]/30">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#c9a45c]" />
            <span className="font-label-caps text-[11px] tracking-[0.3em] text-[#c9a45c] uppercase font-semibold">
              MEMARLIQ VƏ İCRA PORTFELİ
            </span>
            <span className="w-1.5 h-1.5 bg-[#c9a45c]" />
          </div>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#d1c5b4] font-caption text-xs uppercase tracking-[0.18em] mb-4">
            <button
              onClick={() => onNavigate('ana-sehife')}
              className="hover:text-[#e8c176] transition-colors"
              type="button"
            >
              Ana səhifə
            </button>
            <span className="text-[#4e4639]">/</span>
            <span className="text-[#c9a45c] font-semibold">Layihələr</span>
          </nav>

          <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-6xl text-[#e5e1e4] mb-4 font-normal">
            Seçilmiş Layihələrimiz
          </h1>
          <p className="font-body-xl text-base md:text-xl text-[#d1c5b4] max-w-2xl font-light leading-relaxed">
            Bakının ən nüfuzlu yaşayış komplekslərində və şəhərətrafı villalarda reallaşdırdığımız eksklüziv layihələr.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 font-label-caps text-[11px] tracking-[0.18em] uppercase transition-all duration-300 font-semibold border ${
                filter === 'all'
                  ? 'bg-[#c9a45c] text-[#523a00] border-[#c9a45c]'
                  : 'bg-[#1b1b1d] text-[#d1c5b4] border-[#4e4639]/40 hover:text-[#e8c176]'
              }`}
              type="button"
            >
              Bütün Layihələr ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('rezidensiya')}
              className={`px-5 py-2 font-label-caps text-[11px] tracking-[0.18em] uppercase transition-all duration-300 font-semibold border ${
                filter === 'rezidensiya'
                  ? 'bg-[#c9a45c] text-[#523a00] border-[#c9a45c]'
                  : 'bg-[#1b1b1d] text-[#d1c5b4] border-[#4e4639]/40 hover:text-[#e8c176]'
              }`}
              type="button"
            >
              Rezidensiyalar
            </button>
            <button
              onClick={() => setFilter('dupleks')}
              className={`px-5 py-2 font-label-caps text-[11px] tracking-[0.18em] uppercase transition-all duration-300 font-semibold border ${
                filter === 'dupleks'
                  ? 'bg-[#c9a45c] text-[#523a00] border-[#c9a45c]'
                  : 'bg-[#1b1b1d] text-[#d1c5b4] border-[#4e4639]/40 hover:text-[#e8c176]'
              }`}
              type="button"
            >
              Dublekslər
            </button>
            <button
              onClick={() => setFilter('villa')}
              className={`px-5 py-2 font-label-caps text-[11px] tracking-[0.18em] uppercase transition-all duration-300 font-semibold border ${
                filter === 'villa'
                  ? 'bg-[#c9a45c] text-[#523a00] border-[#c9a45c]'
                  : 'bg-[#1b1b1d] text-[#d1c5b4] border-[#4e4639]/40 hover:text-[#e8c176]'
              }`}
              type="button"
            >
              Villalar
            </button>
            <button
              onClick={() => setFilter('iqametgah')}
              className={`px-5 py-2 font-label-caps text-[11px] tracking-[0.18em] uppercase transition-all duration-300 font-semibold border ${
                filter === 'iqametgah'
                  ? 'bg-[#c9a45c] text-[#523a00] border-[#c9a45c]'
                  : 'bg-[#1b1b1d] text-[#d1c5b4] border-[#4e4639]/40 hover:text-[#e8c176]'
              }`}
              type="button"
            >
              İqamətgahlar
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full bg-[#f1e0cf] text-[#221a10] py-20 px-4 md:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-[#0e0e10] text-[#e5e1e4] group overflow-hidden shadow-xl cursor-pointer hover:-translate-y-1 transition-all duration-300 border border-[#4e4639]/30"
              >
                <div className="w-full h-72 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={project.altText}
                    src={project.imageUrl}
                  />
                  <div className="absolute top-4 left-4 bg-[#0e0e10]/80 backdrop-blur-sm px-3 py-1 font-label-caps text-[10px] text-[#e8c176] tracking-wider uppercase font-semibold">
                    {project.area}
                  </div>
                </div>

                <div className="p-6 bg-[#201f21] flex flex-col justify-between">
                  <div>
                    <span className="font-caption text-xs text-[#b6a798] tracking-wider uppercase block">
                      {project.location}
                    </span>
                    <h3 className="font-headline-sm text-2xl text-[#e5e1e4] mt-1 mb-2 font-normal group-hover:text-[#e8c176] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-xs text-[#d1c5b4] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#4e4639]/30 flex items-center justify-between text-[#e8c176] font-label-caps text-[11px] tracking-wider uppercase font-semibold">
                    <span>Ətraflı Bax</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      east
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#1b1b1d] border border-[#4e4639]/60 shadow-2xl text-[#e5e1e4] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 bg-black/70 hover:bg-[#e8c176] hover:text-[#412d00] flex items-center justify-center text-white transition-colors"
              type="button"
              aria-label="Bağla"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="w-full h-80 md:h-96 relative">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.altText}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1d] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-caps text-xs text-[#e8c176] tracking-[0.25em] uppercase font-semibold">
                  {selectedProject.location} • {selectedProject.area}
                </span>
                <h3 className="font-headline-xl text-3xl md:text-4xl text-white font-normal mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h4 className="font-label-caps text-xs text-[#d4c4b4] tracking-[0.2em] uppercase font-semibold mb-2">
                  Layihə Haqqında
                </h4>
                <p className="font-body-md text-sm md:text-base text-[#d1c5b4] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.details && (
                <div>
                  <h4 className="font-label-caps text-xs text-[#d4c4b4] tracking-[0.2em] uppercase font-semibold mb-3">
                    İcra Standartları & Detallar
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 bg-[#201f21] border border-[#4e4639]/30 text-sm text-[#e5e1e4]"
                      >
                        <span className="material-symbols-outlined text-[#e8c176] text-[18px]">
                          check_circle
                        </span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-[#4e4639]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-[#b6a798]">
                  <span>Əlaqə xətti:</span>
                  <a
                    href="tel:+994505300369"
                    className="text-[#e8c176] font-semibold hover:underline"
                  >
                    +994 50 530 03 69
                  </a>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenFreeMeasure();
                    }}
                    className="flex-1 sm:flex-none px-6 py-3 bg-[#c9a45c] hover:bg-[#e8c176] text-[#523a00] font-label-caps text-xs tracking-wider uppercase font-bold text-center"
                    type="button"
                  >
                    Pulsuz ölçü sifariş et
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onNavigate('elaqe');
                    }}
                    className="flex-1 sm:flex-none px-6 py-3 bg-[#2a2a2c] hover:bg-[#353437] text-white font-label-caps text-xs tracking-wider uppercase text-center border border-[#4e4639]/50"
                    type="button"
                  >
                    Müraciət et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="w-full bg-[#0e0e10] py-20 px-4 md:px-8 border-t border-[#4e4639]/30">
        <div className="max-w-[1040px] mx-auto bg-[#1b1b1d] border border-[#4e4639]/40 p-8 md:p-14 text-center flex flex-col items-center">
          <span className="font-label-caps text-[11px] tracking-[0.25em] text-[#e8c176] mb-3 uppercase font-semibold">
            ÖZƏL MEMARLIQ VƏ İCRAAT
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e5e1e4] mb-3 font-normal">
            Sizin məkanınız üçün xüsusi layihə
          </h2>
          <p className="font-body-lg text-base md:text-lg text-[#d1c5b4] max-w-xl font-light mb-8 leading-relaxed">
            Bizimlə əlaqə saxlayın, memarımız sizinlə görüşərək məkanın imkanlarını müzakirə etsin.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onNavigate('elaqe')}
              className="px-8 py-3.5 bg-[#c9a45c] hover:bg-[#e8c176] text-[#523a00] font-label-caps text-[11px] tracking-[0.2em] uppercase font-bold transition-all shadow-md"
              type="button"
            >
              Müraciət et
            </button>
            <a
              href="https://wa.me/994505300369"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2a2a2c] hover:bg-[#353437] text-[#e5e1e4] font-headline-sm text-base transition-colors rounded border border-[#4e4639]/40"
            >
              <span className="material-symbols-outlined text-[#e8c176] text-[20px]">chat</span>
              <span>WhatsApp: 050 530 03 69</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
