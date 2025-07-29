import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

    const element = document.getElementById('gallery');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: 'https://m.media-amazon.com/images/I/71m7BSIOS5L._AC_SL2000_.jpg',
      alt: 'Western Saddle Detail',
      category: 'Western Saddles'
    },
    {
      id: 2,
      src: 'https://m.media-amazon.com/images/I/71rH+LV9QSL._AC_SX300_SY300_.jpg',
      alt: 'English Saddle Craftsmanship',
      category: 'English Saddles'
    },
    {
      id: 3,
      src: 'https://m.media-amazon.com/images/I/71i+JEbsGBL._AC_SX300_SY300_.jpg',
      alt: 'Leather Working Process',
      category: 'Craftsmanship'
    },
    {
      id: 4,
      src: '4.jpg',
      alt: 'Racing Saddle',
      category: 'Racing Gear'
    },
    {
      id: 5,
      src: '5.jpg',
      alt: 'Custom Saddle Design',
      category: 'Custom Work'
    },
    {
      id: 6,
      src: 'https://m.media-amazon.com/images/I/71xbXPRseUL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
      alt: 'Workshop Environment',
      category: 'Workshop'
    },
    {
      id: 7,
      src: 'https://m.media-amazon.com/images/I/81Qdyu2zsaL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      alt: 'Trail Saddle',
      category: 'Trail Gear'
    },
    {
      id: 8,
      src: '8.webp',
      alt: 'Youth Saddle',
      category: 'Youth Gear'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('galleryTitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our gallery showcasing the finest craftsmanship, attention to detail,
            and the artistry that goes into every piece we create.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transition-all duration-500 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain p-4 bg-white group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>

              {/* Zoom Indicator */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                <p className="font-semibold">{galleryImages[selectedImage].alt}</p>
                <p className="text-sm opacity-90">{galleryImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}