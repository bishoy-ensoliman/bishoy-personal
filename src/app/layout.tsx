import './globals.css';
import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import NextThemeProvider from '../providers/NextThemeProvider';

export const metadata: Metadata = {
  title: 'Bishoy Isaak',
  description: 'Personal Profile of Bishoy Isaak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="any" href="/favicon-32x32.png" />
      </head>
      <body className='flex h-full bg-zinc-50 dark:bg-black'>
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
