import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const t = translations[lang].faq;
  const isRtl = lang === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 md:py-20 bg-[#FAF8FF] border-b border-[#EDE8F8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-purple-700 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'إجابات واضحة ومباشرة' : 'Questions fréquentes'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191330] tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#554D74] leading-relaxed max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Accordion with Simplified, Clean Treatment */}
        <div className="space-y-2.5">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#EBE4F7] hover:border-purple-300 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#191330] hover:text-purple-700 transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-purple-100/80 text-purple-700 rotate-180'
                        : 'bg-[#F6F2FD] text-purple-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#554D74] leading-relaxed border-t border-purple-50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
