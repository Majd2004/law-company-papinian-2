import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Lock, 
  X, 
  ShieldCheck, 
  FileText, 
  Calendar, 
  Clock, 
  User, 
  Download, 
  Send, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const { isAr, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'case' | 'documents' | 'messages'>('case');
  const [messageText, setMessageText] = useState('');
  const [messagesList, setMessagesList] = useState([
    {
      sender: 'Dr. Riad Papinian',
      senderAr: 'د. رياض العظم بابينيان (الشريك المسؤول)',
      time: '10:45 AM',
      textAr: 'أهلاً بك. تم إيداع المذكرة الجوابية صباح اليوم لدى قلم محكمة الاستئناف التجارية الأولى بقصر العدل في دمشق، وتثبيت جلسة المرافعة القادمة بتاريخ 12 أيار 2025.',
      textEn: 'Welcome. Our responsive pleading was deposited this morning with the Clerk of the 1st Commercial Court of Appeal at Damascus Palace of Justice. Next hearing is confirmed for May 12, 2025.'
    }
  ]);

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setMessagesList([
      ...messagesList,
      {
        sender: 'Client',
        senderAr: 'الموكل (مجموعة الشام الاستثمارية)',
        time: 'الآن',
        textAr: messageText,
        textEn: messageText
      }
    ]);
    setMessageText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B1322] border-2 border-[#C69A48]/50 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 rtl:left-auto rtl:right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Portal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A263E] to-[#0D1626] border border-[#C69A48]/50 flex items-center justify-center text-[#DFBA6E]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-cinzel text-white">
                  PAPINIAN CLIENT VAULT
                </h3>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-mono border border-emerald-500/40">
                  {t('تشفير SSL 256-bit آمن', 'AES-256 Encrypted')}
                </span>
              </div>
              <p className="text-xs text-[#DFBA6E] font-amiri">
                {t('بوابة متابعة القضايا والنزاعات للموكلين - دمشق', 'Secure Client Matter Repository - Damascus')}
              </p>
            </div>
          </div>

          <div className="text-start sm:text-end text-xs text-slate-400 bg-[#070D18] px-3.5 py-2 rounded-xl border border-slate-800">
            <span className="text-slate-500 block">{t('الموكل المصرح له:', 'Authorized Client:')}</span>
            <span className="text-white font-bold">{t('مجموعة الشام للصناعات والتجارة الدولية', 'Al-Sham Industrial & Trading Group')}</span>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b border-slate-800 my-6 gap-2">
          {[
            { id: 'case', labelAr: 'موقف الدعوى والجدول الزمني', labelEn: 'Matter Status & Schedule' },
            { id: 'documents', labelAr: 'المذكرات والقرارات المودعة (4)', labelEn: 'Court Pleadings & Decrees (4)' },
            { id: 'messages', labelAr: 'المحادثة المشفرة مع المحامي', labelEn: 'Encrypted Partner Chat' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'text-[#DFBA6E] border-b-2 border-[#C69A48]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? tab.labelAr : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Tab 1: Matter Status */}
        {activeTab === 'case' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Active Case Banner */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#0D1626] to-[#142036] border border-[#C69A48]/30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#C69A48]/20 text-[#DFBA6E] border border-[#C69A48]/40">
                  {t('دعوى رقم: 1422 / 2025 تجارية استئنافية', 'Case No: 1422/2025 Commercial Appeal')}
                </span>
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t('الموقف الإجرائي: قيد المرافعة الشفوية', 'Procedural Stage: Oral Arguments')}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {t('نزاع عقد التوريد والاعتماد المستندي ضد كونسورتيوم أجنبي', 'Supply Agreement & Letter of Credit Dispute vs Foreign Consortium')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-3 border-t border-slate-700/60">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#C69A48]" />
                  <span>{t('المحكمة: محكمة استئناف دمشق التجارية', 'Venue: Damascus Commercial Appeal Court')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#C69A48]" />
                  <span>{t('المحامي المباشر: د. رياض العظم بابينيان', 'Lead Counsel: Dr. Riad Papinian')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <Calendar className="w-4 h-4 text-[#DFBA6E]" />
                  <span>{t('الجلسة القادمة: 12 أيار 2025 (قصر العدل)', 'Next Hearing: May 12, 2025 (Palace of Justice)')}</span>
                </div>
              </div>
            </div>

            {/* Visual Case Milestones Pipeline */}
            <div>
              <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                {t('مراحل سير الدعوى القضائية بدمشق:', 'Syrian Judicial Milestone Tracker:')}
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {[
                  { step: '1', titleAr: 'قيد الدعوى ودفع الرسوم', titleEn: 'Filing & Stamp Fees', status: 'completed' },
                  { step: '2', titleAr: 'تبليغ الخصم وتبادل اللوائح', titleEn: 'Service & Pleadings', status: 'completed' },
                  { step: '3', titleAr: 'تقرير الخبرة الفنية والمرافعة', titleEn: 'Expert Audit & Arguments', status: 'current' },
                  { step: '4', titleAr: 'صدور الحكم وإكساء التنفيذ', titleEn: 'Final Award & Enforcement', status: 'upcoming' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border text-xs ${
                      item.status === 'completed'
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                        : item.status === 'current'
                        ? 'bg-[#C69A48]/15 border-[#DFBA6E] text-[#DFBA6E] font-bold shadow-md'
                        : 'bg-[#070D18] border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px]">{t('مرحلة', 'Stage')} {item.step}</span>
                      {item.status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      {item.status === 'current' && <Clock className="w-3.5 h-3.5 text-[#DFBA6E] animate-spin" />}
                    </div>
                    <span className="block leading-tight font-tajawal">
                      {isAr ? item.titleAr : item.titleEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Pleadings & Documents */}
        {activeTab === 'documents' && (
          <div className="space-y-3 animate-fadeIn">
            {[
              {
                nameAr: 'مذكرة الدفوع الجوابية المقيدة لدى قلم المحكمة بدمشق.pdf',
                nameEn: 'Responsive Defense Pleading stamped by Damascus Court Clerk.pdf',
                date: '28 شباط 2025',
                size: '4.2 MB',
                type: 'لائحة قانونية'
              },
              {
                nameAr: 'تقرير الخبرة المحاسبية الثلاثية المعتمدة من وزارة العدل.pdf',
                nameEn: 'Three-Expert Forensic Accounting Audit Report.pdf',
                date: '14 شباط 2025',
                size: '12.8 MB',
                type: 'تقرير خبرة'
              },
              {
                nameAr: 'إشعار إيداع الكفالة المصرفية لدى المصرف التجاري السوري.pdf',
                nameEn: 'Commercial Bank of Syria Judicial Bail Receipt.pdf',
                date: '02 شباط 2025',
                size: '1.1 MB',
                type: 'سند مالي'
              },
              {
                nameAr: 'صورة ضبط الجلسة الأولى ومحضر استجواب الخصوم.pdf',
                nameEn: 'Hearing Minutes and Oral Cross-examination Record.pdf',
                date: '18 كانون الثاني 2025',
                size: '3.6 MB',
                type: 'ضبط جلسة'
              }
            ].map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0D1626] border border-slate-800 hover:border-[#C69A48]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#142036] text-[#DFBA6E] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold text-white">
                      {isAr ? doc.nameAr : doc.nameEn}
                    </h5>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-0.5">
                      <span>{doc.date}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span className="text-[#DFBA6E]">{doc.type}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => alert(t('تم تنزيل النسخة المصدقة والمشفرة بنجاح.', 'Downloaded encrypted verified court document.'))}
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#C69A48]/20 text-[#DFBA6E] hover:text-white transition-colors"
                  title={t('تنزيل النسخة المشفرة', 'Download Sealed Copy')}
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Encrypted Chat */}
        {activeTab === 'messages' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="h-64 overflow-y-auto p-4 rounded-xl bg-[#070D18] border border-slate-800 space-y-4">
              {messagesList.map((msg, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#0E1729] border border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#DFBA6E]">
                      {isAr ? msg.senderAr : msg.sender}
                    </span>
                    <span className="text-slate-500 font-mono text-[10px]">{msg.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-tajawal leading-relaxed">
                    {isAr ? msg.textAr : msg.textEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder={t('اكتب رسالة مشفرة إلى الشريك المسؤول...', 'Write encrypted inquiry to managing partner...')}
                className="flex-1 bg-[#070D18] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#DFBA6E] outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#DFBA6E] to-[#C69A48] text-[#070D18] font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>{t('إرسال', 'Send')}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t('اتصال مشفر وفق معايير نقابة المحامين في سوريا', 'Encrypted under Syrian Bar digital confidentiality')}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium"
          >
            {t('إغلاق البوابة', 'Exit Vault')}
          </button>
        </div>

      </div>
    </div>
  );
};
