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
  title: "My PWA App",
  description: "My progressive web app built with Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#000000" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/icon-192x192.png" },
  ],
};
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
