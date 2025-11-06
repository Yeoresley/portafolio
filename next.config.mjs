const nextConfig = {
  experimental: { appDir: true },
  i18n: { locales: ['es','en'], defaultLocale: 'es' },
  typescript: { ignoreBuildErrors: true }, // temporal
  eslint: { ignoreDuringBuilds: true }     // opcional
};
export default nextConfig;
