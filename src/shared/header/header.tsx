import { Button, Container } from '@shared/ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import styles from './header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div className={styles.text}>
            <h1 className={styles.title}>Next Pizza</h1>
            <p className={styles.subtitle}>вкусней уже некуда</p>
          </div>
        </div>
        <div className={styles.right}>
          <Button variant="outline" className={styles.user}>
            <User size={16} />
            <p>Войти</p>
          </Button>
          <div>
            <Button className={styles.cart}>
              <p>520 p</p>
              <span className={styles.border} />
              <div className={styles.items}>
                <ShoppingCart
                  className={styles.icon}
                  size={16}
                  strokeWidth={2}
                />
                <b>3</b>
              </div>
              <ArrowRight size={20} className={styles.arrow} />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
