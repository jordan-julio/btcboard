'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale) => {
    // Remove current locale from pathname and add new one
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {locale === 'en' ? 'EN' : 'ID'}
        </span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button
          onClick={() => switchLanguage('en')}
          className={`w-full px-4 py-2 text-left hover:bg-gray-50 rounded-t-lg transition-colors ${
            locale === 'en' ? 'bg-blue-50 text-blue-600' : ''
          }`}
        >
          English
        </button>
        <button
          onClick={() => switchLanguage('id')}
          className={`w-full px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg transition-colors ${
            locale === 'id' ? 'bg-blue-50 text-blue-600' : ''
          }`}
        >
          Indonesia
        </button>
      </div>
    </div>
  );
}