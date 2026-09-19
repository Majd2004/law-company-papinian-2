import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PapinianHeritage } from './components/PapinianHeritage';
import { PracticeAreas } from './components/PracticeAreas';
import { Attorneys } from './components/Attorneys';
import { CaseStudies } from './components/CaseStudies';
import { SyrianLegalGuide } from './components/SyrianLegalGuide';
import { LegalEstimator } from './components/LegalEstimator';
import { ContactAndOffices } from './components/ContactAndOffices';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { MessageSquare } from 'lucide-react';
import { OFFICE_INFO } from './data/firmData';

const MainContent: React.FC = () => {
  const { isAr, t } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState<string>('');
  const [selectedPartner, setSelectedPartner] = useState<string>('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');

  const handleOpenConsultation = (practice?: string, partner?: string, budget?: string) => {
    setSelectedPractice(practice || '');
    setSelectedPartner(partner || '');
    setSelectedBudget(budget || '');
    setIsConsultationOpen(true);
  };

  const handleScrollToPractices = () => {
    const el = document.getElementById('practice-areas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cleanWhatsappNumber = OFFICE_INFO.mobileWhatsapp.replace(/\s+/g, '').replace('+', '');

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 flex flex-col selection:bg-[#C69A48]/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar 
        onOpenConsultation={() => handleOpenConsultation()} 
        onOpenPortal={() => setIsPortalOpen(true)} 
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero 
          onOpenConsultation={() => handleOpenConsultation()} 
          onExplorePractices={handleScrollToPractices} 
        />
        
        <PapinianHeritage />

        <PracticeAreas 
          onSelectPracticeForConsultation={(practiceTitle) => handleOpenConsultation(practiceTitle)} 
        />

        <Attorneys 
          onBookPartnerMeeting={(partnerName) => handleOpenConsultation(undefined, partnerName)} 
        />

        <CaseStudies />

        <LegalEstimator 
          onProceedToBooking={({ service, estimatedBudget }) => 
            handleOpenConsultation(service, undefined, estimatedBudget)
          } 
        />

        <SyrianLegalGuide />

        <ContactAndOffices />
      </main>

      {/* Floating Emergency WhatsApp Action Button */}
      <div className="fixed bottom-6 left-6 rtl:left-auto rtl:right-6 z-40 flex flex-col gap-2.5 items-end rtl:items-start">
        <a
          href={`https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(
            isAr 
              ? 'مرحباً، أود الاستفسار عن استشارة قانونية عاجلة لدى شركة بابينيان للمحاماة بدمشق.'
              : 'Hello, I would like to inquire about an urgent legal consultation at Papinian Law Firm Damascus.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:shadow-emerald-500/30 transition-all transform hover:scale-105 group border border-emerald-400/40"
          title={t('تواصل فوري عبر واتساب', 'Direct WhatsApp Legal Hotline')}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
          </span>
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold hidden sm:inline">
            {t('واتساب الطوارئ القضائي 24/7', '24/7 Judicial WhatsApp')}
          </span>
        </a>
      </div>

      {/* Modals */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialPractice={selectedPractice}
        initialPartner={selectedPartner}
        initialBudget={selectedBudget}
      />

      <ClientPortalModal 
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
