import { FC, ReactNode } from 'react';
import styles from './details.module.scss';

interface Props {
  title?: ReactNode;
  value?: ReactNode;
  className?: string;
}

export const CartItemDetails: FC<Props> = ({ title, value, className }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <span className={styles.title}>
        {title}
        <div className={styles.divider} />
      </span>

      <span className={styles.value}>{value}</span>
    </div>
  );
};
