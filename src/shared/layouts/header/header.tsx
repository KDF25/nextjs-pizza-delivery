'use client';

import { SearchInput } from '@features/other';
import { ProfileButton } from '@features/other/profileButton';
import { paths } from '@shared/config';
import { cn } from '@shared/lib';
import { Container } from '@shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthModal, CartButton } from './components';
import styles from './header.module.scss';

interface HeaderProps {
  classname?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
}

export const Header: FC<HeaderProps> = ({
  classname,
  hasSearch = true,
  hasCart = true,
}) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
    }

    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace(paths.home);
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);

  return (
    <header className={cn(styles.wrapper, classname)}>
      <Container className={styles.container}>
        <Link href={'/'} className={styles.left}>
          <Image src="/logo.png" alt="Logo" priority width={35} height={35} />
          <div className={styles.text}>
            <h1 className={styles.title}>PizzaRush</h1>
            <p className={styles.subtitle}>вкусней уже некуда</p>
          </div>
        </Link>

        <div className={styles.search}>{hasSearch && <SearchInput />}</div>

        <div className={styles.right}>
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
          {hasCart && <CartButton className={styles.cart} />}
        </div>
      </Container>
    </header>
  );
};
