'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const languages = [
  { key: 'en', name: 'English', countryCode: 'gb' },
  { key: 'de', name: 'Deutsch', countryCode: 'de' },
  { key: 'fr', name: 'Français', countryCode: 'fr' },
  { key: 'ar', name: 'العربية', countryCode: 'eg' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLng = pathname.split('/')[1] || 'en';
  const selectedLanguage = languages.find(l => l.key === currentLng) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getRedirectPath = (targetLng: string) => {
    const segments = pathname.split('/');
    segments[1] = targetLng;
    return segments.join('/');
  };

  return (
    <div className="relative inline-block text-left pointer-events-auto mx-2" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 shadow-sm px-3 py-2 bg-white dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700"
      >
        {/* Flag: Always visible */}
        <span className={`fi fi-${selectedLanguage.countryCode} sm:me-2`} />
        
        {/* Text: Hidden on mobile, visible on small screens (sm) and up */}
        <span className="hidden sm:inline">{selectedLanguage.name}</span>
        
        <svg className="ms-2 h-4 w-4 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 sm:w-48 rounded-md shadow-lg bg-white dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 z-[100]">
          <div className="py-1">
            {languages.map((language) => (
              <Link
                key={language.key}
                href={getRedirectPath(language.key)}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                  currentLng === language.key ? 'bg-zinc-50 dark:bg-zinc-800 font-bold' : ''
                }`}
              >
                {/* Flag inside dropdown */}
                <span className={`fi fi-${language.countryCode} sm:me-3`} />
                
                {/* Name inside dropdown: Hidden on mobile, shown on desktop */}
                <span className="hidden sm:inline">{language.name}</span>
                
                {/* Short Code: Shown on mobile only to keep it clean */}
                <span className="inline sm:hidden ms-2 uppercase">{language.key}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}