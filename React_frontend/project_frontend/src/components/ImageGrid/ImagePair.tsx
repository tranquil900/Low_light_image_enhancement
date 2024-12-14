import React from 'react';
import ImageCard from './ImageCard';

interface ImagePairProps {
  original: string;
  enhanced?: string;
  index: number;
}

export default function ImagePair({ original, enhanced, index }: ImagePairProps) {
  return (
    <div className="space-y-4">
      <ImageCard
        src={original}
        alt={`Original ${index + 1}`}
        label="Original"
      />
      {enhanced && (
        <ImageCard
          src={enhanced}
          alt={`Enhanced ${index + 1}`}
          label="Enhanced"
        />
      )}
    </div>
  );
}