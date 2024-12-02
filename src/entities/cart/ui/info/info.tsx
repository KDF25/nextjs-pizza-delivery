import { cn } from '@/shared/lib';
import { FC } from 'react';
import styles from './info.module.scss';

interface Props {
  name: string;
  details: string;
  className?: string;
}

export const Info: FC<Props> = ({ name, details, className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.text}>
        <p>{name}</p>
      </div>
      {details && <p className={styles.details}>{details}</p>}
    </div>
  );
};
