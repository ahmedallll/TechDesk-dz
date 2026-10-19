import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Camera,
} from 'lucide-react';
import { Language, translations } from '../translations';

interface ShowcaseSectionProps {
  lang: Language;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ lang }) => {
  const t = translations[lang].showcase;
  const isRtl = lang === 'ar';
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const total = t.items.length;

  const handleOpen = (idx: number) => {
    setSelectedIdx(idx);
  };

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIdx((current) => {
      if (current === null) return null;
      return (current - 1 + total) % total;
    });
  }, [total]);

  const handleNext = useCallback(() => {
    setSelectedIdx((current) => {
      if (current === null) return null;
      return (current + 1) % total;
    });
  }, [total]);

  // Keyboard navigation for overlay
  useEffect(() => {
    if (selectedIdx === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) {
          handleNext();
        } else {
          handlePrev();
        }
      } else if (e.key === 'ArrowRight') {
        if (isRtl) {
          handlePrev();
        } else {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    // Prevent body scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIdx, isRtl, handleClose, handlePrev, handleNext]);

  const selectedItem = selectedIdx !== null ? t.items[selectedIdx] : null;

  return (
    <section
      id="galerie"
      className="py-16 sm:py-24 bg-[#FAF7FE] border-t border-[#EDE8F8] relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE5FA] border border-[#DDD3F5] text-purple-900 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-purple-700" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191330] tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#544C73] leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 13 Screenshots Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {t.items.map((item, idx) => (
            <div
              key={item.image}
              onClick={() => handleOpen(idx)}
              className="group bg-white rounded-xl border border-[#E6DFF5] shadow-[0_2px_8px_rgba(25,19,48,0.04)] hover:shadow-[0_10px_24px_rgba(109,40,217,0.12)] hover:border-purple-300 transition-all duration-200 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpen(idx);
                }
              }}
              aria-label={`${item.title} - ${t.expandHint}`}
            >
              {/* Neutral background frame around screenshot with consistent aspect ratio */}
              <div className="relative aspect-[16/10] bg-[#F4F0FA] p-3 sm:p-3.5 overflow-hidden flex items-center justify-center border-b border-[#EDE8F8]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-md shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Subtle hover overlay badge */}
                <div className="absolute inset-0 bg-[#130E2E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#191330]/85 text-white text-xs font-semibold backdrop-blur-xs shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-purple-300" />
                    <span>{t.expandHint}</span>
                  </span>
                </div>

                {/* Card index pill */}
                <div className="absolute top-2.5 start-2.5">
                  <span className="inline-block px-2 py-0.5 text-[11px] font-bold font-mono text-purple-900 bg-white/95 rounded-md border border-purple-200/80 shadow-2xs backdrop-blur-xs">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start">
                <h3 className="text-base sm:text-lg font-bold text-[#191330] group-hover:text-purple-700 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#544C73] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {selectedIdx !== null && selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#130E2E]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl border border-purple-200/70 flex flex-col overflow-hidden max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#EDE8F8] bg-white">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-mono font-bold text-purple-900 bg-[#EDE5FA] rounded-md border border-[#DDD3F5]">
                  {t.counterLabel
                    .replace('{current}', String(selectedIdx + 1))
                    .replace('{total}', String(total))}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#191330] truncate">
                  {selectedItem.title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 text-[#544C73] hover:text-[#191330] hover:bg-[#F6F2FD] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
                  aria-label={t.closeOverlay}
                  title={t.closeOverlay}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area with Navigation Buttons */}
            <div className="relative flex-1 bg-[#0F0B1F] flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[300px] max-h-[68vh]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-w-full max-h-[64vh] object-contain rounded-md shadow-lg"
              />

              {/* Prev Navigation Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (isRtl) {
                    handleNext();
                  } else {
                    handlePrev();
                  }
                }}
                className="absolute start-2 sm:start-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-black/60 hover:bg-purple-900/80 text-white rounded-full transition-all border border-white/20 hover:scale-105 cursor-pointer backdrop-blur-xs"
                aria-label={t.prevImage}
                title={t.prevImage}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 rtl:rotate-180" />
              </button>

              {/* Next Navigation Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (isRtl) {
                    handlePrev();
                  } else {
                    handleNext();
                  }
                }}
                className="absolute end-2 sm:end-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-black/60 hover:bg-purple-900/80 text-white rounded-full transition-all border border-white/20 hover:scale-105 cursor-pointer backdrop-blur-xs"
                aria-label={t.nextImage}
                title={t.nextImage}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 rtl:rotate-180" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#FAF7FE] border-t border-[#EDE8F8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-sm text-[#282148] leading-relaxed font-medium">
                {selectedItem.desc}
              </p>

              {/* Thumbnails Navigation Quick Bar */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full shrink-0">
                {t.items.map((it, i) => (
                  <button
                    key={it.image}
                    type="button"
                    onClick={() => setSelectedIdx(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === selectedIdx
                        ? 'w-6 bg-purple-700'
                        : 'w-2 bg-[#D4C8EB] hover:bg-purple-400'
                    }`}
                    aria-label={`Aller à la capture ${i + 1}`}
                    title={it.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
