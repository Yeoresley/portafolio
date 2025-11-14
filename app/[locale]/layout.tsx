import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import '../globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'ASSI S.U.R.L. — Software para decisiones con menos fricción',
  description: 'Empresa de aplicaciones, soluciones y servicios informáticos.',
  openGraph: { title: 'ASSI S.U.R.L.', description: 'Tu visión, nuestro futuro.', type: 'website', images: ['/assets/assi-og.png'] },
  robots: { index: true, follow: true }
};

// Preconstruye /es y /en (evita 500 por rutas no generadas)
export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default function LocaleLayout({
  children, params
}: { children: React.ReactNode; params: { locale: string } }) {
  const messages = useMessages();
  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
