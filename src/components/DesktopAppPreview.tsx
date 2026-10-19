import React from 'react';
import { Language } from '../translations';

interface DesktopAppPreviewProps {
  lang?: Language;
  className?: string;
}

export const DesktopAppPreview: React.FC<DesktopAppPreviewProps> = ({
  lang,
  className = '',
}) => {
  const altText =
    lang === 'ar'
      ? 'واجهة برنامج TechDesk DZ — لقطة شاشة حقيقية للبرنامج'
      : 'Capture d’écran réelle du logiciel TechDesk DZ — Interface Windows';

  return (
    <div
      className={`w-full max-w-full rounded-2xl border border-purple-200/80 bg-white shadow-[0_16px_40px_rgba(25,19,48,0.12)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(107,33,168,0.18)] ${className}`}
    >
      <img
        src="/bg.webp"
        alt={altText}
        className="w-full h-auto max-w-full block object-contain"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
