import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, Globe, BookOpen, Eye, ChevronDown } from 'lucide-react';
import { TechDeskLogo } from './TechDeskLogo';
import { Language, translations } from '../translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDownload: (type: 'trial' | 'purchase') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenDownload,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopCatalogueOpen, setDesktopCatalogueOpen] = useState(false);
  const [mobileCatalogueOpen, setMobileCatalogueOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#accueil');
  const desktopCatalogueRef = useRef<HTMLDivElement>(null);
  const mobileCatalogueRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLang].nav;
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Section scrollspy for active state
      const sectionIds = [
        'contact',
        'faq',
        'personnalisation',
        'tarifs',
        'catalogue',
        'fonctionnalites',
        'accueil',
      ];
      const scrollPosition = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync hash if present
  useEffect(() => {
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }
  }, []);

  // Keyboard accessibility: close mobile menu & catalogue dropdown with Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (desktopCatalogueOpen) {
          setDesktopCatalogueOpen(false);
        }
        if (mobileCatalogueOpen) {
          setMobileCatalogueOpen(false);
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, desktopCatalogueOpen, mobileCatalogueOpen]);

  // Outside click listener for desktop catalogue dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopCatalogueRef.current &&
        !desktopCatalogueRef.current.contains(event.target as Node)
      ) {
        setDesktopCatalogueOpen(false);
      }
      if (
        mobileCatalogueRef.current &&
        !mobileCatalogueRef.current.contains(event.target as Node)
      ) {
        setMobileCatalogueOpen(false);
      }
    };

    if (desktopCatalogueOpen || mobileCatalogueOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [desktopCatalogueOpen, mobileCatalogueOpen]);

  const navLinks = [
    { href: '#accueil', label: t.home },
    { href: '#fonctionnalites', label: t.features },
    { href: '#catalogue', label: t.catalogue },
    { href: '#tarifs', label: t.pricing },
    { href: '#faq', label: t.faq },
    { href: '#contact', label: t.contact },
  ];

  const toggleLanguage = () => {
    onLanguageChange(currentLang === 'fr' ? 'ar' : 'fr');
  };

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-200 relative ${
        isScrolled
          ? 'shadow-[0_4px_20px_rgba(25,19,48,0.06)]'
          : 'shadow-[0_2px_10px_rgba(25,19,48,0.03)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main top header bar */}
        <div className="flex items-center justify-between h-[64px] sm:h-[84px] lg:h-[90px] gap-3 lg:gap-4 xl:gap-6">
          {/* 1. Brand Logo Anchor */}
          <a
            href="#accueil"
            onClick={() => handleNavClick('#accueil')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-xl flex items-center shrink-0 transition-transform duration-150 hover:opacity-95"
            aria-label="TechDesk DZ Accueil"
          >
            <TechDeskLogo size="md" showTagline={false} />
          </a>

          {/* 2. Desktop Navigation Links (Compact, Evenly Spaced, No Wrapping) */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative whitespace-nowrap px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-[13.5px] font-semibold rounded-lg transition-all duration-150 focus-visible:ring-2 focus-visible:ring-purple-600 ${
                    isActive
                      ? 'text-purple-900 bg-[#F4EFFC] font-bold shadow-2xs'
                      : 'text-[#241C42] hover:text-purple-700 hover:bg-[#F8F5FD]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 inset-x-2 h-[2px] bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. Desktop / Tablet Action Controls: Language Switcher & Compact Vertical Button Stack */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs font-semibold text-[#483F68] hover:text-[#191330] bg-[#F6F2FD] hover:bg-[#EDE5FA] rounded-xl transition-colors border border-purple-200/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer shadow-2xs shrink-0"
              title={t.switchLanguage}
            >
              <Globe className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span className="whitespace-nowrap">
                {currentLang === 'fr' ? 'العربية' : 'Français'}
              </span>
            </button>

            {/* Compact Vertical Stack: Trial Download Button (top) + Catalogue Button (underneath) */}
            <div
              ref={desktopCatalogueRef}
              className="relative flex flex-col justify-center gap-1 sm:gap-1.5 w-44 sm:w-48 lg:w-52 shrink-0"
            >
              {/* Top button: Trial Download */}
              <button
                type="button"
                onClick={() => onOpenDownload('trial')}
                className="w-full box-border inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-1.8 text-xs font-bold text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 active:brightness-95 rounded-lg shadow-2xs hover:shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer whitespace-nowrap min-w-0"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap truncate">{t.downloadTrial}</span>
              </button>

              {/* Bottom button: Catalogue dropdown trigger */}
              <button
                type="button"
                onClick={() => setDesktopCatalogueOpen((prev) => !prev)}
                aria-expanded={desktopCatalogueOpen}
                aria-haspopup="true"
                className={`w-full box-border inline-flex items-center justify-center gap-1.5 px-3 py-1 text-[11px] lg:text-[11.5px] font-bold rounded-lg border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer whitespace-nowrap min-w-0 ${
                  desktopCatalogueOpen
                    ? 'bg-[#EFE7FB] text-purple-950 border-purple-400 ring-1 ring-purple-400/40 shadow-2xs'
                    : 'bg-[#FAF8FE] hover:bg-[#F3EDFC] active:bg-[#ECE1FA] text-[#281C4E] border-purple-200/90 hover:border-purple-300 shadow-2xs'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                <span className="whitespace-nowrap truncate">{t.catalogueButton}</span>
                <ChevronDown
                  className={`w-3 h-3 text-purple-600 shrink-0 transition-transform duration-150 ${
                    desktopCatalogueOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Desktop Catalogue Dropdown Panel */}
              {desktopCatalogueOpen && (
                <div
                  className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-2 w-80 sm:w-88 bg-white rounded-2xl border border-purple-200 shadow-xl p-3.5 sm:p-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-purple-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-purple-100/80 text-purple-700 flex items-center justify-center shrink-0">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-[#191330]">
                        {t.catalogueMenuHeading}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-150">
                      PDF
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {/* Row 1: French catalogue */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#FAF8FE] border border-purple-100 hover:border-purple-200 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-indigo-600" />
                          <span className="text-xs font-bold text-[#191330]">
                            {currentLang === 'ar' ? 'النسخة الفرنسية' : 'Version française'}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#625A82] bg-white px-1.5 py-0.5 rounded border border-purple-100">
                          cat_fr.pdf
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="/cat_fr.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setDesktopCatalogueOpen(false)}
                          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-purple-900 bg-white hover:bg-purple-50 border border-purple-200/90 rounded-lg shadow-2xs transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                          <span>{t.catalogueView}</span>
                        </a>
                        <a
                          href="/cat_fr.pdf"
                          download="cat_fr.pdf"
                          onClick={() => setDesktopCatalogueOpen(false)}
                          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 rounded-lg shadow-2xs transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 shrink-0" />
                          <span>{t.catalogueDownload}</span>
                        </a>
                      </div>
                    </div>

                    {/* Row 2: Arabic catalogue */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#FAF8FE] border border-purple-100 hover:border-purple-200 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-purple-600" />
                          <span className="text-xs font-bold text-[#191330]">
                            {currentLang === 'ar' ? 'النسخة العربية' : 'Version arabe'}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#625A82] bg-white px-1.5 py-0.5 rounded border border-purple-100">
                          cat_ar.pdf
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="/cat_ar.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setDesktopCatalogueOpen(false)}
                          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-purple-900 bg-white hover:bg-purple-50 border border-purple-200/90 rounded-lg shadow-2xs transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                          <span>{t.catalogueView}</span>
                        </a>
                        <a
                          href="/cat_ar.pdf"
                          download="cat_ar.pdf"
                          onClick={() => setDesktopCatalogueOpen(false)}
                          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 rounded-lg shadow-2xs transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 shrink-0" />
                          <span>{t.catalogueDownload}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 4. Mobile Top Row Control: Only hamburger button on opposite side */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#241C42] hover:text-purple-700 hover:bg-[#F6F2FD] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.menuClose : t.menuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 5. Mobile Secondary Row: Full-width vertical stack of Trial and Catalogue buttons (Visible only on mobile < sm) */}
        <div className="sm:hidden pb-3 pt-1 px-0 relative" ref={mobileCatalogueRef}>
          <div className="flex flex-col gap-2 w-full">
            {/* Button 1: Trial Download Button */}
            <button
              type="button"
              onClick={() => onOpenDownload('trial')}
              className="w-full h-[44px] flex items-center justify-center gap-2 px-4 text-xs font-bold text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 active:brightness-95 rounded-xl shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span className="truncate">{t.downloadTrial}</span>
            </button>

            {/* Button 2: Catalogue Dropdown Trigger */}
            <button
              type="button"
              onClick={() => setMobileCatalogueOpen((prev) => !prev)}
              aria-expanded={mobileCatalogueOpen}
              aria-haspopup="true"
              className={`w-full h-[42px] flex items-center justify-center gap-2 px-4 text-xs font-bold rounded-xl border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer ${
                mobileCatalogueOpen
                  ? 'bg-[#EFE7FB] text-purple-950 border-purple-400 ring-1 ring-purple-400/40 shadow-xs'
                  : 'bg-[#FAF8FE] active:bg-[#ECE1FA] text-[#281C4E] border-purple-200/90 shadow-2xs'
              }`}
            >
              <BookOpen className="w-4 h-4 text-purple-700 shrink-0" />
              <span className="truncate">{t.catalogueButton}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-purple-600 shrink-0 transition-transform duration-150 ${
                  mobileCatalogueOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          {/* Mobile Catalogue Dropdown Menu */}
          {mobileCatalogueOpen && (
            <div
              className="absolute top-full inset-x-0 mt-2 mx-0 bg-white rounded-2xl border border-purple-200 shadow-xl p-3.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-purple-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-purple-100/80 text-purple-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#191330]">
                    {t.catalogueMenuHeading}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-150">
                  PDF
                </span>
              </div>

              <div className="space-y-2.5">
                {/* French catalogue */}
                <div className="p-2.5 rounded-xl bg-[#FAF8FE] border border-purple-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-600" />
                      <span className="text-xs font-bold text-[#191330]">
                        {currentLang === 'ar' ? 'النسخة الفرنسية' : 'Version française'}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#625A82] bg-white px-1.5 py-0.5 rounded border border-purple-100">
                      cat_fr.pdf
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="/cat_fr.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileCatalogueOpen(false)}
                      className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-semibold text-purple-900 bg-white hover:bg-purple-50 border border-purple-200/90 rounded-lg shadow-2xs transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                      <span>{t.catalogueView}</span>
                    </a>
                    <a
                      href="/cat_fr.pdf"
                      download="cat_fr.pdf"
                      onClick={() => setMobileCatalogueOpen(false)}
                      className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 rounded-lg shadow-2xs transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.catalogueDownload}</span>
                    </a>
                  </div>
                </div>

                {/* Arabic catalogue */}
                <div className="p-2.5 rounded-xl bg-[#FAF8FE] border border-purple-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      <span className="text-xs font-bold text-[#191330]">
                        {currentLang === 'ar' ? 'النسخة العربية' : 'Version arabe'}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#625A82] bg-white px-1.5 py-0.5 rounded border border-purple-100">
                      cat_ar.pdf
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="/cat_ar.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileCatalogueOpen(false)}
                      className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-semibold text-purple-900 bg-white hover:bg-purple-50 border border-purple-200/90 rounded-lg shadow-2xs transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                      <span>{t.catalogueView}</span>
                    </a>
                    <a
                      href="/cat_ar.pdf"
                      download="cat_ar.pdf"
                      onClick={() => setMobileCatalogueOpen(false)}
                      className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 rounded-lg shadow-2xs transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.catalogueDownload}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Distinctive Thin Purple-to-Violet Gradient Bottom Edge Accent */}
      <div
        className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600"
        aria-hidden="true"
      />

      {/* Mobile Dropdown Drawer (from Hamburger) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE3F7] bg-white px-4 pt-3 pb-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 max-h-[calc(100vh-140px)] overflow-y-auto">
          {/* Language Switcher moved inside the mobile menu drawer */}
          <div className="pb-3 border-b border-[#EAE3F7]">
            <button
              type="button"
              onClick={toggleLanguage}
              className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold text-[#483F68] bg-[#F6F2FD] hover:bg-[#EDE5FA] rounded-xl border border-purple-200/80 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-600" />
                <span>{t.switchLanguage}</span>
              </div>
              <span className="font-bold text-purple-900 bg-white px-2 py-0.5 rounded border border-purple-200">
                {currentLang === 'fr' ? 'العربية' : 'Français'}
              </span>
            </button>
          </div>

          <nav aria-label="Navigation mobile" className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#F4EFFC] text-purple-900 font-bold'
                      : 'text-[#241C42] hover:bg-[#F8F5FD] hover:text-purple-700'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  )}
                </a>
              );
            })}
            <a
              href="#personnalisation"
              onClick={() => handleNavClick('#personnalisation')}
              className={`px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors flex items-center justify-between ${
                activeSection === '#personnalisation'
                  ? 'bg-[#F4EFFC] text-purple-900 font-bold'
                  : 'text-[#241C42] hover:bg-[#F8F5FD] hover:text-purple-700'
              }`}
            >
              <span>{currentLang === 'ar' ? 'التخصيص حسب الطلب' : 'Personnalisation'}</span>
              {activeSection === '#personnalisation' && (
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              )}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
