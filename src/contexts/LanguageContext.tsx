import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    products: 'Products',
    gallery: 'Gallery',
    contact: 'Contact',
    shop: 'Shop',

    // Hero Section
    heroTitle: 'Saddle Fusion Excellence',
    heroSubtitle: 'Premium Handcrafted Saddles & Equestrian Gear',

    // About Section
    aboutTitle: 'About Our Craft',
    aboutText: 'At Saddle Fusion, we blend traditional craftsmanship with modern innovation to create exceptional equestrian gear. Every saddle is meticulously handcrafted using premium leather and time-tested techniques passed down through generations.',

    // Products Section
    productsTitle: 'Our Products',

    // Contact Section
    contactTitle: 'Get In Touch',

    // Gallery Section
    galleryTitle: 'Our Gallery',
  },
  hi: {
    // Navigation
    home: 'होम',
    about: 'हमारे बारे में',
    products: 'उत्पाद',
    gallery: 'गैलरी',
    contact: 'संपर्क',
    shop: 'दुकान',

    // Hero Section
    heroTitle: 'सैडल फ्यूजन उत्कृष्टता',
    heroSubtitle: 'प्रीमियम हस्तनिर्मित काठी और घुड़सवारी उपकरण',

    // About Section
    aboutTitle: 'हमारी कला के बारे में',
    aboutText: 'सैडल फ्यूजन में, हम असाधारण घुड़सवारी उपकरण बनाने के लिए पारंपरिक शिल्प कौशल को आधुनिक नवाचार के साथ मिलाते हैं। हर काठी को प्रीमियम चमड़े का उपयोग करके सावधानीपूर्वक हस्तनिर्मित किया जाता है।',

    // Products Section
    productsTitle: 'हमारे उत्पाद',

    // Contact Section
    contactTitle: 'संपर्क में रहें',

    // Gallery Section
    galleryTitle: 'हमारी गैलरी',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}