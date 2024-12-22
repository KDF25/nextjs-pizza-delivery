import { Providers } from '@app/providers';
import '@shared/styles/globals.scss';
import { Nunito } from 'next/font/google';
import Head from 'next/head';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html prefix="og: http://ogp.me/ns#">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${nunito.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
