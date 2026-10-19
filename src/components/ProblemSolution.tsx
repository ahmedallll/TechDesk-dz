import React from 'react';
import {
  CheckCircle2,
  PackageX,
  Receipt,
  Search,
  Truck,
  Wrench,
  Users,
  HardDrive,
  Zap,
  ShieldCheck,
  FileQuestion,
} from 'lucide-react';
import { Language, translations } from '../translations';

interface ProblemSolutionProps {
  lang: Language;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ lang }) => {
  const t = translations[lang].problems;

  const problemIcons = [
    PackageX,
    Receipt,
    Search,
    Truck,
    Wrench,
    Users,
  ];

  const solutionIcons = [
    HardDrive,
    Zap,
    ShieldCheck,
  ];

  return (
    <section id="fonctionnalites" className="py-14 md:py-20 bg-white border-b border-[#EDE8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Part A: Problems in a compact, neutral grid */}
        <div className="space-y-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <FileQuestion className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'التحديات الميدانية' : 'Défis au quotidien'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191330] tracking-tight">
              {t.sectionTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#554D74] leading-relaxed">
              {t.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.painPoints.map((point, index) => {
              const Icon = problemIcons[index] || PackageX;
              return (
                <div
                  key={index}
                  className="p-4.5 rounded-xl border border-[#E9E2F7] bg-[#FAF9FD] hover:bg-white hover:border-purple-300 hover:shadow-xs transition-all space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EFEAF9] text-purple-800 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#191330] tracking-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#554D74] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part B: How TechDesk DZ Helps (Unified Solution) */}
        <div className="rounded-2xl border border-purple-200/80 bg-gradient-to-b from-[#F6F2FD] via-[#FAF8FF] to-white p-6 sm:p-8 shadow-xs space-y-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
              <span>{lang === 'ar' ? 'الحل الموحد المتكامل' : 'La solution TechDesk DZ'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#191330] tracking-tight">
              {t.solutionTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#554D74] leading-relaxed">
              {t.solutionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
            {t.solutionPoints.map((sol, index) => {
              const Icon = solutionIcons[index] || CheckCircle2;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-purple-100 p-5 space-y-2.5 shadow-2xs hover:border-purple-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#191330] tracking-tight">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554D74] leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
