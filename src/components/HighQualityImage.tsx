import React, { useState } from 'react';

interface HighQualityImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackSrc?: string;
  containerClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function HighQualityImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackSrc = '/saddle.jpg',
  containerClassName = '',
  onLoad,
  onError
}: HighQualityImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setImageLoaded(true);
    setImageError(false);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
    onError?.();
  };

  const imageStyles = {
    imageRendering: 'crisp-edges' as const,
    WebkitImageRendering: 'crisp-edges' as const,
    MozImageRendering: 'crisp-edges' as const,
    msImageRendering: 'crisp-edges' as const,
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Loading Placeholder */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {/* High Quality Image */}
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`transition-opacity duration-300 ${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        style={imageStyles}
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Error State */}
      {imageError && currentSrc === fallbackSrc && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm text-center">
            <div>Image unavailable</div>
            <div className="text-xs mt-1">Using placeholder</div>
          </div>
        </div>
      )}
    </div>
  );
} 