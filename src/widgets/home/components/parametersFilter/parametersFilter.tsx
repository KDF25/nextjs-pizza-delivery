import { Filters } from '@features/filters';
import { FC } from 'react';
import styles from './parametersFilter.module.scss';

export const ParametersFilter: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Filters />
    </div>
  );
};
