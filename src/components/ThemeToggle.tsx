'use client';

import { useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-blue-500 transition-colors"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
} 