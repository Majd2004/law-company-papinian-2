import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Scale, 
  Phone, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  Lock, 
  Calendar
} from 'lucide-react';
import { OFFICE_INFO } from '../data/firmData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenPortal }) => {
  const { lang, toggleLang, isAr, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', labelAr: 'الرئيسية', labelEn: 'Home' },
    { href: '#heritage', labelAr: 'إرث بابينيان', labelEn: 'Papinian Legacy' },
    { href: '#practice-areas', labelAr: 'مجالات الممارسة', labelEn: 'Practice Areas' },
    { href: '#attorneys', labelAr: 'نخبة المحامين', labelEn: 'Partners' },
    { href: '#landmark-cases', labelAr: 'سجل القضايا', labelEn: 'Track Record' },
    { href: '#legal-guide', labelAr: 'الدليل القانوني', labelEn: 'Legal Digest' },
    { href: '#estimator', labelAr: 'حاسبة الرسوم', labelEn: 'Fee Estimator' },
    { href: '#contact', labelAr: 'المكاتب والتواصل', labelEn: 'Offices' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#050912] text-xs border-b border-[#C69A48]/20 py-2 px-4 md:px-8 text-slate-300 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C69A48]" />
              <span>{t('دمشق - أوتوستراد المزة، برج الفردوس', 'Damascus - Al-Mazzeh Hwy, Al-Fardous Tower')}</span>
            </div>
            <a 
              href={`tel:${OFFICE_INFO.phonePrimary}`} 
              className="flex items-center gap-2 hover:text-[#C69A48] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C69A48]" />
              <span dir="ltr">{OFFICE_INFO.phonePrimary}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-medium">{t('طوارئ النزاعات والتحكيم 24/7', '24/7 Urgent Legal Dispatch')}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPortal}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#DFBA6E] transition-colors"
            >
              <Lock className="w-3 h-3 text-[#C69A48]" />
              <span>{t('بوابة الموكلين المشفرة', 'Client Vault Login')}</span>
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 hover:text-[#DFBA6E] font-medium transition-colors bg-white/5 px-2.5 py-1 rounded border border-white/10"
              title={t('التبديل إلى الإنجليزية', 'Switch to Arabic')}
            >
              <Globe className="w-3.5 h-3.5 text-[#C69A48]" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <nav 
        className={`transition-all duration-300 px-4 md:px-8 ${
          isScrolled 
            ? 'bg-[#070D18]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C69A48]/25' 
            : 'bg-gradient-to-b from-[#070D18]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-[#1A263E] to-[#0D1626] border border-[#C69A48]/50 flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-[#DFBA6E] transition-all">
              <Scale className="w-6 h-6 text-[#DFBA6E] group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C69A48] border-2 border-[#070D18]"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xl md:text-2xl font-bold tracking-wider text-slate-100 group-hover:text-[#DFBA6E] transition-colors">
                  PAPINIAN
                </span>
                <span className="text-[10px] tracking-widest text-[#C69A48] border border-[#C69A48]/40 px-1.5 py-0.5 rounded uppercase hidden sm:inline">
                  {t('دمشق', 'Damascus')}
                </span>
              </div>
              <p className="text-[11px] font-amiri md:text-xs text-[#DFBA6E] tracking-normal leading-tight">
                {t('بابينيان للمحاماة والاستشارات القانونية', 'Law Firm & International Arbitration')}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#DFBA6E] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#C69A48] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-xs md:text-sm text-[#070D18] bg-gradient-to-r from-[#DFBA6E] via-[#D4AF37] to-[#C69A48] hover:from-[#F4D078] hover:to-[#DFBA6E] shadow-lg shadow-[#C69A48]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('حجز استشارة خاصة', 'Schedule Consultation')}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleLang}
              className="sm:hidden text-xs text-[#DFBA6E] px-2 py-1 rounded bg-white/5 border border-white/10"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 pb-6 pt-2 border-t border-slate-800 bg-[#070D18]/98 backdrop-blur-xl rounded-xl px-4 shadow-2xl">
            <div className="flex flex-col gap-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2.5 px-3 rounded-lg text-slate-200 hover:bg-[#C69A48]/10 hover:text-[#DFBA6E] transition-all text-sm font-medium border-b border-slate-800/60"
                >
                  {isAr ? link.labelAr : link.labelEn}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#DFBA6E] to-[#C69A48] text-[#070D18] font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('حجز استشارة قانونية رفيعة', 'Book VIP Legal Consultation')}</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortal();
                  }}
                  className="w-full py-2.5 rounded-lg bg-white/5 border border-[#C69A48]/40 text-[#DFBA6E] text-xs font-medium flex items-center justify-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{t('بوابة الموكلين المشفرة (Client Vault)', 'Client Vault Access')}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
