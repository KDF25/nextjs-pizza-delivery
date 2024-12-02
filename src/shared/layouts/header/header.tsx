import { SearchInput } from '@features/other';
import { Button, Container } from '@shared/ui';
import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CartButton } from './components';
import styles from './header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <Container className={styles.container}>
        <Link href={'/'} className={styles.left}>
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div className={styles.text}>
            <h1 className={styles.title}>Next Pizza</h1>
            <p className={styles.subtitle}>вкусней уже некуда</p>
          </div>
        </Link>

        <div className={styles.search}>
          <SearchInput />
        </div>

        <div className={styles.right}>
          <Button variant="outline" className={styles.user}>
            <User size={16} />
            <p>Войти</p>
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  );
};
