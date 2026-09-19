import React, { useState, useId } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { OFFICE_INFO } from '../data/firmData';

export const ContactAndOffices: React.FC = () => {
  const { isAr, t } = useLanguage();
  const contactNameInputId = useId();
  const contactPhoneInputId = useId();
  const contactEmailInputId = useId();
  const contactSubjectInputId = useId();
  const contactMessageTextareaId = useId();

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
      setIsSent(false);
    }, 4000);
  };

  const cleanWhatsappNumber = OFFICE_INFO.mobileWhatsapp.replace(/\s+/g, '').replace('+', '');

  return (
    <section id="contact" className="py-24 bg-[#09101E] relative border-t border-[#C69A48]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A48]/10 border border-[#C69A48]/30 text-[#DFBA6E] text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t('المقر الرئيسي والفروع في سوريا', 'Offices & Damascus Headquarters')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-amiri block">{t('تواصل مع شركة بابينيان', 'Connect with Papinian')}</span>
            <span className="gold-gradient-text font-cinzel text-2xl sm:text-3xl md:text-4xl">
              {t('في قلب العاصمة السورية دمشق', 'Located in the Heart of Damascus, Syria')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-tajawal">
            {t(
              'نرحب باتصالاتكم واستفساراتكم في مكاتبنا بدمشق أو عبر خط الطوارئ القانوني المباشر.',
              'We welcome your inquiries at our flagship Damascus executive chambers or via our priority emergency hotline.'
            )}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Damascus HQ Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1626] border-2 border-[#C69A48]/40 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#142036] border border-[#C69A48]/40 flex items-center justify-center text-[#DFBA6E]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">
                      {t('المقر الرئيسي - دمشق', 'Headquarters - Damascus')}
                    </h3>
                    <span className="text-[11px] text-[#DFBA6E]">
                      {t('أوتوستراد المزة الدبلوماسي', 'Al-Mazzeh Diplomatic Sector')}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#C69A48]/15 text-[#DFBA6E] text-xs font-semibold">
                  {t('المكتب الرئيسي', 'Head Office')}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-[#C69A48] shrink-0 mt-0.5" />
                <p className="leading-relaxed font-tajawal">
                  {isAr ? OFFICE_INFO.addressAr : OFFICE_INFO.addressEn}
                </p>
              </div>

              {/* Phone & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${OFFICE_INFO.phonePrimary}`}
                  className="flex items-center gap-2 p-3 rounded-xl bg-[#070D18] border border-slate-800 hover:border-[#DFBA6E] text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#DFBA6E] shrink-0" />
                  <span dir="ltr">{OFFICE_INFO.phonePrimary}</span>
                </a>

                <a
                  href={`https://wa.me/${cleanWhatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 text-xs text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span dir="ltr">{OFFICE_INFO.mobileWhatsapp}</span>
                </a>
              </div>

              {/* Emails */}
              <div className="flex items-center gap-3 text-xs text-slate-300 pt-1">
                <Mail className="w-4 h-4 text-[#DFBA6E] shrink-0" />
                <span>{OFFICE_INFO.email}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{OFFICE_INFO.vipEmail}</span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <Clock className="w-4 h-4 text-[#C69A48] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">{isAr ? OFFICE_INFO.workingHoursAr : OFFICE_INFO.workingHoursEn}</p>
                  <span className="text-emerald-400 text-[11px] font-medium block mt-0.5">
                    {t('محامو الطوارئ متاحون لنزاعات التوقيف والحجز التحفظي على مدار الساعة', 'Emergency counsel on-call 24/7 for interim injunctions & seizures')}
                  </span>
                </div>
              </div>
            </div>

            {/* Regional Branches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0D1626] border border-slate-800">
                <h4 className="text-xs font-bold text-[#DFBA6E] mb-1">
                  {t('فرع حلب للشركات والصناعة', 'Aleppo Industrial Branch')}
                </h4>
                <p className="text-xs text-slate-300 font-tajawal">
                  {isAr ? OFFICE_INFO.branchAleppoAr : OFFICE_INFO.branchAleppoEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1626] border border-slate-800">
                <h4 className="text-xs font-bold text-[#DFBA6E] mb-1">
                  {t('مكتب اللاذقية البحري والتجاري', 'Latakia Maritime Branch')}
                </h4>
                <p className="text-xs text-slate-300 font-tajawal">
                  {isAr ? OFFICE_INFO.branchLatakiaAr : OFFICE_INFO.branchLatakiaEn}
                </p>
              </div>
            </div>

            {/* Simulated Damascus Interactive Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#C69A48]/30 h-44 bg-[#070D18]">
              {/* Map stylized background */}
              <div className="absolute inset-0 damascus-pattern opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/60 to-transparent"></div>
              
              <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[#DFBA6E]">33.5102° N, 36.2783° E (Damascus)</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px]">
                    {t('قصر العدل • ساحة الأمويين', 'Palace of Justice • Umayyad Sq')}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#DFBA6E] text-[#070D18] flex items-center justify-center animate-bounce shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">
                      {t('برج الفردوس الاستثماري - أوتوستراد المزة', 'Al-Fardous Tower - Mazzeh Highway')}
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      {t('مواقف سيارات خاصة لعملاء الشركة ومصاعد VIP سريعة', 'Private valet client parking & VIP elevator access')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0D1626] border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              {t('مراسلة إدارة الاستشارات والشركاء', 'Direct Partner Inquiry')}
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-tajawal">
              {t(
                'يمكنكم إرسال استفساركم أو ملخص قضيتكم مباشرة، وسيتم الرد خلال ساعتي عمل من قِبل الشريك المختص.',
                'Submit your legal inquiry directly; our designated partner will respond within two business hours.'
              )}
            </p>

            {isSent ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">
                  {t('تم استلام رسالتكم بنجاح', 'Message Successfully Received')}
                </h4>
                <p className="text-xs text-slate-300 font-tajawal">
                  {t(
                    'شكراً لتواصلكم. تم تحويل رسالتكم إلى ديوان المستشارين بدمشق وسيتم التواصل معكم عبر الهاتف أو البريد.',
                    'Thank you. Your message has been routed to our senior counsel chamber in Damascus for immediate review.'
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor={contactNameInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('الاسم الكريم / الصفة *', 'Full Name & Title *')}
                  </label>
                  <input
                    id={contactNameInputId}
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder={t('الأستاذ / الدكتور...', 'Mr. / Dr. / Adv...')}
                    className="w-full bg-[#070D18] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#DFBA6E] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={contactPhoneInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t('رقم الهاتف / الواتساب *', 'Phone / WhatsApp *')}
                    </label>
                    <input
                      id={contactPhoneInputId}
                      type="text"
                      dir="ltr"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="+963 9..."
                      className="w-full bg-[#070D18] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#DFBA6E] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor={contactEmailInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t('البريد الإلكتروني *', 'Email Address *')}
                    </label>
                    <input
                      id={contactEmailInputId}
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="info@..."
                      className="w-full bg-[#070D18] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#DFBA6E] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={contactSubjectInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('موضوع المراسلة:', 'Subject:')}
                  </label>
                  <input
                    id={contactSubjectInputId}
                    type="text"
                    required
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder={t('نزاع تجاري، تأسيس شركة، تمثيل قضائي، استشارة عقارية...', 'Commercial Dispute, Incorporation, Litigation, Real Estate...')}
                    className="w-full bg-[#070D18] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#DFBA6E] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor={contactMessageTextareaId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('نص الرسالة والاستفسار القانوني:', 'Legal Inquiry Details:')}
                  </label>
                  <textarea
                    id={contactMessageTextareaId}
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder={t('اكتب تفاصيل استفسارك هنا...', 'Write your inquiry details here...')}
                    className="w-full bg-[#070D18] border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#DFBA6E] outline-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#C69A48] shrink-0" />
                  <span>{t('رسالتك محمية بالسرية المهنية للمحاماة في سوريا.', 'Your inquiry is protected by Syrian attorney-client privilege.')}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#070D18] bg-gradient-to-r from-[#DFBA6E] via-[#D4AF37] to-[#C69A48] hover:from-[#F4D078] hover:to-[#DFBA6E] shadow-xl shadow-[#C69A48]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('إرسال الرسالة إلى الشريك المسؤول', 'Dispatch Message to Partner')}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
