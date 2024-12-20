import { X } from 'lucide-react';
import { FC } from 'react';
import styles from './clearButton.module.scss';

interface Props {
  className?: string;
  onClick?: VoidFunction;
}

export const ClearButton: FC<Props> = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={`${styles.wrapper} ${className}`}>
      <X className={styles.icon} />
    </button>
  );
};
