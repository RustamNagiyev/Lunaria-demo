/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavPage } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { FreeMeasureModal } from './components/FreeMeasureModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { PackagesPage } from './pages/PackagesPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('ana-sehife');
  const [isFreeMeasureOpen, setIsFreeMeasureOpen] = useState(false);

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'pulsuz-olcu') {
        setIsFreeMeasureOpen(true);
      } else if (
        ['ana-sehife', 'xidmetler', 'paketler', 'layiheler', 'haqqimizda', 'elaqe'].includes(
          hash,
        )
      ) {
        setCurrentPage(hash as NavPage);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFreeMeasure = () => {
    setIsFreeMeasureOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] text-[#e5e1e4] flex flex-col font-sans selection:bg-[#c9a45c] selection:text-[#523a00]">
      {/* Fixed Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenFreeMeasure={handleOpenFreeMeasure}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-grow min-h-screen">
        {currentPage === 'ana-sehife' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenFreeMeasure={handleOpenFreeMeasure}
          />
        )}
        {currentPage === 'xidmetler' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenFreeMeasure={handleOpenFreeMeasure}
          />
        )}
        {currentPage === 'paketler' && (
          <PackagesPage
            onNavigate={handleNavigate}
            onOpenFreeMeasure={handleOpenFreeMeasure}
          />
        )}
        {currentPage === 'layiheler' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenFreeMeasure={handleOpenFreeMeasure}
          />
        )}
        {currentPage === 'haqqimizda' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'elaqe' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Unified Monograph Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Action Button (050 530 03 69) */}
      <FloatingWhatsApp />

      {/* Free Measure Request Modal */}
      <FreeMeasureModal
        isOpen={isFreeMeasureOpen}
        onClose={() => setIsFreeMeasureOpen(false)}
      />
    </div>
  );
}
