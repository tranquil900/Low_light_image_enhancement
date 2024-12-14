import React, { useState, useCallback } from 'react';
import DropZone from './DropZone';

interface ImageUploadProps {
  onImageSelect: (files: FileList) => void;
}

export default function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      onImageSelect(e.dataTransfer.files);
    }
  }, [onImageSelect]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onImageSelect(e.target.files);
    }
  }, [onImageSelect]);

  return (
    <DropZone
      isDragging={isDragging}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onFileSelect={handleFileSelect}
    />
  );
}