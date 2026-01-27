'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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

  // Get current language from the URL (e.g., /en/about -> en)
  const currentLng = pathname.split('/')[1] || 'en';
  const selectedLanguage = languages.find(l => l.key === currentLng) || languages[0];

  // Close dropdown when clicking outside (as suggested in the blog)
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

  const handleLocaleChange = (lng: string) => {
    // Save preference to cookie (as we discussed)
    document.cookie = `NEXT_LOCALE=${lng};path=/;max-age=31536000`;
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left pointer-events-auto mx-2" ref={dropdownRef}>
      {/* Selected Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full rounded-md border border-zinc-300 dark:border-zinc-700 shadow-sm px-4 py-2 bg-white dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:outline-none"
      >
        <span className={`fi fi-${selectedLanguage.countryCode} me-2`} />
        {selectedLanguage.name}
        <svg className="-me-1 ms-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 z-[100]">
          <div className="py-1 flex flex-col">
            {languages.map((language) => (
              <Link
                key={language.key}
                href={getRedirectPath(language.key)}
                onClick={() => handleLocaleChange(language.key)}
                className={`flex items-center px-4 py-2 text-sm text-start hover:bg-zinc-100 dark:hover:bg-zinc-700 ${
                  currentLng === language.key ? 'bg-zinc-50 dark:bg-zinc-900 font-bold' : 'text-zinc-700 dark:text-zinc-300'
                }`}
              >
                <span className={`fi fi-${language.countryCode} me-3 shadow-sm`} />
                {language.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}