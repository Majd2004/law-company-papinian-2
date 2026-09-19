import React, { useState, useId } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Calculator, 
  Clock, 
  Coins, 
  FileCheck2, 
  HelpCircle, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface LegalEstimatorProps {
  onProceedToBooking: (details: { service: string; estimatedBudget: string }) => void;
}

export const LegalEstimator: React.FC<LegalEstimatorProps> = ({ onProceedToBooking }) => {
  const { isAr, t } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const currencySelectId = useId();
  const matterTypeSelectId = useId();
  const urgencySelectId = useId();

  const [serviceType, setServiceType] = useState<'incorporation' | 'arbitration' | 'litigation' | 'trademark' | 'realestate' | 'tax'>('incorporation');
  const [currency, setCurrency] = useState<'SYP' | 'USD'>('SYP');
  const [capitalScale, setCapitalScale] = useState<number>(2); // 1: small, 2: medium, 3: large, 4: enterprise
  const [urgency, setUrgency] = useState<'standard' | 'expedited' | 'emergency'>('standard');

  // Estimate calculations based on actual Syrian practice parameters
  const getCalculatedData = () => {
    let baseGovFeesSYP = 15000000;
    let baseGovFeesUSD = 1100;
    let baseTime = isAr ? '15 - 25 يوم عمل' : '15 - 25 business days';
    let docsAr = ['صورة الهويات وجوازات السفر للشركاء', 'سند إثبات مقر الشركة في دمشق أو المحافظات', 'عقد الإيجار الموثق والموافقة الأمنية للشركاء الأجانب'];
    let docsEn = ['Partner National IDs & Passports', 'Registered Office Lease/Deed in Damascus', 'Notarized Articles of Association & Security Clearance'];

    switch (serviceType) {
      case 'incorporation':
        baseGovFeesSYP = 18000000 * capitalScale;
        baseGovFeesUSD = 1200 * capitalScale;
        baseTime = urgency === 'emergency' ? (isAr ? '5 - 8 أيام عمل' : '5 - 8 business days') : (isAr ? '12 - 20 يوم عمل' : '12 - 20 business days');
        docsAr = ['الهويات وجوازات السفر للشركاء والمفوضين', 'سند مقر الشركة أو عقد إيجار مصدق بدمشق', 'إشعار إيداع رأس المال بأحد المصارف السورية'];
        docsEn = ['IDs/Passports of shareholders & directors', 'Registered tenancy agreement in Damascus', 'Bank deposit certificate in Syrian Bank'];
        break;
      case 'arbitration':
        baseGovFeesSYP = 45000000 * capitalScale;
        baseGovFeesUSD = 3500 * capitalScale;
        baseTime = isAr ? '3 - 6 أشهر (بحسب شرط التحكيم)' : '3 - 6 months (arbitral schedule)';
        docsAr = ['العقد الأساسي متضمناً شرط التحكيم الصريح', 'المراسلات والإخطارات المتبادلة ومحاضر التسليم', 'بيان بالطلبات المالية والأضرار مع تقارير الخبراء'];
        docsEn = ['Principal contract with arbitration clause', 'Notices, correspondence & default logs', 'Itemized damages schedule & expert reports'];
        break;
      case 'litigation':
        baseGovFeesSYP = 25000000 * capitalScale;
        baseGovFeesUSD = 1800 * capitalScale;
        baseTime = isAr ? 'بحسب دور أدوار محكمة النقض / الاستئناف' : 'Per Damascus Court docket schedules';
        docsAr = ['وكالة قضائية مصدقة من نقابة المحامين', 'الأحكام الابتدائية والاستئنافية ومحاضر الجلسات', 'لائحة الطعن والمستندات المؤيدة للدفوع'];
        docsEn = ['Syrian Bar Notarized Power of Attorney', 'Prior lower court decrees & hearing minutes', 'Grounds for appeal & legal citations'];
        break;
      case 'trademark':
        baseGovFeesSYP = 8500000 * capitalScale;
        baseGovFeesUSD = 650 * capitalScale;
        baseTime = isAr ? '20 - 45 يوم عمل (شاملة النشر بالجريدة الرسمية)' : '20 - 45 business days (incl. Official Gazette)';
        docsAr = ['صورة عالية الدقة للعلامة التجارية أو الشعار', 'بيان بالسلع والخدمات وفق تصنيف نيس الدولي', 'سجل تجاري للشركة أو شهادة تسجيل أجنبية مصدقة'];
        docsEn = ['High-resolution trademark artwork/logo', 'Nice Classification specification', 'Corporate commercial registry with apostille'];
        break;
      case 'realestate':
        baseGovFeesSYP = 30000000 * capitalScale;
        baseGovFeesUSD = 2200 * capitalScale;
        baseTime = isAr ? '10 - 20 يوم عمل' : '10 - 20 business days';
        docsAr = ['إخراج قيد عقاري حديث من المصالح العقارية', 'بيان مساحي ومخطط إفراز معتمد', 'براءة ذمة مالية وموافقة ترخيص البيع الرسمية'];
        docsEn = ['Recent Land Registry official extract', 'Cadastral demarcation survey chart', 'Municipal clearance and tax compliance cert'];
        break;
      case 'tax':
        baseGovFeesSYP = 20000000 * capitalScale;
        baseGovFeesUSD = 1500 * capitalScale;
        baseTime = isAr ? '30 - 60 يوماً أمام لجان إعادة النظر الضريبية' : '30 - 60 days before Syrian Tax Review Board';
        docsAr = ['الدفاتر المحاسبية والميزانيات المعتمدة', 'تكاليف ضريبة الدخل والإنفاق الاستهلاكي المعترض عليها', 'المذكرات الإيضاحية والفواتير الثبوتية'];
        docsEn = ['Audited financial ledgers & balance sheets', 'Contested tax assessment decrees', 'Explanatory accounting logs & proofs'];
        break;
    }

    const urgencyMultiplier = urgency === 'emergency' ? 1.4 : urgency === 'expedited' ? 1.2 : 1.0;
    const finalGovFeesSYP = Math.round(baseGovFeesSYP * urgencyMultiplier);
    const finalGovFeesUSD = Math.round(baseGovFeesUSD * urgencyMultiplier);

    return {
      govFeesSYP: finalGovFeesSYP.toLocaleString('ar-SY') + ' ل.س',
      govFeesUSD: '$' + finalGovFeesUSD.toLocaleString('en-US'),
      estimatedTimeline: baseTime,
      requiredDocs: isAr ? docsAr : docsEn,
      retainerBracketAr: capitalScale === 1 ? 'فئة الأعمال المبدئية والناشئة' : capitalScale === 2 ? 'فئة الشركات والمشاريع المتوسطة' : 'فئة كبرى الشركات والمستثمرين الاستراتيجيين',
      retainerBracketEn: capitalScale === 1 ? 'Standard Starter Tier' : capitalScale === 2 ? 'Mid-Market Enterprise Tier' : 'High-Value Institutional Tier',
    };
  };

  const calculated = getCalculatedData();

  const servicesList = [
    { id: 'incorporation', labelAr: 'تأسيس وترخيص شركة (ذ.م.م / مساهمة)', labelEn: 'Company Incorporation (LLC / JSC)' },
    { id: 'arbitration', labelAr: 'تحكيم تجاري دولي أو محلي', labelEn: 'International / Commercial Arbitration' },
    { id: 'litigation', labelAr: 'مرافعة أمام محكمة النقض أو الاستئناف', labelEn: 'Supreme Court & Appellate Litigation' },
    { id: 'trademark', labelAr: 'تسجيل وحماية علامة تجارية أو براءة', labelEn: 'Trademark & IP Filing / Defense' },
    { id: 'realestate', labelAr: 'توثيق صفقة عقارية وفحص قيود السجل', labelEn: 'Real Estate Title Search & Closing' },
    { id: 'tax', labelAr: 'اعتراض ضريبي ونزاع جمركي مؤسسي', labelEn: 'Tax Assessment Appeal & Customs' },
  ];

  return (
    <section id="estimator" className="py-24 bg-[#0A111F] relative overflow-hidden border-t border-b border-[#C69A48]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A48]/10 border border-[#C69A48]/30 text-[#DFBA6E] text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('أداة تفاعلية للمستثمرين والشركات', 'Interactive Client Tool')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-amiri block">{t('حاسبة الرسوم والتقدير الأولي', 'Legal Fee & Court Estimator')}</span>
            <span className="gold-gradient-text font-cinzel text-2xl sm:text-3xl md:text-4xl">
              {t('تقدير شفاف للإجراءات القانونية في سوريا', 'Transparent Syrian Legal Cost & Procedure Projection')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-tajawal">
            {t(
              'احصل فوراً على تقدير أولي للرسوم الرسمية والطوابع والمدد الزمنية المتوقعة لقضيتك أو معاملتك في الدوائر القضائية والحكومية بدمشق.',
              'Generate an instant preliminary assessment of official registration stamps, court fees, and operational turnaround for your matter in Damascus.'
            )}
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0D1626]/90 border border-slate-800 shadow-xl space-y-6">
            
            {/* Step 1: Currency & Service */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#DFBA6E] text-[#070D18] flex items-center justify-center text-xs font-bold">1</span>
                {t('حدد نوع المعاملة أو النزاع القانوني:', 'Select Legal Matter Type:')}
              </span>
              
              {/* Currency Toggle */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#070D18] border border-slate-700">
                <label htmlFor={currencySelectId} className="sr-only">
                  {t('العملة', 'Currency')}
                </label>
                <select
                  id={currencySelectId}
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as any)}
                  className="bg-transparent text-xs text-[#DFBA6E] font-bold px-2 py-1 outline-none cursor-pointer"
                >
                  <option value="SYP" className="bg-[#070D18] text-white">ليرة سورية (SYP)</option>
                  <option value="USD" className="bg-[#070D18] text-white">دولار أمريكي (USD)</option>
                </select>
              </div>
            </div>

            {/* Matter Type Selector */}
            <div>
              <label htmlFor={matterTypeSelectId} className="block text-xs text-slate-400 mb-2">
                {t('نوع المعاملة أو النزاع القانوني', 'Matter Type')}
              </label>
              <select
                id={matterTypeSelectId}
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value as any)}
                className="w-full bg-[#070D18] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-medium focus:border-[#DFBA6E] outline-none"
              >
                {servicesList.map((srv) => (
                  <option key={srv.id} value={srv.id} className="bg-[#070D18] text-white">
                    {isAr ? srv.labelAr : srv.labelEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Scale / Value Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DFBA6E] text-[#070D18] flex items-center justify-center text-xs font-bold">2</span>
                  {t('حجم المعاملة / القيمة المتنازع عليها:', 'Transaction Scale / Dispute Magnitude:')}
                </span>
                <span className="text-xs font-semibold text-[#DFBA6E]">
                  {capitalScale === 1 && (currency === 'SYP' ? 'حتى 100 مليون ل.س' : 'Up to $25k USD')}
                  {capitalScale === 2 && (currency === 'SYP' ? '100 مليون – 1 مليار ل.س' : '$25k – $250k USD')}
                  {capitalScale === 3 && (currency === 'SYP' ? '1 مليار – 10 مليار ل.س' : '$250k – $1M USD')}
                  {capitalScale === 4 && (currency === 'SYP' ? 'أكثر من 10 مليار ل.س' : 'Exceeding $1M+ USD')}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={capitalScale}
                onChange={(e) => setCapitalScale(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#DFBA6E]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>{t('ناشئة / محدودة', 'Starter')}</span>
                <span>{t('متوسطة', 'Mid-scale')}</span>
                <span>{t('كبرى', 'High Value')}</span>
                <span>{t('مشاريع عملاقة / دولية', 'Institutional')}</span>
              </div>
            </div>

            {/* Urgency Selector */}
            <div>
              <label htmlFor={urgencySelectId} className="block text-xs sm:text-sm font-bold text-white mb-2">
                <span className="w-6 h-6 rounded-full bg-[#DFBA6E] text-[#070D18] inline-flex items-center justify-center text-xs font-bold mr-2 rtl:ml-2 rtl:mr-0">3</span>
                {t('درجة الاستعجال المطلوبة في دمشق:', 'Required Urgency Level:')}
              </label>
              <select
                id={urgencySelectId}
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as any)}
                className="w-full bg-[#070D18] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-medium focus:border-[#DFBA6E] outline-none"
              >
                <option value="standard" className="bg-[#070D18] text-white">
                  {t('مسار عادي (وفق المهل الإجرائية القانونية)', 'Standard Procedure')}
                </option>
                <option value="expedited" className="bg-[#070D18] text-white">
                  {t('مسار سريع ذو أولوية (Expedited)', 'Expedited Priority Fast-track')}
                </option>
                <option value="emergency" className="bg-[#070D18] text-white">
                  {t('طوارئ قصوى وقرارات حجز/وقف تنفيذ مستعجل 24/7', 'Emergency Injunction Dispatch (24/7)')}
                </option>
              </select>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-[#C69A48] shrink-0 mt-0.5" />
              <p>
                {t(
                  'ملاحظة مهنية: هذه التقديرات أولية ومبنية على المراسيم والرسوم الرسمية السورية المعمول بها حالياً، ولا تشكل عرضاً تعاقدياً نهائياً حتى دراسة المستندات الأصلية من قِبل الشريك المسؤول.',
                  'Professional Notice: These figures represent indicative statutory stamps and fee brackets based on current Syrian laws, subject to formal review of original briefs by our Partners.'
                )}
              </p>
            </div>

          </div>

          {/* Results Summary Card (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#142036] to-[#0D1626] border-2 border-[#C69A48]/50 shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#C69A48]/30 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#DFBA6E] font-bold">
                {t('ملخص التقدير التنبؤي', 'Preliminary Projection')}
              </span>
              <span className="px-2.5 py-1 rounded bg-[#C69A48]/20 text-[#DFBA6E] text-xs font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('دمشق، سوريا', 'Damascus, Syria')}</span>
              </span>
            </div>

            {/* Metric 1: Gov & Court Fees */}
            <div className="mb-6 p-4 rounded-xl bg-[#070D18]/80 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <Coins className="w-4 h-4 text-[#DFBA6E]" />
                <span>{t('الرسوم والطوابع الرسمية والحكومية التقديرية:', 'Estimated Statutory Official & Stamp Fees:')}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
                {currency === 'SYP' ? calculated.govFeesSYP : calculated.govFeesUSD}
              </div>
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                {t('تشمل طوابع النقابة ورسوم صندوق التكافل والعدلية والسجل التجاري', 'Includes Bar Association stamps, justice court fees, and commercial register stamps')}
              </span>
            </div>

            {/* Metric 2: Estimated Timeline */}
            <div className="mb-6 p-4 rounded-xl bg-[#070D18]/80 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <Clock className="w-4 h-4 text-[#DFBA6E]" />
                <span>{t('الجدول الزمني المتوقع للإنجاز:', 'Projected Turnaround Time:')}</span>
              </div>
              <div className="text-lg font-bold text-[#DFBA6E]">
                {calculated.estimatedTimeline}
              </div>
            </div>

            {/* Metric 3: Required Syrian Documents */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-2">
                <FileCheck2 className="w-4 h-4 text-[#DFBA6E]" />
                <span>{t('الوثائق السورية الأساسية المطلوبة للبدء:', 'Essential Documents Required:')}</span>
              </div>
              <div className="space-y-1.5">
                {calculated.requiredDocs.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFBA6E] mt-1.5 shrink-0"></span>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Retainer Tier Badge */}
            <div className="p-3 rounded-lg bg-[#C69A48]/10 border border-[#C69A48]/30 mb-6 flex items-center justify-between">
              <span className="text-xs text-slate-300">{t('فئة التمثيل القانوني:', 'Retainer Classification:')}</span>
              <span className="text-xs font-bold text-[#DFBA6E]">
                {isAr ? calculated.retainerBracketAr : calculated.retainerBracketEn}
              </span>
            </div>

            {/* Action Button */}
            <button
              onClick={() => {
                const srvTitle = servicesList.find((s) => s.id === serviceType);
                onProceedToBooking({
                  service: isAr ? (srvTitle?.labelAr || '') : (srvTitle?.labelEn || ''),
                  estimatedBudget: currency === 'SYP' ? calculated.govFeesSYP : calculated.govFeesUSD
                });
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-[#070D18] bg-gradient-to-r from-[#DFBA6E] via-[#D4AF37] to-[#C69A48] hover:from-[#F4D078] hover:to-[#DFBA6E] shadow-xl shadow-[#C69A48]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t('تثبيت الطلب وحجز جلسة استشارية بدمشق', 'Lock Estimate & Book Damascus Session')}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
