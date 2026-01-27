'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ComponentProps } from 'react';

export default function LocalizedLink({ href, children, ...props }: ComponentProps<typeof Link>) {
  const params = useParams();
  const lng = params?.lng || 'en'; // Fallback to 'en'

  // Ensure href is a string and prepend the locale
  const localizedHref = typeof href === 'string' && href.startsWith('/') 
    ? `/${lng}${href === '/' ? '' : href}` 
    : href;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}