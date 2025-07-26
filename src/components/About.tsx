import React, { useEffect, useState } from 'react';
import { Award, Shield, Heart, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handcrafted with finest materials and traditional techniques'
    },
    {
      icon: Shield,
      title: 'Durable Design',
      description: 'Built to last with superior craftsmanship and attention to detail'
    },
    {
      icon: Heart,
      title: 'Passionate Craftsmanship',
      description: 'Each piece reflects our love for equestrian excellence'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Dedicated to meeting the unique needs of every rider'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className={`relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
            <div className="relative">
              <img
                src="about.jpg"
                alt="Craftsman working on saddle"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

              {/* Overlay Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="text-3xl font-bold text-amber-600">13+</div>
                <div className="text-gray-600 font-medium">Years of Excellence in Saddle Making</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {t('aboutTitle')}
              </h2>
              <div className="w-20 h-1 bg-amber-600 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t('aboutText')}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey began decades ago with a simple mission: to create saddles that perfectly balance comfort, durability, and style. Today, we continue this tradition while embracing modern innovations.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}