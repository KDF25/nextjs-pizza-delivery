import { cn } from '@/shared/lib';
import { FC } from 'react';

interface Props {
  text: string;
  className?: string;
}

export const ErrorText: FC<Props> = ({ text, className }) => {
  return <p className={cn('text-red-500 text-sm', className)}>{text}</p>;
};
