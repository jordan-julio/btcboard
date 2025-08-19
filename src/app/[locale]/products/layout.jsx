// src/app/[locale]/products/layout.js
export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  return {
    title: locale === 'id' 
      ? 'Produk BTC Board - Papan PVC Berkualitas Tinggi & Harga Terbaik' 
      : 'BTC Board Products - High-Quality PVC Boards & Best Prices',
    description: locale === 'id' 
      ? 'Jelajahi rangkaian lengkap produk papan PVC BTC Board untuk konstruksi, signage, dan aplikasi industri. Kualitas premium dengan harga kompetitif, tersedia berbagai ukuran dan ketebalan.'
      : 'Explore our complete range of BTC Board PVC products for construction, signage, and industrial applications. Premium quality at competitive prices, available in various sizes and thicknesses.',
    keywords: locale === 'id'
      ? ['produk BTC Board', 'papan PVC', 'harga papan PVC', 'ukuran papan PVC', 'katalog produk', 'jenis papan PVC', 'spesifikasi produk']
      : ['BTC Board products', 'PVC boards', 'PVC board prices', 'PVC board sizes', 'product catalog', 'PVC board types', 'product specifications'],
    alternates: {
      canonical: `https://btc-board.com/${locale}/products`,
      languages: {
        'en': 'https://btc-board.com/en/products',
        'id': 'https://btc-board.com/id/products',
      },
    },
    openGraph: {
      title: locale === 'id' 
        ? 'Produk BTC Board - Papan PVC Berkualitas Tinggi' 
        : 'BTC Board Products - High-Quality PVC Boards',
      description: locale === 'id' 
        ? 'Jelajahi rangkaian lengkap produk papan PVC BTC Board untuk konstruksi, signage, dan aplikasi industri.'
        : 'Explore our complete range of BTC Board PVC products for construction, signage, and industrial applications.',
      url: `https://btc-board.com/${locale}/products`,
      siteName: 'BTC Board',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og.png', // Create this image specific to products page
          width: 1200,
          height: 630,
          alt: locale === 'id' ? 'Produk BTC Board' : 'BTC Board Products',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'id' 
        ? 'Produk BTC Board - Papan PVC Berkualitas Tinggi' 
        : 'BTC Board Products - High-Quality PVC Boards',
      description: locale === 'id' 
        ? 'Jelajahi rangkaian lengkap produk papan PVC BTC Board.'
        : 'Explore our complete range of BTC Board PVC products.',
    },
  };
}

export default function ProductsLayout({ children }) {
  return <>{children}</>;
}