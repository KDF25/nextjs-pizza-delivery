import { cn } from '@/shared/lib';
import { FC } from 'react';

interface Props {
  className?: string;
}

export const SkeletonCartItem: FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-between gap-2', className)}>
      <div className="flex items-center gap-5">
        <div className="w-[50px] h-[50px] bg-gray-200 rounded-full animate-pulse" />
        <div className="flex flex-col gap-3">
          <h2 className="w-[100px] h-5 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-[60px] bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="h-8 w-[133px] bg-gray-200 rounded animate-pulse" />
    </div>
  );
};
