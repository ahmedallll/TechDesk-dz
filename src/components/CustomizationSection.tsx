import React from 'react';
import {
  Sparkles,
  PlusCircle,
  Sliders,
  MinusCircle,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { Language, translations } from '../translations';

interface CustomizationSectionProps {
  lang: Language;
  onRequestCustomization: () => void;
}

export const CustomizationSection: React.FC<CustomizationSectionProps> = ({
  lang,
  onRequestCustomization,
}) => {
  const t = translations[lang].customization;
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const items = [
    {
      key: 'add',
      icon: PlusCircle,
      iconColor: 'text-purple-600 bg-purple-100/80 border-purple-200',
      title: t.items.add.title,
      desc: t.items.add.desc,
      tag: isRtl ? 'إضافة أدوات' : 'Extension',
    },
    {
      key: 'modify',
      icon: Sliders,
      iconColor: 'text-indigo-600 bg-indigo-100/80 border-indigo-200',
      title: t.items.modify.title,
      desc: t.items.modify.desc,
      tag: isRtl ? 'ملاءمة العمل' : 'Adaptation',
    },
    {
      key: 'remove',
      icon: MinusCircle,
      iconColor: 'text-violet-600 bg-violet-100/80 border-violet-200',
      title: t.items.remove.title,
      desc: t.items.remove.desc,
      tag: isRtl ? 'تبسيط الواجهة' : 'Simplification',
    },
  ];

  return (
    <section
      id="personnalisation"
      className="py-14 md:py-20 bg-gradient-to-b from-[#FAF8FF] via-white to-[#FAF8FF] border-b border-[#EDE8F8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{t.sectionBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191330] tracking-tight">
            {t.sectionTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#554D74] leading-relaxed max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 3 Core Actions Grid (Ajouter, Modifier, Supprimer) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.key}
                className="bg-white rounded-2xl border border-purple-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-purple-400 hover:shadow-xs transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.iconColor}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/60">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#191330] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#554D74] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-purple-100 flex items-center gap-1.5 text-xs font-semibold text-purple-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{isRtl ? 'دراسة فنية مسبقة' : 'Étude technique préalable'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting text & Service transparency notice & Call to action */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-[#FAF8FF] rounded-2xl border border-purple-200 p-6 sm:p-8 shadow-xs space-y-6">
          {/* Supporting Step Notice */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-[#282148] font-medium leading-relaxed">
              {t.supportingText}
            </p>
          </div>

          {/* Legal / Service Transparency Notice */}
          <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200/70 text-xs text-purple-950 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block text-purple-900">
                {t.serviceNoticeTitle}
              </span>
              <p className="text-[#554D74] leading-relaxed">
                {t.serviceNoticeDesc}
              </p>
            </div>
          </div>

          {/* CTA Action Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-100/90">
            <div className="text-xs text-[#625A82] text-center sm:text-start">
              {isRtl
                ? 'تواصل معنا مباشرة لشرح التعديلات والحصول على دراسة وتقييم مخصص.'
                : 'Présentez-nous vos spécifications pour obtenir une étude et un devis adapté.'}
            </div>

            <button
              type="button"
              onClick={onRequestCustomization}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white rounded-xl font-bold shadow-xs hover:shadow-md transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-600"
            >
              <span>{t.ctaButton}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
