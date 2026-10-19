import React from 'react';
import { HardDrive, WifiOff, ShieldCheck, Lock, Database } from 'lucide-react';
import { Language, translations } from '../translations';

interface ArchitectureTrustProps {
  lang: Language;
}

export const ArchitectureTrust: React.FC<ArchitectureTrustProps> = ({ lang }) => {
  const t = translations[lang].architecture;
  const isRtl = lang === 'ar';

  const icons = [HardDrive, WifiOff, ShieldCheck];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-[#18113B] via-[#130E2E] to-[#0F0A24] text-white border-y border-purple-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الأمان والاستقلالية' : 'Architecture & Fiabilité'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-purple-200/80 leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 3 Aligned Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.cards.map((card, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-[#1C1443]/70 border border-purple-800/40 rounded-xl p-5 sm:p-6 space-y-3 hover:border-purple-600/60 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-900/60 text-xs text-purple-300/70">
                  {card.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Guarantee Strip */}
        <div className="rounded-xl bg-[#1A123E]/90 border border-purple-800/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-200/90">
          <div className="flex items-center gap-2.5">
            <Database className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
            <span className="leading-relaxed">
              {isRtl
                ? 'محرك قاعدة البيانات: SQLite محلي سريع ومؤمن، مع إمكانية أخذ نسخ احتياطية يدوية على فلاش ديسك.'
                : 'Moteur de base de données : SQLite local rapide et sécurisé, avec sauvegarde manuelle sur clé USB en un clic.'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-cyan-300 font-semibold shrink-0">
            <Lock className="w-4 h-4" />
            <span>{isRtl ? 'بيانات خاصة 100%' : '100% Données privées'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
