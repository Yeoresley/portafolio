'use client';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === 'es' ? 'en' : 'es';
  const switchHref = '/' + otherLocale + (pathname?.replace(/^\/(es|en)/,'') || '');

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/assi-logo.png" alt="ASSI S.U.R.L." className="h-10 w-auto" />
          <div className="leading-tight">
            <p className="font-bold tracking-wide">ASSI S.U.R.L.</p>
            <p className="text-xs uppercase text-slate-500">Tu visión, nuestro futuro</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/products" className="hover:text-sky-700">{t('nav.products')}</Link>
          <Link href="/about" className="hover:text-sky-700">{t('nav.about')}</Link>
          <Link href="/cases" className="hover:text-sky-700">{t('nav.cases')}</Link>
          <Link href="/blog" className="hover:text-sky-700">{t('nav.blog')}</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded-xl bg-sky-600 text-white hover:bg-sky-700">{t('cta.demo')}</Link>
          <Link href={switchHref} className="border px-2 py-1 rounded-lg">{otherLocale.toUpperCase()}</Link>
        </nav>
      </div>
    </header>
  );
}
