import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  FileText, 
  Bookmark, 
  Share2
} from 'lucide-react';
import { LEGAL_GUIDES, LegalGuide } from '../data/firmData';

export const SyrianLegalGuide: React.FC = () => {
  const { isAr, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<LegalGuide | null>(null);
  const [copied, setCopied] = useState(false);

  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  const filteredGuides = LEGAL_GUIDES.filter((guide) => {
    const q = searchTerm.toLowerCase();
    const matchAr = guide.titleAr.toLowerCase().includes(q) || guide.category.toLowerCase().includes(q) || guide.excerptAr.toLowerCase().includes(q);
    const matchEn = guide.titleEn.toLowerCase().includes(q) || guide.category.toLowerCase().includes(q) || guide.excerptEn.toLowerCase().includes(q);
    return isAr ? matchAr : matchEn;
  });

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="legal-guide" className="py-24 bg-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A48]/10 border border-[#C69A48]/30 text-[#DFBA6E] text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('الموسوعة القانونية والمعرفية', 'Syrian Legal Digest & Insights')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-amiri block">{t('الدليل القانوني للمستثمر في سوريا', 'Investor’s Legal Compendium')}</span>
            <span className="gold-gradient-text font-cinzel text-2xl sm:text-3xl md:text-4xl">
              {t('تحليلات تشريعية معاصرة من نخبة المحامين', 'Authoritative Syrian Statutes & Practice Notes')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-tajawal">
            {t(
              'أوراق عمل وإضاءات فقهية دورية يُعدها شركاء شركة بابينيان لمواكبة أحدث القوانين والمراسيم السورية الصادرة.',
              'Periodic whitepapers and statutory analyses authored by Papinian partners covering key Syrian investment, corporate, and procedural codes.'
            )}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 left-4 rtl:left-auto rtl:right-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('ابحث في الدليل القانوني (مثل: قانون الاستثمار 18، تأسيس الشركات، التحكيم)...', 'Search legal guides (e.g. Investment Law, Incorporation, Arbitration)...')}
              className="w-full pl-12 pr-4 rtl:pr-12 rtl:pl-4 py-3.5 rounded-xl bg-[#0D1626] border border-slate-700 text-sm text-white placeholder-slate-500 focus:border-[#DFBA6E] focus:ring-1 focus:ring-[#DFBA6E] outline-none shadow-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute top-1/2 -translate-y-1/2 right-4 rtl:right-auto rtl:left-4 text-xs text-slate-400 hover:text-white"
              >
                {t('مسح', 'Clear')}
              </button>
            )}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between glass-card-hover border border-slate-800/80 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-1 rounded bg-[#C69A48]/15 text-[#DFBA6E] font-medium border border-[#C69A48]/30">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{isAr ? guide.readTimeAr : guide.readTimeEn}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[#DFBA6E] transition-colors leading-snug">
                  {isAr ? guide.titleAr : guide.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-tajawal mb-4">
                  {isAr ? guide.excerptAr : guide.excerptEn}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono truncate max-w-[200px]">
                  {isAr ? guide.lawRefAr : guide.lawRefEn}
                </span>
                <button
                  onClick={() => setSelectedGuide(guide)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DFBA6E] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{t('قراءة التحليل الكامل', 'Read Full Analysis')}</span>
                  <ChevronIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Guide Reader Modal */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B1322] border border-[#C69A48]/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 relative">
            
            <button
              onClick={() => setSelectedGuide(null)}
              className="absolute top-5 left-5 rtl:left-auto rtl:right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pt-2 mb-6">
              <div className="flex items-center gap-3 text-xs text-[#DFBA6E] mb-2 font-semibold">
                <Bookmark className="w-3.5 h-3.5" />
                <span>{selectedGuide.category}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{isAr ? selectedGuide.readTimeAr : selectedGuide.readTimeEn}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                {isAr ? selectedGuide.titleAr : selectedGuide.titleEn}
              </h3>
            </div>

            {/* Statutory Reference Box */}
            <div className="p-4 rounded-xl bg-[#070D18] border border-[#C69A48]/30 mb-6 flex items-start gap-3">
              <FileText className="w-5 h-5 text-[#DFBA6E] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-[#DFBA6E] uppercase block mb-0.5">
                  {t('السند التشريعي السوري:', 'Syrian Statutory Authority:')}
                </span>
                <p className="text-xs text-slate-300 font-mono">
                  {isAr ? selectedGuide.lawRefAr : selectedGuide.lawRefEn}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="prose prose-invert max-w-none text-slate-300 text-sm md:text-base leading-relaxed space-y-4 font-tajawal mb-8">
              <p>{isAr ? selectedGuide.contentAr : selectedGuide.contentEn}</p>
              <p className="text-slate-400 text-xs md:text-sm italic">
                {t(
                  'تنبيه قانوني: هذا التحليل مخصص للتوعية الاستثمارية العامة، ولا يُغني عن طلب رأي قانوني مخصص لظروف التعاقد المحددة من محامي الشركة المعتمدين.',
                  'Legal Disclaimer: This digest is published for general executive awareness and does not substitute for customized counsel from Papinian designated partners.'
                )}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-[#DFBA6E] transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? t('تم نسخ الرابط!', 'Link Copied!') : t('مشاركة التحليل', 'Share Brief')}</span>
              </button>

              <button
                onClick={() => setSelectedGuide(null)}
                className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
              >
                {t('إغلاق', 'Close')}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
