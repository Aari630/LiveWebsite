import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'shop', href: '#shop' },
    { key: 'gallery', href: '#gallery' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/saddle.jpg" 
                alt="Saddle Fusion Logo" 
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Saddle Fusion</h3>
                <p className="text-amber-600 font-medium">Time to Make the Saddle Fusion</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Crafting world-class saddles and riding gear with precision and passion. 
              Based in Kanpur, India, we fuse tradition with quality to create durable, 
              stylish, and high-performance equestrian products.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Saddlefusion"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/westernclubstore/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-amber-600 transition-colors duration-300"
                >
                  {t(link.key)}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    12/4, Juhi Safed Colony,<br />
                    Kanpur – 208014
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <a 
                  href="tel:+917880722916"
                  className="text-gray-300 hover:text-amber-600 transition-colors duration-300 text-sm"
                >
                  +91 7880722916
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <a 
                  href="mailto:Asifinternational225@gmail.com"
                  className="text-gray-300 hover:text-amber-600 transition-colors duration-300 text-sm break-all"
                >
                  Asifinternational225@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('© 2025 Saddle Fusion. Designed and developed by Aarish Arshi. All rights reserved.')}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a 
                href="/privacy-policy" 
                className="hover:text-amber-600 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/privacy-policy';
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="hover:text-amber-600 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/terms-of-service';
                }}
              >
                Terms of Service
              </a>
              <a 
                href="/warranty" 
                className="hover:text-amber-600 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/warranty';
                }}
              >
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}