'use client';

import { useCartStore } from '@entities/cart';
import { cn } from '@shared/lib';
import { Button } from '@shared/ui';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import React from 'react';
import { CartDrawer } from '../cartDrawer';
import styles from './cartButton.module.scss';

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const [totalAmount, items, loading] = useCartStore((state) => [
    state.totalAmount,
    state.items,
    state.loading,
  ]);

  return (
    <CartDrawer>
      <div className={cn(styles.wrapper, className)}>
        <Button
          loading={loading}
          className={cn(styles.button, { [styles.loading]: loading })}
        >
          <b>{totalAmount} ₽</b>
          <span className={styles.separator} />
          <div className={styles.cart__info}>
            <ShoppingCart
              size={16}
              className={styles.cart__icon}
              strokeWidth={2}
            />
            <b>{items.length}</b>
          </div>
          <ArrowRight size={20} className={styles.arrow__icon} />
        </Button>
      </div>
    </CartDrawer>
  );
};
