Edit my code :
import React, { useEffect, useState } from "react";
import { Award, Shield, Heart, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

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
      { threshold: 0.1 },
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Handcrafted with finest materials and traditional techniques",
    },
    {
      icon: Shield,
      title: "Durable Design",
      description:
        "Built to last with superior craftsmanship and attention to detail",
    },
    {
      icon: Heart,
      title: "Passionate Craftsmanship",
      description: "Each piece reflects our love for equestrian excellence",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Dedicated to meeting the unique needs of every rider",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="relative">
              <img
                src="about.jpg"
                alt="Beautiful horse with premium saddle"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

              {/* Overlay Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="text-3xl font-bold text-amber-600">13+</div>
                <div className="text-gray-600 font-medium">
                  Years of Excellence in Saddle Making
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {t("aboutTitle")}
              </h2>
              <div className="w-20 h-1 bg-amber-600 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t("aboutText")}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey began decades ago with a simple mission: to create
              saddles that perfectly balance comfort, durability, and style.
              Today, we continue this tradition while embracing modern
              innovations.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`text-center p-6 rounded-xl bg-gray-50 hover:bg-amber-50 transition-all duration-500 transform hover:-translate-y-2 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
