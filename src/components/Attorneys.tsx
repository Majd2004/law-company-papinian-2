import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  GraduationCap, 
  Award, 
  Globe, 
  X, 
  ShieldCheck, 
  UserCheck, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { ATTORNEYS, Attorney } from '../data/firmData';

interface AttorneysProps {
  onBookPartnerMeeting: (partnerName: string) => void;
}

export const Attorneys: React.FC<AttorneysProps> = ({ onBookPartnerMeeting }) => {
  const { isAr, t } = useLanguage();
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(null);

  return (
    <section id="attorneys" className="py-24 bg-[#09101E] relative border-t border-b border-[#C69A48]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A48]/10 border border-[#C69A48]/30 text-[#DFBA6E] text-xs font-semibold mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>{t('نخبة من كبار المحامين والمستشارين', 'Senior Partners & Leadership')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-amiri block">{t('فريق القيادة والشركاء', 'Distinguished Legal Counsel')}</span>
            <span className="gold-gradient-text font-cinzel text-2xl sm:text-3xl md:text-4xl">
              {t('كفاءات سورية معتمدة محلياً ودولياً', 'Syrian Mastery & International Standing')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-tajawal">
            {t(
              'يقود شركة بابينيان نخبة من قضاة الاستئناف السابقين ومحامي محكمة النقض وحملة الدكتوراه من جامعات دمشق والسوربون ولندن، ملتزمين بأعلى درجات السرية والاحتراف.',
              'Papinian is steered by former appellate judges, Supreme Cassation advocates, and scholars from Damascus University, the Sorbonne, and King’s College London.'
            )}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATTORNEYS.map((attorney) => (
            <div
              key={attorney.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between glass-card-hover border border-slate-800/90 group"
            >
              <div>
                {/* Attorney Image */}
                <div className="relative h-64 overflow-hidden bg-[#070D18]">
                  <img
                    src={attorney.image}
                    alt={isAr ? attorney.nameAr : attorney.nameEn}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1626] via-transparent to-transparent"></div>
                  
                  {/* Bar License Tag */}
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 px-2 py-1 rounded bg-[#070D18]/90 border border-[#C69A48]/40 text-[10px] text-[#DFBA6E] font-mono">
                    {attorney.barNumber}
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#DFBA6E] transition-colors leading-tight mb-1">
                    {isAr ? attorney.nameAr : attorney.nameEn}
                  </h3>
                  <p className="text-xs text-[#DFBA6E] font-semibold mb-2">
                    {isAr ? attorney.titleAr : attorney.titleEn}
                  </p>
                  <p className="text-xs text-slate-400 font-tajawal leading-relaxed line-clamp-3 mb-3">
                    {isAr ? attorney.bioAr : attorney.bioEn}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedAttorney(attorney)}
                  className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-[#C69A48]/15 border border-[#C69A48]/30 hover:border-[#DFBA6E] text-xs font-semibold text-slate-200 hover:text-[#DFBA6E] transition-all cursor-pointer"
                >
                  {t('استعراض السيرة والاعتمادات', 'View Credentials & Bio')}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Attorney Full Profile Modal */}
      {selectedAttorney && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B1322] border border-[#C69A48]/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedAttorney(null)}
              className="absolute top-5 left-5 rtl:left-auto rtl:right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 pt-2 pb-6 border-b border-slate-800">
              <img
                src={selectedAttorney.image}
                alt={isAr ? selectedAttorney.nameAr : selectedAttorney.nameEn}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-[#C69A48]/60 shadow-lg"
              />
              <div className="text-center sm:text-start">
                <div className="inline-block text-[11px] font-bold text-[#DFBA6E] uppercase tracking-wider mb-1">
                  {selectedAttorney.barNumber}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {isAr ? selectedAttorney.nameAr : selectedAttorney.nameEn}
                </h3>
                <p className="text-xs sm:text-sm text-[#DFBA6E] font-medium mb-2">
                  {isAr ? selectedAttorney.titleAr : selectedAttorney.titleEn}
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-[#C69A48]" />
                    <span>{(isAr ? selectedAttorney.languagesAr : selectedAttorney.languagesEn).join(' • ')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="mb-6 bg-[#070D18] p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold text-[#DFBA6E] uppercase mb-2">
                {t('نبذة مهنية وإنجازات', 'Professional Overview')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-tajawal">
                {isAr ? selectedAttorney.bioAr : selectedAttorney.bioEn}
              </p>
            </div>

            {/* Academic Credentials */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-white uppercase mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#DFBA6E]" />
                <span>{t('المؤهلات العلمية والشهادات العليا:', 'Academic Degrees & Certifications:')}</span>
              </h4>
              <div className="space-y-2">
                {(isAr ? selectedAttorney.educationAr : selectedAttorney.educationEn).map((deg, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0E1729] border border-slate-800 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#DFBA6E] shrink-0 mt-0.5" />
                    <span>{deg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bar & Tribunal Memberships */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-white uppercase mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#DFBA6E]" />
                <span>{t('النقابات والهيئات القضائية والدولية:', 'Bar Associations & Arbitral Memberships:')}</span>
              </h4>
              <div className="space-y-2">
                {(isAr ? selectedAttorney.membershipsAr : selectedAttorney.membershipsEn).map((mem, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0E1729] border border-slate-800 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#DFBA6E] shrink-0 mt-0.5" />
                    <span>{mem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedAttorney(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white border border-slate-700 transition-colors"
              >
                {t('إغلاق', 'Close')}
              </button>
              <button
                onClick={() => {
                  const name = isAr ? selectedAttorney.nameAr : selectedAttorney.nameEn;
                  setSelectedAttorney(null);
                  onBookPartnerMeeting(name);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm text-[#070D18] bg-gradient-to-r from-[#DFBA6E] to-[#C69A48] hover:from-[#F4D078] hover:to-[#DFBA6E] shadow-lg shadow-[#C69A48]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t('طلب موعد مباشر مع الشريك في دمشق', 'Book Private Session with Partner')}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
