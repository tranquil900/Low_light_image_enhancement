import { useState, useCallback, useEffect } from 'react';
import { createImageUrl, revokeImageUrl } from '../utils/imageHelpers';

interface ImageData {
  original: string;
  enhanced?: string;
}

export function useImageUpload() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    // Cleanup object URLs when component unmounts
    return () => {
      images.forEach(image => {
        revokeImageUrl(image.original);
        if (image.enhanced) {
          revokeImageUrl(image.enhanced);
        }
      });
    };
  }, []);

  const handleImageSelect = useCallback((files: FileList) => {
    const newImages = Array.from(files).map(file => ({
      original: createImageUrl(file)
    }));
    setImages(prev => [...prev, ...newImages]);
  }, []);

  return { images, handleImageSelect };
}