import React, { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Products() {
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

    const element = document.getElementById("products");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      name: "Western Riding Saddle",
      description:
        "Premium leather western saddle crafted for comfort and durability",
      image: "p1.webp",
      rating: 5,
      featured: true,
    },
    {
      id: 2,
      name: "English Dressage Saddle",
      description: "Professional dressage saddle for competitive riding",
      image: "p2.jpg",
      rating: 5,
      featured: false,
    },
    {
      id: 3,
      name: "Trail Riding Saddle",
      description: "Comfortable trail saddle perfect for long-distance riding",
      image: "p3.webp",
      rating: 4,
      featured: true,
    },
    {
      id: 4,
      name: "Youth Riding Saddle",
      description: "Specially designed saddle for young riders",
      image: "p4.jpg",
      rating: 5,
      featured: false,
    },
    {
      id: 5,
      name: "Racing Saddle",
      description: "Lightweight racing saddle for competitive performance",
      image: "p5.webp",
      rating: 4,
      featured: false,
    },
    {
      id: 6,
      name: "Custom Leather Saddle",
      description: "Bespoke saddle tailored to your specific requirements",
      image: "p6.webp",
      rating: 5,
      featured: true,
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("productsTitle")}
          </h2>
          <div className="w-20 h-1 bg-amber-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our exceptional collection of handcrafted saddles and
            equestrian gear, each piece designed with meticulous attention to
            detail and superior craftsmanship.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain p-4 bg-white group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        ></div>
      </div>
    </section>
  );
}
