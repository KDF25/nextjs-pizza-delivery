import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PIZZA DELIVERY  | Главная',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      DASHBOARD HEADER
      {children}
    </main>
  );
}
