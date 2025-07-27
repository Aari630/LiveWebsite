import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('address'),
      content: '12/4, Juhi Safed Colony,\nKanpur – 208014',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: t('phone'),
      content: '+91 7880722916',
      link: 'tel:+917880722916'
    },
    {
      icon: Mail,
      title: t('email'),
      content: 'Asifinternational225@gmail.com',
      link: 'mailto:Asifinternational225@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('contactTitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to find your perfect saddle? Get in touch with us today and let's discuss 
            how we can craft the ideal equestrian gear for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className={`lg:col-span-1 space-y-8 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-amber-600 transition-colors duration-300 whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">{t('followUs')}</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/Saddlefusion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/westernclubstore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <form
  action="https://formspree.io/f/movwbjpq"
  method="POST"
  className="space-y-6"
>
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
        {t('contactName')} *
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
        placeholder="Your full name"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        {t('contactEmail')} *
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
        placeholder="your@email.com"
      />
    </div>
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
      {t('contactMessage')} *
    </label>
    <textarea
      id="message"
      name="message"
      required
      rows={6}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
      placeholder="Tell us about your requirements..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
  >
    <Send className="h-5 w-5" />
    <span>{t('sendMessage')}</span>
  </button>
</form>

            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-16 transition-all duration-1000 delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>

        </div>
      </div>
    </section>
  );
}