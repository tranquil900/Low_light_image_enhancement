import React from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  label: string;
}

export default function ImageCard({ src, alt, label }: ImageCardProps) {
  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-white text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}