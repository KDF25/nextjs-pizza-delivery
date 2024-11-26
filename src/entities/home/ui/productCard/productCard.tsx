import { IProductCard } from '@entities/home';
import { cn } from '@shared/lib';
import { Button } from '@shared/ui';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './productCard.module.scss';

interface ProductCardProps {
  item: IProductCard;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({ item, className }) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <Link href={`/product/${item?.id}`} className={styles.card}>
        <div className={styles.logo}>
          <Image src={item?.imageUrl} alt="product" width={215} height={215} />
        </div>
        <p className={styles.title}>{item?.name}</p>
        <span className={styles.text}>{item?.ingridients}</span>
        <div className={styles.bottom}>
          <span className="text-[20px]">
            от <b>300 ₽</b>
          </span>

          <Button variant="secondary" className={styles.button}>
            <Plus size={20} />
            <span>Добавить</span>
          </Button>
        </div>
      </Link>
    </div>
  );
};
