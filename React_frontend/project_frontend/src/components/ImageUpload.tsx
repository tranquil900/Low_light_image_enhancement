import React, { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (files: FileList) => void;
}

export default function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      onImageSelect(e.dataTransfer.files);
    }
  };

  return (
    <div
      className={`w-full max-w-2xl mx-auto p-8 rounded-xl border-2 border-dashed transition-colors
        ${isDragging ? 'border-purple-500 bg-purple-50/5' : 'border-gray-600 bg-gray-800/50'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="p-4 rounded-full bg-purple-500/10">
          <ImageIcon className="w-8 h-8 text-purple-500" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-200">
            Drop your images here
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            or click to select files
          </p>
        </div>
        <label className="relative">
          <input
            type="file"
            className="hidden"
            multiple
            accept="image/*"
            onChange={(e) => e.target.files && onImageSelect(e.target.files)}
          />
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload Image
          </button>
        </label>
        <p className="text-xs text-gray-500">
          Supported formats: JPG, PNG, WebP
        </p>
      </div>
    </div>
  );
}