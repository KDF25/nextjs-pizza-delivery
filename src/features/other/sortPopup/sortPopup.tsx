import { cn } from '@shared/lib';
import { ArrowUpDown } from 'lucide-react';
import { FC } from 'react';
import styles from './sortPopup.module.scss';

interface SortPopupProps {
  className?: string;
}

export const SortPopup: FC<SortPopupProps> = ({ className }) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className={styles.popular}>популярное</b>
    </div>
  );
};
