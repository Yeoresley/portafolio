import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="border-t border-slate-100 mt-12">
      <div className="container py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} ASSI S.U.R.L. — Todos los derechos reservados.</div>
        <div className="flex items-center gap-3">
          <Link className="hover:text-sky-700" href="/products">{t('nav.products')}</Link>
          <Link className="hover:text-sky-700" href="/about">{t('nav.about')}</Link>
          <Link className="hover:text-sky-700" href="/blog">{t('nav.blog')}</Link>
          <Link className="hover:text-sky-700" href="/contact">{t('nav.contact')}</Link>
        </div>
      </div>
    </footer>
  );
}
