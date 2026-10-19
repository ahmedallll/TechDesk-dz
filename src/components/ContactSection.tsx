import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language, translations } from '../translations';

interface ContactSectionProps {
  lang: Language;
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  initialSubject = '',
}) => {
  const t = translations[lang].contact;
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState({
    subject: initialSubject,
    name: '',
    phone: '',
    shopType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Direct WhatsApp message generation as a real submission mechanism
    const subjectPrefix = formData.subject
      ? lang === 'ar'
        ? `الموضوع: ${formData.subject}\n`
        : `Objet : ${formData.subject}\n`
      : '';

    const fullText =
      lang === 'ar'
        ? `طلب استفسار جديد حول TechDesk DZ:\n${subjectPrefix}الاسم/المحل: ${formData.name}\nالهاتف: ${formData.phone}\nنوع النشاط: ${formData.shopType || 'غير محدد'}\nالرسالة: ${formData.message || 'لا يوجد تفاصيل إضافية'}`
        : `Demande de renseignement TechDesk DZ :\n${subjectPrefix}Nom/Magasin : ${formData.name}\nTéléphone : ${formData.phone}\nActivité : ${formData.shopType || 'Non spécifiée'}\nMessage : ${formData.message || 'Aucune précision complémentaire'}`;

    const waUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
      fullText
    )}`;

    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  const directWaMessage = encodeURIComponent(
    lang === 'ar'
      ? 'السلام عليكم، أود الحصول على معلومات واستفسار حول برنامج TechDesk DZ.'
      : 'Bonjour, je souhaite obtenir des informations sur le logiciel TechDesk DZ.'
  );

  return (
    <section id="contact" className="py-14 md:py-20 bg-white border-b border-[#EDE8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <span>{lang === 'ar' ? 'تواصل معنا' : 'Équipe commerciale & Support'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191330] tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#554D74] leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Two Clear Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Contact Information Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF8FF] rounded-2xl border border-purple-200/80 p-6 space-y-4 shadow-2xs">
              <h3 className="text-xs font-bold text-[#191330] uppercase tracking-wider">
                {lang === 'ar' ? 'قنوات التواصل المباشرة' : 'Coordonnées directes'}
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#282148]">
                {siteConfig.contact.phone && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#EBE4F7] hover:border-purple-300 hover:text-purple-700 transition-colors shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F2EDFB] text-purple-700 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#625A82]">{t.phoneLabel}</div>
                      <div className="font-semibold text-[#191330] font-mono">
                        {siteConfig.contact.phoneDisplay}
                      </div>
                    </div>
                  </a>
                )}

                {siteConfig.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${directWaMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#EBE4F7] hover:border-emerald-300 hover:text-emerald-700 transition-colors shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#625A82]">{t.whatsappLabel}</div>
                      <div className="font-semibold text-[#191330] font-mono">
                        {siteConfig.contact.whatsappDisplay}
                      </div>
                    </div>
                  </a>
                )}

                {siteConfig.contact.email && (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#EBE4F7] hover:border-purple-300 hover:text-purple-700 transition-colors shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F2EDFB] text-purple-700 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#625A82]">{t.emailLabel}</div>
                      <div className="font-semibold text-[#191330] truncate">
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#EBE4F7] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#F2EDFB] text-purple-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#625A82]">{t.locationLabel}</div>
                    <div className="font-semibold text-[#191330]">
                      {siteConfig.contact.city}, {siteConfig.contact.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200/60 text-xs text-purple-900 leading-relaxed">
              {t.form.directContactNotice}
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5DEFA] p-6 sm:p-8 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#191330] mb-4">
              {lang === 'ar' ? 'نموذج الاستفسار وطلب العروض' : 'Formulaire de demande de renseignements'}
            </h3>

            {isSubmitted ? (
              <div className="p-6 bg-purple-50/60 border border-purple-200 rounded-xl text-center space-y-3">
                <CheckCircle className="w-8 h-8 text-purple-600 mx-auto" />
                <h4 className="text-base font-bold text-[#191330]">
                  {lang === 'ar' ? 'تم تجهيز رسالتك بنجاح' : 'Message transmis avec succès'}
                </h4>
                <p className="text-xs text-[#554D74] leading-relaxed max-w-md mx-auto">
                  {lang === 'ar'
                    ? 'شكراً لتواصلك. فتحنا نافذة المحادثة المباشرة عبر واتساب لإتمام التواصل معك في أسرع وقت.'
                    : 'Merci pour votre intérêt. La conversation a été initiée et notre équipe vous répondra dans les plus brefs délais.'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-purple-700 hover:text-purple-900 underline"
                >
                  {lang === 'ar' ? 'إرسال طلب آخر' : 'Envoyer un autre message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-[#191330] mb-1">
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.form.subjectPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD3F0] bg-white text-[#191330] focus:outline-none focus:ring-2 focus:ring-purple-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#191330] mb-1">
                    {t.form.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'ar' ? 'مثال: سمير بلعيد / محل تكنو شوب' : 'Ex: Samir B. / Techno Shop Alger'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD3F0] bg-white text-[#191330] focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#191330] mb-1">
                      {t.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: 0550 12 34 56"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD3F0] bg-white text-[#191330] focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#191330] mb-1">
                      {t.form.shopType}
                    </label>
                    <select
                      value={formData.shopType}
                      onChange={(e) => setFormData({ ...formData, shopType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD3F0] bg-white text-[#191330] focus:outline-none focus:ring-2 focus:ring-purple-600"
                    >
                      <option value="">{t.form.shopTypePlaceholder}</option>
                      {t.form.shopTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#191330] mb-1">
                    {t.form.message}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'ar'
                        ? 'أود معرفة إمكانية تشغيل البرنامج على طابعة Xprinter وتفاصيل الترخيص الدائم...'
                        : 'Ex : Je souhaite équiper un magasin de réparation de téléphones et vérifier la compatibilité avec mon imprimante thermique...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD3F0] bg-white text-[#191330] focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div className="pt-1 space-y-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white rounded-lg font-bold shadow-xs transition-all focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.form.submit}</span>
                  </button>
                  <p className="text-[11px] text-[#625A82]">{t.form.note}</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
