import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: Array<{
    id: number;
    src: string;
    alt: string;
    category?: string;
  }>;
  columns?: number;
  aspectRatio?: 'square' | '4:3' | '16:9' | '3:2';
  showCategories?: boolean;
  showZoom?: boolean;
  className?: string;
}

export default function ImageGallery({
  images,
  columns = 4,
  aspectRatio = '4:3',
  showCategories = true,
  showZoom = true,
  className = ''
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection observer for individual images
  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setLoadedImages(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) {
        imageObserver.observe(ref);
      }
    });

    return () => imageObserver.disconnect();
  }, [images]);

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square';
      case '4:3': return 'aspect-[4/3]';
      case '16:9': return 'aspect-video';
      case '3:2': return 'aspect-[3/2]';
      default: return 'aspect-[4/3]';
    }
  };

  const getGridCols = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 5: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
      case 6: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div ref={galleryRef} className={`${className}`}>
      {/* Gallery Grid */}
      <div className={`grid ${getGridCols()} gap-6`}>
        {images.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => (imageRefs.current[index] = el)}
            data-index={index}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${getAspectRatioClass()}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain bg-gray-100 group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Category Badge */}
            {showCategories && image.category && (
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            )}

            {/* Zoom Indicator */}
            {showZoom && (
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-gray-700" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain bg-gray-100"
              loading="eager"
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
              <p className="font-semibold">{images[selectedImage].alt}</p>
              {images[selectedImage].category && (
                <p className="text-sm opacity-90">{images[selectedImage].category}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 