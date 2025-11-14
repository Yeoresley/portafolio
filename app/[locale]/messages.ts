import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  // OJO con la ruta relativa; debe existir messages/en.json y messages/es.json
  messages: (await import(`../../messages/${locale}.json`)).default
}));

