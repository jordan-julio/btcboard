// src/app/[locale]/about/layout.js
export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  return {
    title: locale === 'id' 
      ? 'Tentang BTC Board - Perusahaan Papan PVC Terpercaya' 
      : 'About BTC Board - Trusted PVC Board Company',
    description: locale === 'id' 
      ? 'Pelajari lebih lanjut tentang BTC Board, perusahaan terpercaya yang menyediakan solusi papan PVC berkualitas tinggi untuk berbagai kebutuhan industri dan konstruksi sejak didirikan.'
      : 'Learn more about BTC Board, a trusted company providing high-quality PVC board solutions for various industrial and construction needs since our founding. Discover our mission and values.',
    keywords: locale === 'id'
      ? ['tentang BTC Board', 'perusahaan papan PVC', 'sejarah BTC Board', 'visi misi BTC Board', 'profil perusahaan']
      : ['about BTC Board', 'PVC board company', 'BTC Board history', 'company profile', 'BTC Board mission'],
    alternates: {
      canonical: `https://btc-board.com/${locale}/about`,
      languages: {
        'en': 'https://btc-board.com/en/about',
        'id': 'https://btc-board.com/id/about',
      },
    },
    openGraph: {
      title: locale === 'id' 
        ? 'Tentang BTC Board - Perusahaan Papan PVC Terpercaya' 
        : 'About BTC Board - Trusted PVC Board Company',
      description: locale === 'id' 
        ? 'Pelajari lebih lanjut tentang BTC Board, perusahaan terpercaya yang menyediakan solusi papan PVC berkualitas tinggi.'
        : 'Learn more about BTC Board, a trusted company providing high-quality PVC board solutions.',
      url: `https://btc-board.com/${locale}/about`,
      siteName: 'BTC Board',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og.png', // Create this image specific to about page
          width: 1200,
          height: 630,
          alt: locale === 'id' ? 'Tentang BTC Board' : 'About BTC Board',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'id' 
        ? 'Tentang BTC Board - Perusahaan Papan PVC Terpercaya' 
        : 'About BTC Board - Trusted PVC Board Company',
      description: locale === 'id' 
        ? 'Pelajari lebih lanjut tentang BTC Board, perusahaan terpercaya yang menyediakan solusi papan PVC berkualitas tinggi.'
        : 'Learn more about BTC Board, a trusted company providing high-quality PVC board solutions.',
    },
  };
}

export default function AboutLayout({ children }) {
  return <>{children}</>;
}