import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Trophy, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import { LANDMARK_CASES } from '../data/firmData';

export const CaseStudies: React.FC = () => {
  const { isAr, t } = useLanguage();

  return (
    <section id="landmark-cases" className="py-24 bg-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A48]/10 border border-[#C69A48]/30 text-[#DFBA6E] text-xs font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>{t('سجل النجاحات والإنجازات المشهودة', 'Landmark Precedents & Victories')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-amiri block">{t('سجل النزاعات والصفقات الكبرى', 'Proven Track Record')}</span>
            <span className="gold-gradient-text font-cinzel text-2xl sm:text-3xl md:text-4xl">
              {t('إرساء مبادئ قضائية وحماية استثمارات بمليارات الليرات والدولارات', 'Formidable Precedents & Multi-Million Dollar Triumphs')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-tajawal">
            {t(
              'نماذج مختارة من القضايا والنزاعات التي أدارها مكتبنا بنجاح تام، مع الالتزام التام بالسرية المهنية وفق قانون تنظيم مهنة المحاماة في سوريا.',
              'Selected high-impact cases and arbitral proceedings successfully steered by Papinian, honoring client anonymity in strict accordance with the Syrian Bar Ethics.'
            )}
          </p>
        </div>

        {/* Landmark Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LANDMARK_CASES.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0D1626] to-[#0A111F] border border-[#C69A48]/35 hover:border-[#DFBA6E] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#C69A48]/10 flex flex-col justify-between group"
            >
              <div>
                {/* Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C69A48]/15 text-[#DFBA6E] border border-[#C69A48]/30">
                    {isAr ? item.categoryAr : item.categoryEn}
                  </span>
                  <div className="text-base sm:text-lg font-cinzel font-bold text-white bg-black/40 px-3 py-1 rounded-lg border border-slate-800">
                    {isAr ? item.valueAr : item.valueEn}
                  </div>
                </div>

                {/* Case Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-[#DFBA6E] transition-colors leading-snug">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>

                {/* Challenge Summary */}
                <div className="mb-4 text-xs sm:text-sm text-slate-300 font-tajawal leading-relaxed">
                  <span className="font-bold text-slate-200 block mb-1">
                    {t('طبيعة النزاع والصفقة:', 'Matter Overview:')}
                  </span>
                  {isAr ? item.summaryAr : item.summaryEn}
                </div>

                {/* Outcome Badge */}
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 mb-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-emerald-300 block mb-0.5">
                        {t('النتيجة والحكم الصادر:', 'Outcome & Judgment:')}
                      </span>
                      <p className="text-xs text-emerald-200/90 font-tajawal leading-relaxed">
                        {isAr ? item.resultAr : item.resultEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jurisdiction Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#C69A48] shrink-0" />
                <span className="truncate">{isAr ? item.jurisdictionAr : item.jurisdictionEn}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Confidentiality Notice */}
        <div className="mt-12 p-4 rounded-xl bg-[#0D1626]/60 border border-slate-800 text-center max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-[#C69A48] shrink-0" />
          <span>
            {t(
              'حفاظاً على أسرار الموكلين، تم حجب الأسماء التجارية الصريحة وفق المادة 56 من قانون تنظيم مهنة المحاماة السوري رقم 30 لعام 2010.',
              'Pursuant to Article 56 of the Syrian Legal Practice Code, commercial client identities are anonymized for confidentiality.'
            )}
          </span>
        </div>

      </div>
    </section>
  );
};
