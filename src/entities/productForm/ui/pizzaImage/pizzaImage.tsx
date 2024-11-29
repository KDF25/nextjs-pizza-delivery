import { cn } from '@/shared/lib';
import { FC } from 'react';
import styles from './pizzaImage.module.scss';

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

export const PizzaImage: FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <img
        src={imageUrl}
        alt="Logo"
        className={`${styles.image} ${size === 20 ? styles.size20 : ''} ${size === 30 ? styles.size30 : ''} ${size === 40 ? styles.size40 : ''}`}
      />

      <div className={styles.outerCircle} />
      <div className={styles.innerCircle} />
    </div>
  );
};
