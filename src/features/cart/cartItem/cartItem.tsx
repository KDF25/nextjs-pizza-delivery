'use client';

import {
  CartItemProps,
  CountButton,
  counterAction,
  Image,
  Info,
  Price,
} from '@entities/cart';
import { X } from 'lucide-react';
import { FC } from 'react';
import styles from './cartItem.module.scss';

interface Props extends CartItemProps {
  onClickCountButton?: (type: counterAction) => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CheckoutItem: FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  className,
  disabled,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={`${styles.container} ${disabled ? styles.disabled : ''} ${className}`}
    >
      <div className={styles.leftSection}>
        <Image src={imageUrl} />
        <div className={styles.info}>
          <Info name={name} details={details} />
          <Price value={price} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <CountButton onClick={onClickCountButton} value={quantity} />
        <button type="button" onClick={onClickRemove}>
          <X className={styles.icon} size={20} />
        </button>
      </div>
    </div>
  );
};
