/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { FeaturesCatalogue } from './components/FeaturesCatalogue';
import { ShowcaseSection } from './components/ShowcaseSection';
import { VideoSection } from './components/VideoSection';
import { StandoutFeatures } from './components/StandoutFeatures';
import { ArchitectureTrust } from './components/ArchitectureTrust';
import { MobileAppSection } from './components/MobileAppSection';
import { PricingSection } from './components/PricingSection';
import { CustomizationSection } from './components/CustomizationSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('techdesk_lang');
      return saved === 'ar' ? 'ar' : 'fr';
    } catch {
      return 'fr';
    }
  });

  const [contactSubject, setContactSubject] = useState<string>('');

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'trial' | 'purchase';
  }>({
    isOpen: false,
    type: 'trial',
  });

  useEffect(() => {
    const isRtl = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('techdesk_lang', lang);
    } catch {
      // Ignore if localStorage unavailable
    }
  }, [lang]);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#telecharger' || hash === '#download' || hash === '#trial') {
        setModalState({ isOpen: true, type: 'trial' });
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenDownload = (type: 'trial' | 'purchase') => {
    setModalState({ isOpen: true, type });
  };

  const handleCloseDownload = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleRequestCustomization = () => {
    const subject =
      lang === 'ar' ? 'طلب تخصيص البرنامج' : 'Demande de personnalisation';
    setContactSubject(subject);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#191330] selection:bg-purple-600 selection:text-white">
      {/* Header */}
      <Header
        currentLang={lang}
        onLanguageChange={setLang}
        onOpenDownload={handleOpenDownload}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Live Windows Desktop App Preview */}
        <Hero lang={lang} onOpenDownload={handleOpenDownload} />

        {/* Practical Store Problems & TechDesk DZ Unified Solution */}
        <ProblemSolution lang={lang} />

        {/* 9 Modules Features Catalogue */}
        <FeaturesCatalogue lang={lang} />

        {/* 13 Official Screenshots Showcase Section */}
        <ShowcaseSection lang={lang} />

        {/* Standout Features: Integrated AI Assistant & Delivery Management */}
        <StandoutFeatures lang={lang} />

        {/* Mobile App Features & Companion Screens */}
        <MobileAppSection lang={lang} onOpenDownload={handleOpenDownload} />

        {/* Windows Native Architecture & Offline Trust */}
        <ArchitectureTrust lang={lang} />

        {/* Video Showcase & Feature Demonstration */}
        <VideoSection lang={lang} onOpenDownload={handleOpenDownload} />

        {/* Transparent Pricing & Licensing Rules (Free Trial vs Lifetime) */}
        <PricingSection lang={lang} onOpenDownload={handleOpenDownload} />

        {/* Personnalisation sur mesure / Custom Tailoring */}
        <CustomizationSection
          lang={lang}
          onRequestCustomization={handleRequestCustomization}
        />

        {/* FAQ with Comprehensive Technical Answers */}
        <FAQSection lang={lang} />

        {/* Direct Contact & Business Inquiry */}
        <ContactSection lang={lang} initialSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer lang={lang} onOpenDownload={handleOpenDownload} />

      {/* Download and Purchase Status Modal */}
      <DownloadModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        onClose={handleCloseDownload}
        lang={lang}
      />
    </div>
  );
}
