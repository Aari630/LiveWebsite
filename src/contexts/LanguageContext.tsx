import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    shop: 'Shop',
    gallery: 'Gallery',
    contact: 'Contact',
    search: 'Search...',
    heroTitle: 'Welcome to Saddle Fusion',
    heroSubtitle: 'Time to Make the Saddle Fusion',
    exploreNow: 'Explore Now',
    aboutTitle: 'About Saddle Fusion',
    aboutText: 'Saddle Fusion brings you world-class saddles and riding gear crafted with precision and passion. Based in Kanpur, India — we fuse tradition with quality to create durable, stylish, and high-performance equestrian products.',
    productsTitle: 'Our Products',
    galleryTitle: 'Gallery',
    contactTitle: 'Contact Us',
    contactName: 'Name',
    contactEmail: 'Email',
    contactMessage: 'Message',
    sendMessage: 'Send Message',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    followUs: 'Follow Us',
    copyright: '© 2025 Saddle Fusion. All rights reserved.',
    viewMore: 'View More',
    getInTouch: 'Get in Touch'
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    products: 'उत्पाद',
    shop: 'दुकान',
    gallery: 'गैलरी',
    contact: 'संपर्क',
    search: 'खोजें...',
    heroTitle: 'सैडल फ्यूजन में आपका स्वागत है',
    heroSubtitle: 'सैडल फ्यूजन बनाने का समय',
    exploreNow: 'अभी देखें',
    aboutTitle: 'सैडल फ्यूजन के बारे में',
    aboutText: 'सैडल फ्यूजन आपके लिए विश्व स्तरीय काठी और सवारी के उपकरण लाता है जो सटीकता और जुनून के साथ तैयार किए गए हैं। कानपुर, भारत में स्थित — हम परंपरा को गुणवत्ता के साथ मिलाकर टिकाऊ, स्टाइलिश और उच्च प्रदर्शन वाले घुड़सवारी उत्पाद बनाते हैं।',
    productsTitle: 'हमारे उत्पाद',
    galleryTitle: 'गैलरी',
    contactTitle: 'संपर्क करें',
    contactName: 'नाम',
    contactEmail: 'ईमेल',
    contactMessage: 'संदेश',
    sendMessage: 'संदेश भेजें',
    address: 'पता',
    phone: 'फोन',
    email: 'ईमेल',
    followUs: 'हमें फॉलो करें',
    copyright: '© 2025 सैडल फ्यूजन। सभी अधिकार सुरक्षित।',
    viewMore: 'और देखें',
    getInTouch: 'संपर्क में रहें'
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
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}