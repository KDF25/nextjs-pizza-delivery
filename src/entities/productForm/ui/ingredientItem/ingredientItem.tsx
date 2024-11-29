import { CircleCheck } from 'lucide-react';
import React from 'react';
import styles from './ingredientItem.module.scss';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  className,
  active,
  price,
  name,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${active ? styles.active : ''} ${className || ''}`}
      onClick={onClick}
    >
      {active && <CircleCheck className={styles.icon} />}
      <img width={110} height={110} src={imageUrl} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price} ₽</span>
    </div>
  );
};
