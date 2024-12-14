import React from 'react';
import ImagePair from './ImagePair';

interface ImageGridProps {
  images: { original: string; enhanced?: string }[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
      {images.map((image, index) => (
        <ImagePair
          key={index}
          original={image.original}
          enhanced={image.enhanced}
          index={index}
        />
      ))}
    </div>
  );
}