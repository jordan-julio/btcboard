'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (newLocale) => {
    if (newLocale === locale) return; // Don't switch if already on this locale
    
    startTransition(() => {
      // More robust path construction
      const segments = pathname.split('/').filter(Boolean);
      
      // Check if first segment is a locale
      const currentLocaleInPath = ['en', 'id'].includes(segments[0]) ? segments[0] : null;
      
      let newPath;
      if (currentLocaleInPath) {
        // Replace existing locale
        segments[0] = newLocale;
        newPath = `/${segments.join('/')}`;
      } else {
        // Add locale to path that doesn't have one
        newPath = `/${newLocale}${pathname}`;
      }
      
      // Ensure we don't have double slashes
      newPath = newPath.replace(/\/+/g, '/');
      
      router.push(newPath);
      router.refresh(); // Force a refresh to ensure locale changes take effect
    });
  };

  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50" 
        disabled={isPending}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {locale === 'en' ? 'EN' : 'ID'}
        </span>
        {isPending && <span className="text-xs">(switching...)</span>}
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button
          onClick={() => switchLanguage('en')}
          disabled={isPending}
          className={`w-full px-4 py-2 text-left hover:bg-gray-50 rounded-t-lg transition-colors disabled:opacity-50 ${
            locale === 'en' ? 'bg-blue-50 text-blue-600' : ''
          }`}
        >
          English
        </button>
        <button
          onClick={() => switchLanguage('id')}
          disabled={isPending}
          className={`w-full px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg transition-colors disabled:opacity-50 ${
            locale === 'id' ? 'bg-blue-50 text-blue-600' : ''
          }`}
        >
          Indonesia
        </button>
      </div>
    </div>
  );
}