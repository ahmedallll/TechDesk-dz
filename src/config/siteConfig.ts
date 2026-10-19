/**
 * TechDesk DZ — Configuration centralisée du site
 *
 * Toutes les URLs de téléchargement, d'achat, de contact et paramètres produit
 * sont configurés ici. Si une URL est définie sur `null` ou vide, le site affiche
 * un état transparent "Bientôt disponible" sans lien brisé ni fausse simulation.
 */

export interface SiteConfig {
  product: {
    name: string;
    taglineFr: string;
    taglineAr: string;
    version: string;
    edition: string;
    architecture: string;
    trialDurationHours: number;
    supportedOS: string[];
    minRam: string;
    recommendedRam: string;
    minStorage: string;
    minResolution: string;
  };
  downloads: {
    // Si null ou vide, le bouton ouvre la modale d'information "Téléchargement bientôt disponible"
    trialInstallerUrl: string | null;
    installerFileName: string;
    installerSha256: string | null;
    releaseDate: string | null;
    isDownloadReady: boolean;
  };
  licensing: {
    // Si null ou vide, le bouton ouvre la modale de contact/commande
    lifetimePurchaseUrl: string | null;
    isOnlinePurchaseReady: boolean;
    currency: string;
    trialPrice: number;
    // Le prix commercial exact n'est pas inventé et reste configurable
    lifetimePriceDisplayFr: string;
    lifetimePriceDisplayAr: string;
  };
  contact: {
    // Informations de contact réelles ou configurables
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    city: string;
    country: string;
    hoursFr: string;
    hoursAr: string;
  };
  social: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export const siteConfig: SiteConfig = {
  product: {
    name: 'TechDesk DZ',
    taglineFr: 'Logiciel de gestion de magasin informatique, téléphonie, ventes, stock et service après-vente.',
    taglineAr: 'برنامج تسيير محلات الإعلام الآلي، الهواتف، المبيعات، المخزون وخدمة ما بعد البيع.',
    version: '1.0.0',
    edition: 'Desktop Windows Edition',
    architecture: 'x64 (64-bit)',
    trialDurationHours: 72,
    supportedOS: ['Windows 11 (64-bit)', 'Windows 10 (64-bit)'],
    minRam: '4 Go',
    recommendedRam: '8 Go',
    minStorage: '500 Mo d\'espace disque',
    minResolution: '1366 × 768 pixels',
  },
  downloads: {
    // URL officielle de téléchargement de l'installateur Windows hébergé sur GitHub Releases
    trialInstallerUrl:
      'https://github.com/ahmedallll/TechDesk-dz/releases/download/v1.0.0/TechDesk.DZ.Setup.0.0.0.exe',
    installerFileName: 'TechDesk.DZ.Setup.0.0.0.exe',
    installerSha256: null,
    releaseDate: 'v1.0.0',
    isDownloadReady: true,
  },
  licensing: {
    // Maintenu à null jusqu'à l'implémentation du flux de paiement/commande
    lifetimePurchaseUrl: null,
    isOnlinePurchaseReady: false,
    currency: 'DZD',
    trialPrice: 0,
    lifetimePriceDisplayFr: 'Tarif sur devis / Commande directe',
    lifetimePriceDisplayAr: 'السعر عند الطلب / ترخيص مباشر',
  },
  contact: {
    phone: '+213552947563',
    phoneDisplay: '0552 94 75 63',
    whatsapp: '+213552947563',
    whatsappDisplay: '0552 94 75 63',
    email: 'ahmedmeraimi685@gmail.com',
    city: 'Alger',
    country: 'Algérie',
    hoursFr: 'Dimanche – Jeudi : 09h00 – 18h00',
    hoursAr: 'الأحد – الخميس : 09:00 – 18:00',
  },
  social: {
    facebook: '',
    linkedin: '',
    youtube: '',
  },
};
