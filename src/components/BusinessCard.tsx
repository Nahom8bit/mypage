'use client';

import { useState, useEffect } from 'react';

export default function BusinessCard() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div>
      {/* Contact Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Contact Me
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 transition-all duration-300"
          onClick={() => setIsOpen(false)}
          style={{
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Business Card */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gray-900 p-8 rounded-xl border border-gray-800 max-w-md w-full shadow-2xl transition-all duration-300 ease-in-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Card Content */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Nahom Daniel Negash</h2>
                <p className="text-gray-400">Developer & Designer</p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:nahomdaniel.n@gmail.com"
                  className="flex items-center justify-between p-3 border border-gray-800 rounded-lg hover:border-blue-500 transition-colors group"
                >
                  <span>Email</span>
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">nahomdaniel.n@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/nahomdaniel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border border-gray-800 rounded-lg hover:border-blue-500 transition-colors group"
                >
                  <span>LinkedIn</span>
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">@nahomdaniel</span>
                </a>

                <a
                  href="https://github.com/nahom8bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border border-gray-800 rounded-lg hover:border-blue-500 transition-colors group"
                >
                  <span>GitHub</span>
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">@nahom8bit</span>
                </a>
              </div>

              <p className="text-center text-gray-400 text-sm">
                Always open to new opportunities and interesting projects
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 