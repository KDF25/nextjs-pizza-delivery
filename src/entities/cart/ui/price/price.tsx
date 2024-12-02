import { cn } from '@/shared/lib';
import { FC } from 'react';

interface Props {
  value: number;
  className?: string;
}

export const Price: FC<Props> = ({ value, className }) => {
  return <h2 className={cn('font-bold', className)}>{value} ₽</h2>;
};
