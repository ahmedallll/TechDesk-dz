import React, { useState } from 'react';
import {
  Play,
  ExternalLink,
  Download,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../config/siteConfig';

interface VideoSectionProps {
  lang: Language;
  onOpenDownload: (type: 'trial' | 'purchase') => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  lang,
  onOpenDownload,
}) => {
  const t = translations[lang].videoSection;
  const isRtl = lang === 'ar';
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const videoId = siteConfig.media?.demoVideoId || 'QwJUhLTmNmc';
  const youtubeUrl = siteConfig.media?.demoVideoUrl || 'https://youtu.be/QwJUhLTmNmc';

  // Embed URL with vq=hd720 requesting 720p HD playback without blocking playback scripts
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&vq=hd720`;

  return (
    <section
      id="video"
      className="scroll-mt-20 py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAF7FE] to-white border-t border-[#EDE8F8] relative overflow-hidden"
    >
      {/* Subtle background ambient purple glow */}
      <div className="absolute top-1/3 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-200/40 via-indigo-200/25 to-pink-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-10 w-72 h-72 bg-purple-100/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE5FA] border border-[#DDD3F5] text-purple-900 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
            <Play className="w-3.5 h-3.5 text-purple-700 fill-purple-700/20" />
            <span>{t.sectionBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191330] tracking-tight">
            {t.sectionTitle}
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#544C73] leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Responsive 16:9 Video Player */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-[0_20px_50px_rgba(25,19,48,0.16)] border border-purple-200/70 ring-1 ring-black/5">
            {/* Fallback / Error view if embedded player cannot load */}
            {iframeError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#130E2E] text-white space-y-4">
                <Play className="w-12 h-12 text-purple-400" />
                <p className="text-sm sm:text-base text-purple-200 max-w-md">
                  {t.fallbackNotice}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIframeError(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-xs font-semibold text-white border border-purple-700/60 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'إعادة المحاولة' : 'Réessayer'}</span>
                  </button>
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-xs sm:text-sm font-bold text-white shadow-md transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t.watchOnYouTube}</span>
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={embedUrl}
                title={t.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                onError={() => setIframeError(true)}
                className={`w-full h-full border-0 transition-opacity duration-300 ${
                  iframeLoaded ? 'opacity-100' : 'opacity-90'
                }`}
              />
            )}
          </div>

          {/* Video Sub-actions: YouTube link & official software notice */}
          <div className="mt-3.5 px-1 sm:px-2 flex items-center justify-between gap-3 flex-wrap">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors group cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span className="underline decoration-purple-300 underline-offset-4 group-hover:decoration-purple-900">
                {t.watchOnYouTube}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-600 shrink-0 group-hover:text-purple-900" />
            </a>

            <div className="text-[11px] sm:text-xs text-[#544C73] flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-100/90 text-purple-900 text-[10px] sm:text-[11px] font-bold border border-purple-200">
                HD 720p
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>{t.featuresNotice}</span>
            </div>
          </div>

          {/* Under-player Call to action banner */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#E6DFF5] shadow-[0_4px_16px_rgba(25,19,48,0.04)] flex items-center justify-between gap-4 flex-wrap">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>
                  {isRtl ? 'تجربة حقيقية دون أي مخاطرة' : 'Testez par vous-même sans engagement'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#544C73] leading-relaxed">
                {isRtl
                  ? 'ثبّت البرنامج على جهازك الآن وجرّب كافة المميزات الظاهرة في الفيديو مجاناً لمدة 72 ساعة.'
                  : 'Installez le logiciel sur votre ordinateur et testez toutes les fonctionnalités présentées dans la vidéo gratuitement pendant 72h.'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenDownload('trial')}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>{t.tryFreeCta}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
