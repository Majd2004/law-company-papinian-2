import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Award, 
  BookOpen, 
  History, 
  Scroll, 
  ShieldAlert, 
  Sparkles, 
  Quote
} from 'lucide-react';

export const PapinianHeritage: React.FC = () => {
  const { isAr, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'legacy' | 'pillars' | 'quote'>('legacy');

  const pillars = [
    {
      titleAr: 'النزاهة الأخلاقية والمهنية المطلقة',
      titleEn: 'Unyielding Moral & Professional Integrity',
      descAr: 'تطبيق مبدأ بابينيان التاريخي: لا نبرر الباطل، ونقدم للموكلين الرأي القانوني المجرد والصريح دون أي تزييف.',
      descEn: 'Following Papinian’s immortal creed: unvarnished truth, meticulous counsel, and zero ethical compromises.',
      icon: ShieldAlert
    },
    {
      titleAr: 'عمق التأصيل الفقهي والاجتهادي',
      titleEn: 'Deep Jurisprudential Scholarship',
      descAr: 'المذكرات القانونية واللوائح التحكيمية تُبنى على البحث المقارن الدقيق وقرارات الهيئة العامة لمحكمة النقض.',
      descEn: 'Every pleading and arbitration memorial is grounded in rigorous comparative analysis and Syrian Cassation doctrine.',
      icon: BookOpen
    },
    {
      titleAr: 'شجاعة المرافعة وحماية الموكلين',
      titleEn: 'Fearless Courtroom & Tribunal Advocacy',
      descAr: 'الاستماتة في الدفاع عن الحقوق أمام أرفع المحاكم السورية والدولية مهما تعقدت أبعاد القضية وأطرافها.',
      descEn: 'Fierce, articulate defense of clients before domestic Supreme Courts and international tribunals.',
      icon: Award
    },
    {
      titleAr: 'من دمشق إلى المحافل القانونية العالمية',
      titleEn: 'Syrian Roots, Global Legal Standards',
      descAr: 'الانطلاق من قلب دمشق العريقة بمعايير كبرى مكاتب المحاماة العالمية (Magic Circle & White Shoe firms).',
      descEn: 'Anchored in ancient Damascus while operating according to the highest international law firm benchmarks.',
      icon: Scroll
    }
  ];

  return (
    <section id="heritage" className="py-24 bg-[#09101E] relative overflow-hidden border-t border-b border-[#C69A48]/20">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 damascus-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#C69A48]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#1A263E]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A48]/10 border border-[#C69A48]/30 text-[#DFBA6E] text-xs font-semibold mb-3">
            <History className="w-3.5 h-3.5" />
            <span>{t('سر التسمية والإرث التاريخي', 'The Heritage & Namesake')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-amiri block">{t('من هو "بابينيان"؟', 'Who was "Papinian"?')}</span>
            <span className="gold-gradient-text font-cinzel text-2xl sm:text-3xl md:text-4xl">
              {t('أمير الفقهاء السوري الذي بنى قواعد القانون العالمي', 'The Syrian Prince of Jurists Who Shaped World Law')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-tajawal">
            {t(
              'اخترنا اسم "بابينيان" لشركتنا في دمشق تخليداً لأعظم مشرّع قانوني سوري في التاريخ، وتذكيراً بأن جذور العدالة وسيادة القانون نبتت في هذه الأرض قبل آلاف السنين.',
              'We chose "Papinian" for our Damascus firm to honor the greatest Syrian legal mind in world history, a testament that the principles of justice blossomed on this very soil.'
            )}
          </p>
        </div>

        {/* Content Split: Historical Spotlight & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Visual Gilded Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border-2 border-[#C69A48]/40 shadow-2xl group">
              <img
                src="/images/papinian-heritage.jpg"
                alt="Emilius Papinianus Jurist"
                className="w-full h-[460px] object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-transparent"></div>
              
              {/* Museum Brass Plaque */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0D1626]/95 border border-[#C69A48]/50 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-cinzel font-bold text-[#DFBA6E] text-base">
                    AEMILIUS PAPINIANUS
                  </h4>
                  <span className="text-xs text-slate-400 font-mono">142 – 212 AD</span>
                </div>
                <p className="text-xs text-slate-300 font-amiri leading-snug">
                  {t(
                    'إميليوس بابينيانوس (ابن حمص/إيميسا)، رئيس الحرس الإمبراطوري وقاضي القضاة، شُيّد تمثاله أمام مجلس الأمة الفرنسي ووزارات العدل العالمية.',
                    'Eminent Syrian Jurist from Emesa (Homs), Praetorian Prefect, his statue adorns the French National Assembly and world justice ministries.'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Text & Interactive Tabs */}
          <div className="lg:col-span-7">
            
            {/* Tabs Selector */}
            <div className="flex border-b border-slate-800 mb-6 gap-2 sm:gap-4 overflow-x-auto pb-1">
              {[
                { id: 'legacy', labelAr: 'القصة التاريخية لسوريا وروما', labelEn: 'The Syrian Roman Chronicle' },
                { id: 'pillars', labelAr: 'ركائز شركتنا القانونية', labelEn: 'Our 4 Core Pillars' },
                { id: 'quote', labelAr: 'الموقف البطولي الخالد', labelEn: 'The Immortal Stance' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 px-3 text-sm font-semibold transition-all whitespace-nowrap cursor-pointer relative ${
                    activeTab === tab.id
                      ? 'text-[#DFBA6E] border-b-2 border-[#C69A48]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isAr ? tab.labelAr : tab.labelEn}
                </button>
              ))}
            </div>

            {/* Tab 1: Legacy Chronicle */}
            {activeTab === 'legacy' && (
              <div className="space-y-4 text-slate-300 font-tajawal animate-fadeIn">
                <p className="leading-relaxed text-sm md:text-base">
                  {t(
                    'وُلد بابينيان في مدينة "إيميسا" (حمص حالياً) في سوريا قرابة عام 142 للميلاد. تلقى علومه في مدرسة بيروت للحقوق الفينيقية السورية، وأصبح أعظم علماء القانون في عصره. وعندما تولى الإمبراطور السوري سيبتيموس سيفيروس عرش روما، عيّن بابينيان في أعلى منصب قضائي وتنفيذي في الدولة.',
                    'Born in Emesa (modern-day Homs, Syria) around 142 AD, Papinian mastered Roman and Levantine law at the Berytus Law School. When Syrian-born Emperor Septimius Severus ascended the imperial throne, he appointed Papinian to the Empire\'s supreme judicial office.'
                  )}
                </p>
                <p className="leading-relaxed text-sm md:text-base">
                  {t(
                    'وعندما قام الإمبراطور جستنيان بتدوين القوانين الرومانية (Corpus Juris Civilis) – والتي تُعد حجر الأساس لجميع القوانين المدنية المعاصرة في فرنسا وأوروبا والعالم العربي – احتلت فتاوى وآراء بابينيان الصدارة، وسُمي في المراسيم بـ "أمير الفقهاء".',
                    'When Emperor Justinian later codified Roman jurisprudence into the Corpus Juris Civilis—the fountainhead of contemporary civil codes worldwide—Papinian\'s doctrines comprised its central core, cementing his title as the Prince of Jurists.'
                  )}
                </p>

                <div className="p-4 rounded-xl bg-[#0D1626] border border-[#C69A48]/30 mt-6">
                  <h4 className="text-[#DFBA6E] font-bold text-sm mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C69A48]" />
                    <span>{t('رسالة شركة بابينيان في دمشق اليوم', 'Our Mission in Damascus Today')}</span>
                  </h4>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-amiri">
                    {t(
                      'نحن لا نكتفي بحمل الاسم فخراً، بل نلتزم في كل نزاع قضائي، واستشارة شركة، وتحكيم دولي، بذات المعيار الأخلاقي والعلمي الصارم الذي خطّه بابينيان: العدالة المطلقة، والأمانة الكاملة، والتفوق التشريعي غير القابل للمساومة.',
                      'We carry this name with immense duty. Every contract drafted, arbitration pursued, and Supreme Court appeal argued reflects Papinian’s uncompromising precision and profound integrity.'
                    )}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Core Pillars */}
            {activeTab === 'pillars' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#0D1626]/80 border border-slate-800 hover:border-[#C69A48]/50 transition-all hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#142036] border border-[#C69A48]/30 flex items-center justify-center text-[#DFBA6E] mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-white mb-1.5">
                        {isAr ? pillar.titleAr : pillar.titleEn}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-tajawal">
                        {isAr ? pillar.descAr : pillar.descEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 3: The Immortal Stance */}
            {activeTab === 'quote' && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0D1626] to-[#142036] border border-[#C69A48]/40 shadow-xl animate-fadeIn space-y-4">
                <Quote className="w-10 h-10 text-[#C69A48]/40" />
                <p className="text-lg md:text-xl font-amiri text-white italic leading-relaxed">
                  {t(
                    '«إن ارتكاب الجريمة أهون بكثير من تبريرها بالباطل؛ والعدالة ليست إرادة الحاكم بل ميزان الحق الأخلاقي الأزلي.»',
                    '“It is far easier to commit a crime than to justify one; justice is not the arbitrary will of the ruler, but eternal moral rectitude.”'
                  )}
                </p>
                <div className="border-t border-slate-700/60 pt-4">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#DFBA6E] mb-1">
                    {t('الموقف التاريخي الذي هز روما (212 م)', 'The Heroic Stand that Shook Rome (212 AD)')}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed font-tajawal">
                    {t(
                      'عندما أمر الإمبراطور كاراكلا بابينيان بإعداد مذكرة قانونية تبرر قتله لأخيه وشريكه في الحكم غيتا، رفض بابينيان بإباء قائلاً مقولته التاريخية، مفضلاً الإعدام على تلطيخ القانون. أصبح هذا الموقف رمزاً أبدياً لاستقلال القضاء والمحاماة في وجه أي ضغوط.',
                      'When Emperor Caracalla commanded Papinian to craft a legal brief justifying the murder of his brother Geta, Papinian steadfastly refused, declaring that murder was easier to commit than to legally justify. He chose martyrdom over prostituting the law, becoming a global beacon for judicial independence.'
                    )}
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
