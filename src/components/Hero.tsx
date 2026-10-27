import React from 'react';
import { Download, Sparkles, ShieldCheck, Smartphone, Play } from 'lucide-react';
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

            {/* Reorganized 4 Action Cards Grid (Balanced informative text, visual hierarchy: Blue > Green > Orange > Purple) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {/* 1. Windows Desktop Trial - Blue (Priority 1: Largest interest & luminous glow) */}
              <button
                type="button"
                onClick={() => onOpenDownload('trial')}
                className="group relative flex items-center gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#2052F5] via-[#2450EC] to-[#143ED8] hover:from-[#1845E0] hover:to-[#0F32BD] text-white shadow-[0_8px_24px_rgba(32,82,245,0.40)] hover:shadow-[0_12px_28px_rgba(32,82,245,0.52)] ring-2 ring-blue-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-left rtl:text-right min-h-[60px] sm:min-h-[64px]"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/25 backdrop-blur-xs ring-1 ring-white/40 flex items-center justify-center shrink-0 group-hover:bg-white/35 group-hover:scale-105 transition-all shadow-xs">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                    {t.ctaPrimary}
                  </div>
                  <div className="text-[11px] text-blue-100 font-medium mt-0.5 leading-none">
                    {t.ctaPrimarySub}
                  </div>
                </div>
              </button>

              {/* 2. Android Mobile App - Green (Priority 2: Solid emerald) */}
              <a
                href={siteConfig.downloads.androidScannerUrl}
                download={siteConfig.downloads.androidScannerFileName}
                className="group flex items-center gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#008A52] via-[#007C48] to-[#016E3F] hover:from-[#007B48] hover:to-[#016036] text-white shadow-[0_4px_16px_rgba(0,138,82,0.28)] hover:shadow-[0_6px_20px_rgba(0,138,82,0.38)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-left rtl:text-right min-h-[60px] sm:min-h-[64px]"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-105 transition-all shadow-2xs">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {t.phoneAppCta}
                  </div>
                  <div className="text-[11px] text-emerald-100 font-medium mt-0.5 leading-none">
                    {t.phoneAppSub}
                  </div>
                </div>
              </a>

              {/* 3. Video Showcase - Orange (Priority 3: Moderate warm amber) */}
              <a
                href="#video"
                onClick={(e) => {
                  e.preventDefault();
                  const playerEl =
                    document.getElementById('video-player') || document.getElementById('video');
                  if (playerEl) {
                    const headerHeight =
                      document.querySelector('header')?.getBoundingClientRect().height || 85;
                    const playerRect = playerEl.getBoundingClientRect();
                    const playerTop = playerRect.top + window.pageYOffset;

                    const viewportHeight = window.innerHeight;
                    const availableHeight = viewportHeight - headerHeight;
                    let targetScroll = playerTop - headerHeight - 16;

                    // If screen has sufficient height, center the video player vertically in view
                    if (availableHeight > playerRect.height + 40) {
                      const verticalPadding = (availableHeight - playerRect.height) / 2;
                      targetScroll = playerTop - headerHeight - verticalPadding;
                    }

                    window.scrollTo({
                      top: Math.max(0, Math.round(targetScroll)),
                      behavior: 'smooth',
                    });
                    window.history.pushState(null, '', '#video');
                  }
                }}
                className="group flex items-center gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#D96B00]/92 via-[#C85D00]/92 to-[#B34E00]/92 hover:from-[#D96B00] hover:to-[#B34E00] text-white shadow-[0_2px_10px_rgba(217,107,0,0.20)] hover:shadow-[0_4px_16px_rgba(217,107,0,0.30)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-left rtl:text-right min-h-[60px] sm:min-h-[64px]"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/18 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-white/25 group-hover:scale-105 transition-all shadow-2xs">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current ml-0.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-semibold text-white/95 leading-tight">
                    {t.videoCta}
                  </div>
                  <div className="text-[11px] text-amber-100/90 font-medium mt-0.5 leading-none">
                    {t.videoSub}
                  </div>
                </div>
              </a>

              {/* 4. Features Catalogue - Purple (Priority 4: Subtle soft violet) */}
              <a
                href="#fonctionnalites"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('fonctionnalites');
                  if (el) {
                    const headerOffset = 85;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    window.history.pushState(null, '', '#fonctionnalites');
                  }
                }}
                className="group flex items-center gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#7E32EB]/70 via-[#6B22DE]/70 to-[#5714C8]/70 hover:from-[#7E32EB]/90 hover:to-[#5714C8]/90 border border-purple-400/25 hover:border-purple-400/40 text-white shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-left rtl:text-right min-h-[60px] sm:min-h-[64px]"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/14 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:scale-105 transition-all shadow-2xs">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                    {t.ctaSecondary}
                  </div>
                  <div className="text-[11px] text-purple-200/75 font-normal mt-0.5 leading-none">
                    {t.ctaSecondarySub}
                  </div>
                </div>
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
