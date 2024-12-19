import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './block.module.scss';

interface Props {
  title?: string;
  endAdornment?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export const WhiteBlock: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  endAdornment,
  className,
  contentClassName,
  children,
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {title && (
        <div className={styles.title__wrapper}>
          <p className={styles.title}>{title}</p>
          {endAdornment}
        </div>
      )}
      <div className={cn(styles.content, contentClassName)}>{children}</div>
    </div>
  );
};
