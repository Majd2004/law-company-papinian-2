import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  Scale, 
  Landmark, 
  ShieldCheck, 
  Award, 
  FileText, 
  Gavel, 
  Briefcase, 
  ChevronRight, 
  ChevronLeft,
  X,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectPracticeForConsultation: (practiceTitle: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPracticeForConsultation }) => {
  const { isAr, t } = useLanguage();
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Scale': return <Scale className="w-6 h-6" />;
      case 'Landmark': return <Landmark className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Gavel': return <Gavel className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      default: return <Scale className="w-6 h-6" />;
    }
  };

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    if (filter === 'all') return true;
    if (filter === 'corporate') return ['corporate-investment', 'banking-tax', 'family-wealth-succession'].includes(area.id);
    if (filter === 'disputes') return ['arbitration-dispute', 'cassation-litigation', 'economic-crimes'].includes(area.id);
    if (filter === 'property') return ['real-estate-fidic', 'intellectual-property'].includes(area.id);
    return true;
  });

  return (
    <section id="practice-areas" className="py-24 bg-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A48]/10 border border-[#C69A48]/30 text-[#DFBA6E] text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>{t('تخصصات نوعية رفيعة المستوى', 'Comprehensive Practice Areas')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-amiri block">{t('مجالات الممارسة القانونية', 'Areas of Legal Practice')}</span>
            <span className="gold-gradient-text font-cinzel text-2xl sm:text-3xl md:text-4xl">
              {t('حلول قضائية وتشريعية متكاملة للمؤسسات', 'Strategic Counsel for Enterprises & High-Stakes Matters')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-tajawal">
            {t(
              'تغطي خدمات شركة بابينيان أدق قطاعات الأعمال والاستثمار في سوريا، مدعومة بخبرات عملية أمام المحاكم السورية وهيئات التحكيم الدولية.',
              'Papinian Law Firm delivers multi-disciplinary legal excellence across vital sectors in Syria, fortified by decades before courts and international arbitration panels.'
            )}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', labelAr: 'كافة التخصصات (8)', labelEn: 'All Sectors (8)' },
            { id: 'corporate', labelAr: 'الشركات والاستثمار والمصارف', labelEn: 'Corporate & Finance' },
            { id: 'disputes', labelAr: 'التحكيم والتقاضي والنقض', labelEn: 'Arbitration & Litigation' },
            { id: 'property', labelAr: 'العقارات والملكية الفكرية', labelEn: 'Real Estate & IP' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                filter === item.id
                  ? 'bg-gradient-to-r from-[#DFBA6E] to-[#C69A48] text-[#070D18] shadow-md shadow-[#C69A48]/20'
                  : 'bg-[#0D1626] text-slate-300 hover:text-white border border-slate-800 hover:border-[#C69A48]/40'
              }`}
            >
              {isAr ? item.labelAr : item.labelEn}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between glass-card-hover border border-slate-800/80 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A263E] to-[#0D1626] border border-[#C69A48]/40 text-[#DFBA6E] flex items-center justify-center mb-5 group-hover:border-[#DFBA6E] group-hover:scale-105 transition-all shadow-md">
                  {getIcon(area.iconName)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#DFBA6E] transition-colors">
                  {isAr ? area.titleAr : area.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-tajawal mb-4">
                  {isAr ? area.summaryAr : area.summaryEn}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedPractice(area)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#DFBA6E] hover:text-white py-1 transition-colors cursor-pointer"
                >
                  <span>{t('تفاصيل الإطار القانوني والخدمات', 'View Legal Scope & Framework')}</span>
                  <ChevronIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Practice Area Detail Modal */}
      {selectedPractice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B1322] border border-[#C69A48]/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPractice(null)}
              className="absolute top-5 left-5 rtl:left-auto rtl:right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6 pt-2">
              <div className="w-14 h-14 rounded-xl bg-[#142036] border border-[#C69A48]/50 text-[#DFBA6E] flex items-center justify-center shrink-0">
                {getIcon(selectedPractice.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#DFBA6E] font-semibold">
                  {t('الممارسة القانونية التخصصية', 'Specialized Practice Sector')}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {isAr ? selectedPractice.titleAr : selectedPractice.titleEn}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 bg-[#070D18] p-4 rounded-xl border border-slate-800">
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-tajawal">
                {isAr ? selectedPractice.fullDescAr : selectedPractice.fullDescEn}
              </p>
            </div>

            {/* Syrian Statutory Framework Banner */}
            <div className="mb-6 p-3.5 rounded-lg bg-[#C69A48]/10 border border-[#C69A48]/30 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-[#DFBA6E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#DFBA6E] uppercase mb-0.5">
                  {t('الإطار التشريعي السوري الناظم', 'Applicable Syrian Legal Codes')}
                </h4>
                <p className="text-xs text-slate-300 font-mono">
                  {isAr ? selectedPractice.syrianLegalFrameworkAr : selectedPractice.syrianLegalFrameworkEn}
                </p>
              </div>
            </div>

            {/* Key Services Roster */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-white mb-3">
                {t('نطاق الخدمات والتمثيل القانوني:', 'Key Representation Scope:')}
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {(isAr ? selectedPractice.keyServicesAr : selectedPractice.keyServicesEn).map((srv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0E1729] border border-slate-800/80 text-xs md:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#DFBA6E] shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedPractice(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors"
              >
                {t('إغلاق النافذة', 'Close')}
              </button>
              <button
                onClick={() => {
                  const title = isAr ? selectedPractice.titleAr : selectedPractice.titleEn;
                  setSelectedPractice(null);
                  onSelectPracticeForConsultation(title);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm text-[#070D18] bg-gradient-to-r from-[#DFBA6E] to-[#C69A48] hover:from-[#F4D078] hover:to-[#DFBA6E] shadow-lg shadow-[#C69A48]/20 transition-all cursor-pointer"
              >
                {t('طلب استشارة في هذا التخصص', 'Request Consultation in this Field')}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
