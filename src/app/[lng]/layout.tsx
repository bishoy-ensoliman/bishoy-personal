import './globals.css';
import "flag-icons/css/flag-icons.min.css";
import type { Metadata } from 'next';
import Footer from '../../components/Footer';
import Header from '../../components/header/Header';
import NextThemeProvider from '../providers/NextThemeProvider';


export const metadata: Metadata = {
  title: 'Bischoy Isaak',
  description: 'Personal Profile of Bischoy Isaak',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  // Arabic (ar) and Hebrew (he) use 'rtl', others use 'ltr'
  const direction = lng === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={lng} dir={direction}>
      <head>
        <link rel="icon" type="image/png" sizes="any" href="/favicon-32x32.png" />
      </head>
      <body className={lng === 'ar' ? 'font-arabic flex h-full bg-zinc-50 dark:bg-black' : 'font-sans flex h-full bg-zinc-50 dark:bg-black'}>
        <NextThemeProvider>
          <div className="flex w-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </NextThemeProvider>
      </body>
    </html>
  )
}
