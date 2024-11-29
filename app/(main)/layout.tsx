import { Header } from '@shared/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PIZZA DELIVERY  | Главная',
  description: '',
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
      <Header />
      {children}
      {modal}
    </main>
  );
}
