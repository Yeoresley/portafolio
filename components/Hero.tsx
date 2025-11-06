import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-sky-100" />
      <div className="container py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {t('hero.title')} <span className="text-sky-700">{t('hero.subtitle')}</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">{t('hero.body')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary">Ver Productos</Link>
            <Link href="/contact" className="btn-outline">Habla con ventas</Link>
          </div>
        </div>
        <div className="relative">
          <div className="card shadow-xl">
            <div className="grid grid-cols-2 gap-4 text-center">
              {[['+20','Reportes'],['Multi','Entidad'],['ETL','Finanzas'],['Riesgos','& SCI']].map(([a,b]) => (
                <div key={a} className="rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="text-3xl font-bold">{a}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">{b}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-slate-600">Integraciones: Excel/CSV, motores SQL, despliegue en infraestructura del cliente.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
