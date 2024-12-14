import React from 'react';
import Header from './components/Header/Header';
import ImageUpload from './components/ImageUpload/ImageUpload';
import ImageGrid from './components/ImageGrid/ImageGrid';
import { useImageUpload } from './hooks/useImageUpload';

function App() {
  const { images, handleImageSelect } = useImageUpload();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Header />
        <main className="space-y-12">
          <ImageUpload onImageSelect={handleImageSelect} />
          
          {images.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-center mb-8">Your Images</h2>
              <ImageGrid images={images} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;