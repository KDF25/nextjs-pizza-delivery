'use client';

import { IProductCard, useCategoryStore } from '@entities/home';
import { ProductCard } from '@entities/home/ui/productCard';
import { FC, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import styles from './productCardList.module.scss';

interface ProductCardListProps {
  title: string;
  items: IProductCard[];
  categoryId: number;
}

export const ProductCardList: FC<ProductCardListProps> = ({
  categoryId,
  title,
  items,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={styles.wrapper} id={title} ref={intersectionRef}>
      <p className={styles.title}>{title}</p>
      <div className={styles.cards}>
        {items.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};