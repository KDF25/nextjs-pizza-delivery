import { Providers } from '@app/providers';
import '@shared/styles/globals.scss';
import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Head from 'next/head';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});
export const metadata: Metadata = {
  title: 'Pizza Rush',
  description: 'Быстрая и вкусная доставка пиццы прямо к вашему порогу.',
  manifest: '/manifest.json',
  keywords: ['pizza', 'delivery', 'fast', 'fast delivery', 'pizza delivery'],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html prefix="og: http://ogp.me/ns#" lang="ru">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${nunito.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
