import React from 'react';
import {
  X,
  Download,
  Monitor,
  HardDrive,
  Cpu,
  Wifi,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Smartphone,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Language, translations } from '../translations';
import { WhatsAppIcon } from './WhatsAppIcon';

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
    'https://github.com/ahmedallll/TechDesk-dz/releases/latest/download/TechDesk-DZ-Setup.exe';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg my-auto bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden text-[#191330] flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Compact, Polished Header */}
        <div className="px-4 py-3.5 sm:px-6 sm:py-5 border-b border-slate-100 flex items-start justify-between gap-3 bg-white shrink-0">
          <div className="flex items-start gap-3">
            <img
              src="/td.webp"
              alt="TechDesk DZ"
              className="h-8 sm:h-10 w-auto object-contain shrink-0 mt-0.5"
            />
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-xl font-bold text-[#191330] tracking-tight">
                  {type === 'trial' ? t.trialTitle : t.purchaseTitle}
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[#554D74] leading-relaxed">
                {type === 'trial' ? t.trialSubtitle : t.purchaseSubtitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 -mr-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
          {type === 'trial' ? (
            <>
              {/* Simple 3-step inline flow (no heavy nested cards) */}
              <div className="bg-[#FAF8FE] border border-purple-100 rounded-xl p-3 sm:p-3.5">
                <div className="text-[11px] font-bold text-purple-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                  <span>{t.flowTitle}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-[11px] shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <div className="font-bold text-slate-900">{t.step1Title}</div>
                      <div className="text-[11px] text-[#554D74] leading-tight">
                        {t.step1Desc}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-[11px] shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <div className="font-bold text-slate-900">{t.step2Title}</div>
                      <div className="text-[11px] text-[#554D74] leading-tight">
                        {t.step2Desc}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-[11px] shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <div className="font-bold text-slate-900">{t.step3Title}</div>
                      <div className="text-[11px] text-[#554D74] leading-tight">
                        {t.step3Desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Action: Direct Download Button */}
              <div className="space-y-1.5 text-center pt-1">
                <a
                  href={installerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full box-border inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 active:scale-[0.99] rounded-xl shadow-sm hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
                >
                  <Download className="w-5 h-5 shrink-0" />
                  <span>{t.downloadButton}</span>
                </a>
                <p className="text-[11px] text-[#625A82]">
                  {t.installerMeta}
                </p>
              </div>

              {/* Android Companion Scanner Application Option */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-br from-[#FAF8FF] to-[#F3EEFC] border border-purple-200/90 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-bold text-[#191330]">
                    <Smartphone className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>{t.androidScannerTitle}</span>
                  </div>
                  <span className="text-[10px] font-bold text-purple-800 bg-purple-100/90 px-2 py-0.5 rounded border border-purple-300/70">
                    {t.androidScannerBadge}
                  </span>
                </div>
                <p className="text-[11px] text-[#554D74] leading-relaxed">
                  {t.androidScannerDesc}
                </p>
                <a
                  href={siteConfig.downloads.androidScannerUrl}
                  download={siteConfig.downloads.androidScannerFileName}
                  className="w-full box-border inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-bold text-purple-900 bg-white hover:bg-purple-50/90 border border-purple-300/90 rounded-lg shadow-2xs hover:shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>{t.androidDownloadButton}</span>
                </a>
                <p className="text-[10px] text-center text-[#625A82]">
                  {t.androidMeta}
                </p>
              </div>

              {/* Clean WhatsApp Licence Request (no unnecessary contact details or phone number clutter) */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#191330] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    <span>
                      {isRtl
                        ? 'الخطوة 3 : تفعيل التجربة المجانية (72 ساعة)'
                        : 'Étape 3 : Activer votre essai gratuit (72 heures)'}
                    </span>
                  </span>
                  <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                    {isRtl ? 'مجاني وفوري' : 'Gratuit & sans engagement'}
                  </span>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-sm transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>{t.whatsappTrialBtn}</span>
                </a>

                <p className="text-[11px] text-center text-[#625A82]">
                  {isRtl
                    ? 'بعد تثبيت البرنامج، اضغط أعلاه لطلب كود التفعيل التجريبي مباشرة عبر واتساب.'
                    : 'Après installation, cliquez ci-dessus pour recevoir instantanément votre clé d’essai via WhatsApp.'}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Purchase Section */}
              <div className="bg-[#FAF8FE] border border-purple-100 rounded-xl p-4 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-purple-900">
                  <Sparkles className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>
                    {isRtl ? 'ترخيص دائم رسمي' : 'Licence définitive officielle'}
                  </span>
                </div>
                <p className="text-[#554D74] leading-relaxed">
                  {t.purchaseStatusDesc}
                </p>
              </div>

              {/* Clean WhatsApp Purchase Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>{t.purchaseAction}</span>
                </a>
              </div>
            </>
          )}

          {/* System Requirements (Clean minimal layout, no heavy nested cards) */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              {t.systemRequirementsTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Monitor className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                <span>{t.requirements.os}</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                <span>{t.requirements.ram}</span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                <span>{t.requirements.storage}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                <span>{t.requirements.device}</span>
              </div>
            </div>
          </div>

          {/* Security & Official Software Guarantee Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#554D74] pt-2 border-t border-slate-100">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>
              {isRtl
                ? 'ملف رسمي موثوق 100% • خالي تماماً من أي برامج دخيلة • تجربة مجانية دون التزام'
                : 'Fichier d’installation officiel vérifié • 100% sécurisé sans logiciel tiers'}
            </span>
          </div>
        </div>

        {/* Polished, Clean Footer */}
        <div className="px-5 py-3 sm:px-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>TechDesk DZ • Windows Desktop</span>
          <button
            type="button"
            onClick={onClose}
            className="font-medium text-slate-600 hover:text-slate-900 py-1 px-3 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
