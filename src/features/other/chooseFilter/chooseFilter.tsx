import { FilterCheckbox } from '@shared/ui';
import { FC } from 'react';
import styles from './chooseFilter.module.scss';

export const ChooseFilter: FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Фильтрация</p>
      <div className={styles.checkbox__wrapper}>
        <FilterCheckbox text="Можно Выбирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
    </div>
  );
};
