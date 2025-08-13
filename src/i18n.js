// i18n.js
import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

const VALID = ['en', 'id'];
const DEFAULT_LOCALE = 'id'; // Changed to 'id' since that's your primary

function extractFromPath(input) {
  try {
    const path = input.startsWith('http') ? new URL(input).pathname : input;
    const m = path.match(/^\/(en|id)(\/|$)/i);
    return m?.[1]?.toLowerCase();
  } catch {
    return undefined;
  }
}

export default getRequestConfig(async ({ locale, requestHeaders }) => {
  let current = locale;

  if (!current) {
    const h = requestHeaders ?? (await headers());
    const pathname =
      h.get('x-pathname') ||
      h.get('referer') ||
      '';
    current = extractFromPath(pathname);
  }

  const finalLocale = VALID.includes(current) ? current : DEFAULT_LOCALE;

  try {
    // Make sure this path is correct relative to i18n.js
    const messages = (await import(`./messages/${finalLocale}.json`)).default;
    return { locale: finalLocale, messages };
  } catch (error) {
    console.error('i18n.js - Error loading messages:', error);
    try {
      const fallback = (await import(`./messages/${DEFAULT_LOCALE}.json`)).default;
      return { locale: DEFAULT_LOCALE, messages: fallback };
    } catch (fallbackError) {
      console.error('i18n.js - Fallback also failed:', fallbackError);
      return { locale: DEFAULT_LOCALE, messages: {} };
    }
  }
});