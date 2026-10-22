import React, { useState, useEffect, useCallback } from 'react';
import {
  Smartphone,
  Download,
  BarChart3,
  FileSpreadsheet,
  ScanLine,
  Maximize2,
  X,
  ExternalLink,
} from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../config/siteConfig';

interface MobileAppSectionProps {
  lang: Language;
  onOpenDownload?: (type: 'trial' | 'purchase') => void;
}

interface FeatureItem {
  id: string;
  image: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

export const MobileAppSection: React.FC<MobileAppSectionProps> = ({ lang }) => {
  const t = translations[lang].mobileApp;
  const isRtl = lang === 'ar';

  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const features: FeatureItem[] = [
    {
      id: 'dashboard',
      image: '/phonepic1.webp',
      title: t.feature1.title,
      description: t.feature1.desc,
      icon: BarChart3,
      tag: isRtl ? 'نظرة عامة' : 'Aperçu global',
    },
    {
      id: 'reports',
      image: '/phonepic2.webp',
      title: t.feature2.title,
      description: t.feature2.desc,
      icon: FileSpreadsheet,
      tag: isRtl ? 'متابعة دورية' : 'Suivi d’activité',
    },
    {
      id: 'scanner',
      image: '/phonepic3.webp',
      title: t.feature3.title,
      description: t.feature3.desc,
      icon: ScanLine,
      tag: isRtl ? 'كاميرا الهاتف' : 'Caméra mobile',
    },
  ];

  const handleCloseModal = useCallback(() => {
    setActiveModalImage(null);
  }, []);

  useEffect(() => {
    if (!activeModalImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalImage, handleCloseModal]);

  return (
    <section
      id="mobile-app"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAF8FD] to-white relative overflow-hidden border-t border-[#EDE8F8]"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/3 start-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 end-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* =========================================================================
            1. Intro Area — Two-column desktop layout with phonepic0.webp
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-28">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-start">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200/80 tracking-wide uppercase shadow-xs">
              <Smartphone className="w-4 h-4 text-purple-600" />
              <span>{t.badge}</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191330] tracking-tight leading-tight">
              {t.heading}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#4E446B] leading-relaxed max-w-2xl">
              {t.description}
            </p>

            {/* Small supporting text */}
            <div className="p-4 rounded-xl bg-white border border-[#E9E4F5] shadow-xs">
              <p className="text-sm sm:text-base text-[#544C73] font-medium leading-relaxed">
                {t.supportingText}
              </p>
            </div>

            {/* Action buttons & direct download */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={siteConfig.downloads.androidScannerUrl}
                download={siteConfig.downloads.androidScannerFileName}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                <Download className="w-5 h-5 shrink-0" />
                <span>{t.downloadCta}</span>
              </a>

              <div className="text-xs text-[#6A608A] flex items-center justify-center sm:justify-start gap-1.5 px-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{t.downloadDirect}</span>
              </div>
            </div>
          </div>

          {/* Screenshot Column — phonepic0.webp in phone frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() =>
                setActiveModalImage({
                  src: '/phonepic0.webp',
                  title: t.heading,
                  description: t.description,
                })
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalImage({
                    src: '/phonepic0.webp',
                    title: t.heading,
                    description: t.description,
                  });
                }
              }}
              aria-label={t.heading}
              className="group cursor-pointer relative max-w-[280px] sm:max-w-[310px] w-full"
            >
              {/* Phone Exterior Frame */}
              <div className="relative bg-[#1A1333] p-3 rounded-[2.5rem] shadow-[0_20px_45px_rgba(25,19,48,0.22)] border-[3px] border-[#2C2152] transition-transform duration-300 group-hover:scale-[1.02]">
                {/* Speaker / Camera Notch */}
                <div className="flex justify-center items-center pb-2">
                  <div className="w-16 h-3 bg-[#0E0920] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#1F183E] rounded-full mx-1" />
                    <div className="w-6 h-1 bg-[#1F183E] rounded-full mx-1" />
                  </div>
                </div>

                {/* Screen Display Container */}
                <div className="relative bg-[#140E29] rounded-[1.8rem] overflow-hidden border border-white/10 shadow-inner">
                  <img
                    src="/phonepic0.webp"
                    alt="TechDesk Mobile App Interface"
                    className="w-full h-auto object-contain block select-none"
                    loading="lazy"
                  />

                  {/* Expand Overlay */}
                  <div className="absolute inset-0 bg-[#130E2E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 text-white text-xs font-semibold backdrop-blur-xs shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-purple-300" />
                      <span>{t.zoomHint}</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="pt-2 flex justify-center">
                  <div className="w-20 h-1 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. Three Feature Presentations — phonepic1.webp, phonepic2.webp, phonepic3.webp
            ========================================================================= */}
        <div className="border-t border-[#EDE8F8] pt-14 sm:pt-20">
          {/* Section Header for features */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191330] tracking-tight">
              {t.featuresHeading}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#544C73] leading-relaxed">
              {t.featuresSubtitle}
            </p>
          </div>

          {/* Three Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="bg-white rounded-2xl border border-[#E9E4F5] p-5 sm:p-6 shadow-[0_4px_16px_rgba(25,19,48,0.03)] hover:shadow-[0_12px_28px_rgba(109,40,217,0.1)] hover:border-purple-300 transition-all duration-200 flex flex-col h-full"
                >
                  {/* Smartphone Frame Wrapper */}
                  <div
                    onClick={() =>
                      setActiveModalImage({
                        src: feature.image,
                        title: feature.title,
                        description: feature.description,
                      })
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveModalImage({
                          src: feature.image,
                          title: feature.title,
                          description: feature.description,
                        });
                      }
                    }}
                    aria-label={feature.title}
                    className="group cursor-pointer mx-auto max-w-[240px] sm:max-w-[260px] w-full mb-5"
                  >
                    <div className="relative bg-[#1A1333] p-2.5 rounded-[2.2rem] shadow-[0_12px_30px_rgba(25,19,48,0.18)] border-2 border-[#2C2152] transition-transform duration-300 group-hover:scale-[1.02]">
                      {/* Top notch */}
                      <div className="flex justify-center items-center pb-1.5">
                        <div className="w-12 h-2 bg-[#0E0920] rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#1F183E] rounded-full" />
                        </div>
                      </div>

                      {/* Screen */}
                      <div className="relative bg-[#140E29] rounded-[1.6rem] overflow-hidden border border-white/10 shadow-inner">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-auto object-contain block select-none"
                          loading="lazy"
                        />

                        {/* Hover zoom hint */}
                        <div className="absolute inset-0 bg-[#130E2E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/75 text-white text-xs font-semibold backdrop-blur-xs shadow-md">
                            <Maximize2 className="w-3.5 h-3.5 text-purple-300" />
                            <span>{t.zoomHint}</span>
                          </span>
                        </div>
                      </div>

                      {/* Bottom bar */}
                      <div className="pt-1.5 flex justify-center">
                        <div className="w-16 h-1 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="text-start space-y-2 mt-auto pt-2 border-t border-[#F2EEF9]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                        <Icon className="w-4 h-4 text-purple-700" />
                      </div>
                      <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider">
                        {feature.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#191330] leading-snug">
                      {feature.title}
                    </h4>

                    <p className="text-sm text-[#544C73] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          Lightbox Zoom Modal for High-Resolution Inspection
          ========================================================================= */}
      {activeModalImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-[#1A1333] border border-white/20 rounded-3xl max-w-sm sm:max-w-md w-full overflow-hidden shadow-2xl p-4 sm:p-5 flex flex-col items-center animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white">
              <div>
                <h4 id="modal-title" className="text-base font-bold text-white">
                  {activeModalImage.title}
                </h4>
                <p className="text-xs text-purple-200 mt-0.5 line-clamp-1">
                  {activeModalImage.description}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label={lang === 'ar' ? 'إغلاق' : 'Fermer'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="max-h-[75vh] overflow-y-auto rounded-2xl border border-white/10">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.title}
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
