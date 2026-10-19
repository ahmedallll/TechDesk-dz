import React from 'react';
import {
  X,
  Download,
  Monitor,
  HardDrive,
  Cpu,
  Wifi,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Sparkles,
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
  const t = translations[lang].downloadModal;
  const isRtl = lang === 'ar';

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    lang === 'ar'
      ? type === 'trial'
        ? 'السلام عليكم، قمت بتحميل برنامج TechDesk DZ وتثبيته على جهازي. أود الحصول على مفتاح ترخيص التجربة المجانية لمدة 3 أيام.'
        : 'السلام عليكم، أود الاستفسار حول برنامج TechDesk DZ والحصول على تفاصيل الترخيص الدائم.'
      : type === 'trial'
        ? "Bonjour, j'ai téléchargé et installé TechDesk DZ sur mon PC Windows. Je souhaite obtenir ma clé d'activation pour l'essai gratuit de 3 jours."
        : 'Bonjour, je souhaite obtenir des informations sur TechDesk DZ concernant la licence à vie.'
  );

  const installerUrl =
    siteConfig.downloads.trialInstallerUrl ||
    'https://github.com/ahmedallll/TechDesk-dz/releases/download/v1.0.0/TechDesk.DZ.Setup.0.0.0.exe';

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
          {type === 'trial' ? (
            <>
              {/* 3-Step Process Guide */}
              <div className="bg-[#FAF8FE] border border-purple-200/80 rounded-xl p-4 space-y-3">
                <div className="text-xs font-bold text-[#191330] tracking-tight flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>{t.flowTitle}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-purple-100 shadow-2xs">
                    <div className="font-bold text-purple-900 mb-0.5">{t.step1Title}</div>
                    <div className="text-[11px] text-[#554D74] leading-relaxed">{t.step1Desc}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-purple-100 shadow-2xs">
                    <div className="font-bold text-purple-900 mb-0.5">{t.step2Title}</div>
                    <div className="text-[11px] text-[#554D74] leading-relaxed">{t.step2Desc}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-purple-100 shadow-2xs">
                    <div className="font-bold text-purple-900 mb-0.5">{t.step3Title}</div>
                    <div className="text-[11px] text-[#554D74] leading-relaxed">{t.step3Desc}</div>
                  </div>
                </div>
              </div>

              {/* Direct Download Action Section */}
              <div className="space-y-2 text-center pt-1">
                <a
                  href={installerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full box-border inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 active:brightness-95 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
                >
                  <Download className="w-5 h-5 shrink-0" />
                  <span>{t.downloadButton}</span>
                </a>
                <p className="text-[11px] text-[#625A82]">
                  {t.installerMeta}
                </p>
              </div>

              {/* Step 3: WhatsApp Activation Request Button (directly below download section) */}
              <div className="pt-2 border-t border-purple-100 space-y-2">
                <div className="text-xs font-semibold text-[#191330] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                  <span>
                    {isRtl
                      ? 'الخطوة 3 : طلب كود تفعيل التجربة المجانية (3 أيام) :'
                      : 'Étape 3 : Demander votre activation gratuite (3 jours) :'}
                  </span>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>
                    {t.whatsappTrialBtn} : {siteConfig.contact.whatsappDisplay}
                  </span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-[#625A82] px-1">
                  <span>{isRtl ? 'أو عبر الاتصال المباشر :' : 'Ou par téléphone direct :'}</span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-medium text-purple-900 hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-purple-700" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Purchase Section */}
              <div className="bg-[#F6F2FD] border border-purple-200/80 rounded-xl p-4 text-xs space-y-2">
                <div className="flex items-center gap-2 font-semibold text-purple-900">
                  <Sparkles className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Commande directe disponible</span>
                </div>
                <p className="text-[#554D74] leading-relaxed">
                  {t.purchaseStatusDesc}
                </p>
              </div>

              {/* Purchase Direct Contact Actions */}
              <div className="space-y-3 pt-1">
                <div className="text-xs font-semibold text-[#191330]">
                  {isRtl ? 'للتواصل الفوري وطلب الترخيص الدائم :' : 'Contact direct et commande :'}
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
              </div>
            </>
          )}

          {/* System Requirements */}
          <div className="space-y-2.5 pt-2 border-t border-purple-100">
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
