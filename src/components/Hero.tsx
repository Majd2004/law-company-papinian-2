import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  PhoneCall,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { FIRM_STATISTICS, OFFICE_INFO } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExplorePractices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExplorePractices }) => {
  const { isAr, t } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Image & Opulent Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/papinian-hero.jpg"
          alt="Papinian Law Firm Damascus"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multi-layered luxury gradients for supreme readability & atmospheric prestige */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/85 to-[#070D18]/70"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#070D18]/60 to-[#070D18]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-transparent to-[#070D18]/90"></div>
      </div>

      {/* Decorative Gold Light Beams & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C69A48]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Syrian & International Prestige Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1A263E]/90 to-[#0D1626]/90 border border-[#C69A48]/40 shadow-lg backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFBA6E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C69A48]"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold tracking-wide text-[#DFBA6E]">
              {t(
                'المكتب القانوني الأول في دمشق لقانون الشركات والتحكيم الدولي',
                'Damascus Premier Law Firm for Corporate Advisory & International Arbitration'
              )}
            </span>
          </div>

          {/* Majestic Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight md:leading-snug mb-6">
            <span className="block font-amiri md:text-5xl lg:text-6xl font-bold mb-2">
              {t(
                'إرث الفقه السوري العريق..',
                'The Syrian Heritage of Jurisprudence..'
              )}
            </span>
            <span className="gold-gradient-text font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl block">
              {t(
                'ريادة عالمية في المحاماة والعدالة',
                'Excellence in Corporate & Appellate Law'
              )}
            </span>
          </h1>

          {/* Lead Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-3xl mx-auto mb-8 font-tajawal">
            {t(
              'تأسست شركة بابينيان للمحاماة في دمشق لتجمع بين عمق التراث الحقوقي السوري وأرفع الممارسات القانونية الدولية. نمثل كبرى الشركات متعددة الجنسيات، والكيانات الصناعية، والمستثمرين، في صياغة الصفقات الاستراتيجية، وإدارة التحكيم الدولي المعقد، والتقاضي أمام محكمة النقض.',
              'Founded in Damascus to bridge Syrian legal jurisprudence with global standards. We represent multinational corporations, industrial conglomerates, and visionary investors in strategic transactions, cross-border arbitrations, and high-stakes cassation litigation.'
            )}
          </p>

          {/* Classical Quote Badge */}
          <div className="max-w-2xl mx-auto mb-10 p-4 rounded-xl bg-gradient-to-r from-[#0D1626]/80 via-[#142036]/80 to-[#0D1626]/80 border-y border-[#C69A48]/30 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2 text-[#DFBA6E] text-xs md:text-sm font-cinzel italic tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C69A48]" />
              <span>"Non omne quod licet honestum est"</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C69A48]" />
            </div>
            <p className="text-xs md:text-sm text-slate-300 font-amiri text-center">
              {t(
                '«ليس كل ما يجيزه نص القانون يتوافق مع الشرف والأخلاق والعدالة الحقة» — الفقيه السوري الروماني إميليوس بابينيانوس (142 - 212 م)',
                '“Not everything permitted by the strict letter of the law is honorable and just” — Roman-Syrian Master Jurist Papinian'
              )}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-sm md:text-base text-[#070D18] bg-gradient-to-r from-[#DFBA6E] via-[#D4AF37] to-[#C69A48] hover:from-[#F4D078] hover:to-[#DFBA6E] shadow-xl shadow-[#C69A48]/25 transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              <span>{t('حجز استشارة قانونية رفيعة المستوى', 'Schedule a Private Consultation')}</span>
              <ArrowIcon className="w-5 h-5" />
            </button>

            <button
              onClick={onExplorePractices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg font-semibold text-sm md:text-base text-slate-200 bg-[#0D1626]/80 hover:bg-[#142036] border border-[#C69A48]/40 hover:border-[#DFBA6E] shadow-lg backdrop-blur-md transition-all cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#DFBA6E]" />
              <span>{t('استكشف مجالات الممارسة', 'Explore Practice Areas')}</span>
            </button>

            <a
              href={`https://wa.me/${OFFICE_INFO.mobileWhatsapp.replace(/\s+/g, '').replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-lg font-medium text-xs md:text-sm text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t('واتساب الطوارئ المباشر', 'Urgent WhatsApp Hotline')}</span>
            </a>
          </div>

          {/* Key Syrian Highlights Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-start mb-12">
            {[
              { textAr: 'قيد رسمي لدى نقابة المحامين بدمشق', textEn: 'Syrian Bar Association Certified' },
              { textAr: 'تمثيل أمام محكمة النقض ومجلس الدولة', textEn: 'Supreme Cassation & State Council' },
              { textAr: 'محكّمون معتمدون لدى هيئة ICC Paris', textEn: 'Accredited ICC Paris Arbitrators' },
              { textAr: 'خبراء قانون الاستثمار السوري رقم 18', textEn: 'Investment Law No. 18 Specialists' },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0D1626]/60 border border-white/5 backdrop-blur-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#DFBA6E] shrink-0" />
                <span className="text-xs text-slate-300 font-medium">
                  {isAr ? badge.textAr : badge.textEn}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Firm Statistics Ticker Bar */}
        <div className="relative mt-4 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#0B1220]/90 via-[#0D1626]/95 to-[#0B1220]/90 border border-[#C69A48]/30 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-[#C69A48]/15">
            {FIRM_STATISTICS.map((stat, i) => (
              <div key={i} className={`text-center ${i > 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold gold-gradient-text mb-1">
                  {isAr ? stat.valueAr : stat.valueEn}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium font-tajawal">
                  {isAr ? stat.labelAr : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
