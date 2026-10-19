import React, { useState } from 'react';
import {
  X,
  Monitor,
  HardDrive,
  Cpu,
  Wifi,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Clock,
  Send,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Language, translations } from '../translations';

interface DownloadModalProps {
  isOpen: boolean;
  type: 'trial' | 'purchase';
  onClose: () => void;
  lang: Language;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  type,
  onClose,
  lang,
}) => {
  const [notifySuccess, setNotifySuccess] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const t = translations[lang].downloadModal;
  const isRtl = lang === 'ar';

  if (!isOpen) return null;

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput.trim()) return;
    setNotifySuccess(true);
  };

  const whatsappMessage = encodeURIComponent(
    lang === 'ar'
      ? `السلام عليكم، أود الاستفسار حول برنامج TechDesk DZ والحصول على تفاصيل ${type === 'trial' ? 'النسخة التجريبية' : 'الترخيص الدائم'}.`
      : `Bonjour, je souhaite obtenir des informations sur TechDesk DZ concernant ${type === 'trial' ? "la version d'essai" : 'la licence à vie'}.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0A22]/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-purple-200/80 overflow-hidden text-[#191330]"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Refined Deep Purple-to-Violet Gradient Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#140E2F] via-[#24154E] to-[#3B196C] text-white flex items-start justify-between">
          <div>
            <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-purple-300 mb-1">
              {type === 'trial' ? t.trialSubtitle : t.purchaseSubtitle}
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              {type === 'trial' ? t.trialTitle : t.purchaseTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-purple-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Honest status explanation on pale lavender */}
          <div className="bg-[#F6F2FD] border border-purple-200/80 rounded-xl p-4 text-xs space-y-2">
            <div className="flex items-center gap-2 font-semibold text-purple-900">
              <Clock className="w-4 h-4 text-purple-700 shrink-0" />
              <span>{type === 'trial' ? t.statusBadge : 'Commande directe disponible'}</span>
            </div>
            <p className="text-[#554D74] leading-relaxed">
              {type === 'trial' ? t.statusDesc : t.purchaseStatusDesc}
            </p>
          </div>

          {/* System Requirements */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-[#191330] uppercase tracking-wider">
              {t.systemRequirementsTitle}
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs text-[#282148]">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FAF8FF] border border-[#EDE8F8]">
                <Monitor className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{t.requirements.os}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FAF8FF] border border-[#EDE8F8]">
                <Cpu className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{t.requirements.ram}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FAF8FF] border border-[#EDE8F8]">
                <HardDrive className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{t.requirements.storage}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FAF8FF] border border-[#EDE8F8]">
                <Wifi className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{t.requirements.device}</span>
              </div>
            </div>
          </div>

          {/* Licensing Policy note */}
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF8FF] text-xs text-[#554D74] border border-[#EDE8F8]">
            <ShieldCheck className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {type === 'trial'
                ? isRtl
                  ? 'قاعدة الترخيص: التجربة المجانية صالحة لمدة 72 ساعة متواصلة وتبدأ عند أول تفعيل للترخيص على الجهاز. التجربة محددة بمرة واحدة لكل جهاز كمبيوتر.'
                  : 'Règle de licence : L’essai gratuit de 72 heures démarre dès la première activation sur votre PC. Il est limité à une seule activation par machine physique.'
                : isRtl
                  ? 'الترخيص الدائم يربط بالجهاز بمفتاح رسمي دائم بدون اشتراكات شهرية متكررة.'
                  : 'La licence à vie s’active définitivement par poste avec votre clé officielle, sans abonnement récurrent.'}
            </p>
          </div>

          {/* Direct Contact Actions */}
          <div className="space-y-3 pt-2 border-t border-purple-100">
            <div className="text-xs font-semibold text-[#191330]">
              {isRtl ? 'للتواصل الفوري وطلب التفعيل :' : 'Contact direct et commande :'}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp : {siteConfig.contact.whatsappDisplay}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#191330] hover:bg-[#281E48] text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Notification Subscription */}
            {!notifySuccess ? (
              <form onSubmit={handleNotifySubmit} className="pt-2">
                <label className="block text-[11px] font-medium text-[#554D74] mb-1">
                  {isRtl
                    ? 'أو أدخل رقم هاتفك لنتواصل معك فور توفر رابط التحميل :'
                    : 'Ou laissez votre numéro pour être alerté dès l’ouverture du téléchargement :'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    required
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="Ex: 0550 12 34 56"
                    className="flex-1 text-xs px-3 py-2 border border-[#DCD3F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'تسجيل' : 'M’avertir'}</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-3 bg-purple-50/70 border border-purple-200 text-purple-900 rounded-lg text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                <span>
                  {isRtl
                    ? 'تم تسجيل طلبك بنجاح. سنتواصل معك فور توفر الإصدار.'
                    : 'Votre demande a bien été notée. Nous vous contacterons dès la disponibilité.'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#FAF8FF] border-t border-purple-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-[#554D74] hover:text-[#191330] py-1.5 px-4 rounded-lg hover:bg-purple-100/60 transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
