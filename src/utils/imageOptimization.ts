// Image optimization utilities for high-quality display

export interface ImageOptimizationConfig {
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
  width?: number;
  height?: number;
  blur?: number;
}

// Get optimal image dimensions based on container size
export function getOptimalImageDimensions(
  containerWidth: number,
  containerHeight: number,
  aspectRatio: number = 16 / 9
): { width: number; height: number } {
  const containerAspect = containerWidth / containerHeight;

  if (containerAspect > aspectRatio) {
    // Container is wider than image aspect ratio
    return {
      width: Math.round(containerHeight * aspectRatio),
      height: containerHeight
    };
  } else {
    // Container is taller than image aspect ratio
    return {
      width: containerWidth,
      height: Math.round(containerWidth / aspectRatio)
    };
  }
}

// Generate responsive image srcset for different screen densities
export function generateSrcSet(
  baseSrc: string,
  widths: number[] = [400, 800, 1200, 1600, 2400]
): string {
  return widths
    .map(width => `${baseSrc}?w=${width} ${width}w`)
    .join(', ');
}

// Get image format based on browser support
export function getOptimalImageFormat(): 'webp' | 'jpg' {
  // Check if WebP is supported
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0 ? 'webp' : 'jpg';
}

// Preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

// Batch preload images
export function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(preloadImage));
}

// Get image loading priority based on position
export function getImageLoadingPriority(
  index: number,
  totalImages: number,
  viewportThreshold: number = 3
): 'high' | 'medium' | 'low' {
  if (index < viewportThreshold) return 'high';
  if (index < viewportThreshold * 2) return 'medium';
  return 'low';
}

// Optimize image URL for CDN or image service
export function optimizeImageUrl(
  src: string,
  config: ImageOptimizationConfig = {}
): string {
  const params = new URLSearchParams();

  if (config.quality) params.append('q', config.quality.toString());
  if (config.width) params.append('w', config.width.toString());
  if (config.height) params.append('h', config.height.toString());
  if (config.format) params.append('f', config.format);
  if (config.blur) params.append('blur', config.blur.toString());

  const queryString = params.toString();
  return queryString ? `${src}?${queryString}` : src;
}

// Check if image is in viewport for lazy loading
export function isImageInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get image aspect ratio
export function getImageAspectRatio(src: string): Promise<number> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(img.width / img.height);
    };
    img.onerror = () => {
      resolve(16 / 9); // Default aspect ratio
    };
    img.src = src;
  });
} 