import { cn } from '@/shared/lib';
import { FC } from 'react';

interface Props {
  src: string;
  className?: string;
}

export const Image: FC<Props> = ({ src, className }) => {
  return (
    <img
      className={cn('w-[60px] h-[60px]', className)}
      src={src}
      alt="cart item"
    />
  );
};
