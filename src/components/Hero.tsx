import React from 'react';
import { Download, ArrowRight, ShieldCheck, Smartphone } from 'lucide-react';
import { DesktopAppPreview } from './DesktopAppPreview';
import { Language, translations } from '../translations';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  lang: Language;
  onOpenDownload: (type: 'trial' | 'purchase') => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenDownload }) => {
  const t = translations[lang].hero;
  const isRtl = lang === 'ar';

  return (
    <section
      id="accueil"
      className="relative pt-8 pb-16 md:pt-12 md:pb-20 bg-gradient-to-b from-[#F6F2FD] via-[#FAF8FF] to-white border-b border-[#EDE8F8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Copy & Actions */}
          <div className="lg:col-span-5 space-y-5 text-left rtl:text-right">
            {/* Unboxed Brand Sub-header */}
            <div className="text-xs sm:text-sm font-bold tracking-wide text-purple-700 uppercase">
              {t.badge}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#191330] tracking-tight leading-[1.18]">
              {t.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#554D74] leading-relaxed">
              {t.supportingText}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenDownload('trial')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 active:brightness-95 rounded-xl shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
              >
                <Download className="w-5 h-5 shrink-0" />
                <span>{t.ctaPrimary}</span>
              </button>

              <a
                href="#fonctionnalites"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-[#282148] hover:text-purple-700 bg-white hover:bg-[#F6F2FD] border border-purple-200/80 rounded-xl shadow-2xs transition-colors focus-visible:ring-2 focus-visible:ring-purple-600"
              >
                <span>{t.ctaSecondary}</span>
                <ArrowRight className={`w-4 h-4 shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
              </a>
            </div>

            {/* Phone App Direct Download Button */}
            <div className="pt-1">
              <a
                href={siteConfig.downloads.androidScannerUrl}
                download={siteConfig.downloads.androidScannerFileName}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs hover:shadow-md transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-lg bg-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <span>{t.phoneAppCta}</span>
              </a>
            </div>

            {/* Trust Note: Windows Desktop, Local Storage, Online Activation */}
            <div className="pt-2 text-xs text-[#554D74] flex items-start gap-2.5 bg-white/70 backdrop-blur-xs p-3 rounded-lg border border-purple-100">
              <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong className="text-[#191330] font-semibold">{t.trustNoteTitle}</strong>{' '}
                {t.trustNote}
              </span>
            </div>
          </div>

          {/* Right Column: Prominent Desktop App Preview */}
          <div className="lg:col-span-7 relative">
            {/* Subtle purple gradient glow behind preview */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500/15 via-indigo-500/10 to-transparent rounded-2xl blur-lg pointer-events-none" />

            <div className="relative space-y-2">


              <a href="#galerie" className="block cursor-pointer">
                <DesktopAppPreview lang={lang} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
