import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GradeLingo',
    short_name: 'GradeLingo',
    description: 'AI-powered language learning assistant',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/gradelingo-icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/gradelingo-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}