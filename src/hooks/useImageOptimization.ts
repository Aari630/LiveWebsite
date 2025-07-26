import { useState, useEffect, useCallback } from 'react';
import { preloadImage, getImageLoadingPriority } from '../utils/imageOptimization';

interface UseImageOptimizationOptions {
  preload?: boolean;
  priority?: 'high' | 'medium' | 'low';
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function useImageOptimization(
  src: string,
  options: UseImageOptimizationOptions = {}
) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const {
    preload = false,
    priority = 'medium',
    fallbackSrc = '/saddle.jpg',
    onLoad,
    onError
  } = options;

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);

    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }

    onError?.();
  }, [currentSrc, fallbackSrc, onError]);

  // Preload image if requested
  useEffect(() => {
    if (preload && src) {
      setIsLoading(true);
      preloadImage(src)
        .then(handleLoad)
        .catch(handleError);
    }
  }, [src, preload, handleLoad, handleError]);

  // Update source when src prop changes
  useEffect(() => {
    if (src !== currentSrc) {
      setCurrentSrc(src);
      setIsLoaded(false);
      setHasError(false);
      setIsLoading(true);
    }
  }, [src, currentSrc]);

  // Get loading attribute based on priority
  const getLoadingAttribute = useCallback(() => {
    if (priority === 'high') return 'eager';
    return 'lazy';
  }, [priority]);

  // Get image styles for high quality
  const getImageStyles = useCallback(() => ({
    imageRendering: 'crisp-edges' as const,
    WebkitImageRendering: 'crisp-edges' as const,
    MozImageRendering: 'crisp-edges' as const,
    msImageRendering: 'crisp-edges' as const,
  }), []);

  return {
    src: currentSrc,
    isLoaded,
    hasError,
    isLoading,
    loading: getLoadingAttribute(),
    imageStyles: getImageStyles(),
    handleLoad,
    handleError
  };
}

// Hook for batch image optimization
export function useBatchImageOptimization(
  imageSources: string[],
  options: UseImageOptimizationOptions = {}
) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const { priority = 'medium' } = options;

  useEffect(() => {
    if (imageSources.length === 0) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const loadPromises = imageSources.map(src =>
      preloadImage(src)
        .then(() => {
          setLoadedImages(prev => new Set([...prev, src]));
        })
        .catch(() => {
          setErrorImages(prev => new Set([...prev, src]));
        })
    );

    Promise.allSettled(loadPromises).then(() => {
      setIsLoading(false);
    });
  }, [imageSources]);

  const getImageStatus = useCallback((src: string) => {
    if (loadedImages.has(src)) return 'loaded';
    if (errorImages.has(src)) return 'error';
    return 'loading';
  }, [loadedImages, errorImages]);

  return {
    loadedImages,
    errorImages,
    isLoading,
    getImageStatus,
    totalImages: imageSources.length,
    loadedCount: loadedImages.size,
    errorCount: errorImages.size
  };
} 