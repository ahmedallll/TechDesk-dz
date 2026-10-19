import React, { useState } from 'react';
import {
  Truck,
  CheckCircle2,
  Bot,
  Maximize2,
  X,
  Layers,
} from 'lucide-react';
import { Language, translations } from '../translations';

interface StandoutFeaturesProps {
  lang: Language;
}

export const StandoutFeatures: React.FC<StandoutFeaturesProps> = ({ lang }) => {
  const t = translations[lang].standoutFeatures;
  const isRtl = lang === 'ar';
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section
      id="differences"
      className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-[#EDE8F8]"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 start-0 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 end-0 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191330] tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#544C73] leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Features Blocks */}
        <div className="space-y-16 sm:space-y-24">
          {/* Feature 1: Integrated AI Assistant */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Column - Left on Desktop LTR */}
            <div className="lg:col-span-7 order-1 lg:order-1">
              <div
                onClick={() =>
                  setActiveImage({
                    src: '/screenshots/14.webp',
                    title: t.aiAssistant.title,
                  })
                }
                className="group relative bg-[#F4F0FA] rounded-xl border border-[#E6DFF5] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(25,19,48,0.04)] hover:shadow-[0_10px_24px_rgba(109,40,217,0.12)] hover:border-purple-300 transition-all duration-200 overflow-hidden cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveImage({
                      src: '/screenshots/14.webp',
                      title: t.aiAssistant.title,
                    });
                  }
                }}
                aria-label={t.aiAssistant.title}
              >
                <div className="relative overflow-hidden flex items-center justify-center">
                  <img
                    src="/screenshots/14.webp"
                    alt={t.aiAssistant.title}
                    className="w-full h-auto object-contain rounded-md shadow-xs transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                  />

                  {/* Expand Overlay Hint */}
                  <div className="absolute inset-0 bg-[#130E2E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#191330]/85 text-white text-xs font-semibold backdrop-blur-xs shadow-md">
                      <Maximize2 className="w-4 h-4 text-purple-300" />
                      <span>{isRtl ? 'انقر للتكبير' : 'Agrandir la capture'}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column - Right on Desktop LTR */}
            <div className="lg:col-span-5 order-2 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-50 text-purple-800 text-xs font-bold border border-purple-100">
                <Bot className="w-4 h-4 text-purple-600" />
                <span>{t.aiAssistant.badge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#191330] leading-tight">
                {t.aiAssistant.title}
              </h3>

              <p className="text-sm sm:text-base text-[#544C73] leading-relaxed">
                {t.aiAssistant.desc}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3.5 pt-2">
                {t.aiAssistant.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#282148] leading-normal">
                      <strong className="font-bold text-[#191330]">
                        {bullet.bold}
                      </strong>
                      {' : '}
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2: Delivery Management */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Column - Left on Desktop LTR (Order 1 on Desktop, Order 2 on Mobile) */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-800 text-xs font-bold border border-indigo-100">
                <Truck className="w-4 h-4 text-indigo-600" />
                <span>{t.delivery.badge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#191330] leading-tight">
                {t.delivery.title}
              </h3>

              <p className="text-sm sm:text-base text-[#544C73] leading-relaxed">
                {t.delivery.desc}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3.5 pt-2">
                {t.delivery.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#282148] leading-normal">
                      <strong className="font-bold text-[#191330]">
                        {bullet.bold}
                      </strong>
                      {' : '}
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Column - Right on Desktop LTR (Order 2 on Desktop, Order 1 on Mobile) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                onClick={() =>
                  setActiveImage({
                    src: '/screenshots/15.webp',
                    title: t.delivery.title,
                  })
                }
                className="group relative bg-[#F4F0FA] rounded-xl border border-[#E6DFF5] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(25,19,48,0.04)] hover:shadow-[0_10px_24px_rgba(109,40,217,0.12)] hover:border-purple-300 transition-all duration-200 overflow-hidden cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveImage({
                      src: '/screenshots/15.webp',
                      title: t.delivery.title,
                    });
                  }
                }}
                aria-label={t.delivery.title}
              >
                <div className="relative overflow-hidden flex items-center justify-center">
                  <img
                    src="/screenshots/15.webp"
                    alt={t.delivery.title}
                    className="w-full h-auto object-contain rounded-md shadow-xs transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                  />

                  {/* Expand Overlay Hint */}
                  <div className="absolute inset-0 bg-[#130E2E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#191330]/85 text-white text-xs font-semibold backdrop-blur-xs shadow-md">
                      <Maximize2 className="w-4 h-4 text-purple-300" />
                      <span>{isRtl ? 'انقر للتكبير' : 'Agrandir la capture'}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-[#130E2E]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl border border-purple-200/70 flex flex-col overflow-hidden max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#EDE8F8] bg-white">
              <h4 className="text-base sm:text-lg font-bold text-[#191330] truncate">
                {activeImage.title}
              </h4>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="p-2 text-[#544C73] hover:text-[#191330] hover:bg-[#F6F2FD] rounded-lg transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="bg-[#0F0B1F] flex items-center justify-center p-3 sm:p-5 max-h-[75vh] overflow-auto">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-w-full max-h-[70vh] object-contain rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
