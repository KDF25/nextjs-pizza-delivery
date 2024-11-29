import { cn } from '@/shared/lib';
import { Button } from '@shared/ui';
import Image from 'next/image';
import React from 'react';
import styles from './chooseProductForm.module.scss';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  onSubmit,
  className,
  loading,
}) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={name}
          className={styles.image}
          width={350}
          height={350}
        />
      </div>

      <div className={styles.details}>
        <p className={styles.title}>{name}</p>
        <Button loading={loading} onClick={onSubmit} className={styles.button}>
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
