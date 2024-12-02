import { CountButtonProps, counterAction } from '@entities/cart';
import { cn } from '@shared/lib';
import { CountIconButton } from '@shared/ui';
import { FC } from 'react';
import styles from './countButton.module.scss';

export const CountButton: FC<CountButtonProps> = ({
  className,
  onClick,
  value = 1,
  size = 'sm',
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <CountIconButton
        onClick={() => onClick?.(counterAction.minus)}
        disabled={value === 1}
        size={size}
        type={counterAction.minus}
      />

      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>

      <CountIconButton
        onClick={() => onClick?.(counterAction.plus)}
        size={size}
        type={counterAction.plus}
      />
    </div>
  );
};
