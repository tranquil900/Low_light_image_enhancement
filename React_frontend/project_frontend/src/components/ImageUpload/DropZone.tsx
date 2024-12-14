import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import UploadButton from './UploadButton';

interface DropZoneProps {
  isDragging: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent) => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DropZone({
  isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect
}: DropZoneProps) {
  return (
    <div
      className={`w-full max-w-2xl mx-auto p-8 rounded-xl border-2 border-dashed transition-colors
        ${isDragging ? 'border-purple-500 bg-purple-50/5' : 'border-gray-600 bg-gray-800/50'}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
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
        <UploadButton onFileSelect={onFileSelect} />
        <p className="text-xs text-gray-500">
          Supported formats: JPG, PNG, WebP
        </p>
      </div>
    </div>
  );
}