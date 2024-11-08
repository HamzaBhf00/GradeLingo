import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gradelingo.com'), // Add this line to set the base URL
  title: 'GradeLingo - AI Language Learning Assistant',
  description:
    'Transform your language skills with AI-powered phrase variations across different proficiency levels. Perfect for learners, educators, and professionals.',
  keywords:
    'language learning, AI language assistant, CEFR levels, language proficiency, translation tool, GradeLingo',
  authors: [{ name: 'GradeLingo' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gradelingo.com',
    title: 'GradeLingo - AI Language Learning Assistant',
    description: 'Master language proficiency with AI-powered learning tools',
    siteName: 'GradeLingo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GradeLingo - AI Language Learning Assistant',
    description: 'Master language proficiency with AI-powered learning tools',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="icon" href="/gradelingo-favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
