import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUp 
} from 'lucide-react';
import { PRACTICE_AREAS, OFFICE_INFO } from '../data/firmData';

export const Footer: React.FC = () => {
  const { isAr, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050912] text-slate-400 text-xs border-t border-[#C69A48]/20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Legacy (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1A263E] to-[#0D1626] border border-[#C69A48]/50 flex items-center justify-center text-[#DFBA6E]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-white">
                  PAPINIAN
                </span>
                <p className="text-[11px] font-amiri text-[#DFBA6E] leading-tight">
                  {t('شركة بابينيان للمحاماة والاستشارات القانونية', 'Papinian Law Firm & Legal Consultations')}
                </p>
              </div>
            </div>

            <p className="text-slate-400 font-tajawal leading-relaxed text-xs">
              {t(
                'شركة محاماة سورية رائدة متخصصة في قانون الشركات، الاستثمار الأجنبي، التحكيم التجاري والدولي، والتقاضي أمام محكمة النقض ومجلس الدولة بدمشق.',
                'Syria’s premier corporate law and international arbitration firm, counseling high-value ventures, foreign investors, and supreme court appellate cases in Damascus.'
              )}
            </p>

            <div className="p-3 rounded-lg bg-[#0D1626] border border-[#C69A48]/30">
              <span className="font-cinzel text-[#DFBA6E] text-[11px] block font-bold">
                NON OMNE QUOD LICET HONESTUM EST
              </span>
              <p className="text-[11px] text-slate-300 font-amiri mt-0.5">
                {t(
                  '«ليس كل ما يجيزه القانون يتوافق مع الشرف والأخلاق» — الفقيه السوري بابينيان',
                  '“Not everything permitted by law is honorable” — Jurist Papinian'
                )}
              </p>
            </div>
          </div>

          {/* Col 2: Practice Areas Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider pb-1 border-b border-slate-800 text-[#DFBA6E]">
              {t('مجالات الممارسة الرئيسية', 'Key Practice Sectors')}
            </h4>
            <ul className="space-y-2">
              {PRACTICE_AREAS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <a
                    href="#practice-areas"
                    className="hover:text-[#DFBA6E] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C69A48]"></span>
                    <span className="truncate">{isAr ? p.titleAr : p.titleEn}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Digest (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider pb-1 border-b border-slate-800 text-[#DFBA6E]">
              {t('روابط هامة', 'Navigation')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#heritage" className="hover:text-[#DFBA6E] transition-colors">
                  {t('إرث بابينيان السوري', 'Papinian Legacy')}
                </a>
              </li>
              <li>
                <a href="#attorneys" className="hover:text-[#DFBA6E] transition-colors">
                  {t('نخبة المحامين والشركاء', 'Senior Partners')}
                </a>
              </li>
              <li>
                <a href="#landmark-cases" className="hover:text-[#DFBA6E] transition-colors">
                  {t('سجل النزاعات والصفقات', 'Landmark Precedents')}
                </a>
              </li>
              <li>
                <a href="#legal-guide" className="hover:text-[#DFBA6E] transition-colors">
                  {t('دليل المستثمر في سوريا', 'Syrian Legal Digest')}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#DFBA6E] transition-colors">
                  {t('حاسبة الرسوم القضائية', 'Fee Estimator')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Damascus Contact & Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider pb-1 border-b border-slate-800 text-[#DFBA6E]">
              {t('ديوان دمشق والتواصل', 'Damascus Chambers')}
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C69A48] shrink-0 mt-0.5" />
                <span>{t('دمشق - أوتوستراد المزة، برج الفردوس الاستثماري، ط 8', 'Damascus - Mazzeh Hwy, Al-Fardous Tower, 8th Fl')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C69A48] shrink-0" />
                <span dir="ltr">{OFFICE_INFO.phonePrimary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C69A48] shrink-0" />
                <span>{OFFICE_INFO.email}</span>
              </div>
              <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px]">
                {t('خط الطوارئ القضائي 24/7:', '24/7 Emergency Line:')}{' '}
                <span dir="ltr" className="font-bold">{OFFICE_INFO.mobileWhatsapp}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div className="flex items-center gap-2 text-center md:text-start">
            <ShieldCheck className="w-4 h-4 text-[#C69A48]" />
            <span>
              {t(
                'شركة بابينيان للمحاماة - معتمدة ومسجلة لدى نقابة المحامين في الجمهورية العربية السورية (فرع دمشق).',
                'Papinian Law Firm - Duly chartered & licensed by the Syrian Bar Association (Damascus Chapter).'
              )}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} PAPINIAN Law Firm Damascus. All Rights Reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-[#C69A48]/20 text-[#DFBA6E] hover:text-white transition-colors cursor-pointer"
              title={t('العودة لأعلى الصفحة', 'Back to Top')}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
