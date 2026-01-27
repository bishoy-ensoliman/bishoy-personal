'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locales = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' }
  ];

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <nav className="p-4 flex items-center gap-3 text-sm font-medium pointer-events-auto">
      {locales.map((loc, index) => (
        <div key={loc.code} className="flex items-center gap-3">
          <Link
            href={redirectedPathname(loc.code)}
            className={`hover:text-blue-600 transition-colors ${
              pathname.startsWith(`/${loc.code}`) ? 'text-blue-600 font-bold' : 'text-gray-500'
            }`}
          >
            {loc.label}
          </Link>
          {index < locales.length - 1 && <span className="text-gray-300">|</span>}
        </div>
      ))}
    </nav>
  );
}