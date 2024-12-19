import { Header } from '@shared/layouts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PIZZA DELIVERY  | Корзина',
  description: '',
};

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Header classname="border-gray-200" hasSearch={false} hasCart={false}/>
      {children}
    </main>
  );
}
