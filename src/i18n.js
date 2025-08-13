import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'id'];
export const defaultLocale = 'id';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale parameter is valid
  const validatedLocale = locales.includes(locale) ? locale : defaultLocale;
  
  try {
    const messages = (await import(`./messages/${validatedLocale}.json`)).default;
    
    return {
      locale: validatedLocale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale "${validatedLocale}":`, error);
    
    // Fallback to default locale
    try {
      const fallbackMessages = (await import(`./messages/${defaultLocale}.json`)).default;
      return {
        locale: defaultLocale,
        messages: fallbackMessages,
      };
    } catch (fallbackError) {
      console.error(`Failed to load fallback messages for locale "${defaultLocale}":`, fallbackError);
      return {
        locale: defaultLocale,
        messages: {},
      };
    }
  }
});