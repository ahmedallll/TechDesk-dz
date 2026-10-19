import React, { useState } from 'react';
import {
  ShoppingCart,
  Package,
  Layers,
  Users,
  Truck,
  Wrench,
  Printer,
  BarChart3,
  Languages,
  CheckCircle,
  HardDrive,
  Info,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';
import { Language, translations } from '../translations';

interface FeaturesCatalogueProps {
  lang: Language;
}

export const FeaturesCatalogue: React.FC<FeaturesCatalogueProps> = ({ lang }) => {
  const t = translations[lang].catalogue;
  const isRtl = lang === 'ar';
  const [selectedModuleId, setSelectedModuleId] = useState<string>('pos');

  const moduleIcons: Record<string, React.ElementType> = {
    pos: ShoppingCart,
    catalog: Package,
    stock: Layers,
    partners: Users,
    purchases: Truck,
    sav: Wrench,
    printing: Printer,
    dashboard: BarChart3,
    bilingual: Languages,
  };

  const selectedModule =
    t.modules.find((m) => m.id === selectedModuleId) || t.modules[0];
  const ActiveIcon = moduleIcons[selectedModule.id] || ShoppingCart;

  return (
    <section id="catalogue" className="py-14 md:py-20 bg-[#FAF8FF] border-b border-[#EDE8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الوحدات المكتملة' : 'Catalogue fonctionnel'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191330] tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#554D74] leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 9 Modules Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {t.modules.map((mod) => {
            const Icon = moduleIcons[mod.id] || ShoppingCart;
            const isSelected = mod.id === selectedModuleId;

            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => setSelectedModuleId(mod.id)}
                className={`text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-purple-600 shadow-sm ring-1 ring-purple-600/30'
                    : 'bg-white/80 border-[#E9E2F7] hover:bg-white hover:border-purple-300'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-xs'
                      : 'bg-[#F2EDFB] text-purple-700'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-purple-700">
                      {mod.category}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200">
                        {isRtl ? 'المحدد' : 'Sélectionné'}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-[#191330] truncate mt-0.5">
                    {mod.title}
                  </div>
                  <p className="text-xs text-[#625A82] line-clamp-2 mt-0.5 leading-relaxed">
                    {mod.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Focus Area for the Selected Module */}
        <div className="bg-white rounded-2xl border border-purple-200/80 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-100 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#160E33] via-[#24154E] to-[#3B196C] text-white flex items-center justify-center shadow-xs">
                <ActiveIcon className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <div className="text-xs font-semibold text-purple-700 uppercase tracking-wider">
                  {selectedModule.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#191330]">
                  {selectedModule.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-purple-700 bg-[#F6F2FD] border border-purple-200 px-2.5 py-1 rounded">
                {selectedModule.previewLabel}
              </span>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                {isRtl ? 'محلي 100%' : '100% Hors-ligne'}
              </span>
            </div>
          </div>

          {/* Detailed description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#191330] uppercase tracking-wider">
              {lang === 'ar' ? 'وصف الوظيفة' : 'Description du module'}
            </h4>
            <p className="text-sm sm:text-base text-[#554D74] leading-relaxed">
              {selectedModule.fullDesc}
            </p>
          </div>

          {/* Grouped Capabilities */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-[#191330] uppercase tracking-wider">
              {lang === 'ar' ? 'القدرات والعمليات المضمنة' : 'Capacités intégrées'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedModule.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#282148] bg-[#FAF8FF] p-3 rounded-lg border border-[#EDE8F8]"
                >
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Natural Catalogue Connection to Customization */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FF] border border-purple-200/90 text-[#191330] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-0.5">
                {lang === 'ar' ? 'تخصيص حسب الطلب' : 'Personnalisation sur mesure'}
              </div>
              <p className="text-xs sm:text-sm text-[#554D74] leading-relaxed max-w-2xl">
                {lang === 'ar'
                  ? 'هل ترغب في إضافة أدوات مخصصة أو تعديل طريقة عمل الوظائف لمتجرك؟ يمكن تكييف البرنامج حسب احتياجاتك.'
                  : 'Besoin d’ajouter des fonctionnalités spécifiques ou d’adapter le logiciel à votre façon de travailler ? TechDesk DZ est personnalisable.'}
              </p>
            </div>
          </div>
          <a
            href="#personnalisation"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors shrink-0 shadow-2xs cursor-pointer"
          >
            <span>{lang === 'ar' ? 'استكشف التخصيص' : 'En savoir plus'}</span>
            <span aria-hidden="true">{isRtl ? '←' : '→'}</span>
          </a>
        </div>

        {/* Small Separate Information Strip for Peripherals */}
        <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200/60 text-xs text-purple-900 flex items-center gap-2.5">
          <Info className="w-4 h-4 text-purple-700 shrink-0" />
          <div className="leading-relaxed">
            <strong className="font-semibold">{t.hardwareNoticeTitle}</strong>{' '}
            <span className="text-[#554D74]">{t.hardwareNoticeDesc}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
