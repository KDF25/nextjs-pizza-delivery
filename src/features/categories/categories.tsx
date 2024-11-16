import { FC } from 'react';
import styles from './categories.module.scss';

interface CategoriesProps {
  props?: string;
}

const cats = ['Пиццы', 'Комбо', 'Закуски'];
const activeIndex = 0;

export const Categories: FC<CategoriesProps> = () => {
  return (
    <div className={styles.wrapper}>
      {cats.map((cat, index) => (
        <a
          href=""
          className={activeIndex === index ? styles.active : ''}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
