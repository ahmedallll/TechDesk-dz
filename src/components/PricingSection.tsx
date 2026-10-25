import React, { useState } from 'react';
import {
  Check,
  Download,
  KeyRound,
  Clock,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Language, translations } from '../translations';

interface PricingSectionProps {
  lang: Language;
  onOpenDownload: (type: 'trial' | 'purchase') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  lang,
  onOpenDownload,
}) => {
  const [showComparison, setShowComparison] = useState(false);
  const t = translations[lang].pricing;
  const isRtl = lang === 'ar';

  return (
    <section id="tarifs" className="py-14 md:py-20 bg-white border-b border-[#EDE8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <div className="text-xs font-bold text-purple-700 uppercase tracking-wider">
            {lang === 'ar' ? 'بكل شفافية ' : 'Modalités d’accès'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191330] tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#554D74] leading-relaxed max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Two Aligned Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          {/* OFFER A: ESSAI GRATUIT */}
          <div className="rounded-2xl border border-[#E5DEFA] bg-[#FAF8FF] p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-purple-300 transition-colors">
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                    {lang === 'ar' ? 'تجربة بدون التزام' : 'Découverte'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#191330] mt-1">
                    {t.trialOffer.name}
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-purple-100/70 text-purple-700">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#554D74] leading-relaxed">
                {t.trialOffer.tagline}
              </p>

              {/* Price and Duration */}
              <div className="py-4 border-y border-purple-100/80 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold font-price text-[#191330] tracking-tight">
                    {t.trialOffer.price}
                  </span>
                  <span className="text-xs font-semibold text-purple-700 bg-purple-100/60 px-2 py-0.5 rounded">
                    {t.trialOffer.duration}
                  </span>
                </div>
                <div className="text-xs text-[#625A82]">
                  {t.trialOffer.priceSubtext}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-[#191330] uppercase tracking-wider">
                  {lang === 'ar' ? 'يشمل العرض :' : 'Inclus dans l’essai :'}
                </div>
                <ul className="space-y-2">
                  {t.trialOffer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#282148]">
                      <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA & Strict Rule Box */}
            <div className="pt-6 space-y-3.5">
              <button
                type="button"
                onClick={() => onOpenDownload('trial')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 rounded-xl transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t.trialOffer.cta}</span>
              </button>

              <div className="p-3 rounded-lg bg-white border border-[#E5DEFA] text-[11px] text-[#554D74] leading-relaxed">
                <span className="font-bold text-[#191330]">{t.trialOffer.ruleTitle}</span>{' '}
                {t.trialOffer.ruleDesc}
              </div>
            </div>
          </div>

          {/* OFFER B: LICENCE À VIE */}
          <div className="rounded-2xl border-2 border-purple-600 bg-gradient-to-b from-[#F6F2FD] via-white to-white p-6 sm:p-7 flex flex-col justify-between shadow-md relative">
            {/* Distinct premium badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-xs">
              {lang === 'ar' ? 'ترخيص دائم بدون اشتراك' : 'Licence Définitive'}
            </div>

            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                    {lang === 'ar' ? 'للمحلات التجارية' : 'Professionnel'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#191330] mt-1">
                    {t.lifetimeOffer.name}
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#160E33] to-[#2D165E] text-purple-300 shadow-xs">
                  <KeyRound className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#554D74] leading-relaxed">
                {t.lifetimeOffer.tagline}
              </p>

              {/* Price and Duration */}
              <div className="py-4 border-y border-purple-100/80 space-y-2.5">
                {/* Regular strikethrough price + promo badge */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-sm sm:text-base font-semibold text-slate-400 line-through decoration-slate-400 decoration-1.5 inline-flex items-center gap-1 font-price">
                    <bdi dir="ltr">13 000</bdi>
                    <span>{lang === 'ar' ? 'د.ج' : 'DA'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200/90 shadow-2xs">
                    <Sparkles className="w-3 h-3 text-rose-500 shrink-0" />
                    <span>{lang === 'ar' ? 'عرض ترويجي • خصم' : 'Offre Promo • Remise'}</span>
                    <bdi dir="ltr" className="font-extrabold font-price text-rose-700">
                      {lang === 'ar' ? '3 000 د.ج' : '-3 000 DA'}
                    </bdi>
                  </span>
                </div>

                {/* Promo current price & Duration badge */}
                <div className="flex items-baseline gap-3 flex-wrap">
                  <div className="inline-flex items-baseline gap-1.5 font-price">
                    <bdi dir="ltr" className="text-4xl sm:text-5xl font-black tracking-tight text-[#191330] drop-shadow-2xs">
                      10 000
                    </bdi>
                    <span className="text-xl sm:text-2xl font-bold text-purple-700 font-price">
                      {lang === 'ar' ? 'د.ج' : 'DA'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-purple-800 bg-purple-100/90 px-2.5 py-1 rounded-lg border border-purple-200/80 shadow-2xs">
                    {t.lifetimeOffer.duration}
                  </span>
                </div>

                <div className="text-xs text-purple-900 font-semibold flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>
                  <span>{t.lifetimeOffer.priceSubtext}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-[#191330] uppercase tracking-wider">
                  {lang === 'ar' ? 'مزايا الترخيص الدائم :' : 'Avantages de la licence à vie :'}
                </div>
                <ul className="space-y-2">
                  {t.lifetimeOffer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#282148]">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA & Lifetime Rule */}
            <div className="pt-6 space-y-3.5">
              <button
                type="button"
                onClick={() => onOpenDownload('purchase')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-[#191330] hover:bg-[#2A1F4C] active:bg-[#120D25] rounded-xl transition-all shadow-md focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
              >
                <KeyRound className="w-4 h-4 text-purple-300" />
                <span>{t.lifetimeOffer.cta}</span>
              </button>

              <div className="p-3 rounded-lg bg-purple-50/70 border border-purple-200/60 text-[11px] text-[#554D74] leading-relaxed">
                <span className="font-bold text-[#191330]">{t.lifetimeOffer.ruleTitle}</span>{' '}
                {t.lifetimeOffer.ruleDesc}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Expandable Feature Comparison Area */}
        <div className="max-w-4xl mx-auto pt-4 text-center">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-900 bg-[#F6F2FD] hover:bg-[#EDE5FA] border border-[#E5DEFA] px-4 py-2.5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>
              {showComparison
                ? isRtl ? 'إخفاء جدول المقارنة المفصل' : 'Masquer le comparatif détaillé'
                : t.comparisonTitle}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                showComparison ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showComparison && (
            <div className="mt-6 text-left bg-[#FAF8FF] rounded-2xl border border-purple-200/80 p-5 sm:p-7 shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-purple-200/80 text-purple-900">
                      <th className="py-3 px-4 font-bold">{t.comparisonHeaders.feature}</th>
                      <th className="py-3 px-4 font-bold text-center w-36 sm:w-44">{t.comparisonHeaders.trial}</th>
                      <th className="py-3 px-4 font-bold text-center w-36 sm:w-44 text-purple-800">{t.comparisonHeaders.lifetime}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100 text-[#282148]">
                    {t.matrix.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/80 transition-colors">
                        <td className="py-3 px-4 font-medium text-[#191330]">{row.label}</td>
                        <td className="py-3 px-4 text-center">
                          {typeof row.trial === 'boolean' ? (
                            row.trial ? (
                              <Check className="w-4 h-4 text-purple-600 mx-auto" />
                            ) : (
                              <span className="text-slate-400">—</span>
                            )
                          ) : (
                            <span className="font-semibold text-[#554D74]">{row.trial}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof row.lifetime === 'boolean' ? (
                            row.lifetime ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <span className="text-slate-400">—</span>
                            )
                          ) : (
                            <span className="font-bold text-purple-800">{row.lifetime}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
