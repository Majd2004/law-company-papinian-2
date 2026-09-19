import React, { useState, useEffect, useId } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Calendar, 
  X, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Building, 
  MapPin, 
  Video, 
  CheckCircle2, 
  FileUp, 
  MessageSquare
} from 'lucide-react';
import { PRACTICE_AREAS, OFFICE_INFO } from '../data/firmData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPractice?: string;
  initialPartner?: string;
  initialBudget?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialPractice,
  initialPartner,
  initialBudget,
}) => {
  const { isAr, t } = useLanguage();
  const fullNameInputId = useId();
  const organizationInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const practiceSelectId = useId();
  const dateInputId = useId();
  const summaryTextareaId = useId();

  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('+963 ');
  const [email, setEmail] = useState('');
  const [practice, setPractice] = useState('');
  const [meetingType, setMeetingType] = useState<'damascus_office' | 'encrypted_video' | 'partner_visit'>('damascus_office');
  const [urgency, setUrgency] = useState<'normal' | 'urgent' | 'emergency'>('normal');
  const [preferredDate, setPreferredDate] = useState('');
  const [summary, setSummary] = useState('');
  const [attachedFileName, setAttachedFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (initialPractice) setPractice(initialPractice);
    if (initialPartner) {
      setSummary(isAr ? `طلب اجتماع مباشر مع: ${initialPartner}` : `Requested direct meeting with: ${initialPartner}`);
    }
    if (initialBudget) {
      setSummary((prev) => prev ? `${prev} (التقدير الأولي للرسوم: ${initialBudget})` : `التقدير الأولي للرسوم: ${initialBudget}`);
    }
  }, [initialPractice, initialPartner, initialBudget, isAr]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'SY-PAP-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(randomCode);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const cleanWhatsappNumber = OFFICE_INFO.mobileWhatsapp.replace(/\s+/g, '').replace('+', '');
  const whatsappMessage = encodeURIComponent(
    isAr
      ? `تحية طيبة، لقد قمت بطلب استشارة قانونية لدى شركة بابينيان للمحاماة بدمشق برقم مرجعي: ${refNumber}. الاسم: ${fullName}، الموضوع: ${practice || 'استشارة عامة'}.`
      : `Greetings, I submitted a consultation request with Papinian Law Firm Damascus under Ref: ${refNumber}. Client: ${fullName}, Subject: ${practice || 'General Legal Matter'}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B1322] border-2 border-[#C69A48]/50 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 left-5 rtl:left-auto rtl:right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="pt-2 mb-6 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#DFBA6E] uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>{t('جلسة استشارية خاصة وسرية', 'Confidential Legal Session')}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {t('طلب استشارة قانونية رفيعة المستوى', 'Schedule High-Level Consultation')}
              </h3>
              <p className="text-xs text-slate-400 font-tajawal">
                {t(
                  'في المقر الرئيسي بدمشق (أوتوستراد المزة) أو عبر تقنية الاتصال المرئي المشفر.',
                  'At Damascus Headquarters (Al-Mazzeh) or via encrypted teleconference.'
                )}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Org */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={fullNameInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('الاسم الثلاثي أو ممثل الجهة *', 'Full Name or Authorized Signatory *')}
                  </label>
                  <input
                    id={fullNameInputId}
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t('مثال: الأستاذ كنان الأحمد', 'e.g. Kenan Al-Ahmad')}
                    className="w-full bg-[#070D18] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#DFBA6E] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor={organizationInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('اسم الشركة أو المنشأة (إن وجد)', 'Company / Enterprise Name (Optional)')}
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3" />
                    <input
                      id={organizationInputId}
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder={t('مثال: شركة الشرق للتجارة', 'e.g. Orient Trading Corp')}
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 bg-[#070D18] border border-slate-700 rounded-xl py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#DFBA6E] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={phoneInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('رقم الهاتف / الواتساب السوري أو الدولي *', 'Phone / WhatsApp Contact *')}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3" />
                    <input
                      id={phoneInputId}
                      type="text"
                      dir="ltr"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+963 944 000 000"
                      className="w-full pl-9 pr-3 rtl:pr-3 rtl:pl-9 bg-[#070D18] border border-slate-700 rounded-xl py-2.5 text-xs sm:text-sm text-white focus:border-[#DFBA6E] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={emailInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('البريد الإلكتروني المهني *', 'Business Email *')}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3" />
                    <input
                      id={emailInputId}
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@enterprise.com"
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 bg-[#070D18] border border-slate-700 rounded-xl py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#DFBA6E] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Practice Domain */}
              <div>
                <label htmlFor={practiceSelectId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('المجال القانوني محل الاستشارة:', 'Legal Sector of Consultation:')}
                </label>
                <select
                  id={practiceSelectId}
                  value={practice}
                  onChange={(e) => setPractice(e.target.value)}
                  className="w-full bg-[#070D18] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#DFBA6E] outline-none"
                >
                  <option value="">{t('-- اختر التخصص القانوني --', '-- Select Legal Practice --')}</option>
                  {PRACTICE_AREAS.map((area) => (
                    <option key={area.id} value={isAr ? area.titleAr : area.titleEn}>
                      {isAr ? area.titleAr : area.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Meeting Type Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  {t('طريقة انعقاد الجلسة الاستشارية:', 'Consultation Mode:')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'damascus_office', labelAr: 'مكتب دمشق (أوتوستراد المزة)', labelEn: 'Damascus HQ (Mazzeh)', icon: MapPin },
                    { id: 'encrypted_video', labelAr: 'اتصال فيديو مشفر (Video Conf)', labelEn: 'Encrypted Video Conf', icon: Video },
                    { id: 'partner_visit', labelAr: 'زيارة الشريك لمقر الشركة', labelEn: 'Partner Corporate Visit', icon: Building },
                  ].map((mode) => {
                    const Icon = mode.icon;
                    return (
                      <button
                        type="button"
                        key={mode.id}
                        onClick={() => setMeetingType(mode.id as any)}
                        className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                          meetingType === mode.id
                            ? 'bg-[#C69A48]/20 border-[#DFBA6E] text-[#DFBA6E]'
                            : 'bg-[#070D18] border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{isAr ? mode.labelAr : mode.labelEn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Urgency & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('درجة الاستعجال:', 'Urgency Level:')}
                  </label>
                  <div className="flex gap-2">
                    {[
                      { id: 'normal', labelAr: 'اعتيادي', labelEn: 'Standard' },
                      { id: 'urgent', labelAr: 'مستعجل 24h', labelEn: 'Urgent 24h' },
                      { id: 'emergency', labelAr: 'طوارئ قضائية', labelEn: 'Emergency' },
                    ].map((u) => (
                      <button
                        type="button"
                        key={u.id}
                        onClick={() => setUrgency(u.id as any)}
                        className={`flex-1 py-1.5 rounded-lg border text-xs cursor-pointer font-medium ${
                          urgency === u.id
                            ? 'bg-[#C69A48]/20 border-[#DFBA6E] text-[#DFBA6E]'
                            : 'bg-[#070D18] border-slate-800 text-slate-400'
                        }`}
                      >
                        {isAr ? u.labelAr : u.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor={dateInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('الموعد المفضل:', 'Preferred Date:')}
                  </label>
                  <input
                    id={dateInputId}
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#070D18] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-[#DFBA6E] outline-none"
                  />
                </div>
              </div>

              {/* Case Summary */}
              <div>
                <label htmlFor={summaryTextareaId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('ملخص موجز لموضوع الاستشارة أو النزاع:', 'Brief Summary of Legal Matter:')}
                </label>
                <textarea
                  id={summaryTextareaId}
                  rows={3}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder={t('يرجى ذكر نبذة مختصرة عن الأطراف، أو طبيعة العقد، أو رقم الدعوى إن وجدت...', 'Briefly mention dispute nature, contracts, or court case numbers...')}
                  className="w-full bg-[#070D18] border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#DFBA6E] outline-none"
                ></textarea>
              </div>

              {/* File Attachment Simulation */}
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  {t('إرفاق مستند أو مسودة عقد (اختياري - مشفر):', 'Attach Document / Contract Draft (Optional - Encrypted):')}
                </label>
                <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-slate-700 hover:border-[#DFBA6E] bg-[#070D18] cursor-pointer text-xs text-slate-400 hover:text-white transition-colors">
                  <FileUp className="w-4 h-4 text-[#C69A48]" />
                  <span>
                    {attachedFileName
                      ? attachedFileName
                      : t('انقر لرفع ملف PDF أو صورة العقد (حد أقصى 25 ميغابايت)', 'Click to upload PDF or contract scans (Max 25MB)')}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setAttachedFileName(e.target.files[0].name);
                      }
                    }}
                  />
                </label>
              </div>

              {/* Security Banner */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#C69A48] shrink-0" />
                <span>
                  {t(
                    'السرية المهنية مكفولة بموجب المادة 56 من قانون المحاماة السوري. لا يتم مشاركة أي معلومات مع طرف ثالث.',
                    'Professional attorney-client privilege protected under Syrian Bar Code Article 56.'
                  )}
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-[#070D18] bg-gradient-to-r from-[#DFBA6E] via-[#D4AF37] to-[#C69A48] hover:from-[#F4D078] hover:to-[#DFBA6E] shadow-xl shadow-[#C69A48]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t('تأكيد طلب الاستشارة وحجز الموعد', 'Confirm Consultation Booking')}</span>
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[#DFBA6E] font-bold">
                {t('تم تسجيل طلبكم بنجاح', 'Consultation Confirmed')}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                {t('مرحباً بك في شركة بابينيان للمحاماة', 'Welcome to Papinian Law Firm')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-tajawal">
                {t(
                  `أهلاً بك أستاذ ${fullName}. تم استلام طلبكم وتخصيص مستشار قانوني لدراسة الملف قبل موعد الجلسة في مقر دمشق.`,
                  `Dear ${fullName}, your matter has been registered and assigned to senior counsel prior to your consultation session.`
                )}
              </p>
            </div>

            {/* Reference Box */}
            <div className="p-4 rounded-xl bg-[#070D18] border border-[#C69A48]/40 max-w-sm mx-auto">
              <span className="text-xs text-slate-400 block mb-1">
                {t('الرقم المرجعي السري للاستشارة:', 'Confidential Matter Reference ID:')}
              </span>
              <span className="font-mono text-xl font-bold text-[#DFBA6E] tracking-widest">
                {refNumber}
              </span>
            </div>

            {/* Direct Instant WhatsApp Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${cleanWhatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t('تأكيد فوري عبر واتساب إدارة القضايا', 'Instant WhatsApp Confirmation')}</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                {t('تم والعودة للموقع', 'Done & Return')}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
