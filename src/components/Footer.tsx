import React from 'react';
import { TechDeskLogo } from './TechDeskLogo';
import { Language, translations } from '../translations';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  lang: Language;
  onOpenDownload: (type: 'trial' | 'purchase') => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDownload }) => {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;
  const isRtl = lang === 'ar';

  return (
    <footer className="bg-gradient-to-b from-[#130E2E] to-[#0A0718] text-purple-200/80 text-xs border-t border-purple-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3.5">
            <TechDeskLogo size="md" showTagline={false} variant="dark" />
            <p className="text-purple-200/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.productDesc}
            </p>
            <div className="text-[11px] text-purple-400/80 font-mono">
              Windows Native 64-bit • v{siteConfig.product.version}
            </div>
          </div>

          {/* Nav Column 1: Produit */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.sections.product}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">
                  {navT.home}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenDownload('trial')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {navT.downloadTrial}
                </button>
              </li>
              <li>
                <a
                  href={siteConfig.downloads.androidScannerUrl}
                  download={siteConfig.downloads.androidScannerFileName}
                  className="hover:text-white transition-colors text-left"
                >
                  {lang === 'ar' ? 'تطبيق الهاتف (TechDesk Review APK)' : 'TechDesk Review (Android APK)'}
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'صور البرنامج' : 'Captures d\'écran'}
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-white transition-colors">
                  {navT.pricing}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenDownload('purchase')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {lang === 'ar' ? 'الترخيص الدائم' : 'Licence à vie'}
                </button>
              </li>
              <li>
                <a href="#personnalisation" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'التخصيص حسب الطلب' : 'Personnalisation sur mesure'}
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.sections.features}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'نقطة البيع والصندوق' : 'Caisse & Ventes'}
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'إدارة المخزون والسلع' : 'Gestion du stock'}
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'خدمة ما بعد البيع والتصليح' : 'Service après-vente (SAV)'}
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'طباعة التذاكر والباركود' : 'Impression tickets & étiquettes'}
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.sections.resources}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {navT.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {navT.contact}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-10 pt-6 border-t border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-purple-400/70">
          <div>
            © {new Date().getFullYear()} {t.copyright}
          </div>
          <div className="text-center sm:text-right">
            {t.windowsNotice}
          </div>
        </div>
      </div>
    </footer>
  );
};
