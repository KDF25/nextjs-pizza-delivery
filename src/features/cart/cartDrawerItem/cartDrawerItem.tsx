import {
  CartItemProps,
  CountButton,
  counterAction,
  Image,
  Info,
  Price,
} from '@entities/cart';
import { Trash2Icon } from 'lucide-react';
import { FC } from 'react';
import styles from './cartDrawerItem.module.scss';

interface Props extends CartItemProps {
  onClickCountButton?: (type: counterAction) => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CartDrawerItem: FC<Props> = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  disabled,
  onClickCountButton,
  onClickRemove,
  className,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${disabled ? styles.disabled : ''} ${className}`}
    >
      <Image src={imageUrl} />

      <div className={styles.content}>
        <Info name={name} details={details} />

        <hr className="my-3" />

        <div className={styles.actions}>
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className={styles.price}>
            <Price value={price} />
            <Trash2Icon
              onClick={onClickRemove}
              className={styles.trash__icon}
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
