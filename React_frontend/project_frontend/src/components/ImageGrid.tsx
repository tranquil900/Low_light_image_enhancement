import React from 'react';

interface ImageGridProps {
  images: { original: string; enhanced?: string }[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
      {images.map((image, index) => (
        <div key={index} className="space-y-4">
          <div className="relative group">
            <img
              src={image.original}
              alt={`Original ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-medium">Original</span>
            </div>
          </div>
          {image.enhanced && (
            <div className="relative group">
              <img
                src={image.enhanced}
                alt={`Enhanced ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">Enhanced</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}