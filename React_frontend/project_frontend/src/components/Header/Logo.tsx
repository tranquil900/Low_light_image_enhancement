import React from 'react';
import { SunMoon } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <SunMoon className="w-10 h-10 text-purple-500" />
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        Low Light Enhancement
      </h1>
    </div>
  );
}