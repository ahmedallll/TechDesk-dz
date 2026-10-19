import React from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language, translations } from '../translations';

interface ProblemSolutionProps {
  lang: Language;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ lang }) => {
  const t = translations[lang].problems;
  const painPoints = t.painPoints; // array of 6 items
  const isRtl = lang === 'ar';

  // SVG dashed path based on RTL/LTR layout
  // LTR: starts at top-left (166), goes right (833), curves on right (960) down to 228, goes left (166)
  // RTL: starts at top-right (833), goes left (166), curves on left (40) down to 228, goes right (833)
  const svgDashedPath = isRtl
    ? "M 833 28 L 500 28 L 166 28 C 40 28 40 228 166 228 L 500 228 L 833 228"
    : "M 166 28 L 500 28 L 833 28 C 960 28 960 228 833 228 L 500 228 L 166 228";

  return (
    <section id="fonctionnalites" className="py-16 md:py-24 bg-white border-b border-[#EDE8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191330] tracking-tight leading-tight">
            {t.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#554D74] leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Winding Timeline Container */}
        <div className="relative pt-4 pb-8 px-2 sm:px-4">
          
          {/* Desktop Winding Grid & SVG Dashed Path */}
          <div className="hidden lg:block relative">
            {/* SVG Dashed Path Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 320" fill="none" preserveAspectRatio="none">
                <path
                  d={svgDashedPath}
                  stroke="#D8CBEF"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Row 1: Items 1, 2, 3 */}
            <div className="grid grid-cols-3 gap-8 xl:gap-12 relative z-10 mb-16">
              {[0, 1, 2].map((idx) => {
                const item = painPoints[idx];
                const num = idx + 1;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    {/* Numbered Marker centered on dashed path */}
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-purple-300 text-purple-700 font-extrabold text-base flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-purple-100 group-hover:border-purple-400 transition-all z-10 mb-4 shrink-0">
                      {num}
                    </div>
                    {/* Card Content */}
                    <div className="w-full bg-white/95 backdrop-blur-xs p-6 rounded-2xl border border-[#EDE8F8] shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-[#191330] tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#554D74] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Row 2: Items 4, 5, 6 */}
            <div className="grid grid-cols-3 gap-8 xl:gap-12 relative z-10">
              {[
                { idx: 5, col: 1 }, // Col 1 in LTR = Left (Item 6), Col 1 in RTL = Right (Item 6)
                { idx: 4, col: 2 }, // Col 2 in LTR = Center (Item 5), Col 2 in RTL = Center (Item 5)
                { idx: 3, col: 3 }  // Col 3 in LTR = Right (Item 4), Col 3 in RTL = Left (Item 4)
              ].sort((a, b) => a.col - b.col).map(({ idx }) => {
                const item = painPoints[idx];
                const num = idx + 1;
                const isLast = num === 6;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    {/* Numbered Marker centered on dashed path */}
                    <div className={`w-12 h-12 rounded-full font-extrabold text-base flex items-center justify-center shadow-xs transition-all z-10 mb-4 shrink-0 ${
                      isLast
                        ? 'bg-purple-600 border-2 border-purple-700 text-white shadow-md shadow-purple-200 group-hover:scale-105 group-hover:bg-purple-700'
                        : 'bg-white border-2 border-purple-300 text-purple-700 group-hover:scale-105 group-hover:bg-purple-100 group-hover:border-purple-400'
                    }`}>
                      {num}
                    </div>
                    {/* Card Content */}
                    <div className={`w-full bg-white/95 backdrop-blur-xs p-6 rounded-2xl border shadow-xs transition-all flex-1 flex flex-col justify-between ${
                      isLast 
                        ? 'border-purple-300 bg-purple-50/40 shadow-purple-100/50 hover:border-purple-400' 
                        : 'border-[#EDE8F8] hover:border-purple-300 hover:shadow-md'
                    }`}>
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-[#191330] tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#554D74] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile / Tablet Vertical Timeline */}
          <div className="lg:hidden space-y-6 relative">
            {/* Vertical dashed line */}
            <div className={`absolute top-6 bottom-6 w-0.5 border-l-2 border-dashed border-purple-200 pointer-events-none ${
              isRtl ? 'right-7' : 'left-7'
            }`}></div>

            {painPoints.map((item, idx) => {
              const num = idx + 1;
              const isLast = num === 6;
              return (
                <div key={idx} className={`relative ${isRtl ? 'pr-16 pl-0 text-right' : 'pl-16 pr-0 text-left'}`}>
                  {/* Number marker */}
                  <div className={`absolute top-0 w-10 h-10 rounded-full font-extrabold text-sm flex items-center justify-center shadow-xs z-10 ${
                    isRtl ? 'right-2' : 'left-2'
                  } ${
                    isLast 
                      ? 'bg-purple-600 text-white shadow-purple-200' 
                      : 'bg-white border-2 border-purple-200 text-purple-700'
                  }`}>
                    {num}
                  </div>
                  
                  <div className={`bg-white p-5 rounded-xl border shadow-xs space-y-2 ${
                    isLast ? 'border-purple-300 bg-purple-50/30' : 'border-[#EDE8F8]'
                  }`}>
                    <h3 className="text-sm font-bold text-[#191330] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#554D74] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Part B: How TechDesk DZ Helps (Unified Solution Section) */}
        <div className="rounded-2xl border border-purple-200/80 bg-gradient-to-b from-[#F6F2FD] via-[#FAF8FF] to-white p-6 sm:p-10 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>{lang === 'ar' ? 'الحل الموحد المتكامل' : 'La solution TechDesk DZ'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191330] tracking-tight">
              {t.solutionTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#554D74] leading-relaxed">
              {t.solutionSubtitle}
            </p>
          </div>

          {/* Shared Container with Horizontal Rows */}
          <div className="bg-white rounded-xl border border-purple-100/90 divide-y divide-purple-100 overflow-hidden shadow-2xs">
            {t.solutionPoints.map((sol, index) => {
              const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
              return (
                <div
                  key={index}
                  className="group p-5 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-8 hover:bg-purple-50/40 transition-colors"
                >
                  {/* Heading Column (~32-36% width on desktop) */}
                  <div className="w-full lg:w-[35%] shrink-0 flex items-center gap-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#191330] tracking-tight group-hover:text-purple-950 transition-colors">
                      {sol.title}
                    </h3>
                    <ArrowIcon className={`w-4 h-4 text-purple-600 shrink-0 group-hover:text-purple-800 transition-transform duration-200 ${
                      isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    }`} />
                  </div>

                  {/* Description Column (Remaining width) */}
                  <div className="w-full lg:w-[65%]">
                    <p className="text-sm sm:text-base text-[#554D74] leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
