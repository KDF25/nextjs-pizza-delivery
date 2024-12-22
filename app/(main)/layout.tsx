import { Header } from '@shared/layouts/header';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'PizzaRush',
  description:
    'PizzaRush - Быстрая и вкусная доставка пиццы прямо к вашему порогу.',
  metadataBase: new URL(process.env.NEXT_BASE_URL || ''),
  openGraph: {
    title: 'PizzaRush',
    description:
      'PizzaRush - Ваш лучший выбор для горячей, свежей и вкусной пиццы с быстрой доставкой. Наслаждайтесь лучшими вкусами у себя дома!',
    url: process.env.NEXT_BASE_URL,
    siteName: 'PizzaRush',
    images: [
      {
        url: '/pizzaOG.png',
        width: 800,
        height: 600,
        alt: 'PizzaRush',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
  },
};

export default function MainLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header />
      </Suspense>
      {children}
      {modal}
    </main>
  );
}
