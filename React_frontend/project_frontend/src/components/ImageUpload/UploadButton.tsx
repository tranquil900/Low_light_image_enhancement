import React from 'react';
import { Upload } from 'lucide-react';

interface UploadButtonProps {
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadButton({ onFileSelect }: UploadButtonProps) {
  return (
    <label className="relative">
      <input
        type="file"
        className="hidden"
        multiple
        accept="image/*"
        onChange={onFileSelect}
      />
      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
        <Upload className="w-4 h-4" />
        Upload Image
      </button>
    </label>
  );
}