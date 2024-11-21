'use client';

import { useCategoryStore } from '@entities/home';
import { CATEGORIES } from '@shared/config';
import { FC } from 'react';
import styles from './categories.module.scss';

interface CategoriesProps {
  props?: string;
}

export const Categories: FC<CategoriesProps> = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={styles.wrapper}>
      {CATEGORIES.map((cat, index) => (
        <a
          href={`/#${cat.name}`}
          className={categoryActiveId === index + 1 ? styles.active : ''}
          key={index}
        >
          <button>{cat.name}</button>
        </a>
      ))}
    </div>
  );
};
