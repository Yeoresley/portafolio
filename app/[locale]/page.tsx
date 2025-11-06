import Hero from '../../components/Hero';
import ProductsGrid from '../../components/ProductsGrid';
import { useTranslations } from 'next-intl';

export default function Page(){
  const t = useTranslations();
  return (
    <>
      <Hero />
      <section className="container py-14" id="productos">
        <h2 className="text-2xl md:text-3xl font-bold">{t('products.title')}</h2>
        <p className="mt-2 text-slate-600">{t('products.subtitle')}</p>
        <div className="mt-8"><ProductsGrid /></div>
      </section>
    </>
  );
}
